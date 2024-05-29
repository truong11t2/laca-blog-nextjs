'use client'
import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Gallery = ({ images }) => {
  return (
    <div className="not-prose">
      <ImageGallery items={images} />
    </div>
  )
}

export default Gallery
