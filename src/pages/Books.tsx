import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { books } from "@/data/books";
import Reveal from "@/components/Reveal";

const Books = () => {
  return (
    <>
      <section className="bg-hero py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">The Library</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-primary">Books to grow with.</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Original works on philosophy, history, and security — written to be read slowly and returned to often.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((b, i) => (
            <Reveal key={b.slug} delay={i * 80}>
              <Link
                to={`/books/${b.slug}`}
                className="group block h-full"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-secondary shadow-card group-hover:shadow-elegant group-hover:-translate-y-2 transition-smooth duration-500">
                  <img src={b.cover} alt={b.title} loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                </div>
                <div className="mt-5">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">{b.genre}</span>
                  <h2 className="mt-2 font-display text-xl text-primary leading-snug line-clamp-2">{b.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{b.author} · {b.publishDate}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium text-primary">{b.rating}</span>
                      <span className="text-muted-foreground">({b.ratingCount})</span>
                    </div>
                    <span className="font-display text-lg text-primary">${b.price.toFixed(0)}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Books;
