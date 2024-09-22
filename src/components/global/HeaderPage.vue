<template>
  <div class="headerPage">
    <div class="app-bar">
      <h3 class="logo" v-show="!isScroll">
        O<span>H</span><span class="highlight">.</span>
      </h3>

      <div v-show="!isScroll" class="menuIcon" @click="showLinks">&#9776;</div>

      <div class="links">
        <router-link class="routers" to="/">
          <v-icon style="font-size: 20px;" class="iconLinks">mdi-home</v-icon> Home
        </router-link>
        <router-link class="routers" to="/Skills">
          <v-icon style="font-size: 20px;" class="iconLinks">mdi-cog</v-icon> Skills
        </router-link>
        <router-link class="routers" to="/Projects">
          <v-icon style="font-size: 20px;" class="iconLinks">mdi-briefcase-account</v-icon> Projects
        </router-link>
        <router-link class="routers" to="/Contact">
          <v-icon style="font-size: 20px;" class="iconLinks">mdi-card-account-phone</v-icon> Contact
        </router-link>
      </div>


      <!-- menu icon for responsive screens -->
        <div class="linksTwo" v-if="showMenu">
        <router-link @click="hideMenu" class="routers" to="/">
          <v-icon style="font-size: 20px;" class="iconLinks">mdi-home</v-icon> Home
        </router-link>
        <router-link @click="hideMenu" class="routers" to="/Skills">
          <v-icon style="font-size: 20px;" class="iconLinks">mdi-cog</v-icon> Skills
        </router-link>
        <router-link @click="hideMenu" class="routers" to="/Projects">
          <v-icon style="font-size: 20px;" class="iconLinks">mdi-briefcase-account</v-icon> Projects
        </router-link>
        <router-link @click="hideMenu" class="routers" to="/Contact">
          <v-icon style="font-size: 20px;" class="iconLinks">mdi-card-account-phone</v-icon> Contact
        </router-link>
      </div>
      



    </div>
  </div>
</template>


<script>
import ScrollReveal from 'scrollreveal';

export default {
   inject: ['showMenu', 'showLinks', 'scrollDown'],

   methods: {
    hideMenu(){
      if(this.showMenu){
        this.showLinks()
      }
    },
   },

   computed: {
    isScroll() {
      return this.scrollDown?.value;  // Use the global scroll state
    }
  },

   mounted() {
    /****scroll reveal*****/   
  ScrollReveal().reveal(".linksTwo", {
      origin: "top",
      distance: "50px",
      duration: "1000",
      easing: "ease-in-out"
    }
  )
  }
}
</script>




<style lang="css">

.headerPage {
  width: 100%;
}

.app-bar {
  padding-top: 1.4rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1000000;
}

.logo {
  margin-left: 4.7rem;
  padding-left: 3.75rem;
  color: aliceblue;
  font-size: 35px;
}

.logo span.highlight {
  color: aqua;
}

.links {
  margin-left: 75vh;
  display: flex;
  align-items: center;
}

.links .routers {
  text-decoration: none;
  color: aliceblue;
  padding-left: 55px;
  font-size: 18px;
  font-weight: 600;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  
}

.links .routers .mdi {
  font-size: 20px;
  margin-right: 5px;
}

.links .routers:hover{
        color: aqua;
        
    }
.links a.router-link-exact-active {
  color: aqua;
    }

    .linksTwo .routers .mdi {
  width: 40px;
  margin-right: 5px;
}

.linksTwo .routers:hover{
        color: aqua;
        
    }
.linksTwo a.router-link-exact-active {
  color: aqua;
    }

  .menuIcon{
    display: none;
    cursor: pointer;
    font-size: 30px;
    margin-left: 50vh;
    color: aliceblue;
  }
  .linksTwo{
    display: none;
    scroll-behavior: smooth;
  }


  @media (max-width:1200px){
    
.headerPage {
  width: 100%;
}

.app-bar {
  padding-top: 1.4rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1000000;
}

.logo {
  margin-left: 0.7rem;
  padding-left: 3.75rem;
  color: aliceblue;
  font-size: 27px;
}

.logo span.highlight {
  color: aqua;
}

.links {
  margin-left: 70vh;
  display: flex;
  align-items: center;
}

.links .routers {
  text-decoration: none;
  color: aliceblue;
  padding-left: 45px;
  font-size: 17px;
  font-weight: 600;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  
}

.links .routers .mdi {
  font-size: 20px;
  margin-right: 5px;
}

.links .routers:hover{
        color: aqua;
        
    }
.links a.router-link-exact-active {
  color: aqua;
    }

  .menuIcon{
    display: none;
    cursor: pointer;
    font-size: 30px;
    margin-left: 50vh;
    color: aliceblue;
  }
  }


  @media (max-width:1024px){
   
    .links {
      margin-left: 37vh;
      display: flex;
      align-items: center;
}
.links .routers {
  text-decoration: none;
  color: aliceblue;
  padding-left: 35px;
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  
}
  }

  @media (max-width:991px){

    .app-bar {
  padding-top: 1.4rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1000000;
  width: 100%;
}
    .headerPage {
      width: 100%;
}
    .logo {
            margin-left: 18vh;
            padding-left: 0;
            font-size: 30px;
            
}
.links {
      margin-left:10vh;
      margin-right:10vh;
      display: flex;
      align-items: center;
}

  .links .routers {
    padding: 18px 18px;
    text-align: center;
    width: 100%;
    transition: 0.2s ease;
    font-size: 18px;
    padding-left: 35px;

  }
  }
   

  @media (max-width:768px){
    .logo {
            margin-left: 10vh;
            padding-left: 0;
            
}
.menuIcon{
  display: block;
  transition: 0.2s ease;
  margin-left: 20vh;
  margin-right: 10vh;
}
.links {
  display: none;
}
.linksTwo {
    display: flex;
    transition: 0.2s ease;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 100px;
    left: 40%;
    width: 100%;
    padding: 30px 0;
    flex-direction: column;
    transition: 0.2s ease;

  }


  .linksTwo .routers {
    text-decoration: none;
    color: aliceblue;
    padding-left: 55px;
    font-size: 30px;
    font-weight: 600;
    transition: 0.2s ease;
    display: flex;
    align-items: center;
    padding: 22px 0px;
    text-align: center;
    width: 100%;
    transition: 0.2s ease;

  }
  }


  @media (max-width:617px){
    .links {
  display: none;
}
    .menuIcon{
  display: block;
  transition: 0.2s ease;
  margin-left: 20vh;
  margin-right: 5vh;
}
    .logo {
            margin-left: 8vh;
            padding-left: 0;           
}
.links{
  left: 33%;
}
  }

  @media (max-width:450px){
    .logo {
            margin-left: 7vh;
            padding-left: 0;           
}
.menuIcon{
  display: block;
  transition: 0.2s ease;
  margin-left: 12vh;
  margin-right: 3vh;
}
.linksTwo{
  left: 37%;
}
  }


  @media (max-width:365px){
    .links {
  display: none;
}
    .logo {
            margin-left: 4vh;
            padding-left: 0;  
            font-size: 26px;         
}
.menuIcon{
    font-size: 23px;
    margin-left: 12vh;
    margin-right: 3vh;
  }
  .linksTwo{
  left: 33%;
}
  }
  @media (max-width:320px){
    .logo {
            margin-left: 4vh;
            padding-left: 0;  
            font-size: 26px;         
}
.menuIcon{
    font-size: 25px;
    margin-left: 5vh;
    margin-right: 3vh;
  }
  .linksTwo{
  left: 28%;
}
  }

</style> 