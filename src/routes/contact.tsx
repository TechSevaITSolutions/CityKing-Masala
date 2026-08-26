import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site, telLink, waLink, waMessages } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState("Product Information");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMsg = `Hello ${site.company},\nName: ${name}\nPhone: ${phone}\nTopic: ${enquiryType}\nMessage: ${message}`;
    const url = waLink(fullMsg);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative py-16 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="container-page relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              Contact Sah Food Industries
            </h1>
            <p className="text-cocoa-foreground/80 text-base sm:text-lg">
              Have questions about City King Spices, bulk supply, or retail orders? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* CONTENT & FORM */}
        <section className="py-16 bg-background">
          <div className="container-page grid lg:grid-cols-12 gap-12">
            {/* Contact Info Details */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Direct Contact</span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display">
                    Reach Out To Us Directly
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Connect with our Siliguri office for retail orders, product pricing, and general questions.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4">
                <Reveal delay={100}>
                  <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Registered Office / Factory</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>{site.company}</strong>
                        <br />
                        {site.addressLine}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Phone & WhatsApp</h4>
                      <div className="mt-1 space-y-1">
                        <a href={telLink} className="block text-sm text-primary font-medium hover:underline">
                          {site.phoneDisplay}
                        </a>
                        <p className="text-xs text-muted-foreground">Owner: {site.owner}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <a
                    href={waLink(waMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-leaf/10 border border-leaf/30 flex items-center justify-between gap-4 text-leaf hover:bg-leaf/20 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-leaf text-leaf-foreground flex items-center justify-center shrink-0">
                        <MessageCircle className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">Instant WhatsApp Chat</h4>
                        <p className="text-xs text-muted-foreground">Direct response from our team</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold underline group-hover:translate-x-1 transition-transform">
                      Message Now →
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="p-8 rounded-3xl bg-card border border-border shadow-card">
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Fill out the form below to message us directly via WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          Phone / Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:border-primary focus:outline-none"
                      >
                        <option value="Product Information">Product Information & Pricing</option>
                        <option value="Retail Purchase">Retail / Home Purchase</option>
                        <option value="Distributor Enquiry">Distributor / Dealership</option>
                        <option value="Hotel / Catering Supply">Hotel / Catering Bulk Supply</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Your Message / Requirement *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us what products or quantities you need..."
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:border-primary focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 shadow-md transition-all hover:scale-[1.01]"
                    >
                      <Send className="size-4" />
                      <span>Send Inquiry via WhatsApp</span>
                    </button>

                    {submitted && (
                      <p className="text-center text-xs text-leaf font-medium">
                        ✓ Opening WhatsApp with your message details...
                      </p>
                    )}
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
