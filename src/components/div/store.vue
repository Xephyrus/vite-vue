<template>
  <figure class="store">
    <div class="layer layer--1"></div>
    <div class="layer layer--2"></div>
    <div class="layer layer--3"></div>
    <div class="layer layer--4"></div>
  </figure>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.store {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 7.5em;
  background: linear-gradient(135deg, #00f47e, #00d3e4);
  position: relative;

  .layer {
    width: 0;
    height: 0;
    border: 3.6em solid #fff;

    &--1 {
      border-radius: 50% 50% 0 50%;
      position: absolute;
      right: 50%;
      bottom: 50%;
      margin-right: 1.6em;
      margin-bottom: 1.6em;
    }

    &--2 {
      border-radius: 50% 50% 50% 0;
      position: absolute;
      left: 50%;
      bottom: 50%;
      margin-left: 1.6em;
      margin-bottom: 1.6em;
      border-color: #caf8f3;
    }

    &--3 {
      border-radius: 50% 0 50% 50%;
      position: absolute;
      right: 50%;
      top: 50%;
      margin-right: 1.6em;
      margin-top: 1.6em;
      border-color: #caf8f3;
    }

    &--4 {
      border-radius: 0 50% 50% 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: 1.6em;
      margin-top: 1.6em;
    }
  }
}
</style>
