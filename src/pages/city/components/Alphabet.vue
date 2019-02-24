<template>
  <div>
    <ul class="alphabet-list">
      <li class="letter"
          v-for="itme of letters"
          :key="itme"
          :ref="itme"
          @click="handleClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
      >
        {{itme}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Alphabet",
    props: {
      lists: Object
    },
    data() {
      return {
        moveStatus: false
      }
    },
    computed: {
      letters() {
        const letters = []
        for (let letter in this.lists) {
          letters.push(letter)
        }
        return letters
      }
    },
    methods: {
      handleClick(e) {
        const letter = e.target.innerText;
        if (letter) {
          this.$emit('change', letter)
        }
      },
      handleTouchStart() {
        this.moveStatus = true
      },
      handleTouchMove(e) {
        if (this.moveStatus) {
          const startY = this.$refs['A'][0].offsetTop
          const endY = e.touches[0].clientY - 79
          const index = Math.floor((endY - startY) / 20)
          if (index >= 0 && index < this.letters.length){
            this.$emit('change', this.letters[index])
          }
        }
      },
      handleTouchEnd() {
        this.moveStatus = false
      }
    }
  };
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
