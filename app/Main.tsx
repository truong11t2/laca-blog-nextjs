import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from '@/components/pliny/ui/NewsletterForm'
import Image from '@/components/Image'
// import PageViewClient from '@/components/page-view/PageViewClient'

const MAX_DISPLAY = 10

export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
        <div className="pt-6 mr-0">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Xin chào!
          </h1>
          <text className="text-lg prose text-gray-600 dark:text-gray-400">
            {`Chào mừng đến với ${siteMetadata.title} - ${siteMetadata.description}. Nếu bạn có bất kỳ câu hỏi hay những đề xuất, có thể liên hệ mình `}
            <Link href="/contact">tại đây</Link>
            {
              '. Tất cả bài viết là độc lập, không có bất cứ sự chi phối nào và được liệt kê ở liên kết '
            }
            <Link href="/blog">này</Link>
            {'. Hi vọng bạn tìm thấy những điều bổ ích!'}
          </text>
        </div>
        {/* <div className="flex items-center justify-center mx-2 my-12 w-[300px] sm:w-[400px] md:w-[550px]">
          <NewsletterForm
            title="Nhận bài viết mới nhất qua mail"
            apiUrl="http://app:5000/api/subscribe/email"
          />
        </div> */}
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Mới nhất
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'Không tìm thấy bài viết.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, id, title, images, summary, tags, lastmod } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={lastmod}>{formatDate(lastmod, siteMetadata.locale)}</time>
                      </dd>
                      {/* <dt className="sr-only">Views</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <div className="flex px-10 flex items-center">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="red"
                              width="15"
                              height="15"
                              viewBox="0 0 512 512"
                            >
                              <path d="M256,448a32,32,0,0,1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63,114.52,98.46,64,159.08,64c44.08,0,74.61,24.83,92.39,45.51a6,6,0,0,0,9.06,0C278.31,88.81,308.84,64,352.92,64,413.54,64,463.37,114.52,464,176.64c.54,54.21-18.63,104.26-58.61,153-18.77,22.87-52.8,59.45-131.39,112.8A32,32,0,0,1,256,448Z"></path>
                            </svg>
                          </div>
                          <div className="px-3">
                            <PageView postId={id} update={false} />
                            <PageViewClient postId={id} />
                          </div>
                        </div>
                      </dd> */}
                    </dl>
                    <div className="space-y-0 xl:col-span-2">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div>
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {images && (
                              <Image
                                src={images[0]}
                                className="object-cover object-center md:h-64 lg:h-72"
                                alt={title}
                                width="500"
                                height="600"
                              />
                            )}
                          </Link>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Xem thêm "${title}"`}
                        >
                          Xem thêm &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-left text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Tất cả bài viết"
          >
            Tất cả bài viết &rarr;
          </Link>
        </div>
      )}
      <div className="flex items-center justify-center mx-2 my-12">
        {/* <EmailSignupForm /> */}
        <NewsletterForm title="Nhận bài viết mới nhất qua mail" apiUrl="/api/newsletter" />
      </div>
    </>
  )
}
