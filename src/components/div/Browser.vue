<template>
  <figure class="browser"></figure>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.browser {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 25%;
  background: #3179ff;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 22em;
    height: 11em;
    border-radius: 0 0 11em 11em;
    background: rgba($color: #e6eeff, $alpha: .45);
    top: 50%;
    left: 50%;
    transform: rotate(-45deg);
    margin-left: -11em;
    transform-origin: 50% 0;
    z-index: 2;
  }

  &::after {
    position: absolute;
    content: '';
    width: 16em;
    height: 16em;
    background: #fff;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}
</style>
