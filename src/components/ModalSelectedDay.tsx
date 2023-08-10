import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { /* getAirQuality,  */getDateFormated } from "../data";
import { ModalSelectedDayProps, OneHourForecast } from "../types"

function ModalSelectedDay({ daySelected, metricSystem, country, city, region }: ModalSelectedDayProps) {
    // console.log(daySelected)
    return (
        <>
            <input type="checkbox" id={`my_modal_daySelected`} className="modal-toggle" value="" />
            <label htmlFor={`my_modal_daySelected`} className="modal">
                <label htmlFor="">
                    <div className="flex flex-col gap-5 rounded-md bg-base-100 h-[95vh] w-[80vw] max-w-[80rem] overflow-y-auto overflow-x-hidden py-8">
                        <div>
                            <h3 className="text-md md:text-4xl font-bold text-center mx-auto text-primary">{`${city}`}</h3>
                            <p className="text-md md:text-4xl font-bold text-center mx-auto text-primary">{region}, {country}</p>
                            <h3 className="text-md md:text-4xl font-bold text-center mx-auto text-primary">{getDateFormated(daySelected.date)}</h3>
                        </div>

                        <div className="w-[80%] mx-auto">
                            {/* <p className='text-md md:text-2xl font-bold text-center mb-5'>Details by hour</p> */}
                            <div className="overflow-x-auto h-[50vh] mb-2">
                                <table className="table rounded-lg bg-base-200 table-pin-rows table-pin-col">
                                    <thead>
                                        <tr className="text-md md:text-2xl bg-base-200">
                                            <th>Time</th>
                                            <th>Temperature</th>
                                            <th>Feels like</th>
                                            <th>Condition Icon</th>
                                            <th>Condition</th>
                                            <th>Air Quality</th>
                                            <th>Change of rain</th>
                                            <th>Change of snow</th>
                                            <th>Huminity</th>
                                            <th>Visibility</th>
                                            <th>Pressure</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            daySelected.hour.map((currentHour: OneHourForecast) => (
                                                <tr key={currentHour.time} className="hover:bg-primary hover:text-base-100 md:text-2xl">
                                                    <th>{new Date(currentHour.time).getHours()}:00</th>
                                                    <td>{metricSystem ? `${currentHour.temp_c} °C` : `${currentHour.temp_f} °F`}</td>
                                                    <td>{metricSystem ? `${currentHour.feelslike_c} °C` : `${currentHour.feelslike_f} °F`}</td>
                                                    <td><img src={currentHour.condition.icon} alt={currentHour.condition.text} /></td>
                                                    <td>{currentHour.condition.text}</td>
                                                    {/* <td>{getAirQuality(currentHour.air_quality["us-epa-index"])}</td> I DON'T KNOW WHY THIS DOESN'T WORK :/ */}
                                                    <td>{currentHour.chance_of_rain}</td>
                                                    <td>{currentHour.chance_of_snow}</td>
                                                    <td>{currentHour.humidity}</td>
                                                    <td>{metricSystem ? `${currentHour.vis_km}KM` : `${currentHour.vis_miles}Ml`}</td>
                                                    <td>{metricSystem ? `${currentHour.pressure_in}In` : `${currentHour.pressure_mb}Mb`}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                            {/* <p className='text-md md:text-2xl font-bold text-center mb-5'>Astro details</p> */}
                            <div className="flex flex-col sm:flex-row md:flex-row xl:flex-row gap-5 md:gap-12 md:justify-center md:items-center bg-base-200 p-5 rounded-lg justify-center items-center">
                                <div className="flex flex-row gap-10">
                                    <div className="flex flex-col items-center gap-2">
                                        <BsFillSunFill className="text-xl md:text-2xl xl:text-5xl" />
                                        <p className='text-xl xl:text-2xl'>Sunrise</p>
                                        <p className='text-xl xl:text-2xl font-bold'>{daySelected.astro.sunrise}</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <BsFillMoonFill className="text-xl md:text-2xl xl:text-5xl" />
                                        <p className='text-xl xl:text-2xl'>Moonrise</p>
                                        <p className='text-xl xl:text-2xl font-bold'>{daySelected.astro.moonrise}</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-10">
                                    <div className="flex flex-col items-center gap-2">
                                        <BsFillSunFill className="text-xl md:text-2xl xl:text-5xl" />
                                        <p className='text-xl xl:text-2xl'>Sunset</p>
                                        <p className='text-xl xl:text-2xl font-bold'>{daySelected.astro.sunset}</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <BsFillMoonFill className="text-xl md:text-2xl xl:text-5xl" />
                                        <p className='text-xl xl:text-2xl'>Moonset</p>
                                        <p className='text-xl xl:text-2xl font-bold'>{daySelected.astro.moonset}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </label>


        </>
    )
}

export default ModalSelectedDay