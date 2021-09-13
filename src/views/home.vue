<template>
  <div class="home">
    <github></github>
    <div class="scanner">
      <scanning></scanning>
    </div>

    <a class="gitee-link" href="https://gitee.com/zhu-maosheng/vite-vue"
      ><div class="gitee">
        <div class="gitee-icon"></div>
      </div>
    </a>

    <el-carousel>
      <el-carousel-item v-for="(item, index) in refData.baiduH5" :key="index">
        <div class="slide-wrap">
          <div class="image" :style="{ backgroundImage: `url(${item.bgImage})` }"></div>
          <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="bg flex mb-40">
      <animate-icon
        v-for="(item, index) in refData.iconList"
        :key="index"
        v-bind="item"
        class="icon"
      ></animate-icon>
      <ali-icon
        v-for="(item, index) in refData.aliIcons"
        :key="index"
        v-bind="item"
        class="icon"
      ></ali-icon>
      <wy-icon v-for="(item, index) in refData.wyIcons" :key="index" v-bind="item"></wy-icon>
    </div>
    <div class="bg flex">
      <div class="tpm-solution__summary">
        <div class="tpm-solution__summary-ani"></div>
      </div>
      <div class="nav-icons">
        <animate-icon
          v-for="(item, index) in refData.navIcon"
          :key="index"
          v-bind="item"
        ></animate-icon>
      </div>
    </div>
    <process-bar ref="healthy" :config="refData.config1"></process-bar>
    <process-bar ref="abnormal" :config="refData.config"></process-bar>
    <div class="mb-20">
      <el-radio-group v-model="data" class="mb-20">
        <el-radio-button label="healthy">健康数据</el-radio-button>
        <el-radio-button label="abnormal">异常数据</el-radio-button>
      </el-radio-group>
      <div></div>
      <el-input v-model="refData.params.ref" class="width-200"></el-input>
      <el-button class="font-lcd" @click="showLoading">loading</el-button>
      <el-button class="font-lcd" type="primary" @click="addMinus(-1)">-1</el-button>
      <el-button class="font-lcd" type="primary" @click="addMinus(1)">+1</el-button>
      <el-button class="font-lcd" type="primary" @click="addMinus(-10)">-10</el-button>
      <el-button class="font-lcd" type="primary" @click="addMinus(10)">+10</el-button>
    </div>

    <div class="bg-dark mb-20">
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
export default defineComponent({
  name: 'Home'
})
</script>

<script lang="ts" setup>
import { reactive, defineComponent, ref, onBeforeUnmount, useAttrs, useSlots } from 'vue'
import ProcessBar from '@/components/svg/process-bar.vue'
import Clock from '@/components/div/Clock.vue'
import Bus from '../utils/bus'
import Safari from '@/components/div/Safari.vue'
import Album from '@/components/div/Album.vue'
import Saturn from '@/components/div/Saturn.vue'
import Cards from '@/components/div/Cards.vue'
import Skeleton from '@/components/div/Skeleton.vue'
import Masonry from '@/components/div/Masonry.vue'
import Cube from '@/components/div/Cube.vue'
import JueJin from '@/components/div/JueJin.vue'
import Dashboard from '@/components/Dashboard.vue'
import Radar from '@/components/div/Radar.vue'
import Google from '@/components/div/Google.vue'
import Scanning from '@/components/div/Scanning.vue'
import AnimateIcon from '@/components/AnimateIcon.vue'
import AliIcon from '@/components/AliIcon.vue'
import WyIcon from '../components/WyIcon.vue'
import Github from '@/components/svg/github.vue'

const abnormal = ref<any>(null)
const healthy = ref<any>(null)
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
  ],
  wyIcons: [{ type: 'a' }, { type: 'b' }, { type: 'c' }],
  navIcon: [
    { icon: 'game', text: '游戏' },
    { icon: 'education', text: '教育' },
    { icon: 'medical', text: '医疗' },
    { icon: 'applets', text: '小程序' },
    { icon: 'private-cloud', text: '专有云' },
    { icon: 'finance', text: '金融' },
    { icon: 'audio&video', text: '音视频' },
    { icon: 'manufacturing', text: '医疗' },
    { icon: 'safety', text: '安全' },
    { icon: 'bigData', text: '大数据' },
    { icon: 'cloud-payment', text: '云支付' },
    { icon: 'cultural&tourism', text: '文旅' }
  ],
  baiduH5: [
    {
      bgImage: 'https://fex.bdstatic.com/h5static/services/store/images/3dd03cd5.S01.png',
      title: '拒绝广告 · 聚焦交互体验',
      text: '免费发布的 H5 页面不添加任何破坏整体设计的平台广告，百分百聚焦内容'
    },
    {
      bgImage: 'https://fex.bdstatic.com/h5static/services/store/images/9b32b84b.S02.png',
      title: '编辑神器 · 专业效果呈现',
      text: '智能辅助线、时间轴、一键PSD导入、多设备分辨率兼容专利技术构建专业级体验'
    },
    {
      bgImage: 'https://fex.bdstatic.com/h5static/services/store/images/992477a6.S03.png',
      title: '云化架构 · 极速稳定保障',
      text: '超大规模分布式架构与运维、安全体系，支持独立部署和https，极速稳定'
    }
  ]
})

const data = ref<string>('healthy')

const addMinus = (n: number) => {
  let value: any
  if (data.value === 'healthy') {
    value = healthy.value
    refData.config1.percentage += n
    if (refData.config1.percentage >= 100) refData.config1.percentage = 100
    if (refData.config1.percentage <= 0) refData.config1.percentage = 0
  } else if (data.value === 'abnormal') {
    value = abnormal.value
    refData.config.percentage += n
    if (refData.config.percentage >= 100) refData.config.percentage = 100
    if (refData.config.percentage <= 0) refData.config.percentage = 0
  } else {
    return false
  }
  value.initCircle()
}

const showLoading = () => {
  Bus.$emit('loading')
  setTimeout(() => {
    Bus.$emit('loading')
  }, refData.params.ref * 1000)
}
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
      background-image: url('@/assets/images/bg-backc58.png');
    }

    .tpm-solution__summary-ani {
      position: absolute;
      right: 0;
      bottom: 90px;
      width: 215px;
      height: 216px;
      background-image: url('@/assets/images/ani-spriteeef.png');
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
  .nav-icons {
    display: flex;
    width: 50%;
    flex-wrap: wrap;
  }
}

.scanner {
  position: fixed;
  right: 50%;
  margin-right: 500px;
  top: 50%;
  transform: translateY(-50%);
}
.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
}

.slide-wrap {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  .image {
    width: 412px;
    height: 229px;
    background-size: cover;
  }

  .text {
    h2 {
      font-weight: 200;
      color: #000;
      line-height: 64px;
      font-size: 32px;
    }

    p {
      font-weight: 200;
      color: #999;
      font-size: 15px;
      line-height: 26px;
    }
  }
}

.el-carousel__item {
  background-color: #d3dce6;
}
.el-carousel__item:nth-child(2n + 1) {
  .slide-wrap {
    -webkit-flex-direction: row-reverse; /* Safari 6.1+ */
    flex-direction: row-reverse;
  }
}

.gitee {
  position: fixed;
  right: 0;
  top: 80px;
  background: #000;
  padding: 12px;
  width: 45px;
  border-radius: 45px 5px 45px 5px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    width: 143px;
  }
  &-icon {
    width: 143px;
    height: 45px;
    background-image: url(https://gitee.com/static/images/logo.svg);
    background-size: cover;
  }
}
</style>
