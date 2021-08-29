<template>
  <figure class="cloud">
    <div class="round"></div>
  </figure>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cloud {
  font-size: 30px;
  width: 10em;
  height: 10em;
  border-radius: 2.5em;
  //   background: rgb(49 121 255);
  background: linear-gradient(to bottom, #4c78d8, #4176e4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .round {
    width: 4.4em;
    height: 4.4em;
    background-color: #fff;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 2.2em;
      height: 2.2em;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      background-color: #fff;
      left: 0;
      bottom: 0;
      transform: translateX(-50%);
    }

    &::after {
      content: '';
      position: absolute;
      width: 2.2em;
      height: 2.2em;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      background-color: #fff;
      left: 100%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    width: calc(8em / 3);
    height: calc(1em / 3);
    border-radius: calc(1em / 6);
    background-color: rgb(164 194 249);
    left: 50%;
    top: 50%;
    margin-left: calc(-4em / 3);
  }

  &::after {
    margin-top: calc(2em / 3);
    width: 1.6em;
  }
}
</style>
