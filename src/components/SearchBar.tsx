import { CityFeatures, SearchProps } from '../types';


export default function SearchBar({ Search, isFetchingCityFeatures, cityWritten, setCityWritten, errorCityFeatures, isLoadingCityFeatures, cityFeatures, inModal, setCitySelected }: SearchProps) {
  return (<div className="form-control w-full">
    <div className={`dropdown active:dropdown-open hover:dropdown-open input-group ${inModal ? "flex" : "hidden md:block lg:block"} `}>
      <div className='w-full'>
        <div className={`flex `}>
          <span onClick={() => {
            Search()
          }} className="cursor-pointer bg-base-300 rounded-l-2xl">
            {isFetchingCityFeatures && cityWritten !== "" ? <span className="loading loading-spinner loading-md text-md"></span> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
          </span>
          <input value={cityWritten} type="text" placeholder="Search…" // onChange={(e) => setCityWritten(e.target.value)}
            onChange={e => {
              setCityWritten(e.target.value);
            }} className="bg-base-300 rounded-r-2xl p-3 w-full text-current" />
        </div>
        {!errorCityFeatures && !isLoadingCityFeatures && cityFeatures !== undefined && cityFeatures !== null ? <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
          {cityFeatures.map((currentCity: CityFeatures) => {
            return <li // key={currentCity.Key}
              key={`${currentCity.lat}${currentCity.lon}`} onClick={() => {
                setCitySelected(currentCity)
                //<a>{currentCity.LocalizedName}, {currentCity.AdministrativeArea.LocalizedName}, {currentCity.Country.EnglishName}</a>
              }}>
              <a className='flex'>
                <p>{currentCity.name}</p>
                <p>{currentCity.state}</p>
                <p>{currentCity.country}</p>
              </a>
            </li>;
          })}
        </ul> : null}
      </div>
    </div>

  </div>);
}