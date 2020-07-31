<template>
  <div class="container">
    <footer class="weather_footer">
      <p class="weather_footer-date">06:12 AM - Monday, 31 March 2020</p>
      <div class="weather_footer-city">
        <p>San Francisco, USA</p>
        <button class="button weather_footer-city_button">Change</button>
      </div>
    </footer>
  </div>
</template>

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