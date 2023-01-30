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
  },
  app: {
    // 给 app 所有页面的head添加的配置(可以SEO优化、添加外部资源)
    head: {
      title: 'WSQ123',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no',
      meta: [
        {
          name: 'keywords',
          content: 'WSQ123'
        },
        {
          name: 'description',
          content: 'WSQ234'
        }
      ],
      // 站点图标
      link: [
        {
          rel: 'shortcut icon',
          href: 'favicon.ico',
          type: 'image/x-icon'
        }
      ],
      style: [
        {
          children: `body{ color: red }`
        }
      ],
      script: [
        {
          src: 'http://wsq123.com'
        }
      ]
    }
  }
})
