'use client'
const PageView = ({ postId, update }) => {
  // get page views from backend
  const getPageView = async () => {
    // send request to backend
    //console.log('postId is: ', postId)
    try {
      if (update === true) {
        const res = await fetch('/api/post/post-view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postId: postId }),
          //cache: 'no-store',
        })
        const data = await res.json()
        return data
      }
      // else {
      //   console.log('entered post-view-read')
      //   const res = await fetch('/api/post/post-view-read', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ postId: postId }),
      //     cache: 'no-store',
      //   })
      //   const data = await res.json()
      //   return data
      // }
    } catch (err) {
      return err.message
    }
  }
  return <p>{getPageView()}</p>
}

export default PageView
