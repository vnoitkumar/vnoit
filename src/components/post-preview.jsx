import Link from "next/link";
import DateFormatter from "@/components/date-formatter";
import Image from "next/image";
import { trimTitle } from "@/utils/utils";

function PostPreview({
  title,
  coverImage,
  coverImageBlurHash,
  date,
  excerpt,
  author,
  slug,
  readTime,
}) {
  return (
    <div className="flex-col justify-start items-start gap-5 inline-flex hover-up">
      <Link
        className="rounded-lg overflow-hidden max-h-96"
        href={`/blogs/${slug}`}
        aria-label={`Read more about ${trimTitle(title)}`}
      >
        <Image
          src={coverImage}
          height={500}
          width={1000}
          alt={title}
          placeholder="blur"
          loading="lazy"
          blurDataURL={coverImageBlurHash}
        />
      </Link>
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="justify-start items-center gap-5 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            {/* <Image
              className="rounded-full"
              height={36}
              width={36}
              src={author.picture}
              alt={author.name}
            /> */}
            <div className="text-custom-black/80 dark:text-baby-powder/80 text-sm font-medium leading-none">
              {/* {author.name} -  */}
              <DateFormatter dateString={date} /> &nbsp;.&nbsp; {readTime}
            </div>
          </div>
        </div>
        <h3>
          <Link
            href={`/blogs/${slug}`}
            aria-label={`Read more about ${trimTitle(title)}`}
            className="text-custom-black dark:text-baby-powder text-2xl font-bold leading-snug hover:underline decoration-light-sea-green decoration-2 underline-offset-2"
          >
            {title}
          </Link>
        </h3>
        <p className="text-custom-black/80 dark:text-baby-powder/80 font-medium leading-snug">
          {excerpt}
        </p>
      </div>
    </div>
  );
}

export default PostPreview;
