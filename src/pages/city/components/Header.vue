<template>
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
  @import "~styl/variables.styl"

  .header
    position relative
    overflow hidden
    text-align center
    background-color $bg-color
    height $header-hight
    line-height $header-hight
    font-size .32rem
    color #fff
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
