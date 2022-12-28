import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.dev) return
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-5KNT5HZ7PT',
    },
  })
})
