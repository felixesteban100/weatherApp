import DaysDisplay from "../components/DaysDisplay"
import Features from "../components/Features"
import MainDisplay from "../components/MainDisplay"
import NextDays from "./NextDays"
import { DayForecast, DisplayWeatherProps } from "../types"
import { WeatherData } from '../types'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingDisplayWeather from "./LoadingDisplayWeather"
import ModalSelectedDay from "./ModalSelectedDay"


// https://www.youtube.com/watch?v=QMwyNnjAils&ab_channel=codewithsadee
// use this video pattern and api to create the app

//https://openweathermap.org/api

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//da8cd7daef723af2886ff802133a80b7

// I DON'T KNOW WHY BUT... NOW IT JUST DISPLAYS 3 DAYS MAXIMUM :→/

function DisplayWeather({ citySelected, metricSystem, howManyDays }: DisplayWeatherProps) {

    const [daySelected, setDaySelected] = useState<DayForecast>()

    const { isLoading: isLoadingWeatherDays, error: errorWeatherDays, data: weatherCityDays, refetch: refetchWeatherDays, isFetching: isFetchingWeatherDays } = useQuery<WeatherData>({
        enabled: false,
        refetchOnMount: false,      // Disable refetch on component mount
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        queryKey: ['CitySelectedDays'],
        // networkMode: 'offlineFirst',
        queryFn: () => {
            const query = `${citySelected?.lat},${citySelected?.lon}`
            return axios
                // .get<ApiWeatherResponse>(`https://api.openweathermap.org/data/3.0/onecall?lat=${citySelected?.lat}&lon=${citySelected?.lon}&appid=da8cd7daef723af2886ff802133a80b7`)
                // .get<HourlyForecast>(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${citySelected?.Key}?apikey=4E3HQ37KVgWzYMVqK8RLTrdF02nAHZAC&metric=true`)
                .get<WeatherData>(`http://api.weatherapi.com/v1/forecast.json?key=d6afa447d379417784d194539231007&q=${query}&days=${howManyDays}&aqi=yes&alerts=no`)
                .then((response) => response.data)
        }
    })

    // console.log(daySelected)

    useEffect(() => {
        refetchWeatherDays()
    }, [howManyDays, citySelected])

    if (isLoadingWeatherDays || isFetchingWeatherDays) {
        return (
            <div className="min-h-screen">
                <LoadingDisplayWeather />
            </div>
        )
    }

    if (citySelected === undefined || weatherCityDays === undefined) {
        return (
            <div className="min-h-screen">
                PLEASE SEARCH FOR A CITY
            </div>
        )
    }

    if (errorWeatherDays) {
        return (
            <div className="min-h-screen">
                ERROR
            </div>
        )
    }

    return (
        <div className="flex flex-col md:flex-row gap-7 pb-5">
            {/* <div className="flex flex-col gap-2 md:max-h-[20vh]"> */}
            <div className="flex flex-col gap-2">
                <MainDisplay
                    // citySelected={citySelected}
                    weatherCityDays={weatherCityDays}
                    metricSystem={metricSystem}
                />
                <DaysDisplay
                    weatherCityDays={weatherCityDays}
                    metricSystem={metricSystem}
                    howManyDays={howManyDays}
                    setDaySelected={setDaySelected}
                />
            </div>

            <div className="w-full flex flex-col gap-5 overflow-visible md:overflow-y-scroll max-h-none md:max-h-[90vh]">
                {/* <div className="w-full flex flex-col gap-5 "> */}
                <Features
                    weatherCityDays={weatherCityDays}
                    metricSystem={metricSystem}
                />
                <NextDays
                    weatherCityDays={weatherCityDays}
                    metricSystem={metricSystem}
                    setDaySelected={setDaySelected}
                />
            </div>

            {
                daySelected !== undefined &&
                <ModalSelectedDay
                    country={weatherCityDays.location.country}
                    region={weatherCityDays.location.region}
                    city={weatherCityDays.location.name}
                    daySelected={daySelected}
                    metricSystem={metricSystem}
                />
            }


        </div>
    )
}

export default DisplayWeather


/* const { isLoading: isLoadingWeather1Day, error: errorWeather1Day, data: weatherCity1Day, refetch: refetchWeather1Day, isFetching: isFetchingWeather1Day } = useQuery<WeatherDay1Response>({
        enabled: citySelected !== undefined,
        refetchOnMount: false,      // Disable refetch on component mount
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        queryKey: ['CitySelectedToday'],
        // networkMode: 'offlineFirst',
        queryFn: () => {
            return axios
                // .get<ApiWeatherResponse>(`https://api.openweathermap.org/data/3.0/onecall?lat=${citySelected?.lat}&lon=${citySelected?.lon}&appid=da8cd7daef723af2886ff802133a80b7`)
                //https://api.openweathermap.org/data/3.0/onecall?lat=52.7538673&lon=0.3954774&appid=da8cd7daef723af2886ff802133a80b7
                .get<WeatherDay1Response>(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${citySelected?.Key}?apikey=4E3HQ37KVgWzYMVqK8RLTrdF02nAHZAC`)
                .then((response) => response.data)
        }
    }) 
    
    if (isLoadingWeather1Day || isFetchingWeather1Day) {
        <div className="flex gap-5">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (errorWeather1Day || !weatherCity1Day) {
        return (
            <div>
                Error
            </div>
        )
    }
    
    */