<template>
  <div>
    <div class="title">周末去哪玩</div>
    <ul>
      <li class= "border-bottom" v-for="(item, index) of itemList">
        <div class="item-icon-wrapper">
          <img :src="item.url"
               class="item-icon">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
    data(){
      return{
        itemList:[{
          title:'浮在海上的绿洲',
          desc:'南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊',
          url:'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg'
        },{
          title:'粤西温泉',
          desc:'自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作',
          url:'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg'
        },{
          title:'珠海打卡',
          desc:'要休闲，要观光，统统满足你',
          url:'http://img1.qunarzz.com/sight/source/1505/11/248b40e34116fb.jpg_r_640x214_560e7d05.jpg'
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
