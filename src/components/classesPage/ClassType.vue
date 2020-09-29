<template>
  <section class="classTypes">
    <h2>Our Classes</h2>
    <div class="type reorder">
      <div class="typeTextArea">
        <h3>Evening Class</h3>
        <p>
          There are many variations of parem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Only 6 spots available each course.
          <br />Evening classes take place every
          <b>Tuesday & Thursday</b> from
          <b>18:00 - 20:00</b>
        </p>
      </div>
      <div class="classSvgArea">
        <img id="classSvg" src="../../assets/draw.svg" />
      </div>
    </div>

    <div class="type line">
      <div class="classSvgArea">
        <img id="classSvg" src="../../assets/fullDay.svg" />
      </div>
      <div class="typeTextArea">
        <h3>Full Day Class</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Only 6 spots available each course.
          <br />Full Day classes take place the
          <b>second and last Saturday</b> each month from
          <b>10:00 to 17:00</b>
        </p>
      </div>
    </div>

    <div class="type reorder line">
      <div class="typeTextArea">
        <h3>6 Week Evening Course</h3>
        <p>
          There are many va of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Only 6 spots available each course.
          <br />Upcoming 6 week courses:
          <br />05/10/2020 - 16/10/2020 &nbsp; Every Monday 18:00 - 20:00
          <br />07/10/2020 - 18/10/2020 &nbsp; Every Wednesday 18:00 - 20:00
          <br />23/11/2020 - 04/01/2021 &nbsp; Every Monday 18:00 - 20:00
          <br />25/11/2020 - 06/01/2021 &nbsp; Every Wednesday 18:00 - 20:00
        </p>

        <router-link to="/contact" id="routerStyle">
          <button id="timetableBtn">Contact me for class enquiries</button>
        </router-link>
      </div>
      <div class="classSvgArea">
        <img id="classSvg" src="../../assets/week.svg" />
      </div>
    </div>
  </section>
</template>


<style scoped>
h2 {
  padding-bottom: 20px;
}
b {
  color: black;
}

p {
  color: #666;
}
.classTypes {
  background: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

.classTypes .type {
  width: 80%;
  display: flex;
  padding: 40px 50px;
}

.classTypes .type .typeTextArea {
  display: flex;
  flex-direction: column;
  /* flex: 1; */
}

#timetableBtn {
  width: 300px;
}

.classTypes .type .typeTextArea .classSvgArea {
  width: 400px !important;
}

#classSvg {
  width: 400px;
  height: 300px;
}

@media (max-width: 900px) {
  .classTypes .type {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
}
</style>