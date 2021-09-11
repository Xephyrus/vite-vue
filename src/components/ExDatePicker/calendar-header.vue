<template>
  <div class="calendar-header clear">
    <div v-if="headOptions.type === 'combination'" class="calendar-box">
      <div class="calendar-content" :style="{ textAlign: headStyle.combination }">
        <span class="calendar-prev" @click="emit('monthChange', -1)"
          ><svg-icon name="prev"></svg-icon
        ></span>
        <span class="calendar-headDate" @click="emit('handleToday')">{{ headOptions.date }}</span>
        <span
          class="calendar-next"
          style="transform: rotateY(180deg)"
          @click="emit('monthChange', 1)"
          ><svg-icon name="prev"></svg-icon
        ></span>
      </div>
    </div>
    <div v-else class="calendar-box">
      <span class="calendar-headDate"> {{ headOptions.date }} </span>
      <span
        class="calendar-today dispersion-today"
        :style="{ float: headStyle.todayBtn }"
        @click="emit('handleToday')"
      >
        今天
      </span>
      <div class="calendar-content dispersion" :style="{ float: headStyle.checkBtn }">
        <span class="calendar-prev" @click="emit('monthChange', -1)"
          ><svg-icon name="prev"></svg-icon
        ></span>
        <span
          class="calendar-next"
          style="transform: rotateY(180deg)"
          @click="emit('monthChange', 1)"
          ><svg-icon name="prev"></svg-icon
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CalendarHeader'
})
</script>

<script lang="ts" setup>
import SvgIcon from '../SvgIcon.vue'
import { ref, defineComponent } from 'vue'

const props = defineProps({
  headOptions: {
    type: Object,
    default: {
      style: {}
    }
  }
})
const emit = defineEmits(['monthChange', 'handleToday'])
let { style } = props.headOptions
const headStyle = ref(style)
</script>

<style lang="scss" scoped>
.calendar-header {
  margin-bottom: 23px;
  width: 100%;
  .calendar-box {
    position: relative;
    height: 32px;
    line-height: 32px;
    .calendar-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .calendar-prev,
      .calendar-next {
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
      }
      .calendar-next {
        margin-right: 150px;
      }
      .calendar-prev {
        margin-left: 150px;
      }
    }
    .dispersion {
      width: initial;
      display: inline;
    }
    .calendar-headDate {
      vertical-align: middle;
      margin: 0 12px;
      font-size: 18px;
      color: #424953;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .calendar-today {
      position: absolute;
      top: 0;
      right: 0;
      width: 80px;
      height: 30px;
      text-align: center;
      border: 1px solid #2061ff;
      border-radius: 4px;
      font-size: 14px;
      color: #2061ff;
      cursor: pointer;
    }
    .dispersion-today {
      position: inherit;
    }
    .calendar-center {
      margin: 0 auto;
    }
    .calendar-left {
      float: left;
    }
    .calendar-right {
      float: right;
    }
  }
}
</style>
