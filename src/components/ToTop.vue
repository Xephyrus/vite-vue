<template>
  <div v-show="showTop" class="to-top" @click="toTop()">
    <div class="rocket"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from '@vue/runtime-core'
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
@keyframes rocket {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: -150px 0;
  }
  50% {
    background-position: -300px 0;
  }
  75% {
    background-position: -450px 0;
  }
  100% {
    background-position: -600px 0;
  }
}
.to-top {
  position: fixed;
  left: 50%;
  margin-left: 510px;
  margin-bottom: 20px;
  bottom: 0;
  cursor: url('@/assets/images/red-rocket.png'), pointer;
  .rocket {
    width: 150px;
    height: 174px;
    background-position: 0 0;
    text-align: center;
    background-image: url(//s1.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/rocket_top.bcc748c3.png);

    &:hover {
      background-image: url(//s1.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/rocket_frame.f7563b84.png);
      animation: rocket steps(1, start) 0.5s infinite;
    }
  }
}
</style>
