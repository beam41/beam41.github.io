<template>
  <div
    class="bg"
    :style="{
      background: '#' + palette[pal],
      width: screen.tileWidth + 'px',
      height: screen.tileHeight + 'px',
    }"
  ></div>
</template>

<script>
import { randomInt } from '@/util/random'
import { mapState } from 'vuex'

export default {
  props: {
    screen: {
      type: Object,
      required: true,
    },
  },
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
.bg {
  flex-shrink: 0;
}
</style>
