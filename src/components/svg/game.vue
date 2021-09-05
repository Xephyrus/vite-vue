<template>
  <figure class="game">
    <svg v-for="(item, index) in colorList" :key="index" class="item" viewBox="0 0 100 100">
      <path
        d="M 50 50 m -40 0 a 40 40 0 1 0 80 0  a 40 40 0 1 0 -80 0"
        fill="none"
        :stroke="item.color"
        :style="{'--i': index}"
        stroke-linecap="round"
        class="my-svg-path"
        stroke-width="15"
      ></path>
    </svg>
  </figure>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import Arc from '@/utils/arc'

export default {
  setup() {
    const colorList = ref([
      {
        color: '#39ef21CC'
      },
      {
        color: '#2577ffCC'
      },
      {
        color: '#ef7db9CC'
      },
      {
        color: '#ff7e3aCC'
      },
      {
        color: '#fede00CC'
      }
    ])
    const circle = ref(null)
    const initCircle = () => {
      let value: any = circle.value
      let perimeter: number = value.getTotalLength()
      value.setAttribute('stroke-dasharray', 0.2 * perimeter + ', ' + perimeter)
      console.log(0.2 * perimeter + ', ' + perimeter)
    }
    onMounted(() => {
      //   initCircle()
      let a = new Arc(36)
      console.log(a.tan())
    })

    return {
      circle,
      initCircle,
      colorList
    }
  }
}
</script>

<style lang="scss" scoped>
.game {
  width: 300px;
  height: 300px;
  background: #fff;
  position: relative;

  .item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .my-svg-path {
      stroke-dasharray: 50.27254333496094, 251.3627166748047;
      transform:  rotateZ(90deg) rotateX(180deg)  rotate(calc(var(--i) * 72deg));
      // transform: rotate(calc(var(--i) * 72deg));
      transform-origin: center;
    }
  }
}
</style>
