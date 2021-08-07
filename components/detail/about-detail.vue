<template>
  <div class="cover" :style="{ height: coverHeight + 'px' }">
    <p ref="text" class="about-detail">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus
      vehicula, commodo mauris nec, suscipit est. Proin sit amet suscipit
      mauris. Quisque id tincidunt lacus. Nulla iaculis ex tellus, et
      ullamcorper augue pellentesque placerat. Aliquam turpis nisi, molestie non
      suscipit sit amet, dictum ac neque. Nullam semper, urna in feugiat
      facilisis, erat est laoreet libero, porttitor eleifend massa nisi et odio.
      Fusce luctus rhoncus magna, et ullamcorper sem. Praesent dictum elit a
      finibus egestas. Proin pretium vestibulum nunc nec venenatis. Ut sagittis
      mauris ac augue elementum, non tincidunt tortor molestie. Donec ultrices
      lorem id augue ultrices, non elementum augue scelerisque. Vivamus dui sem,
      tincidunt et sem ac, sollicitudin auctor justo. Proin accumsan quis orci
      vitae pellentesque. Sed rhoncus, nisl vulputate bibendum porttitor, risus
      nunc ornare turpis, eu cursus metus nulla in quam. Phasellus porttitor
      odio eu eros malesuada, vel eleifend nisi vehicula. Suspendisse at
      ullamcorper magna.
    </p>
  </div>
</template>

<script>
import { lerp, normalize } from '@/util/number'
export default {
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    forceUpdate: 0,
  }),
  computed: {
    coverHeight() {
      // eslint-disable-next-line no-unused-expressions
      this.forceUpdate
      const percentage = this.percentage
      if (this.$refs.text?.scrollHeight) {
        return lerp(
          0,
          this.$refs.text?.scrollHeight,
          normalize(0.2, 0.8, percentage)
        )
      }
      return 0
    },
  },
  mounted() {
    this.forceUpdate++
    window.addEventListener('resize', () => {
      this.forceUpdate++
    })
  },
}
</script>

<style lang="scss" scoped>
.about-detail {
  color: rgba(white, 0.65);
  max-width: 800px;
  padding: 0 16px;
  margin: 0;
}

.cover {
  overflow: hidden;
}
</style>
