<template>

  <div class="homePage" v-if="!showMenu">

    
    <div class="homeSection d-flex flex-row justify-space-between">


      <div class="one " style="margin-left: 30vh;gap: 2vh;">

        <h1 style="color: aliceblue;">Hello I'm</h1>
        <h2 style="color: aqua;font-size: 35px;">Omar Hasan</h2>
        <h3 style="color: aliceblue;font-size: 20px;">Front end Web Developer</h3>
        <p class="par">
          Main area of my expertise is front-end development and everything related with this
          side of web. HTML CSS JS, Now, I am currently learning on of the front-end frameworks,
          Vue.js
        </p>

          <div class="d-flex align-center mt-8">

            <button class="downloadButton" @click="downloadFile">DOWNLOAD CV 
            <v-icon style="font-size: 20px;">mdi-tray-arrow-down</v-icon>
            </button>
            <a style="display: none;" ref="download"></a>


            <div class="myLinks d-flex">
                <a href="https://github.com/OmarHasan1999" target="blank"><v-icon>mdi-github</v-icon></a>
                <a href="https://www.linkedin.com/in/omar-hasan-a633aa252/" target="blank"><v-icon>mdi-linkedin</v-icon></a>
                <a href="https://www.facebook.com/omar.hamad.18294" target="blank"><v-icon>mdi-facebook</v-icon></a>
                <a href="https://www.instagram.com/omar._.hasan/" target="blank"><v-icon>mdi-instagram</v-icon></a>

            </div>

          </div>


      </div>
      

    </div>

    <!-- The container for the 3D model -->
    <div class="modelImage"></div>

  </div>
  
  

</template>


<script>
import cv from "../assets/OmarHasan.pdf"
import ScrollReveal from 'scrollreveal';
import { imageModel } from "../js/imageModel";
import { nextTick } from "vue";


export default {
  data() {
    return {
      fileName : "OmarHasan.pdf",
      pathName: cv,
    }
  },
  methods: {
    downloadFile(){
        const download = this.$refs.download
        download.href = this.pathName
        download.download = this.fileName
        download.click()
    },

  },

  mounted() {
    // run threejs code 
    nextTick(() => {
      const container = document.querySelector(".modelImage")
      if(container){
        this.stopModelAnimation = imageModel()
      }
      else(console.log("the error is ..."))
    })

    /****scroll reveal*****/   
    ScrollReveal().reveal(".homeSection", {
      origin: "left",
      distance: "50px",
      duration: "1000",
      easing: "ease-in-out"
    }
  )
    
  },
  beforeUnmount() {
    if (this.stopModelAnimation) {
      this.stopModelAnimation();
    }
  },

  inject : ['showMenu']
}


</script>

<style lang="css">

  .homePage{
    width:100%;
    height: 100%;
    position: absolute;
    margin: 0%;
    padding: 0%;
    scroll-behavior: smooth;
    overflow: hidden;
  }
  .homeSection{
    padding-top: 33vh;
  }
  .one{
    display: flex;
    flex-direction: column;
  }
  .par{
    color: aliceblue;
    width: 55%;
  }
  .myLinks a{
    color: aliceblue;
    font-size: 20px;
    text-decoration: none;
    padding-left: 15px;
  }
  .myLinks{
    margin-left: 32px;
    transition: 0.3s ease;
  }
  .myLinks a:hover{
    color:aqua
  }
  .downloadButton{
    background-color: transparent;
    border: 1px solid aqua;
    border-radius: 20px;
    color:aqua;
    padding: 7px 30px ;
    font-weight: 600;
    text-align: center;
    border-left-width: 2px;
    border-right-width: 2px;
  }
  .modelImage{
    position: absolute;
    top: 0%;
    left: 5%;
  }

  @media (max-width:1200px){
    .homePage{
      overflow: hidden;
      overflow-x: hidden; 
      overflow-y: hidden;
    }
    
  .homeSection{
    padding-left: -15vh;
    margin-left: -10vh;
  }
  .one{
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  .one h1{
    font-size: 24px;
  }
  .homePage .homeSection .one h2{
    font-size: 26px !important;
  }
  .homePage .homeSection .one h3{
    font-size: 25px !important;
  }
  .par{
    color: aliceblue;
    width: 53%;
    font-size: 18px;
  }
  .myLinks a{
    color: aliceblue;
    font-size: 20px;
    text-decoration: none;
    padding-left: 15px;
  }
  .myLinks{
    margin-left: 32px;
    transition: 0.3s ease;
    margin-top: -3vh;
  }
  .myLinks a:hover{
    color:aqua
  }
  .downloadButton{
    background-color: transparent;
    border: 1px solid aqua;
    border-radius: 20px;
    color:aqua;
    padding: 7px 30px ;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    border-left-width: 2px;
    border-right-width: 2px;
    margin-top: -3vh;
  }
  .modelImage{
    margin-left: -12vh;
    margin-top: -15vh;
  }
  }

  @media (max-width:1024px){
    .homePage{
      overflow: hidden;
      overflow-x: hidden; 
      overflow-y: hidden;
    }
  }

  @media (max-width:991px){
    .homeSection{
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: -12vh;
    }
    .homePage{
      display: flex;
      justify-content: center;
      flex-direction: column;
      overflow: hidden;
      overflow-x: hidden; 
      overflow-y: hidden;
    }
  .one h1{
    font-size: 23px;
  }
  .homePage .homeSection .one h2{
    font-size: 25px !important;
  }
  .homePage .homeSection .one h3{
    font-size: 23px !important;
  }
  .par{
    font-size: 17px;
  }
  }



  @media (max-width:768px){
    .homeSection{
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: -2vh;
    }
    .homePage{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width:100%;
      height: 100%;
      margin: 0%;
      padding: 0%;
      overflow: hidden;
      overflow-x: hidden; 
      overflow-y: hidden;
    }
    .par{
      color: aliceblue;
      width: 86%;
      margin-top: 1.7vh;
      margin-left: -7.2vh;
      text-align: center;
      font-size: 15px;
    }
     .one h1{
      margin-left: 28vh;
    }
      
    .one h2{
      font-size: 30px;
      margin-left: 26vh;

    }
    .one h3{
      font-size: 18px;
      margin-left: 13vh;
      margin-top: 2vh;
    }
    .downloadButton{
      margin-left: 19vh;
      margin-bottom: 8vh;
  }
  .myLinks{
      margin-top: 7vh;
      margin-left: -35vh;
  }
  .modelImage{
    margin-bottom: 50vh;
  }

  }


  @media (max-width:617px){
    .homeSection{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .homePage{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width:100%;
      height: 100%;
      margin: 0%;
      padding: 0%;
      overflow: hidden;
      overflow-x: hidden; 
      overflow-y: hidden;
    }
    .one h1{
      margin-left: 16vh;

    }
    .homePage .homeSection .one h2{
      margin-top: 1vh;
      margin-left: 15vh;
    }
    .one h3{
      font-size: 18px;
      margin-left: 2vh;
    }
    .par{
      color: aliceblue;
      width: 100%;
      margin-left: -12.2vh;
      margin-top: 2vh;
      text-align: center;
    }
    .downloadButton{
      margin-left: 9vh;
  }
  .modelImage{
    margin-top: -20vh;
  }
  }

  @media (max-width:450px){
    .homeSection{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .homePage{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width:100%;
      height: 100%;
      margin: 0%;
      padding: 0%;
      overflow: hidden;
      overflow-x: hidden; 
      overflow-y: hidden;
    }
    .one h1{
      margin-left: 2vh;
    }
    .one h2{
      position: absolute;
      top: 41.2%;
      left: 18.7%;
      font-size: 30px;
      width: 100%;
    }
    .one h3{
      font-size: 18px;
      margin-left: -13vh;
      margin-top: 8vh;
    }
    .par{
      color: aliceblue;
      width: 125%;
      margin-left: -19.6vh;
      margin-top: 1vh;
    }
    .downloadButton{
      margin-left: -5vh;
      padding: 5px 17px;
      margin-top: -3vh;
  }
   .myLinks{
      padding-left: 2vh;
  } 
  .modelImage{
    margin-top: -42vh;
  }
  }

  @media (max-width:365px){
    .homeSection{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .homePage{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width:100%;
      height: 100%;
      margin: 0%;
      padding: 0%;
      overflow: hidden;
      overflow-x: hidden; 
      overflow-y: hidden;
    }
    .one h1{
      position: relative;
      margin-left: -6vh;
    }
    .one h2{
      position: absolute;
      top: 42.2%;
      left: 12%;
      font-size: 30px;
      margin-top: 1vh;
    }
    .homePage .homeSection .one h3{
    font-size: 20px !important;
    margin-left: -16vh;
    margin-top: 9vh;
    width: 160%;
  }
  .par{
      width: 155%;
      margin-left: -22.3vh;
      font-size: 13px;
      margin-top: 1vh;
    }
    .downloadButton{
      margin-left: -12vh;
  }
  .modelImage{
    margin-top: -43vh;
  }
  
  }


  @media (max-width:320px){
    .homeSection{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .homePage{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width:100%;
      height: 100%;
      margin: 0%;
      padding: 0%;
      overflow: hidden;
      overflow-x: hidden; 
      overflow-y: hidden;
    }
    .one h1{
      margin-left: -9vh;
    }
    .one h2{
      position: absolute;
      top: 41.8%;
      left: 7.3%;
    }
    .homePage .homeSection .one h3{
    margin-left: -20vh;
    margin-top: 8vh;
    width: 170%;
    font-style: 16px;
  }
  .par{
      width: 180%;
      margin-left: -24.3vh;
      font-size: 13px;
      margin-top: 2vh;
    }
    .downloadButton{
      padding: 5px 12px ;
      font-weight: 400;
      font-size: 17px;
      margin-right: 3vh;
  }
  .myLinks{
      padding-left: -3vh;
  }

  }


</style>