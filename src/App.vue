<template>
  <div class="wrapper">
    <Header></Header>
    <div class="page-body">
      <Breadcrumbs></Breadcrumbs>
      <div class="main-content-wrapper">
        <Sidebar></Sidebar>
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
    <portal-target name="popup"></portal-target>
  </div>
</template>

<script>
import Header from './components/core/Header.vue';
import Breadcrumbs from './components/core/Breadcrumbs.vue';
import Sidebar from './components/core/Sidebar.vue';
import Footer from './components/core/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Breadcrumbs,
    Sidebar,
    Footer
  }
};
</script>

<style scoped>
  @import './styles/variables';

  .main-content-wrapper {
    display: flex;

    .main-content {
      border: 1px solid $border;
      border-radius: $borderRadius;
      flex-grow: 1;
      padding: 20px 25px;
    }
  }
</style>
