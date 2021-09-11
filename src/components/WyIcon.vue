<template>
  <div class="wy-icon-wrap">
    <div class="catgory__icon" :style="{ backgroundImage: `url(${iconMap.get(type)})` }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'a'
  }
})
const iconMap = ref<Map<string, string>>(
  new Map([
    ['a', 'https://dun.163.com/public/res/next/icon_product_a.png'],
    ['b', 'https://dun.163.com/public/res/next/icon_product_b.png'],
    ['c', 'https://dun.163.com/public/res/next/icon_product_c.png']
  ])
)
</script>

<style lang="scss" scoped>
@keyframes catgoryStep {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -3570px 0;
  }
}
.wy-icon-wrap {
  cursor: pointer;
  padding: 0 20px 20px;
  text-align: center;
  line-height: 24px;
  width: 100px;

  .catgory__icon {
    display: block;
    width: 70px;
    height: 70px;
    background-position: 0 0;
    margin: 0 auto;
  }

  &:hover .catgory__icon {
    animation: catgoryStep 1s steps(51);
  }
}
</style>
