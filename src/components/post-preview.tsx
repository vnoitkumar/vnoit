import Link from "next/link";
import DateFormatter from "@/components/date-formatter";
import Image from "next/image";
import { trimTitle } from "@/utils/utils";
import type { BlogPost } from "@/types/blog";

type PostPreviewProps = Pick<
  BlogPost,
  | "title"
  | "coverImage"
  | "coverImageBlurHash"
  | "date"
  | "excerpt"
  | "author"
  | "slug"
  | "readTime"
> & { tag?: string };

function PostPreview({
  title,
  coverImage,
  coverImageBlurHash,
  date,
  excerpt,
  slug,
  readTime,
}: PostPreviewProps) {
  return (
    <div className="flex-col justify-start items-start gap-5 inline-flex hover-up">
      <Link
        className="rounded-lg overflow-hidden max-h-96"
        href={`/blogs/${slug}`}
        aria-label={`Read more about ${trimTitle(title)}`}
      >
        <Image
          src={coverImage}
          height={630}
          width={1200}
          alt={title}
          placeholder="blur"
          loading="lazy"
          blurDataURL={coverImageBlurHash}
        />
      </Link>
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="justify-start items-center gap-5 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="text-jet-black/80 dark:text-baby-powder/80 text-sm font-medium leading-none">
              <DateFormatter dateString={date} /> &nbsp;.&nbsp; {readTime}
            </div>
          </div>
        </div>
        <h3>
          <Link
            href={`/blogs/${slug}`}
            aria-label={`Read more about ${trimTitle(title)}`}
            className=" text-2xl font-bold leading-snug hover:underline dark:decoration-violet-300 decoration-violet-700 decoration-2 underline-offset-2"
          >
            {title}
          </Link>
        </h3>
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium leading-snug line-clamp-2">
          {excerpt}
        </p>
      </div>
    </div>
  );
}

export default PostPreview;
