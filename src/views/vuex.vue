<template>
  <div class="vuex">
    <comment-box></comment-box>
    <ex-date-picker :options="calendarArr"></ex-date-picker>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import CommentBox from '@/components/CommentBox.vue'
import ExDatePicker from '@/components/ExDatePicker/index.vue'
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

    return { ...state }
  }
})
</script>

<style lang="scss" scoped></style>
