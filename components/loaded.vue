<template>
  <div :class="['loading-cover', { unload }]">
    <div class="loading-bg">
      <div class="loading">Welcome</div>
    </div>
  </div>
</template>

<script>
import { LOADING_OUT } from './tile/tile-setting'
export default {
  data: () => ({
    unload: false,
  }),
  mounted() {
    setTimeout(() => {
      this.unload = true
      this.$emit('unloaded')
    }, LOADING_OUT)
  },
  methods: {
    close() {
      this.$destroy()
      this.$root.$el.parentNode.removeChild(this.$root.$el)
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-cover {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background: #041e33;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  transition: top 0.25s;

  .loading-bg {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    overflow: hidden;
  }

  &.unload {
    top: -100%;
  }

  .loading {
    color: #041e33;
    width: 100px;
    padding: 4px 8px;
    font-weight: 700;
    font-size: 14px;
    user-select: none;
  }
}
</style>
