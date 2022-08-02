<template>
  <hr class="divider" />
  <div ref="contentObserver">
    <section
      :class="[
        'content',
        { hidden: !visible },
        { 'overridden-hidden': visible && !overrideVisible },
      ]"
    >
      <h1 class="content-header">
        <span>{{ title }}</span>
      </h1>
      <div class="content-body-wrapper">
        <div class="content-body">
          <slot></slot>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
})

const contentObserver = ref<Element>()
const visible = ref(false)
const overrideVisible = ref(false)

onMounted(() => {
  let observer = new IntersectionObserver(
    (entries) => {
      if (!visible.value) visible.value = entries[0].isIntersecting
    },
    {
      rootMargin: '-10% 0px',
      threshold: 1,
    }
  )
  observer.observe(contentObserver.value!)

  overrideVisible.value = window.scrollY > 32
  window.addEventListener('scroll', () => {
    overrideVisible.value = window.scrollY > 32
  })
})
</script>

<style lang="scss" scoped>
.divider {
  height: 2px;
  border-width: 0;
  background-color: rgb(207, 207, 207);
  margin: 0 auto;
  width: 50%;
  min-width: 400px;
}
.content {
  position: relative;
  transition: all 250ms ease-in;
  .content-header {
    margin: 0;
    position: absolute;
    width: 100%;
    text-align: center;
    transform: translateY(calc(-50% - 4px));
    color: rgb(71, 71, 71);

    & > span {
      background: white;
      padding: 0 2px;
    }
  }
  .content-body-wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    width: 50%;
    min-width: 400px;
    padding: 48px 16px 80px;
    text-align: center;

    .content-body {
      margin: auto;
      max-width: 600px;
    }
  }

  &.hidden {
    opacity: 0;
    transform: translateY(25px);
    transition: all 250ms ease-out;
  }

  &.overridden-hidden {
    opacity: 0;
    transition: all 250ms ease-out;
  }
}
</style>
