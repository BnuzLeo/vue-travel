<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="containner"></div>
  </div>
</template>

<script>
  import DetailBanner from '@/pages/detail/components/Banner'
  import DetailHeader from '@/pages/detail/components/Header'

  export default {
    name: "Detail",
    components: {DetailBanner,DetailHeader}
  }
</script>

<style lang="stylus" scoped>
  .containner
    height 50rem
</style>
