<template>
  <div>
    <component :is="state.componentMap[componentId]"></component>
    <logo :name="componentId"></logo>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Detail'
})
</script>

<script lang="ts" setup>
import { defineComponent, ref, reactive, onMounted, markRaw } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
import { getUserInfo } from '@/api/bilibili'
import Breeno from '@/components/div/Breeno.vue'
import Browser from '@/components/div/Browser.vue'
import Camera from '@/components/div/Camera.vue'
import Cloud from '@/components/div/Cloud.vue'
import House from '@/components/div/House.vue'
import Wallet from '@/components/div/Wallet.vue'
import Magnifier from '@/components/Magnifier.vue'
import Logo from '@/components/div/Logo.vue'

const route: any = useRoute()
const router: any = useRouter()
const state = reactive<any>({
  id: 0,
  userParams: {
    mid: 0,
    jsonp: 'jsonp'
  },
  componentMap: {
    doc: markRaw(Magnifier),
    ppt: markRaw(Browser),
    xls: markRaw(Camera)
  }
})

const componentId = ref(route.params.type)

onBeforeRouteUpdate((to: any) => {
  state.id = route.params?.id ?? 0
  state.userParams.mid = route.params?.id ?? 0
  // console.log(route.params.type)
  let type: string = to.params.type
  componentId.value = type
  getUserInfo(state.userParams).then((res: any) => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped></style>
