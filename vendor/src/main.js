import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // Vuex and Vue Router might not be necessary for an app
  // of this size, so they can be safely removed if you have
  // no use for them.
  store,
  router
}).$mount('#app')
