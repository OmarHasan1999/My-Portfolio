<script setup>
import { RouterView } from 'vue-router'
import HeaderPage from './components/global/HeaderPage.vue';
import { onMounted, onBeforeUnmount, ref, provide } from 'vue';
import { animate } from "./js/starsModel"

let stopStarsAnimation

onMounted(() => {
  stopStarsAnimation = animate()
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  if (stopStarsAnimation) {
      stopStarsAnimation();
    }
    window.removeEventListener('scroll', handleScroll);
}) 

const showMenu = ref(false)
const scrollDown = ref(false)

const handleScroll = () => {
      scrollDown.value = window.scrollY > 100;
    };

const showLinks = () => {
  showMenu.value = !showMenu.value
}

provide("showMenu", showMenu)
provide("showLinks", showLinks)
provide("scrollDown", scrollDown)


</script>


<template>
  <div class="stars">
    <HeaderPage/>
    <RouterView />
  </div>
</template>

<style lang="css">
*{
  margin: 0;
  padding: 0;
  font-family: monospace;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
html,
  body{
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    min-height: 100vh;
    margin: 0%;
}

.stars{
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  min-height: 100vh;
}
</style>
