<template>
  <button class="ex-button" :class="[type ? 'ex-button--' + type : '']">
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExButton'
})
</script>

<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
.ex-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &--default {
    &:hover,
    &:focus {
      border-color: $primary;
      color: $primary;
      background-color: #ecf5ff;
    }
  }

  @each $colorKey, $color in $colors {
    &--#{$colorKey} {
      background-color: $color;
      color: #fff;

      &:hover,
      &:focus {
        color: #fff;
        background-color: lighten($color: $color, $amount: 10%);
      }
    }
  }
}
</style>
