import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBLOsQS63WQQ4anLm4F1kp_5-vDxAuYHDk'
  },

});


import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render:h => h(App),
  router: router,
}).$mount('#app');
