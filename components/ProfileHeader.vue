<template>
  <header class="header">
    <svg viewBox="0 0 22 5" ref="header">
      <defs>
        <linearGradient
          v-for="(g, i) of gradients"
          :id="`grad-${i + 1}`"
          :x1="g.xyRotation.x1"
          :y1="g.xyRotation.y1"
          :x2="g.xyRotation.x2"
          :y2="g.xyRotation.y2"
          gradientUnits="objectBoundingBox"
        >
          <stop
            :stop-color="`rgba(${g.color.r}, ${g.color.g}, ${g.color.b}, 1)`"
            offset="0%"
          />
          <stop
            :stop-color="`rgba(${g.color.r}, ${g.color.g}, ${g.color.b}, 0)`"
            offset="75%"
          />
        </linearGradient>
      </defs>
      <text v-for="i of gradients.length" :fill="`url(#grad-${i})`">
        <tspan
          font-size="5"
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
        >
          Phumdol
        </tspan>
      </text>
    </svg>
  </header>
</template>

<script lang="ts" setup>
import { pingpongLoop, easeInOutSine } from '@/util/tween'
import { randomInt } from '@/util/random'

const header = ref<Element>()
const onScreen = ref(false)

onMounted(() => {
  let observer = new IntersectionObserver((entries) => {
    onScreen.value = entries[0].isIntersecting
  })
  observer.observe(header.value!)
})

class RGB {
  constructor(public r: number, public g: number, public b: number) {}
}

class GradientValue {
  public deg: number
  private degA: number
  private degB: number

  public color: RGB
  private colorA: RGB
  private colorB: RGB

  private durationDeg: number
  private durationColor: number

  private offsetDeg: number
  private offsetColor: number

  constructor(degA: number, degB: number, colorA: RGB, colorB: RGB) {
    this.deg = degA
    this.degA = degA
    this.degB = degB

    this.color = { ...colorA }
    this.colorA = colorA
    this.colorB = colorB

    this.durationDeg = randomInt(10000 / 2, 10000)
    this.durationColor = randomInt(10000 / 2, 10000)

    this.offsetDeg = randomInt(0, this.durationDeg)
    this.offsetColor = randomInt(0, this.durationColor)
  }

  public animate(start: number, current: number) {
    this.deg = pingpongLoop(
      this.degA,
      this.degB,
      start,
      this.durationDeg,
      this.offsetDeg,
      current,
      easeInOutSine
    )

    this.color.r = pingpongLoop(
      this.colorA.r,
      this.colorB.r,
      start,
      this.durationColor,
      this.offsetColor,
      current,
      easeInOutSine
    )
    this.color.g = pingpongLoop(
      this.colorA.g,
      this.colorB.g,
      start,
      this.durationColor,
      this.offsetColor,
      current,
      easeInOutSine
    )
    this.color.b = pingpongLoop(
      this.colorA.b,
      this.colorB.b,
      start,
      this.durationColor,
      this.offsetColor,
      current,
      easeInOutSine
    )
  }

  get xyRotation() {
    const rad = this.deg * (Math.PI / 180)
    return {
      x1: 0.5 + Math.sin(rad) * 0.5,
      y1: 0.5 + Math.cos(rad) * 0.5,
      x2: 0.5 + Math.sin(rad + Math.PI) * 0.5,
      y2: 0.5 + Math.cos(rad + Math.PI) * 0.5,
    }
  }
}

const gradients = ref<GradientValue[]>([
  new GradientValue(-30, 30, new RGB(232, 138, 255), new RGB(255, 229, 135)),
  new GradientValue(
    120 - 30,
    120 + 30,
    new RGB(138, 255, 236),
    new RGB(161, 255, 217)
  ),
  new GradientValue(
    240 - 30,
    240 + 30,
    new RGB(255, 217, 150),
    new RGB(255, 150, 234)
  ),
])

onMounted(() => {
  let start = -1
  function animate(timestamp: number) {
    if (!onScreen.value) {
      window.requestAnimationFrame(animate)
      return
    }
    if (start === -1) start = timestamp
    for (const g of gradients.value) {
      g.animate(start, timestamp)
    }
    window.requestAnimationFrame(animate)
  }
  window.requestAnimationFrame(animate)
})
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0;
  user-select: none;

  & > svg {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text {
      font-weight: bold;
    }
  }
}
</style>
