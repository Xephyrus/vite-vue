<template>
  <div class="axios">
    <main>
      <ul class="search-list">
        <li v-for="(url, index) in list" :key="index" class="search-list-item">
          <img :src="url" class="width-200" alt="" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { stat } from 'fs'
import { defineComponent, onMounted, reactive, computed } from 'vue'
import { getSearchList, getOnlineList, getSearchDefault } from '../api/bilibili'

export default defineComponent({
  name: 'Axios',
  setup(props) {
    const state = reactive<any>({
      result: []
    })
    const list = computed<any[]>(() => state.result)

    onMounted(() => {
      const [list, online, defaults]: any[] = [
        getSearchList({ keyword: '高达', search_type: 'video' }),
        getOnlineList(),
        getSearchDefault()
      ]
      Promise.all([list, online, defaults]).then((res: any[]) => {
        const [a, b, c] = res
        console.log(a.data.data)
        /*Vue只能使用如下数组方法，才能响应式更新视图：
          (push
          pop
          shift
          unshift
          splice
          sort
          reverse)
        */
        state.result = a.data.data.result.map((item: any) => item.pic) // 直接赋值不会触发
        console.log(state.result)
        const img = new Image()
        img.src = 'https://img-bss.csdn.net/1629341824095.png'
        img.onload = () => {
          let { width, height } = img
          let ratio = width / height
          img.dataset.ratio = ratio.toString()
          console.log(img)
        }
      })
    })

    return { ...state, list }
  }
})
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
.axios {
  main {
    .search-list {

    }
  }
}
</style>
