<!--
 * @Author: your name
 * @Date: 2021-08-27 13:15:27
 * @LastEditTime: 2021-10-08 11:58:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \prismd:\code\vite-vue\src\views\demo.vue
-->
<template>
  <div class="demo">
    <thundery></thundery>
    <div class="bg-dark flex-between mb-20">
      <wallet style="font-size: 12px"></wallet>
      <cloud style="font-size: 12px"></cloud>
      <breeno style="font-size: 4px"></breeno>
      <browser style="font-size: 4px"></browser>
      <camera style="font-size: 4px"></camera>
      <pics size="4"></pics>
      <chrome size="4"></chrome>
    </div>
    <div class="bg-dark flex-between mb-20">
      <jue-jin style="font-size: 8px"></jue-jin>
      <store style="font-size: 4px"></store>
      <weather style="font-size: 4px"></weather>
      <react style="font-size: 4px"></react>
      <vue style="font-size: 4px"></vue>
      <angular style="font-size: 4px"></angular>
      <baidu-cloud style="font-size: 4px"></baidu-cloud>
      <baidu style="font-size: 4px"></baidu>
    </div>
    <div class="bg">
      <pixiel></pixiel>
    </div>
    <!-- <div class="bg-light flex-between">
      <triangle></triangle>
      <svg-triangle></svg-triangle>
    </div> -->
    <magnifier></magnifier>
  </div>
</template>

<script lang="ts" setup>
import Chrome from '@/components/div/Chrome.vue'
import Pics from '@/components/div/Pics.vue'
// import Triangle from '@/components/geometry/triangle.vue'
// import SvgTriangle from '@/components/svg/triangle.vue'
// import { ref } from 'vue'
import Breeno from '../components/div/Breeno.vue'
import Browser from '../components/div/Browser.vue'
import Camera from '../components/div/Camera.vue'
import Cloud from '../components/div/Cloud.vue'
import Wallet from '../components/div/Wallet.vue'
import Magnifier from '../components/Magnifier.vue'
import JueJin from '@/components/div/JueJin.vue'
import Store from '@/components/div/Store.vue'
import Weather from '@/components/div/Weather.vue'
import React from '@/components/div/React.vue'
import Vue from '@/components/div/Vue.vue'
import Angular from '@/components/div/Angular.vue'
import BaiduCloud from '@/components/div/BaiduCloud.vue'
import Baidu from '@/components/div/Baidu.vue'
import Pixiel from '@/components/Pixiel.vue'
import Thundery from '@/components/weather/thundery.vue'
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
.demo {
  // padding-top: 200px;
  padding-bottom: 200px;
  // padding-left: 100px;
  // padding-right: 100px;

  figure {
    margin-bottom: 20px;
  }

  .bg {
    padding: 30px;
  }
}
</style>
