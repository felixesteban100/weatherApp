import { getDateFormated } from '../data';
import { DaysDisplayProps } from '../types'


function DaysDisplay({ weatherCityDays, metricSystem, howManyDays, setDaySelected }: DaysDisplayProps) {
    return (
        <div className="w-full bg-base-300 rounded-lg flex flex-col gap-3 overflow-visible md:overflow-y-scroll max-h-none md:max-h-[52vh] pb-5">
            <p className="ml-5 mt-5 text-2xl font-bold">{howManyDays} Days forecast</p>
            {
                weatherCityDays?.forecast.forecastday.map((currentDayWeather) => {
                    return (
                        <label 
                            key={currentDayWeather.date} 
                            className="cursor-pointer  bg-base-100 w-[80%] rounded-xl mx-auto hover:bg-primary hover:text-base-100 active:bg-primary active:text-base-100 stat flex flex-col items-center gap-1 justify-between"
                            onClick={() => setDaySelected(currentDayWeather)}
                            htmlFor="my_modal_daySelected"
                        >
                            <div className="stat-desc text-inherit text-xl">{getDateFormated(currentDayWeather.date)}</div>
                            <div className="stat-title text-inherit text-xl flex items-center gap-1 justify-between">
                                <img src={currentDayWeather.day.condition.icon} alt="" />
                                {
                                    metricSystem ?
                                        <div className='flex flex-col items-center gap-3'>
                                            <p>Max: {currentDayWeather.day.maxtemp_c} °C</p>
                                            <p>Min: {currentDayWeather.day.mintemp_c} °C</p>
                                        </div>
                                        :
                                        <div className='flex flex-col items-center gap-3'>
                                            <p>Max: {currentDayWeather.day.maxtemp_f} °F</p>
                                            <p>Min: {currentDayWeather.day.mintemp_f} °F</p>
                                        </div>
                                }
                            </div>
                            <div className='bg-current h-[1px] w-[80%] mt-1' />
                        </label>
                    )
                })
            }
        </div>
    )
}

export default DaysDisplay