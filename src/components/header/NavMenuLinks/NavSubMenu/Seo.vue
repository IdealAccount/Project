<template>
  <div class="content content-seo" :key="777">
    <h1 class="content-title">Нужно SEO-продвижение для Вашего сайта?
      <span>Мы подберем вариант</span></h1>
    <my-form>
      <p class="form-caption">Оставьте заявку на <span>Бесплатную консультацию</span> специалиста!</p>
      <form class="form">
        <div class="flex">
          <div class="form-row" role="username">
            <input id="form-name" type="text" placeholder="ВАШЕ ИМЯ" required>
          </div>
          <div class="form-row" role="usernumber">
            <input id="form-phone" type="text" placeholder="ВАШ НОМЕР" required>
          </div>
          <button type="submit" class="btn btn-primary">отправить</button>
        </div>
      </form>
    </my-form>
    <div class="seo-rating">
      <h2>TOP 1</h2>
      <span>В РЕЙТИНГЕ ЛУЧШИХ ВЕБ-СТУДИЙ ДАЛЬНЕГО ВОСТОКА</span>
    </div>
  </div>
</template>
<script>
  import Form from '../../../Global/Form'
  export default {
    components: {
      'my-form': Form
    }
  }
</script>
<style lang="scss">
  .seo-rating {
    position: absolute;
    margin: 0 auto;
    top: 51px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    max-width: 410px;
    width: 100%;
    padding: 18px 40px 16px;
    background: #df7f35;
    text-transform: uppercase;
    h2 {
      font-family: 'Roboto';
      font-size: 51px;
      line-height: 1;
      font-weight: 700;
    }
    span {
      font-size: 15px;
      line-height: 1;
    }
  }
  @media only screen and (min-width: 1200px) {
    .content-seo {
      position: relative;
    }
    .seo-rating {
      top: auto;
      bottom: -169px;
      left: 50%;
    }
  }
</style>
