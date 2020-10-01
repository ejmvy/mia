<template>
  <section id="aboutAcrillic">
    <div class="aboutAcrillicSection">
      <div class="animateUp bounceUp">
        <div class="aboutText">
          <h1>{{ firstTitle }}</h1>
          <h3>{{ secondTitle }}</h3>
          <p>
            {{ pageMessage }}
            <br />
            <br />
            {{ message2 }}
          </p>
          <router-link to="/classes">
            <button id="classesBtn">See our classes</button>
          </router-link>
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="threeHexes">
          <img class="hexImage" :src="pageImg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["firstTitle", "secondTitle", "pageMessage", "message2", "pageImg"],
  data() {
    return {
      // landingImg: "https://i.ibb.co/q9cjMTT/imageedit-24-7966020525.png"
    };
  }
};
</script>

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

@media (max-width: 500px) {
  #aboutAcrillic .aboutAcrillicSection .threeHexes .hexImage {
    max-height: 250px;
  }

  #aboutAcrillic .aboutAcrillicSection {
    width: 90%;
  }

  #aboutAcrillic .aboutAcrillicSection .aboutText {
    padding: 10px;
  }
}
</style>