<template>
  <section id="aboutAcrillic">
    <div class="aboutAcrillicSection">
      <div class="animateUp bounceUp">
        <div class="aboutText">
          <h1>Acryllic Pouring</h1>
          <h3>Why Do We Like It?</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
          </p>
          <router-link to="/classes">
            <button id="classesBtn">See our classes</button>
          </router-link>
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="threeHexes">
          <img class="hexImage" src="https://i.ibb.co/q9cjMTT/imageedit-24-7966020525.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#aboutAcrillic {
  width: 100%;
  background: #f2f2f2;
  padding: 30px 0;
}

#aboutAcrillic .aboutAcrillicSection {
  width: 70%;
  padding: 30px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

#aboutAcrillic .aboutAcrillicSection .aboutText {
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0;
  border-radius: 20px;
  padding: 10px 30px;
  min-height: 250px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 30px;
}

#aboutAcrillic .aboutAcrillicSection .aboutText p {
  color: rgb(73, 72, 72);
}

#aboutAcrillic .aboutAcrillicSection .threeHexes {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
}

#aboutAcrillic .aboutAcrillicSection .threeHexes .hexImage {
  max-height: 450px;
}

@media (max-width: 1250px) {
  #aboutAcrillic .aboutAcrillicSection {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  #aboutAcrillic .aboutAcrillicSection .threeHexes {
    margin-bottom: 50px;
  }
  #aboutAcrillic .aboutAcrillicSection .aboutText {
    text-align: center;
    margin-right: 0;
  }
}
</style>