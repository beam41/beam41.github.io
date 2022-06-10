<template>
  <div class="head">
    <div class="ball-cover">
      <MetaBall />
    </div>

    <div class="img-cover">
      <img src="@/assets/img/profile.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';

.head {
  height: 300px;

  position: relative;

  .ball-cover {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
  }
  padding-bottom: 8px;
}

.img-cover {
  position: absolute;
  left: calc(50% - math.div(216px, 2));
  bottom: -1 * math.div(216px, 2) + 4px;
  width: 216px;
  height: 216px;
  background: rgba(200, 200, 200, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  backdrop-filter: blur(4px);
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
</style>
