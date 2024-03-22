import { ReactNode } from 'react'
import { CoreContent } from '@/components/pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import NewsletterForm from '@/components/pliny/ui/NewsletterForm'
import {
  EmailShare,
  FacebookShare,
  LinkedInShare,
  TwitterShare,
} from '@/components/social-share/SocialShare'

import CommentSection from '@/components/comment/Comments'
import '@/components/comment/comment.css'
// import PageView from '@/components/page-view/PageView'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, id, title, tags, readingTime, summary, lastmod } = content
  const basePath = path.split('/')[0]

  return (
    <div>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={lastmod}>
                      {new Date(lastmod).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              {/* <div className="space-x-2 flex items-center justify-center text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  width="15"
                  height="15"
                  viewBox="0 0 512 512"
                >
                  <path d="M256,448a32,32,0,0,1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63,114.52,98.46,64,159.08,64c44.08,0,74.61,24.83,92.39,45.51a6,6,0,0,0,9.06,0C278.31,88.81,308.84,64,352.92,64,413.54,64,463.37,114.52,464,176.64c.54,54.21-18.63,104.26-58.61,153-18.77,22.87-52.8,59.45-131.39,112.8A32,32,0,0,1,256,448Z"></path>
                </svg>
                <PageView postId={id} update={true} />
              </div> */}
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="py-2 space-x-4 flex items-right justify-center">
            <FacebookShare
              url={'https://laca.fun/' + content.path}
              quote={content.title}
              hashtag={undefined}
            />
            <TwitterShare url={'https://laca.fun/' + content.path} title={content.title} />
            <LinkedInShare url={'https://laca.fun/' + content.path} />
            <EmailShare
              url={'https://laca.fun/' + content.path}
              subject={content.title}
              body={summary}
            />
          </div>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              <div className="py-2 space-x-4 flex items-left justify-left">
                <p>Chia sẻ bài viết:</p>
                <FacebookShare
                  url={'https://laca.fun/' + content.path}
                  quote={content.title}
                  hashtag={undefined}
                />
                <TwitterShare url={'https://laca.fun/' + content.path} title={content.title} />
                <LinkedInShare url={'https://laca.fun/' + content.path} />
                <EmailShare
                  url={'https://laca.fun/' + content.path}
                  subject={content.title}
                  body={summary}
                />
              </div>
              <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="pb-2 font-semibold text-lg">
                  Nếu bạn thấy bài viêt này hữu ích. Bạn có thể tiếp thêm động lực cho mình.
                </p>
                <div className="grid grid-cols-2 gap-4 place-items-center h-30 ...">
                  <div>
                    <Link href="https://www.buymeacoffee.com/truong11t2W">
                      <Image
                        src={`/static/img/mua-ly-ca-phe.png`}
                        alt={'Mua tôi ly cà phê'}
                        width={150}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div>
                    <Image
                      src={`/static/img/momo-bar-code.jpg`}
                      alt={'Ví momo'}
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center mx-2 my-12">
                  <NewsletterForm
                    title="Nhận bài viết mới nhất qua mail"
                    apiUrl="/api/newsletter"
                  />
                </div>
                {/* <Link href={discussUrl(path)} rel="nofollow">
                  Thảo luận trên Twitter
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>Xem trên GitHub</Link> */}
              </div>
              <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300">
                <CommentSection postId={id} />
              </div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Thẻ
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Bài Viết Trước
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Bài Viết Sau
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the blog"
                >
                  &larr; Trở về Blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  )
}
