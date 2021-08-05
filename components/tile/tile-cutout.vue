<template>
  <div
    ref="tile"
    class="cutout"
    :style="{
      width: screen.tileWidth + 'px',
      height: screen.tileHeight + 'px',
    }"
  >
    <div class="cutout-inner"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      screen: (store) => store.screen,
    }),
  },
}
</script>
<style lang="scss" scoped>
@use "~assets/styles/color";
@use "./tile-size";

.cutout {
  box-sizing: border-box;
  overflow: hidden;
  border: 8px solid color.$bg;
  flex-shrink: 0;

  .cutout-inner {
    height: 100%;
    border: 16px solid color.$bg;
    border-radius: tile-size.$radius;
    margin: -16px;
  }
}
</style>
