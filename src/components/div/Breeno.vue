<template>
  <figure class="breeno">
    <div class="circle"></div>
  </figure>
</template>

<style lang="scss" scoped>
.breeno {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbfbfa;
  position: relative;

  .circle {
    width: 22em;
    height: 22em;
    border-radius: 50%;
    background: linear-gradient(135deg, #4762b3, #522e7a);

    &::before {
      content: '';
      position: absolute;
      width: 18em;
      height: 7em;
      border-radius: 50% / 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: linear-gradient(45deg, rgb(251 208 252), rgb(206 138 220));
    }

    &::after {
      content: '';
      position: absolute;
      width: 18em;
      height: 12em;
      border-radius: 50% / 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-40deg);
      background: rgba($color: #ffffff, $alpha: 0.6);
    }
  }
}
</style>
