import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from '@/components/pliny/ui/NewsletterForm'
import Image from '@/components/Image'

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
            {'. Tất cả bài viết, được liệt kê ở liên kết '}
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
            const { slug, date, title, images, summary, tags, lastmod } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={lastmod}>{formatDate(lastmod, siteMetadata.locale)}</time>
                      </dd>
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
