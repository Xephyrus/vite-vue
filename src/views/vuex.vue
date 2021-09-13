<template>
  <div class="vuex">
    <comment-box></comment-box>
    <ex-date-picker :options="state.calendarArr"></ex-date-picker>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Vuex'
})
</script>

<script lang="ts" setup>
import { defineComponent, reactive } from 'vue'
import CommentBox from '@/components/CommentBox.vue'
import ExDatePicker from '@/components/ExDatePicker/index.vue'

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
</script>

<style lang="scss" scoped></style>
