<template>
  <div class="scan-wrap">
    <div class="scan"></div>
    <img v-if="image" :src="image" alt />
  </div>
</template>

<script lang="ts">
export default defineComponent({
name: 'Scanning',
});
</script>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'

const image = ref<string>('')
</script>

<style lang="scss" scoped>
@keyframes scanning {
  to {
    background-position: 0 100%, 0 0, 0 0, 0 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}

.scan-wrap {
  position: relative;
  width: 200px;
  height: 200px;

  .scan {
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(#03a9f4, #03a9f4),
      linear-gradient(90deg, #ffffff33 1px, transparent 0, transparent 19px),
      linear-gradient(#ffffff33 1px, transparent 0, transparent 19px),
      linear-gradient(transparent, #2196f3);
    background-size: 100% 1.5%, 10% 100%, 100% 10%, 100% 100%;
    background-repeat: no-repeat, repeat, repeat, repeat;
    background-position: 0 0, 0 0, 0 0, 0 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 1.5%, 0% 1.5%);
    animation: scanning 2s linear infinite;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
}
</style>
