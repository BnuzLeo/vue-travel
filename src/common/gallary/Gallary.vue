<template>
  <div class="container" @click="handleContainerClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" class="wrapper-swiper">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallary-img"
               :src="item"></img>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    props: ['imgs'],
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observer: true,
          observeParents: true
        }
      }
    },
    methods: {
      handleContainerClick() {
        this.$emit('closeGallary')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit

  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color: #fff
        bottom -1rem
</style>
