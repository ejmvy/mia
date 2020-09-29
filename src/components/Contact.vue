<template>
  <form @submit.prevent="submitForm">
    <div class="contactSection">
      <h1>Want to find out more?</h1>
      <h3>Contact Mia</h3>

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
          <textarea id="inputMessage" type="text" placeholder="Message" v-model="userEmail.message"></textarea>
          <button id="contactButton">Submit</button>
        </div>
      </div>
    </div>
  </form>
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
.contactSection {
  background: #30d5c8;
  padding-top: 120px;
  width: 100%;
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
  padding-bottom: 50px;
}

.contactSection .mailContactArea {
  width: 60%;
  margin-top: 40px;
  background: rgba(236, 240, 240, 0.2);
  padding: 0 20px;
  padding-bottom: 30px;
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
  margin: 20px 0;
  border-bottom: 3px solid #663399;
  font-size: 18px;
  color: #663399;
  transition: all 0.2s ease;
}

.selectBox {
  /* margin-top: 10px; */
  border: none;
  border-bottom: 3px solid #663399;
  padding: 30px 10px;
  background: none;
  font-size: 18px;
  /* color: gray; */
  color: #663399;
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
  color: white;
  border-bottom: 3px solid white;
}

.contactSection .mailContactArea .mailContact #contactButton {
  margin: 0 auto;
  margin-top: 30px;
  background: none;
  border: 3px solid #663399;
  color: #663399 !important;
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
  color: white !important;
  background: #663399;
}

@media (max-width: 500px) {
  h1 {
    text-align: center;
  }
}
</style>