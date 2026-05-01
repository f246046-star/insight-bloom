import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Message sent", { description: "We'll be in touch shortly." });
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <>
      <section className="bg-hero py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">Contact</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-primary">Let's talk.</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Questions, ideas, partnerships — we read every message. Send us a note and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { Icon: Mail, label: "General", value: "Info@twelvelords.com", href: "mailto:Info@twelvelords.com" },
              { Icon: Mail, label: "Technology", value: "Tech@twelvelords.com", href: "mailto:Tech@twelvelords.com" },
              { Icon: Mail, label: "Books", value: "Books@twelvelords.com", href: "mailto:Books@twelvelords.com" },
              { Icon: Phone, label: "Phone", value: "+44 20 0000 0000", href: "tel:+442000000000" },
              { Icon: MapPin, label: "Location", value: "London, United Kingdom" },
            ].map((c) => (
              <a
                key={c.label + c.value}
                href={c.href}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <c.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">{c.label}</p>
                  <p className="mt-1 text-primary font-medium">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-2 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social"
                  className="p-3 rounded-full bg-secondary text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={submit}
            className="lg:col-span-3 p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-elegant space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={6} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2" placeholder="Tell us a little about what you have in mind…" />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={sending}>
              {sending ? "Sending…" : (<>Send Message <Send className="h-4 w-4" /></>)}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
