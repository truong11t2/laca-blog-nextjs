'use client'

import { NextResponse } from 'next/server'
import { useState } from 'react'

const EmailSignupForm = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email)
    // sending the email to api.
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })
      return NextResponse.json(response)
    } catch (error) {
      /* empty */
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Nhập địa chỉ email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit">Đăng ký</button>
    </form>
  )
}

export default EmailSignupForm
