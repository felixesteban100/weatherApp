import { /* BsFillCloudHazeFill, */ BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { WiHumidity } from 'react-icons/wi'
import { LuWaves } from 'react-icons/lu'
import { AiFillEye } from 'react-icons/ai'
import { LiaTemperatureLowSolid } from 'react-icons/lia'
import { FeaturesProps } from '../types'
import { getAirQuality } from '../data'

function Features({ weatherCityDays, metricSystem }: FeaturesProps) {
  return (
    <div className="pl-5 pr-5 w-full bg-base-300 py-5 rounded-xl">
      <p className="text-2xl font-bold">Today's highlights</p>

      <div className="flex flex-col gap-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className='bg-base-200 p-5 rounded-lg mt-5'>
            <div className="flex gap-2 items-center  justify-between ">
              <p className='text-2xl'>Air Quality Index</p>
              <div className="bg-primary text-base-100 rounded-full p-2 text-[1rem] font-bold xl:text-xl">
                {getAirQuality(weatherCityDays?.current.air_quality['us-epa-index'])}
              </div>
            </div>

            <div className=" flex md:mt-5 items-center gap-5">
              {/* <BsFillCloudHazeFill className="text-6xl" /> */}
              {/* <div className="grid grid-cols-2 xl:grid-cols-4 gap-5"> */}
              <div className="flex flex-col gap-1">
                <p className="text-xl">
                  <span className="font-bold text-2xl">{weatherCityDays?.current.air_quality.co.toFixed()} </span>
                  Carbon Monoxide (μg/m3)
                </p>
                <p className="text-xl">
                  <span className="font-bold text-2xl">{weatherCityDays?.current.air_quality.o3.toFixed()} </span>
                  Ozone (μg/m3)
                </p>
                <p className="text-xl">
                  <span className="font-bold text-2xl">{weatherCityDays?.current.air_quality.no2.toFixed()} </span>
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
                <p className='text-2xl font-bold'>{weatherCityDays?.forecast.forecastday[0].astro.sunrise}</p>
              </div>
              <div className="flex md:flex-col items-center gap-2">
                <BsFillMoonFill className="text-5xl" />
                <p className='text-2xl'>Sunset</p>
                <p className='text-2xl font-bold'>{weatherCityDays?.forecast.forecastday[0].astro.sunset}</p>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-5 bg-base-200 p-5 rounded-lg">
            <p className='text-2xl'>Humidity</p>
            <div className="flex items-center gap-5 justify-between">
              <WiHumidity className="text-7xl" />
              <p className='text-2xl'>{weatherCityDays?.current.humidity}%</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-base-200 p-5 rounded-lg">
            <p className='text-2xl'>Pressure</p>
            <div className="flex items-center gap-5 justify-between">
              <LuWaves className="text-5xl" />
              <p className='text-2xl'>{weatherCityDays?.current.humidity}%</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-base-200 p-5 rounded-lg">
            <p className='text-2xl'>Visibility</p>
            <div className="flex items-center gap-5 justify-between">
              <AiFillEye className="text-5xl" />
              {metricSystem ?
                <p className='text-2xl'>{weatherCityDays?.current.vis_km}KM</p>
                :
                <p className='text-2xl'>{weatherCityDays?.current.vis_miles}Mil</p>
              }
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-base-200 p-5 rounded-lg">
            <p className='text-2xl'>Feels like</p>
            <div className="flex items-center gap-5 justify-between">
              <LiaTemperatureLowSolid className="text-5xl" />
              <p className='text-2xl'>{metricSystem ? `${weatherCityDays?.current.feelslike_c} °C` : `${weatherCityDays?.current.feelslike_f} °F`}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Features