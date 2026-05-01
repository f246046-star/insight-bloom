import { ShieldCheck, Sparkles, Telescope, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import productCable from "@/assets/product-cyber-cable.jpg";

const About = () => {
  return (
    <>
      <section className="bg-hero py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Story</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-primary">
            We build systems for the mind — and the modern digital life.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Twelve Lords is driven by a singular mission: to educate, inform, and elevate. We are committed to providing
            accurate, well-researched knowledge that empowers individuals with clarity, self-awareness, and a defined
            path toward personal and intellectual development.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 lg:py-20 space-y-6 text-lg text-foreground/85 leading-[1.85]">
        <Reveal>
          <p>
            Our work spans across current affairs, history, philosophy, and technology — delivered through thoughtfully
            crafted articles, books, and video content. Whether through daily publications or long-form works, our goal
            is to translate complex ideas into accessible, practical insight that can be applied in everyday life.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p>
            Beyond knowledge, Twelve Lords is also at the forefront of technological innovation. Our dedicated tech team
            is actively developing modern hardware solutions embedded with secure cybersecurity frameworks. We believe
            that security should not be an afterthought, but a fundamental component of every product.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p>
            What sets us apart from contemporary industries is our unwavering emphasis on data protection and user
            safety, even in everyday technology. Through our products, we aim not only to provide functionality, but
            also to educate users on cybersecurity awareness — fostering a deeper understanding of digital risks and the
            importance of data integrity.
          </p>
        </Reveal>
      </section>

      {/* Mission / Vision / Story */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { Icon: Sparkles, title: "Our Mission", text: "To educate, inform, and elevate — translating complex ideas into clear, applicable insight." },
            { Icon: Telescope, title: "Our Vision", text: "A culture where knowledge and security are seen as essential public infrastructure." },
            { Icon: BookOpen, title: "Our Story", text: "Founded by writers and engineers who believe great products begin with great ideas." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="p-8 rounded-2xl bg-card border border-border shadow-card h-full">
                <c.Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-display text-2xl text-primary">{c.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cyber Cable deep section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={productCable} alt="Twelve Lords Cyber Cable"
              className="rounded-2xl shadow-elegant max-w-md mx-auto" loading="lazy" />
          </Reveal>
          <Reveal delay={100}>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Technology</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">A cable that thinks like a guard.</h2>
            <p className="mt-5 text-lg opacity-90 leading-relaxed">
              The Cyber Cable is built to address a fundamental weakness in modern connectivity: the automatic trust
              placed in USB connections. By separating power from data and introducing controlled communication, it
              eliminates unnecessary exposure and provides a reliable defense against modern USB-based threats.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
              {[
                "Default charge-only mode",
                "User-controlled data switch",
                "Up to 60W fast charging",
                "1m and 2m, black & white",
                "Reinforced cable build",
                "Hardware-level enforcement",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="text-center py-20 lg:py-28 mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-primary">Read with us. Build with us.</h2>
        <p className="mt-4 text-muted-foreground">
          The world doesn't need more noise. It needs more clarity. That's the work.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/articles">Start reading</Link></Button>
          <Button asChild variant="soft" size="lg"><Link to="/contact">Get in touch</Link></Button>
        </div>
      </section>
    </>
  );
};

export default About;
