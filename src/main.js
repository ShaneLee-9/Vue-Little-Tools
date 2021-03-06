import Vue from 'vue';
import './assets/styles/global.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/http';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
