export async function PUT(request: Request) {
  const { _id, content } = await request.json()
  const updatedComment = {
    _id: _id,
    content: content,
  }
  console.log(updatedComment)
  try {
    const res = await fetch(process.env.BACKEND_ADDRESS + '/api/comment/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedComment),
    })
    const data = await res.json()
    return Response.json(data)
  } catch (err) {
    return err.message
  }
}
