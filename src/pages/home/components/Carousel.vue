<template>
  <div>
    <swiper :options="swiperOption" class="carousel-clz" v-if="isShow">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="carousel-img" :src="item.imgUrl"></img>
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
    props: {
      list: Array
    },
    data: function () {
      return {
        swiperOption: {
          pagination: ".swiper-pagination", /*这里是为了使用下面的点点*/
          loop: true/*可以无限循环的意思*/
        }
      }
    },
    computed: {
      isShow: function () {
        return this.list.length;
      }
    }
  };
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
