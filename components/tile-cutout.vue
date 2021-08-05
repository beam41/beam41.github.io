<template>
  <div class="cutout">
    <div class="cutout-inner"></div>
  </div>
</template>

<style lang="scss" scoped>
.cutout {
  width: 100px;
  height: 50px;
  overflow: hidden;
  display: flex;
  border: 8px solid white;

  .cutout-inner {
    height: 100%;
    width: 100%;
    border: 16px solid white;
    border-radius: 30px;
    margin: -16px;
  }
}
</style>
