import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingCart, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBook, books } from "@/data/books";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const BookDetail = () => {
  const { slug } = useParams();
  const book = slug ? getBook(slug) : undefined;
  const [wished, setWished] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverR, setHoverR] = useState(0);

  if (!book) return <Navigate to="/books" replace />;

  const more = books.filter((b) => b.slug !== book.slug).slice(0, 3);

  return (
    <>
      <section className="bg-hero py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/books" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> All books
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant bg-secondary max-w-md mx-auto w-full">
              <img src={book.cover} alt={book.title} className="h-full w-full object-cover" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">{book.genre}</span>
              <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
                {book.title}
              </h1>
              {book.subtitle && <p className="mt-3 text-lg italic text-muted-foreground">{book.subtitle}</p>}
              <p className="mt-5 text-sm text-muted-foreground">
                By <span className="text-primary font-medium">{book.author}</span> · Published {book.publishDate}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={cn(
                        "h-5 w-5",
                        n <= Math.round(book.rating) ? "fill-accent text-accent" : "text-muted-foreground/40",
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <span className="font-medium text-primary">{book.rating}</span> ({book.ratingCount} reviews)
                </span>
              </div>

              <p className="mt-6 text-lg text-foreground/80 leading-relaxed">{book.shortDescription}</p>

              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-display text-4xl text-primary">${book.price.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">${(book.price + 6).toFixed(2)}</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => toast.success("Added to cart", { description: book.title })}
                >
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </Button>
                <Button
                  variant="soft"
                  size="lg"
                  onClick={() => {
                    setWished((w) => !w);
                    toast(wished ? "Removed from wishlist" : "Saved to wishlist", { description: book.title });
                  }}
                >
                  <Heart className={cn("h-4 w-4", wished && "fill-accent text-accent")} />
                  {wished ? "Wishlisted" : "Wishlist"}
                </Button>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-card border border-border">
                <p className="text-sm font-medium text-primary">Rate this book</p>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onMouseEnter={() => setHoverR(n)}
                      onMouseLeave={() => setHoverR(0)}
                      onClick={() => {
                        setUserRating(n);
                        toast.success(`You rated ${n} star${n > 1 ? "s" : ""}`);
                      }}
                      className="p-1"
                      aria-label={`Rate ${n}`}
                    >
                      <Star
                        className={cn(
                          "h-6 w-6 transition-smooth",
                          (hoverR || userRating) >= n
                            ? "fill-accent text-accent scale-110"
                            : "text-muted-foreground/40",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 lg:py-20">
        <h2 className="font-display text-2xl sm:text-3xl text-primary mb-6">About the book</h2>
        {book.description.map((p, i) => (
          <p key={i} className="mb-5 text-lg text-foreground/80 leading-[1.85]">{p}</p>
        ))}

        {book.benefits && (
          <>
            <h3 className="mt-12 font-display text-2xl text-primary mb-6">What you'll gain</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {book.benefits.map((b) => (
                <div key={b.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  <h4 className="mt-3 font-display text-lg text-primary">{b.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl sm:text-3xl text-primary mb-8">More from the library</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {more.map((b) => (
              <Link key={b.slug} to={`/books/${b.slug}`} className="group block">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-card group-hover:shadow-elegant group-hover:-translate-y-1 transition-smooth">
                  <img src={b.cover} alt={b.title} loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                </div>
                <h4 className="mt-4 font-display text-lg text-primary line-clamp-1">{b.title}</h4>
                <p className="text-sm text-muted-foreground">{b.author}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetail;
