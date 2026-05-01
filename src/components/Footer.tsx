import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're on the list", { description: "Welcome to the Twelve Lords newsletter." });
    setEmail("");
  };

  return (
    <footer className="mt-24 border-t border-border bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground font-display font-semibold">
                XII
              </span>
              <span className="font-display text-xl font-semibold text-primary">Twelve Lords</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Building systems of knowledge and security designed to strengthen both the mind and the modern digital
              life.
            </p>
            <div className="flex items-center gap-2 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-background border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["Articles", "/articles"],
                ["Books", "/books"],
                ["About Us", "/about"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="text-muted-foreground hover:text-primary transition-smooth">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <a href="mailto:Info@twelvelords.com" className="hover:text-primary block">Info@twelvelords.com</a>
                  <a href="mailto:Tech@twelvelords.com" className="hover:text-primary block">Tech@twelvelords.com</a>
                  <a href="mailto:Books@twelvelords.com" className="hover:text-primary block">Books@twelvelords.com</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +44 20 0000 0000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> London · United Kingdom
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Thoughtful essays and product updates. No spam, ever.
            </p>
            <form onSubmit={subscribe} className="flex flex-col gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="rounded-full bg-background"
                required
              />
              <Button type="submit" variant="hero" size="lg">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Twelve Lords. All rights reserved.</p>
          <p>Crafted with care · Knowledge · Security · Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
