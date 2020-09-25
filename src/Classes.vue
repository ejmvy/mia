<template>
  <div>
    <NavLanding
      :firstTitle="landing.pageTitle"
      :secondTitle="landing.subTitle"
      :landingMsg="landing.pageMessage"
    ></NavLanding>

    <!-- <AboutAcryllic
      :firstTitle="about.aboutTitle"
      :secondTitle="about.aboutSubtitle"
      :pageMessage="about.aboutParagraph"
      :pageImg="about.aboutImg"
    ></AboutAcryllic>-->

    <ClassType></ClassType>

    <MidBlue
      :title="midBlue.midTitle"
      :text1="midBlue.textOne"
      :text2="midBlue.textTwo"
      :text3="midBlue.textThree"
      :icons="midBlue.icons"
      :showQuote="showQuote"
    ></MidBlue>

    <RecentPieces
      :recentTitle="recent.title"
      :imagesToDisplay="recent.images"
      :questionText="recent.question"
      :btnText="recent.buttonText"
    ></RecentPieces>

    <ClassBlurb></ClassBlurb>
  </div>
</template>


<script>
import NavLanding from "./components/NavLanding.vue";
// import AboutAcryllic from "./components/landingPage/AboutAcryllic.vue";
import MidBlue from "./components/landingPage/MidBlue.vue";
import RecentPieces from "./components/landingPage/RecentPieces.vue";
import ClassType from "./components/classesPage/ClassType.vue";
import ClassBlurb from "./components/classesPage/ClassBlurb.vue";
export default {
  data() {
    return {
      landing: {
        pageTitle: "Like To Learn Acryllic Pouring?",
        subTitle: "Come learn something new with Mia.",
        pageMessage:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden."
      },
      about: {
        aboutTitle: "Acryllic Pour Classes",
        aboutSubtitle: "Classes in the heart of Dublin!",
        aboutParagraph:
          "This workshop will introduce you to the world of acrylic pouring. It being a relatively new medium in the art world, only being in existence for the last few years. The number of places that teach it are extremely limited in ireland, but now classes and workshops are available in Dublin City Centre. This workshop will teach you acrylic pouring from the basics, its theory and the many, many techniques that can be used to create some truly incredible and unique pieces of art. After learning the basics of acrylic pouring, Mia went on to explore the medium further and delve into & cultivate new techniques and developing a uniquely crafted style and approach to the modern medium. Students will learn several different techniques, each of which will be demonstrated in detail by your tutor.",
        aboutImg: "https://i.ibb.co/tb9WF8X/acryllic.jpg"
      },
      midBlue: {
        quote:
          "Thoroughly enjoyable experience. I was delighted with what I ended up making!",
        midTitle: "How it works",
        textOne:
          "We supply all materials, paints and canvas's while you learn and create your lovely piece!",
        textTwo:
          "A few days later we varnish the piece for extra protection and to give it a lovely shine.",
        textThree:
          "After a week your artwork is ready for collection and hopefully will find a place among other pieces hanging in your house!",
        icons: ["fa-palette", "fa-paint-brush", "fa-car-side"],
        showQuote: false
      },
      recent: {
        title: "Recent Pieces by our Students",
        images: [
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png",
          "https://i.ibb.co/yB8PpLM/gifgit-1.png"
        ],
        question: "Have any questions about our classes?",
        buttonText: "Contact me",
        showBtn: false
      }
    };
  },
  components: {
    NavLanding,
    MidBlue,
    ClassType,
    RecentPieces,
    ClassBlurb
  }
};
</script>

<style scoped>
</style>