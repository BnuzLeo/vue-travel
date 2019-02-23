<template>
  <div>
    <home-header></home-header>
    <home-carousel></home-carousel>
    <home-icon></home-icon>
    <recommend></recommend>
  </div>
</template>

<script>
  import homeHeader from './components/Header'
  import HomeCarousel from './components/Carousel'
  import HomeIcon from './components/Icon'
  import Recommend from './components/Recommend'

  export default {
    name: "Home",
    components: {homeHeader,HomeCarousel,HomeIcon,Recommend}
  }
</script>

<style scoped>

</style>
