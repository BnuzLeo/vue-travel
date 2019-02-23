<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="(item,index) of page" :key="index">
          <div class="icon-img">
            <img class="icon-img-content" :src='item.src'>
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
    data() {
      return {
        iconsList: [
          {
            id: '001',
            src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          }, {
            id: '002',
            src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          }, {
            id: '003',
            src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '珠海必去'
          }, {
            id: '004',
            src: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
            desc: '海洋馆'
          }, {
            id: '005',
            src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          }, {
            id: '006',
            src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          }, {
            id: '007',
            src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '珠海必去'
          }, {
            id: '008',
            src: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
            desc: '海洋馆'
          }, {
            id: '009',
            src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
        ]
      }
    },
    computed: {
      pages() {
        const pages = []
        this.iconsList.forEach(function (item, index) {
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
