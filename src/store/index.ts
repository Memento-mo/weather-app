import Vue from 'vue'
import Vuex from 'vuex'
import * as TYPES from '@/store/type-mutations'
import WeatherAPI from '@/api/weather-api'

import { TodayWeatherType, State } from '@/store/type-ts'

Vue.use(Vuex)

const weatherAPI = new WeatherAPI()

export default new Vuex.Store({
  state: {
    todayWeather: {},
    hourlyForecast: {},
    weekForecast: {},
    isLoading: true,
  } as State,
  mutations: {
    [TYPES.FETCH_WEATHER_TODAY]: (state, weather) => {
      Vue.$cookies.set('city', weather.city_name)
      state.todayWeather = weather
    },
    [TYPES.FETCH_HOURLY_FORECAST]: (state, weather) => {
      state.hourlyForecast = weather
    },
    [TYPES.FETCH_WEEK_FORECAST]: (state, weather) => {
      console.log(weather)
      state.weekForecast = weather
    },
    [TYPES.START_LOADING]: state => {
      state.isLoading = true
    },
    [TYPES.FINISH_LOADING]: state => {
      state.isLoading = false
    },
  },
  actions: {
    [TYPES.FETCH_WEATHER_TODAY]: async (
      { commit, dispatch },
      city: string
    ) => {
      commit(TYPES.START_LOADING)
      const weather: TodayWeatherType = await weatherAPI.getWeather(
        city
      )
      commit(TYPES.FETCH_WEATHER_TODAY, weather)
      await dispatch(TYPES.FETCH_HOURLY_FORECAST)
      await dispatch(TYPES.FETCH_WEEK_FORECAST)
      commit(TYPES.FINISH_LOADING)
    },
    [TYPES.FETCH_HOURLY_FORECAST]: async ({ commit, state }) => {
      const weather = await weatherAPI.getHourlyWeather(
        state.todayWeather['city_name'] || 'Moscow',
        6
      )
      commit(TYPES.FETCH_HOURLY_FORECAST, weather)
    },
    [TYPES.FETCH_WEEK_FORECAST]: async ({ state, commit }) => {
      const weather = await weatherAPI.getWeekWeather(
        state.todayWeather['city_name'] || 'Moscow'
      )

      commit(TYPES.FETCH_WEEK_FORECAST, weather)
    },
  },
})
