<template>
  <div>
    <div class="title">景点介绍</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of itemList">
        <img :src="item.url"
             class="item-icon">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data(){
      return{
        itemList:[{
          title:'珠海长隆海洋王国',
          desc:'大型鲸鲨展馆，超长飞行过山车',
          url:'http://img1.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_200x200_be5f7395.jpg'
        },{
          title:'海泉湾温泉',
          desc:'多种异域风情温泉泡起来',
          url:'http://img1.qunarzz.com/sight/p0/201403/07/a5397cc9bd4936d128924aa172044314.jpg_200x200_8ef21dea.jpg'
        },{
          title:'珠海御温泉',
          desc:'这里最近很火哦，好多人都在点评它呢！',
          url:'http://img1.qunarzz.com/sight/p0/1603/e9/e9727ce75946b9fe90.water.jpg_200x200_57baa1df.jpg'
        },{
          title:'珠海石景山公园',
          desc:'体验不一样的丛林刺激风光',
          url:'http://img1.qunarzz.com/sight/p0/1603/7f/7fff3d99c5ce8ea390.water.jpg_200x200_94d4a847.jpg'
        }]
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/mixins.styl"
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
