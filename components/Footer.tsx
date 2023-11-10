import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto pt-16 pb-6 items-center justify-center">
        <div className="flex space-x-4">
          <div className="w-1/2 p-4 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-center">
            <Link href="/privacy-policy">Chính Sách Quyền Riêng Tư</Link>
          </div>
          <div className="w-1/2 p-4 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-center">
            <Link href="/terms-and-conditions">Điều Khoản Sử Dụng</Link>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm pb-6 text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
