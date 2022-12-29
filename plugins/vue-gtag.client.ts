import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  console.log(process.env.NODE_ENV)
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-5KNT5HZ7PT',
    },
    isEnabled: process.env.NODE_ENV !== 'development',
  })
})
