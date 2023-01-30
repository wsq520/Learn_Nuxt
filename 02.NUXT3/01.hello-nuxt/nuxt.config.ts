// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    appKey: 'aabbcc',
    public: {
      baseURL: 'http://wsq123.com'
    }
  },
  appConfig: {
    title: 'Hello Nuxt3',
    theme: {
      primary: 'green'
    }
  }
})
