import type { Review } from "@/types/review";

// Reviews from my TeacherOn tutor profile (https://www.teacheron.com/tutor/1OZp).
// TeacherOn sits behind Cloudflare and can't be fetched programmatically, so these
// are maintained here by hand — add new reviews to this list as they come in.
const reviews: Review[] = [
  {
    name: "Rajesh",
    date: "2020-10-12",
    rating: 5,
    title: "Good Programming Knowledge and Well Experienced Tutor",
    text: "Mr. Vinoth is a good tutor and friendly manner. He has got strong knowledge in his domain and teaching level is easily understand for beginners. Specially his core concept and realtime examples are highlighted. He teach step by step concept even without knowing program also understand well in that level of teaching. He mingled with student easily and understand what was his/her capacity then he will train that person that level to good programmers.",
  },
  {
    name: "Anil",
    date: "2020-10-12",
    rating: 5,
    title: "Very knowledgeable and friendly Brother",
    text: "Passion in finding a bug and fixing it, expert in knowledge and easily adapted to students needs.",
  },
  {
    name: "Abinaya",
    date: "2020-10-12",
    rating: 5,
    title: "Professional & knowledgeable teacher",
    text: "I'm a very beginner at website development. Before attending this class, I don't know HTML, CSS, and Javascript. I have learned from him. Now I able to create my own website. He has taught me very clearly and patiently. Each concept he has taught step by step with an example. Once we have been understood the concept, then only he moved the next concept. Thank you so much for transferring the programming knowledge to me.",
  },
  {
    name: "Sneh Gupta",
    date: "2020-10-12",
    rating: 5,
    title: "Good Teacher",
    text: "He solved my problem very fast.",
  },
  {
    name: "Isra Ali",
    date: "2020-10-11",
    rating: 5,
    title: "Mr. Vinoth Kumar is knowledgeable, professional and easy-going tutor!",
    text: "Mr. Vinoth Kumar is knowledgeable, professional and easy-going tutor. He knows how to break down complex concepts to beginners. He also keeps the sessions interesting and engaging. I would recommend Mr. Vinoth as he is also very organized and reliable. He asks if you have any questions both at the beginning of class and the end. Again, I would highly recommend Mr. Vinoth Kumar for the subjects he's offering.",
  },
];

export function getReviews(): Review[] {
  return [...reviews].sort((review1, review2) =>
    review1.date > review2.date ? -1 : 1
  );
}

export function getReviewStats(): { count: number; average: number } {
  const count = reviews.length;
  const average =
    count === 0
      ? 0
      : reviews.reduce((sum, review) => sum + review.rating, 0) / count;
  return { count, average };
}
