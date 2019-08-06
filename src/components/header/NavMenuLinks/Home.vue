<template>
    <div class="content" >
      <h1 class="content-title">Home</h1>
      <div class="home-text">
        <p>Изображение по которому верстал в папке.Ширина макета 1717px</p>
        <hr>
        <p @mouseover="bounce = true"
           @mouseleave="bounce = false"
        >Эта страница создана для примера,
          нажмите <router-link to="/seo"
                               @mouseover="bounce = true"
                               :class="[{animate: bounce}, 'mark']"
          >сюда</router-link>, чтобы начать
        </p>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        bounce: false
      }
    }
  }
</script>
<style lang="scss">
  .home-text {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: #fff;
    text-align: center;
    .mark {
      font-weight: 900;
      color: orange;
    }
  }

  .animate {
    animation: bounce 1s infinite reverse;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0%)
    }
    50% {
      transform: translateY(-20%)
    }
    100% {
      transform: translateY(0%);
    }
  }
</style>
