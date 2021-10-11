<!--
 * @Author: your name
 * @Date: 2021-10-07 11:17:49
 * @LastEditTime: 2021-10-07 19:42:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \prismd:\code\vite-vue\src\components\weather\thundery.vue
-->
<template>
  <div class="weather">
    <div class="round round--1"></div>
    <div class="round round--2"></div>
    <div class="rect"></div>
    <div class="lightning"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
@mixin round($size) {
  width: $size;
  height: $size;
  border-radius: 50%;
  // background: rgba(255, 255, 255, 60%);
  border-radius: 50%;
  background: linear-gradient(45deg, #cacaca, #f0f0f0);
  box-shadow: 20px -20px 60px #bebebe, -20px 20px 60px #ffffff;
}
.weather {
  font-size: 20px;
  width: 30em;
  height: 30em;
  background: linear-gradient(45deg, #e0e7ef, #f3f6f9);
  position: relative;

  .round {
    position: absolute;
    z-index: 3;

    &--1 {
      @include round(12em);
      left: 5.5em;
      bottom: 12em;
    }

    &--2 {
      @include round(9em);
      right: 5.5em;
      bottom: 12em;
    }
  }

  .rect {
    z-index: 2;
    width: 8.5em;
    height: 5em;
    background: rgba(255, 255, 255, 60%);
    position: absolute;
    bottom: 12em;
    left: 5.5em + 6em;
  }

  .lightning {
    width: 4em;
    height: 11em;
    clip-path: polygon(40% 42%, 40% 0, 100% 56%, 60% 56%, 40% 100%, 0 42%);
    background: linear-gradient(to bottom, #3675d7, #67ebf6);
    position: absolute;
    bottom: 6em;
    left: 50%;
    z-index: 0;
    transform: translateX(-50%);
  }
}
</style>
