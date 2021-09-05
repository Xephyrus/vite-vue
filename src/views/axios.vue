<template>
  <div class="axios">
    <main>
      <p class="para">Office 365</p>
      <div class="flex-between mb-20">
        <logo name="doc"></logo>
        <logo name="xls"></logo>
        <logo name="ppt"></logo>
        <logo name="ae"></logo>
        <logo name="pub"></logo>
        <logo name="olk"></logo>
        <logo name="note"></logo>
        <logo name="ex"></logo>
        <logo name="tm"></logo>
        <logo name="sp"></logo>
        <logo name="vs"></logo>
        <logo name="sw"></logo>
        <logo name="form"></logo>
        <logo name="sky"></logo>
        <logo name="ym"></logo>
        <logo name="st"></logo>
      </div>
      <div class="bg flex-between">
        <div class="logo" icon="cross">
          <div class="cross"></div>
        </div>
        <div class="logo" icon="substrate">
          <div class="pattern">
            <div class="bar bar--1"></div>
            <div class="bar bar--2"></div>
            <div class="bar bar--3"></div>
          </div>
        </div>

        <div class="logo" icon="print-meet">
          <div class="print-meet"></div>
        </div>

        <div class="logo" icon="velove">
          <div class="velove">
            <div class="heart"></div>
            <div class="love"></div>
          </div>
        </div>
      </div>
      <!-- <ul class="search-list">
        <li v-for="(url, index) in list" :key="index" class="search-list-item">
          <img :src="url" class="width-200" alt="" />
        </li>
      </ul> -->
    </main>
  </div>
</template>

<script lang="ts">
import Logo from '@/components/div/Logo.vue'
import { defineComponent, onMounted, reactive, computed } from 'vue'
import { getSearchList, getOnlineList, getSearchDefault } from '../api/bilibili'

export default defineComponent({
  components: { Logo },
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

@font-face {
  font-family: test;
  src: url('@/assets/fonts/testFont.ttf');
}
.axios {
  main {
    .para {
      font-size: 24px;

      &.test {
        font-family: test;
      }
    }
  }
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  &[icon='cross'] {
    background: #7e5dec;

    .cross {
      position: relative;
      width: 80px;
      height: 80px;
      border: 40px solid white;
      border-radius: 50% 50% 50% 0;

      &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        left: 0;
        bottom: 0;
        transform: translateX(-80px);
        box-shadow: 0 0 transparent, 40px 0 #fd5d79, 80px 0 transparent, 0 40px #1eed89,
          40px 40px transparent, 80px 40px #ffcd4b, 0 80px transparent, 40px 80px #49d3ff,
          80px 80px transparent;
      }
    }
  }

  &[icon='substrate'] {
    background: #1d242e;

    .pattern {
      width: 100px;
      height: 100px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ffc410;
        left: 0;
        top: 20px;
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #9c01d0;
        right: 0;
        bottom: 20px;
      }

      .bar {
        position: absolute;
        width: 60px;
        height: 20px;
        border-radius: 20px;
        right: 20px;

        &--1 {
          top: 0;
          background: linear-gradient(to right, #10a7f4, #31deb0);
        }

        &--2 {
          top: 50%;
          background: linear-gradient(to right, #ef6b16, #ec2f82);
          transform: translateY(-50%);
        }

        &--3 {
          bottom: 0;
          width: 40px;
          background: #f02177;
        }
      }
    }
  }

  &[icon='print-meet'] {
    background: radial-gradient(#ffffff, #ababab);
    .print-meet {
      width: 160px;
      height: 120px;
      position: relative;
      transform: rotate(-45deg);

      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 40px;
        background: #33abfa; // 元素本身高于box-shadow,所以用背景颜色补上第一个色块
        box-shadow: 0 0 #33abfa, 40px 0 #5ab8fd, 80px 0 #7cc3fe, 120px 0 transparent,
          0 40px transparent, 40px 40px #98d2fa, 80px 40px #98d2fd, 120px 40px transparent,
          0 80px transparent, 40px 80px #8054ff, 80px 80px #9775ff, 120px 80px #ae92ff;
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 40px;
        background: #6a35ff;
        left: 40px;
        top: 40px;
        border-radius: 0 100% 0 0;
      }
    }
  }

  &[icon='velove'] {
    background: radial-gradient(#ffffff, #ababab);

    .velove {
      width: 114px;
      height: 114px;
      position: relative;
      transform: rotate(-45deg);
      .love {
        width: 110px;
        height: 40px;
        border: 18px solid red;
        border-radius: 0 40px 40px 0;
        position: absolute;
        bottom: 0;
        left: 0;

        &::before {
          content: '';
          position: absolute;
          height: 114px;
          width: 18px;
          background: red;
          position: absolute;
          left: -18px;
          bottom: -18px;
        }
      }

      .heart {
        width: 40px;
        height: 20px;
        position: absolute;
        border: 18px solid red;
        bottom: 40px + 18px;
        left: 0;
        border-top-color: transparent;
        border-right-color: transparent;

        &::before {
          content: '';
          width: 40px;
          height: 40px;
          display: block;
          position: absolute;
          border: 18px solid red;
          border-radius: 40px;
          left: -18px;
          bottom: 0px;
          border-bottom-color: transparent;
          border-right-color: transparent;
          transform: rotate(45deg);
        }

        &::after {
          content: '';
          width: 40px;
          height: 40px;
          display: block;
          position: absolute;
          border: 18px solid red;
          border-left-color: transparent;
          border-top-color: transparent;
          border-radius: 40px;
          left: 0px;
          bottom: -18px;
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
