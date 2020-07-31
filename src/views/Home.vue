<template>
  <div class="weather">
    <div class="weather_block">
      <div class="weather_grid">
        <div class="weather_grid-item">
          <Header />
        </div>
        <div class="weather_grid-item">
          <Main />
          <div class="line"></div>
          <Footer />
        </div>
      </div>
    </div>
    <div class="weather_block">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Header,
    Main,
    Footer,
    Sidebar
  }
};
</script>

<style scoped>
.weather {
  height: 100vh;
  background: url("../icons/rain-23.png") no-repeat center;
  background-size: cover;

  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
