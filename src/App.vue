<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HeaderNav />
  <router-view class="router-view"></router-view>
  <Loader v-if="loading" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import Loader from './components/Loader.vue'
import Bus from './utils/bus'

export default defineComponent({
  name: 'App',
  components: {
    HeaderNav,
    Loader
  },
  setup() {
    const loading = ref(false)

    onMounted(() => {
      Bus.$on('loading', () => {
        console.log(loading.value)
        loading.value = !loading.value
        console.log(loading.value)
      })
    })
    return { loading }
  }
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
