<template>
  <div>
    <div ref="box" class="box"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const box = ref(null)
onMounted(() => {
  console.log(box)
})
</script>

<style lang="scss" scoped>
  
</style>