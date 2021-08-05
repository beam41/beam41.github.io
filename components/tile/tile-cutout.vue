<template>
  <div class="cutout">
    <div class="cutout-inner"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "~assets/styles/color";
.cutout {
  box-sizing: border-box;
  width: 150px;
  height: 90px;
  overflow: hidden;
  border: 8px solid color.$bg;
  flex-shrink: 0;

  .cutout-inner {
    height: 100%;
    border: 16px solid color.$bg;
    border-radius: 30px;
    margin: -16px;
  }
}
</style>
