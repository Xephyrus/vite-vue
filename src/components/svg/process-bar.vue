<template>
  <div class="process-bar" style="width: 200px; height: 300px">
    <div class="label">
      <div class="color" :style="{ backgroundColor: config.labelColor }"></div>
      <div class="label-text">{{ config.title }}</div>
    </div>
    <div class="container">
      <defs>
        <filter id="p1" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <svg viewBox="0 0 100 100">
        <text
          x="50"
          y="50"
          class="center"
          :fill="config.textColor"
          :style="{ dominantBaseline: 'middle' }"
        >
          {{ config.percentage }} %
        </text>
        <defs>
          <linearGradient :id="config.gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style="stop-opacity: 1"
              :style="{ stopColor: config.gradient[0] }"
            ></stop>
            <stop
              offset="100%"
              style="stop-opacity: 1"
              :style="{ stopColor: config.gradient[1] }"
            ></stop>
          </linearGradient>
        </defs>

        <path
          d="M 50 50 m -40 0 a 40 40 0 1 0 80 0  a 40 40 0 1 0 -80 0"
          fill="none"
          stroke="#e5e9f2"
          stroke-width="5"
        ></path>
        <path
          ref="circle"
          d="M 50 50 m -40 0 a 40 40 0 1 0 80 0  a 40 40 0 1 0 -80 0"
          fill="none"
          :stroke="`url(#${config.gradientId})`"
          stroke-linecap="round"
          class="my-svg-path"
          stroke-width="5"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'process-bar'
})
</script>

<script lang="ts" setup>
import { ref, onMounted, defineComponent } from 'vue'

const props = defineProps({
  config: {
    type: Object,
    default: () => ({ gradient: [], gradientId: 'gradient' })
  }
})

const circle = ref(null)
const initCircle = () => {
  let percent: number = props.config.percentage / 100
  let value: any = circle.value
  let perimeter: number = value.getTotalLength()
  value.setAttribute('stroke-dasharray', perimeter * percent + ', ' + perimeter)
}
onMounted(() => {
  initCircle()
})

defineExpose({
  initCircle
})
</script>

<style lang="scss" scoped>
@mixin mainAreaHover($hoverColor) {
  box-shadow: 0px 5px 15px darken($hoverColor, 20%);
}
.process-bar {
  display: inline-block;
  .label {
    margin-left: 50%;
    text-align: left;
    font-size: 0;
    line-height: 16px;
    display: flex;
    padding: 16px 0;
    .color {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }

    &-text {
      color: #30373a;
      font-size: 12px;
      line-height: 16px;
    }
  }
  .container {
    font-size: 0;
    position: relative;
  }
  .my-svg-path {
    stroke-dashoffset: 0px;
    transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;
    // transition: stroke-dasharray 800ms;
    transform: rotateZ(90deg) rotateX(180deg);
    transform-origin: 50% 50%;
  }

  .center {
    text-anchor: middle;
    /* 文本水平居中 */
    font-size: 14px;
    /* 文本垂直居中 */
  }
}
</style>
