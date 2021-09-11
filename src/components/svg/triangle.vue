<template>
  <svg :width="size" :height="size" viewBox="-50 -50 300 300">
    <polygon class="triangle" stroke-linejoin="round" points="100,13.4 0,200 200,200" />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type: [Number, String],
    default: 250
  },
  bgColor: {
    type: String,
    default: '#0f0'
  },
  round: {
    type: [Number, String],
    default: 20
  }
})
</script>

<style lang="scss" scoped>
.triangle {
  fill: v-bind(bgColor);
  stroke: v-bind(bgColor);
  stroke-width: v-bind(round);
}
</style>
