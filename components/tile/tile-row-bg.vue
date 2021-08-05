<template>
  <div class="row">
    <div :style="{ width: offset + (isNaN(+offset) ? '' : 'px') }"></div>
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
      type: [Number, String],
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";
.row {
  display: flex;
}
</style>
