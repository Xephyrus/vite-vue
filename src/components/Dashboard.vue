<template>
  <div class="dashboard">
    <div class="main">
      <span v-for="i in 100" :key="i" :style="dash(i)"></span>
    </div>
    <p class="pc">{{ value }} %</p>
    <input type="range" :style="{ backgroundSize: value + '% 100%' }" v-model="value" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Dashboard'
})
</script>

<script lang="ts" setup>
import { ref, defineComponent, onMounted } from 'vue'

const value = ref<number>(30)
const dash = (n: number) => {
  let i = n - 1
  let style: any = {}
  if (i < value.value) {
    style['--bg'] = 'hsl(' + 360 * (i / 100) + ', 100%, 50%)'
    style['--sg'] = 'hsl(' + 360 * (i / 100) + ', 100%, 50%)'
  } else {
    style['--bg'] = 'black'
    style['--sg'] = 'transparent'
  }
  style['--degree'] = 360 * (i / 100) + 'deg'
  return style
}

onMounted(() => {
  // setInterval(() => {
  //   let random = Math.random() * 20 - 10
  //   value.value += Math.round(random)
  //   if (value.value >= 100) {
  //     value.value = 100
  //   }
  //   if (value.value <= 0) {
  //     value.value = 0
  //   }
  // }, 500)
})
</script>

<style lang="scss" scoped>
$progress: #1e9aff;
.dashboard {
  font-size: 6px;
  width: 50em;
  margin: 0 auto;
  position: relative;

  .main {
    width: 40em;
    height: 40em;
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
    span {
      --bg: black;
      --sg: transparent;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: start;
      transform: rotate(var(--degree));

      &::before {
        content: '';
        width: 0.5em;
        height: 2em;
        position: absolute;
        background: var(--bg);
        box-shadow: 0 0 0.5em var(--sg), 0 0 1em var(--sg), 0 0 2em var(--sg);
        transition: 0.8s linear;
      }
    }
  }

  input[type='range'] {
    width: 40em;
    height: 1em;
    appearance: none;
    background: linear-gradient(45deg, #6c5bff, #8ac7ff) no-repeat, #e5ecfc;
    background-size: 0 100%;
    border-radius: 0.5em;

    &::-webkit-slider-thumb {
      cursor: pointer;
      appearance: none;
      width: 2em;
      height: 2em;
      background: $progress;
      border-radius: 50%;
      box-shadow: 0 0 1em lighten($color: $progress, $amount: 10%),
        0 0 2em lighten($color: $progress, $amount: 10%);
      background: radial-gradient(#1a85ff 0%, #1a85ff 40%, #32a3ff 60%, #91cbfd 100%);
      // border: 3px solid #77c0ff;
    }
  }
  .pc {
    color: white;
    font-size: 6em;
    font-family: Arial, Helvetica, sans-serif;
    // text-shadow: 0.2vw 0.2vw 0 gray, 0 0 1vw #1e90ff, 0 0 2vw #1e90ff, 0 0 4vw #1e90ff;
  }
}
</style>
