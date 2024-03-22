'use client'
const PageViewClient = (postId) => {
  // get page views from backend
  const getPageViewClient = async () => {
    // send request to backend
    try {
      const res = await fetch('/api/post/post-view-read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId: postId }),
        //cache: 'no-store',
      })
      //console.log(JSON.stringify({ postId: postId }))
      const data = await res.json()
      return data
    } catch (err) {
      return err.message
    }
  }
  return <p>{getPageViewClient()}</p>
}

export default PageViewClient
