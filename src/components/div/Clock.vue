<template>
  <div class="container">
    <div class="clock">
      <div class="outer-clock-face">
        <div v-for="i in 4" :key="i" class="marking"></div>
        <div class="inner-clock-face">
          <div
            v-for="item in timeArr"
            :key="item.name"
            :style="{ transform: `rotate(${item.degrees}deg)` }"
            :data-name="item.name"
            class="hand"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'Clock',
  setup() {
    const state: any = reactive({
      timeArr: [
        {
          name: 'hour',
          degrees: 90
        },
        {
          name: 'minute',
          degrees: 90
        },
        {
          name: 'second',
          degrees: 90
        }
      ],
      timer: null
    })

    const setData = () => {
      let now: any = new Date()
      let [hours, minutes, seconds] = ['getHours', 'getMinutes', 'getSeconds'].map((item) =>
        now[item]()
      )
      state.timeArr[0]['degrees'] = (hours / 12) * 360 + (minutes / 60) * 30 + 90
      state.timeArr[1]['degrees'] = (minutes / 60) * 360 + (seconds / 60) * 6 + 90
      state.timeArr[2]['degrees'] = (seconds / 60) * 360 + 90
    }

    onMounted(() => {
      setData()
      state.timer = setInterval(() => {
        setData()
      }, 1000)
    })

    onBeforeUnmount(() => {
      state.timer = null
    })

    return {
      ...state,
      setData
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin outFace($bgColor) {
  content: '';
  position: absolute;
  width: 5px;
  height: 100%;
  background: $bgColor;
  z-index: 0;
  left: 50%;
  transform-box: 50% 50%;
  margin-left: -2.5px;
}

@mixin rotate($deg) {
  -webkit-transform: rotate($deg);
  -moz-transform: rotate($deg);
  transform: rotate($deg);
}
.container {
  font-size: 10px;
  .clock {
    width: 30em;
    height: 30em;
    position: relative;
    padding: 2em;
    border: 7px solid #282828;
    box-shadow: -4px -4px 10px rgba(67, 67, 67, 0.5), inset 4px 4px 10px rgba(0, 0, 0, 0.5),
      inset -4px -4px 10px rgba(67, 67, 67, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    margin: 50px auto;

    .outer-clock-face {
      position: relative;
      background: #282828;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      &::after {
        @include outFace(#58e3dd);
        @include rotate(90deg);
      }
      &::before {
        @include outFace(#58e3dd);
      }

      .marking {
        @include outFace(#eee);
        &:nth-child(1) {
          @include rotate(30deg);
        }
        &:nth-child(2) {
          @include rotate(60deg);
        }
        &:nth-child(3) {
          @include rotate(120deg);
        }
        &:nth-child(4) {
          @include rotate(150deg);
        }
      }

      .inner-clock-face {
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        background: #282828;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        z-index: 1;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 16px;
          height: 16px;
          display: block;
          border-radius: 18px;
          margin-left: -8px;
          margin-top: -8px;
          background: #4d4b63;
          z-index: 11;
        }
      }

      .hand {
        right: 50%;
        height: 6px;
        background: #61afff;
        position: absolute;
        top: 50%;
        margin-top: -3px;
        border-radius: 6px;
        transform-origin: 100% 50%;
        transform: rotate(90deg);
        transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);

        &[data-name='hour'] {
          width: 30%;
          z-index: 3;
        }
        &[data-name='minute'] {
          height: 3px;
          margin-top: -1.5px;
          z-index: 10;
          width: 40%;
        }
        &[data-name='second'] {
          background: #ee791a;
          width: 45%;
          height: 2px;
          margin-top: -1px;
          z-index: 2;
        }
      }
    }
  }
}
</style>
