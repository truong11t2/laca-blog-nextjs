'use client'

const storeCurrentUrl = () => {
  const previousPageUrl = window.location.href
  console.log(previousPageUrl)
  localStorage.setItem('previousPage', JSON.stringify(previousPageUrl))
}

export default storeCurrentUrl
