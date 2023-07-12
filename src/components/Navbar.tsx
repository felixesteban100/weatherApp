import { AiFillCloud, AiOutlineSearch } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci'

import { /* CityFeatures,  */NavbarProps } from '../types';
import SearchBar from './SearchBar';

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

function Navbar({ cityWritten, setCityWritten, isFetchingCityFeatures, errorCityFeatures, isLoadingCityFeatures, cityFeatures, Search, handleGetPosition, setCitySelected }: NavbarProps) {

    return (
        <div className="grid grid-rows-1 grid-flow-col gap-4 justify-between items-center bg-base-100 pt-4 pb-4">
            <div className="flex items-center gap-2" >
                <AiFillCloud className="text-5xl" />
                <a className="normal-case text-xl font-bold">Weather App</a>
            </div>

            <div className="col-span-2" >
                <SearchBar
                    Search={Search}
                    isFetchingCityFeatures={isFetchingCityFeatures}
                    cityWritten={cityWritten}
                    setCityWritten={setCityWritten}
                    errorCityFeatures={errorCityFeatures}
                    isLoadingCityFeatures={isLoadingCityFeatures}
                    cityFeatures={cityFeatures}
                    setCitySelected={setCitySelected}
                />
            </div>

            <div className='flex gap-1'>
                <label htmlFor="my_modal_search" className="btn btn-secondary flex md:hidden lg:hidden">
                    <AiOutlineSearch className="text-2xl" />
                </label>

                <label htmlFor="my_modal_settings" className="btn btn-secondary flex">
                    <CiSettings className="text-2xl" />
                    <p className='hidden lg:block'>Settings</p>
                </label>

                <button onClick={() => handleGetPosition()} className="btn btn-primary">
                    <BiCurrentLocation className="text-2xl" />
                    <p className='hidden lg:block'>Current Location</p>
                </button>


            </div>
        </div>
    )
}

export default Navbar