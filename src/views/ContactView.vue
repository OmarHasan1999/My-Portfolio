<template>



    <div class="contact" v-if="!showMenu">
        
        <div class="contactSection d-flex flex-row align-center">

            <div class="contactOne">
                <h1>Let's work together</h1>
                <div class="inputs">

                    <form @submit.prevent="sendMessage">
                    <input type="text" class="inputOne" placeholder="FirstName" v-model="form.firstName" required>
                    <input type="text" class="inputOne" placeholder="LastName" v-model="form.lastName" required>
                    <input type="email" class="inputOne" placeholder="EmailAddress" v-model="form.email" required>
                    <input type="number" class="inputOne" placeholder="PhoneNumber" v-model="form.phoneNum" required>
                    <textarea rows="4" cols="52" placeholder="Type your message here" v-model="form.message" required></textarea>
                    <button type="submit">Send message</button>
                    <div
                    v-show="snack"
                    style="position: absolute;border-style: none;top: 82.3%;left: 30%;
                    color: aliceblue;background-color: transparent;"
                    >
                    {{ theMessage }}

                    </div>
                    </form>


                </div>
            </div>

            <div class="contactTwo d-flex flex-column" style="gap: 3vh;">

                <div class="phone"><v-icon class="iconContact">mdi-phone</v-icon></div>
                <div class="email"><v-icon class="iconContact">mdi-email</v-icon></div>
                <div class="address"><v-icon class="iconContact">mdi-map-marker</v-icon></div>

            </div>

            <div class="contactThree d-flex flex-column">

                <div class="phoneNum">
                    <h3>Phone</h3>
                    <p>(+90)5318360156</p>
                </div>
                <div class="emailName">
                    <h3>Email</h3>
                    <p style="margin-top: 0.5vh;">omar.f.hasan.1999@gmail.com</p>
                </div> 
                
                <div class="addressName">
                    <h3>Address</h3>
                    <p>SeferPaşa, Gaziantep, Turkey</p>
                </div>

</div>

        </div>

    </div>
</template>


<script>
import ScrollReveal from 'scrollreveal';
import emailjs from '@emailjs/browser';

export default {
    data() {
    return {
        form : {
            firstName: "",
            lastName: "",
            message: "",
            phoneNum: "",
            email: "",
        },
        snack: false,
        theMessage : "",
    }
  },

  methods: {
        async sendMessage() {
        // Initialize EmailJS
        emailjs.init('Pd15F-VYaJLkFTBNR'); // Replace with your own user ID

        // EmailJS parameters
        const serviceID = 'default_service'; // Replace with your service ID
        const templateID = 'template_i3wazzi'; // Replace with your template ID
        const templateParams = {
          from_name: `${this.form.firstName} ${this.form.lastName}`,
          to_email: this.form.email,
          phone_number: this.form.phoneNum,
          message: this.form.message
        };

        // Send email
        await emailjs.send(serviceID, templateID, templateParams);
        setTimeout(() => {
        this.snack = true
        this.theMessage = "successfully send it"
        },3000)
        this.form = {
            firstName : "",
            lastName : "",
            phoneNum : "",
            message : "",
            email : ""
        }
    },
  },

  mounted() {
    /****scroll reveal*****/   
    ScrollReveal().reveal(".contactSection", {
      origin: "none",
      distance: "0px",
      opacity:0,
      duration: "700",
      easing: "ease-in-out",
    }
  )
  },


  inject : ['showMenu', 'scrollDown'],
}
</script>


<style lang="css">
    .contact{
        width:100%;
        height: 100vh;
        position: absolute;
        padding-top: 26vh;
        scroll-behavior: smooth;
    }
    .contactOne{
        display: flex;
        flex-direction: column;
        width: 90vh;
        height: 64vh;
        border-radius: 7px;
        margin-left: 29vh;
        gap: 2vh;
    }
    .contactOne h1{
        color: aqua;
        margin-top: 3vh;
        margin-left: 5vh;
        font-size: 46px;
        font-weight: 500;

  text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(to right, #11b0c5 10%, #32ccee 50%, #57d7a2 60%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 1.5s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.inputs{
    margin-top: -2vh;
}
    .inputOne{
        width: 37.1vh;
        height: 7vh;
        border: 1px solid #6c6565;
        background-color: transparent;
        border-radius: 5px;
        margin-top: 3vh;
        margin-left: 5vh;
        color: rgba(255, 255, 255, 0.875);
        text-align: left;
        padding-left: 12px;
        transition: 0.2s ease;
    }
    .inputOne::placeholder{
        color: rgba(240, 248, 255, 0.627);
    }
    input:focus {
        border-color:aqua;
        outline: none;
}
    textarea{
        margin-top: 2.4vh;
        margin-left: 5vh;
        border: 1px solid #6c6565;
        color: rgba(255, 255, 255, 0.875);
        text-align: left;
        padding-left: 12px;
        border-radius: 4.5px;
    }
    textarea:focus {
        border-color: aqua;
        outline: none;       
}
    textarea::placeholder{
        color: rgba(240, 248, 255, 0.627);
    }
    .inputs button{
        border: 1px solid aqua;
        border-radius: 20px;
        margin-top: 1.7vh;
        margin-left: 5vh;
        text-align: center;
        color: rgba(0, 0, 0, 0.843);
        background-color:aqua;
        padding: 5px 18px;
        font-weight: 600;
    }
    .contactTwo{
       margin-left: 28vh;
       margin-bottom: 32vh;
    }
    .phone{
        width: 12vh;
        height: 12vh;
        border: 1px solid transparent;
        background-color: rgba(0, 0, 0, 0.204);
        border-radius: 5px;
    }
     .email{
        width: 12vh;
        height: 12vh;
        border: 1px solid transparent;
        background-color: rgba(0, 0, 0, 0.204);
        border-radius: 5px;
        position: absolute;
        top: 53%;
    }
    
    .address{
        width: 12vh;
        height: 12vh;
        border: 1px solid transparent;
        background-color: rgba(0, 0, 0, 0.204);
        border-radius: 5px;
        position: absolute;
        top: 70%;
    }
    .iconContact{
        color: aqua;
        font-size: 5.6vh;
        padding: 35px;
    }
    .contactThree h3{
        color: rgba(240, 248, 255, 0.587);
        font-weight: 400;
    }
    .contactThree p{
        color:white;
        font-size: 20px;
    }
    .phoneNum{
        position: absolute;
        right: 16%;
        top: 37.2%;
    }
    .emailName h3{
        position: absolute;
        right: 24.2%;
        top: 54.6%;
    }
    .emailName p{
        position: absolute;
        right: 6%;
        top: 58.2%;
    }
    .addressName{
        position: absolute;
        right: 5%;
        top: 71%;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
}


@media (max-width:1200px){
    .inputOne{
        width: 38.4vh;
    }
    .contactTwo{
       margin-left: 12vh;
       margin-bottom: 32vh;
    }
    .emailName p{
        margin-right: -3vh;
    }
    .emailName h3{
        margin-right: 2vh;
    }
    .addressName{
        margin-right: -2vh;
    }
}

@media (max-width:1024px){
    .contactOne{
        margin-left: 10vh;
    }
    .contactTwo{
       margin-left: 7vh;
    }
    .emailName p{
        margin-right: -6vh;
    }
    .emailName h3{
        margin-right: 4vh;
    }
    .addressName{
        margin-right: -5.5vh;
    }
}

@media (max-width:991px){
    .contactOne{
        margin-left: 5vh;
    }
}
@media (max-width:768px){
    .contact{
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .contactOne{
        margin-top: -60vh;
    }
    .contactTwo{
        position: absolute;
        top: 85%;
        left: 12%;
    }
    .contactTwo .email{
        margin-top: 7vh;
    }
    .contactTwo .address{
        margin-top: 18vh;
    }
    .phoneNum{
        margin-top: 49.4vh;
        margin-right: 46.7vh;
    }
    .emailName h3{
        margin-top: 45.7vh;
        margin-right: 55vh;
    }
    .emailName p{
        padding-top: 46vh;
        margin-right: 37vh;
    }
    .addressName{
        margin-top: 41.5vh;
        margin-right: 36vh;
    }
    .contactSection{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 110vh;
    }
}

@media (max-width:617px){
    .phoneNum{
        margin-top: 49.4vh;
        margin-right: 37vh;
    }
    .emailName h3{
        margin-top: 45.7vh;
        margin-right: 47vh;
    }
    .emailName p{
        padding-top: 46vh;
        margin-right: 24vh;
    }
    .addressName{
        margin-top: 41.5vh;
        margin-right: 24vh;
    }
    .contactTwo{
        position: absolute;
        top: 85%;
        left: 3.5%;
    }
}

@media (max-width:450px){
    .contactSection{
        height: 120vh;
    }
    .contactOne {
        padding-left: 10vh;
    }
    .contactOne h1{
        font-size: 22px;
        font-weight: 900;
    }
    textarea{
        width: 38.7vh
    }
    .contactTwo{
        position: absolute;
        top: 103%;
        left: 10.5%;
    }
    .phoneNum{
        margin-top: 67.6vh;
        margin-right: 10.2vh;
    }
    .emailName h3{
        margin-top: 64vh;
        margin-right:23vh;
    }
    .emailName p{
        padding-top: 65vh;
        margin-right: 2.8vh;
        font-size: 17px;
    }
    .addressName{
        margin-top: 60vh;
        margin-right: 2vh;
    }
    .addressName p{
        font-size: 17px;
    }
}

@media (max-width:365px){
    .contactOne {
        padding-left: 3vh;
    }
    .contactTwo{
        position: absolute;
        top: 103%;
        left: 4%;
    }
    .phoneNum{
        margin-top: 67.6vh;
        margin-right: 9vh;
    }
    .phoneNum p{
        font-size: 16px;
        font-weight: 900;
    }
    .emailName h3{
        margin-top: 64vh;
        margin-right: 17.5vh;
    }
    .emailName p{
        padding-top: 65vh;
        margin-right: -0.3vh;
        font-size: 15px;
        font-weight: 900;
    }
    .addressName{
        margin-top: 60vh;
        margin-right: 2vh;
    }
    .addressName p{
        font-size: 14px;
        font-weight: 900;
    }
}

@media (max-width:320px){
    .contactOne {
        padding-left: 0vh;
    }   
    .contactTwo{
        position: absolute;
        top: 103%;
        left: -3%;
    }
    .phoneNum{
        margin-top: 67.6vh;
        margin-right: 7vh;
    }
    .emailName h3{
        margin-top: 64vh;
        margin-right: 16vh;
    }
    .emailName p{
        padding-top: 65vh;
        margin-right: -0.8vh;
        font-size: 14px;
        font-weight: 900;
    }
    .addressName{
        margin-top: 60vh;
        margin-right: -1.3vh;
    }
}
</style>