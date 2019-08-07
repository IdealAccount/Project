<template>
  <div class="header-nav" ref="navbar">
    <div class="container">
      <div class="flex">
        <router-link class="header-logo" to="home"></router-link>
        <a href="tel: (4212)25-30-85" class="header-phone">(4212)25-30-85</a>
        <div ref="burger"
             :class="[{'is-active': active}, 'burger']"
             @click="active = !active && (index = !active)"
        >
          <div class="burger-box">
            <div class="burger-inner"></div>
          </div>
        </div>
      </div>
      <transition name="slide-in">
        <nav v-show="active" class="nav">
          <ul class="nav-menu">
            <li v-for="link of navigationMenu"
                :key="link.title"
                :class="['nav-menu-item', {'is-open': ( link.submenu ? index === link.id : false)}]"
                @click="index = index === link.id ? null : link.id">
              <router-link v-if="link.url" class="nav-menu-link"
                           :key="link.url"
                           :to="link.url">
                {{link.title}}
              </router-link>
              <a v-else class="nav-menu-link" :key="index">{{link.title}}</a>
                <transition name="slide-in" :key="index">
                  <sub-menu v-if="link.submenu" :class="{'is-show': link.id === submenuIndex}"
                            :key="index"
                            :submenu="link.submenu"
                  ></sub-menu>
                </transition>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'Vuex'
  import SubMenu from './NavMenuLinks/NavSubMenu/SubMenu'

  export default {
    components: {
      SubMenu
    },
    data() {
      return {
        active: false,
        show: false,
        index: 0,
      }
    },
    created() {
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.isScroll);
        document.body.addEventListener('keydown', this.showMenu);
      });
    },
    methods: {
      isScroll() {
        this.$refs.navbar.style.background = (pageYOffset > 50) ? 'rgb(57, 57, 57)' : ''
      },
      showMenu(e) {
        let screenWidth = document.documentElement.clientWidth;
          if (screenWidth >= 978 && screenWidth < 1200) {
          if (e.keyCode === 27 || e.keyCode === 77) {
            this.active = false;
          }
        }
        if (screenWidth >= 1200) {
          if (e.keyCode === 27 || e.keyCode === 77) this.index = null;
        }
      },
    },
    watch: {
      // active() {
      //   if (this.active) {
      //     document.body.style.overflow = 'hidden';
      //   } else {
      //     document.body.style.overflow = '';
      //   }
      //   document.body.style.overflow = this.active ? 'hidden' : '';
      // },
    },
    computed: {
      ...mapState(['navigationMenu']),
      submenuIndex() {
        return this.index
      }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.isScroll);
    }
  }
</script>
<style lang="scss" scoped>
  // Mobile Styles
  .header {
    &-nav {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      width: 100%;
      background: rgba(57, 57, 57, .5);
      padding: 5px 0;
      transition: background .3s ease;
    }
    &-logo {
      position: relative;
      z-index: 9999;
      height: 40px;
      width: 62px;
      background: url("/static/img/icons_sprite.png") no-repeat -239px -203px;
    }
    &-phone {
      color: #fff;
      letter-spacing: .5px;
    }
  }

  .flex {
    align-items: center;
    justify-content: space-between;
  }

  .burger {
    position: relative;
    z-index: 9999;
    padding: 10px;
    cursor: pointer;
    transition-duration: .15s;
    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  .burger-box {
    width: 30px;
    height: 21px;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  .burger-inner {
    top: 50%;
    margin-top: -1.5px;
    transition-duration: 0.44s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .burger-inner:before,
  .burger-inner:after {
    content: '';
    display: block;
  }
  .burger-inner:before {
    top: -9px;
    transition: top 0.2s 0.5s ease-in, opacity 0.2s ease-in;
  }
  .burger-inner:after {
    bottom: -9px;
    transition: bottom 0.2s 0.5s ease-in, transform 0.44s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .burger-inner,
  .burger-inner:before,
  .burger-inner:after {
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 0;
    position: absolute;
  }
  .is-active .burger-inner {
    transform: rotate(225deg);
    transition-delay: .24s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .is-active .burger-inner:before {
    top: 0;
    opacity: 0;
    transition: top 0.2s ease-out, opacity 0.2s 0.24s ease-out;
  }
  .is-active .burger-inner:after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.2s ease-out, transform 0.44s 0.24s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc(100% - 70px);
    z-index: 999;
    display: block;
    &-menu {
      position: relative;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      padding: 50px 20px 0;
      background: #393939;
      box-shadow: 2px 3px 7px rgba(0, 0, 0, .2);
      &:before {
        /*content: '';*/
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100vh;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
        filter: blur(10px);
        transition: all .8s;
      }
      &-item {
        margin-bottom: 10px;
      }
      &-link {
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        position: relative;
        padding: 10px 0;
        color: #fff;
        font-size: 30px;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          display: block;
          width: 0;
          height: 2px;
          background: rgba(#fff, .8);
          transition: .3s .15s ease;
        }
        &:hover:after {
          width: 100%;
        }
      }
    }
  }
  .slide-in-enter-active, .slide-in-leave-active {
    /*transition: opacity .5s linear, transform .5s cubic-bezier(.2,.5,.1,1);*/
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-in-enter, .slide-in-leave-to {
    opacity: 0;
    transform: translateX(-1em);
  }
  ////////////////////////////
  @media only screen and (min-width: 560px) and (max-width: 1200px) {
    .nav {
      width: 100%;
      top: 51px;
      &-menu {
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        padding-bottom: 40px;
        &-item {
          position: relative;
          width: auto;
          padding: 10px;
          flex-shrink: 0;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .burger {
      display: none;
    }
    .header {
      &-nav {
        background: rgba(#393939, .5);
        padding: 0;
        margin-bottom: 38px;
      }
      &-logo {
        margin-right: 18px;
      }
    }
    .nav {
      position: relative;
      width: auto;
      display: block !important;
      &-menu {
        height: 100%;
        display: flex;
        flex-direction: row;
        padding: 0;
        background: none;
        box-shadow: none;
        &:before {
          content: none
        }
        &-item {
          position: relative;
          margin-bottom: 0;
          &.is-open {
            background: #000;
          }
        }
        &-link {
          display: block;
          padding: 15px 28px;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          &:after {
            content: none;
          }
          &:hover {
            background: #000;
          }
        }
      }
    }
  }
</style>
