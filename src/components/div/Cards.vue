<template>
  <div class="levels">
    <div v-for="(item, index) in cards" :key="index" :style="useStyle(item, index)" class="level">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const cards = ref<any[]>([
      { title: 'One', content: 'One Content', color: '#bd7be8', activate: '#8063e1' },
      { title: 'Two', content: 'Two Content', color: '#7f94fc', activate: '#3f58e3' },
      { title: 'Three', content: 'Three Content', color: '#21bbfe', activate: '#2c6fd1' },
      { title: 'Four', content: 'Four Content', color: '#415197', activate: '#352f64' }
    ])
    const useStyle = (item: any, index: number) =>
      ({
        '--color': item.color,
        '--activate': item.activate,
        zIndex: cards.value.length - index
      } as any)
    return {
      defineComponent,
      ref,
      cards,
      useStyle
    }
  }
})
</script>

<style lang="scss" scoped>
$fontColor: #ffc0cb;
$levelShadow: #22325480;

.levels {
  transform-style: preserve-3d;
  user-select: none;

  .level {
    width: 280px;
    height: 140px;
    border-radius: 12px;
    color: $fontColor;
    cursor: pointer;
    transition: all 0.4s ease;
    transform: rotateX(45deg) rotateY(-15deg) rotate(45deg);
    opacity: 0.9;
    margin-top: -70px;
    background: linear-gradient(135deg, var(--color), var(--activate));
    box-shadow: 20px 20px 60px $levelShadow, 1px 1px 0px 1px var(--activate);

    .title {
      position: absolute;
      top: 28px;
      left: 15px;
      font-size: 26px;
      font-weight: bold;
    }

    .content {
      position: absolute;
      font-weight: 700;
      bottom: 15px;
      left: 15px;
      font-size: 16px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      background: linear-gradient(
        60deg,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0) 80%
      );
    }

    &:hover {
      transform: rotateX(30deg) rotateY(-15deg) rotate(30deg) translate(-25px, 50px);
      opacity: 0.6;

      &::after {
        transform: translateX(100%);
        transition: all 1.2s ease-in-out;
      }
    }
  }
}
</style>
