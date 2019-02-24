<template>
  <div>
    <ul class="alphabet-list">
      <li class="letter" v-for="(item,index) of lists" :key="index">{{index}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Alphabet",
    props:{
      lists: Object
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styl/variables.styl"
  .alphabet-list
    position absolute
    display flex
    flex-direction column
    justify-content center
    top 1.58rem
    /*left 0 不写的话，它就会靠右*/
    right 0
    bottom 0
    width .4rem
    .letter
      line-height .4rem
      text-align center
      color $bg-color
</style>
