 <template>
  <section>
    <div class="landing">
      <div class="icon-scroll"></div>
      <div class="miaHeader">
        <div class="name">
          <div class="first">{{ first }}</div>
          <div class="last">{{ last }}</div>
        </div>
        <h2>Acryllic Pour Artist</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </p>
      </div>
      <div class="rightLandingSide">
        <div class="paintDrops"></div>
        <div class="hexagonDesigns">
          <ul class="hexGrid">
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div class="img" style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div
                    class="img"
                    id="first"
                    style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"
                  ></div>
                  <div
                    class="img last"
                    style="background-image:url(https://i.ibb.co/LrbRzJ7/Purplecom.jpg)"
                  ></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div class="img" style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div
                    class="img"
                    id="first"
                    style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"
                  ></div>
                  <div
                    class="img last"
                    id="four"
                    style="background-image:url(https://i.ibb.co/LrbRzJ7/Purplecom.jpg)"
                  ></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div
                    class="img"
                    id="first"
                    style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"
                  ></div>
                  <div
                    class="img last"
                    id="five"
                    style="background-image:url(https://i.ibb.co/yB8PpLM/gifgit-1.png)"
                  ></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div class="img" style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div
                    class="img"
                    id="first"
                    style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"
                  ></div>
                  <div
                    class="img last"
                    id="two"
                    style="background-image:url(https://i.ibb.co/yB8PpLM/gifgit-1.png)"
                  ></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div class="img" style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div
                    class="img"
                    id="first"
                    style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"
                  ></div>
                  <div
                    class="img last"
                    id="three"
                    style="background-image:url(https://i.ibb.co/yB8PpLM/gifgit-1.png)"
                  ></div>
                </div>
              </div>
            </li>
            <li class="hex" id="removeHex">
              <div class="hexIn">
                <div class="hexLink">
                  <div
                    class="img"
                    id="first"
                    style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg);"
                  ></div>
                  <div
                    class="img last"
                    id="six"
                    style="background-image:url(https://i.ibb.co/LrbRzJ7/Purplecom.jpg)"
                  ></div>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <div class="img" style="background-image:url(https://i.ibb.co/ZfryVS9/th.jpg;"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>  

<script>
// import HexDesign from "./MainHex.vue";
export default {
  data() {
    return {
      first: "Mia",
      last: "McVey"
    };
  }
};
</script>

<style scoped>
.landing {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.landing .miaHeader {
  position: relative;
  width: 30%;
  min-height: 40%;
  padding: 50px;
  margin-left: 5%;
  margin-top: 5%;
  color: white;
}

.landing .miaHeader .name {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 100px;
  color: #663399;
  font-family: "Roboto Slab", serif;
}

.landing .miaHeader .name .last {
  padding-left: 25px;
  font-weight: bold;
}

.landing .miaHeader h2 {
  font-family: "Kodchasan", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
}

.landing .miaHeader p {
  padding-top: 20px;
}

.landing .rightLandingSide {
  width: 50%;
  height: 100%;
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
  position: absolute;
  right: 0;
}

.landing .rightLandingSide .paintDrops {
  right: 10%;
}

.landing .rightLandingSide .paintDrops .drops {
  height: 50vh;
  width: 600px;
}

.hexagonDesigns {
  z-index: -1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.hexGrid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-item-align: end;
  align-self: flex-end;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  font-family: sans-serif;
  list-style-type: none;
  padding-bottom: 50px;
}

#hexGrid2 {
  padding: 80px 50px 130px 0;
  width: 80%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.hex,
.largeHex {
  position: relative;
  visibility: hidden;
  outline: 1px solid transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.hex:after,
.largeHex:after {
  content: "";
  display: block;
  padding-bottom: 86.602%;
}

.hexIn {
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%;
  /* =  width / sin(60) */
  margin: 2%;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent;
  /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.hexIn * {
  position: absolute;
  visibility: visible;
  outline: 1px solid transparent;
  /* fix for jagged edges in FF on hover transition */
}

.hexLink {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.hex h1,
.hex p {
  width: 100%;
  padding: 5%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 300;
  opacity: 0;
}

.largeHex #back {
  opacity: 0;
}

.largeHex #front {
  opacity: 1;
}

.hex .last {
  opacity: 0;
  -webkit-animation-name: cf3FadeInOut;
  animation-name: cf3FadeInOut;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

#two {
  -webkit-animation-delay: 6s;
  animation-delay: 6s;
}

#three {
  -webkit-animation-delay: 12s;
  animation-delay: 12s;
}

#four {
  -webkit-animation-delay: 18s;
  animation-delay: 18s;
}

#five {
  -webkit-animation-delay: 22s;
  animation-delay: 22s;
}

#six {
  -webkit-animation-delay: 28s;
  animation-delay: 28s;
}

@-webkit-keyframes cf3FadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
}

@keyframes cf3FadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
}

/*** HOVER EFFECT  **********************************************************************/

.hexLink #front {
  z-index: 2;
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.hexLink #back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.hexLink:hover #back {
  opacity: 1;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.hexLink:hover #front {
  opacity: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.hex .img,
.largeHex .img {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
}

.img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.img:before,
.img:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  opacity: 0;
  -webkit-transition: opacity 0;
  transition: opacity 0;
}

.img:before {
  background: rgba(22, 103, 137, 0.3);
}

.img:after {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(transparent),
    color-stop(rgba(0, 0, 0, 0.5)),
    to(transparent)
  );
  background: linear-gradient(
    to top,
    transparent,
    rgba(0, 0, 0, 0.5),
    transparent
  );
}
</style>