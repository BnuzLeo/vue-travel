<template>
  <div>
    <div class="banner" @click="handleBannerclick">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/1503/52/52a78f6b50b84cd9.water.jpg_r_800x800_9a2effe6.jpg">
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
    <common-gallary :imgs="imgs"
                    v-show="showGallary"
                    @closeGallary="handleCloseGallary"
    ></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: "Banner",
    components: {CommonGallary},
    data(){
      return{
        showGallary: false,
        imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg','http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
      }
    },
    methods:{
      handleBannerclick(){
        this.showGallary = true
      },
      handleCloseGallary(){
        this.showGallary = false
      }
    }
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
