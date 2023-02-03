import type { AsyncData, UseFetchOptions } from 'nuxt/dist/app/composables'

type Methods = 'GET' | 'POST'

export interface IResultData<T> {
  code: number
  data: T
}

const BASE_URL = 'http://codercba.com:9060/juanpi/api'

class MYRequest {
  // 类型 T 是返回结果的类型
  request<T = any>(
    url: string,
    method: Methods,
    data?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    const newOptions: UseFetchOptions<T> = {
      baseURL: BASE_URL,
      method: method,
      ...options
    }

    if (method === 'GET') {
      newOptions.query = data
    }

    if (method === 'POST') {
      newOptions.body = data
    }

    return new Promise((resolve, reject) => {
      useFetch<T>(url, newOptions as any)
        .then(res => {
          resolve(res as AsyncData<T, Error>)
        }).catch((error) => {
          reject(error)
        })
    })
  }

  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request(url, 'GET', params, options as any)
  }

  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request(url, 'GET', data, options as any)
  }
}

export default new MYRequest()