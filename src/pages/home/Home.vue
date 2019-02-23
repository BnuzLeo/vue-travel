<template>
  <div>
    <home-header></home-header>
    <home-carousel></home-carousel>
    <home-icon></home-icon>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
  import homeHeader from './components/Header'
  import HomeCarousel from './components/Carousel'
  import HomeIcon from './components/Icon'
  import Recommend from './components/Recommend'
  import Weekend from './components/Weekend'

  export default {
    name: "Home",
    components: {homeHeader,HomeCarousel,HomeIcon,Recommend,Weekend}
  }
</script>

<style scoped>

</style>
