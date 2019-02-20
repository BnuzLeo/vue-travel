<template>
  <div>
    <swiper :options="swiperOption" class="carousel-clz">
      <!-- slides -->
      <swiper-slide v-for="item of carouselList" :key="item.id">
        <img class="carousel-img" :src="item.url"></img>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--前一页-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--后一页-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--下滚动条-->
      <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeCarousel",
    data: function () {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",/*这里是为了使用下面的点点*/
          loop: true/*可以无限循环的意思*/
        },
        carouselList: [
          {
            id: '001',
            url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/267be9a1ae19513d08785f6676cd6886.jpg_890x330_0d5c047c.jpg'
          }, {
            id: '002',
            url: 'http://img1.qunarzz.com/piao/fusion/1708/b7/315e9d62dd1e8e02.jpg_890x330_cf0c41ca.jpg'
          }, {
            id: '003',
            url: 'http://img1.qunarzz.com/piao/fusion/1711/fb/de32080b7db0fe02.jpg_890x330_0c79691b.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  /*
    由于受scoped的影响，这里的css是出去不了的，也就是这里重写不了swiper-pagination-bullet-active的样式
    但是这里可以用>>>的方法来穿透，可以把css穿透出去
  */
  .carousel-clz >>> .swiper-pagination-bullet-active
    background #fff !important

  /*
    如果网速很慢的时候，轮播图加载慢会导致轮播有延迟撑大页面的现象
    通过overflow可以控制 高：宽始终保持31.25%，并且给背景提供一个灰色
  */
  .carousel-clz
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.75%
    background-color #eee
    .carousel-img
      width 100%
</style>
