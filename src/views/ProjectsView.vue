<template>

    <div class="projects" v-if="!showMenu">
        <div class="theProjects d-flex flex-row align-center justify-center">
            <div class="myProjects">
                <div class="container d-flex flex-column">
                     <div class="frontEnd">Frontend</div>
                     <h3>Mobile-Shop</h3>
                     <div class="languages">
                        <v-icon class="iconLanguages">mdi-language-html5</v-icon>
                        <v-icon class="iconLanguages">mdi-language-css3</v-icon>
                        <v-icon class="iconLanguages">mdi-vuejs</v-icon>
                     </div>
                     <p>
                      A commercial for phone sales,
                      offering an intuitive shopping experience for mobile enthusiasts
                     </p>
                     <a class="gitOne" href="https://github.com/OmarHasan1999/Mobile-Shop" target="blank">Github link</a>
                    <h1 class="number">01</h1>
                </div>
            </div>

            <div class="myProjects">
                <div class="container d-flex flex-column">
                     <div class="frontEnd">Frontend</div>
                     <h3>vue-course</h3>
                     <div class="languages">
                        <v-icon class="iconLanguages">mdi-vuejs</v-icon>
                        <v-icon class="iconLanguages">mdi-vuetify</v-icon>
                        <v-icon class="iconLanguages">mdi-language-javascript</v-icon>
                     </div>
                     <p>
                      A complete Vue learning platform,
                      Options API, Composition API, Vuex, Vuetify, and Pinia
                     </p>
                     <a class="gitTwo" href="https://github.com/OmarHasan1999/vue-course" target="blank">Github link</a>
                    <h1 class="number">02</h1>
                </div>
            </div>

            <div class="myProjects">
                <div class="container d-flex flex-column">
                     <div class="frontEnd">Frontend</div>
                     <h3>To-do-list</h3>
                     <div class="languages">
                        <v-icon class="iconLanguages">mdi-language-html5</v-icon>
                        <v-icon class="iconLanguages">mdi-language-css3</v-icon>
                        <v-icon class="iconLanguages">mdi-language-javascript</v-icon>
                     </div>
                     <p class="parThree">
                      A sleek Vue task manager,
                      enabling effortless task organization and tracking
                     </p>
                     <a class="gitThree" href="https://github.com/OmarHasan1999/ToDoListApp" target="blank">Github link</a>
                    <h1 class="number">03</h1>
                </div>
            </div>

            <div class="myProjects">
                <div class="container d-flex flex-column">
                     <div class="frontEnd">Frontend</div>
                     <h3>Library-website</h3>
                     <div class="languages">
                        <v-icon class="iconLanguages">mdi-language-html5</v-icon>
                        <v-icon class="iconLanguages">mdi-language-css3</v-icon>
                        <v-icon class="iconLanguages">mdi-vuejs</v-icon>
                        <v-icon class="iconLanguages">mdi-code-json</v-icon>
                     </div>
                     <p class="parFour">
                      online library with a vast collection,
                      offering detailed book info and easy downloads
                     </p>
                     <a class="gitFour" href="https://github.com/OmarHasan1999/Library-website" target="blank">Github link</a>
                    <h1 class="number">04</h1>
                </div>
            </div>

            <div class="myProjects">
                <div class="container d-flex flex-column">
                     <div class="frontEnd">Frontend</div>
                     <h3>Watches-Market</h3>
                     <div class="languages">
                        <v-icon class="iconLanguages">mdi-language-html5</v-icon>
                        <v-icon class="iconLanguages">mdi-language-css3</v-icon>
                        <v-icon class="iconLanguages">mdi-language-javascript</v-icon>
                        <v-icon class="iconLanguages">mdi-vuejs</v-icon>
                     </div>
                     <p>
                      A dynamic e-commerce site for watches,
                      featuring engaging shopping and secure transactions.
                     </p>
                     <a class="gitFive" href="https://github.com/OmarHasan1999/Watches-Market" target="blank">Github link</a>
                    <h1 class="number">05</h1>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
import ScrollReveal from 'scrollreveal';

export default {
  mounted() {
    /****scroll reveal*****/   
    ScrollReveal().reveal(".theProjects", {
      origin: "none",
      distance: "0px",
      opacity:0,
      duration: "500",
      easing: "ease-in-out",
    }
  )
  },

  inject : ['showMenu']

}
</script>


<style lang="css">
    .projects{
        width:100%;
        height: 100vh;
        position: absolute;
        padding-top: 32vh;
        scroll-behavior: smooth;
    }
    .theProjects{
            flex-wrap: wrap;
            width: 95%;
            cursor: pointer;
            gap: 10vh;
            margin: -12.5vh 5vh -3vh 7vh;
    }
    .myProjects{
            width: 55vh;
            height: 36vh;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 10px;
            margin-bottom: -5vh;
  }
  .container{
    gap: 2vh;
    margin-left: 2vh;
  }
  .container a{
    color: aqua;
    font-size: 17px;
    text-decoration: none;
    margin-top: -1.5vh;
    font-weight: 600;
  }
  .container p{
    color: rgba(255, 255, 255, 0.695);
    width: 90%;
    font-size: 14px;
    margin-top: -1vh;

  }
  .container h3{
    color: #e2eef0;
    font-size: 17px;
    font-weight: 400;
  }
  .frontEnd{
    border: 1px solid white;
    width: 12vh;
    height: 4.5vh;
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.768);
    border-radius: 5px;
    background-color: #e2eef0;
    border-color: #e2eef0;
    margin-top: 1.7vh;
    text-align: center;
  }
  .languages{
    color: #e2eef0;
    font-size: 13px;
  }
  .iconLanguages{
    margin-right: 1.8vh;
  }

  .number {
    color:rgb(254, 254, 254);
    margin-top: -30vh;
    margin-left: 35vh;
    font-size: 40px;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    color: #fff;
    text-shadow: 0 0 0px #00fff2, 0 0 5px #00fff2, 0 0 10px #00fff2, 0 0 15px #00fff2, 0 0 23px #00fff2, 0 0 33px #00fff2, 0 0 40px #00fff2, 0 0 80px #00fff2;
  }
  to {
    color: gray;
    text-shadow: 0 0 0px #00fff2, 0 0 10px #00fff2, 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 1 70px #00fff2;
  }
}



@media (max-width:1200px){
  .projects{
    overflow-x: hidden;
    overflow-y: hidden;
    scroll-behavior: smooth;
  }
}

@media (max-width:1024px){
  .projects{
    overflow-x: hidden;
    overflow-y: auto;
    width:100%;
    position: absolute;
    padding-top: 32vh;
  }

  .myProjects{
            width: 55vh;
            height: 33.5vh;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 10px;
            margin-bottom: -5vh;
            margin-left: -5vh;
  }
  .theProjects{
            width: 95%;
            gap: 8vh;
            margin: -12.5vh 5vh -3vh 7vh;
    }
    .container a{
    color: aqua;
    font-size: 17px;
    text-decoration: none;
    margin-top: -1.5vh;
  }
  .container{
    gap: 1.5vh;
    margin-left: 2vh;
  }
}


@media (max-width:768px){

  /* .number {
    color:rgb(254, 254, 254);
    margin-top: -67vh;
    margin-left: 37vh;
    font-size: 40px;
}
.languages{
  margin-top: -5vh;
} */
  
}


@media (max-width: 450px){
  .myProjects{
            width: 55vh;
            height: 33.5vh;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 10px;
            margin-bottom: -5vh;
            margin-left: -9vh;
  }
}
@media (max-width: 365px){
  .myProjects{
            width: 47vh;
            height: 37vh;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 10px;
            margin-bottom: -5vh;
            margin-left: -9vh;
  }
}
</style>