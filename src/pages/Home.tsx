import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, ShieldCheck, Sparkles, GraduationCap, Globe2, Quote, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { articles } from "@/data/articles";
import { books } from "@/data/books";
import productCable from "@/assets/product-cyber-cable.jpg";

const Home = () => {
  const featured = articles.slice(0, 3);
  const featuredBook = books[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        {/* Floating shapes */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div
          className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-medium tracking-wide uppercase">
                <Sparkles className="h-3.5 w-3.5" /> Knowledge · Security · Design
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] text-primary">
                Read deeply.<br />
                Think clearly.<br />
                <span className="italic text-accent">Live securely.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Twelve Lords is a quiet home for serious ideas — long-form essays, thoughtful books, and security-first
                technology built to strengthen both your mind and your digital life.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/articles">
                    Explore Articles <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="soft" size="xl">
                  <Link to="/books">Browse Books</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
                {[
                  ["120+", "Essays published"],
                  ["4", "Original books"],
                  ["1", "Cyber-secure product"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl text-primary">{n}</dt>
                    <dd className="text-sm text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY READING MATTERS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Why it matters</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-primary">
              In a noisy century, depth is a discipline.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              We publish for readers who want more than a feed. Each essay is researched, edited, and written to
              respect your attention — and reward it. Books and ideas that compound over a lifetime, not a scroll.
            </p>
            <Button asChild variant="hero" className="mt-8">
              <Link to="/about">Our Story <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { Icon: BookOpen, title: "Long-form Reading", text: "Essays that linger. No clickbait, no listicles." },
              { Icon: Brain, title: "Knowledge that compounds", text: "Ideas you can apply, not just consume." },
              { Icon: ShieldCheck, title: "Security-First Tech", text: "Hardware engineered to protect your data." },
              { Icon: GraduationCap, title: "Lifelong Learning", text: "From philosophy to cybersecurity." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="group h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                    <c.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="bg-soft py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">Latest essays</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-primary">From the journal</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/articles" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featured.map((a, i) => (
              <Reveal key={a.slug} delay={i * 100}>
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
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                    <h3 className="mt-2 font-display text-xl text-primary leading-snug line-clamp-3">{a.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{a.readTime}</span>
                      <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS OF LEARNING ONLINE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Knowledge growth</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-primary">
              Why learning online — done well — changes you.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The internet didn't kill deep thinking. It just demanded better curators.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Globe2, title: "Borderless ideas", text: "Read what was once locked behind libraries and language." },
            { Icon: Brain, title: "Sharper thinking", text: "Reading rewires attention. Slowly, then suddenly." },
            { Icon: ShieldCheck, title: "Safer by default", text: "Awareness of digital risk is the new literacy." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-background border border-border h-full">
                <c.Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-display text-2xl text-primary">{c.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCT — CYBER CABLE */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(at 20% 30%, hsl(var(--primary-glow)) 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-elegant">
              <img src={productCable} alt="Twelve Lords Cyber Cable" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Technology</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">Twelve Lords Cyber Cable</h2>
            <p className="mt-4 text-lg opacity-90">
              Secure charging. Controlled data. Total protection. A hardware-enforced security layer for every USB
              connection — engineered to defend against juice jacking, HID injection, and silent data interception.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Default charge-only mode — data lines physically isolated",
                "User-controlled data enablement",
                "Up to 60W fast charging · 1m / 2m",
                "Hardware-level protection, OS independent",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
                <Link to="/about">Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <Reveal className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Watch</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-primary">
              Ideas, on screen.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A short film on why awareness — not technology — is the deciding factor in modern security. If our
              essays speak to you, our videos will too.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 text-primary">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                <Play className="h-4 w-4 ml-0.5" />
              </span>
              <span className="font-medium">~6 minutes · Worth your time</span>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-3">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant border border-border bg-secondary">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/inpok4MKVLM"
                title="Twelve Lords — featured video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED BOOK */}
      <section className="bg-soft py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={featuredBook.cover} alt={featuredBook.title} loading="lazy"
              className="max-w-sm mx-auto rounded-xl shadow-elegant" />
          </Reveal>
          <Reveal delay={100}>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Featured book</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-primary">{featuredBook.title}</h2>
            <p className="mt-2 italic text-muted-foreground">{featuredBook.subtitle}</p>
            <Quote className="h-8 w-8 text-accent mt-6 opacity-50" />
            <p className="mt-2 text-lg leading-relaxed text-foreground/80">{featuredBook.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to={`/books/${featuredBook.slug}`}>View book</Link>
              </Button>
              <Button asChild variant="soft" size="lg">
                <Link to="/books">All books</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
