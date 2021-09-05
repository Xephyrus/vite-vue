<template>
  <figure class="album">
    <span
      v-for="(item, i) in list"
      :key="i"
      :style="{ '--i': 45 * i + 'deg', '--c': item.color }"
    ></span>
  </figure>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  props:{
    size: {
      type: [String, Number],
      default: 10
    }
  },
  setup(props: any) {
    const list = ref<any[]>([
      {
        color: 'rgba(243, 156, 18, .7)'
      },
      {
        color: 'rgba(241, 196, 15, .7)'
      },
      {
        color: 'rgba(46, 204, 113, .7)'
      },
      {
        color: 'rgba(27, 188, 155, .7)'
      },
      {
        color: 'rgba(65, 131, 215, .7)'
      },
      {
        color: 'rgba(102, 51, 153, .7)'
      },
      {
        color: 'rgba(155, 89, 180, .7)'
      },
      {
        color: 'rgba(242, 38, 19, .7)'
      }
    ])
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(var(--i));
  }
}

.album {
  font-size: 22.66667px;
  width: 15em;
  height: 15em;
  background-color: #eee;
  border-radius: 25%;
  padding: 1em;
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  span {
    position: absolute;
    width: 22.5%;
    height: 37.5%;
    border-radius: 50% / 30%;
    transform-origin: 50% 105%;
    transform: rotate(var(--i));
    background-color: var(--c);
    mix-blend-mode: multiply;
    top: 1.6em;
  }

  &:hover span {
    animation: rotating 2s ease-in-out forwards;
  }
}
</style>
