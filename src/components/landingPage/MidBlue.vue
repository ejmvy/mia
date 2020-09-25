<template>
  <section id="midBlue">
    <div v-if="showQuote" class="animateUp slideLeft">
      <div class="quote">
        <h3>{{ mainQuote }}</h3>
        <div class="quoteMarks">
          <i class="fas fa-quote-right"></i>
        </div>
      </div>
    </div>
    <div class="processDetails">{{ title }}</div>
    <div class="extraDetails">
      <div class="circleArea">
        <div class="circle">
          <i class="fas fa-palette"></i>
        </div>
        <p class="hiddenText">{{ text1 }}</p>
      </div>
      <div class="circleArea">
        <div class="circle">
          <font-awesome-icon icon="spinner" />
          <!-- <i class="fas fa-paint-brush"></i> -->
        </div>
        <p class="hiddenText">{{ text2 }}</p>
      </div>
      <div class="circleArea">
        <div class="circle">
          <i class="fas fa-brush"></i>
        </div>
        <p class="hiddenText">{{ text3 }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["mainQuote", "title", "text1", "text2", "text3", "icons", "showQuote"]
};
</script>

<style scoped>
#midBlue {
  width: 100%;
  padding-top: 50px;
  background: #333399;
}

#midBlue .quote {
  width: 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
}

#midBlue .quote h3 {
  position: relative;
  left: 30px;
  font-size: 30px;
  color: #ccc;
  font-weight: bold;
}

#midBlue .quote i {
  color: rgba(48, 213, 200, 0.5);
  font-size: 100px;
  z-index: -1;
  padding-left: 30px;
}

#midBlue .quoteMarks {
  position: relative;
  margin-left: 50px;
}

#midBlue .processDetails {
  font-size: 20px;
  color: #30d5c8;
  padding: 30px 0;
  text-transform: uppercase;
  font-family: "Kodchasan", sans-serif;
  letter-spacing: 3px;
}

#midBlue .extraDetails {
  width: 60%;
  margin-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

#midBlue .extraDetails .circleArea {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 30px 20px 0 20px;
  text-align: center;
}

#midBlue .extraDetails .circleArea .hiddenText {
  color: #ccc;
  margin-top: 50px;
  text-align: center;
  max-width: 200px;
  min-height: 200px;
}

#midBlue .extraDetails .circle {
  width: 120px;
  height: 120px;
  background: #30d5c8;
  border-radius: 50%;
  color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

#midBlue .extraDetails .circle i {
  position: relative;
  top: 30%;
  font-size: 50px;
  z-index: 2;
}

#midBlue .extraDetails .circle:hover {
  cursor: pointer;
  background: white;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

#midBlue .extraDetails .circle:hover i {
  color: #30d5c8;
}

@media (max-width: 1000px) {
  #midBlue .quote {
    width: 90%;
  }
  #midBlue .extraDetails {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 25px 0;
  }
  #midBlue .extraDetails .circleArea {
    padding-top: 50px;
  }
  #midBlue .extraDetails .circleArea .hiddenText {
    max-width: none;
    min-height: 50px;
  }
}
</style>