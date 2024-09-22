<template>
    <div class="about">

        <!-- Breadcrumbs && Footer & System bar-->
        <v-layout>
            <v-app-bar color="blue">
                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon>mdi-arrow-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-app-bar>

            <v-system-bar class="bg-green" height="45">
                <v-icon class="mr-2">mdi-wifi-strength-4</v-icon>
                <v-icon class="mr-2">mdi-battery</v-icon>
                <v-icon class="mr-2">mdi-signal</v-icon>
                <span>10:00 AM</span>
            </v-system-bar>

            <v-footer class="bg-red flex-column" height="120" :app=true>
                <p class="mt-3 w-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Pariatur cupiditate aliquid reprehenderit sint dolor provident
                    possimus ea necessitatibus! Amet doloremque,
                    totam sequi quibusdam autem quasi dicta? Dicta voluptas ipsam dignissimos?
                </p>
                <div>
                    <v-icon class="ml-4 mt-4">mdi-twitter</v-icon>
                    <v-icon class="ml-4 mt-4">mdi-facebook</v-icon>
                    <v-icon class="ml-4 mt-4">mdi-mail</v-icon>
                </div>
 
            </v-footer>
        </v-layout>
        <br><br><br>


        <!-- Tabs -->
          
        <v-layout class="tabs">
            <v-card width="700" height="160" class="mx-auto">
                <v-tabs v-model="tab" align-tabs="center" bg-color="yellow"
                prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right">
                    <v-tab v-for="num in 20" :key="num" :value="num">Tab {{ num }}
                    </v-tab>
                </v-tabs>
                    <v-window v-model="tab" class="mt-15">
                        <v-window-item v-for="num in 20" :key="num" :value="num">
                            <v-card>
                                <v-title>card {{ num }}</v-title>
                            </v-card>
                        </v-window-item>
                    </v-window>
            </v-card>
        </v-layout>



        <!-- Loading (Linear - Circular) -->
        <v-layout class="progress">
            <v-card width="700" height="140">
                <v-progress-linear indeterminate v-if="load"></v-progress-linear>
                <v-progress-circular class="mt-10 mr-8" indeterminate v-if="load"
                size="50" width="7"></v-progress-circular>
                <v-btn class="mt-16" @click="startLoad">click</v-btn>
            </v-card>
        </v-layout>


        <!-- Paginations -->
        <!-- <v-container class="Paginations">
            <v-layout width="130vh" class="mx-auto" >
                <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="3" v-for="item in passengers.data" :key="item.data">
                            <v-card>
                                <v-card-title>{{ item.name }}</v-card-title>
                                <v-card-title>{{ item.trips }}</v-card-title>
                            </v-card>
                            
                        </v-col>
                    </v-row>

                </v-col>
                </v-row>
                <v-col cols="12">
                <v-card>
                    <v-pagination
                        v-model="page"
                        color="red"
                        length="10"
                        rounded="circle"
                        prev-icon="mdi-arrow-left"
                        next-icon="mdi-arrow-right"
                        >
                    </v-pagination>
                </v-card>
                </v-col>
                <v-col>
                    <v-btn @click="getData" class="mr-3">Get Data</v-btn>
                </v-col>
            </v-layout>
        </v-container> -->

    
        <!-- Text Field & Text Area -->
        <v-container class="textField">
            <v-layout>
                <v-card width="100%" height="60vh" class="pa-10">
                    {{ field }}
                    <v-text-field
                    type="text"
                    v-model="field"
                    label="Enter the name"
                    variant="outlined"></v-text-field>

                    <v-textarea
                    label="text area"
                    variant="outlined"
                    rows="3"
                    noresize>
                    </v-textarea>
                </v-card>
            </v-layout>
        </v-container>


        <!-- Checkbox -->
        <v-container class="textField">
            <v-layout>
                <v-card width="100%" height="50vh" class="pa-5">
                    <v-row class="d-flex flex-row justify-sm-center">
                        <v-col cols="12">{{ mySelect }}</v-col>
                        <v-col cols="3" v-for="item in info" :key="item">
                            <v-card>
                                <v-card-title>
                                    {{ item.name }}
                                </v-card-title>
                                <v-card-text>
                                    {{ item.age }}
                                </v-card-text>
                                <v-card-actions>
                                    <v-checkbox v-model="mySelect" :value="item.name" label="select">

                                    </v-checkbox>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-layout>
        </v-container>

        <!-- Radio -->
        <v-container class="radio">
            <v-layout class="d-flex flex-row justify-sm-center">
                <v-card width="80%" height="30vh" class="pa-5"
                variant="outlined"
                >
                    {{ radioSelect }}
                    <v-radio-group v-model="radioSelect" class="bg-red"
                    true-icon="mdi-check" false-icon="mdi-close">
                        <v-radio label="Ahmed" value="Ahmed"></v-radio>
                        <v-radio label="Sami" value="Sami"></v-radio>
                    </v-radio-group>
                    
                </v-card>
            </v-layout>
        </v-container>

        <!-- File Input -->
        <v-container class="fileInput">
            <v-layout class="d-flex flex-row justify-sm-center">
                <v-card width="100%" height="90vh" class="pa-5"
                variant="outlined"> {{ file }}
                    <v-file-input v-model:model-value="file" multiple chips
                    variant="outlined" @update:model-value="renderImg">

                    </v-file-input>

                    <v-card>
                        <img :src="imgUrl" alt="" width="400">
                    </v-card>
                </v-card>
            </v-layout>
        </v-container>
        





    </div>
</template>


<script setup>
import {ref} from 'vue';

const items = ref(["test one", "test two", "test three"]);
const tab = ref("")
const load = ref(false)
// const passengers = ref([])
// const page = ref(1)
const field = ref("")
const mySelect = ref([])
const radioSelect = ref("")
const file = ref("")
const imgUrl = ref("")

const startLoad = () => {
    load.value = true
    setTimeout(() => {
        load.value = false
    }, 3000);
}

// const getData = async () => {
//     await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page.value-1}&size=10`)
//     .then((res) => res.json())
//     .then ((data) => {
//         passengers.value = data
//     })
// }

const info = ref([
    {
        name: "ahmed",
        age: 13
    },
    {
        name: "mohammed",
        age: 20
    },
    {
        name: "omar",
        age: 26
    }
])

const renderImg = () => {
    if(!file.value[0]){
        imgUrl.value= "";
        return
    }
    const theFile = file.value[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.addEventListener("load", () => {
        imgUrl.value = reader.result
    })
}

</script>


<style lang="css">
    .about{
    display: flex;
    align-items: center;
    margin-top: 10vh;
    flex-direction: column;
    text-align: center;
    width: 100%;
    min-height: 700vh;
    
  }
  .tabs{
    position: absolute;
    top: 30vh;
  }
  .progress{
    position: absolute;
    top: 70vh;
  }
  .Paginations{
    position: absolute;
    top: 110vh;
  }
  .textField{
    position: absolute;
    top: 140vh;
  }
  .radio{
    position: absolute;
    top: 220vh;
  }
  .fileInput{
    position: absolute;
    top: 260vh;

  }

</style>