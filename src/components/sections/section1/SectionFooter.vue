<template>
  <div class="section-footer">
    <h3>КЛИКНИТЕ НА КНОПКУ </h3>
    <button class="btn btn-primary">Отправить</button>
    <p>И наш менеджер позвонит вам в удобное время и ответит на все интересующие вопросы</p>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  .container {
    min-width: 1180px;
  }
  .section-footer {
    padding: 30px 40px 37px;
    background: url('/static/img/bg_contact.png') no-repeat center ,  #008ed7;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    h3 {
      font-weight: 400;
      font-size: 30px;
      margin-bottom: 21px;
    }
    .btn {
      margin-bottom: 27px;
    }
    p {
      font-size: 18px;
    }
  }
</style>
