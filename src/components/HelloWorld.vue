<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
            
          <chartjs-bar :width="700" :height="500" :datalabel="''" :labels="labels" :data="data" :bind="true"></chartjs-bar>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch } from "vue-property-decorator";
import axios from "axios";
import {eventBus} from "../main"

@Component
export default class HelloWorld extends Vue {
  //data
  @Prop() YearEnabled!:boolean
  @Prop() GenderEnabled!:boolean
  @Prop() EthnicityEnabled!:boolean

  babies:Baby[] = []
  dataLoaded:boolean = false

  labels:string[]=[]
  data:number[]=[]

  //computed
  get isYearEnabled(){
    return this.YearEnabled
  }

  get isGenderEnabled(){
    return this.GenderEnabled
  }
  
  get isEthnicityEnabled(){
    return this.EthnicityEnabled
  }

  //methods
  created(){
    eventBus.$on('filtersChanged', (year:string, gender:string, ethnicity:string) => { 
      this.UpdateChart(year, gender,ethnicity)
    })
    console.log("created method")
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
      this.UpdateChart("","","")
    })
  }

  filterBabies(year:string="",gender:string="", ethnicity:string="" ):Baby[]{
    let filteredBabies:Baby[] = this.babies

    if (this.babies.length > 0) {
      if(year.length > 0){
        filteredBabies = filteredBabies.filter(baby => baby.yearBirth == +year)
      }
      if(gender.length > 0){
        filteredBabies = filteredBabies.filter(baby => baby.gender == (+gender ? "MALE" : "FEMALE"))
      }
      if(ethnicity.length > 0){
        filteredBabies = filteredBabies.filter(baby => baby.ethnicity == +ethnicity)
      }
    }
    console.log(this.getTopTen(filteredBabies))
    return filteredBabies
  }

  getTopTen(babies:Baby[]):any[]{
    let babiesObjectMap: {[key: string]: number} = {}
    
    for (let baby of babies){

      if (baby.name in babiesObjectMap){
        babiesObjectMap[baby.name] += 1
      }
      else{
        babiesObjectMap[baby.name] = 1
      }  
    }
    
    let sortedBabiesArray:any[] = []
    for (let baby in babiesObjectMap){
      sortedBabiesArray.push([baby, babiesObjectMap[baby]])
    }
    
    sortedBabiesArray.sort(function(a,b){return b[1] - a[1]})
    return sortedBabiesArray.splice(0,10)
  }

  UpdateChart(year:string, gender:string, ethnicity:string){
    let topFiltered = this.getTopTen(this.filterBabies(year,gender,ethnicity))
    
    let labels:string[] = []
    let data:number[] = []
  
    for (let baby of topFiltered){
      labels.push(baby[0])
      data.push(baby[1])
    }

    this.labels = labels
    this.data = data
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
    this.name = name.toUpperCase()
    this.yearBirth = year;
    this.gender = gender.toUpperCase()
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
