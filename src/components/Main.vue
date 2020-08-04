<template>
  <div class="container">
    <main class="weather_main">
      <div class="weather_main-today">
        <p class="weather_main-today_temp">{{ updateTemp || 0 }}</p>
        <p class="weather_main-today_description">
          {{ todayWeather.weather.description }}
          <span>{{ adviceTemp }}</span>
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { TodayWeatherType } from '@/store/type-ts'

export default Vue.extend({
  props: {
    todayWeather: {
      type: Object as PropType<TodayWeatherType>,
      required: true,
    },
  },
  computed: {
    updateTemp(): number {
      return Math.floor(this.todayWeather.temp || 0)
    },
    adviceTemp(): string {
      switch (this.todayWeather.weather.description) {
        case 'Местами облачно':
          return 'Оставьте свой зонт дома'
        case 'Облачно':
          return 'Не забудьте взять зонт'
        default:
          return 'На улице отличная погода'
      }
    },
  },
})
</script>

<style scoped>
.weather_main {
  font-size: 40px;
}

.weather_main-today {
  display: flex;
  max-width: 700px;
  justify-content: space-between;
  align-items: flex-end;
}

.weather_main-today_temp {
  font-size: 5em;
  font-weight: 600;
}

.weather_main-today_temp::after {
  content: '°';
  font-size: 0.6em;
  position: relative;
  top: -70px;
}

.weather_main-today_description {
  font-weight: 400;
  margin-bottom: 45px;
}

.weather_main-today_description span {
  display: block;
  opacity: 0.6;
  font-size: 1.5rem;
  padding-top: 10px;
}
</style>
