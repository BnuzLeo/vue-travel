<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :lists="cities"
               :hots="hotCities"
               :letter="letter"
    ></city-list>
    <city-alphabet
      :lists="cities"
      @change="letterChange"
    ></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from '@/pages/city/components/Header'
  import CitySearch from '@/pages/city/components/Search'
  import CityList from '@/pages/city/components/List'
  import CityAlphabet from '@/pages/city/components/Alphabet'

  export default {
    name: "City",
    components: {CityHeader,CitySearch,CityList,CityAlphabet},
    data(){
      return{
        cities:{},
        hotCities:[],
        letter: ''
      }
    },
    methods:{
      getCityData(){
        axios.request('/api/city.json')
          .then(this.initData)
      },
      initData(res){
        var res = res.data
        if (res.ret == true && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      },
      letterChange(letter){
        this.letter = letter
      }
    },
    mounted(){
      this.getCityData();
    }
  }
</script>

<style scoped>

</style>
