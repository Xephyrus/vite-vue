<template>
  <figure class="chrome">
    <div
      v-for="(item, index) in colors"
      :key="index"
      :style="{ '--deg': 120 * index + 'deg' }"
      class="circular"
    >
      <div class="wrap">
        <div class="third-round" :style="item"></div>
      </div>
      <div class="triangle" :style="item"></div>
    </div>
    <div class="center"></div>
  </figure>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    size: {
      type: [String, Number],
      default: 10
    }
  },
  setup(props) {
    const colors = ref([
      {
        background: '#ea4355',
        zIndex: 1
      },
      {
        background: '#fbb605',
        zIndex: 2
      },
      {
        background: '#34a853',
        zIndex: 3
      }
    ])

    return { colors, ...props }
  }
}
</script>

<style lang="scss" scoped>
$red: #ea4355;
$yellow: #fbb605;
$blue: #4285f4;
$green: #34a853;

@mixin boxShadow {
}

.chrome {
  font-size: calc(v-bind(size) * 1px);
  width: 30em;
  height: 30em;
  border-radius: 25%;
  background: white;
  position: relative;

  .circular {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(var(--deg));
    width: 22em;
    height: 22em;
    border-radius: 50%;
    overflow: hidden;

    .wrap {
      width: 22em;
      height: 5.5em;
      overflow: hidden;

      .third-round {
        width: 22em;
        height: 11em;
        border-radius: 11em 11em 0 0;
      }
    }
    .triangle {
      width: 9.527em;
      height: 9.527em;
      clip-path: polygon(50% 13.4%, 0% 100%, 100% 100%);
      background-color: $red;
      transform: rotate(180deg);
      right: 50%;
      position: absolute;
      margin-top: -1px;

      &::before {
        content: '';
        display: block;
        background: rgba($color: #000000, $alpha: 0.1);
        width: 9.527em;
        height: 9.527em;
        position: absolute;
        left: 0;
        top: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
      }
    }
  }

  .center {
    border-radius: 50%;
    border: 1em solid white;
    width: 9em;
    height: 9em;
    background: $blue;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
