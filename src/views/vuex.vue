<template>
  <div class="vuex">
    <comment-box></comment-box>
    <ex-date-picker :options="calendarArr"></ex-date-picker>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import CommentBox from '@/components/CommentBox.vue'
import ExDatePicker from '@/components/ExDatePicker/index.vue'
import { numberToChinese } from '@/utils/number'
export default defineComponent({
  name: 'Vuex',
  components: {
    CommentBox,
    ExDatePicker
  },
  setup(props) {
    const state = reactive({
      calendarArr: {
        type: '',
        headStyle: {
          todayBtn: 'right',
          combination: 'center',
          checkBtn: 'right'
        },
        viewStyle: {
          day: 'center'
        },
        calendarData: []
      }
    })

    onMounted(() => {
      console.log(numberToChinese(10530))
    })

    return { ...state }
  }
})
</script>

<style lang="scss" scoped></style>
