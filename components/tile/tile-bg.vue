<template>
  <div
    class="bg"
    :style="{
      background: '#' + currPalette[pal],
      width: screen.tileWidth + 'px',
      height: screen.tileHeight + 'px',
    }"
  ></div>
</template>

<script>
import { randomInt } from '@/util/random'

export default {
  props: {
    screen: {
      type: Object,
      required: true,
    },
    currPalette: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    pal: null,
  }),
  mounted() {
    this.pal = randomInt(0, 2)
  },
}
</script>

<style lang="scss" scoped>
.bg {
  flex-shrink: 0;
}
</style>
