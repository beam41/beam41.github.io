<template>
  <p class="about">
    My name is Phumdol Lookthipnapha, a software engineer based in Chiang Mai,
    Thailand. I have experience in full-stack web development.
  </p>
  <div class="contact">
    <component
      v-for="contact in contactList"
      :is="contact.href ? 'a' : 'div'"
      :class="contact.className"
      :href="contact.href"
      :target="contact.href && '_blank'"
      :rel="contact.href && 'noopener'"
    >
      <component :is="contact.icon" />
      <span>{{ contact.text }}</span>
    </component>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { SvgEmail, SvgGithub, SvgGitlab, SvgLinkedin } from '#components'

type Contact = {
  className: string
  icon: Component
  href?: string
  text: string
}

const contactList: Contact[] = [
  {
    className: 'em',
    icon: SvgEmail,
    text: 'phumdol.l@gmail.com',
  },
  {
    className: 'li',
    icon: SvgLinkedin,
    href: 'https://www.linkedin.com/in/phumdol/',
    text: 'Phumdol Lookthipnapha',
  },
  {
    className: 'gh',
    icon: SvgGithub,
    href: 'https://github.com/beam41/',
    text: 'beam41',
  },
  {
    className: 'gl',
    icon: SvgGitlab,
    href: 'https://gitlab.com/beam41',
    text: 'beam41',
  },
]
</script>

<style lang="scss" scoped>
.about {
  margin: 0 0 24px;
}

.contact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
  gap: 8px;
  margin: 0 64px;

  & > a:hover {
    color: white;
    transition: background 0s;
  }

  & > * {
    border-radius: 4px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(74, 74, 74);
    text-decoration: none;
    transition: background 250ms ease-in-out;
    font-size: 0.9em;

    &.em {
      background: rgba(black, 0.05);
    }

    &.li {
      background: rgba(rgb(0, 119, 183), 0.05);
      &:hover {
        background: rgba(rgb(0, 119, 183), 1);
      }
    }

    &.gh {
      background: rgba(rgb(20, 25, 30), 0.05);
      &:hover {
        background: rgba(rgb(20, 25, 30), 1);
      }
    }

    &.gl {
      background: rgba(#f96424, 0.05);
      &:hover {
        background: rgba(#f96424, 1);
      }
    }
    svg {
      width: 24px;
      height: 24px;
      margin-top: -2px;
      margin-right: 4px;
    }
  }

  & > a {
    user-select: none;
  }
}

@media screen and (max-width: 400px) {
  .contact {
    margin: 0;
  }
}
</style>
