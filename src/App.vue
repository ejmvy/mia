<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/landingPage/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
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
  /* background: #7852a9 */
  background: #a085c2;
  padding: 15px 25px;
  color: white;
  border: none;
  border-radius: 410px;
  cursor: pointer;
  box-shadow: 0 2px 5px #ccc;
  font-family: "Rubik", sans-serif;
  letter-spacing: 1.3px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
}

button:hover {
  background: #7852a9;
  -webkit-transform: scale(1.1);
  transform: scale(1.05);
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

/* @-webkit-keyframes underline {
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
} */

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

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}

.icon-scroll {
  top: 90%;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 25px solid white;
  opacity: 0;
  -webkit-animation-name: appear, bounceUp;
  animation-name: appear, bounceUp;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-duration: 0.5s, 5s;
  animation-duration: 0.5s, 5s;
  -webkit-animation-fill-mode: forwards, both;
  animation-fill-mode: forwards, both;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.icon-scroll:before {
  content: "";
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 25px solid #30d5c8;
  margin-left: -20px;
  bottom: 6px;
  border-radius: 4px;
  opacity: 1;
}

/* @media (max-width: 500px) {
  h1 {
    font-size: 25px !important;
  }
} */
/* classes & commissions css */
</style>
