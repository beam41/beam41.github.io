<template>
  <div class="bg" :style="{ background: '#' + palette[pal] }"></div>
</template>

<script>
import { randomInt } from '@/util/random'
import { mapState } from 'vuex'

export default {
  data: () => ({
    pal: null,
  }),
  computed: {
    ...mapState({
      palette: (store) => store.palette.currPalette,
    }),
  },
  mounted() {
    this.pal = randomInt(0, 2)
  },
}
</script>

<style lang="scss" scoped>
@use "./tile-size.scss";
.bg {
  width: tile-size.$width;
  height: tile-size.$height;
  flex-shrink: 0;
}
</style>
