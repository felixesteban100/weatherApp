import { AiFillCalendar } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { MainDisplayProps } from '../types';
import { getDateFormated } from '../data';
// import WeathersIcons from './WeathersIcons';

function MainDisplay({ weatherCityDays, metricSystem }: MainDisplayProps) {
    return (
        <div className="w-full bg-base-300 rounded-lg">
            <div className="stat">
                <div className="stat-title text-2xl">Current temperature</div>
                {
                    weatherCityDays ?
                        <div className="stat-value text-7xl md:text-6xl flex items-center gap-10">
                            {metricSystem ? `${weatherCityDays.current.temp_c} °C` : `${weatherCityDays.current.temp_f} °F`}
                            <img className='h-32 md:h-20' src={weatherCityDays.current.condition.icon} alt={weatherCityDays.current.condition.text} />
                        </div>
                        :
                        null
                }
                {
                    weatherCityDays ?
                        <div className="stat-desc text-2xl">{/* {weatherCityCurrentHour[0].IconPhrase} */}{weatherCityDays.current.condition.text}</div>
                        :
                        null
                }
                <div className="my-5 bg-current w-full h-1" />

                <div className="stat-title text-2xl flex items-center gap-1">
                    <AiFillCalendar className="text-2xl" />
                    <p>{getDateFormated(weatherCityDays.location.localtime)}</p>
                        
                </div>
                <div className="stat-title text-2xl flex items-center gap-1">
                    <HiLocationMarker className="text-2xl" />
                    {/* <p>{citySelected?.LocalizedName}, {citySelected?.AdministrativeArea.LocalizedName} {citySelected?.Country.LocalizedName}</p> */}
                    <div>
                        <p>{weatherCityDays?.location.name}</p>
                        <p>{weatherCityDays?.location.region}</p>
                        <p>{weatherCityDays?.location.country}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDisplay