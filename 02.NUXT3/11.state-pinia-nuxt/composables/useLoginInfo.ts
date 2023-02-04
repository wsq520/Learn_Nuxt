export const useLoginInfo = () => {
  return useState('loginInfo', () => {
    return {
      name: '高启强',
      age: 19,
      sex: '男'
    }
  })
}