/* type GeoPosition = {
  Latitude: number;
  Longitude: number;
  Elevation: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
};

type Region = {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
};

type Country = {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
};

type AdministrativeArea = {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
};

type TimeZone = {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange: string;
};

type SupplementalAdminArea = {
  Level: number;
  LocalizedName: string;
  EnglishName: string;
}; */

export type CityFeatures = {
  /* Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: Region;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
  TimeZone: TimeZone;
  GeoPosition: GeoPosition;
  IsAlias: boolean;
  SupplementalAdminAreas: SupplementalAdminArea[];
  DataSets: string[]; */
  country: string;
  lat: number;
  local_names: Record<string, string>;
  lon: number;
  name: string;
  state: string;
};


export type NavbarProps = {
  cityWritten: string;
  setCityWritten: React.Dispatch<React.SetStateAction<string>>;
  isFetchingCityFeatures: boolean;
  errorCityFeatures: unknown;
  isLoadingCityFeatures: boolean;
  cityFeatures: CityFeatures[] | undefined;
  Search: () => void;
  handleGetPosition: () => void
  setCitySelected: React.Dispatch<React.SetStateAction<CityFeatures>>
  // setHowManyDays:  React.Dispatch<React.SetStateAction<number>>
}

export type ModalSeachProps = {
  cityWritten: string;
  setCityWritten: React.Dispatch<React.SetStateAction<string>>;
  isFetchingCityFeatures: boolean;
  errorCityFeatures: unknown;
  isLoadingCityFeatures: boolean;
  cityFeatures: CityFeatures[] | undefined;
  Search: () => void;
  setCitySelected: React.Dispatch<React.SetStateAction<CityFeatures>>
}

export type SettingsModalProps = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  howManyDays: number
  setHowManyDays: React.Dispatch<React.SetStateAction<number>>
  setMetricSystem: React.Dispatch<React.SetStateAction<boolean>>
  metricSystem:  boolean
}

export type DisplayWeatherProps = {
  // citySelected: string | undefined;
  citySelected: CityFeatures | undefined;
  metricSystem: boolean;
  howManyDays: number
}

type TemperatureDay1 = {
  Value: number;
  Unit: string;
  UnitType: number;
};

type DayForecastDay1 = {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
};

type DailyForecastDay1 = {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: TemperatureDay1;
    Maximum: TemperatureDay1;
  };
  Day: DayForecastDay1;
  Night: DayForecastDay1;
  Sources: string[];
  MobileLink: string;
  Link: string;
};

type HeadlineDay1 = {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
};

export type WeatherDay1Response = {
  Headline: HeadlineDay1;
  DailyForecasts: DailyForecastDay1[];
};

/* type Temperature = {
  Value: number;
  Unit: string;
  UnitType: number;
}; */

export type HourlyForecast = /* {
  DateTime: string;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
  IsDaylight: boolean;
  Temperature: Temperature;
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
}[]; */{
  /* other */
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

export type DayForecast = {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
    air_quality: {
      co: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      "us-epa-index": number;
      "gb-defra-index": number;
    };
  };
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
    is_moon_up: number;
    is_sun_up: number;
  };
  hour: OneHourForecast[];
}

export type OneHourForecast = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  air_quality: {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    "us-epa-index": number;
    "gb-defra-index": number;
  };
}

export type MainDisplayProps = {
  // citySelected: CityFeatures | undefined;
  // citySelected: string | undefined;
  weatherCityDays: WeatherData;
  metricSystem: boolean;
}

export type DaysDisplayProps = {
  // citySelected: CityFeatures | undefined;
  // citySelected: string | undefined;
  weatherCityDays: WeatherData | undefined;
  metricSystem: boolean;
  howManyDays: number;
  setDaySelected: React.Dispatch<React.SetStateAction<DayForecast | undefined>>;
}

export type NextDaysProps = {
  // citySelected: CityFeatures | undefined;
  // citySelected: string | undefined;
  weatherCityDays: WeatherData | undefined;
  metricSystem: boolean;
  setDaySelected: React.Dispatch<React.SetStateAction<DayForecast | undefined>>;
}

export type FeaturesProps = {
  // citySelected: CityFeatures | undefined;
  // citySelected: string | undefined;
  weatherCityDays: WeatherData | undefined;
  metricSystem: boolean;
}

export type SearchProps = {
  cityWritten: string;
  setCityWritten: React.Dispatch<React.SetStateAction<string>>;
  isFetchingCityFeatures: boolean;
  errorCityFeatures: unknown;
  isLoadingCityFeatures: boolean;
  cityFeatures: CityFeatures[] | undefined;
  Search: () => void;
  inModal?: boolean;
  setCitySelected: React.Dispatch<React.SetStateAction<CityFeatures>>
}

export type ModalSelectedDayProps = {
  daySelected: DayForecast
  metricSystem: boolean;

}

export type useWeathersIconsProps = {
  iconNumber: number;
  classNames?: string;
}

export type WeatherData = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
    air_quality: {
      co: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      "us-epa-index": number;
      "gb-defra-index": number;
    };
  };
  forecast: {
    forecastday: [
      {
        date: string;
        date_epoch: number;
        day: {
          maxtemp_c: number;
          maxtemp_f: number;
          mintemp_c: number;
          mintemp_f: number;
          avgtemp_c: number;
          avgtemp_f: number;
          maxwind_mph: number;
          maxwind_kph: number;
          totalprecip_mm: number;
          totalprecip_in: number;
          totalsnow_cm: number;
          avgvis_km: number;
          avgvis_miles: number;
          avghumidity: number;
          daily_will_it_rain: number;
          daily_chance_of_rain: number;
          daily_will_it_snow: number;
          daily_chance_of_snow: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          uv: number;
          air_quality: {
            co: number;
            no2: number;
            o3: number;
            so2: number;
            pm2_5: number;
            pm10: number;
            "us-epa-index": number;
            "gb-defra-index": number;
          };
        };
        astro: {
          sunrise: string;
          sunset: string;
          moonrise: string;
          moonset: string;
          moon_phase: string;
          moon_illumination: string;
          is_moon_up: number;
          is_sun_up: number;
        };
        hour: [
          {
            time_epoch: number;
            time: string;
            temp_c: number;
            temp_f: number;
            is_day: number;
            condition: {
              text: string;
              icon: string;
              code: number;
            };
            wind_mph: number;
            wind_kph: number;
            wind_degree: number;
            wind_dir: string;
            pressure_mb: number;
            pressure_in: number;
            precip_mm: number;
            precip_in: number;
            humidity: number;
            cloud: number;
            feelslike_c: number;
            feelslike_f: number;
            windchill_c: number;
            windchill_f: number;
            heatindex_c: number;
            heatindex_f: number;
            dewpoint_c: number;
            dewpoint_f: number;
            will_it_rain: number;
            chance_of_rain: number;
            will_it_snow: number;
            chance_of_snow: number;
            vis_km: number;
            vis_miles: number;
            gust_mph: number;
            gust_kph: number;
            uv: number;
            air_quality: {
              co: number;
              no2: number;
              o3: number;
              so2: number;
              pm2_5: number;
              pm10: number;
              "us-epa-index": number;
              "gb-defra-index": number;
            };
          }
        ];
      }
    ];
  };
};

/* export type WeatherData = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
  forecast: {
    forecastday: [
      {
        date: string;
        date_epoch: number;
        day: {
          maxtemp_c: number;
          maxtemp_f: number;
          mintemp_c: number;
          mintemp_f: number;
          avgtemp_c: number;
          avgtemp_f: number;
          maxwind_mph: number;
          maxwind_kph: number;
          totalprecip_mm: number;
          totalprecip_in: number;
          totalsnow_cm: number;
          avgvis_km: number;
          avgvis_miles: number;
          avghumidity: number;
          daily_will_it_rain: number;
          daily_chance_of_rain: number;
          daily_will_it_snow: number;
          daily_chance_of_snow: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          uv: number;
        };
        astro: {
          sunrise: string;
          sunset: string;
          moonrise: string;
          moonset: string;
          moon_phase: string;
          moon_illumination: string;
          is_moon_up: number;
          is_sun_up: number;
        };
        hour: [
          {
            time_epoch: number;
            time: string;
            temp_c: number;
            temp_f: number;
            is_day: number;
            condition: {
              text: string;
              icon: string;
              code: number;
            };
            wind_mph: number;
            wind_kph: number;
            wind_degree: number;
            wind_dir: string;
            pressure_mb: number;
            pressure_in: number;
            precip_mm: number;
            precip_in: number;
            humidity: number;
            cloud: number;
            feelslike_c: number;
            feelslike_f: number;
            windchill_c: number;
            windchill_f: number;
            heatindex_c: number;
            heatindex_f: number;
            dewpoint_c: number;
            dewpoint_f: number;
            will_it_rain: number;
            chance_of_rain: number;
            will_it_snow: number;
            chance_of_snow: number;
            vis_km: number;
            vis_miles: number;
            gust_mph: number;
            gust_kph: number;
            uv: number;
          }
        ];
      }
    ];
  };
};
 */