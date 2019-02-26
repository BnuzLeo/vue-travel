<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="show">
      <div class="iconfont back-abs-icon">&#xe624;</div>
    </router-link>
    <div class="header" v-show="!show" :style="opacityStyle">
      城市选择
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        show: false,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 160
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {opacity}
          this.show = false
        }else{
          console.log("hihi")
          this.show = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styl/variables.styl"

  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    line-height .8rem
    height .8rem
    border-radius .4rem
    background-color rgba(0, 0, 0, .8)
    .back-abs-icon
      color #fff
      text-align center

  .header
    position fixed
    left 0
    top 0
    right 0
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
