<!--
 * @Author: your name
 * @Date: 2021-08-09 22:58:45
 * @LastEditTime: 2021-10-19 10:05:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \prismd:\code\vite-vue\src\App.vue
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HeaderNav />
  <router-view class="router-view"></router-view>
  <Loader v-if="loading" />
  <ClickBoard></ClickBoard>
  <to-top />
</template>

<script lang="ts">
export default defineComponent({
  name: 'App'
})
</script>

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import Loader from './components/Loader.vue'
import ToTop from './components/ToTop.vue'
import Bus from './utils/bus'
import ClickBoard from './components/ClickBoard.vue'

const loading = ref(false)

onMounted(() => {
  Bus.$on('loading', () => {
    console.log(loading.value)
    loading.value = !loading.value
    console.log(loading.value)
  })
})
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #f4f5f5;

  .router-view {
    width: 980px;
    margin: 0 auto;
    background-color: #fff;
  }
}
</style>
