<!--
 * @Author: your name
 * @Date: 2021-10-19 00:45:01
 * @LastEditTime: 2021-10-20 16:42:59
 * @LastEditors: Please set LastEditors
 * @Description: Click board
 * @FilePath: \prismd:\code\vite-vue\src\components\ClickBoard.vue
-->
<template>
  <canvas ref="refCanvas" class="click-board"
    ><span ref="refPointer" class="pointer"></span
  ></canvas>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { randBetween, randomOne } from '@/utils/tools'

interface position {
  x: number
  y: number
}
const balls = ref<Ball[]>([])
const longPressed = ref<boolean>(false)
const longPress = ref<any>(null)
const multiplier = ref<number>(0)
const origin = ref<position>({
  x: 0,
  y: 0
})
const normal = ref<position>({
  x: 0,
  y: 0
})
const width = ref<number>(0)
const height = ref<number>(0)
const ctx = ref<any>(null)
const colours = ref<string[]>(['#F73859', '#14FFEC', '#00E0FF', '#FF99FE', '#FAF15D', '#FF7F50'])
const refCanvas = ref(null)
const refPointer = ref(null)

const updateSize = () => {
  const canvas: any = refCanvas.value
  const { innerWidth, innerHeight } = window
  canvas.width = innerWidth * 2
  canvas.height = innerHeight * 2
  canvas.style.width = innerWidth + 'px'
  canvas.style.height = innerHeight + 'px'
  ctx.value.scale(2, 2)
  width.value = canvas.width = innerWidth
  height.value = canvas.height = innerHeight
  origin.value = {
    x: width.value / 2,
    y: height.value / 2
  }
  normal.value = {
    x: width.value / 2,
    y: height.value / 2
  }
}

const removeBall = () => {
  const ballList: Ball[] = balls.value
  for (let i = 0; i < ballList.length; i++) {
    let b: Ball = ballList[i]
    if (
      b.x + b.r < 0 ||
      b.x - b.r > width.value ||
      b.y + b.r < 0 ||
      b.y - b.r > height.value ||
      b.r < 0
    ) {
      ballList.splice(i, 1)
    }
  }
}

const loop = () => {
  const ctxValue: any = ctx.value
  const canvas: any = refCanvas.value
  const ballList: Ball[] = balls.value
  ctxValue.fillStyle = 'rgba(255, 255, 255, 0)'
  ctxValue.clearRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < ballList.length; i++) {
    let b: Ball = ballList[i]
    if (b.r < 0) continue
    ctxValue.fillStyle = b.color
    ctxValue.beginPath()
    ctxValue.arc(b.x, b.y, b.r, 0, Math.PI * 2, false)
    ctxValue.fill()
    b.update()
  }
  if (longPress.value == true) {
    multiplier.value += 0.2
  } else if (!longPressed && multiplier.value >= 0) {
    multiplier.value -= 0.4
  }
  removeBall()
  requestAnimationFrame(loop)
}

class Ball {
  x: number
  y: number
  angle: number
  multiplier: number // 小球的个数
  vx: number
  vy: number
  r: number // 小球的半径
  color: string // 小球的颜色
  constructor(position: position) {
    this.x = position.x
    this.y = position.y
    this.angle = Math.PI * 2 * Math.random()
    if (longPressed.value) {
      this.multiplier = randBetween(14 + multiplier.value, 15 + multiplier.value)
    } else {
      this.multiplier = randBetween(6, 12)
    }
    let size: number = (this.multiplier + Math.random() * 0.5)
    this.vx = size * Math.cos(this.angle)
    this.vy = size * Math.sin(this.angle)
    this.r = randBetween(8, 12) + 3 * Math.random()
    this.color = randomOne(colours.value)
  }
  update() {
    const normalValue = normal.value
    this.x += this.vx - normalValue.x
    this.y += this.vy - normalValue.y
    normalValue.x = (-2 / window.innerWidth) * Math.sin(this.angle)
    normalValue.y = (-2 / window.innerHeight) * Math.cos(this.angle)
    this.r -= 0.3
    this.vx *= 0.9
    this.vy *= 0.9
  }
}

const pushBalls = (count = 1, position: position) => {
  for (let i = 0; i < count; i++) {
    balls.value.push(new Ball(position))
  }
}

const bindEvent = () => {
  window.addEventListener('resize', updateSize, false)
  window.addEventListener(
    'mousedown',
    function ({ clientX, clientY }) {
      pushBalls(randBetween(10, 20), { x: clientX, y: clientY })
      // document.body.classList.add('is-pressed')
      longPress.value = setTimeout(() => {
        // document.body.classList.add('is-longpress')
        longPressed.value = true
      }, 500)
    },
    false
  )
  window.addEventListener(
    'mouseup',
    function ({ clientX, clientY }) {
      clearInterval(longPress.value)
      const multi: number = multiplier.value
      if (longPressed.value) {
        // document.body.classList.remove('is-longpress')
        pushBalls(randBetween(50 + Math.ceil(multi), 100 + Math.ceil(multi)), {
          x: clientX,
          y: clientY
        })
        longPressed.value = false
      }
      // document.body.classList.remove('is-pressed')
    },
    false
  )
  window.addEventListener(
    'mousemove',
    function ({ clientX: x, clientY: y }) {
      const pointer: any = refPointer.value
      pointer.style.top = y + 'px'
      pointer.style.left = x + 'px'
    },
    false
  )
}

onMounted(() => {
  const canvas: any = refCanvas.value
  if (canvas.getContext && window.addEventListener) {
    ctx.value = canvas.getContext('2d')
    updateSize()
    loop()
    bindEvent()
  }
})
</script>

<style lang="scss" scoped>
.click-board {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  position: fixed;
  pointer-events: none;
}
</style>
