import type { Metadata } from "next";
import { getReviews, getReviewStats } from "@/lib/reviews";
import { ReviewCard } from "@/components/review-card";

const teachingDescription =
  "Vinoth (Vnoit) teaches and mentors developers online — React, Node.js, and JavaScript, from the basics to advanced patterns. Rated 5.0/5 by students on TeacherOn.";

const teacherOnUrl = "https://www.teacheron.com/tutor/1OZp";

export const metadata: Metadata = {
  title: "Vinoth (Vnoit) - Teaching",
  description: teachingDescription,
  alternates: { canonical: "/teaching" },
  openGraph: {
    title: "Vinoth (Vnoit) - Teaching",
    description: teachingDescription,
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com/teaching",
    images: [
      {
        url: "/assets/images/og-image-3600x1890.jpg",
        width: 3600,
        height: 1890,
        alt: "Vinoth (Vnoit)",
      },
      {
        url: "/assets/images/og-image-1800x945.jpg",
        width: 1800,
        height: 945,
        alt: "Vinoth (Vnoit)",
      },
      {
        url: "/assets/images/og-image-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Vinoth (Vnoit)",
      },
    ],
  },
  twitter: {
    title: "Vinoth (Vnoit) - Teaching",
    description: teachingDescription,
    card: "summary_large_image",
    creator: "@vnoitkumar",
    images: {
      url: "/assets/images/og-image-3600x1890.jpg",
      alt: "Vinoth (Vnoit)",
    },
  },
};

export default function Teaching() {
  const reviews = getReviews();
  const { count, average } = getReviewStats();
  const averageLabel = average % 1 === 0 ? `${average}` : average.toFixed(1);

  return (
    <section className="mb-12 mx-auto mt-3 max-w-7xl p-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-snug">Teaching</h1>

      <div className="max-w-3xl">
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
          Alongside consulting, I teach and mentor developers online — mostly web
          development with React, Node.js, and JavaScript, from first principles
          for beginners through to more advanced patterns. Sessions are hands-on
          and personalised, with notes and screen recordings shared after each
          class.
        </p>
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
          You can book a session or read more on my{" "}
          <a
            href={teacherOnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Vinoth's TeacherOn profile"
          >
            TeacherOn profile
          </a>
          .
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold leading-snug">What students say</h2>
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-1">
          {averageLabel} out of 5 · {count}{" "}
          {count === 1 ? "review" : "reviews"} from students on TeacherOn
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-6">
          {reviews.map((review) => (
            <ReviewCard key={`${review.name}-${review.date}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
