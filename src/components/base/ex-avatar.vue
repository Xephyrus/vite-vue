<!--
 * @Author: your name
 * @Date: 2021-10-16 20:41:01
 * @LastEditTime: 2021-10-16 21:02:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \prismd:\code\vite-vue\src\components\base\ex-avatar.vue
-->
<template>
  <div class="ex-avatar">
    <img :src="src" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  size: {
    type: [Number, String],
    default: 32
  },
  src: String
})

const imageSize = computed(() => {
  return props.size + 'px'
})
</script>

<style lang="scss" scoped>
.ex-avatar {
  border-radius: 50%;
  width: v-bind(imageSize);
  height: v-bind(imageSize);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
