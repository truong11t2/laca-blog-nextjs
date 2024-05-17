import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  console.log(typeof email)
  // Send to backend to store email
  try {
    const response = await fetch(process.env.BACKEND_ADDRESS + '/api/subscribe/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}
