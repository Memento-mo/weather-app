<template>
  <section class="weather-sidebar">
    <div class="weather-sidebar_container">
      <div class="weather-sidebar_block">
        <h2 class="weather-sidebar_title">
          {{ todayWeather.city_name }}
        </h2>
      </div>

      <div class="line sidebar-line"></div>

      <div class="weather-sidebar_block">
        <h2 class="weather-sidebar_title">Подробности</h2>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Облачность</div>
          <div class="weather-sidebar_details-item">
            {{ `${floorNumber(todayWeather.clouds)}%` }}
          </div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Влажность</div>
          <div class="weather-sidebar_details-item">
            {{ `${floorNumber(todayWeather.rh)}%` }}
          </div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Ветер</div>
          <div class="weather-sidebar_details-item">
            {{ `${floorNumber(todayWeather.wind_spd)} м/c` }}
          </div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Восход</div>
          <div class="weather-sidebar_details-item">
            {{ this.sunriseAndSunset(todayWeather.sunrise) }}
          </div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Закат</div>
          <div class="weather-sidebar_details-item">
            {{ this.sunriseAndSunset(todayWeather.sunset) }}
          </div>
        </div>
      </div>

      <div class="line sidebar-line"></div>

      <div class="weather-sidebar_block">
        <h2 class="weather-sidebar_title">Температура</h2>
        <HourlyForecast :hourlyForecast="hourlyForecast" />
      </div>

      <div class="line sidebar-line"></div>

      <div class="weather-sidebar_block">
        <h2 class="weather-sidebar_title">Прогноз на неделю</h2>
        <WeekForecast :weekForecast="weekForecast" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapState } from 'vuex'
import { TodayWeatherType } from '@/store/type-ts'
import HourlyForecast from '@/components/HourlyForecast'
import WeekForecast from '@/components/WeekForecast'

export default Vue.extend({
  props: {
    todayWeather: {
      type: Object as PropType<TodayWeatherType>,
      required: true,
    },
  },
  computed: mapState({
    hourlyForecast: (state: any) => state.hourlyForecast,
    weekForecast: (state: any) => state.weekForecast,
  }),
  methods: {
    sunriseAndSunset(time: string): string {
      const newTime: any = time.split(':')
      switch (this.todayWeather.timezone) {
        case 'Europe/Moscow':
          newTime[0] = +newTime[0] + 3
          if (newTime[0] < 0) {
            newTime[0] = 24 + newTime[0]
          }

          return newTime.join(':')
        case 'America/Chicago':
          newTime[0] = +newTime[0] - 5
          if (newTime[0] < 0) {
            newTime[0] = 24 + newTime[0]
          }
          return newTime.join(':')
        case 'Europe/London':
          newTime[0] = +newTime[0] + 1
          if (newTime[0] < 0) {
            newTime[0] = 24 + newTime[0]
          }
          return newTime.join(':')
        default:
          return time
      }
    },
    floorNumber(number: number): number {
      return Math.floor(number || 0)
    },
  },
  components: {
    HourlyForecast,
    WeekForecast,
  },
})
</script>

<style>
.weather-sidebar {
  height: 97vh;
  max-width: 500px;
  background: #fff;
  border-radius: 30px;
  margin-right: 20px;
  overflow: scroll;
  overflow-x: hidden;

  color: rgb(31, 29, 29);
  -ms-overflow-style: none;

  box-shadow: inset 0px -8px 8px 1px rgb(151, 150, 151, 0.2);
}

.weather-sidebar_container {
  padding: 40px;
}

.weather-sidebar_title {
  font-family: 'Roboto Slab', serif;
  font-weight: 600;
  font-size: 22px;
}

.sidebar-line {
  background-color: rgb(31, 29, 29);
  opacity: 0.2;
}

.weather-sidebar_details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  font-weight: 600;
}

.weather-sidebar_details .weather-sidebar_details-item:first-child {
  opacity: 0.7;
  font-weight: normal;
}

.weather-sidebar_diagram {
  width: 100%;
  height: 200px;
  background: url('../icons/tempdiag.jpg') no-repeat center;
  background-size: cover;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
