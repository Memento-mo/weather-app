<template>
  <Loader v-if="isLoading" />
  <div v-else class="weather">
    <div class="weather_block">
      <div class="weather_grid">
        <div class="weather_grid-item">
          <Header />
        </div>
        <div class="weather_grid-item">
          <Main :todayWeather="todayWeather" />
          <div class="line"></div>
          <Footer :todayWeather="todayWeather" />
        </div>
      </div>
    </div>
    <div class="weather_block">
      <Sidebar :todayWeather="todayWeather" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Loader from '@/components/Loader'

import { mapActions, mapState } from 'vuex'
import * as TYPES from '@/store/type-mutations'
import { TodayWeatherType } from '@/store/type-ts'

export default Vue.extend({
  computed: mapState({
    todayWeather: (state: any): TodayWeatherType =>
      state.todayWeather,
    isLoading: (state: any): boolean => state.isLoading,
  }),
  methods: {
    ...mapActions({
      fetchWeatherToday: TYPES.FETCH_WEATHER_TODAY,
    }),
  },
  components: {
    Header,
    Main,
    Footer,
    Sidebar,
    Loader,
  },
  mounted() {
    this.fetchWeatherToday(this.$cookies.get('city'))
  },
})
</script>

<style scoped>
.weather {
  height: 100vh;
  width: 100%;
  background: url('../icons/rain-cut.png') no-repeat center;
  background-size: cover;

  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
}

.weather:before {
  content: '';
  background: rgba(0, 0, 0, 0.35);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.weather_block:first-child {
  flex-basis: 77%;
}
.weather_block:last-child {
  flex-basis: 23%;
}

.weather_grid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
}
</style>
