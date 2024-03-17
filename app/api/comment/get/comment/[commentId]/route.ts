export async function GET(request: Request) {
  const n = request.url.lastIndexOf('/')
  const commentId = request.url.substring(n + 1)

  try {
    const response = await fetch('http://app:5000/api/comment/get/' + commentId)
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return error.message
  }
}
