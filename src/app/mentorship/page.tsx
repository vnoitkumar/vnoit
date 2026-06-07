import type { Metadata } from "next";
import { getReviews, getReviewStats } from "@/lib/reviews";
import { offerings } from "@/lib/offerings";
import { ReviewCard } from "@/components/review-card";
import { OfferingCard } from "@/components/offering-card";

const mentorshipDescription =
  "Vinoth (Vnoit) teaches and mentors developers online — React, Node.js, JavaScript, and building with AI tools like Claude, from the basics to advanced patterns. Rated 5.0/5 by students on TeacherOn.";

const bookingUrl = "https://topmate.io/vnoit";
const teacherOnUrl = "https://www.teacheron.com/tutor/1OZp";

export const metadata: Metadata = {
  title: "Vinoth (Vnoit) - Mentorship",
  description: mentorshipDescription,
  alternates: { canonical: "/mentorship" },
  openGraph: {
    title: "Vinoth (Vnoit) - Mentorship",
    description: mentorshipDescription,
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com/mentorship",
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
    title: "Vinoth (Vnoit) - Mentorship",
    description: mentorshipDescription,
    card: "summary_large_image",
    creator: "@vnoitkumar",
    images: {
      url: "/assets/images/og-image-3600x1890.jpg",
      alt: "Vinoth (Vnoit)",
    },
  },
};

export default function Mentorship() {
  const reviews = getReviews();
  const { count, average } = getReviewStats();
  const averageLabel = average % 1 === 0 ? `${average}` : average.toFixed(1);

  return (
    <section className="mb-12 mx-auto mt-3 max-w-7xl p-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-snug">Mentorship</h1>

      <div className="max-w-5xl">
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
          I&apos;ve been teaching people to build software for about five years
          — frontend, backend, full-stack, and lately shipping with AI tools
          like Claude.
          I&apos;ve worked with all kinds of people across the US and Europe:
          school kids writing their first lines of code, freshers breaking into
          tech, and working devs leveling up. It started on{" "}
          <a
            href={teacherOnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Vinoth's TeacherOn profile"
          >
            TeacherOn
          </a>
          , where the reviews below are from, and these days I&apos;m on{" "}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Vinoth's Topmate"
          >
            Topmate
          </a>{" "}
          too.
        </p>
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
          No boring lecture energy. Sessions are 1:1 and fully hands-on — you
          write the code, we debug real problems together, and I keep it
          practical so things actually click. After each one I drop my notes,
          the code, and a recording so you can go back anytime. Scroll down and
          grab a slot whenever you&apos;re ready.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-2 text-jet-black/80 dark:text-baby-powder/80 font-medium">
        <span aria-hidden="true" className="text-lg leading-none">
          ★
        </span>
        <span>
          {averageLabel} out of 5 · {count}{" "}
          {count === 1 ? "review" : "reviews"} on{" "}
          <a
            href={teacherOnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Vinoth's TeacherOn profile"
          >
            TeacherOn
          </a>
        </span>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold leading-snug">Book a session</h2>
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-1">
          All over video, with notes and a recording after. Pick whatever fits
          your vibe.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {offerings.map((offering) => (
            <OfferingCard
              key={offering.title}
              offering={offering}
              bookingUrl={bookingUrl}
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold leading-snug">What students say</h2>
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-1">
          {averageLabel} out of 5 · {count}{" "}
          {count === 1 ? "review" : "reviews"} from students on{" "}
          <a
            href={teacherOnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Vinoth's TeacherOn profile"
          >
            TeacherOn
          </a>
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
