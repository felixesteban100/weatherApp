// import { FaLocationArrow } from 'react-icons/Fa'
import { getDateFormated } from '../data';
import { NextDaysProps } from '../types'

function NextDays({ weatherCityDays, metricSystem, setDaySelected }: NextDaysProps) {
    return (
        <div className="w-full">
            {
                weatherCityDays?.forecast.forecastday.map((currentDayWeather, index) => {
                    return (
                        <div
                            key={currentDayWeather.date}
                        >

                            <label
                                onClick={() => setDaySelected(currentDayWeather)}
                                htmlFor="my_modal_daySelected"
                                className="btn ml-5 mt-5 text-2xl font-bold"
                            >
                                {index === 0 ? "Today at" : getDateFormated(currentDayWeather.date)}
                            </label>

                            <div className="overflow-x-scroll">
                                <div className="grid grid-rows-1 grid-flow-col gap-5 pl-5 mt-2">
                                    {
                                        currentDayWeather.hour.map((currentHour) => {
                                            return (
                                                <div key={currentHour.time} className="w-36 flex flex-col justify-center items-center bg-base-300 p-5 rounded-lg">
                                                    <p>{new Date(currentHour.time).getHours()}:00</p>
                                                    <img className='h-20' src={currentHour.condition.icon} alt="" />
                                                    {
                                                        metricSystem ?
                                                            <p>{currentHour.temp_c} °C</p>
                                                            :
                                                            <p>{currentHour.temp_f} °F</p>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default NextDays