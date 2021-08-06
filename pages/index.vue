<template>
  <main class="main">
    <Title />
    <Detail />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";

.main {
  min-height: 100vh;
  width: 100%;
  background: color.$bg;
}
</style>
