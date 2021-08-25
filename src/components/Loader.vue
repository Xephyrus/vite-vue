<template>
  <div class="loader-wrap">
    <div class="loader-wrap-box">
      <div class="loader">
        <span v-for="i in 20" :key="i" :style="{ '--i': i }"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes animateBg {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@keyframes animate {
  0% {
    transform: scale(1);
  }
  80%,
  100% {
    transform: scale(0);
  }
}
.loader-wrap {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 12;
  left: 0;
  top: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  animation: animateBg 10s linear infinite;
  &-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .loader {
      width: 120px;
      height: 120px;
      position: relative;

      span {
        --i: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc(18deg * var(--i)));

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #00ff0a;
          box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a, 0 0 60px #00ff0a,
            0 0 80px #00ff0a, 0 0 100px #00ff0a;
          animation: animate 2s linear infinite;
          animation-delay: calc(0.1s * var(--i));
        }
      }
    }
  }
}
</style>
