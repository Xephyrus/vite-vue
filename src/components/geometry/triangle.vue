<template>
  <div class="graphical">
    <div class="triangle"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type: [String, Number],
    default: 10
  },
  bgColor: {
    type: String,
    default: 'orange'
  }
})
</script>

<style lang="scss" scoped>
@mixin common {
  width: 10em;
  height: 10em;
  border-top-right-radius: 20%;
  background: v-bind(bgColor);
}

.graphical {
  font-size: calc(v-bind(size) * 1px);
  padding: 5em;
  height: auto;
}

.triangle {
  position: relative;
  margin: auto;

  @include common();
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);

  &::before {
    content: '';
    position: absolute;
    @include common();
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -100%);
  }

  &::after {
    content: '';
    position: absolute;
    @include common();
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(100%, 50%);
  }
}
</style>
