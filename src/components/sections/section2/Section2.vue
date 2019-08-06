<template>
  <section>
    <div class="container">
      <h2 class="our-works-title">Посмотрите наши работы</h2>
      <div class="our-works">
        <div class="our-works-item" v-for="work of ourWorks" :key="work.id" :style="work.bg">
          <a :href="work.url"></a>
          <h3>{{work.title}}</h3>
          <p>{{work.description}}</p>
        </div>
      </div>
      <h2 class="carousel-title">Нам доверяют:</h2>
      <carousel></carousel>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'Vuex'
  import Carousel from './Carousel'
  export default {
    components: {
      Carousel
    },
    computed: {
      ...mapState(['ourWorks'])
    }
  }
</script>
<style lang="scss" scoped>
  section {
    padding: 54px 0 52px;
    background: rgba(0,0,0,.7);
  }
  h2  {
    font-size: 30px;
    font-weight: 300;
    color: #fff;
    text-shadow: 2px 8px 6px rgba(#fff,0.2),
                 0px -5px 35px rgba(#000,0.3);
  }
  .our-works {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 42px;
    &-title {
      margin-bottom: 28px;
    }
    &-item {
      overflow: hidden;
      position: relative;
      width: 284px;
      height: 201px;
      z-index: 99;
      padding: 36px 32px 20px 36px;
      color: #fff;
      transition: .3s ease;
      &:hover {
        color: #000;
        z-index: 999;
        transform: scale(1.1);
        &:before {
          background: orange;
          transform: scale(.9);
        }
      }
      &:nth-child(even):hover {
        box-shadow: 0 0 20px 8px rgba(0,203,223,1);
      }
      &:nth-child(odd):hover {
        box-shadow: 0 0 20px 8px rgba(orange,1);
      }
      &:before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.65);
        transition: background-color .3s ease, transform 0.1s;
      }
      h3 {
        font-weight: 400;
        font-size: 26px;
        margin-bottom: 2px;
      }
      p {
        font-size: 15px;
        font-weight: 300;
      }
      a {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 300;
      }
    }
  }
  .our-partners {
    color: #413e3e;
    margin-bottom: 40px;
  }
  .carousel-title {
    margin-bottom: 46px;
  }
  @media only screen and (min-width: 600px) and (max-width: 1199px) {
    .our-works {
      padding-top: 50px;
      padding-bottom: 50px;
      box-shadow: inset 200px -20px 246px 10px rgba(0, 0, 0, 0.7),
                  inset -375px -20px 200px 40px rgba(255, 255, 255, 0.7);
      &-item {
        margin-right: 10px;
        margin-bottom: 10px;
        &:hover {
          transform: scale(1.15);
        }
      }
    }

  }
  @media only screen and (min-width: 1200px) {
    section {
      background: #fff;
    }
    .container {
      max-width: 1180px;
    }
    h2 {
      text-shadow: none;
    }
    .our-works {
      flex-wrap: nowrap;
      margin-bottom: 42px;
      &-title {
        color: #161616;
      }
      &-item {
        &:hover {
          top: 0;
          transform: scale(1.1) translateY(-10%);
        }
        &:nth-child(1n):hover {
          box-shadow: inset 0 0 20px 8px rgba(0,203,223,1);
        }
      }
    }
    .carousel-title {
      color: #413e3e;
    }
  }
</style>
