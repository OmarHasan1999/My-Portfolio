<template>
    <div class="navigation">
      
      <!-- Navigation Drawer -->
      <v-container>
            <v-layout>
                <v-card width="100%">
                    <!-- <v-app-bar color="red" > -->
                        <v-app-bar-nav-icon @click="drawer = !drawer" class="ml-12">
                        </v-app-bar-nav-icon>
                    <!-- </v-app-bar> -->

                    <v-navigation-drawer color="blue" v-model="drawer">
                        <v-list nav class="text-start">
                          <v-list-item v-for="num in 5" :key="num" prepend-icon="mdi-home" 
                          @click="console.log('object');">
                                 List {{ num }}
                          </v-list-item>

                          <v-list-group>
                            <template v-slot:activator="{ props }">
                              <v-list-item prepend-icon="mdi-account" v-bind="props">
                                    <v-list-item-title>test</v-list-item-title>
                              </v-list-item>
                            </template>
                              <v-list-item>
                                    <v-list-item-title>test</v-list-item-title>
                              </v-list-item>

                          </v-list-group>
                          

                      
                        </v-list>
                    </v-navigation-drawer>

                </v-card>
            </v-layout>
        </v-container>


        <!-- Auto Complete -->

        <v-container>
          <v-layout>
            <v-card width="100%">
              <v-autocomplete :items="theItems"
              no-data-text="not found.." 
              v-model="search"
              :error-messages="errMsg"
              class="text-start"
           >
              
            </v-autocomplete>
            <v-btn @click="validate">click</v-btn>
            </v-card>
          </v-layout>
        </v-container>


        <!-- Select -->
        <v-container>
          <v-layout>
            <v-card width="100%" height="50vh">{{ select }}
              <v-select :items="theItems" v-model="select"
              :error-messages="errMsg" multiple>

              </v-select>
              <v-btn @click="submit">Submit</v-btn>
            </v-card>
          </v-layout>
        </v-container>

        <!-- Slider -->
        <v-container>
          <v-layout>
            <v-card width="70%" height="60vh" class="pa-4 mt-4">

              <v-slider :min="0" :max="10" v-model="range" step=".5"
              prepend-icon="mdi-minus" append-icon="mdi-plus" color="red"
              track-color="blue" thumb-label="always" class="mt-12"
              @click:append="plus" @click:prepend="minus">

              </v-slider>
            </v-card>
          </v-layout>
        </v-container>
        <br><br><br>

        <!-- Rating -->
        <div class="d-flex flex-column pa-6 align-center">
          <v-card class="text-center pa-5" width="700" height="200">

            <v-rating
              v-model="rating"
              color="blue"
              active-color="warning"
              half-increments
              hover
              length="6"
              :item-labels="['so bad', 'bad', 'its ok', 'good', 'very good', 'excellent']"
              size="85"
              >
              <template v-slot:item-label="props">
                <span style="font-size:13px; font-weight: 600;">{{ props.label }}</span>
              </template>
              
            </v-rating>
            {{ rating }}

          </v-card>
        </div>
        <br><br>


        <!-- Snackbar -->
        <div class="d-flex flex-column pa-6 align-center">
          <v-card class="text-center pa-5" width="700" height="500" variant="outlined">

            <v-snackbar
            v-model="snack"
            timeout="4000"
            color="blue"
            variant="outlined"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque consequatur 
              reprehenderit architecto cumque molestias praesentium aliquam, fuga,
              atque nulla error ab repudiandae vel ut repellendus necessitatibus hic eum natus!

              <template v-slot:actions>
                <v-btn @click="snack = false"><v-icon>mdi-close</v-icon></v-btn>
              </template>

            </v-snackbar>

            <v-btn @click="snack = !snack">change</v-btn>

          </v-card>
        </div>
        <br><br>
        

        <!-- Timeline -->
        <div class="d-flex flex-column pa-6 align-center">
          <v-card class="text-center pa-5" width="700" height="900" variant="outlined">

            <v-timeline>

              <v-timeline-item
              v-for="item,i in timeLine" :key="item"
              :icon="item.icon"
              :dot-color="item.color"
              :size="item.size"
              >

              <template v-slot:opposite><p>Item Number is {{ i + 1 }}</p>
              </template>

                <v-card :color="item.color">
                  <v-card-title>this is card title</v-card-title>
                  <v-card-text>
                    {{ text }}
                  </v-card-text>
                </v-card>
              </v-timeline-item>

            </v-timeline>

          </v-card>
        </div>
        <br>



        <!-- Avatar -->
        <div class="d-flex flex-column pa-6 align-center">
          <v-card class="text-center pa-5" width="500" height="200" variant="outlined">

             <v-avatar
             color="red"
             variant="outlined"
             size="70"
             >
             <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover></v-img>
             </v-avatar>

          </v-card>
        </div>
        <br><br>



        <!-- Lazy Loading -->
        <div class="d-flex flex-column pa-6 align-center">
          <v-card class="text-center pa-5" width="500" height="1500" variant="outlined">

             <v-lazy 
             v-for="num in 8" :key="num" class="mt-8"
             >

              <v-card image="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
                <v-card-title>this is card title</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam, laboriosam fugit
                  doloribus ipsam eum inventore asperiores, eaque ullam dolorem 
                  id blanditiis libero! Id magnam accusantium, laboriosam itaque perspiciatis eius?
                </v-card-text>
              </v-card>

             </v-lazy>

          </v-card>
        </div>



    </div>
</template>


<script setup>
import {ref} from "vue"

const drawer = ref(false)
const search = ref("")
const errMsg = ref("")
const select = ref([])
const range = ref(0)
const rating = ref(0)
const snack = ref(false)

const theItems = ref([
  "ahmed","ashraf","ayman","baraa","burhan","samer","suzan","sali",
  "waleed","ward","yaman","yosra","firas","fadi"
])

const validate = () => {
  errMsg.value = ""
  if(!search.value){
    errMsg.value = "Please enter data .."
  }
}

const submit = () => {
  errMsg.value.length = ""
  if(!select.value){
    errMsg.value = "enter the data"
  }
}

const minus = () => {
  range.value -= .5
}

const plus = () => {
  range.value += .5
}

const timeLine = ref([
  {
    color: "red",
    icon:"mdi-home",
    size:"large",
  },
  {
    color: "blue",
    icon:"mdi-clock",
    size:"large"
  },
  {
    color: "black",
    icon:"mdi-account",
    size:"large"
  }
])

const text = ref("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptas perferendis, hic quidem expedita, consectetur harum officia officiis nobis asperiores quaerat, porro iure. Exercitationem totam mollitia praesentium, enim reiciendis incidunt.")

</script>


<style lang="css">
    .navigation{
    display: flex;
    align-items: center;
    margin-top: 10vh;
    flex-direction: column;
    text-align: center;
    width: 100%;
    min-height: 700vh;
    
  }
</style>