<template>
  <div>
    <NavLanding
      :firstTitle="landing.pageTitle"
      :secondTitle="landing.subTitle"
      :landingMsg="landing.pageMessage"
    ></NavLanding>

    <div class="classTypes">
      <h2>Looking for that unique gift?</h2>
      <div id="extraPadding" class="type commissionIntro reorder">
        <div class="typeTextArea">
          <h3>What we can do</h3>
          <p>
            There are many variations of parem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Only 6 spots available each course.
            <br />Pieces range between €50 - €250
            <br />They take roughly about 1 week + delivery to arrive
          </p>
        </div>
        <div class="classSvgArea">
          <img id="classSvg" src="./assets/present.svg" />
        </div>
      </div>
    </div>

    <div class="classTypes">
      <h2>The Process</h2>
      <div class="type">
        <div class="canvasArea">
          <div class="colCanvus">
            <img id="canvasSvg" class="canvas" src="./assets/square.gif" />
            <p>Square</p>
          </div>
          <div class="colCanvus">
            <img id="canvasSvg" class="canvas" src="./assets/circle2.gif" />
            <p>Circle</p>
          </div>
          <div class="colCanvus">
            <img id="canvasSvg" class="canvas" src="./assets/hexagon.gif" />
            <p>Hexgon</p>
          </div>
          <div class="colCanvus">
            <img id="canvasSvg" class="canvas" src="./assets/rect3.png" />
            <p>Rectangle</p>
          </div>
        </div>
        <div class="typeTextArea paddingLeft">
          <h3>Choose your canvas</h3>
          <p>
            There are many variations of parem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Only 6 spots available each course.
            <br />Pieces range between
            <b>€50 - €250</b>
            <br />They take roughly about
            <b>1 week + delivery</b> to arrive
          </p>
        </div>
      </div>

      <div class="type reorder line">
        <div class="typeTextArea paddingRight">
          <h3>Choose your size</h3>
          <p>
            There are many variations of parem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            <br />
            <b>Square:</b> 20cm,&nbsp; 30cm,&nbsp; 40cm
            <br />
            <b>Circle:</b> 20cm, &nbsp; 25cm,&nbsp; 30cm, &nbsp; 40cm,&nbsp; 50cm
            <br />
            <b>Hexagon:</b> 30cm,&nbsp; 40cm
            <br />
            <b>Oval:</b> 15x20cm,&nbsp; 20x25cm
            <br />
            <b>Rectangle:</b> 30x100cm
          </p>
        </div>
        <div class="canvasArea">
          <div class="colCanvus">
            <img id="xsCanvas" class="canvas" src="./assets/circle2.gif" />
            <p>15cm</p>
          </div>
          <div class="colCanvus">
            <img id="smCanvas" class="canvas" src="./assets/circle2.gif" />
            <p>25cm</p>
          </div>
          <div class="colCanvus">
            <img id="mdCanvas" class="canvas" src="./assets/circle2.gif" />
            <p>35cm</p>
          </div>
          <div class="colCanvus">
            <img id="lgCanvas" class="canvas" src="./assets/circle2.gif" />
            <p>50cm</p>
          </div>
        </div>
      </div>

      <div id="bottomSect" class="type line">
        <div class="canvasArea">
          <img id="bigCanvas" class="canvas" src="./assets/canNoBG.png" />
        </div>
        <div class="typeTextArea paddingLeft">
          <h3>Choose your colours</h3>
          <p>
            There are many variations of parem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Only 6 spots available each course.
            <br />Pieces range between
            <br />
            <b>2 Colours: €50</b>
            <br />
            <b>2 Colours: €70</b>
            <br />
            <b>3 Colours: €90</b>
          </p>
        </div>
      </div>
    </div>

    <div class="commissionPieceArea">
      <div v-for="piece in commissionPieces" :key="piece">
        <img class="commissionPieceArt" :src="piece" />
      </div>
    </div>

    <div class="commissionContact">
      <div class="commissionText">
        <h2>Have something in mind ?</h2>
        <h4>Contact Mia with your specifications and lets create that perfect gift !</h4>
        <p>
          It will take approw 1 week to be made, polished and packed. Then we can either post it or it will be ready for collection. There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don't look even
          slightly believable.
        </p>
        <button>Contact Mia</button>
      </div>
    </div>
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
      },
      commissionPieces: [
        "https://i.ibb.co/yB8PpLM/gifgit-1.png",
        "https://i.ibb.co/yB8PpLM/gifgit-1.png",
        "https://i.ibb.co/yB8PpLM/gifgit-1.png",
        "https://i.ibb.co/yB8PpLM/gifgit-1.png"
      ]
    };
  },
  components: {
    NavLanding
  }
};
</script>

<style scoped>
p {
  color: #666;
}

b {
  color: black;
}
.classTypes,
.commissionContact {
  background: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  justify-content: center;
  align-items: center;
}

.commissionContact {
  padding-top: 60px;
}

.commissionContact .commissionText {
  text-align: center;
  width: 60%;
  margin-bottom: 40px;
}

.commissionContact .commissionText h4,
.commissionContact .commissionText p {
  margin: 50px 0;
}

.commissionIntro {
  margin: 50px 0;
  border-bottom: 2px solid rgb(170, 167, 167);
}

.divider {
  padding-top: 60px;
}

.classTypes h2 {
  text-align: center;
  margin-bottom: 30px;
}

.classTypes .type {
  width: 80%;
  display: flex;
  padding: 30px 0;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
}

#extraPadding {
  padding: 90px 0;
}

.classTypes .type .typeTextArea {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  /* flex: 1; */
}

.paddingLeft {
  margin-left: 50px;
}

.paddingRight {
  margin-right: 50px;
}

.classTypes .type .canvasArea {
  display: flex;
  width: 600px !important;
  text-align: center;
  align-items: center;
}

.classTypes .type .colCanvas {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#timetableBtn {
  width: 400px;
}

.classTypes .type .typeTextArea .classSvgArea {
  width: 400px !important;
}

#canvasSvg {
  width: 100px;
  height: 100px;
}

#bigCanvas {
  width: 200px;
  height: 200px;
}

.canvas {
  margin: 0 10px;
}

#classSvg {
  width: 400px;
  height: 300px;
}

#xsCanvas {
  width: 50px;
  height: 50px;
}

#smCanvas {
  width: 60px;
  height: 60px;
}

#mdCanvas {
  width: 80px;
  height: 80px;
}

#lgCanvas {
  width: 100px;
  height: 100px;
}

#bottomSect {
  padding-bottom: 100px;
}

.commissionPieceArea {
  background: #333399;
  width: 100%;
  display: flex !important;
  justify-content: space-around;
  padding: 20px 0;
}

.commissionPieceArea .commissionPieceArt {
  width: 200px;
  height: 200px;
}

@media (max-width: 900px) {
  .classTypes .type {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .classTypes .type .canvasArea {
    justify-content: center;
  }

  .classTypes .reorder {
    flex-direction: column-reverse;
  }

  .classTypes .line {
    border-top: 1px solid rgb(173, 170, 173);
  }

  .classTypes .type .typeTextArea h3 {
    padding-top: 30px;
  }

  #timetableBtn {
    margin: 0 auto;
    margin-top: 30px;
  }

  .paddingLeft {
    margin-left: 0;
  }

  .paddingRight {
    margin-right: 0;
  }
}

@media (max-width: 500px) {
  .canvas {
    margin: 0;
  }

  #classSvg {
    width: 300px;
    height: 200px;
  }

  #xsCanvas {
    width: 20px;
    height: 20px;
  }

  #smCanvas {
    width: 30px;
    height: 30px;
  }

  #mdCanvas {
    width: 50px;
    height: 50px;
  }

  #lgCanvas {
    width: 70px;
    height: 70px;
  }
  #canvasSvg {
    width: 60px;
    height: 60px;
  }
  #bigCanvas {
    width: 100px;
    height: 100px;
  }
}
</style>