import axios from 'axios'

type OptionsType = {
  key: string | null
  lang: string | null
  units: string | null
}

interface Weather {
  APIKEY: string
  options: OptionsType
  url: string
}

export default class WeatherAPI<Weather> {
  private readonly APIKEY: string
  private readonly url: string
  private options: OptionsType

  constructor() {
    this.APIKEY = '2d8641f26ed54aa38c70e0df3206b50e'
    this.options = {
      key: this.APIKEY,
      lang: 'ru',
      units: 'M',
    }
    this.url = 'https://api.weatherbit.io/v2.0/'
  }

  async getWeather(city: string) {
    try {
      const weather = await axios.get(
        `${this.url}current?city=${city}&lang=${this.options.lang}&units=${this.options.units}&key=${this.options.key}`
      )
      return weather.data.data[0]
    } catch (error) {
      const weather = await axios.get(
        `${this.url}current?city=Moscow&lang=${this.options.lang}&units=${this.options.units}&key=${this.options.key}`
      )
      return weather.data.data[0]
    }
  }

  async getHourlyWeather(city: string, hours: number) {
    const weather = await axios.get(
      `${this.url}forecast/hourly?city=${city}&hours=${hours}&lang=${this.options.lang}&units=${this.options.units}&key=${this.options.key}`
    )

    return weather.data.data
  }

  async getWeekWeather(city: string) {
    const weather = await axios.get(
      `${this.url}forecast/daily?city=${city}&days=7&lang=${this.options.lang}&units=${this.options.units}&key=${this.options.key}`
    )
    return weather.data.data
  }
}
