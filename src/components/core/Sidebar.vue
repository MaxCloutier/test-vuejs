<template>
  <ul class="sidebar-nav">
    <li>
      <router-link to="/company-data">Company Data</router-link>
    </li>
    <li>
      <router-link to="/company-table">Company Table</router-link>
    </li>
    <li>
      <router-link to="/company-page">Company Page</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
  @import '../../styles/variables';

  .sidebar-nav {
    list-style: none;
    min-width: 225px;
    margin-right: 25px;

    li {
      &:first-child a {
        border-top-left-radius: $borderRadius;
        border-top-right-radius: $borderRadius;
        margin-top: 0;

        &:before {
          border-top-left-radius: $borderRadius;
        }
      }

      &:last-child a {
        border-bottom-left-radius: $borderRadius;
        border-bottom-right-radius: $borderRadius;

        &:before {
          border-bottom-left-radius: $borderRadius;
        }
      }
    }

    a {
      border: 1px solid $border;
      color: $textBlue;
      display: block;
      font-size: 14px;
      font-weight: 500;
      line-height: 0.9;
      /* overlaps borders so it doesn't create a 2px border */
      margin-top: -1px;
      padding: 25px;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      transition: color $transitionTime, background $transitionTime;

      &:before {
        background: transparent;
        content: "";
        display: block;
        position: absolute;
        width: 4px;
        /* To cover the border */
        left: -1px;
        top: -1px;
        bottom: -1px;
        transition: background $transitionTime;
      }

      &:hover {
        background: $activeGray;
        color: $textGray;
      }

      &.is-active {
        background: $activeGray;
        color: $textGray;

        &:before {
          background: $darkBlue;
        }
      }
    }
  }
</style>
