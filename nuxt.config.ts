import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Phumdol',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Phumdol Profile Website',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['normalize.css/normalize.css', '@/assets/css/index.scss'],
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: [400, 700],
        },
      },
    ],
  ],
})
