<template>
  <div>详情页</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUserInfo } from '@/api/bilibili'

export default defineComponent({
  name: 'Detail',
  setup(props) {
    const route: any = useRoute()
    const router: any = useRouter()
    const state = reactive<any>({
      id: 0,
      userParams: {
        mid: 0,
        jsonp: 'jsonp'
      }
    })

    onMounted(() => {
      state.id = route.params?.id ?? 0
      state.userParams.mid = route.params?.id ?? 0
      console.log(state.id)
      console.log(route.params)
      console.log(route.path)
      getUserInfo(state.userParams).then((res: any) => {
        console.log(res)
      })
    })
  }
})
</script>

<style></style>
