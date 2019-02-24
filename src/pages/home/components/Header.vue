<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont drop-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style lang="stylus" scoped>
  @import "~styl/variables.styl"
  @import "~styl/mixins.styl"
  /*1rem = html font-size = 50px
    例如两倍图： 86px/50*2 = 0.86rem
  */
  .header
    display flex
    line-height $header-hight
    background $bg-color
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background #fff
      border-radius .1rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      height .64rem
      color #ccc
      line-height .64rem
    .header-right
      width 1.24rem
      float right
      text-align center
      color #fff
      ellipsis()
      .drop-icon
        margin-left -.04rem
        font-size .2rem
</style>
