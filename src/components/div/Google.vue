<template>
  <div class="logo">
    <figure class="google"></figure>
  </div>
</template>

<style lang="scss" scoped>
$red: #ea4355;
$yellow: #fbb605;
$blue: #4285f4;
$green: #34a853;
$dark: #262626;

.logo {
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #fff;

  .google {
    font-size: 10px;
    width: 13em;
    height: 13em;
    position: relative;
    border-radius: 50%;
    border-top: 5em solid $red;
    border-bottom: 5em solid $green;
    border-left: 5em solid $yellow;
    border-right: 5em solid $blue;

    &::before {
      content: '';
      position: absolute;
      top: -15.5em;
      right: -15.5em;
      border-top: 10em solid transparent;
      border-right: 10em solid #fff;
      border-bottom: 10em solid transparent;
      border-left: 10em solid transparent;
      transform: rotate(90deg);
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -5em;
      height: 4.5em;
      width: 11.5em;
      background-color: $blue;
      transform: translate(-0.5em, -2em);
    }
  }
}
</style>
