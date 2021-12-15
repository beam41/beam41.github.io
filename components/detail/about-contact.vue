<template>
  <div :class="['contact-box', { visible }]">
    <a href="https://github.com/beam41" class="gh"><GithubSvg /></a>
    <a href="https://gitlab.com/beam41" class="gl"><GitlabSvg /></a>
    <a href="https://www.linkedin.com/in/phumdol/" class="li"
      ><LinkedinSvg
    /></a>
  </div>
</template>

<script>
import LinkedinSvg from '~/assets/svg/linkedin.svg?inline'
import GithubSvg from '~/assets/svg/github.svg?inline'
import GitlabSvg from '~/assets/svg/gitlab.svg?inline'
export default {
  components: {
    GithubSvg,
    GitlabSvg,
    LinkedinSvg,
  },
  props: {
    visible: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" scoped>
@use "~assets/styles/color";
.contact-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  opacity: 0;
  transition: opacity 0.25s;
  & > a {
    display: flex;
    margin: 0 8px;

    & path {
      fill: rgba(255, 255, 255, 0.65);
      transition: fill 0.25s;
    }

    &.gh:hover path {
      fill: rgb(20, 25, 30);
    }

    &.gl:hover path {
      fill: #f96424;
    }

    &.li:hover path {
      fill: rgb(0, 119, 183);
    }
  }

  &.visible {
    opacity: 1;
    transition: opacity 0.5s;
  }
}
</style>
