import 'Styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import PortalVue from 'portal-vue';

Vue.config.productionTip = false;
Vue.use(PortalVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
