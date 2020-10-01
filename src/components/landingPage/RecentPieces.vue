<template>
  <section id="recentSection">
    <h2 class="recentHeading">{{ recentTitle }}</h2>
    <div class="displayArtwork">
      <div v-for="img in imagesToDisplay" :key="img">
        <div class="artBox" :class="{smallBox : !showBtn}">
          <!-- <img class="artwork" :src="require('@/assets/mainShots/' + img + '')" /> -->
          <img class="artwork" :src="require(`../../assets/mainShots/${img}`)" ; />
        </div>
      </div>
      <!-- <img class="artwork" src="../../assets/mainShots/hex1.png" /> -->
      <img class="artwork" :src="mainImage" />
    </div>
    <div v-if="showBtn" class="commissionQ">
      <h3>{{ questionText }}</h3>
      <button>{{ btnText }}</button>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "recentTitle",
    "imagesToDisplay",
    "questionText",
    "btnText",
    "showBtn"
  ],
  data() {
    return {
      imageArray: [
        "../../assets/mainShots/hex2.png",
        "../../assets/mainShots/blue1.png",
        "../../assets/mainShots/circle4.png",
        "../../assets/mainShots/rect1.jpeg",
        "../../assets/mainShots/circle2.png",
        "../../assets/mainShots/rect1.png",
        "../../assets/mainShots/hex1.png",
        "https://i.ibb.co/yB8PpLM/gifgit-1.png"
      ],
      mainImage: require("../../assets/mainShots/circle2.png")
    };
  },
  computed: {
    returnUrl(img) {
      console.log("img: " + img);
      return require(img);
    }
  }
};
</script>

<style scoped>
#recentSection {
  width: 100%;
  background: #f2f2f2;
  padding: 40px 0;
}

#recentSection .recentHeading {
  font-family: "Titan One", cursive;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-bottom: 20px;
  text-align: center;
}

#recentSection .displayArtwork {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 70%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

#recentSection .displayArtwork .artBox {
  -webkit-box-shadow: 0 5px 20px #ccc;
  box-shadow: 0 5px 20px #ccc;
  border-radius: 10px;
  width: 300px;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  margin: 20px;
}

#recentSection .displayArtwork .artBox .artwork {
  width: 100%;
}

#recentSection .displayArtwork .artBox:hover {
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
}

#recentSection .displayArtwork .smallBox {
  width: 250px;
}

.commissionQ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0;
}

@media (max-width: 700px) {
  #recentSection .displayArtwork .artBox {
    width: 90%;
    height: 80%;
    margin-bottom: -10px;
  }
  #recentSection .displayArtwork .artBox .artwork {
    height: 95%;
  }
}
</style>