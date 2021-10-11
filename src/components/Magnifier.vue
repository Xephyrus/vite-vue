<template>
  <div ref="magnifier" class="magnifier" :style="state.style.value" @mousemove="onMove">
    <img :src="state.image.raw" alt="" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Magnifier'
})
</script>

<script lang="ts" setup>
import { onMounted, defineComponent, reactive, ref } from 'vue'

const props = defineProps({
  url: {
    type: String,
    default: 'https://sgs-default.oss-cn-shanghai.aliyuncs.com/15828868737191582886873817.jpg'
  }
})

const magnifier = ref(null)
const state = reactive<any>({
  image: {
    raw: 'https://sgs-default.oss-cn-shanghai.aliyuncs.com/15828868737191582886873817.jpg',
    small:
      'https://sgs-default.oss-cn-shanghai.aliyuncs.com/15828868737191582886873817.jpg?x-oss-process=image/resize,m_fill,h_174,w_308'
  },
  style: {
    '--x': 0,
    '--y': 0
  },
  ratio: 3
})

const onMove = ({ offsetX, offsetY }: any) => {
  state.style.value = {
    '--x': offsetX + 'px',
    '--y': offsetY + 'px'
  }
}

const bgImage = ref('')

onMounted(() => {
  const { url } = props
  const image = new Image()
  bgImage.value = `url(${url})`
  image.src = url
  image.onload = () => {
    const refMagnifier: any = magnifier.value
    if (refMagnifier) {
      state.ratio = image.width / refMagnifier.clientWidth
    }
    // console.log(refMagnifier.clientWidth)
    // console.log(image.width)
    // console.log(state.ratio)
  }
})
</script>

<style lang="scss" scoped>
$ratio: 4;
$box-w: 980px;
$box-h: 692.85px;
$outbox-w: $box-w * $ratio;
$outbox-h: $box-h * $ratio;

.magnifier {
  --x: 0;
  --y: 0;
  overflow: hidden;
  position: relative;
  cursor: zoom-in;
  user-select: none;

  &::before {
    --size: 0;
    position: absolute;
    content: '';
    border-radius: 50%;
    $scale-x: calc(var(--size) / #{$ratio} - #{$ratio} * var(--x));
    $scale-y: calc(var(--size) / #{$ratio} - #{$ratio} * var(--y));
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    box-shadow: 1px 1px 3px rgba($color: #000000, $alpha: 0.5);
    will-change: left, top;
    transform: translate(-50%, -50%);
    background: #333 v-bind(bgImage) $scale-x $scale-y/$outbox-w $outbox-h no-repeat;
  }

  &:hover::before {
    --size: 100px;
  }

  img {
    display: block;
    max-width: 100%;
  }
}
</style>
