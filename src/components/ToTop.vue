<template>
  <div v-show="showTop" class="to-top" @click="toTop()">
    <astronaut></astronaut>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from '@vue/runtime-core'
import Astronaut from './Astronaut.vue'
import { toTop } from '@/utils/tools'

const showTop = ref(window.scrollY > 20)
const onScroll = () => {
  showTop.value = window.scrollY > 20
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.to-top {
  position: fixed;
  left: 50%;
  margin-left: 510px;
  margin-bottom: 20px;
  bottom: 0;
  cursor: pointer;
}
</style>
