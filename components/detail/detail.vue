<template>
  <div class="detail-box">
    <div class="detail-cover">
      <div class="detail-background"></div>
      <div :style="{ height: detailHeight + 'px' }" class="detail">
        <h2 class="about-header">About</h2>
        <AboutDetail :percentage="scrollPercentage" />
      </div>
    </div>
    <div class="detail-sleeve"></div>
    <div class="detail-sleeve-hid"></div>
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
    const setScroll = () => {
      this.maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      this.scroll = document.documentElement.scrollTop
      window.requestAnimationFrame(setScroll)
    }
    window.requestAnimationFrame(setScroll)
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
  position: relative;

  .detail-background {
    position: absolute;
    background: color.$detail-bg;
    border-radius: tile-size.$radius;
    height: calc(100% - 32px);
    width: calc(100% - 32px);
    z-index: 0;
  }

  .detail {
    position: absolute;
    height: 64px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
}

.detail-box {
  .detail-sleeve {
    position: fixed;
    width: calc(100% - 32px);
    border: 16px solid color.$bg;
    border-top: 0;
    border-radius: 0 0 tile-size.$radius + 16 tile-size.$radius + 16;
    height: 64px;
    bottom: 0;
  }

  .detail-sleeve-hid {
    position: fixed;
    width: calc(100%);
    height: 16px;
    background: color.$bg;
    bottom: 0;
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
