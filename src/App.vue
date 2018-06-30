<template>
  <v-app>

    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-container>
        <v-layout row justify-space-between>
          <v-flex xs10>
            <v-subheader class="mt-2 grey--text text--darken-1">YEAR</v-subheader>
          </v-flex>
          <v-flex xs2>
            <v-switch v-model="switch1"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="radioGroup">
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
            <v-switch v-model="switch1"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="radioGroup">
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
            <v-switch v-model="switch1"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-radio-group v-model="radioGroup">
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
      <HelloWorld/>
    </v-content>


  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
