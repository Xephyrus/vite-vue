<template>
  <figure class="weather">
    <div class="sun"></div>
    <div class="cloud"></div>
  </figure>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {}
}
</script>

<style lang="scss" scoped>
.weather {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 7.5em;
  background: #479ff9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .sun {
    width: 18em;
    height: 18em;
    border-radius: 50%;
    background: #ffd800;
  }

  .cloud {
    width: 7.2em;
    height: 7.2em;
    background: #fff;
    position: absolute;
    right: 4em;
    border-radius: 50%;
    bottom: 9em;

    &::before {
      content: '';
      position: absolute;
      height: 4em;
      width: 5.6em;
      border-radius: 2em 0 0 2em;
      bottom: 0;
      background: #fff;
      right: 3.6em;
    }
  }
}
</style>
