<template>
  <div class="formBG">
    <form @submit.prevent="submitForm">
      <div class="contactSection">
        <h1>Contact Mia</h1>
        <h4>Send Mia an email and she'll get back to you as soon as possible!</h4>
        <div class="mailContactArea">
          <div class="mailContact">
            <input type="text" placeholder="Name" v-model="userEmail.name" />
            <input type="text" placeholder="Email" v-model="userEmail.email" />
            <select class="selectBox" v-model="userEmail.emailType">
              <option value="genEnquiry" selected>General Enquiry</option>
              <option value="eveningClass">Evening Class</option>
              <option value="fullDayClass">Full Day Class</option>
              <option value="week6Class">6 Week Course</option>
              <option value="commissionPiece">Commission a Piece</option>
            </select>
            <textarea
              id="inputMessage"
              type="text"
              placeholder="Message"
              v-model="userEmail.message"
            ></textarea>
            <button id="contactButton">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: {
        name: "",
        email: "",
        emailType: "genEnquiry",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("user: ", this.userEmail);
      //   this.name = "";
    }
  }
};
</script>


<style scoped>
.formBG {
  /* background: #30d5c8; */
  background: #75dad2;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
}

form {
  background: #663399;
  color: #f2f2f2;
  margin-top: 120px;
  width: 80%;
  margin-bottom: 60px;
  /* padding: 0 10px 60px 10px; */
  /* height: 60%; */
}

h1 {
  color: #f2f2f2;
  font-size: 45px;
  letter-spacing: 1.5px;
}

h4 {
  color: #d6d3d3;
  text-align: center;
}

.contactSection {
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
  justify-content: center;
  /* padding-bottom: 50px; */
  /* padding-top: 10px; */
  padding: 10px 15px 50px 15px;
  border: 10px solid #845bad;
  box-shadow: 0 0 5px #696969;
}

.contactSection .mailContactArea {
  width: 90%;
  margin-top: 40px;
  /* background: rgba(236, 240, 240, 0.2); */
  /* padding: 0 20px; */
  /* padding-bottom: 30px; */
}

.contactSection .mailContactArea .mailContact {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
}

.contactSection .mailContactArea .mailContact input,
.contactSection .mailContactArea .mailContact textarea {
  background: none;
  border: none;
  height: 20px;
  padding: 15px;
  margin: 20px 30px;
  border-bottom: 3px solid #f2f2f2;
  font-size: 18px;
  color: #f2f2f2;
  transition: all 0.2s ease;
}

.selectBox {
  /* margin-top: 10px; */
  border: none;
  border-bottom: 3px solid #f2f2f2;
  padding: 30px 10px;
  margin: 0 30px;
  background: none;
  font-size: 18px;
  /* color: gray; */
  color: #f2f2f2;
}

.selectBox:focus {
  outline: none;
}

.contactSection .mailContactArea .mailContact #inputMessage {
  height: 100px;
}

.contactSection .mailContactArea .mailContact input:focus,
.contactSection .mailContactArea .mailContact textarea:focus {
  outline: none;
  color: #f2f2f2;
  border-bottom: 3px solid #30d5c8;
}

.contactSection .mailContactArea .mailContact #contactButton {
  margin: 0 auto;
  margin-top: 30px;
  background: none;
  border: 3px solid #f2f2f2;
  color: #f2f2f2 !important;
  font-weight: bold;
  border-radius: 25px;
  width: 160px;
  height: 50px;
  padding: 15px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  align-self: center;
  box-shadow: none;
  text-transform: uppercase;
  font-family: "Kodchasan", sans-serif;
}

textarea {
  font-family: "Rubik", sans-serif;
}

.contactSection .mailContactArea .mailContact #contactButton:hover {
  background: white;
  color: #663399 !important;
}

::placeholder {
  color: #bebbbb;
}

@media (max-width: 1000px) {
  h1 {
    font-size: 30px;
  }
}

@media (max-width: 500px) {
  h1 {
    text-align: center;
  }
}
</style>