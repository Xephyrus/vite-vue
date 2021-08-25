<template>
  <div class="home">
    <process-bar :config="config1"></process-bar>
    <process-bar ref="abnormal" :config="config"></process-bar>
    <el-input v-model="params.ref"></el-input>
    <el-button @click="showLoading">loading</el-button>
    <el-button @click="addTen" type="primary">+10</el-button>
    <div class="bg-dark flex-between mb-20">
      <radar></radar>
      <google></google>
    </div>
    <div class="bg-dark flex-between mb-20">
      <jue-jin></jue-jin>
      <!-- <drops></drops> -->
      <dashboard></dashboard>
    </div>
    <div class="bg-white">
      <cube></cube>
    </div>
    <div class="bg-white">
      <masonry></masonry>
    </div>
    <div class="bg-light">
      <skeleton></skeleton>
    </div>
    <div class="bg-dark flex-between mb-20">
      <safari></safari>
      <album></album>
    </div>
    <div class="bg-dark flex-between mb-20" style="padding-top: 200px">
      <saturn style="margin-top: -100px"></saturn>
      <cards></cards>
    </div>
    <div class="bg-dark">
      <clock></clock>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref, onBeforeUnmount } from 'vue'
import ProcessBar from '@/components/svg/process-bar.vue'
import Clock from '@/components/div/Clock.vue'
import Bus from '../utils/bus'
import Safari from '../components/div/Safari.vue'
import Album from '../components/div/Album.vue'
import Saturn from '../components/div/Saturn.vue'
import Cards from '../components/div/Cards.vue'
import Skeleton from '../components/div/Skeleton.vue'
import Masonry from '../components/div/Masonry.vue'
import Cube from '../components/div/Cube.vue'
import JueJin from '../components/div/JueJin.vue'
import Drops from '../components/div/Drops.vue'
import Dashboard from '../components/Dashboard.vue'
import Radar from '../components/div/Radar.vue'
import Google from '../components/div/Google.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProcessBar,
    Clock,
    Safari,
    Album,
    Saturn,
    Cards,
    Skeleton,
    Masonry,
    Cube,
    JueJin,
    Drops,
    Dashboard,
    Radar,
    Google
  },
  setup(props) {
    const abnormal: any = ref(null)
    const refData = reactive({
      config: {
        title: '问题数据',
        labelColor: '#f00',
        percentage: 25,
        textColor: '#f25268',
        gradient: ['#ff0', '#f00'],
        gradientId: 'g1'
      },
      config1: {
        title: '健康数据',
        labelColor: '#31a601',
        percentage: 75,
        textColor: '#3fb524',
        gradient: ['#9af504', '#45d898'],
        gradientId: 'g2'
      },
      params: {
        ref: 3
      }
    })

    const addTen = () => {
      refData.config.percentage += 10
      if (refData.config.percentage > 100) {
        refData.config.percentage = 100
      }
      let value: any = abnormal.value
      value.initCircle()
    }

    const showLoading = () => {
      Bus.$emit('loading')
      setTimeout(() => {
        Bus.$emit('loading')
      }, refData.params.ref * 1000)
    }

    // onBeforeUnmount(() => {
    //   Bus.$off('loading')
    // })

    return {
      ...refData,
      abnormal,
      addTen,
      showLoading
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
</style>
