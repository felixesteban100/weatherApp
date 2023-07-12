import { BsFillCloudHazeFill, BsFillSunFill } from 'react-icons/bs'
import { useWeathersIconsProps } from '../types'


function WeathersIcons({ iconNumber, classNames }: useWeathersIconsProps) {
    switch (iconNumber) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: // day sun
            return (
                <BsFillSunFill className={`text-yellow-300 ${classNames}`} />
            )

        case 6: //cloud and sun
        case 20: //	Mostly Cloudy w/ Flurries
        case 21: //	partly sunny w/ Flurries
            return (
                <BsFillCloudHazeFill />
            )

        case 7: //cloud
        case 19: // flurries
            return (
                <BsFillCloudHazeFill />
            )

        case 8: //very cloud
            return (
                <BsFillCloudHazeFill />
            )

        case 11: // fog
            return (
                <BsFillCloudHazeFill />
            )

        case 12: // showers
        case 18: // rain
            return (
                <BsFillCloudHazeFill />
            )

        case 13: // sun and showers
        case 14: // partly sun and showers
            return (
                <BsFillCloudHazeFill />
            )

        case 15: // thunderstorm
            return (
                <BsFillCloudHazeFill />
            )

        case 16: // sun and thunderstorm
            return (
                <BsFillCloudHazeFill />
            )

        case 17: // partly sun and thunderstorm
            return (
                <BsFillCloudHazeFill />
            )

        case 22: // snow
            return (
                <BsFillCloudHazeFill />
            )

        case 23: // mostly cloud w/ snow
            return (
                <BsFillCloudHazeFill />
            )

        case 24: // Ice
            return (
                <BsFillCloudHazeFill />
            )

        case 25: // Sleet
            return (
                <BsFillCloudHazeFill />
            )

        case 26: // 	Freezing Rain
            return (
                <BsFillCloudHazeFill />
            )

        case 29: // Rain and Snow
            return (
                <BsFillCloudHazeFill />
            )

        case 30: // Hot
            return (
                <BsFillCloudHazeFill />
            )

        case 31: // Cold
            return (
                <BsFillCloudHazeFill />
            )

        case 32: // Windy
            return (
                <BsFillCloudHazeFill />
            )

        case 32:
        case 33:
        case 34:
        case 35:
        case 36:// night moon
            return (
                <BsFillCloudHazeFill />
            )

        case 37:// Hazy Moonlight
            return (
                <BsFillCloudHazeFill />
            )

        case 38:// Moonlight cloudy
            return (
                <BsFillCloudHazeFill />
            )

        case 39:// Moonlight partly cloudy w/showers
            return (
                <BsFillCloudHazeFill />
            )

        case 40:// Moonlight mostly cloudy w/showers
            return (
                <BsFillCloudHazeFill />
            )

        case 41:// Moonlight partly cloudy w/thunderstorm
            return (
                <BsFillCloudHazeFill />
            )

        case 42:// Moonlight mostly cloudy w/thunderstorm
            return (
                <BsFillCloudHazeFill />
            )

        case 42:// Moonlight mostly cloudy w/flurries
            return (
                <BsFillCloudHazeFill />
            )

        case 42:// Moonlight mostly cloudy w/snow
            return (
                <BsFillCloudHazeFill />
            )


    }

    return null
}

export default WeathersIcons