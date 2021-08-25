<template>
  <div class="axios">这是axios</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { getSearchList, getOnlineList, getSearchDefault } from '../api/bilibili'

export default defineComponent({
  name: 'Axios',
  setup(props) {
    const state = reactive<any>({
      result: []
    })
    onMounted(() => {
      const [list, online, defaults]: any[] = [
        getSearchList({ keyword: '高达', search_type: 'video' }),
        getOnlineList(),
        getSearchDefault()
      ]
      Promise.all([list, online, defaults]).then((res: any[]) => {
        const [a, b, c] = res
        console.log(a.data.data)
        state.result = a.data.data.result.map((item: any) => item.pic)
        let arr: any[] = []
        state.result.forEach((url: string) => {
          console.log(url)
        })
        const img = new Image()
        img.src = 'https://img-bss.csdn.net/1629341824095.png'
        img.onload = () => {
          let { width, height } = img
          let ratio = width / height
          img.dataset.ratio = ratio.toString()
          console.log(img)
        }
        // console.log(state.result)
        // console.log(b.data.data)
        // console.log(c.data.data)
      })
    })

    return { ...state }
  }
})
</script>

<style></style>
