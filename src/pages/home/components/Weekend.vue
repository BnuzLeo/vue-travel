<template>
  <div>
    <div class="title">周末去哪玩</div>
    <ul>
      <router-link
        tag="li"
        class="border-bottom"
        v-for="(item, index) of list"
        :key="item.id"
        :to="/weekend/+item.id">
        <div class="item-icon-wrapper">
          <img :src="item.imgUrl"
               class="item-icon">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styl/mixins.styl"
  .title
    padding .1rem
    margin-top .2rem
    line-height .6rem
    background-color: #eee

  .item-icon-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-icon
      width 100%

  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .27rem
      font-weight bold
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

</style>
