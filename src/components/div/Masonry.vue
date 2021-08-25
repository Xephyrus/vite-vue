<template>
  <div class="masonry">
    <div v-for="i in 15" :key="i" class="masonry-item">
      <img :src="`https://picsum.photos/360/480?random=${i}`" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.masonry {
  column-count: 4;
  column-gap: 0;

  &-item {
    padding: 2px;
    position: relative;
    counter-increment: item-counter;

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    &::after {
      position: absolute;
      display: block;
      top: 2px;
      left: 2px;
      width: 24px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      background-color: black;
      color: white;
      content: counter(item-counter);
    }
  }
}
</style>
