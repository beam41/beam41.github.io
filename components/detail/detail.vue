<template>
  <div class="detail-cover">
    <div :style="{ height: detailHeight + 'px' }" class="detail">
      <h2 class="about-header">About</h2>
      <AboutDetail :percentage="scrollPercentage" />
    </div>
  </div>
</template>

<script>
import { normalize } from '@/util/number'
import AboutDetail from './about-detail.vue'

export default {
  components: {
    AboutDetail,
  },
  data: () => ({
    scroll: 0,
    maxScroll: 0,
  }),
  computed: {
    detailHeight() {
      return this.scroll + 64
    },
    scrollPercentage() {
      if (this.maxScroll === 0) return 0
      return normalize(0, this.maxScroll, this.scroll)
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.about-header {
  height: 64px;
  margin: 0;
  display: flex;
  align-items: center;
  color: white;
}
</style>
