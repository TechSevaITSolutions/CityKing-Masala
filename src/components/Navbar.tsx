import { Link } from "@tanstack/react-router";
import { Facebook, Globe, Instagram, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { site, telLink, telLink2, waLink, waMessages } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/products", label: t("nav.products") },
    { to: "/network", label: t("nav.network") },
    { to: "/brand", label: t("nav.brand") },
    { to: "/about", label: t("nav.about") },
    { to: "/distributor", label: t("nav.distributor") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") },
  ];

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
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md shadow-xs"
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

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
          {navItems.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/10 font-semibold" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary hover:bg-muted/50" }}
                className="rounded-full px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-all"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Action & Language Switcher */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {/* Language Switcher Badge */}
          <div className="flex items-center rounded-full bg-muted/80 p-1 border border-border text-xs font-bold shadow-2xs">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-2.5 py-1 rounded-full transition-all duration-200",
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-xs scale-100"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("hi")}
              className={cn(
                "px-2.5 py-1 rounded-full transition-all duration-200",
                lang === "hi"
                  ? "bg-primary text-primary-foreground shadow-xs scale-100"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              हिन्दी
            </button>
          </div>

          <a
            href={telLink}
            title={`Call Sah Food Industries: ${site.phonePrimary} / ${site.phoneSecondary}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            <span>{site.phonePrimary}</span>
          </a>

          {/* Social Media Header Icons */}
          <div className="flex items-center gap-1 border-l border-border/70 pl-2">
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-rose-600 hover:bg-rose-500/10 transition-colors"
                aria-label="City King Instagram Page"
                title="Follow City King on Instagram"
              >
                <Instagram className="size-4" />
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:bg-blue-500/10 transition-colors"
                aria-label="City King Facebook Page"
                title="Follow City King on Facebook"
              >
                <Facebook className="size-4" />
              </a>
            )}
          </div>

          <Link
            to="/distributor"
            className="inline-flex items-center rounded-full bg-primary px-4 xl:px-5 py-2 text-xs xl:text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            {t("nav.dealership")}
          </Link>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Switcher Quick Pill */}
          <div className="flex items-center rounded-full bg-muted/80 p-0.5 border border-border text-[11px] font-bold">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-2 py-0.5 rounded-full transition-all",
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground",
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("hi")}
              className={cn(
                "px-2 py-0.5 rounded-full transition-all",
                lang === "hi"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground",
              )}
            >
              हिन्दी
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-200 lg:hidden overflow-y-auto",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="container-page flex h-20 items-center justify-between border-b border-border/50">
          <BrandMark />

          <div className="flex items-center gap-3">
            {/* Language toggle inside drawer */}
            <div className="flex items-center rounded-full bg-muted p-1 border border-border text-xs font-bold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "px-3 py-1 rounded-full transition-all",
                  lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                )}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("hi")}
                className={cn(
                  "px-3 py-1 rounded-full transition-all",
                  lang === "hi" ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                )}
              >
                हिन्दी
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full border border-border"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="container-page flex flex-col gap-1 pt-4 pb-12">
          {navItems.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary font-bold" }}
              className="border-b border-border/60 py-3.5 font-display text-xl flex items-center justify-between"
            >
              <span>{l.label}</span>
            </Link>
          ))}

          <Link
            to="/distributor"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-md text-sm"
          >
            {t("b2b.btn")}
          </Link>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={telLink}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border font-medium text-xs sm:text-sm bg-card"
            >
              <Phone className="size-4" aria-hidden="true" /> Call
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-leaf font-medium text-leaf-foreground text-xs sm:text-sm shadow-xs"
            >
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

