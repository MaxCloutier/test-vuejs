<template>
  <!-- TODO max.cloutier add links and other content if I have time -->
  <div class="page-footer"></div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  @import '../../styles/variables';

  .page-footer {
    background: $bgGray;
    height: 115px;
  }
</style>
