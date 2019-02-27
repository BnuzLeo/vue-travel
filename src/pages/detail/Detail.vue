<template>
  <div>
    <detail-banner></detail-banner>
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

  export default {
    name: "Detail",
    components: {DetailBanner,DetailHeader,DetailList},
    data(){
      return{
        detailList:[{
          title:'成人票',
          children:[
            {title:'成人票1'},
            {title:'成人票2'},
            {
              title:'成人票3',
              children:[{title:'特价成人1'},{title:'特价成人2'},{title:'特价成人3'}]
            }
            ]
        },{
          title:'学生票'
        },{
          title:'儿童票'
        },{
          title:'特价票'
        },]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .containner
    height 50rem
</style>
