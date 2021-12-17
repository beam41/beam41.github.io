<template>
  <main :class="['main', { loading }]">
    <Loaded @unloaded="loading = false" />
    <Title />
    <Detail />
  </main>
</template>

<script>
export default {
  data: () => ({ loading: true }),
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";

.main {
  min-height: 100vh;
  width: 100%;
}

.loading {
  height: 100vh;
  overflow: hidden;
}
</style>
