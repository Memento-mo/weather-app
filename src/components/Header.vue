<template>
  <div class="container">
    <header class="weather_header">
      <h3 class="weather_header-logo">WeatherNow</h3>
      <div class="weather_header-search">
        <div class="search">
          <input type="text" placeholder=" " />
          <div>
            <svg>
              <use xlink:href="#path" />
            </svg>
          </div>
        </div>
      </div>
    </header>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="path">
        <path
          d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
          transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
        />
      </symbol>
    </svg>
  </div>
</template>

<style scoped>
.weather_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.weather_header-logo {
  font-weight: 300;
  font-size: 1.8rem;
}

.search {
  display: table;
}
.search input {
  background: none;
  border: none;
  outline: none;
  width: 28px;
  min-width: 0;
  padding: 0;
  z-index: 1;
  position: relative;
  line-height: 18px;
  margin: 5px 0;
  font-size: 14px;
  -webkit-appearance: none;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
  cursor: pointer;
  color: #fff;
}
.search input + div {
  position: relative;
  height: 28px;
  width: 100%;
  margin: -28px 0 0 0;
}
.search input + div svg {
  display: block;
  position: absolute;
  height: 28px;
  width: 160px;
  right: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-width: 1.5px;
  stroke-dashoffset: 271.908;
  stroke-dasharray: 59 212.908;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.search input:not(:placeholder-shown),
.search input:focus {
  width: 150px;
  padding: 0 4px;
  cursor: text;
}
.search input:not(:placeholder-shown) + div svg,
.search input:focus + div svg {
  stroke-dasharray: 150 212.908;
  stroke-dashoffset: 300;
}

::-moz-selection {
  background: rgba(255, 255, 255, 0.2);
}

::selection {
  background: rgba(255, 255, 255, 0.2);
}

::-moz-selection {
  background: rgba(255, 255, 255, 0.2);
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
}
*:before,
*:after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
  font-family: "Mukta Malar", Arial;
  background: #f3628d;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
body .dribbble {
  position: fixed;
  display: block;
  right: 24px;
  bottom: 24px;
}
body .dribbble img {
  display: block;
  width: 76px;
}
</style>