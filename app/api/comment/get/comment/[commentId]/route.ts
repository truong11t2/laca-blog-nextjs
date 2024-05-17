export async function GET(request: Request) {
  const n = request.url.lastIndexOf('/')
  const commentId = request.url.substring(n + 1)
  try {
    const response = await fetch(process.env.BACKEND_ADDRESS + '/api/comment/get/' + commentId)
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return error.message
  }
}
