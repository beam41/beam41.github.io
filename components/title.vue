<template>
  <div class="title-cover">
    <div class="bg">
      <TileRowBg :count="10" :offset="tileOffset[0]" />
      <TileRowBg :count="10" :offset="tileOffset[1]" />
      <TileRowBg :count="10" :offset="tileOffset[2]" />
    </div>
    <div class="title">Phumdol</div>
    <div class="fg">
      <TileRow :count="10" @offsetChange="(e) => setOffset(0, e)" />
      <TileRow :count="10" @offsetChange="(e) => setOffset(1, e)" />
      <TileRow :count="10" @offsetChange="(e) => setOffset(2, e)" />
    </div>
    <h1 class="title front">Phumdol</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    tileOffset: [0, 0, 0],
  }),
  created() {
    this.$store.commit('palette/init')
  },
  methods: {
    setOffset(index, offset) {
      this.$set(this.tileOffset, index, offset)
    },
  },
}
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "~assets/styles/color" as c;

.title-cover {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.title {
  font-size: 400px;
  color: white;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
}

.front {
  color: color.scale(white, $alpha: -95%);
}

.fg {
  overflow: hidden;
}

.bg {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
