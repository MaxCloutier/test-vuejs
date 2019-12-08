<template>
  <ul>
    <li>Home</li>
    <!-- TODO max.cloutier make them dynamic/links if I have enough time -->
    <li>Company Data</li>
  </ul>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    msg: String
  }
};
</script>

<style scoped>
  @import '../../styles/variables';

  ul {
    /* Fixing display inline-block space between elements */
    font-size: 0;

    list-style: none;
    padding: 25px 0;

    li {
      color: $textLightGray;
      display: inline-block;
      font-size: 12px;
      text-transform: uppercase;
      vertical-align: middle;

      &:before {
        content: '/';
        display: inline-block;
        padding: 0 15px;
        vertical-align: middle;
      }

      &:first-child:before {
        display: none;
      }
    }
  }
</style>
