<template>
  <div>
    <home-header></home-header>
    <home-carousel :list="swiperList"></home-carousel>
    <home-icon :list="iconList"></home-icon>
    <recommend :list="recommendList"></recommend>
    <weekend :list="weekendList"></weekend>
  </div>
</template>

<script>
  import homeHeader from './components/Header'
  import HomeCarousel from './components/Carousel'
  import HomeIcon from './components/Icon'
  import Recommend from './components/Recommend'
  import Weekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: "Home",
    components: {homeHeader,HomeCarousel,HomeIcon,Recommend,Weekend},
    data(){
      return{
        iconList: [],
        swiperList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods:{
      initHomeDate: function () {
        axios.request('/api/index.json')
          .then(this.init)
      },
      init: function (res) {
        res = res.data
        if (res.ret === true && res.data) {
          var data = res.data
          this.iconList = data.iconList
          this.swiperList = data.swiperList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted(){
      this.initHomeDate();
    }
  }
</script>

<style scoped>

</style>
