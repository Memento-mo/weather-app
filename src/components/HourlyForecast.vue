<template>
  <ul class="weather_hourly">
    <li class="weather_hourly-item" v-for="hour in hourlyForecast" :key="hour.datetime">
      <div class="weather_hourly-item_block">
        <p class="weather_hourly-item_time">{{ timeTrim(hour.timestamp_local) }}</p>
      </div>
      <div class="weather_hourly-item_block">
        <img class="weather_hourly-item_image" :src="image(hour.weather.icon)" />
        <p class="weather_hourly-item_temp">{{ updateTemp(hour.temp) }}</p>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue'
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
    updateTemp: (temp: number): number => Math.floor(temp || 0),
  },
})
</script>

<style scoped>
.weather_hourly-item {
  list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.weather_hourly-item_time {
  opacity: 0.7;
}

.weather_hourly-item:hover {
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
}

.weather_hourly-item_image {
  height: 60px;
}

.weather_hourly-item_block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather_hourly-item_temp {
  position: relative;
  font-weight: 600;
}

.weather_hourly-item_temp::after {
  content: '°';
  font-size: 1.6em;
  position: absolute;
  top: -8px;
}
</style>
