export default function AiDisclaimer() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-jet-black/20 dark:border-baby-powder/20 p-4 text-sm text-jet-black/80 dark:text-baby-powder/80">
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
        className="mt-0.5 shrink-0"
        aria-hidden="true"
      >
        <path d="M12 3 9.91 8.91 4 11l5.91 2.09L12 19l2.09-5.91L20 11l-5.91-2.09Z" />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
      </svg>
      <p>
        A quick note: the posts here are drafted with the help of AI tools like
        ChatGPT and Claude. The ideas, experiences, and final edits are mine.
      </p>
    </div>
  );
}
