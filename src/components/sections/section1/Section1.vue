<template>
  <section>
    <h3 class="section-caption">У вас уже есть свой сайт. Замечательно,
      половина пути пройдена! Но как сделать так,
      чтобы ваша целевая аудитория нашла
      его и узнала о ваших товарах и услугах?
      Всё просто – заказать SEO-продвижение в компании WEB ALTERNATIVE.</h3>
    <ul class="articles">
      <li class="articles-item"
          v-for="(article,i) in articles"
          :key="article.id"
          :style="article.bg"
          :index=i
          @mouseover="index = i"
          @mouseleave="index = null"
      >
        <a class="articles-item-link"
           :href="article.url"
        >{{article.topic}}</a>
        <transition name="fade">
          <popup :key="article.id"
                 v-show="index === i"
          >
          </popup>
        </transition>
      </li>
    </ul>
    <Advantages/>
    <section-footer></section-footer>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import Advantages from './Advantages'
  import SectionFooter from './SectionFooter'
  import Popup from './Popup'

  export default {
    components: {
      Advantages,
      SectionFooter,
      Popup
    },
    data() {
      return {
        show: false,
        index: null,
      }
    },
    computed: {
      ...mapState(['articles']),
    }
  }
</script>
<style lang="scss" scoped>
  section {
    padding-top: 40px;
  }

  .section-caption {
    padding: 0 20px;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 40px;
  }

  .articles {
    display: flex;
    flex-wrap: wrap;
    padding: 40px 10px;
    margin-bottom: 46px;
    background: {
      image: url('/static/img/bg_section1.jpg');
      position: 0 0;
      attachment: fixed;
      repeat: no-repeat;
      /*size: 110%;*/
    }
    &-item {
      position: relative;
      width: 100%;
      height: 248px;
      padding: 13px;
      background-size: cover !important;
      &:not(:last-child) {
        margin-bottom: 70px;
      }
      &-link {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid rgba(#fff, .5);
        color: #fff;
        height: 100%;
        font-size: 20px;
      }
    }
  }

  @media only screen and (min-width: 640px) and (max-width: 1024px) {
    .articles {
      justify-content: space-between;
      padding-bottom: 0;
      &-item {
        width: 49%;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    .articles {
      flex-wrap: nowrap;
      background: none;
      &-item {
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    }
    .btn-more {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1200px) {
    section {
      padding-top: 99px;
    }
  }

  @media only screen and (min-width: 1440px) {
    .articles {
      flex-wrap: nowrap;
      background: none;
      padding: 0;
    }
  }

  @media only screen and (min-width: 1700px) {
    .container {
      max-width: 1180px;
    }
    .section-caption {
      max-width: 1140px;
      font-size: 18px;
      margin: 0 auto 57px;
      text-align: center;
    }
    .articles {
      flex-wrap: nowrap;
      background: none;
      padding: 0;
      &-item {
        position: relative;
        &:not(:last-child) {
          margin-bottom: 0;
        }
        &-link {
          display: block;
          padding: 124px 40px 20px;
        }

      }
    }
    .fade-enter-action, .fade-leave-action {
      transition: opacity .5s ease-in-out;
    }
    .fade-enter, .fade-leave {
      opacity: 0;
    }
    .fade-enter-to, .fade-leave-to {
      opacity: 1;
    }
  }

  /*@media only screen and (min-width: 1440px) {*/
  /*.articles-item-popup {*/
  /*min-height: initial;*/
  /*&__content p {*/
  /*font-size: 13px;*/
  /*}*/
  /*}*/
  /*}*/
</style>
