<template>
  <div class="home">
    <el-carousel direction="vertical" :autoplay="false">
      <el-carousel-item v-for="i in 38" :key="i">
        <img
          class="bg-image"
          :src="`https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate-x2/img/performance/wallpaper/${(
            i - 1
          )
            .toString()
            .padStart(4, '0')}.webp`"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
    <div class="bg flex mb-40">
      <animate-icon
        v-for="(item, index) in iconList"
        :key="index"
        v-bind="item"
        class="icon"
      ></animate-icon>
      <ali-icon
        v-for="(item, index) in aliIcons"
        :key="index"
        v-bind="item"
        class="icon"
      ></ali-icon>
      <div class="tpm-solution__summary">
        <div class="tpm-solution__summary-ani"></div>
      </div>
      <astronaut></astronaut>
    </div>
    <div class="bg"></div>
    <process-bar :config="config1"></process-bar>
    <process-bar ref="abnormal" :config="config"></process-bar>
    <div class="mb-20">
      <el-input v-model="params.ref" class="width-200"></el-input>
      <el-button @click="showLoading">loading</el-button>
      <el-button @click="addTen" type="primary">+10</el-button>
    </div>
    <div class="bg-dark">
      <scanning></scanning>
    </div>
    <div class="bg-dark flex-between mb-20">
      <radar></radar>
      <google></google>
    </div>
    <div class="bg-dark flex-between mb-20">
      <jue-jin></jue-jin>
      <dashboard></dashboard>
    </div>
    <div class="bg-white">
      <cube></cube>
    </div>
    <div class="bg-white">
      <masonry></masonry>
    </div>
    <div class="bg-light">
      <skeleton></skeleton>
    </div>
    <div class="bg-dark flex-between mb-20">
      <safari></safari>
      <album></album>
    </div>
    <div class="bg-dark flex-between mb-20" style="padding-top: 200px">
      <saturn style="margin-top: -100px"></saturn>
      <cards></cards>
    </div>
    <div class="bg-dark">
      <clock></clock>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref, onBeforeUnmount } from 'vue'
import ProcessBar from '@/components/svg/process-bar.vue'
import Clock from '@/components/div/Clock.vue'
import Bus from '../utils/bus'
import Safari from '../components/div/Safari.vue'
import Album from '../components/div/Album.vue'
import Saturn from '../components/div/Saturn.vue'
import Cards from '../components/div/Cards.vue'
import Skeleton from '../components/div/Skeleton.vue'
import Masonry from '../components/div/Masonry.vue'
import Cube from '../components/div/Cube.vue'
import JueJin from '../components/div/JueJin.vue'
import Dashboard from '../components/Dashboard.vue'
import Radar from '../components/div/Radar.vue'
import Google from '../components/div/Google.vue'
import Scanning from '../components/div/Scanning.vue'
import AnimateIcon from '@/components/AnimateIcon.vue'
import Astronaut from '@/components/Astronaut.vue'
import AliIcon from '@/components/AliIcon.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProcessBar,
    Clock,
    Safari,
    Album,
    Saturn,
    Cards,
    Skeleton,
    Masonry,
    Cube,
    JueJin,
    Dashboard,
    Radar,
    Google,
    Scanning,
    AnimateIcon,
    Astronaut,
    AliIcon
  },
  setup(props, AnimateIcon) {
    const abnormal: any = ref(null)
    const refData = reactive({
      config: {
        title: '问题数据',
        labelColor: '#f00',
        percentage: 25,
        textColor: '#f25268',
        gradient: ['#ff0', '#f00'],
        gradientId: 'g1'
      },
      config1: {
        title: '健康数据',
        labelColor: '#31a601',
        percentage: 75,
        textColor: '#3fb524',
        gradient: ['#9af504', '#45d898'],
        gradientId: 'g2'
      },
      params: {
        ref: 3
      },
      iconList: [
        { icon: 'ani-hot', text: '热门推荐' },
        { icon: 'ani-base', text: '计算' },
        { icon: 'ani-middleware', text: '容器与中间件' },
        { icon: 'ani-storage', text: '存储' },
        { icon: 'ani-database', text: '数据库' },
        { icon: 'ani-net', text: '网络与CDN' },
        { icon: 'ani-video', text: '视频服务' },
        { icon: 'ani-safe', text: '安全' },
        { icon: 'ani-big-data', text: '大数据' },
        { icon: 'ani-ai', text: 'AI' },
        { icon: 'ani-iot', text: '物联网' },
        { icon: 'ani-app', text: '企业应用与云通信' },
        { icon: 'ani-industry', text: '行业应用' },
        { icon: 'ani-developer', text: '开发者服务' }
      ],
      aliIcons: [
        {
          icon: 'ali-hot',
          title: '热门产品'
        },
        {
          icon: 'ali-compute',
          title: '弹性计算'
        },
        {
          icon: 'ali-storage',
          title: '存储'
        },
        {
          icon: 'ali-db',
          title: '数据库'
        },
        {
          icon: 'ali-safety',
          title: '安全'
        },
        {
          icon: 'ali-big-data',
          title: '大数据'
        },
        {
          icon: 'ali-ai',
          title: '人工智能'
        },
        {
          icon: 'ali-net&cdn',
          title: '网络与CDN'
        },
        {
          icon: 'ali-video',
          title: '视频服务'
        },
        {
          icon: 'ali-middleware',
          title: '容器与中间件'
        },
        {
          icon: 'ali-developer',
          title: '开发与运维'
        },
        {
          icon: 'ali-iot',
          title: '物联网IoT'
        },
        {
          icon: 'ali-mix-cloud',
          title: '混合云'
        },
        {
          icon: 'ali-app',
          title: '企业应用与云通信'
        }
      ]
    })

    const addTen = () => {
      refData.config.percentage += 10
      if (refData.config.percentage > 100) {
        refData.config.percentage = 100
      }
      let value: any = abnormal.value
      value.initCircle()
    }

    const showLoading = () => {
      Bus.$emit('loading')
      setTimeout(() => {
        Bus.$emit('loading')
      }, refData.params.ref * 1000)
    }

    return {
      ...refData,
      abnormal,
      addTen,
      showLoading
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';

@keyframes animate {
  0% {
    background-position: 0 8208px;
  }
  100% {
    background-position: 0 0;
  }
}

.flex {
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;

  .tpm-solution__summary {
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 400px;
    height: 462px;
    border: 10px solid #242933;
    background: #242933;
    box-shadow: 8px 8px 20px 0 rgb(18 21 26 / 60%), -8px -8px 20px 0 rgb(54 62 77 / 50%),
      inset 0 4px 20px 0 rgb(36 41 51 / 50%);
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: 100% 100%;
      background-size: 250px auto;
      background-image: url('@/assets/images/ani/bg-backc58.png');
    }

    .tpm-solution__summary-ani {
      position: absolute;
      right: 0;
      bottom: 90px;
      width: 215px;
      height: 216px;
      background-image: url('@/assets/images/ani/ani-spriteeef.png');
      background-size: 100% auto;
      background-position: top;

      &:hover {
        animation: animate 1s steps(38) forwards;
      }
    }
  }
  .icon {
    margin-bottom: 40px;
  }
}
.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
