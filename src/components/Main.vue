<template>
  <div class="container">
    <main class="weather_main">
      <div class="weather_main-today">
        <p class="weather_main-today_temp">14</p>
        <p class="weather_main-today_description">
          Today is a rainy day
          <span>Don't forget an umbrella</span>
        </p>
      </div>
    </main>
  </div>
</template>

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
  content: "°";
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