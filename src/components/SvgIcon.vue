<template>
  <svg class="icon" aria-hidden="true" :style="{ fontSize: size + 'px' }">
    <use :xlink:href="iconLink"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
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
  },
  setup(props) {
    const iconLink = computed(() => `#icon-${props.name}`)
    const color = ref(props.color)
    const activeColor = ref(props.activeColor)
    return { iconLink, color, activeColor }
  }
})
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
