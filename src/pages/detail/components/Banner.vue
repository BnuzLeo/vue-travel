<template>
  <div class="banner">
    <img class="banner-img"
         src="http://img1.qunarzz.com/sight/p0/1606/a0/a0854aa4dff05b84e2.img.jpg_600x330_d1dfb067.jpg">
    <div class="banner-info">
      <div class="banner-title">
        珠海海上乐园，体验不一样的周末
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe632;</span>
        39
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner"
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        font-size .24rem
        background rgba(0, 0, 0, .8)
        .banner-icon
          font-size .24rem
</style>
