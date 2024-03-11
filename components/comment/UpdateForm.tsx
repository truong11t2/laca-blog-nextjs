import { useEffect, useState } from 'react'
import { getComment } from './api'

const UpdateForm = ({
  commentId,
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
}) => {
  const [formData, setFormData] = useState({
    content: '',
  })
  const isTextareaDisabled = formData.content.length === 0

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(formData.content)
    setFormData({ content: '' })
  }

  useEffect(() => {
    getComment(commentId).then((comment) => {
      setFormData(comment)
    })
  }, [commentId])

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <textarea
          id="text"
          name="content"
          placeholder="Cập nhật"
          onChange={handleInput}
          value={formData.content}
          className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-gray-800"
          required
        />
      </div>
      <div className="space-x-4 ...">
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

export default UpdateForm
