import type { Offering } from "@/types/offering";

// Offerings mirrored from my Topmate profile (https://topmate.io/vnoit).
// Keep this list in sync when the Topmate offerings change. Descriptions are
// editable here — tweak the wording to taste.
export const offerings: Offering[] = [
  {
    title: "1:1 Mentorship",
    description:
      "Personalised guidance on React, Node.js, JavaScript, or your path in tech.",
    format: "Video meeting",
    duration: "30 mins",
    price: "₹399",
    badge: "Popular",
  },
  {
    title: "Have a question?",
    description: "Send me a message and I'll reply within two days.",
    format: "Priority DM",
    duration: "2 days reply",
    price: "FREE",
  },
  {
    title: "Let's connect 👋",
    description:
      "A casual 1:1 to chat about engineering, mentoring, or anything tech.",
    format: "Video meeting",
    duration: "30 mins",
    price: "₹699",
  },
  {
    title: "Career guidance",
    description: "Portfolio, interviews, and a path that helps you stand out.",
    format: "Video meeting",
    duration: "30 mins",
    price: "₹699",
  },
];
