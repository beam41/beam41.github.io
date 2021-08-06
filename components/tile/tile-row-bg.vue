<template>
  <div class="row" :style="{ marginLeft: Math.min(0, offset) + 'px' }">
    <div class="offsetter" :style="{ width: Math.max(0, offset) + 'px' }"></div>
    <TileBg v-for="i in count" :key="i" />
  </div>
</template>

<script>
import { TILE_COUNT } from './tile-setting'
export default {
  props: {
    offset: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    count: () => TILE_COUNT,
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";
.row {
  display: flex;

  .offsetter {
    flex-shrink: 0;
  }
}
</style>
