<template>
  <v-app>

    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-container>
        <v-layout row justify-space-between>
          <v-flex xs10>
            <v-subheader class="mt-2 grey--text text--darken-1">YEAR</v-subheader>
          </v-flex>
          <v-flex xs2>
            <v-switch v-model="yearEnabled"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="yearFilter">
              <v-radio label="2011" value="2011"></v-radio>
              <v-radio label="2012" value="2012"></v-radio>
              <v-radio label="2013" value="2013"></v-radio>
              <v-radio label="2014" value="2014"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-layout row justify-space-between>
          <v-flex xs10>
            <v-subheader class="mt-2 grey--text text--darken-1">GENDER</v-subheader>
          </v-flex>
          <v-flex xs2>
            <v-switch v-model="genderEnabled"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="genderFilter">
              <v-radio label="Female" value="0"></v-radio>
              <v-radio label="Male" value="1"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>    

        <v-divider></v-divider>

        <v-layout row justify-space-between>
          <v-flex xs10>
            <v-subheader class="mt-2 grey--text text--darken-1">ETHNICITY</v-subheader>
          </v-flex>
          <v-flex xs2>
            <v-switch v-model="ethnicityEnabled"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="ethnicityFilter">
              <v-radio label="Hispanic" value="0"></v-radio>
              <v-radio label="White Non Hispanic" value="1"></v-radio>
              <v-radio label="Asian & Pacific Islander" value="2"></v-radio>
              <v-radio label="Black Non Hispanic" value="3"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>

      </v-container>
 
      
    </v-navigation-drawer>

   <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vue NY Test</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <HelloWorld :Year="yearFilter"></HelloWorld>
    </v-content>


  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"

@Component({
  components: {
    HelloWorld,
  },
})


export default class App extends Vue {

  drawer:boolean = true
  yearEnabled:boolean = false
  genderEnabled:boolean = false
  ethnicityEnabled:boolean = false
  yearFilter:string = "2011"
  genderFilter:string = "0"
  ethnicityFilter:string = "0"
}
</script>
