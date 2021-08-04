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
  &:before, &:after {
    content: '';
    width: 8px;
    background: white
  }

  .cutout-inner {
    box-sizing: border-box;
    height: calc(100% + 16px);
    width: 100%;
    border: 8px solid white;
    border-radius: 20px;
    margin: -8px;

  }
}
</style>
