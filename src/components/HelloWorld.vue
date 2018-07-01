<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        
          asdfa

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop } from "vue-property-decorator";
import axios from "axios";

@Component
export default class HelloWorld extends Vue {
  //data
  babies:Baby[] = []
  dataLoaded:boolean = false
  //computed


  //methods

  created(){
    if (this.dataLoaded == false) {
      this.getData()
      this.dataLoaded = true
    }
  }

  getData(){
    const url:string = "https://data.cityofnewyork.us/api/views/25th-nujf/rows.json"
    axios.get(url).then(response => {
      let responseData:any[] = response.data.data;
      responseData.forEach(element => {
        let ethnia!:Ethnicity

        switch (element[10]) {

          case "HISPANIC":
            ethnia = Ethnicity.Hispanic;
            break;
          case "WHITE NON HISPANIC":
            ethnia = Ethnicity.WhiteNonHispanic;
            break;
          case "BLACK NON HISPANIC":
            ethnia = Ethnicity.BlackNonHispanic;
            break;
          case "ASIAN AND PACIFIC ISLANDER":
            ethnia = Ethnicity.AsianPacificIslander;
            break;
        }

        let baby:Baby = new Baby(element[11],element[8],element[9], ethnia);
        this.babies.push(baby)
      });
    })

  }
}
export enum Ethnicity{
    Hispanic = 0,
    WhiteNonHispanic,
    AsianPacificIslander,
    BlackNonHispanic,
  }
  
class Baby {
  name: string
  yearBirth: number
  gender: string
  ethnicity: Ethnicity

  constructor(name:string, year:number, gender:string, ethnicity:Ethnicity){
    this.name = name;
    this.yearBirth = year;
    this.gender = gender
    this.ethnicity = ethnicity;

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
