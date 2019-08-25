
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import Router from 'vue-router'
// import VueResource from 'vue-resource'

import Axios from 'axios';
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(Axios);
Vue.use(iView);

Vue.Axios = Axios;


Vue.config.productionTip = false;
// Vue.use(VueResource);

new Vue({
  router,
  // components:{App},
  render: h =>h(App),
}).$mount('#app');
