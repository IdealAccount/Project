<template>
  <div class="container">
    <h3>Основные преимущества продвижения сайтов<br>
      от WEB ALTERNATIVE:</h3>
    <ul>
      <li v-for="(item, i) of advantages" :key="i">
        <h4>{{item.title}}</h4>
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        advantages: [
          {
            title: 'Минимальные сроки',
            text: 'Наши SEO-специалисты провели не одну бессонную ночь, изучая различные методики и способы продвижения, поэтому поиск верного решения не займет много времени.'
          },
          {
            title: 'Разумный бюджет',
            text: 'Мы предложим только тот комплекс работ, который необходим непосредственно вам, не навязывая лишние услуги.'
          },
          {
            title: 'Абсолютная прозрачность отношений',
            text: 'Мы всегда отчитываемся по всем проведенным работам, с приложением графиков и статистики.'
          },
          {
            title: 'Поддержка клиента на любом этапе работы',
            text: 'Мы с удовольствием отвечаем на все вопросы о том, что происходит с вашим сайтом и почему. Да-да, даже на самые, казалось бы, простые и примитивные. Мы ценим наших клиентов и стараемся всё сложное объяснить, как можно проще.'
          }
        ]
      }
    },
  }
</script>
<style lang="scss" scoped>
  h3 {
    color: #413e3e;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  ul {
    margin-bottom: 20px;
  }
  li {
    cursor: default;
    position: relative;
    padding-left: 32px;
    padding-bottom: 20px;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(#333,.2);
      margin-bottom: 25px;
    }
    &:nth-child(odd) h4 {
      color: #df7f35;
    }
    &:nth-child(even) h4 {
      color: #008ed7;
    }
    h4 {
      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
    &:nth-child(odd):before {
      background: #df7f35;
    }
    &:nth-child(even):before {
      background: #008ed7;
    }
  }
  @media only screen and (min-width: 1200px) {
    h3 {
      font-size: 30px;
      margin-bottom: 23px;
      font-weight: 700;
    }
    ul {
      margin-bottom: 51px;
    }
    li {
      cursor: default;
      position: relative;
      padding-left: 32px;
      padding-bottom: 0;
      &:not(:last-child){
        border: none;
        margin-bottom: 15px;
      }
      h4 {
        margin-bottom: 0;
        font-weight: 700;
        color: #000 !important;
      }
      p {
        font-size: 14px;
        font-weight: 400;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
      &:nth-child(odd):before {
        background: #df7f35;
      }
      &:nth-child(even):before {
        background: #008ed7;
      }
    }
  }
</style>
