<template>
  <div class="detail-cover">
    <div :style="{ height: detailHeight + 'px' }" class="detail"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    scroll: 0,
  }),
  computed: {
    detailHeight() {
      return this.scroll + 64
    },
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      this.scroll = document.documentElement.scrollTop
    })
  },
}
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "~assets/styles/tile-size";
@use "~assets/styles/color";

.detail-cover {
  box-sizing: border-box;
  margin-top: -8px;
  padding: 16px 16px 16px;
  height: 100vh;
  width: 100%;

  .detail {
    background: color.$detail-bg;
    height: 64px;
    border-radius: tile-size.$radius;
  }
}
</style>
