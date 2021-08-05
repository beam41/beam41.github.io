<template>
  <div class="row">
    <div
      class="offsetter"
      :style="{ width: offset + (isNaN(offset) ? '' : 'px') }"
    ></div>
    <TileCutout v-for="i in count" :key="i" />
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
      type: [Number, String],
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";
.row {
  position: relative;
  display: flex;

  &:after {
    content: '';
    flex: 1;
  }

  &:after,
  .offsetter {
    background: color.$bg;
  }
}
</style>
