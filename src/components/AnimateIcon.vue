<template>
  <div @mouseenter="status = 1" @mouseleave="status = -1" class="tpm-multi-tabs__item-cont">
    <i
      class="tpm-multi-tabs__item-icon"
      :class="{
        'is-leave': status === -1,
        'is-enter': status === 1,
        'nav-icon': !props.icon.startsWith('ani')
      }"
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
    ],
    ['game', 'url("https://main.qcloudimg.com/raw/acf8c1b32a12a31cbc5ed4dadc5189a7.png")'],
    ['education', 'url("https://main.qcloudimg.com/raw/22097669a8a81230f6633a182a41f195.png")'],
    ['medical', 'url("https://main.qcloudimg.com/raw/510bafcc7b89478d564ff1269acbd486.png")'],

    ['audio&video', 'url("https://main.qcloudimg.com/raw/bbbea2ab9367960b1305278d8ddcea9c.png")'],
    ['manufacturing', 'url("https://main.qcloudimg.com/raw/2b54c30aa7a0e8b76770eb4368e1f6cd.png")'],
    ['safety', 'url("https://main.qcloudimg.com/raw/3eeffec2f2d634657d7cc889c2fa9491.png")'],

    ['applets', 'url("https://main.qcloudimg.com/raw/242889c9b48a4c8940f06e72a80c49d3.png")'],
    ['private-cloud', 'url("https://main.qcloudimg.com/raw/bf54ff4d6d2ef1389e9c639fe45fef9c.png")'],
    ['finance', 'url("https://main.qcloudimg.com/raw/1110f81b7399890351cc124190cf004f.png")'],

    ['bigData', 'url("https://main.qcloudimg.com/raw/f37e014e6d751eb3fbbd8d30a15818ce.png")'],
    ['cloud-payment', 'url("https://main.qcloudimg.com/raw/9754f0c9088ee1b21b9e83d28c7e07ac.png")'],
    [
      'cultural&tourism',
      'url("https://main.qcloudimg.com/raw/102adb9ba806967981deedc7c0d52022.png")'
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

@keyframes tpm-solution__nav-icon-leave {
  0% {
    background-position: 0 -960px;
  }

  100% {
    background-position: 0 0;
  }
}

@keyframes tpm-solution__nav-icon-enter {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -960px;
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

      &.nav-icon {
        animation: tpm-solution__nav-icon-leave 0.3s steps(16) forwards;
      }
    }

    &.is-enter {
      animation: tpm-product-multi__icon-enter 0.5s steps(24) forwards;

      &.nav-icon {
        animation: tpm-solution__nav-icon-enter 0.3s steps(16) forwards;
      }

      & + p {
        color: #0052d9;
      }
    }
  }
}
</style>
