<template>
  

  <!-- Font & Grid System & Margin & Padding & Width & Display Class -->

  <div class="home"> 
    <h2 class="text-left">Home Page</h2>
    <br><br><br>

    <button><router-link to="/about">About Page</router-link></button><br><br>
    <button><router-link to="/navigation">Navigation Page</router-link></button><br><br>
    <button><router-link to="/icons">Icons Page</router-link></button><br><br>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3" xxl="3" style="border: 1px solid">test One</v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3" xxl="3" style="border: 1px solid">test Two</v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3" xxl="3" style="border: 1px solid">test Three</v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="3" xxl="3" style="border: 1px solid">test Four</v-col>
      </v-row>
    </v-container>
    <br><br><br>

    <div style="border: 1px solid" class="w-75">Width</div>
    <br><br><br>

    <div style="border: 1px solid; height: 200px;width: 300px;" 
    class="parent" >
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </div>
    <br><br><br>

    <!-- Btns & Icons -->

    <p class="text-h4 w-75 font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi esse vel ea 
      a deleniti maxime, veniam
       quam est nobis blanditiis quas veritatis et eveniet illum. Eius et optio nam.
    </p>
    <br><br><br>
  
    <v-btn color="blue" @click="click" :loading="load" size="large" rounded="xs">
    <v-icon>mdi-home</v-icon>Button
    </v-btn>
    <v-icon color="red" size="50">mdi-home-outline</v-icon>
    <br><br><br>


    <!-- Chips & Dividers  & Cards -->

    <v-container>
      <v-row>
        <v-col v-for="num in 4" :key="num">
            <v-card variant="outlined">
              <v-card-title>this is title card</v-card-title>
              <v-card-subtitle>this is subtitle</v-card-subtitle>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eaque praesentium blanditiis velit ullam possimus! 
                Quaerat minus cupiditate, atque voluptate ipsum adipisci recusandae 
                aliquam eum asperiores sequi earum magni sit voluptas?
              </v-card-text>

              <v-divider color="red" length="70%"></v-divider>
              <v-divider color="red" length="70%"></v-divider>
              <v-divider color="red" length="70%"></v-divider>
              <v-divider color="red" length="70%"></v-divider>
              <v-divider color="red" length="70%"></v-divider>
              <v-divider color="red" length="70%"></v-divider>
              <v-card-actions>
                <v-btn>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-share</v-icon>
                </v-btn>
              </v-card-actions>
              <v-divider length="100%"></v-divider>
              <v-divider length="100%"></v-divider>
              <v-chip color="green" class="mb-4 mt-3" variant="outlined" label>
              <v-icon>mdi-home</v-icon>  this is chip</v-chip>

            </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br><br><br>


    <!-- Expansion panels -->

    <v-container>
      <v-expansion-panels variant="inset">
        <v-expansion-panel>
          <v-expansion-panel-title expand-icon="mdi-plus">city's</v-expansion-panel-title>
          <v-expansion-panel-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident, odit officiis, dicta exercitationem architecto incidunt perferendis
            molestiae eum placeat tempora perspiciatis aliquam ut 
            maiores impedit rerum aperiam vero quae a!
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <br><br><br>


    <!-- Dialog -->

    <v-btn @click="dialog=true">Click Me</v-btn>
    <v-dialog v-model="dialog" width="600" transition="dialog-bottom-transition" persistent>
      <v-card>
        <v-card-actions>
          <v-btn color="red" @click="dialog=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-title>My title</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet facere nostrum iusto
          voluptatem ipsum neque, sapiente minima quam dolorum,
          recusandae laboriosam deleniti atque expedita debitis inventore cupiditate fugit veniam.
        </v-card-text>
        
      </v-card>
    </v-dialog>
    <br><br><br>


    <!-- List & List Items -->

    <v-card width="360" class="mx-auto">
      <v-list>
        <v-list-item v-for="item in items" :key="item" :value="item.value"
        active-color="blue">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <template v-slot:prepend>
          <v-icon>mdi-watch</v-icon>
        </template>
        </v-list-item>
      </v-list>
    </v-card>
    <br><br><br>


    <!-- Sheet & Menu -->

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-sheet class="pa-10" elevation="7" rounded>
            <p>sheet property</p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <br><br>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-btn id="menu">setting</v-btn>
          <v-menu activator="#menu" offset="2" location="bottom">
              <v-list width="160">
                <v-list-item v-for="theItem in elements" :key="theItem.id">
                    <v-list-item-title class="text-body-2">{{ theItem.theTitle }}</v-list-item-title>
                    <template v-slot:append>
                      <v-icon>{{ theItem.icon }}</v-icon>
                    </template>
                </v-list-item>
              </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
    <br><br><br><br>


    <!-- Tooltip& Toolbar -->

    <v-container>
      <v-row>
        <v-col cols="12">
          <span>
          <v-icon>mdi-delete</v-icon>
          <v-tooltip activator="parent" location="top">
            Delete All
          </v-tooltip>
          </span>
        </v-col>
      </v-row>
    </v-container>

    <v-toolbar class="px-7" elevation="2">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>myTitle</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account</v-icon>
      <v-icon>mdi-logout</v-icon>
    </v-toolbar>
    <br><br><br>


    <!-- Layout & Appbar && Bottom Navigation -->

    <v-layout>
      <v-app-bar height="60" theme="dark">
        <v-app-bar-nav-icon class="ml-6"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-icon class="ml-5">mdi-magnify</v-icon>
        <v-icon class="ml-5">mdi-heart</v-icon>
        <v-icon class="ml-5 mr-5">mdi-dots-vertical</v-icon>
      </v-app-bar>

      <v-bottom-navigation class="bg-orange">
        <v-btn><v-icon>mdi-twitter</v-icon></v-btn>
        <v-btn><v-icon>mdi-music</v-icon></v-btn>
        <v-btn><v-icon>mdi-facebook</v-icon></v-btn>
      </v-bottom-navigation>
    </v-layout>


  </div>

</template>


<script>

export default{
data() {
  return {
    load:false,
    dialog:false,
    items:[
      {
        title:"item one",
        value: 1
      },
      {
        title:"item two",
        value: 2
      }
    ],
    elements:[
      {
        theTitle:"Profile",
        icon:"mdi-account",
        id:1
      },
      {
        theTitle:"facebook",
        icon:"mdi-facebook",
        id:2
      },
      {
        theTitle:"Instagram",
        icon:"mdi-instagram",
        id:2
      }
    ]
  }
},
methods: {
  click(){
  this.load= true
  
  setTimeout(() => {
    this.load=false
  }, 3000)
},

}
}
 
</script>


<style lang="css">
  .home{
    display: flex;
    align-items: center;
    margin-top: 10vh;
    flex-direction: column;
    text-align: center;
    width: 100%;
    min-height: 700vh;
    
  }
 
  

  
</style>
