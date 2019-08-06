<template>
  <div class="carousel-container">
    <swiper class="carousel" :options="swiperOptions" ref="mySwiper">
      <swiper-slide v-for="slide of slides" :key="slide.id" class="carousel-slide">
        <a :href="slide.url" :style="slide.bg"></a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="prev" slot="button-prev"></div>
    <div class="next" slot="button-next"></div>
  </div>


</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import '../../../../node_modules/swiper/dist/css/swiper.css'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 2,
          spaceBetween: 20,
          loop: true,
          breakpointsInverse: true,
          grabCursor: true,
          navigation: {
            nextEl: '.next',
            prevEl: '.prev'
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                progressbarOpposite: true,
                hideOnClick: true,
                dynamicBullets: true,
                dynamicMainBullets: 1,
                type: 'bullets'
              },
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            816: {
              slidesPerView: 5
            },
            1024: {
              slidesPerView: 6
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 0
            }
          },

        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      slides() {
        let slide = [];
        for (let i = 0; i <= 11; i++) {
          slide.push({id: i, bg: 'background: url(../static/img/icons_sprite.png) no-repeat center', url: '#!'})
        }
        return slide
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  .carousel {
    padding: 20px;
    background: rgba(#fff, .6);
    border-radius: 4px;
    height: 50vh;
    &-slide {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
      height: 100%;
      margin: 0 auto;
      &:hover a {
        background-position: -138px -60px !important;
      }
      a {
        transition: none;
        display: block;
        height: 65px;
        width: 125px;
        background-position: 0 -60px !important;

      }
    }
  }
  .carousel-container {
    position: relative;
  }
  @media only screen and (min-width: 480px) {
    .next, .prev {
      position: absolute;
      z-index: 120;
      top: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      background: url("/static/img/icons_sprite.png") no-repeat -288px 0px;
      outline: none;
      &:hover {
        background-position: -330px 0;
      }
    }
    .prev {
      left: 0;
      transform: rotate(-180deg) translateY(50%);
      &:hover {
        transform: rotate(0deg) translateY(-50%);
      }
    }

    .next {
      right: 0;
      transform: translateY(-50%);
      &:hover {
        transform: rotate(-180deg) translateY(50%)
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .carousel {
      height: 500px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .swiper-pagination {
      display: none;
    }
    .carousel {
      padding: 0;
      height: 65px;
    }
    .next {
      right: -13px;
    }
    .prev {
      left: -13px;
    }
  }
</style>
