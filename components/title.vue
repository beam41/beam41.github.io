<template>
<div class="title-cover">
  <div class="flex">
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
  </div>
  <div class="flex">
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
    <TileCutout/>
  </div>

  <h1 class="title">Phumdol</h1>
</div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 10vw;
  color: white;
  margin: 0;
}
.flex {
  display: flex;
  border: 8px solid white;

  &:before, &:after {
    content: '';
    flex: 1;
    background: white;
  }
}
</style>
