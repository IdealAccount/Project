<template>
  <header>
    <nav-menu></nav-menu>
    <bread-crumbs></bread-crumbs>
    <header-content></header-content>
  </header>
</template>
<script>
  import NavigationMenu from './NavigationMenu'
  import BreadCrumbs from './breadCrumbs/BreadCrumbs'
  import HeaderContent from './HeaderContent'

  export default {
    components: {
      'nav-menu': NavigationMenu,
      'bread-crumbs': BreadCrumbs,
      'header-content': HeaderContent
    }
  }
</script>
<style lang="scss">
  header {
    padding-top: 86px;
    min-height: 90vh;
    position: relative;
    overflow: hidden;
    background: url('../../../static/img/bg.png') no-repeat center / cover;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      background: #000;
    }
  }
  @media only screen and (min-height: 730px) and (min-width: 374px) and (max-width: 1023px){
    header {
      min-height: 80vh;
    }
  }
  @media only screen and (min-width: 1024px) {
    header {
      min-height: initial;
    }
  }
  @media only screen and (min-width: 1200px) {
    header {
      overflow: visible;
      min-height: 596px;
    }
  }

</style>
