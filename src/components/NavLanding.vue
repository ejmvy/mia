<template>
  <section>
    <div class="classesLanding">
      <div class="icon-scroll"></div>
      <div class="headingText">
        <h1>{{ firstTitle }}</h1>
        <h3>{{ secondTitle }}</h3>
        <p>{{ landingMsg }}</p>
      </div>

      <div class="gridHexArea">
        <div class="gridArea" id="flexEnd">
          <div class="hexagon"></div>
        </div>
        <div class="gridArea" id="center">
          <div class="hexagon"></div>
        </div>
        <div class="gridArea" id="flexStart">
          <div class="hexagon"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["firstTitle", "secondTitle", "landingMsg"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.classesLanding {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  position: relative;
  min-height: 100vh;
}

.classesLanding .headingText {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 50px;
}

.gridHexArea {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 40%;
  padding: 0 50px;
}

.gridHexArea .gridArea {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.gridHexArea #flexStart {
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.gridHexArea #flexEnd {
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.gridHexArea #center {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

#boxShadow {
  -webkit-box-shadow: 0 10px 20px #ccc;
  box-shadow: 0 10px 20px #ccc;
}

.hexagon {
  position: relative;
  width: 150px;
  height: 86.6px;
  background-color: #64c7cc;
  margin: 43.3px 0;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 43.3px solid #64c7cc;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 43.3px solid #64c7cc;
}
</style>