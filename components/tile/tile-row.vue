<template>
  <div class="row" :style="{ marginLeft: Math.min(0, offset) + 'px' }">
    <div class="offsetter" :style="{ width: Math.max(0, offset) + 'px' }"></div>
    <TileCutout v-for="i in count" :key="i" :screen="screen" />
  </div>
</template>

<script>
import { randomInt } from '@/util/random'
import { tween, easeOutBounce } from '@/util/tween'
import { TILE_COUNT } from './tile-setting'

const ANIMATION_LENGTH = 500

export default {
  props: {
    screen: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    offset: 0,
    toOffset: 0,
    init: true,
  }),
  computed: {
    count: () => TILE_COUNT,
    tileRowWidth() {
      return this.screen.tileWidth * this.count
    },
    tileRowWidthScrollable() {
      return this.tileRowWidth - this.screen.screenWidth
    },
    center() {
      return -this.tileRowWidthScrollable / 2 - 16
    },
  },
  watch: {
    offset(to) {
      this.$emit('offsetChange', to)
    },
    tileRowWidthScrollable: {
      immediate: true,
      handler(to) {
        this.moveRandom(to)
      },
    },
  },
  mounted() {
    const randomMove = () => {
      this.moveRandom(this.tileRowWidthScrollable)
      setTimeout(randomMove, randomInt(2000, 10000))
    }
    setTimeout(randomMove, 1000)
  },
  methods: {
    moveRandom(to) {
      const randomRange = to / 3
      const offset = this.center + randomInt(-randomRange, randomRange)
      this.toOffset = offset
      if (this.init) {
        this.offset = offset
        this.init = false
        return
      }
      const offsetStart = this.offset
      let start = null
      const animateOffset = (timestamp) => {
        if (start === null) {
          start = timestamp
        }

        this.offset = tween(
          offsetStart,
          offset,
          start,
          ANIMATION_LENGTH,
          timestamp,
          easeOutBounce
        )

        if (timestamp >= start + ANIMATION_LENGTH) {
          return
        }
        window.requestAnimationFrame(animateOffset)
      }
      window.requestAnimationFrame(animateOffset)
    },
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";
@use "~assets/styles/tile-size";
.row {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow: visible;
  margin-right: -16px;
  .offsetter {
    flex-shrink: 0;
  }

  &:after {
    content: '';
    flex: 1;
  }

  &:after,
  .offsetter {
    background: color.$bg;
  }
}
</style>
