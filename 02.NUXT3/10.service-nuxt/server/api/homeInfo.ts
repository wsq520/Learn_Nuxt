export default defineEventHandler((event) => {
  const { req, res } = event.node
  // console.log(req)
  // console.log(res)

  return {
    code: 200,
    data: {
      name: 'hhh123',
      age: 20
    }
  }
})