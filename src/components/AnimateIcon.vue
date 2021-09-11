<template>
  <div @mouseenter="status = 1" @mouseleave="status = -1" class="tpm-multi-tabs__item-cont">
    <i
      class="tpm-multi-tabs__item-icon"
      :class="{ 'is-leave': status === -1, 'is-enter': status === 1 }"
      :style="{
        backgroundImage: map.get(icon)
      }"
    ></i>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: 'ani-hot'
  },
  text: {
    type: String,
    default: ''
  }
})

const status = ref<number>(0)
const map = ref<Map<string, string>>(
  new Map([
    ['ani-hot', 'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-hot.png")'],
    [
      'ani-base',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-base.png")'
    ],
    [
      'ani-middleware',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-middleware.png")'
    ],
    [
      'ani-storage',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-storage.png")'
    ],
    [
      'ani-database',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-database.png")'
    ],
    ['ani-net', 'url("https://main.qcloudimg.com/raw/aa866277d1ea20bc4d8471dc6a11957c.png")'],
    [
      'ani-video',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-video.png")'
    ],
    [
      'ani-safe',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-safe.png")'
    ],
    [
      'ani-big-data',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-big-data.png")'
    ],
    ['ani-ai', 'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-ai.png")'],
    ['ani-iot', 'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-iot.png")'],
    ['ani-app', 'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-app.png")'],
    [
      'ani-industry',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-industry.png")'
    ],
    [
      'ani-developer',
      'url("https://main.qcloudimg.com/trisys/assets/home/images/product/ani-developer.png")'
    ],
    [
      'ani-spriteeef',
      'url("https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/tea-portal-material-portal/images/ani-spriteeef.png")'
    ]
  ])
)
const width = ref<string>('100px')
</script>

<style lang="scss" scoped>
@keyframes tpm-product-multi__icon-leave {
  0% {
    background-position: 0 -1440px;
  }

  100% {
    background-position: 0 0;
  }
}

@keyframes tpm-product-multi__icon-enter {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -1440px;
  }
}

.tpm-multi-tabs__item-cont {
  position: relative;
  cursor: pointer;
  padding: 0 20px 20px;
  text-align: center;
  font-size: 16px;
  color: #3d485d;
  line-height: 24px;
  width: 100px;

  .tpm-multi-tabs__item-icon {
    width: 60px;
    height: 60px;
    display: inline-block;
    margin-bottom: 6px;
    margin-top: -6px;
    display: block;
    margin: 0 auto 12px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: top;

    &.is-leave {
      animation: tpm-product-multi__icon-leave 0.5s steps(24) forwards;
    }

    &.is-enter {
      animation: tpm-product-multi__icon-enter 0.5s steps(24) forwards;

      & + p {
        color: #0052d9;
      }
    }
  }
}
</style>
