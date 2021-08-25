<template>
  <div class="radar"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@keyframes scanning {
  to {
    transform: rotate(360deg);
  }
}
.radar {
  font-size: 30px;
  width: calc(8em + 1.5em);
  height: calc(8em + 1.5em);
  background: linear-gradient(
      90deg,
      transparent 49.75%,
      darkgreen 49.75%,
      darkgreen 50.25%,
      transparent 50.25%
    ),
    linear-gradient(transparent 49.75%, darkgreen 49.75%, darkgreen 50.25%, transparent 50.25%),
    repeating-radial-gradient(transparent 0, transparent 0.95em, darkgreen 0.95em, darkgreen 1em),
    linear-gradient(black, black);
  position: relative;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    width: calc(8em / 2);
    height: calc(8em / 2);
    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, rgba(0, 192, 0, 1)) 100%;
    border-radius: 100% 0 0 0;
    top: calc(1.5em / 2);
    left: calc(1.5em / 2);
    animation: scanning 5s linear infinite;
    transform-origin: 100% 100%;
  }
}
</style>
