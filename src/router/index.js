import Vue from 'vue';
import CompanyData from '../components/CompanyData.vue';
import CompanyTable from '../components/CompanyTable.vue';
import CompanyPage from '../components/CompanyPage.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  linkExactActiveClass: 'is-active',
  routes: [
   { name: 'company-data', path: '/company-data', component: CompanyData },
   { name: 'company-table', path: '/company-table', component: CompanyTable },
   { name: 'company-page', path: '/company-page', component: CompanyPage }
  ]
});
