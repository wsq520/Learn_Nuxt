export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const method = getMethod(event)
  const body = await readBody(event)
  // console.log(query, method, body)

  return {
    code: 200,
    data: {
      name: 'hhh123-post',
      age: 20,
      sex: 'man',
      token: 'aabbcc'
    }
  }
})