<template>
  <div class="ex-calendar">
    <calendar-header
      :headOptions="headOptions"
      @monthChange="handleMonthChange"
      @handleToday="handleToday"
    />
    <ul class="calendar-week">
      <li
        v-for="(item, index) in calendarTitleArr"
        :key="index"
        class="week-item"
        :class="{ weekend: [0, 6].includes(index) }"
      >
        {{ item }}
      </li>
    </ul>
    <ul class="calendar-view">
      <li
        v-for="(item, index) in visibleCalendar"
        :key="index"
        class="date-view"
        :class="[
          { 'other-month': !isCurrentMonth(item.date) },
          { 'date-view-today': isCurrentDay(item.date, index) },
          { 'date-view-active': item.clickDay }
        ]"
        @click="isCurrentMonth(item.date) && handleClickDay(index)"
      >
        <span
          class="date-day"
          :style="dayStyle"
          :class="[{ 'opacity-class': !isCurrentMonth(item.date) }]"
        >
          {{ item.day }}
        </span>
        <span class="lunar-date">
          {{ item.lunarDayCn === '初一' ? item.lunarMonthCn : item.lunarDayCn }}
          {{ item.solarTerm }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import CalendarHeader from './calendar-header.vue'
import { getNewDate, getDate, englishMonth, formatDate } from '../../utils/calendar'
import lunarDate from '../../utils/lunar-calendar'
import { ref, defineComponent, reactive, computed, onBeforeMount } from 'vue'
export default defineComponent({
  name: 'Calendar',
  components: {
    CalendarHeader
  },
  props: {
    options: {
      type: Object,
      default: {
        viewStyle: {}
      }
    }
  },
  emits: ['handleToday', 'onMonthChange', 'handleClickDay'],
  setup(props, context) {
    const { emit } = context
    let { year, month, day } = getNewDate(new Date())
    let { options } = props
    const state: any = reactive({
      headOptions: {
        type: options.type,
        style: options.headStyle,
        date: Date.now().toString()
      },
      calendarTitleArr: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      time: { year, month, day },
      calendarList: [],
      curIndex: -1,
      todayIndex: -1
    })

    // 是否是当前月
    const isCurrentMonth = (date: Date) => {
      let { year: currentYear, month: currentMonth } = getNewDate(
        getDate(state.time.year, state.time.month, 1)
      )
      let { year, month } = getNewDate(date)
      return currentYear === year && currentMonth === month
    }

    // 是否是今天
    const isCurrentDay = (date: Date, index: number) => {
      let { year: currentYear, month: currentMonth, day: currentDay } = getNewDate(new Date())
      let { year, month, day } = getNewDate(date)
      let isToday: boolean = currentYear === year && currentMonth === month && currentDay === day
      isToday && index && (state.todayIndex = index)
      return isToday
    }

    // 某一天的样式
    const dayStyle = computed(() => ({
      textAlign: options.viewStyle.day
    }))

    const initIndex = () => {
      let { year, month, day } = getNewDate(getDate(state.time.year, state.time.month, 1))
      let currentFirstDay: any = getDate(year, month, 1)
      let back: number = currentFirstDay.getDay() - 1
      let weekDay = currentFirstDay.getDay()
      let startTime = currentFirstDay - weekDay * 24 * 60 * 60 * 100
      let monthDayNum: number = [5, 6].includes(weekDay) ? 42 : 35
      for (let i = 0; i < monthDayNum; i++) {
        if (isCurrentDay(new Date(startTime + i * 24 * 60 * 60 * 1000), i)) {
          console.log(i)
          state.curIndex = i + back
          return
        }
      }
      state.curIndex = -1
    }

    const visibleCalendar = computed(() => {
      let calendatArr = []
      let { year, month, day } = getNewDate(getDate(state.time.year, state.time.month, 1))
      let currentFirstDay: any = getDate(year, month, 1)
      // 获取当前月第一天星期几
      let weekDay = currentFirstDay.getDay()
      let startTime = currentFirstDay - weekDay * 24 * 60 * 60 * 1000
      let monthDayNum: number = [5, 6].includes(weekDay) ? 42 : 35
      for (let i = 0; i < monthDayNum; i++) {
        calendatArr.push({
          date: new Date(startTime + i * 24 * 60 * 60 * 1000),
          year,
          month: month + 1,
          day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate(),
          ...lunarDate(startTime + i * 24 * 60 * 60 * 1000),
          clickDay: i === state.curIndex
        })
      }

      if (state.curIndex < 0) {
        let res: any = calendatArr.find((item) => isCurrentMonth(item.date))
        res.clickDay = true
      }
      state.headOptions.date = `${englishMonth(month)} ${year}`
      return calendatArr
    })

    // 点击上个月, 下个月
    const handleMonthChange = (num: number) => {
      let nextMonth = getDate(state.time.year, state.time.month, 1)
      nextMonth.setMonth(nextMonth.getMonth() + num)
      state.time = getNewDate(nextMonth)
      state.headOptions.date = `${englishMonth(state.time.month)} ${state.time.year}`
      initIndex()
      emit('onMonthChange')
    }

    // 回到今天
    const handleToday = () => {
      state.time = getNewDate(new Date())
      state.curIndex = state.todayIndex
      emit('handleToday')
    }

    // 点击某一天
    const handleClickDay = (index: number) => {
      state.curIndex = index
    }

    onBeforeMount(() => {
      initIndex()
      state.calendarList = visibleCalendar
      state.calendarType = options.calendarType
      // handleToday()
    })

    return {
      ...state,
      isCurrentMonth,
      isCurrentDay,
      handleMonthChange,
      handleToday,
      handleClickDay,
      initIndex,
      dayStyle,
      visibleCalendar
    }
  }
})
</script>

<style lang="scss" scoped>
.ex-calendar {
  padding: 23px 30px 30px;
  width: 100%;
  height: 100%;
  background: #f9fafc;
  box-sizing: border-box;
  .calendar-week {
    display: flex;
    width: 100%;
    height: 46px;
    line-height: 46px;
    border: 1px solid #e4e7ea;
    border-right: none;
    .week-item {
      width: 14.285%;
      text-align: center;
      font-size: 14px;
      color: #424953;
      border-right: 1px solid #e4e7ea;
      font-weight: 600;

      &.weekend {
        color: #2061ff;
      }
    }
  }
  .calendar-view {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-left: 1px solid #e4e7ea;
    .date-view {
      width: 14.285%;
      height: 80px;
      border-right: 1px solid #e4e7ea;
      border-bottom: 1px solid #e4e7ea;
      box-sizing: border-box;
      cursor: pointer;
      .date-day {
        padding: 8px 8px 0;
        display: block;
        font-size: 14px;
        color: #7f8794;
      }
      .lunar-date {
        margin-top: 6px;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #424953;
      }
      &-today {
        .date-day {
          color: #2061ff;
        }
        .lunar-date {
          color: #2061ff;
        }
      }
      &-active {
        background: #2061ff;
        .date-day {
          color: #bccfff;
        }
        .lunar-date {
          color: #fff;
        }
      }
    }
    .opacity-class {
      opacity: 0.5;
    }
    .other-month {
      cursor: not-allowed;
      user-select: none;
      background-image: linear-gradient(
        45deg,
        rgba(000, 000, 000, 0.03) 25%,
        transparent 25%,
        transparent 50%,
        rgba(000, 000, 000, 0.03) 50%,
        rgba(000, 000, 000, 0.03) 75%,
        transparent 75%,
        transparent
      );
      background-size: 20px 20px;
    }
  }
}
</style>
