import myRequest from './index'

import type { IResultData } from './index'

export const fetchHomeInfoData = () => {
  return myRequest.get<IResultData<any>>('/homeInfo')
}