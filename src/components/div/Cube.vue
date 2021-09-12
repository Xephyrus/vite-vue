<template>
  <div v-if="loaded" class="field">
    <div class="cube">
      <div v-for="item in surface" :key="item.name" :style="style(item)" class="cube-surface">
        <!-- {{ item.name }} -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Cube'
})
</script>

<script lang="ts" setup>
import axios from 'axios'
import { defineComponent, onBeforeMount, ref } from 'vue'

const loaded = ref(false)
const surface = ref([
  {
    cover: 'url(https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role7_7370303.png)',
    name: 'Arista',
    direction: 'front',
    before: 'translateZ(100px)',
    active: 'translateZ(200px)'
  },
  {
    cover: 'url(https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role4_1bdb472.png)',
    name: 'Erica',
    direction: 'back',
    before: 'rotateY(180deg) translateZ(100px)',
    active: 'rotateY(180deg) translateZ(200px)'
  },
  {
    cover: 'url(https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role8_cdd632b.png)',
    name: 'Rovine',
    direction: 'right',
    before: 'rotateY(90deg) translateZ(100px)',
    active: 'rotateY(90deg) translateZ(200px)'
  },
  {
    cover: 'url(https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role2_bb2a8e6.png)',
    name: 'Eurias',
    direction: 'left',
    before: 'rotateY(270deg) translateZ(100px)',
    active: 'rotateY(270deg) translateZ(200px)'
  },
  {
    cover: 'url(https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role10_d222e95.png)',
    name: 'Elizabeth',
    direction: 'top',
    before: 'rotateX(90deg) translateZ(100px)',
    active: 'rotateX(90deg) translateZ(200px)'
  },
  {
    cover: 'url(https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role3_5dc871f.png)',
    name: 'Luna',
    direction: 'bottom',
    before: 'rotateX(270deg) translateZ(100px)',
    active: 'rotateX(270deg) translateZ(200px)'
  }
])

const style = (item: any) => {
  return {
    '--before': item.before,
    '--active': item.active,
    backgroundImage: item.cover
  }
}

onBeforeMount(() => {
  const surfaceVal: string[] = [
    'https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role7_7370303.png',
    'https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role4_1bdb472.png',
    'https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role8_cdd632b.png',
    'https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role2_bb2a8e6.png',
    'https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role10_d222e95.png',
    'https://sv.res.netease.com/pc/gw/20190422155537/img/p1/p1Role3_5dc871f.png'
  ]
  const all: any[] = surfaceVal.map((url: string) => axios.get(url))
  Promise.all(all).then(() => {
    loaded.value = true
  })
})
</script>

<style lang="scss" scoped>
@keyframes rotate {
  from {
    transform: rotateY(0deg) rotateX(0deg);
  }
  to {
    transform: rotateY(360deg) rotateX(360deg);
  }
}

.field {
  margin: 120px 0;
  perspective: 1000px;

  .cube {
    height: 200px;
    width: 200px;
    position: relative;
    margin: auto;
    transform-style: preserve-3d;
    -webkit-animation: rotate 15s infinite;
    -o-animation: rotate 15s infinite;
    animation: rotate 15s infinite 2s;

    &-surface {
      height: inherit;
      width: inherit;
      opacity: 0.9;
      position: absolute;
      text-align: center;
      background: #333;
      color: #fff;
      line-height: 200px;
      font-size: 30px;
      background-size: cover;
      background-position: 50% 35%;
      transform: var(--before);
    }

    &:hover {
      .cube-surface {
        transform: var(--active);
      }
    }
  }
}
</style>
