<template>
  <!-- TODO max.cloutier Add missing links, search bar and other images if I have time -->
  <header class="page-header">
    <div class="logo-wrapper">
      <img v-bind:src="logo" class="logo">
    </div>
  </header>
</template>

<script>
const logoLink = require('../../images/logo-pink.png');

export default {
  name: 'Header',
  data: () => ({
    logo: logoLink,
  }),
  props: {
  }
};
</script>

<style scoped>
  @import '../../styles/variables';

  .page-header {
    background: $lightBlue;
    box-sizing: border-box;
    padding: 15px 45px;
  }

  .logo-wrapper {
    line-height: 0;
  }
</style>
