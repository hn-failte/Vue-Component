import Vue from 'vue'
import App from './App.vue'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false

Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  render: h => h(App),
}).$mount('#app')
