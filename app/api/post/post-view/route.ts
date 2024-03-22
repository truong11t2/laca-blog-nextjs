import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { postId } = await request.json()
  //console.log('post view: ', postId)
  try {
    const response = await fetch('http://localhost:5000/api/post/post-view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId: postId }),
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}
