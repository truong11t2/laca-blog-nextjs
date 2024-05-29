import NextImage, { ImageProps } from 'next/image'

const Image = ({ ...rest }: ImageProps) => {
  return (
    <div className="not-prose">
      <NextImage {...rest} />
    </div>
  )
}

export default Image
