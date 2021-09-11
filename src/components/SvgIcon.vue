<template>
  <svg class="icon" aria-hidden="true" :style="{ fontSize: size + 'px' }">
    <use :xlink:href="iconLink"></use>
  </svg>
</template>

<script lang="ts">
export default defineComponent({
  name: 'SvgIcon'
})
</script>

<script lang="ts" setup>
import { defineComponent, ref, computed } from 'vue'

const props = defineProps({
  name: {
    type: String
  },
  size: {
    type: String || Number,
    default: '32'
  },
  color: {
    type: String,
    default: '#cdcdcd'
  },
  activeColor: {
    type: String,
    default: '#2061ff'
  }
})

const iconLink = computed(() => `#icon-${props.name}`)
const color = ref(props.color)
const activeColor = ref(props.activeColor)
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: v-bind(color);
  vertical-align: middle;

  &:hover {
    color: v-bind(activeColor);
  }
}
</style>
