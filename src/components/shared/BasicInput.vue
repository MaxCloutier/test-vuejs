<template>
  <validation-provider class="input-wrapper" rules="required" v-slot="{ errors }">
    <label>
      <span class="label">{{ label }}</span>
      <input
        v-model="formValue"
        :placeholder="placeholder"
        :name="name"
        @blur="blurEvent"
        @focus="focusEvent"
        type="text"/>
    </label>
    <span class="error">{{ errors[0] }}</span>
    <span class="error" v-if="customError">{{ customError }}</span>
  </validation-provider>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  name: 'BasicInput',
  components: {
    ValidationProvider
  },
  computed: {
    formValue: {
      get () {
        return this.$data.value;
      },
      set (value) {
        if (!this.customValidation || this.customValidation(value)) {
          this.$data.value = value;
        }
      }
    }
  },
  data: () => ({
    value: ''
  }),
  methods: {
    blurEvent() {
      if (!this.customValidation || this.customValidation(this.value)) {
        this.$store.commit('updateForm', { name: this.name, value: this.value });

        if (this.customBlurEvent) {
          this.customBlurEvent();
        }
      }
      this.value = this.formatValue ? this.formatValue(this.value) : this.value;
    },
    focusEvent() {
      this.value = this.$store.state.form[this.name];
    }
  },
  props: {
    name: String,
    placeholder: String,
    label: String,
    customError: String,
    customValidation: { type: Function },
    formatValue: { type: Function },
    customBlurEvent: { type: Function },
  }
};
</script>

<style scoped>
  @import '../../styles/inputs';
</style>
