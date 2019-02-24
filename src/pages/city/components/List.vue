<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list border-topbottom">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list border-topbottom">
          <div class="button-wrapper" v-for="(item,index) of hots" :key="index">
            <div class="button" @click="selectCity(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,index) of lists" :key="index" :ref="index">
        <div class="title">{{index}}</div>
        <div class="item-list" v-for="(citieitems,index) of item" :key="index">
          <div class="item border-bottom" @click="selectCity(citieitems.name)">
            {{citieitems.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState,mapActions,mapMutations} from 'vuex'

  export default {
    name: "List",
    props: {
      lists: Object,
      hots: Array,
      letter: String
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      letter() {
        const itemElement = this.$refs[this.letter][0]
        if (itemElement) {
          this.scroll.scrollToElement(itemElement);
        }
      }
    },
    computed:{
      ...mapState(['city'])
    },
    methods: {
      selectCity(cityName) {
        this.initCity(cityName)
        this.$router.push('/')
      },
      ...mapActions(['initCity'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styl/variables.styl"
  /*改写一像素边框的样式*/
  .border-topbottom
    &:before
      background-color #ccc
    &:after
      background-color #ccc

  .border-bottom
    &:before
      background-color #ccc

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .4rem
      background-color #eee
      padding-left .2rem
      color #666
      font-size .23rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        height .86rem
        line-height .86rem
        padding 0 .2rem
</style>
