<template>
  <div class="center">
    <div class="title-cover">
      <div class="bg">
        <TileRowBg :count="5" :offset="269" />
        <TileRowBg :count="6" :offset="342" />
        <TileRowBg :count="10" :offset="400" />
        <TileRowBg :count="8" :offset="243" />
      </div>
      <div class="title">Phumdol</div>
      <div class="fg">
        <TileRow :count="5" :offset="269" />
        <TileRow :count="6" :offset="342" />
        <TileRow :count="10" :offset="400" />
        <TileRow :count="8" :offset="243" />
      </div>
      <h1 class="title front">Phumdol</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('palette/init')
  },
}
</script>

<style lang="scss" scoped>
@use "sass:color";

.center {
  display: flex;
  align-items: center;
  height: 100vh;
}
.title-cover {
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
  width: 100%;
}

.bg {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
