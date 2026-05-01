import selfWitness from "@/assets/book-cover.png";
import quietMind from "@/assets/book-quiet-mind.jpg";
import ciphers from "@/assets/book-ciphers.jpg";
import echoes from "@/assets/book-echoes.jpg";

export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  publishDate: string;
  genre: string;
  cover: string;
  price: number;
  rating: number;
  ratingCount: number;
  shortDescription: string;
  description: string[];
  benefits?: { title: string; text: string }[];
};

export const books: Book[] = [
  {
    slug: "the-self-as-witness",
    title: "The Self as Witness",
    subtitle: "Exploring how the self becomes both subject and suspect in its own gaze",
    author: "Muhammad Raza",
    publishDate: "January 2026",
    genre: "Non-Fiction · Philosophy",
    cover: selfWitness,
    price: 24.0,
    rating: 4.9,
    ratingCount: 218,
    shortDescription:
      "A practical framework for self-mastery distilled from the wisdom of great thinkers — turning ancient insight into everyday discipline.",
    description: [
      "The Self as Witness explores the timeless struggle for self-mastery—the internal battle that has defined the human condition across history. Drawing from the wisdom of great thinkers, it distills profound philosophies into a clear, practical framework.",
      "Rather than remaining abstract, this book transforms ancient insight into actionable discipline, guiding you to apply self-awareness and control in your everyday life.",
    ],
    benefits: [
      {
        title: "Recognition of the Inner Adversary",
        text: "Cultivate the ability to identify the 'inner suspect'—the hidden patterns, impulses, and tendencies that undermine your discipline and clarity.",
      },
      {
        title: "Deep Self-Awareness and Insight",
        text: "Develop a heightened awareness of your inner world, gaining knowledge of your thoughts, emotions, and behaviors at their root.",
      },
      {
        title: "A Structured Strategy for Inner Mastery",
        text: "Formulate a disciplined and practical framework to confront, regulate, and ultimately transcend the limitations of your inner self.",
      },
    ],
  },
  {
    slug: "the-quiet-mind",
    title: "The Quiet Mind",
    subtitle: "Stillness as a discipline in a noisy century",
    author: "Muhammad Raza",
    publishDate: "October 2025",
    genre: "Non-Fiction · Philosophy",
    cover: quietMind,
    price: 19.0,
    rating: 4.7,
    ratingCount: 142,
    shortDescription:
      "An invitation to reclaim attention, reduce inner noise, and rebuild the lost art of focused thought.",
    description: [
      "The Quiet Mind argues that stillness is not the absence of activity, but a deliberate practice — one that has shaped every great thinker who came before us.",
      "Through accessible chapters, the book offers a modern path back to depth, focus, and clarity in an age engineered for distraction.",
    ],
  },
  {
    slug: "ciphers-of-trust",
    title: "Ciphers of Trust",
    subtitle: "The hidden architecture of digital safety",
    author: "Twelve Lords Research",
    publishDate: "August 2025",
    genre: "Non-Fiction · Technology",
    cover: ciphers,
    price: 22.0,
    rating: 4.6,
    ratingCount: 96,
    shortDescription:
      "A reader-friendly introduction to cybersecurity — what trust really means online and how to protect it.",
    description: [
      "Ciphers of Trust unpacks the invisible systems that keep your data — and your identity — safe. Written for non-specialists by working cybersecurity engineers, it makes a complex world legible.",
      "Each chapter pairs a real-world threat with a clear, practical defence you can apply today.",
    ],
  },
  {
    slug: "echoes-of-history",
    title: "Echoes of History",
    subtitle: "How the past keeps writing the present",
    author: "Muhammad Raza",
    publishDate: "May 2025",
    genre: "Non-Fiction · History",
    cover: echoes,
    price: 26.0,
    rating: 4.8,
    ratingCount: 173,
    shortDescription:
      "A sweeping look at the patterns of history that quietly shape modern life, told with clarity and care.",
    description: [
      "Echoes of History weaves together moments from civilisations past and present, revealing the surprisingly straight lines that connect them.",
      "It's history not as a list of dates, but as a living conversation between generations.",
    ],
  },
];

export const getBook = (slug: string) => books.find((b) => b.slug === slug);
