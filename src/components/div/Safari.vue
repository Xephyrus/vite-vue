<template>
  <figure class="safari">
    <div class="marks">
      <span v-for="i in 60" :key="i" :style="{ '--rotate-deg': i * 6 - 6 + 'deg' }"></span>
    </div>
    <div class="pointer"></div>
  </figure>
</template>

<style lang="scss" scoped>
@keyframes rotate {
  to {
    transform: rotate(50deg);
  }
}
.safari {
  font-size: 20px;
  width: 15em;
  height: 15em;
  background-color: snow;
  border-radius: 25%;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  .marks {
    width: inherit;
    height: inherit;
    background-image: linear-gradient(hsl(191, 98%, 55%), hsl(220, 88%, 53%));
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      position: absolute;
      width: 0.1em;
      height: var(--h);
      background-color: snow;
      transform: rotate(var(--rotate-deg)) translateY(var(--y));

      &:nth-child(odd) {
        --h: 0.9em;
        --y: 6em;
      }

      &:nth-child(even) {
        --h: 0.5em;
        --y: 6.2em;
      }
    }
  }

  .pointer {
    position: absolute;
    width: 1.4em;
    height: 12em;
    display: flex;
    flex-direction: column;
    transform: rotate(30deg);
    animation: rotate 1s ease-in-out infinite alternate;

    &::before,
    &::after {
      content: '';
      border-bottom: 6em solid var(--c);
      border-left: 0.7em solid transparent;
      border-right: 0.7em solid transparent;
    }

    &::before {
      --c: crimson;
    }

    &::after {
      --c: snow;
      transform: rotate(180deg);
    }
  }
}
</style>
