<template>
  <div class="ele-man"></div>
</template>

<script lang="ts">
export default {
  setup() {}
}
</script>

<style lang="scss" scoped>
@keyframes mlfly {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 210px 0;
  }
}
.ele-man {
  width: 70px;
  background-image: url('@/assets/images/astronaut.png');
  background-size: 210px 163px;
  height: 163px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  animation: mlfly 0.2s steps(3, start) 0.5s infinite alternate;
}
</style>
