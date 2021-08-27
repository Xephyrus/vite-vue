<template>
  <figure class="juejin">
    <div class="diamond"></div>
  </figure>
</template>

<style lang="scss" scoped>
$theme: #1e80ff;

.juejin {
  font-size: 20px;
  width: 15em;
  background-color: $theme;
  height: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25%;
  transition: 0.3s all;

  &:hover {
    // background-color: lighten($color: $theme, $amount: 10%);
    background-color: white;
    transition: 0.3s all;

    .diamond {
      background-color: $theme;
      &::after,
      &::before {
        // background-color: lighten($color: $theme, $amount: 10%);
        background-color: white;
      }
    }
  }

  .diamond {
    width: 10em;
    height: 8em;
    background: white;
    text-align: center;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    position: relative;
    border: none;
    z-index: 1;

    &::before,
    &::after {
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      background: $theme;
      position: absolute;
      left: 0;
      top: -1.6em;
      z-index: 2;
      clip-path: polygon(0 30%, 50% 80%, 100% 30%, 100% 50%, 50% 100%, 0 50%);
    }

    &::after {
      top: -4.8em;
    }
  }
}
</style>
