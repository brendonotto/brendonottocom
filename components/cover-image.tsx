import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  imageAttribution?: string
  slug?: string
}

const CoverImage = ({ title, src, imageAttribution, slug }: Props) => {
  const image = (
    <>
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn('shadow-small', {
          'hover:shadow-medium transition-shadow duration-200': slug,
        })}
      />
      { imageAttribution && (<div className="text-center mt-2" dangerouslySetInnerHTML={{__html: imageAttribution}}></div>)}
    </>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
