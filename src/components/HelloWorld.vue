<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        


      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  //data


  //computed


  //methods

  created(){
    this.getData()
  }

  getData(){
    console.log("i was created")

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
