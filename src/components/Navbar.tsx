import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { navLinks, site, telLink, waLink, waMessages } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "container-page flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link to="/" aria-label={`${site.brandFull} home`} className="shrink-0">
          <BrandMark />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Link
            to="/distributor"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-full border border-border lg:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="container-page flex h-20 items-center justify-between">
          <BrandMark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full border border-border"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="container-page flex flex-col gap-1 pt-4 pb-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="border-b border-border/60 py-4 font-display text-2xl"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/distributor"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex h-13 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground"
          >
            Business / Distributor Enquiry
          </Link>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={telLink}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-border font-medium"
            >
              <Phone className="size-4" aria-hidden="true" /> Call
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-leaf font-medium text-leaf-foreground"
            >
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
