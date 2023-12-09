'use client'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share'

export function FacebookShare({ url, quote, hashtag }) {
  return (
    <FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  )
}

export function TwitterShare({ url, title }) {
  return (
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  )
}

export function EmailShare({ url, subject, body }) {
  return (
    <EmailShareButton url={url} subject={subject} body={body}>
      <EmailIcon size={32} round />
    </EmailShareButton>
  )
}

export function LinkedInShare({ url }) {
  return (
    <LinkedinShareButton url={url}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
  )
}
