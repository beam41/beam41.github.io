<template>
  <main class="main">
    <Title />
  </main>
</template>

<script>
export default {
  created() {
    this.$store.commit('screen/initScreenWidth')
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
