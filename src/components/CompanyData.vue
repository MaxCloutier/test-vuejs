<template>
  <form class="main-content">
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    <BasicInput
      name="companyName"
      placeholder="e.g. Your Company Name"
      label="Company Name"></BasicInput>
    <BasicInput
      name="companySpend"
      placeholder="e.g. $150,000"
      :formatValue="formatUSD"
      :customValidation="isNormalInteger"
      label="Company Spend"></BasicInput>
    <BasicInput
      name="companySpendAbility"
      placeholder="e.g. $150,000 - $330,000"
      :formatValue="formatSpendAbility"
      :customValidation="isNormalIntegerOrDash"
      :customBlurEvent="spendAbilityBlurEvent"
      :customError="spendAbilityError"
      label="Company Spend Ability"></BasicInput>
    <AdditionalNotes></AdditionalNotes>
  </form>
</template>

<script>
import BasicInput from './shared/BasicInput.vue';
import AdditionalNotes from './shared/AdditionalNotes.vue';
import formMixins from './mixins/formMixins.js';

export default {
  name: 'CompanyData',
  components: {
    BasicInput,
    AdditionalNotes
  },
  mixins: [formMixins],
  data: () => ({
    spendAbilityError: null
  }),
  methods: {
    spendAbilityBlurEvent() {
      const value = this.$store.state.form.companySpendAbility;

      if (!value) {
        return;
      }

      const { min, max } = this.splitSpendAbility(value);

      if ((min && max) && parseInt(min) > parseInt(max)) {
        this.spendAbilityError = 'Company Spend Ability minimum cannot be higher than the maximum';
      }
      else {
        this.spendAbilityError = '';
        this.$store.commit('updateForm', { name: 'companySpendAbilityMin', value: min });
        this.$store.commit('updateForm', { name: 'companySpendAbilityMax', value: max });
      }
    }
  },
};
</script>
