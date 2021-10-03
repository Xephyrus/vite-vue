<template>
  <div class="ali-icon-wrap" @mouseenter="onMouseenter" @mouseleave="onMouseLeave">
    <div
      class="title-img"
      :style="{ backgroundImage: iconMap.get(icon), backgroundPositionY: position }"
    ></div>
    <h3 class="title-desc">
      {{ title }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref } from 'vue'

defineProps({
  icon: {
    type: String,
    default: 'ali-hot'
  },
  title: {
    type: String,
    default: ''
  }
})

const iconMap = ref<Map<string, string>>(
  new Map([
    ['ali-hot', "url('https://img.alicdn.com/tfs/TB1qolSVhz1gK0jSZSgXXavwpXa-128-2688.png')"],
    ['ali-compute', "url('https://img.alicdn.com/tfs/TB1SwmqiODsXe8jSZR0XXXK6FXa-128-2688.png')"],
    ['ali-storage', "url('https://img.alicdn.com/tfs/TB1C7fPidTfau8jSZFwXXX1mVXa-128-2688.png')"],
    [
      'ali-db',
      "url('https://img.alicdn.com/imgextra/i1/19999999999999/O1CN01kEo6502NjasxGsHnS_!!19999999999999-2-tps.png')"
    ],
    [
      'ali-safety',
      "url('https://img.alicdn.com/imgextra/i1/19999999999999/O1CN01wTY5Zt2Njasyydqim_!!19999999999999-2-tps.png')"
    ],
    ['ali-big-data', "url('https://img.alicdn.com/tfs/TB1u12whCslXu8jSZFuXXXg7FXa-128-2688.png')"],
    [
      'ali-ai',
      "url('https://img.alicdn.com/imgextra/i4/19999999999999/O1CN019FqNuv2NjaswQicY2_!!19999999999999-2-tps.png')"
    ],
    ['ali-net&cdn', "url('https://img.alicdn.com/tfs/TB111c4mz39YK4jSZPcXXXrUFXa-128-2688.png')"],
    ['ali-video', "url('https://img.alicdn.com/tfs/TB1.6kUU4v1gK0jSZFFXXb0sXXa-128-2688.png')"],
    [
      'ali-middleware',
      "url('https://img.alicdn.com/imgextra/i2/19999999999999/O1CN01lNd4Q42Njasz4EGUD_!!19999999999999-2-tps.png')"
    ],
    ['ali-developer', "url('https://img.alicdn.com/tfs/TB1cHirmP39YK4jSZPcXXXrUFXa-128-2688.png')"],
    [
      'ali-iot',
      "url('https://img.alicdn.com/imgextra/i4/19999999999999/O1CN01S0iMLP2Njasz4Fk1Q_!!19999999999999-2-tps.png')"
    ],
    ['ali-mix-cloud', "url('https://img.alicdn.com/tfs/TB1gnuZiipE_u4jSZKbXXbCUVXa-128-2688.png')"],
    [
      'ali-app',
      "url('https://img.alicdn.com/imgextra/i2/19999999999999/O1CN01ZViOh72NjasxGvRSV_!!19999999999999-2-tps.png')"
    ]
  ])
)

const fps = ref(0)

const position = computed(() => {
  return -64 * fps.value + 'px'
})

const timer = ref<any>(null)

const onMouseenter = () => {
  timer.value && clearTimeout(timer.value)
  fps.value++
  if (fps.value < 20) {
    timer.value = setTimeout(() => {
      onMouseenter()
    }, 25)
  }
}

const onMouseLeave = () => {
  timer.value && clearTimeout(timer.value)
  timer.value = null
  fps.value--
  if (fps.value > 0) {
    timer.value = setTimeout(() => {
      onMouseLeave()
    }, 25)
  }
}
</script>

<style lang="scss" scoped>
.ali-icon-wrap {
  cursor: url('@/assets/images/vite-rotate.png'), pointer;
  padding: 0 20px 20px;
  text-align: center;
  line-height: 24px;
  width: 100px;

  &:hover .title-desc {
    color: #ff6a00;
  }
  .title-img {
    margin: 0 auto;
    width: 64px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
  }

  .title-desc {
    margin-top: 4px;
    text-align: center;
    font-size: 14px;
    color: #181818;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 0;
    transition: color 0.3s ease;
  }
}
</style>
