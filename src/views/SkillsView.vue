<template>



    <div class="skills" v-if="!showMenu">

    <div class="skillsSection d-flex flex-row justify-space-between" >

      <div class="oneSkills" style="font-family: serif;margin-left: 20vh;gap: 4vh;">

        
        <h1  style="color: aliceblue;font-size: 35px;margin-top: -0.7vh;">My Skills</h1>
        <p style="color: rgba(240, 248, 255, 0.643);width: 75%;margin-top: -0.3vh;">
          Crafting responsive, user-friendly web experiences with modern tools and technologies
        </p>

        <div class="twoSkills d-flex mt-2 flex-column">
            <a @click="core" class="linkOne"
            :style="{backgroundColor : coreShow ? 'aqua' : 'rgba(0, 0, 0, 0.204)',
              color : coreShow ? 'rgba(0, 0, 0, 0.807)' : 'aliceblue', borderColor: coreShow ? 'aqua' : 'white'
            }"
            >CORE SKILLS</a>
            <a @click="advanced" class="linkTwo"
            :style="{backgroundColor : advancedShow ? 'aqua' : 'rgba(0, 0, 0, 0.204)',
              color : advancedShow ? 'rgba(0, 0, 0, 0.807)' : 'aliceblue', borderColor: advancedShow ? 'aqua' : 'white'
            }"
            >ADVANCED SKILLS</a>
        </div>


      </div>

      <div class="twoSkills"  v-show="coreShow" id="secondSection">
        <h1  style="color: aliceblue;font-size: 35px;">CORE SKILLS</h1>

        <p style="color: aqua;margin-top: 4.5vh;" id="secondSectionPar">
          The building blocks of robust web development
        </p>

        

        <div class="langsName d-flex flex-row align-center">
          <div class="firstLang" v-show="htmlLang"><h4>Html 5</h4></div>
          <div class="secondLang" v-show="cssLang"><h4>Css 3</h4></div>
          <div class="thirdLang" v-show="jsLang"><h4>JavaScript</h4></div>
        </div>

        <div class="languages d-flex flex-row align-center" style="gap: 4vh;margin-top: 8vh">
            <div class="html"><v-icon class="iconLang" @mouseover="htmlLang=true" @mouseout="htmlLang=false">
              mdi-language-html5</v-icon></div>
            <div class="html"><v-icon class="iconLang" @mouseover="cssLang=true" @mouseout="cssLang=false"
              >mdi-language-css3</v-icon></div>
            <div class="html"><v-icon class="iconLang" @mouseover="jsLang=true" @mouseout="jsLang=false"
              >mdi-language-javascript</v-icon></div>
        </div>

      </div>


      <div class="threeSkills" v-show="advancedShow" id="secondSection">
        <h1 style="color: aliceblue;font-size: 35px;" id="headingThree">ADVANCED SKILLS</h1>

        <p style="color: aqua;margin-top: 4.5vh;" id="thirdSectionPar">
          Pushing boundaries with cutting-edge techniques
        </p>

        <div class="langsName d-flex flex-row align-center">
          <div class="firstLangOne" v-show="github"><h4>Github</h4></div>
          <div class="secondLangOne" v-show="vue"><h4>Vue.js</h4></div>
          <div class="thirdLangOne" v-show="vuetify"><h4>Vuetify.js</h4></div>
        </div>

        <div id="imgCoreAdvance" class="languages d-flex flex-row align-center" style="gap: 4vh;margin-top: 8vh;">
            <div class="html"><v-icon class="iconLang" @mouseover="github=true" @mouseout="github=false"
              >mdi-github</v-icon></div>
            <div class="html"><v-icon class="iconLang" @mouseover="vue=true" @mouseout="vue=false"
              >mdi-vuejs</v-icon></div>
            <div class="html"><v-icon class="iconLang" @mouseover="vuetify=true" @mouseout="vuetify=false"
              >mdi-vuetify</v-icon></div>
        </div>

      </div>

    </div>
        
    </div>
</template>


<script>
import ScrollReveal from 'scrollreveal';

export default {
    data() {
      return {
        coreShow: true,
        advancedShow: false,
        htmlLang: false,
        cssLang: false,
        jsLang: false,
        github: false,
        vue: false,
        vuetify: false,
      }
    },
    methods: {
      core(){
         this.coreShow= true
         this.advancedShow= false
      },
      advanced(){
         this.coreShow= false
         this.advancedShow= true
      }
    },
    inject: ['showMenu'],

    
  mounted() {
    /****scroll reveal*****/   

  ScrollReveal().reveal(".skillsSection", {
      origin: "none",
      distance: "0px",
      duration: "800",
      easing: "ease-in-out",
      opacity: 0,
    }
  ) 


  },

}
</script>


<style lang="css">
    .skills{
        width:100%;
        height: 100vh;
        position: absolute;
        padding-top: 32vh;
        scroll-behavior: smooth;
    }
    .oneSkills{
    display: flex;
    flex-direction: column;
    padding-left: 2.6vh;
  }
  .twoSkills{
    gap: 15px;
    padding-left: 1vh;

  }
  .twoSkills a{
    text-decoration: none;
    border: 1px solid white;
    border-radius: 10px;
    padding: 18px 5px ;
    font-weight: 600;
    text-align: center;
    width: 58vh;
    font-size: 18px;
    transition: 0.2s ease

  }
  .twoSkills{
    margin-right: 34vh;
    margin-top: -1vh;
    cursor: pointer;
  }
   .html{
    width: 26vh;
    height: 26vh;
    border-radius: 10px;
    background-color: rgba(155, 149, 149, 0.083);
  }
  .iconLang{
    color: aliceblue;
    font-size: 12vh;
    padding: 12vh 13vh;
    cursor: pointer;
    transition: 0.2s ease;
  }
  .html:hover .iconLang{
    color: aqua;
  }

  .threeSkills a{
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 18px 5px ;
    font-weight: 600;
    text-align: center;
    width: 58vh;
    font-size: 18px;
    cursor: pointer;
    transition: 0.2s ease

  }
  .threeSkills{
    margin-right: 34vh;
    margin-top: -1vh;
  }
  .firstLang{
    border: 1px solid transparent;
    background: white;
    border-radius: 4px;
    width: 13vh;
    height: 5vh;
    position: absolute;
    top: 53.2%;
    left: 54.7%;
    text-align: center;
  }
  .secondLang{
    border: 1px solid transparent;
    background: white;
    border-radius: 4px;
    width: 13vh;
    height: 5vh;
    position: absolute;
    top: 53.2%;
    left: 68.1%;
    text-align: center;
  }
  .thirdLang{
    border: 1px solid transparent;
    background: white;
    border-radius: 4px;
    width: 15vh;
    height: 5vh;
    position: absolute;
    top: 53.2%;
    left: 81%;
    text-align: center;
  }


  .firstLangOne{
    border: 1px solid transparent;
    background: white;
    border-radius: 4px;
    width: 13vh;
    height: 5vh;
    position: absolute;
    top: 52.8%;
    left: 54.2%;
    text-align: center;
  }
  .secondLangOne{
    border: 1px solid transparent;
    background: white;
    border-radius: 4px;
    width: 13vh;
    height: 5vh;
    position: absolute;
    top: 53%;
    left: 67.6%;
    text-align: center;
  }
  .thirdLangOne{
    border: 1px solid transparent;
    background: white;
    border-radius: 4px;
    width: 15vh;
    height: 5vh;
    position: absolute;
    top: 53%;
    left: 80.7%;
    text-align: center;
  }


  @media (max-width:1200px){
    .oneSkills{
    display: flex;
    flex-direction: column;
    padding-left: 0vh;
  }
  .firstLang{
    position: absolute;
    left: 59.2%;
  }
  .secondLang{
    position: absolute;
    left: 74%;
  }
  .thirdLang{
    position: absolute;
    left: 88.1%;
  }
  .firstLangOne{
    position: absolute;
    left: 58.6%;
  }
  .secondLangOne{
    position: absolute;
    left: 73.3%;
  }
  .thirdLangOne{
    position: absolute;
    left: 87.5%;
  }
  .skills{
    overflow-x: hidden;
    overflow-y: hidden;
  }

  }

  @media (max-width:1024px){
    .skills{
        width:100%;
        height: 100vh;
        position: absolute;
        margin: 0;
        padding-top: 32vh;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .twoSkills{
    margin-right: 10vh;
  }
  .twoSkills a{
    border: 1px solid white;
    padding: 10px 3px ;
    font-weight: 600;
    width: 50vh;
    font-size: 18px;

  }
  .oneSkills p{
    font-size: 15px;
    width: 80% !important
  }
  .html{
    width: 23vh;
    height: 23vh;
    border-radius: 10px;
    background-color: rgba(155, 149, 149, 0.083);
  }
  .iconLang{
    font-size: 12vh;
    padding: 12vh 12vh;
  }
  .firstLang{
    position: absolute;
    left: 52.9%;
  }
  .secondLang{
    position: absolute;
    left: 68.5%;
  }
  .thirdLang{
    position: absolute;
    left: 83.5%;
  }
  .firstLangOne{
    position: absolute;
    left: 49.7%;
  }
  .secondLangOne{
    position: absolute;
    left: 65.2%;
  }
  .thirdLangOne{
    position: absolute;
    left: 80.3%;
  }

  }


  @media (max-width:991px){
    .skills{
      overflow-x: hidden;
      overflow-y: hidden;
    }
    .twoSkills{
    margin-right: 13vh;
  }
  .firstLang{
    position: absolute;
    left: 53.7%;
  }
  .secondLang{
    position: absolute;
    left: 69.8%;
  }
  .thirdLang{
    position: absolute;
    left: 85.3%;
  }
  .firstLangOne{
    position: absolute;
    left: 53.2%;
  }
  .secondLangOne{
    position: absolute;
    left: 69.4%;
  }
  .thirdLangOne{
    position: absolute;
    left: 84.7%;
  }

  }


  @media (max-width:768px){
    .skills{
        width:100%;
        min-height: 100vh;
        position: absolute;
        padding-top: 32vh;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .oneSkills{
    position: absolute;
    top: 26%;
    left: 20%;
    /* display: none */
  }
  .oneSkills h1{
    margin-bottom: -2vh;
    margin-left: 6vh;
  }
  .oneSkills p{
    position: relative;
    margin-bottom: -17vh;
    left: -16%;
    font-size: 16px;  
    padding: 0px 25px 0px 25px;  
    text-align: center;
  }
  .oneSkills .linkOne{
    margin-top: 15vh;
    margin-left: -5.5vh;
  }
  .oneSkills .linkTwo{
    margin-left: -5.5vh;
  }
  #secondSection h1{
    display: none;
  }
  #secondSection p{
    display: none;
  }
  .languages{
    margin-left: 25vh;
    padding-top: 36vh;
  }
  .html{
    width: 24vh;
    height: 20vh;
  }
  .iconLang{
    margin-top: -2vh;
  }
  .firstLang{
    margin-top: 19.3vh;
    margin-left: -38.5vh;
  }
  .secondLang{
    margin-top: 19.3vh;
    margin-left: -31vh;
  }
  .thirdLang{
    margin-top: 19.3vh;
    margin-left: -24.5vh;
  }
  .firstLangOne{
    margin-top: 19.3vh;
    margin-left: -38.5vh;
  }
  .secondLangOne{
    margin-top: 19.3vh;
    margin-left: -31.8vh;
  }
  .thirdLangOne{
    margin-top: 19.3vh;
    margin-left: -25vh;
  }

  
  }


  @media (max-width:617px){
    .skills{
        width:100%;
        min-height: 100vh;
        position: absolute;
        padding-top: 32vh;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: auto;
    } 
    .oneSkills{
    position: absolute;
    top: 26%;
    left: 20%;
    /* display: none */
  }
  .oneSkills h1{
    margin-bottom: -2vh;
    margin-left: -1vh;
  }
  .oneSkills p{
    position: relative;
    margin-bottom: -17vh;
    left: -18%;
    font-size: 16px;  
    padding: 0px 10px 0px 10px;  
    text-align: center;
  }
  .oneSkills .linkOne{
    margin-top: 15vh;
    margin-left: -12vh;
  }
  .oneSkills .linkTwo{
    margin-left: -12vh;
  }
  .languages{
    margin-left: 13vh;
  }
  .firstLang{
    margin-top: 19.3vh;
    margin-left: -36.7vh;
  }
  .secondLang{
    margin-top: 19.3vh;
    margin-left: -25vh;
  }
  .thirdLang{
    margin-top: 19.3vh;
    margin-left: -14.7vh;
  }
  .firstLangOne{
    margin-top: 19.3vh;
    margin-left: -37vh;
  }
  .secondLangOne{
    margin-top: 19.3vh;
    margin-left: -26vh;
  }
  .thirdLangOne{
    margin-top: 19.3vh;
    margin-left: -15vh;
  }
  }


  @media (max-width:450px){
    .skills{
        width:100%;
        min-height: 100vh;
        position: absolute;
        padding-top: 32vh;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: auto;
    } 
    .oneSkills{
    position: absolute;
    top: 26%;
    left: 20%;
    /* display: none */
  }
  .oneSkills h1{
    margin-bottom: -2vh;
    margin-left: -9vh;
  }
  .oneSkills p{
    position: absolute;
    top: 20%;
    left: -27%;
    padding: 0px 0px 0px 0px;
    margin: auto;
    text-align: center;
    font-weight: 900;
    font-size: 16px;
  }
  .oneSkills .linkOne{
    margin-top: 18vh;
    margin-left: -21vh;
  }
  .oneSkills .linkTwo{
    margin-left: -21vh;
    margin-top: 0vh;
  }
  .html{
    width: 20vh;
    height: 16vh;
    margin-top: 5vh;

  }
  .languages{
    margin-left: 3.4vh;
  }
  .iconLang{
    font-size: 10vh;
    padding: 10vh 3vh 3vh 10vh;
  }
  .firstLang{
    margin-top: 24vh;
    margin-left: -33.7vh;
  }
  .secondLang{
    margin-top: 24vh;
    margin-left: -21.3vh;
  }
  .thirdLang{
    margin-top: 24vh;
    margin-left: -10.3vh;
  }
  .firstLangOne{
    margin-top: 24vh;
    margin-left: -34vh;
  }
  .secondLangOne{
    margin-top: 24vh;
    margin-left: -22.4vh;
  }
  .thirdLangOne{
    margin-top: 24vh;
    margin-left: -11vh;
  }
  }


  @media (max-width:365px){
    .skills{
        width:100%;
        min-height: 100vh;
        position: absolute;
        padding-top: 32vh;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: auto;
    } 
    .oneSkills{
    position: absolute;
    top: 26%;
    left: 10%;
    /* display: none */
  }
  .oneSkills a{
    width: 44vh;
    padding: 9px 0 9px 0;
  }
  .oneSkills .linkOne{
    margin-top: 21vh;
    margin-left: -17.7vh;
  }
  .oneSkills .linkTwo{
    margin-left: -17.7vh;
    margin-top: 0vh;
  }
  .oneSkills p{
    position: absolute;
    top: 17%;
    left: -27%;
    padding: 8px 0px 0px 0px;
    margin: auto;
    text-align: center;
    font-weight: 900;
    font-size: 15px;
    line-height: 28px;
  }
  .html{
    width: 16.5vh;
    height: 14vh;
    margin-top: 8vh;
  }
  .languages{
    margin-left: 1.7vh;
    gap: 1vh;
  }
  .iconLang{
    font-size: 9vh;
    padding: 9.3vh 0vh 0vh 8vh;
  }
  
  .firstLang{
    margin-top: 26vh;
    margin-left: -28vh;
    width: 11vh;
    height: 4.3vh;
  }
  .secondLang{
    margin-top: 26vh;
    margin-left: -17.5vh;
    width: 11vh;
    height: 4.3vh;
  }
  .thirdLang{
    margin-top: 26.5vh;
    margin-left: -7.2vh;
    width: 13vh;
    height: 4.5vh;
    font-size: 14px;
    padding-top: 3px;
    text-align: center;
    font-weight: 900;
  }
  .firstLangOne{
    margin-top: 27.3vh;
    margin-left: -28.4vh;
    width: 11vh;
    height: 4.3vh;
  }
  .secondLangOne{
    margin-top: 27vh;
    margin-left: -17.7vh;
    width: 11vh;
    height: 4.3vh;
  }
  .thirdLangOne{
    margin-top: 26.3vh;
    margin-left: -7.8vh;
    width: 13vh;
    font-size: 14px;
    padding-top: 3px;
    text-align: center;
    font-weight: 900;
  }
  }

  @media (max-width:320px){
    .oneSkills{
    position: absolute;
    top: 26%;
    left: 4%;
  }
  .html{
    width: 14.5vh;
    height: 13vh;
    margin-top: 8vh;
  }
  .languages{
    margin-left: 0.7vh;
    gap: 0.5vh;
  }
  .iconLang{
    font-size: 7vh;
    padding: 9vh 0.5vh 0.3vh 7.3vh;
  }
  .firstLang{
    margin-top: 26vh;
    margin-left: -25.6vh;
    width: 11vh;
    height: 4.3vh;
  }
  .secondLang{
    margin-top: 26vh;
    margin-left: -15.7vh;
    width: 11vh;
    height: 4.3vh;
  }
  .thirdLang{
    margin-top: 26.5vh;
    margin-left: -6.2vh;
    width: 12vh;
    height: 4.5vh;
    font-size: 13px;
    padding-top: 3px;
    text-align: center;
    font-weight: 900;
  }
  .firstLangOne{
    margin-top: 27.3vh;
    margin-left: -26.4vh;
    width: 11vh;
    height: 4.3vh;
  }
  .secondLangOne{
    margin-top: 27vh;
    margin-left: -16.4vh;
    width: 11vh;
    height: 4.3vh;
  }
  .thirdLangOne{
    margin-top: 26.3vh;
    margin-left: -7vh;
    width: 12vh;
    font-size: 13px;
    padding-top: 3px;
    text-align: center;
    font-weight: 900;
  }
  }
</style>