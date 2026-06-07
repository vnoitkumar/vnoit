import type { Offering } from "@/types/offering";

export function OfferingCard({
  offering,
  bookingUrl,
}: {
  offering: Offering;
  bookingUrl: string;
}) {
  const href = offering.bookingUrl ?? bookingUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Book: ${offering.title}`}
      className="group flex flex-col rounded-2xl border border-jet-black/20 dark:border-baby-powder/20 shadow-sm p-6 hover-up"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-jet-black/70 dark:text-baby-powder/70">
          {offering.format} · {offering.duration}
        </p>
        {offering.badge ? (
          <span className="shrink-0 rounded-full bg-violet-700/10 dark:bg-violet-300/15 text-violet-700 dark:text-violet-300 text-xs font-semibold px-2.5 py-1">
            {offering.badge}
          </span>
        ) : null}
      </div>
      <h3 className="text-xl font-bold leading-snug mt-2">{offering.title}</h3>
      <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-2 flex-1">
        {offering.description}
      </p>
      <div className="mt-5 pt-5 border-t border-jet-black/10 dark:border-baby-powder/10 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-bold">{offering.price}</span>
          {offering.originalPrice ? (
            <span className="text-sm line-through text-jet-black/70 dark:text-baby-powder/70">
              {offering.originalPrice}
            </span>
          ) : null}
        </div>
        <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-jet-black dark:bg-baby-powder text-baby-powder dark:text-jet-black group-hover:opacity-90 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default OfferingCard;
