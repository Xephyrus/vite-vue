<template>
  <figure class="react">
    <div class="ellipse ellipse--1"></div>
    <div class="ellipse ellipse--2"></div>
    <div class="ellipse ellipse--3"></div>
    <div class="center"></div>
  </figure>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.react {
  font-size: 10px;
  width: 30em;
  height: 30em;
  border-radius: 7.5em;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .ellipse {
    width: 20em;
    height: 8em;
    position: absolute;
    border: 1em solid rgb(0 216 255);
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &--2 {
      transform: translate(-50%, -50%) rotate(60deg);
    }

    &--3 {
      transform: translate(-50%, -50%) rotate(120deg);
    }
  }

  .center {
    width: 4.2em;
    height: 4.2em;
    border-radius: 50%;
    background: rgb(0 216 255);
  }
}
</style>
