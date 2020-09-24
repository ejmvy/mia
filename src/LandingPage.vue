 <template>
  <div>
    <MainLanding></MainLanding>
    <AboutAcryllic
      :firstTitle="aboutTitle"
      :secondTitle="aboutSubtitle"
      :pageMessage="aboutParagraph"
      :pageImg="aboutImg"
    ></AboutAcryllic>
    <MidBlue></MidBlue>
    <RecentPieces></RecentPieces>
    <!-- <MainHexDesign></MainHexDesign> -->
    <!--  -->
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
      aboutTitle: "Acryllic Pouring",
      aboutSubtitle: "Why Do We Like It?",
      aboutParagraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
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