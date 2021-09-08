<template>
  <div>
    <component :is="componentMap[componentId]"></component>
    <logo :name="componentId" @click="go()"></logo>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
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
// const toTop = require('@/omponents/ToTop.vue')

export default defineComponent({
  name: 'Detail',
  components: {
    House,
    Magnifier,
    Cloud,
    Wallet,
    Breeno,
    Browser,
    Camera,
    Logo
  },
  setup(props) {
    const route: any = useRoute()
    const router: any = useRouter()
    const state = reactive<any>({
      id: 0,
      userParams: {
        mid: 0,
        jsonp: 'jsonp'
      },
      componentMap: {
        doc: 'Magnifier',
        ppt: 'Browser',
        xls: 'Camera'
      }
    })

    const componentId = ref(route.params.type)

    onBeforeRouteUpdate((to: any) => {
      state.id = route.params?.id ?? 0
      state.userParams.mid = route.params?.id ?? 0
      console.log(route.params.type)
      let type: string = to.params.type
      componentId.value = type
      getUserInfo(state.userParams).then((res: any) => {
        console.log(res)
      })
    })

    const go: Function = () => {
      router.push({ name: 'Detail', params: { id: '12333', type: 'doc' } })
    }

    return { ...state, componentId, go }
  }
})
</script>

<style lang="scss" scoped></style>
