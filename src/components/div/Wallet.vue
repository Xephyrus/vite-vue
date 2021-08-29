<template>
  <figure class="wallet">
    <div
      v-for="item in cards"
      :key="item.index"
      :style="{ zIndex: item.index, background: item.color, '--i': cards.length - item.index - 1 }"
      class="card"
    ></div>
  </figure>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Wallet',
  setup(props) {
    const cards = ref<any[]>([
      {
        index: 0,
        color: '#fe6b0c'
      },
      {
        index: 1,
        color: '#ffdf04'
      },
      {
        index: 2,
        color: '#4578f8'
      }
    ])

    return { cards }
  }
}
</script>

<style lang="scss" scoped>
.wallet {
  font-size: 30px;
  width: 10em;
  height: 10em;
  border-radius: 2.5em;
  background: rgb(236 236 236);
  position: relative;

  .card {
    width: calc(20em / 3);
    height: 4em;
    position: absolute;
    left: 50%;
    bottom: calc(5em / 3 + var(--i) * 4em / 3);
    margin-left: calc(-10em / 3);
    border-radius: calc(2em / 3);
  }

  &::after {
    position: absolute;
    content: '';
    width: inherit;
    height: calc(5em / 3 + 2em);
    left: 0;
    bottom: 0;
    border-bottom-right-radius: 2.5em;
    border-bottom-left-radius: 2.5em;
    background-color: rgba($color: #ffffff, $alpha: 0.7);
    z-index: 4;
  }
}
</style>
