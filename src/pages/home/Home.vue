<template>
  <div>
    <home-header></home-header>
    <home-carousel></home-carousel>
    <home-icon></home-icon>
  </div>
</template>

<script>
  import homeHeader from './components/Header'
  import HomeCarousel from './components/Carousel'
  import HomeIcon from './components/Icon'

  export default {
    name: "Home",
    components: {homeHeader,HomeCarousel,HomeIcon}
  }
</script>

<style scoped>

</style>
