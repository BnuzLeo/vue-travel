<template>
  <div>
    <weekend-header></weekend-header>
    <weekend-video></weekend-video>
  </div>
</template>

<script>
  import WeekendHeader from './components/WeekendHeader'
  import WeekendVideo from './components/WeekendVideo'

  export default {
    name: "Weekend",
    components: {WeekendHeader, WeekendVideo}
  }
</script>

<style scoped lang="stylus">
  .weekend
    width 100%
</style>
