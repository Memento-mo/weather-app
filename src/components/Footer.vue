<template>
  <div class="container">
    <footer class="weather_footer">
      <p class="weather_footer-date">{{ this.dateNow }}</p>
      <div class="weather_footer-city">
        <p>
          {{ todayWeather.city_name }},
          {{ todayWeather.country_code }}
        </p>
        <button class="button weather_footer-city_button">Change</button>
      </div>
    </footer>
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
  data() {
    return {
      dateNow: '',
      timer: Date.now(),
    }
  },
  methods: {
    getTime() {
      const dayOfMonth = new Date().getDate(),
        dayOfWeek = new Date().getDay(),
        month = new Date().getMonth(),
        hours = new Date().getHours(),
        minute = new Date().getMinutes(),
        year = new Date().getFullYear()
      const days: string[] = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
      ]
      const months: string[] = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Декабря',
      ]
      const currentTime = `${hours}:${
        minute.toString().length > 1 ? minute : '0' + minute
      }`
      const time =
        this.todayWeather.ob_time?.split(' ') || currentTime

      this.dateNow = `${time[1]} - ${days[dayOfWeek]}, ${dayOfMonth} ${months[month]} ${year}`
    },
    updateDate() {
      this.timer = setInterval(() => {
        this.getTime()
      }, 60000)
    },
  },
  mounted() {
    this.getTime()
    this.updateDate()
  },
  destroyed() {
    clearInterval(this.timer)
  },
})
</script>

<style scoped>
.weather_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.weather_footer-city {
  display: flex;
  align-items: center;
}

.weather_footer-city_button {
  margin-left: 30px;
}
</style>
