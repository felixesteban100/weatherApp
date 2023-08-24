/* export const LYNN = {
    "Version": 1,
    "Key": "338621",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Lynn",
    "EnglishName": "Lynn",
    "PrimaryPostalCode": "01902",
    "Region": {
        "ID": "NAM",
        "LocalizedName": "North America",
        "EnglishName": "North America"
    },
    "Country": {
        "ID": "US",
        "LocalizedName": "United States",
        "EnglishName": "United States"
    },
    "AdministrativeArea": {
        "ID": "MA",
        "LocalizedName": "Massachusetts",
        "EnglishName": "Massachusetts",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "US"
    },
    "TimeZone": {
        "Code": "EDT",
        "Name": "America/New_York",
        "GmtOffset": -4,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2023-11-05T06:00:00Z"
    },
    "GeoPosition": {
        "Latitude": 42.467,
        "Longitude": -70.949,
        "Elevation": {
            "Metric": {
                "Value": 34,
                "Unit": "m",
                "UnitType": 5
            },
            "Imperial": {
                "Value": 111,
                "Unit": "ft",
                "UnitType": 0
            }
        }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
        {
            "Level": 2,
            "LocalizedName": "Essex",
            "EnglishName": "Essex"
        }
    ],
    "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyAirQualityForecast",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar",
        "TidalForecast"
    ]
} */
export const LYNN = {
    country: "US",
    lat: 42.466763,
    local_names: { ru: 'Линн', en: 'Lynn' },
    lon: -70.9494939,
    name: "Lynn",
    state: "Massachusetts"
}

export const THEMES = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
]

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getAirQuality(num: number | undefined) {
    switch (num) {
        case 1:
            return "Good"

        case 2:
            return "Moderate"

        case 3:
            return "Unhealthy for sensitive group"

        case 4:
            return "Unhealthy"

        case 5:
            return "Very Unhealthy"

        case 6:
            return "Hazardous"

        default:
            return "Unknown"
    }
}

export function getDateFormated(dateSended: string) {
    const date = new Date(dateSended); // Convert to milliseconds
    const weekday = WEEKDAYS[date.getUTCDay()];
    const year = date.getUTCFullYear();
    const month = MONTHS[date.getUTCMonth()];
    const day = date.getUTCDate();

    return `${weekday}, ${month} ${day}, ${year}`;
}