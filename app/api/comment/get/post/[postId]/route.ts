export async function GET(request: Request) {
  const n = request.url.lastIndexOf('/')
  const postId = request.url.substring(n + 1)

  // only use with page.ts
  //const postId = request['params']['postId']
  try {
    const response = await fetch(process.env.BACKEND_ADDRESS + '/api/comment/' + postId + '/get')
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return error.message
  }
}
