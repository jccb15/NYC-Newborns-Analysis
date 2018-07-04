import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'chart.js';
import 'hchs-vue-charts';

Vue.use((<any>window).VueCharts)

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
