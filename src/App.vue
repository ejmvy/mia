<template>
  <div>
    <Header></Header>
    <LandingPage></LandingPage>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    Header,
    LandingPage
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

section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
