<template>
  <div>
    <Header></Header>
    <LandingPage></LandingPage>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import LandingPage from "./LandingPage.vue";

export default {
  name: "App",
  components: {
    Header,
    LandingPage
  }
};
</script>

<style>
body {
  background: #30d5c8;
  /* font-family: "Kodchasan", sans-serif; */
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h1 {
  /* font-family: "Roboto Slab", serif; */

  font-family: "Titan One", cursive;
  color: #663399;
  font-size: 35px;
}

h2 {
  color: #7852a9;
  font-family: "Titan One", cursive;
  /* font-family: "Kodchasan", sans-serif; */
  text-transform: uppercase;
  font-size: 25px;
}

h3 {
  color: #7852a9;
  /* font-family: "Roboto Slab", serif; */
  font-size: 25px;
}

h4 {
  /* font-family: "Roboto Slab", serif; */
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

@-webkit-keyframes underline {
  0% {
    border-bottom: 3px solid transparent;
  }
  100% {
    border-bottom: 3px solid white;
  }
}

@keyframes underline {
  0% {
    border-bottom: 3px solid transparent;
  }
  100% {
    border-bottom: 3px solid white;
  }
}

@-webkit-keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes bounceUp {
  0% {
    top: 90%;
  }
  50% {
    top: 95%;
  }
  100% {
    top: 90%;
  }
}

@keyframes bounceUp {
  0% {
    top: 90%;
  }
  50% {
    top: 95%;
  }
  100% {
    top: 90%;
  }
}

.bounceUp {
  /* opacity: 0; */
  -webkit-transition: all 700ms ease-out;
  transition: all 700ms ease-out;
  -webkit-transform: translate3d(0px, 200px, 0px);
  transform: translate3d(0px, 200, 0px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.slideLeft {
  /* opacity: 0; */
  -webkit-transition: all 700ms ease-out;
  transition: all 700ms ease-out;
  -webkit-transform: translate3d(-500px, 0px, 0px);
  transform: translate3d(-500, 0px, 0px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.in-view {
  opacity: 1;
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
}

@media (max-width: 1250px) {
  /* h2 {
    font-size: 28px;
  } */

  /* .landing .miaHeader {
    margin-left: 50px;
  }
  .landing .miaHeader .name {
    font-size: 60px;
  } */
}

@media (max-width: 900px) {
  .landing #removeHex {
    display: none;
  }

  #contact {
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
  #contact .contactText {
    padding-bottom: 20px;
    text-align: center;
    padding-right: 0px;
  }
  #contact .mailArea {
    width: 100%;
  }
  #contact .mailArea .mailBox {
    width: 80%;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }
  #contact .mailArea .mailButton {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }
  .classesLanding {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    position: relative;
    padding-bottom: 50px;
  }
  .classesLanding .gridHexArea {
    width: 80%;
    position: absolute;
    top: 0;
    margin-bottom: 20px;
  }
  .classesLanding .headingText {
    max-width: 60%;
    z-index: 3;
    margin-top: 200px;
  }
}
</style>
