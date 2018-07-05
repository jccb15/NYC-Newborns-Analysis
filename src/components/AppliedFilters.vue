<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout justify-center row wrap>

      <v-chip class="chip" v-for="filter in filters" :key="filter"  close> {{filter}} </v-chip>

      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2018 — <strong>Jose Castelo</strong>
      </v-flex>
      
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
import { eventBus } from '@/main'
import { Vue, Component, Prop } from "vue-property-decorator"
import { Ethnicity } from '@/components/Data.vue';

@Component
export default class AppliedFilters extends Vue {
  filters:string[] = []
  
  year!:string
  gender!:string
  ethnicity!:string


  created(){
    eventBus.$on('filtersChanged', (year:string, gender:string, ethnicity:string) => { 
      this.filters = []

      if(year.length > 0){this.filters.push(year)}
      if(gender.length > 0){this.filters.push(+gender ? "Male" : "Female" )}
      if(ethnicity.length > 0){this.filters.push(Ethnicity[+ethnicity].replace(/([A-Z])/g, ' $1').trim())}
    })
  }

  showFilters(){

  }

}
</script>

<style lang="sass" scoped>
  .chip
    margin-top: 1rem
    margin-bottom: .5rem
</style>


