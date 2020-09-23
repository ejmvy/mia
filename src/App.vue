<template>
  <Header></Header>
</template>

<script>
import Header from "./components/Header.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  background: #30d5c8;
  font-family: "Kodchasan", sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h1 {
  font-family: "Roboto Slab", serif;
  color: #663399;
  font-size: 35px;
}

h2 {
  color: #7852a9;
  font-family: "Kodchasan", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
}

h3 {
  color: #7852a9;
  font-family: "Roboto Slab", serif;
  font-size: 25px;
}

h4 {
  font-family: "Roboto Slab", serif;
  color: #7852a9;
}

p {
  line-height: 2;
  font-size: 15px;
}

button {
  text-transform: uppercase;
  font-family: "Kodchasan", sans-serif;
  letter-spacing: 3px;
  font-size: 14px;
  cursor: pointer;
}
</style>
