export async function POST(request: Request) {
  const { postId, parentId, content, email, name } = await request.json()
  const comment = {
    postId: postId,
    parentId: parentId,
    content: content,
    email: email,
    name: name,
  }
  //console.log(comment)
  try {
    const res = await fetch('http://app:5000/api/comment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
    const data = await res.json()
    return Response.json(data)
  } catch (err) {
    return err.message
  }
}
