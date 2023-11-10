'use client'
import { useRef, useState } from 'react'
import { jsxs, jsx } from 'react/jsx-runtime'

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value))
      } catch (e) {
        reject(e)
      }
    }
    var rejected = (value) => {
      try {
        step(generator.throw(value))
      } catch (e) {
        reject(e)
      }
    }
    var step = (x) =>
      x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected)
    step((generator = generator.apply(__this, __arguments)).next())
  })
}
var NewsletterForm = ({ title = 'Subscribe to the newsletter', apiUrl = '/api/newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const subscribe = (e) =>
    __async(void 0, null, function* () {
      e.preventDefault()
      const res = yield fetch(apiUrl, {
        body: JSON.stringify({
          email: inputEl.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      const { error: error2 } = yield res.json()
      if (error2) {
        setError(true)
        setMessage('Địa chỉ email không đúng hoặc bạn đã đăng ký')
        return
      }
      inputEl.current.value = ''
      setError(false)
      setSubscribed(true)
    })
  return /* @__PURE__ */ jsxs('div', {
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100',
        children: title,
      }),
      /* @__PURE__ */ jsxs('form', {
        className: 'flex flex-col sm:flex-row',
        onSubmit: subscribe,
        children: [
          /* @__PURE__ */ jsx('div', {
            children: /* @__PURE__ */ jsxs('label', {
              htmlFor: 'email-input',
              children: [
                /* @__PURE__ */ jsx('span', { className: 'sr-only', children: 'Email address' }),
                /* @__PURE__ */ jsx('input', {
                  autoComplete: 'email',
                  className:
                    'focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black',
                  id: 'email-input',
                  name: 'email',
                  placeholder: subscribed ? 'Bạn đã đăng ký!  \u{1F389}' : 'Nhập địa chỉ email',
                  ref: inputEl,
                  required: true,
                  type: 'email',
                  disabled: subscribed,
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3',
            children: /* @__PURE__ */ jsx('button', {
              className: `bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ${
                subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
              } focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`,
              type: 'submit',
              disabled: subscribed,
              children: subscribed ? 'Cảm ơn bạn!' : 'Đăng ký',
            }),
          }),
        ],
      }),
      error &&
        /* @__PURE__ */ jsx('div', {
          className: 'w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96',
          children: message,
        }),
    ],
  })
}
var NewsletterForm_default = NewsletterForm

export { NewsletterForm_default as default }
