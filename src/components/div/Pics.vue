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

const props = defineProps({
  size: {
    type: [Number, String],
    default: 10
  }
})

const state = reactive({
  triangles: [
    {
      size: 20 * +props.size,
      bgColor: '#e7ddff',
      round: 4 * +props.size,
      style: {
        left: '1em',
        bottom: '5.6em',
        transform: 'translateY(3em)'
      }
    },
    {
      size: 12 * +props.size,
      bgColor: '#ffffff',
      round: 4 * +props.size,
      style: {
        right: '1.8em',
        bottom: '6.2em',
        transform: 'translateY(3em)'
      }
    }
  ]
})
</script>

<style lang="scss" scoped>
.pics {
  font-size: calc(v-bind(size) * 2px);
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
