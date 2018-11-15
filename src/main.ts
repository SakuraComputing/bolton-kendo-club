import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueYoutube from 'vue-youtube'
import * as VueGoogleMaps from 'vue2-google-maps';

const googleAPI = require('../config/keys').googleAPIKEY;

console.log("GoogleApI", googleAPI, process.env.VUE_APP_GOOGLE_API_KEY);



Vue.config.productionTip = false

Vue.use(VueYoutube)

Vue.use(VueGoogleMaps, {
  load: {
    key: googleAPI,
    libraries: "places"
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
