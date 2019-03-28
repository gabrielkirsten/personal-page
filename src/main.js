import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import '@/scss/custom.scss';

Vue.config.productionTip = false;

Vue.use(VueScrollTo);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
