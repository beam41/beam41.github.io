<template>
  <div class="overflow-box">
    <div class="title-cover">
      <div class="bg">
        <TileRowBg :screen="screen" :offset="tileOffset[0]" />
        <TileRowBg :screen="screen" :offset="tileOffset[1]" />
        <TileRowBg :screen="screen" :offset="tileOffset[2]" />
      </div>

      <div class="title-box">
        <div class="quote">Hello my name is...</div>
        <h1 class="title">Phumdol</h1>
      </div>
      <div class="fg">
        <TileRow :screen="screen" @offsetChange="(e) => setOffset(0, e)" />
        <TileRow :screen="screen" @offsetChange="(e) => setOffset(1, e)" />
        <TileRow :screen="screen" @offsetChange="(e) => setOffset(2, e)" />
      </div>
      <div class="title-box-copy">
        <div class="quote">Hello my name is...</div>
        <h1 class="title">Phumdol</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { FOOTER_HEIGHT } from '../tile/tile-setting'
export default {
  data: () => ({
    tileOffset: [0, 0, 0],
    screen: {
      screenWidth: 0,
      tileHeight: 300,
      tileWidth: 485,
    },
  }),
  created() {
    this.$store.commit('palette/init')
    this.setTile()
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setTile()
    })
  },
  methods: {
    setOffset(index, offset) {
      this.$set(this.tileOffset, index, offset)
    },
    setTile() {
      const tileHeight = Math.round((window.innerHeight - FOOTER_HEIGHT) / 3)
      this.screen = {
        screenWidth: window.innerWidth,
        tileHeight,
        tileWidth: Math.round(tileHeight * 1.618),
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "~assets/styles/color" as c;

.overflow-box {
  overflow: hidden;
}

.title-cover {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  border: 16px solid c.$bg;
  border-top: 8px solid c.$bg;
  border-bottom: none;
}

.title-box,
.title-box-copy {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  user-select: none;
  color: white;
  text-align: center;
}

.quote {
  font-size: clamp(1rem, 5vw, 2rem);
}

.title {
  font-size: 20vw;
  margin: 0;
  line-height: 1;
}

.title-box-copy {
  color: color.scale(white, $alpha: -75%);
}

.fg {
  overflow: visible;
}

.bg {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
