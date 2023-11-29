import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'

export const metadata = genPageMetadata({ title: 'Giới thiệu' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  const imageStyle = {
    border: '2px solid  #ccd1d1',
  }

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <Image
        src={`/static/img/nhung-nuoc-da-di-qua.png`}
        className="object-cover object-center"
        alt="Đất nước tôi đã đi qua"
        width="1221"
        height="598"
      />

      <div className="pt-5 container flex justify-center mx-auto">
        <table className="w-full">
          <thead className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
            <tr>
              <th
                colSpan={4}
                className="px-6 py-2 text-lg bg-white text-black antialiased dark:bg-gray-950 dark:text-white"
              >
                Châu Á
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/KH.svg`}
                  className="object-cover object-center"
                  alt="Cambodia"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Cambodia
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Thailand
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/TH.svg`}
                  className="object-cover object-center"
                  alt="Thailand"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/SG.svg`}
                  className="object-cover object-center"
                  alt="Singapore"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Singapore
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Malaysia
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/MY.svg`}
                  className="object-cover object-center"
                  alt="Malaysia"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/IN.svg`}
                  className="object-cover object-center"
                  alt="India"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                India
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Japan
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/JP.svg`}
                  className="object-cover object-center"
                  alt="Japan"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/LK.svg`}
                  className="object-cover object-center"
                  alt="Sri Lanka"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Sri Lanka
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Maldives
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/MV.svg`}
                  className="object-cover object-center"
                  alt="Maldives"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/MM.svg`}
                  className="object-cover object-center"
                  alt="Myanmar"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Myanmar
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Nepal
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/NP.svg`}
                  className="object-cover object-center"
                  alt="Nepal"
                  width="55"
                  height="55"
                  style={imageStyle}
                />
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/KR.svg`}
                  className="object-cover object-center"
                  alt="Republic of Korea"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                <p>South</p>
                <p>Korea</p>
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Viet Nam
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/VN.svg`}
                  className="object-cover object-center"
                  alt="Viet Nam"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
            </tr>
          </tbody>
          <thead className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
            <tr>
              <th
                colSpan={4}
                className="px-6 py-2 text-lg bg-white text-black antialiased dark:bg-gray-950 dark:text-white"
              >
                Châu Âu
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/DE.svg`}
                  className="object-cover object-center"
                  alt="Germany"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Germany
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Netherlands
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/NL.svg`}
                  className="object-cover object-center"
                  alt="Netherlands"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/CZ.svg`}
                  className="object-cover object-center"
                  alt="Czech Republic"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                <p>Czech</p>
                <p>Republic</p>
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                France
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/FR.svg`}
                  className="object-cover object-center"
                  alt="France"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/IT.svg`}
                  className="object-cover object-center"
                  alt="Italy"
                  width="100"
                  height="100"
                  style={imageStyle}
                />
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Italy
              </td>
              <td className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                Switzerland
              </td>
              <td className="px-1 py-1 max-w-fit">
                <Image
                  src={`/static/img/country-flags/CH.svg`}
                  className="object-cover object-center"
                  alt="Switzerland"
                  width="66"
                  height="66"
                  style={imageStyle}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
