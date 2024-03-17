// // need to test this function
// export async function DELETE(request: Request) {
//   const n = request.url.lastIndexOf('/')
//   const postId = request.url.substring(n + 1)
//   try {
//     const res = await fetch('http://app:5000/api/comment/delete/post/' + postId, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     const data = await res.json()
//     return Response.json(data)
//   } catch (err) {
//     return err.message
//   }
// }
