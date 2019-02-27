<template>
  <div>
    <div class="title">景点介绍</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="(item, index) of list"
        :key="item.id"
        :to="/detail/+item.id">
        <img :src="item.imgUrl"
             class="item-icon">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-icon
      padding .1rem
      width 1.7rem
      height 1.7rem
    .item-info
      flex: 1
      padding .1rem
      min-width 0 /*解决超长省略号的情况*/
      .item-title
        line-height .54rem
        font-size .27rem
        font-weight bold
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-btn
        margin-top .2rem
        background-color #ff9300
        padding 0 .1rem
        border-radius .06rem
        color: #fff
        line-height .44rem
</style>
