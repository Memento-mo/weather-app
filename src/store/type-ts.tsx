type Weather = {
  code: string | null
  description: string | null
  icon: string | null
}

export type TodayWeatherType = {
  app_temp: number | null
  aqi: number | null
  city_name: string | null
  clouds: number | null
  country_code: string | null
  datetime: string | null
  dewpt: number | null
  dhi: number | null
  dni: number | null
  elev_angle: number | null
  ghi: number | null
  h_angle: number | null
  lat: number | null
  lon: number | null
  ob_time: string | null
  pod: string | null
  precip: number | null
  pres: number | null
  rh: number | null
  slp: number | null
  snow: number | null
  solar_rad: number | null
  state_code: string | null
  station: string | null
  sunrise: string | null
  sunset: string | null
  temp: number | null
  timezone: string | null
  ts: number | null
  uv: number | null
  vis: number | null
  weather: Weather
  wind_cdir: string | null
  wind_cdir_full: string | null
  wind_dir: number | null
  wind_spd: number | null
}

export type HourlyForecastType = {} //??
export type WeekForecastType = {} //??

export interface State {
  todayWeather: TodayWeatherType
  hourlyForecast: HourlyForecastType
  weekForecast: WeekForecastType
  isLoading: boolean
}
