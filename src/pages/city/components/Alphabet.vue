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
    name: "CityAlphabet",
    props: {
      lists: Object
    },
    data() {
      return {
        moveStatus: false,
        timer: null,
        startY: 0
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop;
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
          /*如果在timer还没有执行的时候，又监听到了方法的改动，那就不执行之前的timer了*/
          if (this.timer) {
            clearTimeout(this.timer)
          }
          /*监听到方法之后，16毫秒之后再执行*/
          this.timer = setTimeout(() => {
            const endY = e.touches[0].clientY - 79;
            const index = Math.floor((endY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          },16)
        }
      },
      handleTouchEnd() {
        this.moveStatus = false
      }
    }
  }
  ;
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
