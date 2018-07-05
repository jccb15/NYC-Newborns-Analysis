<template>
  <v-app>

    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-container>
        <v-layout row justify-space-between>
          <v-flex xs10>
            <v-subheader class="mt-2 grey--text text--darken-1">YEAR</v-subheader>
          </v-flex>
          <v-flex xs2>
            <v-switch v-model="yearEnabled" @change="FiltersChanged()"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="yearFilter" :disabled="!yearEnabled" @click="FiltersChanged()">
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
            <v-switch v-model="genderEnabled" @change="FiltersChanged()"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="genderFilter" :disabled="!genderEnabled" @click="FiltersChanged()">
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
            <v-switch v-model="ethnicityEnabled" @change="FiltersChanged()"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="ethnicityFilter" :disabled="!ethnicityEnabled" @click="FiltersChanged()">
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
      <Data :YearEnabled="yearEnabled" :GenderEnabled="genderEnabled" :EthnicityEnabled ="ethnicityEnabled"/>
      <AppliedFilters/>
    </v-content>


  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import Data from "@/components/Data.vue"
import AppliedFilters from "@/components/AppliedFilters.vue"
import { eventBus } from '@/main'


@Component({
  components: {
    Data,
    AppliedFilters
  },
})

export default class App extends Vue {

  //data
  drawer:boolean = true
  yearEnabled:boolean = false
  genderEnabled:boolean = false
  ethnicityEnabled:boolean = false
  yearFilter:string = "2011"
  genderFilter:string = "0"
  ethnicityFilter:string = "0"

  //methods

  FiltersChanged(){
    let filters:string[] = this.GetFilterParams()
    eventBus.$emit('filtersChanged', filters[0], filters[1], filters[2])
  }

  GetFilterParams():string[]{
    let params:string[] = []
    
    params.push(this.yearEnabled ? this.yearFilter : "")
    params.push(this.genderEnabled ? this.genderFilter : "")
    params.push(this.ethnicityEnabled ? this.ethnicityFilter : "")

    return params
  }
}
</script>
