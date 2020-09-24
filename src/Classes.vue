<template>
  <div>
    <NavLanding
      :firstTitle="landing.pageTitle"
      :secondTitle="landing.subTitle"
      :landingMsg="landing.pageMessage"
    ></NavLanding>

    <AboutAcryllic
      :firstTitle="about.aboutTitle"
      :secondTitle="about.aboutSubtitle"
      :pageMessage="about.aboutParagraph"
      :pageImg="aboutImg"
    ></AboutAcryllic>

    <section id="midBlue">
      <div class="processDetails">Our Classes</div>
      <div class="extraDetails">
        <div class="circleArea">
          <div class="circle">
            <i class="fas fa-palette"></i>
          </div>
          <p class="hiddenText">
            We supply all materials, paints and canvas's while you learn and
            create your lovely piece!
          </p>
        </div>
        <div class="circleArea">
          <div class="circle">
            <i class="fas fa-paint-brush"></i>
          </div>
          <p class="hiddenText">
            A few days later we varnish the piece for extra protection and to
            give it a lovely shine.
          </p>
        </div>
        <div class="circleArea">
          <div class="circle">
            <i class="fas fa-car-side"></i>
          </div>
          <p class="hiddenText">
            After a week your artwork is ready for collection and hopefully will
            find a place among other pieces hanging in your house!
          </p>
        </div>
      </div>
    </section>

    <section id="recentSection">
      <h3 class="recentHeading">Recent Pieces by our Students</h3>
      <div class="displayArtwork">
        <div class="animateUp bounceUp">
          <div class="artBox" id="smallBox">
            <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
          </div>
        </div>
        <div class="animateUp bounceUp">
          <div class="artBox" id="smallBox">
            <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
          </div>
        </div>
        <div class="animateUp bounceUp">
          <div class="artBox" id="smallBox">
            <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
          </div>
        </div>
        <div class="animateUp bounceUp">
          <div class="artBox" id="smallBox">
            <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
          </div>
        </div>
      </div>
    </section>

    <section class="classesPhoto">
      <div class="fullPhoto">
        <img id="fullimage" src="https://i.ibb.co/ngTkrny/acrylic-pouring.jpg" />
      </div>
      <div class="imageText">
        <h3>Interested In A Class ?</h3>
        <p>
          Contact Mia to see available dates and begin your journey for your
          next favorite hobby! There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don't look even
          slightly believable.
        </p>
      </div>
    </section>
  </div>
</template>


<script>
import NavLanding from "./components/NavLanding.vue";
import AboutAcryllic from "./components/landingPage/AboutAcryllic.vue";
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
      }
    };
  },
  components: {
    NavLanding,
    AboutAcryllic
  }
};
</script>

<style scoped>
/* CLASSES CSS  */
.classesPhoto {
  position: relative;
  width: 100%;
  min-height: 350px;
  padding: 30px 0;
}

.classesPhoto .fullPhoto {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.classesPhoto .fullPhoto #fullimage {
  width: 100%;
  height: 100%;
}

.classesPhoto .imageText {
  width: 40%;
  position: relative;
  background: white;
  padding: 20px 50px;
  text-align: center;
  z-index: 3;
  -webkit-box-shadow: 0 10px 20px grey;
  box-shadow: 0 10px 20px grey;
}

.classesPhoto .imageText p {
  color: #808080;
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