<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="(item,index) of page" :key="index">
          <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl'>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcon",
    props:{
      list: Array
    },
    data(){
      return{
        swiperOption:{
          auto: false
        }
      }
    },
    computed: {
      pages() {
        const pages = []
        this.list.forEach(function (item, index) {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .icons >>> .swiper-wrapper
    width 100%
    height 0
    padding-bottom 50%

  .icon
    overflow hidden
    position relative
    float left
    width 25%
    padding-bottom 25%
    height 0
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      right 0
      bottom 0
      left 0
      line-height .44rem
      height .44rem
      text-align center
      color #333
      ellipsis()
</style>
