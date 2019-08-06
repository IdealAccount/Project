<template>
  <div class="popup">
    <h3 class="popup-title">Почему важна внутренняя оптимизация сайта?</h3>
    <div class="popup-content">
      <p> Раскрутка любого проекта проходит в несколько этапов. Процедура внутренней оптимизации
        призвана сделать ваш сайт лучше, увеличить шансы на вывод в топ поисковой выдачи.</p>
      <p>Это предварительный этап работ, благодаря которому появится прочный фундамент для
        выстраивания бизнеса в интернете. Наши специалисты знают всё об эффективной оптимизации сайтов.
        Мы проанализируем имеющиеся тексты и изображения, навигацию по сайту, тщательно проверим код на
        наличие серьезных ошибок, протестируем юзабилити. Проведение предварительных работ позволит сделать
        ваш сайт более заметным в интернете, увеличить его позиции в поисковой выдаче по интересующим
        вас поисковым запросам.</p>
    </div>
    <a href="#!" class="btn-more">Узнать подробнее</a>
  </div>
</template>
<style lang="scss">
  .popup {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 130%;
    top: 50%;
    left: 0;
    z-index: 100;
    transform: translateY(-50%);
    background-color: #108be9;
    padding: 30px 28px;
    color: #ffffff;
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, .3);
    overflow: hidden;
    &-title {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 16px;
    }
    &-content {
      margin-bottom: 31px;
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        font-size: 16px;
        font-weight: 300;
        &:last-of-type {
          display: none;
        }
      }
    }
  }
  .btn-more {
    margin-top: auto;
    white-space: nowrap;
  }
  @media only screen and (min-width: 420px) {
    .popup {
      &-title {
        font-size: 26px;
        text-align: center;
      }
      &-content p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        &:last-of-type {
          display: -webkit-box;
        }
      }
    }
  }
  @media only screen and (min-width: 640px) {
    .popup {
      &-title {
        font-size: 20px;
      }
    }
  }
  @media only screen and (min-width: 1700px) {
    .popup {
      &-title {
        padding: 0 40px;
        font-size: 22px;
      }
      &-content {
        margin-bottom: 30px;
        p {
          display: block;
          margin-bottom: 20px;
          &:last-of-type {
            display: block;
            margin-bottom: 0;
          }
        }
      }
    }
    .btn-more {
      font-size: 20px;
    }
  }

</style>
