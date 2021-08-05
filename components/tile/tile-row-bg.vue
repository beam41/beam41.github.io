<template>
  <div class="row" :style="{ marginLeft: Math.min(0, offset) + 'px' }">
    <div class="offsetter" :style="{ width: Math.max(0, offset) + 'px' }"></div>
    <TileBg v-for="i in count" :key="i" />
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";
.row {
  display: flex;

  .offsetter {
    flex-shrink: 0;
  }
}
</style>
