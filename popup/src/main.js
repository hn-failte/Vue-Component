import Vue from 'vue'
import App from './App.vue'
import VueTouch from 'vue-touch'
import Popup from './components/Popup'

Vue.config.productionTip = false

Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(Popup)

new Vue({
  render: h => h(App),
}).$mount('#app')
