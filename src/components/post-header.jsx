import Image from "next/image";
import React from "react";
import DateFormatter from "@/components/date-formatter";
import { trimTitle } from "@/utils/utils";
import Link from "next/link";

export function PostHeader({
  title,
  excerpt,
  date,
  author,
  coverImage,
  readTime,
  coverImageBlurHash
}) {
  return (
    <section className="mx-auto mt-1 max-w-7xl p-6 lg:px-8">
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        {/* <div className="flex w-full justify-center item-center md:mb-3">
          <div className="hidden md:flex gap-2.5 justify-start items-center h-12 px-7 py-3.5 rounded-3xl border border-jet-black/15 dark:border-baby-powder/15">
            <Link
              className="text-jet-black/80 dark:text-baby-powder/80 text-base font-medium"
              href="/"
            >
              Blog
            </Link>
            <Arrow />
            <span className="text-jet-black/80 dark:text-baby-powder/80 text-base font-medium">
              Posts
            </span>
            <Arrow />
            <span className="text-jet-black/80 dark:text-baby-powder/80 text-base font-bold">
              {trimTitle(title)}
            </span>
          </div>
        </div> */}

        <Image
          className="rounded-md mb-4"
          src={coverImage}
          height={500}
          width={1000}
          alt={title}
          placeholder="blur"
          blurDataURL={coverImageBlurHash}
          priority
        />

        <h1 className="text-2xl lg:text-4xl font-bold text-jet-black dark:text-baby-powder max-w-5xl leading-snug">
          {title}
        </h1>
        {/* <p className="sm:block hidden text-base lg:text-lg font-medium text-jet-black/80 dark:text-baby-powder/80 max-w-3xl">
          {excerpt}
        </p> */}
        <div className="justify-center items-center gap-4 flex flex-col md:flex-row">
          <div className="justify-start items-center gap-2 flex">
            {/* <div>
              <Image
                className="rounded-full"
                width={50}
                height={50}
                src={author.picture}
                alt={author.name}
              />
            </div> */}

            <div className="text-jet-black/80 dark:text-baby-powder/80 text-sm">
              {/* {author.name} -  */}
              <DateFormatter dateString={date} /> &nbsp;.&nbsp; {readTime}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function Arrow() {
    return (
      <svg
        width={8}
        height={12}
        viewBox="0 0 8 12"
        className="fill-jet-black/80 dark:fill-baby-powder/80"
      >
        <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
      </svg>
    );
  }
}
