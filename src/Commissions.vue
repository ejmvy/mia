<template>
  <div>
    <NavLanding
      :firstTitle="landing.pageTitle"
      :secondTitle="landing.subTitle"
      :landingMsg="landing.pageMessage"
    ></NavLanding>
  </div>
</template>

<script>
import NavLanding from "./components/NavLanding.vue";
export default {
  data() {
    return {
      landing: {
        pageTitle: "Commission A Piece",
        subTitle: "For Someone Special.",
        pageMessage:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden."
      }
    };
  },
  components: {
    NavLanding
  }
};
</script>