<template>
  <ul class="weather_hourly">
    <li
      class="weather_hourly-item"
      v-for="day in weekForecast"
      :key="day.datetime"
    >
      <div class="weather_hourly-item_block">
        <p class="weather_hourly-item_time">
          {{ date(day.datetime) }}
        </p>
      </div>
      <div class="weather_hourly-item_block">
        <img
          class="weather_hourly-item_image"
          :src="image(day.weather.icon)"
        />
        <div class="flex-default">
          <p class="weather_hourly-item_temp">
            {{ updateTemp(day.app_min_temp) }}
          </p>
          <span>-</span>
          <p class="weather_hourly-item_temp">
            {{ updateTemp(day.app_max_temp) }}
          </p>
        </div>
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
    weekForecast: {
      type: Array,
      required: true,
    },
  },
  methods: {
    image: (icon: string) =>
      `https://www.weatherbit.io/static/img/icons/${icon}.png`,
    date: (date: any) => {
      const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
      const dayOfWeek = new Date(date)
      return days[dayOfWeek.getDay()]
    },
    updateTemp,
  },
})
</script>

<style scoped>
.flex-default span {
  margin: 0 10px;
}
</style>
