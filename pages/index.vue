<template>
  <main class="main">
    <Title />
  </main>
</template>

<script>
import { debounce } from '@/util/debounce'
export default {
  created() {
    this.$store.commit('screen/init')
  },
  mounted() {
    window.addEventListener(
      'resize',
      debounce(() => {
        this.$store.commit('screen/init')
      })
    )
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";

.main {
  height: 100vh;
  width: 100vw;
  background: color.$bg;
}
</style>
