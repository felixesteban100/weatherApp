import { ModalSeachProps } from "../types";
import SearchBar from "./SearchBar";

export default function ModalSearch({ cityWritten, setCityWritten, isFetchingCityFeatures, errorCityFeatures, isLoadingCityFeatures, cityFeatures, Search, setCitySelected }: ModalSeachProps) {
  return (
    <div>
      <input type="checkbox" id="my_modal_search" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box h-[80%]">
          <h3 className="text-lg font-bold text-center">Search</h3>
          <p className="py-4 text-center">Write the city name</p>
          {/* <div className="form-control w-full">
          <div className="dropdown input-group flex w-full">
            <div className='flex'>
              <span className="bg-base-300 rounded-l-2xl">
                {isFetchingCityFeatures && cityWritten !== "" ? <span className="loading loading-spinner loading-md"></span> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              </span>
              <input value={cityWritten} type="text" placeholder="Search…" onChange={e => setCityWritten(e.target.value)} className="bg-base-300 rounded-r-2xl p-3 w-full" />
            </div>
            {(!errorCityFeatures && !isLoadingCityFeatures && cityFeatures !== undefined && cityFeatures !== null)
              ? <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
                {cityFeatures.map((currentCity: CityFeatures) => {
                  return (
                    <li key={currentCity.Key}><a>{currentCity.LocalizedName}, {currentCity.AdministrativeArea.LocalizedName}, {currentCity.Country.EnglishName} </a></li>
                  );
                })}
              </ul>
              : null
            }
          </div>

        </div> */}
          <SearchBar
            Search={Search}
            isFetchingCityFeatures={isFetchingCityFeatures}
            cityWritten={cityWritten}
            setCityWritten={setCityWritten}
            errorCityFeatures={errorCityFeatures}
            isLoadingCityFeatures={isLoadingCityFeatures}
            cityFeatures={cityFeatures}
            inModal={true}
            setCitySelected={setCitySelected}
          />

        </div>
        <label className='modal-backdrop' htmlFor="my_modal_search">
          Close
        </label>
      </div>
    </div>
  );
}