<template>
  <div class="container">
    <div class="content-viewport">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-title {
      font-family: 'Roboto', sans-serif;
      font-size: 34px;
      text-align: center;
      font-weight: 300;
      color: #fff;
      margin-bottom: 40px;
      span {
        letter-spacing: -.3px;
      }
    }
  }
  .content-viewport {
    padding-top: 140px;
    padding-bottom: 28px;
  }

  @media only screen and (min-width: 1200px) {
    .content {
      &-title {
        font-size: 48px;
        margin-bottom: 49px;
        letter-spacing: .9px;
      }
    }
    .content-viewport {
      padding-top: 125px;
      padding-bottom: 118px;
      min-height: 492px;
    }
  }
/// ANIMATION
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity .5s ease-in-out, transform .5s ease;
  }
  .slide-fade-enter-active {
    transition-delay: .5s;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-10%);
    opacity: 0;
  }
  .slide-fade-to, .slide-fade-leave {
    opacity: 1;
    transform: translateY(20%)
  }
</style>
