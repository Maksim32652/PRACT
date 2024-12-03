// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' }
      ],
      // bodyAttrs: {
      //   class: 'd-flex flex-co;umn h-100'
      // },
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose',
        }
      ]
    },
    // rootAttrs: {
    //   class: 'd-flex flex-co;umn h-100'
    // }
  }
})

