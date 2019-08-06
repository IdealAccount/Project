<template>
    <ul>
      <li v-for="item of submenu">
        <!--если есть url, тогда это ссылка Router -->
        <router-link v-if="item.url"
                     :to="item.url"
        >{{item.title}}</router-link>
        <!--в противном случае просто ссылка-->
        <a v-else>{{item.title}}</a>
      </li>
    </ul>
</template>
<script>
  export default {
    props: ['submenu'],
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  ul {
    display: none;
    position: absolute;
    left: 30%;
    height: 100%;
    width: 100%;
    top: 50px;
    background: #404040;
    z-index: 99999;
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    box-shadow: 0 2px 8px 2px rgba(#000,.6);
    li {
      width: 100%;
      transition: .2s ease-in-out;
      &:last-child a {
        border-bottom: none;
      }
      a {
        width: 100%;
        padding: 25px;
        font-size: 18px;
        font-weight: 100;
        text-transform: capitalize;
        color: #fff;
        background: #404040;
        border-bottom: 1px solid rgba(#fff,.3);
        &:hover {
          color: #fff;
          background: #000;

        }
      }
    }
  }
  .is-show {
    display: block;
  }
  @media only screen and (min-width: 559px) {
    ul {
      top: 100%;
      left: 0;
      height: auto;
      min-width: 300px;
    }
  }
  @media only screen and (min-width: 1200px) {
    ul {
      left: 0;
      top: 100%;
      width: 300px;
      li a {
        padding: 15px 28px;
        font-weight: 300;
      }
    }
  }

</style>
