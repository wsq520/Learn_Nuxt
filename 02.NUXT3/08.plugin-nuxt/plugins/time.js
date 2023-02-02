export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      formatTime: (time) => {
        return '2023-02-02 15:35:00'
      }
    }
  }
})