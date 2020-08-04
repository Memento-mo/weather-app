<template>
  <ul class="weather_hourly">
    <li
      class="weather_hourly-item"
      v-for="hour in hourlyForecast"
      :key="hour.datetime"
    >
      <div class="weather_hourly-item_block">
        <p class="weather_hourly-item_time">
          {{ timeTrim(hour.timestamp_local) }}
        </p>
      </div>
      <div class="weather_hourly-item_block">
        <img
          class="weather_hourly-item_image"
          :src="image(hour.weather.icon)"
        />
        <p class="weather_hourly-item_temp">
          {{ updateTemp(hour.temp) }}
        </p>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue'
import { updateTemp } from '@/utils/utils'
import '@/components/weatherDetails.css'

export default Vue.extend({
  props: {
    hourlyForecast: {
      type: Array,
      required: true,
    },
  },
  methods: {
    timeTrim: (time: string) =>
      time
        .split('T')[1]
        .split(':')
        .slice(0, 2)
        .join(':'),
    image: (icon: string) =>
      `https://www.weatherbit.io/static/img/icons/${icon}.png`,
    updateTemp,
  },
})
</script>

<style scoped></style>
