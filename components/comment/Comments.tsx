'use client'
import { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from './api'
// import { Link as ReactLink } from 'react-router-dom'
// import { Link } from '@chakra-ui/react'

const CommentSection = ({ postId }) => {
  const [backendComments, setBackendComments] = useState<object[]>([])
  const [activeComment, setActiveComment] = useState(null)
  const rootComments = backendComments.filter(
    (backendComment) => backendComment['parentId'] === null
  )

  const getReplies = (commentId: string) =>
    backendComments
      .filter((backendComment) => backendComment['parentId'] === commentId)
      .sort((a, b) => a['createdAt'] - b['createdAt'])

  const addComment = (content, parentId) => {
    createCommentApi(postId, parentId, content).then((comment) => {
      setBackendComments([comment, ...backendComments])
      setActiveComment(null)
    })
  }

  const updateComment = (text: string, commentId: string) => {
    updateCommentApi(commentId, text).then((comment) => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment['_id'] === commentId) {
          return { ...backendComment, content: text }
        }
        return backendComment
      })
      setBackendComments(updatedBackendComments)
      setActiveComment(null)
    })
  }

  const deleteComment = (commentId: string) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment['_id'] !== commentId
        )
        setBackendComments(updatedBackendComments)
      })
    }
  }

  //Get data once when loading post
  useEffect(() => {
    // async function fetchData() {
    //   // You can await here
    //   const response = await getCommentsApi(postId)
    //   console.log('response: ', response)
    //   // ...
    //   setBackendComments(response)
    //   console.log('backendComments: ', backendComments)
    // }
    // fetchData()
    getCommentsApi(postId).then((comment) => {
      setBackendComments(comment)
    })
  }, [])

  const storeCurrentUrl = () => {
    const previousPageUrl = window.location.href
    console.log(previousPageUrl)
    localStorage.setItem('previousPage', JSON.stringify(previousPageUrl))
  }

  return (
    <div className="comments">
      {/*       {currentUser ? (*/}
      <div>
        <div className="comments-title text-left">Bình luận</div>
        <div className="comment-form-title text-left pb-2">
          Các câu hỏi, cập nhật địa điểm và chuyến đi đều được chào đón. Tuy nhiên, hãy giữ bình
          luận lịch sự và đúng chủ đề. Xem thêm
          <a
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Nghi thuc binh luan"
            href="/blog/cap-nhat-thong-tin-tinh-chinh-xac#nghi-thức-bình-luận"
          >
            {' '}
            nghi thức bình luận{' '}
          </a>
          để biết thêm chi tiết.
        </div>
        <CommentForm submitLabel="Gửi" handleSubmit={addComment} handleCancel={undefined} />
      </div>
      {/* ) : (
        <div className="comment-form-title">
          Vui lòng{' '}
          <Link as={ReactLink} to={`/login`} color={'blue.500'} onClick={storeCurrentUrl}>
            đăng nhập
          </Link>{' '}
          để bình luận
        </div>
      )} */}
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment['_id']}
            comment={rootComment}
            replies={getReplies(rootComment['_id'])}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
  )
}

export default CommentSection
