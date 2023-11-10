'use client'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'

const LoginSuccess = () => {
  const params = useParams()
  const serverToken = params.token

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = { token: serverToken }
      console.log(token)
      localStorage.setItem('userInfo', JSON.stringify(token))
      const previousPage = localStorage.getItem('previousPage')
      if (previousPage) {
        const previousPageUrl = JSON.parse(previousPage)
        //console.log(previousPageUrl);
        window.location.replace(previousPageUrl)
      }
    }
  }, [])

  return (
    <div className="container py-12">
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Đăng nhập thành công! Vui lòng chờ chuyển trang.
      </p>
    </div>
  )
}

export default LoginSuccess
