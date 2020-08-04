<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  letter-spacing: 1.2px;
  box-sizing: border-box;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgb(31, 29, 29);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  padding: 0em 7em;
}

.button {
  padding: 10px 30px;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  outline: none;
  transition: 0.3s ease all;
  cursor: pointer;
}

.button:hover {
  background: #fff;
  color: #000;
}

.button:active {
  outline: none;
}

.line {
  height: 1px;
  width: 100%;
  background-color: #fff;
  opacity: 0.5;
  margin: 40px 0;
}
</style>
