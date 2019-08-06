<template>
  <footer>
    <div class="container">
      <div class="flex">
        <div class="col-location">
          <a class="col-location-logo" href="#!"></a>
          <div class="col-location-address">
            <span>ул. Волочаевская, 8г<br>
            тел.: (4212) 25-30-85<br>
            (4212) 470-300</span>
          </div>
          <div class="col-location-map">
            <a href="#!"></a>
            <span>Найдите нас<br>
          на карте</span>
          </div>
        </div>
        <my-form class="form-container">
          <p class="form-caption">Оставьте заявку или напишите вопрос и получите <br>
            <span>Бесплатную консультацию</span> специалиста!
          </p>
          <form class="form" >
            <div class="flex">
              <div class="form-row" role="username">
                <input type="text" placeholder="ВАШЕ ИМЯ" required>
              </div>
              <div class="input-group">
                <div class="form-row" role="usermail">
                  <input type="email" placeholder="ВАШ E-MAIL" required>
                </div>
                <div class="form-row" role="usernumber">
                  <input type="text" placeholder="ВАШ НОМЕР" required>
                </div>
              </div>
              <div class="form-row">
                <textarea placeholder="Текс сообщения" required></textarea>
              </div>
              <button type="submit" class="btn btn-transparent">отправить</button>
            </div>
          </form>
        </my-form>
        <div class="col-social">
          <img class="col-social-view" src="/static/img/footer_fb.png">
          <ul class="col-social-icons">
            <li v-for="item of socialIcons" :style="item.icon">
              <a :href="item.url"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import Form from '../Global/Form'
  export default {
    components: {
      'my-form' : Form
    },
    data() {
      return {
        socialIcons: [
          {
            url: '#!',
            icon: 'background: url(/static/img/icons_sprite.png) no-repeat -160px -8px',
          },
          {
            url: '#!',
            icon: 'background: url(/static/img/icons_sprite.png) no-repeat -205px -7px',
          },
          {
            url: '#!',
            icon: 'background: url(/static/img/icons_sprite.png) no-repeat -248px -8px',
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  footer {
    background: #393939;
    padding: 42px 0 20px;
  }
  .flex {
    flex-direction: column;
    align-items: center;
  }
  .form .flex {
    flex-direction: column;
  }
  .col-location {
    display: flex;
    flex-direction: column;
    order: 2;
    &-logo {
      order: 1;
      width: 232px;
      height: 130px;
      background: url("/static/img/icons_sprite.png") no-repeat -4px -151px;
    }
    &-address {
      display: flex;
      align-items: flex-start;
      margin-bottom: 30px;
      color: #aaa9a9;
      font-size: 16px;
      font-weight: 300;
      &:before {
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        margin-right: 12px;
        background: url('/static/img/icons_sprite.png') no-repeat -374px -4px;
      }
    }
    &-map {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 40px;
      opacity: .5;
      transition: opacity .3s ease;
      &:hover {
        opacity: 1;
      }
      a {
        width: 97px;
        height: 97px;
        background: url("../../../static/img/icons_sprite.png") no-repeat -308px -55px;
      }
      span{
        position: relative;
        letter-spacing: -.6px;
        line-height: 1.1;
        &:before {
          content: '';
          width: 23px;
          height: 50px;
          background: url('/static/img/icons_sprite.png') no-repeat -328px -204px;
          position: absolute;
          top: -8px;
          left: -42px;
          color: #aaa9a9;
          font-size: 48px;
          font-weight: 400;
        }
      }
    }
  }
  .form {
    &-container {
      order: -1;
      margin-bottom: 40px;
    }
    &-caption {
      font-weight: 100;
      span {
        font-weight: 400;
      }
    }
    &-row {
      position: relative;
      width: 100%;
      margin-bottom: 15px;
      margin-right: 0;
      &:after {
        content: '*';
        cursor: default;
        position: absolute;
        color: #ffffff;
        top: 2px;
        right: 4px;
        font-size: 18px;
        opacity: .5;
      }
    }
  }
  .input-group {
    width: 100%;
    margin-bottom: 15px;
  }
  textarea {
    border: none;
    width: 100%;
    padding: 10px;
    height: 100px;
    background: none;
    resize: none;
    font-family: 'Roboto';
    &::placeholder {
      color: #b6b6b6;
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 14px;
    }
    &:focus,
    &:valid {
      background: #fff;
    }
  }
  .btn {
    width: 100%;
  }
  .col-social {
    order: 1;
    margin-bottom: 40px;
    &-view {
      margin-bottom: 15px;
    }
    &-icons {
      display: flex;
      justify-content: flex-end;
      li {
        position: relative;
        width: 30px;
        height: 30px;
        opacity: .5;
        transition: .3s ease;
        &:hover {
          opacity: 1;
        }
        &:not(:last-child) {
          margin-right: 12px;
        }
        a {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    .col-location {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      &-address {
        width: 35%;
        text-align: right;
      }
      &-map {
        justify-content: space-evenly;
        width: 45%;
        order: -1;
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    footer {
      padding-bottom: 75px;
    }
    .container {
      max-width: 1178px;
    }
    .flex {
      flex-direction: row;
      align-items: initial;
      justify-content: space-between;
    }
    .form-container {
      margin-left: -45px;
      margin-top: -5px;
      max-width: 469px;
      width: 100%;
    }
    .col-location {
      display: block;
      order: 0;
      &-logo {
        margin-bottom: 19px;
      }
      &-map {
        margin-bottom: 0;
      }
    }
    .form {
      &-container {
        order: 1;
        margin-bottom: 0;
      }
    }
    .input-group {
      display: flex;
      justify-content: space-between;
      .form-row {
        margin-bottom: 0;
        &:first-child {
          width: 51%;
        }
        &:last-child {
          width: 46%;
        }
      }
    }
    .btn {
      width: auto;
      align-self: flex-end;
    }
    .col-social {
      order: 3;
      margin-bottom: 0;
    }
  }

</style>
