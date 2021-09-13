<template>
  <figure class="vue">
    <div class="vue-green"></div>
    <div class="vue-dark"></div>
  </figure>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.vue {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 7.5em;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &-dark {
    width: 13.2em;
    height: 11.4em;
    clip-path: polygon(33% 0, 50% 34%, 67% 0, 100% 0, 50% 100%, 0 0);
    background: #000;
    position: absolute;
    top: 5.5em;
  }

  &-green {
    width: 22em;
    height: 19em;
    clip-path: polygon(20% 0, 50% 60%, 80% 0, 100% 0, 50% 100%, 0 0);
    background: #41b883;
  }
}
</style>
