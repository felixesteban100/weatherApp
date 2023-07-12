import { AiFillCalendar, AiFillCloud, AiFillEye } from "react-icons/ai"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { HiLocationMarker } from "react-icons/hi"
import { LiaTemperatureLowSolid } from "react-icons/lia"
import { LuWaves } from "react-icons/lu"
import { WiHumidity } from "react-icons/wi"

function LoadingDisplayWeather() {
    return (
        <div className="flex flex-col md:flex-row gap-7 pb-5 animate-pulse blur-sm">
            <div className="flex flex-col gap-2 ">
                <div className="w-full bg-base-300 rounded-lg">
                    <div className="stat">
                        <div className="stat-title text-2xl">Current temperature</div>
                        <div className="stat-value text-7xl md:text-6xl flex items-center gap-10">
                            20 °C
                            <AiFillCloud className='h-32 md:h-20' />
                        </div>

                        <div className="stat-desc text-2xl">Thunderbols</div>

                        <div className="my-5 bg-current w-full h-1" />

                        <div className="stat-title text-2xl flex items-center gap-1">
                            <AiFillCalendar className="text-2xl" />
                            <p>2020-20-02</p>
                        </div>
                        <div className="stat-title text-2xl flex items-center gap-1">
                            <HiLocationMarker className="text-2xl" />
                            <div>
                                <p>NAME</p>
                                <p>REGION</p>
                                <p>COUNTRY</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full bg-base-300 rounded-lg flex flex-col gap-1 overflow-y-scroll max-h-[52vh]">
                    <p className="ml-5 mt-5 text-2xl font-bold">1 Days forecast</p>

                    <div className="stat flex flex-col items-center gap-1 justify-between">
                        <div className="stat-desc text-xl">20-20-2020</div>
                        <div className="stat-title text-xl flex items-center gap-1 justify-between">
                            {/* <BsFillCloudHazeFill className="text-2xl" /> */}
                            <AiFillCloud className='h-32 md:h-20' />

                            <div className='flex items-center gap-3'>
                                <p>Max: 20 °C</p>
                                <p>Min: 20 °C</p>
                            </div>

                        </div>
                        <div className='bg-current h-[1px] w-[80%] mt-1' />
                    </div>

                </div>
            </div>

            <div className="w-full flex flex-col gap-5 overflow-y-scroll max-h-[90vh]">
                {/* <div className="w-full flex flex-col gap-5 "> */}
                <div className="pl-5 pr-5 w-full bg-base-300 py-5 rounded-xl">
                    <p className="text-2xl font-bold">Today's highlights</p>

                    <div className="flex flex-col gap-5">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className='bg-base-200 p-5 rounded-lg mt-5'>
                                <div className="flex gap-2 items-center  justify-between ">
                                    <p className='text-2xl'>Air Quality Index</p>
                                    <div className="bg-primary text-base-100 rounded-full p-2 text-[1rem] font-bold xl:text-xl">
                                        lOW
                                    </div>
                                </div>

                                <div className=" flex md:mt-5 items-center gap-5">
                                    {/* <BsFillCloudHazeFill className="text-6xl" /> */}
                                    {/* <div className="grid grid-cols-2 xl:grid-cols-4 gap-5"> */}
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xl">
                                            <span className="font-bold text-2xl">20</span>
                                            Carbon Monoxide (μg/m3)
                                        </p>
                                        <p className="text-xl">
                                            <span className="font-bold text-2xl">20</span>
                                            Ozone (μg/m3)
                                        </p>
                                        <p className="text-xl">
                                            <span className="font-bold text-2xl">20</span>
                                            Nitrogen dioxide (μg/m3)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:justify-center md:items-center gap-5 bg-base-200 p-5 rounded-lg">
                                <p className='text-2xl'>Sunrise and sunset</p>
                                <div className="flex flex-col md:flex-row gap-10">
                                    <div className="flex md:flex-col items-center gap-2">
                                        <BsFillSunFill className="text-5xl" />
                                        <p className='text-2xl'>Sunrise</p>
                                        <p className='text-2xl font-bold'>10:00 AM</p>
                                    </div>
                                    <div className="flex md:flex-col items-center gap-2">
                                        <BsFillMoonFill className="text-5xl" />
                                        <p className='text-2xl'>Sunset</p>
                                        <p className='text-2xl font-bold'>10:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="flex flex-col gap-5 bg-base-200 p-5 rounded-lg">
                                <p className='text-2xl'>Humidity</p>
                                <div className="flex items-center gap-5 justify-between">
                                    <WiHumidity className="text-7xl" />
                                    <p className='text-2xl'>20%</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 bg-base-200 p-5 rounded-lg">
                                <p className='text-2xl'>Pressure</p>
                                <div className="flex items-center gap-5 justify-between">
                                    <LuWaves className="text-5xl" />
                                    <p className='text-2xl'>20%</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 bg-base-200 p-5 rounded-lg">
                                <p className='text-2xl'>Visibility</p>
                                <div className="flex items-center gap-5 justify-between">
                                    <AiFillEye className="text-5xl" />
                                    <p className='text-2xl'>20KM</p>
                                    <p className='text-2xl'>20Mil</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 bg-base-200 p-5 rounded-lg">
                                <p className='text-2xl'>Feels like</p>
                                <div className="flex items-center gap-5 justify-between">
                                    <LiaTemperatureLowSolid className="text-5xl" />
                                    <p className='text-2xl'>20 °C</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-full">


                    <p className="ml-5 mt-5 text-2xl font-bold">Today at</p>


                    <div className="overflow-x-scroll">
                        <div className="grid grid-rows-1 grid-flow-col gap-5 pl-5 mt-2">
                            <div  className="w-36 flex flex-col justify-center items-center bg-base-300 p-5 rounded-lg">
                                <p>{new Date().getHours()}:00</p>
                                <BsFillSunFill className="text-2xl" />
                                <p>20 °C</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoadingDisplayWeather