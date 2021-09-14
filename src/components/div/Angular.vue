<template>
  <figure class="angular">
    <div class="ng ng-left"></div>
    <div class="ng ng-right"></div>
    <div class="uppercase-a"></div>
  </figure>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.angular {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 7.5em;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .ng {
    width: 22em;
    height: 22em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &-left {
      clip-path: polygon(0 15%, 50% 0, 50% 100%, 12% 80%);
      background: #dd0031;
      margin-left: 0.5px;
    }

    &-right {
      clip-path: polygon(100% 15%, 50% 0, 50% 100%, 88% 80%);
      background: #c3002f;
      margin-left: -0.5px;
    }
  }
  .uppercase-a {
    width: 12em;
    height: 15em;
    background: #fff;
    margin-top: -2em;
    z-index: 3;
    clip-path: polygon(50% 0, 0% 100%, 16% 100%, 50% 32%, 62% 56%, 36% 56%, 30% 72%, 70% 72%, 84% 100%, 100% 100%);
  }
}
</style>
