<template>
  <div class="cover" :style="{ height: coverHeight + 'px' }">
    <p ref="text" class="about-detail">
      I'm a software engineer based in Chiang Mai, Thailand.
      <br />
      I have knowledge in front-end development and back-end development with
      Vue, React, Angular, Node.js, and ASP.NET.
      <br />
      I'm also familiar with Python and Java.
      <br />
      <Contact :visible="percentage > 0.9" />
    </p>
  </div>
</template>

<script>
import { lerp, normalize } from '@/util/number'
import Contact from './about-contact.vue'
export default {
  components: { Contact },
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    scrollHeight: 0,
  }),
  computed: {
    coverHeight() {
      const percentage = this.percentage
      if (this.scrollHeight) {
        return lerp(0, this.scrollHeight, normalize(0.2, 0.8, percentage))
      }
      return 0
    },
  },
  mounted() {
    this.scrollHeight = this.$refs.text?.scrollHeight
    window.addEventListener('resize', () => {
      this.scrollHeight = this.$refs.text?.scrollHeight
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
  text-align: center;
}

.cover {
  overflow: hidden;
}
</style>
