import CommentForm from './CommentForm'
import UpdateForm from './UpdateForm'

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  // currentUser,
}) => {
  const isEditing =
    activeComment && activeComment._id === comment._id && activeComment.type === 'editing'
  const isReplying =
    activeComment && activeComment._id === comment._id && activeComment.type === 'replying'
  const fiveMinutes = 300000
  const date1 = new Date()
  const date2 = new Date(comment.createdAt)
  const timePassed = date1.getTime() - date2.getTime() > fiveMinutes
  // const canDelete =
  //   currentUser === null
  //     ? false
  //     : (currentUser.email === comment.email && replies.length === 0 && !timePassed) ||
  //       currentUser.isAdmin
  const canDelete = false
  // const canReply = Boolean(currentUser)
  const canReply = true
  // const canEdit = currentUser === null ? false : currentUser.email === comment.email && !timePassed
  const canEdit = !timePassed
  const replyId = parentId ? parentId : comment._id
  const createdAt = new Date(comment.createdAt).toLocaleDateString()
  return (
    <div key={comment._id} className="comment">
      <div className="comment-image-container">{/* <img src="/user-icon.png" /> */}</div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.name}</div>
          <div className="comment-date">{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.content}</div>}
        {isEditing && (
          <UpdateForm
            commentId={comment._id}
            submitLabel="Cập nhật"
            hasCancelButton
            // handleSubmit={(text) => updateComment(text, comment._id, currentUser)}
            handleSubmit={(content) => updateComment(content, comment._id)}
            handleCancel={() => {
              setActiveComment(null)
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              role="button"
              tabIndex={0}
              onClick={() => setActiveComment({ _id: comment._id, type: 'replying' })}
              onKeyDown={() => setActiveComment({ _id: comment._id, type: 'replying' })}
            >
              Trả lời
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              role="button"
              tabIndex={0}
              onClick={() => setActiveComment({ _id: comment._id, type: 'editing' })}
              onKeyDown={() => setActiveComment({ _id: comment._id, type: 'editing' })}
            >
              Chỉnh sửa
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              role="button"
              tabIndex={0}
              // onClick={() => deleteComment(comment._id, currentUser)}
              onClick={() => deleteComment(comment._id)}
              // onKeyDown={() => deleteComment(comment._id, currentUser)}
              onKeyDown={() => deleteComment(comment._id)}
            >
              Xóa
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Trả lời"
            hasCancelButton
            handleSubmit={(content) => addComment(content, replyId)}
            // handleCancel={undefined}
            handleCancel={() => {
              setActiveComment(null)
            }}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply._id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment._id}
                replies={[]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment
