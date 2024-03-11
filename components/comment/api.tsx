import { NextResponse } from 'next/server'

export const createComment = async (postId: string, parentId = null, content) => {
  const comment = {
    postId: postId,
    parentId,
    content: content.text,
    email: content.email,
    name: content.name,
  }
  try {
    const res = await fetch('http://localhost:5000/api/comment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
    const data = await res.json()
    return data
  } catch (err) {
    return err.message
  }
}

export const getComments = async (postId: string) => {
  try {
    const res = await fetch('http://localhost:5000/api/comment/' + postId + '/get')
    const data = await res.json()
    return data
  } catch (err) {
    return err.message
  }
}

export const updateComment = async (commentId: string, content: string) => {
  const updatedComment = {
    _id: commentId,
    content: content,
  }
  try {
    const res = await fetch('http://localhost:5000/api/comment/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedComment),
    })
    const data = await res.json()
    return data
  } catch (err) {
    return err.message
  }
}

export const getComment = async (commentId: string) => {
  try {
    const res = await fetch('http://localhost:5000/api/comment/get/' + commentId)
    const data = await res.json()
    return data
  } catch (err) {
    return err.message
  }
}

export const deleteComment = async (commentId: string) => {
  try {
    const res = await fetch('http://localhost:5000/api/comment/delete/' + commentId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    return data
  } catch (err) {
    return err.message
  }
}

export const deleteComments = async (postId: string) => {
  try {
    const res = await fetch('http://localhost:5000/api/comment/delete/post/' + postId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    return data
  } catch (err) {
    return err.message
  }
}
