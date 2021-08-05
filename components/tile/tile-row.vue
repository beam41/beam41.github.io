<template>
  <div class="row" :style="{ marginLeft: Math.min(0, offset) + 'px' }">
    <div class="offsetter" :style="{ width: Math.max(0, offset) + 'px' }"></div>
    <TileCutout v-for="i in count" :key="i" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { randomInt } from '@/util/random'

export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    offset: 0,
  }),
  computed: {
    ...mapState({
      screen: (store) => store.screen,
    }),
    tileRowWidth() {
      return this.screen.tileWidth * this.count
    },
    tileRowWidthScrollable() {
      return this.tileRowWidth - this.screen.screenWidth
    },
    center() {
      return -this.tileRowWidthScrollable / 2
    },
  },
  watch: {
    offset(to) {
      this.$emit('offsetChange', to)
    },
    tileRowWidthScrollable: {
      immediate: true,
      handler(to) {
        const randomRange = to / 4
        this.offset = this.center + randomInt(-randomRange, randomRange)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";
@use "./tile-size";
.row {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
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
