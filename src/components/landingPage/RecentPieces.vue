<template>
  <section id="recentSection">
    <h1 class="recentHeading">Recent Pieces</h1>
    <div class="displayArtwork">
      <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>
      <!-- <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>
      <div class="animateUp bounceUp">
        <div class="artBox">
          <img class="artwork" src="https://i.ibb.co/yB8PpLM/gifgit-1.png" />
        </div>
      </div>-->
    </div>
    <div class="commissionQ">
      <h3>Have someone special you'd like to commission a piece for?</h3>
      <button>More details</button>
    </div>
  </section>
</template>

<style scoped>
#recentSection {
  width: 100%;
  background: #f2f2f2;
  padding: 40px 0;
}

#recentSection .recentHeading {
  font-family: "Titan One", cursive;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-bottom: 20px;
  text-align: center;
}

#recentSection .displayArtwork {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

#recentSection .displayArtwork .artBox {
  -webkit-box-shadow: 0 5px 20px #ccc;
  box-shadow: 0 5px 20px #ccc;
  border-radius: 10px;
  width: 300px;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  margin: 20px;
}

#recentSection .displayArtwork .artBox .artwork {
  width: 100%;
}

#recentSection .displayArtwork .artBox:hover {
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
}

#recentSection .displayArtwork #smallBox {
  width: 250px;
}

.commissionQ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0;
}

@media (max-width: 700px) {
  #recentSection .displayArtwork .artBox {
    width: 90%;
    height: 80%;
    margin-bottom: -10px;
  }
  #recentSection .displayArtwork .artBox .artwork {
    height: 95%;
  }
}
</style>