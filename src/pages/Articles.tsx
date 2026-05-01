import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { articles } from "@/data/articles";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";

const Articles = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";

  const filtered = useMemo(() => {
    if (!q) return articles;
    const term = q.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(term) ||
        a.excerpt.toLowerCase().includes(term) ||
        a.category.toLowerCase().includes(term),
    );
  }, [q]);

  return (
    <>
      <section className="bg-hero py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">The Journal</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-primary">Articles worth your time.</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Researched essays on technology, society, philosophy, and the quiet patterns shaping modern life.
          </p>
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
              placeholder="Search articles…"
              className="pl-11 h-12 rounded-full bg-background/80 backdrop-blur"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No articles match "{q}".</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link
                  to={`/articles/${a.slug}`}
                  className="group block h-full bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={a.cover}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                      <span>·</span>
                      <span>{a.readTime}</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl text-primary leading-snug line-clamp-3">{a.title}</h2>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{a.author}</span>
                      <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Articles;
