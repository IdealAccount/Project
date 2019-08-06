<template>
  <div id="app">
    <my-header></my-header>
    <first-section></first-section>
    <second-section></second-section>
    <my-footer></my-footer>
    <scroll-arrow></scroll-arrow>
    <history-badge></history-badge>
  </div>
</template>

<script>
  import Header from './components/header/TheHeader'
  import Section1 from './components/sections/section1/Section1'
  import Section2 from './components/sections/section2/Section2'
  import Footer from './components/footer/TheFooter'
  import ScrollArrow from './components/Global/ScrollArrow'
  import HistoryBadge from './components/Global/HistoryBadge'
export default {
  name: 'App',
  components: {
    'my-header': Header,
    'first-section': Section1,
    'second-section': Section2,
    'my-footer': Footer,
    ScrollArrow,
    HistoryBadge
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/main";
  @media only screen and (min-width: 1200px) {
    .container {
      padding: 0 20px;
    }
  }
</style>
