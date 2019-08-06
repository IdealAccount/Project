<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss">
  .form-caption {
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 16px;
    letter-spacing: -.1px;
    & span {
      font-weight: 400;
      color: orange;
      text-transform: uppercase;
    }
  }
  .form {
    .flex {
      flex-direction: column;
    }
    &-row {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background-position: 20px 10px;
      cursor: pointer;
      min-height: 42px;
      &:before {
        content: '';
        position: absolute;
        z-index: 8;
        display: block;
        width: 40px;
        height: 100%;
        overflow: hidden;
      }
      input {
        cursor: pointer;
        position: relative;
        z-index: 9;
        width: 100%;
        height: 42px;
        background: none;
        border: none;
        color: #000;
        font-size: 14px;
        padding-left: 40px;
        padding-right: 10px;
        text-transform: uppercase;
        transition: .3s ease;
        &::placeholder {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          color: #b6b6b6;
          font-size: 12px;
        }
        &:focus,
        &:valid {
          cursor: text;
          background: #fff;
          z-index: 0;
        }
      }
    }
    [role="username"]:before {
      background: url("/static/img/icons_sprite.png") no-repeat -43px 0;
    }
    [role="usernumber"]:before {
      background: url("/static/img/icons_sprite.png") no-repeat 0 2px;
    }
    [role="usermail"]:before {
      background: url("/static/img/icons_sprite.png") no-repeat -70px 0;
    }
  }
  @media only screen and (min-width:1200px) {
    .form-caption {
      font-size: 20px;
      font-weight: 400;
      & span {
        color: #fff;
      }
    }
    .form {
      .flex {
        flex-direction: row;
      }
      &-row {
        margin-right: 10px;
        margin-bottom: 0;
        &:before {
          content: '';
          position: absolute;
          z-index: 8;
          display: block;
          width: 40px;
          height: 100%;
          overflow: hidden;
        }
      }
    }
  }
</style>
