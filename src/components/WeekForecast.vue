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
        <p class="weather_hourly-item_temp">{{}}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
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
  },
})
</script>
