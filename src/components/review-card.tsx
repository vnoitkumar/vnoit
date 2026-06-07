import { StarIcon } from "@heroicons/react/24/solid";
import DateFormatter from "@/components/date-formatter";
import type { Review } from "@/types/review";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          aria-hidden="true"
          className={`h-5 w-5 ${
            index < rating
              ? "text-violet-700 dark:text-violet-300"
              : "text-jet-black/20 dark:text-baby-powder/20"
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col gap-3 rounded-xl border border-jet-black/20 dark:border-baby-powder/20 shadow-sm p-5">
      <StarRating rating={review.rating} />
      <h3 className="font-semibold leading-snug">{review.title}</h3>
      <blockquote className="text-jet-black/80 dark:text-baby-powder/80 font-medium leading-snug flex-1">
        {review.text}
      </blockquote>
      <figcaption className="flex items-center justify-between text-sm text-jet-black/80 dark:text-baby-powder/80 mt-1">
        <span className="font-semibold">{review.name}</span>
        <DateFormatter dateString={review.date} />
      </figcaption>
    </figure>
  );
}

export default ReviewCard;
