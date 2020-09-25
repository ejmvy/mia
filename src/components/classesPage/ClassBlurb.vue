<template>
  <section class="classesPhoto">
    <div class="fullPhoto">
      <img id="fullimage" src="https://i.ibb.co/ngTkrny/acrylic-pouring.jpg" />
    </div>
    <div class="imageText">
      <h3>Interested in a class ?</h3>
      <p>
        Contact Mia to see available dates and begin your journey for your
        next favorite hobby! There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered alteration in some
        form, by injected humour, or randomised words which don't look even
        slightly believable.
      </p>
      <button>Contact me for details</button>
    </div>
  </section>
</template>


<style scoped>
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

@media (max-width: 600px) {
  .classesPhoto .imageText {
    width: 60%;
  }
}
</style>