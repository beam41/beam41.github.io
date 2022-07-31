import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true
  },
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/index.scss',
  ],
})
