import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getArticle, articles } from "@/data/articles";
import { Button } from "@/components/ui/button";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;
  if (!article) return <Navigate to="/articles" replace />;

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="bg-hero pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="container-prose">
            <Link to="/articles" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">{article.category}</span>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground italic">{article.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> {article.author}</span>
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {article.date}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {article.readTime}</span>
            </div>
          </div>
        </header>

        <div className="container-prose -mt-2">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-elegant bg-secondary">
            <img src={article.heroImage} alt={article.title} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="container-prose py-12 lg:py-16">
          <div className="prose prose-lg max-w-none">
            {article.body.map((p, i) =>
              p.startsWith("## ") ? (
                <h2 key={i} className="mt-12 mb-4 font-display text-2xl sm:text-3xl text-primary">{p.replace(/^##\s/, "")}</h2>
              ) : (
                <p key={i} className="mb-6 text-foreground/85 leading-[1.85] text-lg">{p}</p>
              ),
            )}
          </div>
        </div>
      </article>

      <section className="bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h3 className="font-display text-2xl sm:text-3xl text-primary mb-8">Keep reading</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {more.map((a) => (
              <Link
                key={a.slug}
                to={`/articles/${a.slug}`}
                className="group block bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img src={a.cover} alt={a.title} loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">{a.category}</span>
                  <h4 className="mt-2 font-display text-lg text-primary line-clamp-2">{a.title}</h4>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg"><Link to="/articles">Browse all articles</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetail;
