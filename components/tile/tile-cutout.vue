<template>
  <div ref="tile" class="cutout">
    <div class="cutout-inner"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tileWidth = this.$refs.tile.clientWidth
    this.$store.commit('screen/initTileWidth', tileWidth + 16)
  },
}
</script>
<style lang="scss" scoped>
@use "~assets/styles/color";
@use "./tile-size";

.cutout {
  box-sizing: border-box;
  width: tile-size.$width;
  height: tile-size.$height;
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
