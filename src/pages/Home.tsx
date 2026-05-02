import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  ShieldCheck,
  Sparkles,
  Quote,
  Play,
  Feather,
  Compass,
  Star,
  Mail,
  PenLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { articles } from "@/data/articles";
import { books } from "@/data/books";
import productCable from "@/assets/product-cyber-cable.jpg";
import heroWriterPoster from "@/assets/hero-writer.jpg";
import heroVideo from "@/assets/hero-writer.mp4.asset.json";

const Home = () => {
  const featured = articles.slice(0, 3);
  const featuredBook = books[0];
  const otherBooks = books.slice(1, 4);

  return (
    <>
      {/* ============== HERO — split editorial with video ============== */}
      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left — copy */}
            <div className="lg:col-span-6 lg:pr-4">
              <Reveal>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-primary text-xs font-medium tracking-widest uppercase shadow-soft">
                  <Sparkles className="h-3.5 w-3.5 text-accent" /> Issue No. 12 · The Quiet Edition
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[0.98] text-primary">
                  Words that <span className="italic text-accent">slow</span> the world down.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  A modern editorial home for long-form essays, considered books, and security-first technology —
                  written by a small studio that still believes in depth.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/articles">
                      Start reading <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="soft" size="xl">
                    <Link to="/books">The library</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-12 flex items-center gap-5">
                  <div className="flex -space-x-3">
                    {[
                      "from-primary to-primary-glow",
                      "from-accent to-primary-glow",
                      "from-primary-glow to-accent",
                    ].map((g, i) => (
                      <span
                        key={i}
                        className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${g} text-primary-foreground text-xs font-semibold ring-2 ring-background`}
                      >
                        {["MR", "AS", "JL"][i]}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mt-0.5">Loved by 12,000+ deep readers</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — video card */}
            <div className="lg:col-span-6 relative">
              <Reveal delay={150}>
                <div className="relative">
                  {/* Decorative frames */}
                  <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl border-2 border-accent/40 hidden md:block" />
                  <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border-2 border-primary/20 hidden md:block" />

                  <div className="relative rounded-[1.75rem] overflow-hidden shadow-elegant border border-border bg-card">
                    <div className="aspect-[4/5]">
                      <video
                        className="h-full w-full object-cover"
                        src={heroVideo.url}
                        poster={heroWriterPoster}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                    {/* Floating caption tag */}
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-primary text-xs font-medium shadow-soft">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      Now writing · Essay 124
                    </div>
                    {/* Bottom card */}
                    <div className="absolute -bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:w-72 bg-card rounded-2xl p-4 shadow-elegant border border-border">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                          <PenLine className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs text-muted-foreground">In the studio</p>
                          <p className="text-sm font-medium text-primary leading-tight">
                            “The Architecture of Attention”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border bg-card/60 overflow-hidden">
          <div className="flex gap-12 py-5 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex gap-12 shrink-0">
                {[
                  "Editorial since 2018",
                  "Long-form essays",
                  "Original books",
                  "Security-first technology",
                  "No ads · No tracking",
                  "Read offline",
                  "Independent studio",
                ].map((t) => (
                  <span
                    key={t + dup}
                    className="font-display italic text-2xl text-primary/70 inline-flex items-center gap-12"
                  >
                    {t}
                    <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MANIFESTO — asymmetric editorial ============== */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18rem] lg:text-[28rem] text-secondary/40 select-none pointer-events-none leading-none">
          12
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Manifesto</span>
              <p className="mt-4 font-display text-2xl text-primary leading-snug">
                We write for the reader who closes a tab, opens a window, and thinks for an hour.
              </p>
            </Reveal>

            <div className="lg:col-span-8 lg:pl-10 lg:border-l border-border">
              <Reveal delay={100}>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.05]">
                  In a feed-shaped world, we publish things that <span className="italic text-accent">stay still</span> long enough to be understood.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Twelve Lords is a small editorial studio. We make essays that take three weeks to write, books
                  that take three years, and a single piece of hardware that protects your data because we couldn't
                  find one we trusted ourselves.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 grid sm:grid-cols-3 gap-8">
                  {[
                    { Icon: Feather, label: "Original writing", v: "100%" },
                    { Icon: Compass, label: "Reader-funded", v: "Always" },
                    { Icon: ShieldCheck, label: "Tracker-free", v: "Zero" },
                  ].map((m) => (
                    <div key={m.label} className="border-t border-border pt-5">
                      <m.Icon className="h-5 w-5 text-accent" />
                      <p className="mt-3 font-display text-3xl text-primary">{m.v}</p>
                      <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FEATURED ARTICLES — magazine grid ============== */}
      <section className="bg-soft py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">The Journal</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-primary max-w-2xl">
                This week's reading
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/articles"
                className="group inline-flex items-center gap-2 text-primary font-medium border-b border-primary/30 pb-1 hover:border-primary"
              >
                Browse the archive
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </Link>
            </Reveal>
          </div>

          {featured.length > 0 && (
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Big feature */}
              <Reveal className="lg:col-span-7">
                <Link
                  to={`/articles/${featured[0].slug}`}
                  className="group block bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elegant transition-smooth"
                >
                  <div className="aspect-[16/11] overflow-hidden bg-secondary">
                    <img
                      src={featured[0].cover}
                      alt={featured[0].title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                      <span className="text-accent font-semibold">{featured[0].category}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                      <span className="text-muted-foreground">{featured[0].readTime}</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl lg:text-4xl text-primary leading-tight">
                      {featured[0].title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">{featured[0].excerpt}</p>
                  </div>
                </Link>
              </Reveal>

              {/* Side stack */}
              <div className="lg:col-span-5 space-y-6">
                {featured.slice(1).map((a, i) => (
                  <Reveal key={a.slug} delay={i * 100}>
                    <Link
                      to={`/articles/${a.slug}`}
                      className="group flex gap-5 bg-card rounded-2xl p-4 sm:p-5 border border-border shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
                    >
                      <div className="h-28 w-28 sm:h-32 sm:w-32 shrink-0 rounded-xl overflow-hidden bg-secondary">
                        <img
                          src={a.cover}
                          alt={a.title}
                          loading="lazy"
                          className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-accent">
                          {a.category}
                        </span>
                        <h4 className="mt-1.5 font-display text-lg sm:text-xl text-primary leading-snug line-clamp-3">
                          {a.title}
                        </h4>
                        <p className="mt-2 text-xs text-muted-foreground">{a.readTime}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}

                {/* Newsletter card */}
                <Reveal delay={200}>
                  <div className="rounded-2xl p-6 bg-primary text-primary-foreground relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
                    <Mail className="h-5 w-5 text-accent relative" />
                    <p className="mt-3 font-display text-xl relative">One letter every Sunday.</p>
                    <p className="mt-1 text-sm opacity-80 relative">
                      A single hand-picked essay, in your inbox. No more.
                    </p>
                    <form
                      className="mt-4 flex gap-2 relative"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        type="email"
                        placeholder="you@quiet.email"
                        className="flex-1 h-10 rounded-full px-4 text-sm bg-background/15 border border-background/20 text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:bg-background/25"
                      />
                      <button className="h-10 px-5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                        Join
                      </button>
                    </form>
                  </div>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============== PILLARS — three values ============== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <Reveal className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">What we make</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.05]">
              Three crafts. <span className="italic">One mission.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Writing sharpens the mind. Books anchor it. Tools protect it. Everything we publish or build serves
              one of these — and refuses to do anything else.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {[
            {
              n: "01",
              Icon: BookOpen,
              title: "Essays",
              text: "Long, researched, edited. Written to be reread.",
              link: "/articles",
              cta: "Read essays",
            },
            {
              n: "02",
              Icon: Brain,
              title: "Books",
              text: "Slow ideas. Bound, printed, sold once. Yours forever.",
              link: "/books",
              cta: "See the library",
            },
            {
              n: "03",
              Icon: ShieldCheck,
              title: "Cyber Cable",
              text: "Hardware-enforced security for every USB connection.",
              link: "/about",
              cta: "Learn the tech",
            },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div className="group relative h-full bg-card p-8 lg:p-10 hover:bg-secondary/40 transition-smooth">
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-muted-foreground tracking-widest">{p.n}</span>
                  <p.Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-12 font-display text-3xl text-primary">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.text}</p>
                <Link
                  to={p.link}
                  className="mt-8 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== PRODUCT — Cyber Cable ============== */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(at 15% 25%, hsl(var(--primary-glow)) 0%, transparent 45%), radial-gradient(at 85% 80%, hsl(var(--accent)) 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-accent/20 blur-3xl" />
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src={productCable}
                  alt="Twelve Lords Cyber Cable"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">The Object</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              The Cyber Cable.
            </h2>
            <p className="mt-5 text-lg opacity-85 leading-relaxed">
              The only USB cable engineered to protect you by default. Charge anywhere. Trust nothing. Decide what
              data, if any, leaves your device.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Default charge-only — data lines physically isolated",
                "User-controlled data enablement",
                "Up to 60W fast charging · 1m / 2m",
                "Hardware protection. OS independent.",
              ].map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="grid h-6 w-6 mt-0.5 place-items-center rounded-full bg-accent/20 text-accent shrink-0">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="opacity-90">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="xl" className="bg-background text-primary hover:bg-background/90">
                <Link to="/about">
                  How it works <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/contact">Order one</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== TESTIMONIALS — masonry mosaic ============== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Reader letters</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.05]">
              From the people who actually <span className="italic">finish</span> the essay.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              q: "I cancelled three newsletters the day I subscribed to Twelve Lords. Nothing else has been so worth my Sunday.",
              n: "Ayesha S.",
              r: "Architect, Lahore",
              tall: true,
            },
            {
              q: "Finally — writing that respects how long an idea actually takes to land.",
              n: "Daniel R.",
              r: "Editor, Berlin",
              tall: false,
            },
            {
              q: "The Cyber Cable is the first piece of tech in years I've recommended to my parents without hesitation.",
              n: "Priya M.",
              r: "Engineer, Bangalore",
              tall: false,
            },
            {
              q: "Their book on the self read like a long, patient conversation with someone who knew me better than I did.",
              n: "Tomás L.",
              r: "Therapist, Lisbon",
              tall: false,
            },
            {
              q: "It's rare to find a publication that has a point of view, and rarer still that the point of view is calm.",
              n: "Hana K.",
              r: "Designer, Tokyo",
              tall: true,
            },
          ].map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <figure
                className={`p-7 lg:p-8 rounded-3xl border border-border bg-card shadow-card h-full flex flex-col ${
                  t.tall ? "md:row-span-2" : ""
                } ${i % 2 ? "bg-secondary/40" : ""}`}
              >
                <Quote className="h-7 w-7 text-accent" />
                <blockquote className="mt-4 font-display text-xl lg:text-2xl text-primary leading-snug flex-1">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <p className="text-sm font-medium text-primary">{t.n}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.r}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== LIBRARY — feature book + others ============== */}
      <section className="bg-soft py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-primary opacity-15 blur-3xl rounded-full" />
                <img
                  src={featuredBook.cover}
                  alt={featuredBook.title}
                  loading="lazy"
                  className="relative max-w-xs mx-auto rounded-xl shadow-elegant"
                />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={100}>
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">New release</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.05]">
                {featuredBook.title}
              </h2>
              <p className="mt-3 italic text-muted-foreground text-lg">{featuredBook.subtitle}</p>
              <Quote className="h-8 w-8 text-accent mt-8 opacity-50" />
              <p className="mt-3 text-lg leading-relaxed text-foreground/80 max-w-xl">
                {featuredBook.shortDescription}
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Button asChild variant="hero" size="xl">
                  <Link to={`/books/${featuredBook.slug}`}>View book</Link>
                </Button>
                <span className="text-sm text-muted-foreground">
                  by <span className="text-primary font-medium">{featuredBook.author}</span> · {featuredBook.publishDate}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Strip of other books */}
          {otherBooks.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border">
              <div className="flex items-end justify-between mb-8">
                <h3 className="font-display text-2xl text-primary">Also in the library</h3>
                <Link
                  to="/books"
                  className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  All books <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {otherBooks.map((b, i) => (
                  <Reveal key={b.slug} delay={i * 80}>
                    <Link
                      to={`/books/${b.slug}`}
                      className="group block bg-card rounded-2xl p-5 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                    >
                      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-secondary mb-4">
                        <img
                          src={b.cover}
                          alt={b.title}
                          loading="lazy"
                          className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
                        />
                      </div>
                      <p className="text-[0.65rem] uppercase tracking-widest text-accent font-semibold">{b.genre}</p>
                      <h4 className="mt-1.5 font-display text-lg text-primary leading-tight line-clamp-2">
                        {b.title}
                      </h4>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============== VIDEO + CTA ============== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">On screen</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-primary leading-[1.05]">
              Watch a short film about <span className="italic">attention</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Six quiet minutes on why awareness — not technology — is the deciding factor in modern life.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 text-primary">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft">
                <Play className="h-4 w-4 ml-0.5" />
              </span>
              <span className="font-medium text-sm">~6 minutes · Worth your time</span>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-3">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-elegant border border-border bg-secondary">
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

        {/* Closing CTA */}
        <Reveal>
          <div className="mt-24 lg:mt-32 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-secondary via-background to-secondary/60 border border-border p-10 lg:p-20 text-center">
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <Sparkles className="h-7 w-7 text-accent mx-auto" />
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] max-w-3xl mx-auto">
                Begin your <span className="italic">quiet</span> hour.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
                One essay. One coffee. One uninterrupted hour. That's all we ask — and all we offer.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/articles">
                    Read this week's essay <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="soft" size="xl">
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
