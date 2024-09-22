<template>
    <div class="icons">
        
         <!-- Switch -->
         <v-container>
          <v-layout>
            <v-app-bar :theme="switchDark"></v-app-bar>
            <v-card  width="100%" height="20vh" class="pa-4 mt-10" variant="outlined" >

              <v-switch v-model="switchDark" :label="switchDark"
              false-value="dark" true-value="light">
              </v-switch>

            </v-card>
          </v-layout>
        </v-container>
        <br><br><br>

        <!-- Table -->
        <div class="d-flex align-center flex-column pa-6">
        <v-card width="180%">
         <v-table height="170" hover fixed-header fixed-footer theme="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>sport</th>
              <th>country</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in yourInfo" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.sport }}</td>
              <td>{{ item.country }}</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td class="bg-blue" colspan="2">Tables</td>
              <td class="bg-blue" colspan="2">Users</td>
            </tr>
          </tfoot>

        </v-table>
        </v-card>
        </div>
        <br><br><br>


        <!-- Btn Toggle -->
        <div class="d-flex align-center flex-column pa-6">
        <v-card width="180%">

         <v-btn-toggle v-model="toggle" mandatory color="primary">
          <v-btn value="home"><v-icon>mdi-home</v-icon></v-btn>
          <v-btn value="account"><v-icon>mdi-account</v-icon></v-btn>
          <v-btn value="facebook"><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn value="clock"><v-icon>mdi-clock</v-icon></v-btn>
         </v-btn-toggle>
         toggle : {{ toggle }}
         
        </v-card>
        </div>
        <br><br><br>

        
        
        <!-- Carousel -->
        <!-- <div class="d-flex align-center flex-column pa-6">
        <v-card width="130%">

        <v-carousel show-arrows>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
          </v-carousel-item>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
          </v-carousel-item>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
          </v-carousel-item>
        </v-carousel>
        
        </v-card>
        </div> -->

        <!-- Slide Group -->
        <div class="d-flex align-center flex-column pa-6">
        <v-card width="25%">

        <v-slide-group>
          <v-slide-group-item v-for="num in 20" :key="num"
          v-slot="{ isSelected,toggle }" mandatory>

              <v-card width="220" @click="toggle" v-bind="isSelected"
              :color="isSelected ? 'blue' : ''" >
                <v-card-title>The Cards : {{ num }}</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, 
                  quisquam molestias? Molestiae quisquam totam rem facilis! Similique reprehenderit quod atque.
                </v-card-text>
              </v-card>
          </v-slide-group-item>
        </v-slide-group>
        
        </v-card>
        </div>
        <br><br><br>


        <!-- Chips Group -->
        <div class="d-flex align-center flex-column pa-6">
        <v-card width="200%" height="150">

        <v-chip-group v-model="sports" color="red" variant="outlined">
          <v-chip value="Football" filter>Football</v-chip>
          <v-chip value="Basketball" filter>Basketball</v-chip>
          <v-chip value="Tennis" filter>Tennis</v-chip>
        </v-chip-group>
        
        {{ sports }}
        </v-card>
        </div>
        <br><br><br>


        <!-- Window -->
         <div class="d-flex align-center flex-column pa-6">
         <v-card width="130%" class="pa-5">

          <v-window class="bg-blue" show-arrows
          prev-icon="mdi-arrow-left"
          next-icon="mdi-arrow-right"
          >
            <v-window-item v-for="num in 5" :key="num">

              <v-card width="400" color="green">
                <v-card-title>This is Title</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt molestias ex sed incidunt nihil voluptas voluptatem
                    harum atque excepturi assumenda quo, autem laborum. 
                  </v-card-text>
              </v-card>

            </v-window-item>
          </v-window>
        
         </v-card>
         </div>
         <br><br>

        <!-- Alert -->
        <div class="d-flex align-center flex-column pa-6">
         <v-card width="100%" height="300" class="pa-5">

          <v-btn @click="(alert=true),(alertType='success')">show success</v-btn>
          <v-btn @click="(alert=true),(alertType='error')">show error</v-btn>

          <v-alert 
          :color="alertType"
          :type="alertType" 
          :title="alertType"
          closable
          v-model="alert"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam
            aut a qui nisi maiores pariatur, nemo ipsam odit officia maxime 
            debitis voluptatem itaque quod soluta assumenda. Ipsam, ipsa voluptate!
          </v-alert>
          
        
         </v-card>
         </div>
         <br><br><br>

         <!-- Badge -->
         <div class="d-flex align-center flex-column pa-6">
         <v-card width="170%" height="180" class="pa-5">
          <v-text-field type="number" v-model="badgeNum"></v-text-field>

         <v-btn variant="text">
          <v-badge
          :content="badgeNum"
          color="error"
          offset-x="1"
          bordered
          location="top right"
          max="9"
          v-model="showBadge"
          >
            <v-icon size="30">mdi-bell</v-icon>
          </v-badge>
         </v-btn>
         <v-btn @click="showBadge = !showBadge">show badge</v-btn>
          
        
         </v-card>
         </div>
         <br><br>

         <!-- Hover -->
         <div class="d-flex align-center flex-column pa-6">
         <v-card width="700" height="500" class="pa-5">

          <v-hover v-slot="{ isHovering, props }">
            <v-card width="200" v-bind="props" :color="isHovering ? 'orange' : ''">
            <v-card-title>This is title</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloremque fugiat,
              voluptate architecto odio placeat rem magni totam laborum!
              Odit, sint aliquid officiis voluptate nisi quam debitis dolorum earum! Consequatur?
            </v-card-text>
          </v-card>
          </v-hover>
        
         </v-card>
         </div>
         <br><br>



         
    </div>
</template>


<script setup>
import {ref} from "vue";

const switchDark = ref("dark")
const toggle = ref("")
const sports = ref("")
const alert = ref(false)
const alertType = ref("")
const badgeNum = ref(0)
const showBadge = ref(false)

const yourInfo = ref(
  [
  {
  name: "baraa",
  age: 12,
  sport: "footbal",
  "country" : "jordan"
  },
  {
  name: "omar",
  age: 18,
  sport: "basketball",
  "country" : "syria"
  },
  {
  name: "suzan",
  age: 20,
  sport: "volyball",
  "country" : "turkey"
  },
]
)



</script>


<style lang="css">
    .icons{
        display: flex;
    align-items: center;
    margin-top: 10vh;
    flex-direction: column;
    text-align: center;
    width: 100%;
    min-height: 700vh;
    }
</style>