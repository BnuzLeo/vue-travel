<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="请输入城市名称或者拼音" v-model="inputContext">
    </div>
    <div class="search-context" v-show="inputContext" ref="searchResults">
      <ul class="search-context-list">
        <li class="search-item border-bottom" v-for="(item,index) of this.results" @click="selectCity(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">{{this.getDoubleCity}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BSroll from 'better-scroll'
  import { mapMutations,mapGetters } from 'vuex'
  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data() {
      return {
        inputContext: '',
        results:[],
        timer: null
      }
    },
    mounted(){
      this.scroll = new BSroll(this.$refs.searchResults)
    },
    computed:{
      hasNoData(){
        return !this.result
      },
      ...mapGetters(['getDoubleCity'])
    },
    watch: {
      inputContext() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        const list = []
        const key = this.inputContext;
        this.timer = setTimeout(()=>{
          for(let city in this.cities){
            this.cities[city].forEach(function(item){
              if (item.name.indexOf(key) > -1 || item.spell.indexOf(key) > -1){
                list.push(item)
              }
            })
          }
          this.results = list;
        },100)
      }
    },
    methods:{
      selectCity(cityName){
        this.initCity(cityName)
        this.$router.push('/')
      },
      ...mapMutations(['initCity'])
    }
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

  .search-context
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background-color #eee
    z-index: 1
    .search-item
      height .86rem
      line-height .86rem
      padding 0 .2rem
      background-color white
</style>
