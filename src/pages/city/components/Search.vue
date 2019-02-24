<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="请输入城市名称或者拼音">
  </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped lang="stylus">
  @import "~styl/variables.styl"
  .search
    height .72rem
    background-color $bg-color
    padding 0 .1rem
    .search-input
      box-sizing border-box
      width 100%
      border-radius .06rem
      padding 0 .1rem
      color #666
      text-align center
      line-height .62rem
      height .62rem

</style>
