import { useState } from 'react'

const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, handleCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
    subscribe: false,
  })
  const isTextareaDisabled = formData.text.length === 0

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onChangeCheckBox = (e) => {
    const name = e.target.name
    const checked = e.target.checked
    setFormData((prevState) => ({ ...prevState, [name]: checked }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(formData)
    setFormData({ name: '', email: '', text: '', subscribe: false })
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tên"
          onChange={handleInput}
          value={formData.name}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-gray-800"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Địa chỉ email"
          onChange={handleInput}
          value={formData.email}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-gray-800"
          required
        />
      </div>

      <div className="mb-4">
        <textarea
          id="text"
          name="text"
          placeholder="Bình luận"
          onChange={handleInput}
          value={formData.text}
          className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-gray-800"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          onChange={onChangeCheckBox}
          // value={formData.subscribe}
          checked={formData.subscribe}
          className="mr-2"
        />
        Đăng ký nhận bài viết mới nhất!
      </div>
      <div className="space-x-4 pb-4 ...">
        <button
          className="bg-primary-500 text-white font-medium py-2 px-6 rounded
        hover:bg-primary-700 dark:hover:bg-primary-400"
          disabled={isTextareaDisabled}
        >
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="bg-primary-500 text-white font-medium py-2 px-6 rounded
        hover:bg-primary-700 dark:hover:bg-primary-400"
            onClick={handleCancel}
          >
            Hủy
          </button>
        )}
      </div>
    </form>
  )
}

export default CommentForm
