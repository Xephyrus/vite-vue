<template>
  <div class="drops">
    <div class="drop"></div>
  </div>
</template>

<style lang="scss" scoped>
.drops {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  height: 20em;
  background-color: #edeeed;

  .drop {
    width: 10em;
    height: 10em;
    position: relative;
    background-color: transparent;
    border-radius: 35% 65% 69% 31% / 53% 53% 47% 47%;
    box-shadow: inset 10px 10px 10px rgba($color: #000000, $alpha: 0.05),
      15px 25px 10px rgba($color: #000000, $alpha: 0.1),
      15px 20px 20px rgba($color: #000000, $alpha: 0.05),
      inset -10px -10px 15px rgba($color: #ffffff, $alpha: 0.9);

    &::after {
      content: '';
      position: absolute;
      display: block;
      top: 1.6667em;
      left: 4.3333em;
      background-color: #fff;
      width: 0.6667em;
      height: 0.6667em;
      border-radius: 34% 66% 52% 48% / 52% 55% 45% 48%;
    }

    &::before {
      content: '';
      position: absolute;
      display: block;
      top: 1.6667em;
      left: 2.3333em;
      background-color: #fff;
      width: 1.3333em;
      height: 1.3333em;
      border-radius: 34% 66% 52% 48% / 52% 55% 45% 48%;
    }
  }
}
</style>
