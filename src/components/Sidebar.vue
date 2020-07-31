<template>
  <section class="weather-sidebar">
    <div class="weather-sidebar_container">
      <div class="weather-sidebar_block">
        <h2 class="weather-sidebar_title">San Francisco</h2>
      </div>

      <div class="line sidebar-line"></div>

      <div class="weather-sidebar_block">
        <h2 class="weather-sidebar_title">Weather Details</h2>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Cloudy</div>
          <div class="weather-sidebar_details-item">68%</div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Precipitation</div>
          <div class="weather-sidebar_details-item">19%</div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Humidity</div>
          <div class="weather-sidebar_details-item">36%</div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Wind</div>
          <div class="weather-sidebar_details-item">9 Km/h</div>
        </div>
      </div>

      <div class="line sidebar-line"></div>

      <div class="weather-sidebar_block">
        <h2 class="weather-sidebar_title">Temperature</h2>
        <div class="weather-sidebar_diagram"></div>
      </div>

      <div class="line sidebar-line"></div>

      <div class="weather-sidebar_block">
        <h2 class="weather-sidebar_title">Next days</h2>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Cloudy</div>
          <div class="weather-sidebar_details-item">68%</div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Precipitation</div>
          <div class="weather-sidebar_details-item">19%</div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Humidity</div>
          <div class="weather-sidebar_details-item">36%</div>
        </div>
        <div class="weather-sidebar_details">
          <div class="weather-sidebar_details-item">Wind</div>
          <div class="weather-sidebar_details-item">9 Km/h</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  font-family: "Roboto Slab", serif;
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
}

.weather-sidebar_details .weather-sidebar_details-item:first-child {
  opacity: 0.7;
}

.weather-sidebar_diagram {
  width: 100%;
  height: 200px;
  background: url("../icons/tempdiag.jpg") no-repeat center;
  background-size: cover;
}

::-webkit-scrollbar {
  width: 0;
}
</style>