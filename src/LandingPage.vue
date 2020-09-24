 <template>
  <div>
    <MainLanding></MainLanding>
    <AboutAcryllic></AboutAcryllic>
    <MidBlue></MidBlue>
    <RecentPieces></RecentPieces>
    <!-- <MainHexDesign></MainHexDesign> -->
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