<template>
  <figure class="baidu-cloud">
    <svg viewBox="0 0 60 60" class="circular-chart circular-chart--1">
      <defs>
        <linearGradient id="grad-pink" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop
            offset="0%"
            style="stop-opacity: 1"
            :style="{ stopColor: 'rgb(253 123 131)' }"
          ></stop>
          <stop
            offset="100%"
            style="stop-opacity: 1"
            :style="{ stopColor: 'rgb(254 71 107)' }"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad-blue" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop
            offset="0%"
            style="stop-opacity: 1"
            :style="{ stopColor: 'rgb(72 213 251)' }"
          ></stop>
          <stop
            offset="100%"
            style="stop-opacity: 1"
            :style="{ stopColor: 'rgb(35 170 243)' }"
          ></stop>
        </linearGradient>
      </defs>
      <path
        class="circle circle-bg"
        fill="none"
        style="stroke-width: 0.8em"
        stroke="url(#grad-blue)"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="circle"
        stroke-dasharray="50, 100"
        stroke="url(#grad-pink)"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <svg viewBox="0 0 60 60" class="circular-chart circular-chart--2">
      <path
        class="circle circle-bg"
        fill="none"
        style="stroke-width: 0.8em"
        stroke="url(#grad-blue)"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <svg viewBox="0 0 60 60" class="circular-chart circular-chart--3 circular-chart-third">
      <path
        class="circle circle-bg"
        stroke-dasharray="60, 100"
        fill="none"
        style="stroke-width: 0.8em"
        stroke="url(#grad-blue)"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <div class="triangle"></div>
    <div class="red-blue"></div>
  </figure>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.baidu-cloud {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 7.5em;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .circular-chart {
    transform: rotate(90deg) scale(0.5);
    overflow: visible;
    position: absolute;

    &--1 {
      transform: rotate(90deg) scale(0.5) translate(-4em, 0em);
      z-index: 2;
    }

    &--2 {
      transform: rotate(90deg) scale(0.5) translate(7em, 12em);
    }

    &-third {
      transform: scale(0.5) translate(12em, 7em) rotate(0deg);
    }
  }

  .circle {
    font-size: 10px;
    fill: none;
    stroke-width: 0.8em;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
    overflow: auto;
    transform: translate(10px, 10px);
  }

  .triangle {
    width: 5em;
    height: 4.8em;
    position: absolute;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    background: #25adf3;
    transform: translate(1em, 3.6em);
  }

  .red-blue {
    width: 10em;
    height: 2em;
    border-radius: 2em;
    position: absolute;
    background: linear-gradient(
      to right,
      rgb(255 71 109) 0%,
      rgb(255 71 109) 50%,
      rgb(30 141 255) 50%,
      rgb(30 141 255)
    );
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
