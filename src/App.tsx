import axios from 'axios';
import { useQuery } from 'react-query';
import { CityFeatures } from './types';

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import DisplayWeather from './components/DisplayWeather';
import ModalSearch from './components/ModalSearch';
import useLocalStorage from './customHooks/useLocalStorage';
import SettingsModal from './components/SettingsModal';
import { LYNN } from './data';
// import { /* LYNN, */ THEMES } from './data';

//https://www.weatherapi.com/api-explorer.aspx
//d6afa447d379417784d194539231007


//https://www.weatherapi.com/my/
//https://www.weatherapi.com/api-explorer.aspx#current

// const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)]

function App() {
  const [cityWritten, setCityWritten] = useLocalStorage("WEATHERAPP_CITYWRITTEN", "")
  const [citySelected, setCitySelected] = useLocalStorage<CityFeatures /* string */>("WEATHERAPP_CITYSELECTED", LYNN /*"" */)
  const [metricSystem, setMetricSystem] = useLocalStorage<boolean>("WEATHERAPP_METRICSYSTEM", false)
  const [howManyDays, setHowManyDays] = useLocalStorage<number>("WEATHERAPP_DAYS", 10)
  const [theme, setTheme] = useLocalStorage<string>("WEATHERAPP_THEME", "garden")


  const { isLoading: isLoadingCityFeatures, error: errorCityFeatures, data: citiesFeatures, refetch: refetchCityFeatures, isFetching: isFetchingCityFeatures } = useQuery<CityFeatures[]>({
    enabled: false,
    refetchOnMount: false,      // Disable refetch on component mount
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: ['Cities'],
    // networkMode: 'offlineFirst',
    queryFn: () => {
      return axios
        .get<CityFeatures[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${cityWritten}&limit=5&appid=da8cd7daef723af2886ff802133a80b7`)
        // .get<CityFeatures[]>(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${cityWritten}&apikey=4E3HQ37KVgWzYMVqK8RLTrdF02nAHZAC`)
        .then((response) => response.data)
    }
  })

  // console.log(citySelected)
  // console.log(citiesFeatures)

  function Search() {
    refetchCityFeatures()
  }

  function handleGetPosition() {
    // Function to handle successful position retrieval
    const successHandler = (position: GeolocationPosition) => {
      fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=da8cd7daef723af2886ff802133a80b7`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data[0] && data[0].name) {
            setCitySelected(data[0])
            setCityWritten(data[0].name);
            Search()
          } else {
            console.log('City not found');
          }
        })
        .catch((error) => {
          console.log('Error retrieving city:', error);
        });
    };

    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      // Retrieve the current position
      navigator.geolocation.getCurrentPosition(successHandler);
      Search()
    } else {
      console.log('Geolocation is not supported by your browser');
    }
  };


  return (
    <div data-theme={theme} className="min-h-screen ">
      <div className="pl-5 pr-5 ">
        <Navbar
          cityWritten={cityWritten}
          setCityWritten={setCityWritten}
          cityFeatures={citiesFeatures}
          isFetchingCityFeatures={isFetchingCityFeatures}
          errorCityFeatures={errorCityFeatures}
          isLoadingCityFeatures={isLoadingCityFeatures}
          Search={Search}
          handleGetPosition={handleGetPosition}
          setCitySelected={setCitySelected}
        />

        <DisplayWeather
          citySelected={citySelected}
          metricSystem={metricSystem}
          howManyDays={howManyDays}
        />
      </div>


      <ModalSearch
        cityWritten={cityWritten}
        setCityWritten={setCityWritten}
        isFetchingCityFeatures={isFetchingCityFeatures}
        errorCityFeatures={errorCityFeatures}
        isLoadingCityFeatures={isLoadingCityFeatures}
        cityFeatures={citiesFeatures}
        Search={Search}
        setCitySelected={setCitySelected}
      />

      <SettingsModal
        theme={theme}
        setTheme={setTheme}
        howManyDays={howManyDays}
        setHowManyDays={setHowManyDays}
        setMetricSystem={setMetricSystem}
        metricSystem={metricSystem}
      />
      <Footer />
    </div>
  )
}


export default App