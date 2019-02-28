<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      :sightName="sightName"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="containner">
      <detail-list :list="detailList"></detail-list>
    </div>
  </div>
</template>

<script>
  import DetailBanner from '@/pages/detail/components/Banner'
  import DetailHeader from '@/pages/detail/components/Header'
  import DetailList from '@/pages/detail/components/List'
  import axios from 'axios'

  export default {
    name: "Detail",
    components: {DetailBanner,DetailHeader,DetailList},
    data(){
      return{
        detailList:[],
        bannerImg:'',
        gallaryImgs:[],
        sightName:''
      }
    },
    methods:{
      handleRequestSucc(res){
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data
          this.detailList = data.categoryList
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.sightName = data.sightName
        }
      }
    },
    activated(){
      axios.get('/api/detail.json',{
        params:{
          id: this.$route.params.id
        }
      }).then(this.handleRequestSucc)
    }
  }
</script>

<style lang="stylus" scoped>
  .containner
    height 50rem
</style>
