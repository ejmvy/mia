<template>
  <div class="headerTop">
    <div class="logo">
      <router-link to="/" id="homeLink">
        <img id="logoPic" src="https://i.ibb.co/q7J3TBg/imageonline-co-whitebackgroundremoved.png" />
      </router-link>
    </div>
    <nav>
      <li>
        <router-link to="/classes">Classes</router-link>
        <!-- <div class="underline"></div> -->
      </li>
      <li>
        <router-link to="/commission">Commission</router-link>
        <!-- <div class="underline"></div> -->
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
        <!-- <div class="underline"></div> -->
      </li>
    </nav>
    <div class="hamburger hidden" @click="showNavMenu = !showNavMenu">
      <div class="hamburger-bar"></div>
    </div>
    <div v-if="showNavMenu" class="nav2">
      <div class="topNav">
        <img id="navLogo" src="https://i.ibb.co/rdSwqJb/output-onlinepngtools-1.png" />
      </div>
      <div class="navLinks">
        <li>
          <router-link to="/classes">Classes</router-link>
          <div class="underline"></div>
        </li>
        <li>
          <router-link to="/commission">Commission</router-link>
          <div class="underline"></div>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
          <div class="underline"></div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavMenu: false
    };
  },
  methods: {
    showNav2() {
      console.log("nav 2 clicked");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerTop {
  position: fixed;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 80px;
  width: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 6;
}

.headerTop #logoPic {
  width: 100px;
  height: 50px;
  z-index: 5;
  margin-left: 30px;
}

.headerTop nav {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 5;
  right: 0;
}

.headerTop nav li {
  list-style: none;
  margin: 0 15px;
  padding: 30px;
  text-transform: uppercase;
  font-family: "Kodchasan", sans-serif;
  letter-spacing: 3px;
}

.headerTop nav li a {
  z-index: 6;
  color: #663399;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 30px;
}

.headerTop nav li a:hover {
  color: white;
  -webkit-animation: underline 1s 1 forwards;
  animation: underline 1s 1 forwards;
}

a:active {
  color: white;
}

a.active {
  color: white !important;
  border-bottom: 2px solid white;
}

#homeLink.active {
  border-bottom: none;
}

.nav2 {
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 128, 0.6);
  top: -50rem;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  padding-bottom: 30px;
}

.nav2 .topNav {
  width: 100%;
  height: 100px;
  background: navy;
  margin-top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 50px;
}

.nav2 .topNav #navLogo {
  height: 80%;
  padding: 50px;
}

.nav2 .topNav .navHeader {
  color: white;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-family: "Fjalla One", sans-serif;
}

.nav2 .navLinks {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.nav2 .navLinks li {
  list-style: none;
  font-size: 20px;
  text-transform: uppercase;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 15px 0;
  letter-spacing: 5px;
  /* padding-bottom: 30px; */
}

.nav2 .navLinks li a {
  color: white;
  text-decoration: none;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
}

.nav2 .navLinks li .underline {
  visibility: hidden;
  width: 100%;
  height: 10px;
  padding-top: 30px;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid #30d5c8;
}

.nav2 .navLinks li:hover .underline {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  width: 100%;
  height: 10px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.nav2 .navLinks li:hover a {
  color: #30d5c8;
}
/* 
.nav2.expanded {
  top: 0;
  z-index: 2;
} */

.nav2 {
  top: 0;
  z-index: 2;
}

.hamburger {
  position: fixed;
  right: 2rem;
  top: 1.5rem;
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
  z-index: 5;
}

.hamburger .hamburger-bar,
.hamburger .hamburger-bar::before,
.hamburger .hamburger-bar::after {
  content: "";
  position: absolute;
  top: 50%;
  background: white;
  width: 100%;
  border-radius: 30px;
  height: 0.2rem;
  z-index: 5;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
}

.hamburger .hamburger-bar {
  margin-top: 0;
}

.hamburger .hamburger-bar:before {
  margin-top: -10px;
}

.hamburger .hamburger-bar:after {
  margin-top: 10px;
}

.hamburger .hamburger-bar:hover {
  opacity: 0.6;
}

.hamburger.expanded .hamburger-bar {
  background: transparent;
  z-index: 5;
}

.hamburger.expanded .hamburger-bar:before,
.hamburger.expanded .hamburger-bar:after {
  z-index: 5;
  margin-top: 0;
}

.hamburger.expanded .hamburger-bar:before {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}

.hamburger.expanded .hamburger-bar:after {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
}

.hidden {
  display: none;
}

@media (max-width: 1000px) {
  .headerTop nav {
    display: none;
  }
  .hamburger {
    display: inline;
  }
}

@-webkit-keyframes underline {
  0% {
    border-bottom: 2px solid transparent;
  }
  100% {
    border-bottom: 2px solid white;
  }
}

@keyframes underline {
  0% {
    border-bottom: 2px solid transparent;
  }
  100% {
    border-bottom: 2px solid white;
  }
}

@media (max-width: 500px) {
  .headerTop #logoPic {
    margin-left: 0 !important;
  }

  .nav2 .topNav #navLogo {
    height: 80%;
    padding: 10px;
  }
}
</style>
