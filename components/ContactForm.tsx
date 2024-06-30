'use client'

import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useRouter } from 'next/navigation'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  })

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState('')
  const { push } = useRouter()

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    //Don't want the page to refresh
    e.preventDefault()

    // const url = e.target.action
    // const data = new FormData()

    //Turn form data state into data that can use with a form submission
    // Object.entries(formData).forEach(([key, value]) => {
    //   data.append(key, value)
    // })
    // console.log(formData)

    //POST the data to backend
    // fetch(url, {
    //   method: 'POST',
    //   body: data,
    //   headers: {
    //     accept: 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setFormData({
    //       name: '',
    //       email: '',
    //       message: '',
    //     })

    //     setFormSuccess(true)
    //     setFormSuccessMessage(data.submission_text)
    //   })
    emailjs
      .send('service_6hrop65', 'template_f1t5d0h', formData, 'Jtxa3U7Qevz5rqAc1')
      .then((res) => {
        // console.log(res)
        setFormSuccess(true)
        setFormSuccessMessage('Email đã gửi đi. Mình sẽ sớm liên hệ với bạn.')
        setFormData({
          name: '',
          email: '',
          text: '',
        })
      })
      .catch((error) => {
        setFormSuccess(false)
        setFormSuccessMessage('Có lỗi xảy ra. Vui lòng thử lại sau.')
      })
  }

  return (
    <div className="container max-w-screen-md mx-auto">
      {formSuccess ? (
        <div>{formSuccessMessage}</div>
      ) : (
        <form /* method="POST" action="/api/config/emailjs" */ onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInput}
              value={formData.name}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              value={formData.email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="text" className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Thông điệp
            </label>
            <textarea
              id="text"
              name="text"
              onChange={handleInput}
              value={formData.text}
              className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <button type="submit" className="bg-primary-500 text-white px-4 py-2 rounded-lg">
              Gửi đi
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default ContactForm
