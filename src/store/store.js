import Vuex from 'vuex';
import Vue from 'vue';
import formMutations from './form/mutations';
import formActions from './form/actions';
import formGetters from './form/getters';

Vue.use(Vuex);

const formModule = {
  state: {
    companyName: '',
    companySpend: null,
    companySpendAbility: null,
    companySpendAbilityMin: null,
    companySpendAbilityMax: null,
    additionalNotes: '',
  },
  mutations: formMutations,
  actions: formActions,
  getters: formGetters
}

export default new Vuex.Store({
  modules: {
    form: formModule,
  }
});
