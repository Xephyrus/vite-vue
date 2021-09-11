<template>
  <figure class="pics">
    <triangle
      class="triangles"
      v-for="(item, index) in state.triangles"
      :key="index"
      :style="item.style"
      v-bind="item"
    ></triangle>
  </figure>
</template>

<script lang="ts" setup>
import triangle from '../svg/triangle.vue'
import { reactive } from 'vue'

const state = reactive({
  triangles: [
    {
      size: 200,
      bgColor: '#e7ddff',
      round: 40,
      style: {
        left: '1em',
        bottom: '5.6em',
        transform: 'translateY(3em)'
      }
    },
    {
      size: 120,
      bgColor: '#ffffff',
      round: 40,
      style: {
        right: '1.8em',
        bottom: '6em',
        transform: 'translateY(3em)'
      }
    }
  ]
})
</script>

<style lang="scss" scoped>
.pics {
  font-size: 20px;
  width: 15em;
  height: 15em;
  border-radius: 25%;
  background: #855aff;
  position: relative;

  .triangles {
    position: absolute;
    bottom: 4.5em;
  }
}
</style>
