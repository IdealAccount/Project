<template>
  <div>
    <transition name="fade">
      <a v-show="active"
         @click.prevent="scrollTop"
         :class="[{color: addClass}, 'scroll-to-top']"
         href="#"
      ></a>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: false,
        height: {
          screen: 0,
          scrolled: 0,
          body: 0,
          footer: 0,
          toFooter: 0,
        }
      }
    },
    computed: {
      addClass() {
        // если высота прокрутки + высота экрана больше высоты страницы без футера, то задать кнопке класс
        // return (this.heights. + this.heights.screen) >= this.heights.scroll
        return (this.height.scrolled  + this.height.screen) >= this.height.toFooter
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.changeBtn);
        window.addEventListener('scroll', this.getScroll);
      });
      // init
      this.getScroll();
      this.changeBtn();
    },
    methods: {
      getScroll() {
        this.height.scrolled = pageYOffset;
        this.active = this.height.scrolled > this.height.screen / 3
      },
      scrollTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },
      changeBtn() {
        this.height.body = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        );
        // Получаем высоту футера
        this.height.footer = document.querySelector('footer').offsetHeight;

        this.height.toFooter = this.height.body - this.height.footer;
        this.height.screen = document.documentElement.clientHeight || document.body.clientHeight;
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.changeBtn);
      window.removeEventListener('scroll', this.getScroll);
    }
  }
</script>

<style lang="scss">
  .scroll-to-top {
    position: fixed;
    z-index: 9999;
    right: 15px;
    bottom: 15px;
    display: block;
    width: 60px;
    height: 60px;
    background: #404040;
    border-radius: 50%;
    box-shadow: inset 0 5px 13px 5px rgba(0,0,0,.4),
                0 0 8px 1px rgba(0,0,0,.4);
    &:after {
      content: '';
      position: absolute;
      top: calc(50% + 3px);
      left: 50%;
      display: block;
      width: 16px;
      height: 16px;
      border: solid #fff;
      transform: translate(-50%,-50%) rotate(45deg);
      border-width: 2px 0 0 2px;
    }
    &.color {
      background: orange;
    }
  }
  @media only screen and (min-width: 321px) {
    .scroll-to-top {
      right: 30px;
      bottom: 30px;
    }
  }
  @media only screen and (min-width: 768px) {
    .scroll-to-top {
      right: 80px;
      bottom: 80px;

    }
  }
  @media only screen and (min-width: 1200px) {
    .scroll-to-top {
      right: 100px;
      bottom: 100px;
      opacity: .7;
      &:hover {
        opacity: 1;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-leave, .fade-enter-to {
  }
</style>
