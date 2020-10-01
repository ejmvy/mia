 <template>
  <div>
    <MainLanding></MainLanding>
    <AboutAcryllic
      :firstTitle="about.aboutTitle"
      :secondTitle="about.aboutSubtitle"
      :pageMessage="about.aboutParagraph"
      :message2="about.aboutParagraph2"
      :pageImg="about.aboutImg"
    ></AboutAcryllic>
    <MidBlue
      :mainQuote="midBlue.quote"
      :title="midBlue.midTitle"
      :text1="midBlue.textOne"
      :text2="midBlue.textTwo"
      :text3="midBlue.textThree"
      :icons="midBlue.icons"
    ></MidBlue>

    <RecentPieces
      :recentTitle="recent.title"
      :imagesToDisplay="recent.images"
      :questionText="recent.question"
      :btnText="recent.buttonText"
      :showBtn="showButton"
      :showQuote="showQuote"
    ></RecentPieces>
    <AboutMia></AboutMia>
  </div>
</template>  

<script>
import MainLanding from "./components/landingPage/mainLanding.vue";
import AboutAcryllic from "./components/landingPage/AboutAcryllic.vue";
import MidBlue from "./components/landingPage/MidBlue.vue";
import RecentPieces from "./components/landingPage/RecentPieces.vue";
// import MainHexDesign from "./components/landingPage/MainHexDesign.vue";
import AboutMia from "./components/landingPage/AboutMia.vue";

export default {
  data() {
    return {
      about: {
        aboutTitle: "Acryllic Pouring",
        aboutSubtitle: "Why Do We Like It?",
        aboutParagraph:
          "Acryllic Pouring is relatively new as a medium to work with, but has recently exploded in popularity. The art form itself is incredibly calming and even hypnotic at times, and more enjoyably - it's not a terribly difficult technique to learn. There are some challenges in getting the preparation right, mixing the paints with the chemicals and getting precisely the same consistency and fluidity across all your colours however the paint process is nothing but enjoyable! Learning these techniques takes a little bit of time but with a bit of patience and interest, should yield some very satisfying results!",
        aboutParagraph2:
          "Therapeutic and soothing are two words that are inextricably linked with this amazing art form.",
        aboutImg: "mainHex.png"
      },
      midBlue: {
        quote:
          "The world always seems brighter when you've just made something that wasn't there before.",
        midTitle: "The Process",
        textOne:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        textTwo:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        textThree:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        icons: ["fa-palette", "fa-paint-brush", "fa-car-side"],
        showQuote: true
      },
      recent: {
        title: "Recent Pieces",
        images: [
          "mainShots/hex2.png",
          "mainShots/blue1.png",
          "mainShots/circle4.png",
          "mainShots/rect3.png",
          "mainShots/circle2.png",
          "mainShots/hex1.png",
          "mainShots/rect4.png",
          "mainShots/circle3.png"
        ],
        question: "Have someone special you'd like to commission a piece for?",
        buttonText: "More Details",
        showButton: true
      }
    };
  },
  components: {
    MainLanding,
    AboutAcryllic,
    MidBlue,
    RecentPieces,
    AboutMia
  }
};
</script>

<style scoped>
</style>