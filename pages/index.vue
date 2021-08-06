<template>
  <main class="main">
    <Title />
    <Detail />
  </main>
</template>

<script>
export default {
  created() {
    this.$store.commit('screen/init')
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.$store.commit('screen/init')
    })
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";

.main {
  min-height: 100vh;
  width: 100%;
  background: color.$bg;
}
</style>
