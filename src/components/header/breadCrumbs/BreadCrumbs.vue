<template>
    <!--<ul class="bread-crumbs">-->
      <!--<li v-for="link of links" class="bread-crumbs-link">-->
        <!--<router-link :to="link.to" >{{link.title}}</router-link>-->
      <!--</li>-->
    <!--</ul>-->
  <ul class="bread-crumbs">
    <li v-for="crumb of breadCrumbs"
        class="bread-crumbs-item"
    >
      <router-link :to="crumb.path"
                   class="bread-crumbs-link"
      >{{crumb.title}}</router-link>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        isActive: false,
        breadCrumbs: [
          {path: "/", title: 'Главная'},
          {path: "/services", title: 'Услуги'},
          {path: "/seo", title: 'SEO (продвижение в поисковых системах)'},
        ]
      }
    },
  }
</script>
<style lang="scss" scoped>
  .bread-crumbs {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
    .bread-crumbs {
      display: flex;
      margin-left: 289px;
      &-item {
        font-size: 15px;
        &:not(:last-child):after {
          color: #7e7e7e;
          content: '|';
          padding: 0 5px;
        }
      }
      &-link {
        color: #7e7e7e;
      }
    }
  }
  .router-link-exact-active {
    color: #fff;
  }
</style>
