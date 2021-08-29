<template>
  <figure class="camera"></figure>
</template>

<style lang="scss" scoped>
@mixin center($size, $bgColor, $zIndex) {
  position: absolute;
  content: '';
  width: $size;
  height: $size;
  background: $bgColor;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: $zIndex;
}

.camera {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 25%;
  background: rgb(187 190 197);
  position: relative;

  &::before {
    @include center(18em, #252628, 1);
  }

  &::after {
    @include center(3.2em, #3ad9f7, 2);
  }
}
</style>
