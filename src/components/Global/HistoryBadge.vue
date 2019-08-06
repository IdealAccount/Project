<template>
  <div>
    <span>История компании</span>
    <img src="../../../static/img/icon_clock.png">
  </div>
</template>
<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 99;
    top: 200px;
    right: 0;
    width: 47px;
    height: 230px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.54);
    background-color: #df7f35;
    cursor: pointer;
    span {
      transform: rotate(180deg);
      writing-mode: vertical-rl;
      width: auto;
      color: #fff;
      font-size: 18px;
      font-weight: 300;
    }
  }
</style>
