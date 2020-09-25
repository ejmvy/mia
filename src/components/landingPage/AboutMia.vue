<template>
  <section>
    <div id="aboutMia">
      <div class="miaSection">
        <div class="animateUp slideLeft">
          <div class="miaText">
            <h1>About Mia</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
              you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
            <button id="aboutBtn">Contact me!</button>
          </div>
        </div>
        <div class="miaPhoto">
          <img class="miaImg" src="https://i.ibb.co/3mNzVnM/mia.jpg" />
        </div>
      </div>
      <div class="socialSection">
        <div class="socialTitle">
          <div class="titleLine"></div>
          <h3>Keep in touch!</h3>
          <div class="titleLine"></div>
        </div>

        <div class="icons">
          <div class="circleArea">
            <div class="circle"></div>
          </div>
          <div class="circleArea">
            <div class="circle">
              <div class="circle">
                <!-- <img class="circleImg" src="https://i.ibb.co/j6SkYL4/facebook.jpg" /> -->
              </div>
            </div>
          </div>
          <div class="circleArea">
            <div class="circle">
              <!-- <img class="circleImg" src="../../assets/shopify.png" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
#aboutMia {
  background: #333399;
  min-height: 500px;
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  align-items: center;
}

#aboutMia .miaSection {
  width: 90%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: space-between;
  -ms-flex-align: space-between;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  margin-bottom: 20px;
}

#aboutMia .miaText {
  padding: 10px 30px;
  color: #ccc;
  flex: 2;
}

#aboutMia h1 {
  color: #30d5c8 !important;
}

#aboutMia .miaPhoto {
  float: right;
}

#aboutMia .miaPhoto .miaImg {
  border-radius: 50%;
  height: 400px;
  width: 400px;
}

#aboutBtn {
  margin-top: 50px;
  box-shadow: none;
  background: #26aa9f;
}

#aboutBtn:hover {
  background: #30d5c8;
}

#aboutMia .socialSection {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#aboutMia .socialSection h3 {
  color: #30d5c8 !important;
  margin: 20px;
}

#aboutMia .socialSection .socialTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 40%; */
}

#aboutMia .socialSection .socialTitle .titleLine {
  width: 50px;
  height: 4px;
  border-radius: 5px;
  background: #30d5c8;
}

/* #aboutMia .socialSection .icons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 80%;
}

#aboutMia .socialSection .icons .circleArea {
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
  padding: 30px 20px 0 20px;
  text-align: center;
}

#aboutMia .socialSection .icons .circleArea .circle {
  width: 60px;
  height: 60px;
  background: #30d5c8;
  border-radius: 50%;
  color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

#aboutMia .socialSection .icons .circleArea .circle:hover {
  background: #7852a9;
  transform: scale(1.05);
}

#aboutMia .socialSection .icons .circleArea .circle .circleImg {
  position: relative;
  top: 30%;
  width: 50px;
  height: 50px;
  font-size: 50px;
  z-index: 2;
  background: none;
} */

@media (min-width: 1200px) {
  #aboutMia .miaSection {
    width: 70%;
  }
}

@media (max-width: 900px) {
  #aboutMia .miaSection {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }
  #aboutMia .miaSection .miaText {
    left: 0%;
    top: -50px;
  }
  #aboutMia .miaSection .miaPhoto {
    display: flex;
    justify-content: center;
    width: 70%;
  }
  #aboutMia .miaSection .miaPhoto .miaImg {
    width: 100%;
  }
}

@media (max-width: 500px) {
  #aboutMia .miaSection .miaPhoto .miaImg {
    height: 100%;
  }
}
</style>