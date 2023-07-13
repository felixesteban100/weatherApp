import { AiFillCalendar } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { MainDisplayProps } from '../types';
import { getDateFormated } from '../data';
// import WeathersIcons from './WeathersIcons';

function MainDisplay({ weatherCityDays, metricSystem }: MainDisplayProps) {
    return (
        <div className="w-full bg-base-300 rounded-lg">
            <div className='p-5'>
                <div className="stat-title text-2xl">Current temperature</div>
                <div className="stat-value text-5xl flex flex-col xl:flex-row items-center gap-10">
                    <p>{metricSystem ? `${weatherCityDays.current.temp_c} °C` : `${weatherCityDays.current.temp_f} °F`}</p>
                    <img className='h-24' src={weatherCityDays.current.condition.icon} alt={weatherCityDays.current.condition.text} />
                </div>
                <div className="stat-desc text-2xl">{/* {weatherCityCurrentHour[0].IconPhrase} */}{weatherCityDays.current.condition.text}</div>
                <div className="my-5 bg-current w-full h-1" />

                <div className="stat-title text-2xl flex items-center gap-1">
                    <AiFillCalendar className="text-2xl" />
                    <p>{getDateFormated(weatherCityDays.location.localtime)}</p>

                </div>
                <div className="stat-title text-2xl flex items-center gap-1">
                    <HiLocationMarker className="text-2xl" />
                    {/* <p>{citySelected?.LocalizedName}, {citySelected?.AdministrativeArea.LocalizedName} {citySelected?.Country.LocalizedName}</p> */}
                    <div>
                        <p className='font-bold text-4xl'>{weatherCityDays?.location.name}</p>
                        <p>{weatherCityDays?.location.region}</p>
                        <p>{weatherCityDays?.location.country}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDisplay