import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src?: string;
  height?: string;
  width?: string;
  imageAttribution?: string;
  slug?: string;
};

const CoverImage = ({
  title,
  src,
  height,
  width,
  imageAttribution,
  slug,
}: Props) => {
  const image = (
    <div>
      {src && <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
        height={height}
        width={width}
      />}
      {imageAttribution && (
        <div
          className="text-center mt-2"
          dangerouslySetInnerHTML={{ __html: imageAttribution }}
        ></div>
      )}
    </div>
  );
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
  );
};

export default CoverImage;
