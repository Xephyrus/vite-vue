<template>
  <div class="demo">
    <div class="bg-dark flex-between">
      <wallet></wallet>
      <cloud></cloud>
      <breeno></breeno>
      <browser></browser>
      <camera></camera>
      <pics></pics>
      <chrome></chrome>
      <game></game>
    </div>
    <div class="bg-light flex-between">
      <triangle></triangle>
      <svg-triangle></svg-triangle>
    </div>
    <div class="bg">
      <magnifier></magnifier>
    </div>
  </div>
</template>

<script lang="ts">
import Chrome from '@/components/div/Chrome.vue'
import Pics from '@/components/div/Pics.vue'
import Triangle from '@/components/geometry/triangle.vue'
import Game from '@/components/svg/game.vue'
import SvgTriangle from '@/components/svg/triangle.vue'
import { defineComponent, ref } from 'vue'
import Breeno from '../components/div/Breeno.vue'
import Browser from '../components/div/Browser.vue'
import Camera from '../components/div/Camera.vue'
import Cloud from '../components/div/Cloud.vue'
import House from '../components/div/House.vue'
import Wallet from '../components/div/Wallet.vue'
import Magnifier from '../components/Magnifier.vue'
export default defineComponent({
  components: {
    House,
    Magnifier,
    Wallet,
    Cloud,
    Breeno,
    Browser,
    Camera,
    Triangle,
    SvgTriangle,
    Pics,
    Chrome,
    Game
  },
  setup(props) {
    const n = ref(0)
    const num = () => {
      console.log(111)
    }
    const addOne = () => {
      n.value++
    }
    return { num, n, addOne }
  }
})
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
.demo {
  // padding-top: 200px;
  padding-bottom: 200px;
  padding-left: 100px;
  padding-right: 100px;
}
</style>
