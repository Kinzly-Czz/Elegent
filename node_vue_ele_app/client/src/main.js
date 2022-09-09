import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import router from './router'
import store from './store';



Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
