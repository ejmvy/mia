 <template>
  <div>
    <MainLanding></MainLanding>
    <AboutAcryllic
      :firstTitle="about.aboutTitle"
      :secondTitle="about.aboutSubtitle"
      :pageMessage="about.aboutParagraph"
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
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        aboutImg: "https://i.ibb.co/q9cjMTT/imageedit-24-7966020525.png"
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
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png"
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