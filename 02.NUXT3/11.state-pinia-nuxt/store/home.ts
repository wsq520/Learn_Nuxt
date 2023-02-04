import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      counter: 100,
      homeInfo: {}
    }
  },
  actions: {
    increment() {
      this.counter++
    },
    async fetchHomeData() {
      const { data } = await useFetch('http://codercba.com:9060/juanpi/api/homeInfo')
      console.log(data.value)
      this.homeInfo = data.value as any
    }
  }
})