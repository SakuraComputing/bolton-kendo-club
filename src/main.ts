import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueYoutube from 'vue-youtube'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

Vue.use(VueYoutube)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyADAT64SMWOP7ee4cEOgW8tMYNL673MeDQ',
    libraries: "places"
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
