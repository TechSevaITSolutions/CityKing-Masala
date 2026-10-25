import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, UserCheck, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { site, telLink, telLink2, waLink, waMessages } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-cocoa text-cocoa-foreground border-t border-cocoa-foreground/10 pb-16 lg:pb-0">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand & Slogans Column */}
        <div className="lg:col-span-1 space-y-4">
          <BrandMark tone="light" />
          <p className="text-sm leading-relaxed text-cocoa-foreground/75">
            {lang === "hi"
              ? "सिटी किंग मसाले — साह फूड इंडस्ट्रीज का प्रीमियम ब्रांड, जो हर भारतीय रसोई में असली सुगंध, रंग और शुद्ध स्वाद लेकर आता है।"
              : "City King Spices — premium spice brand of Sah Food Industries, bringing authentic aroma, colour, and taste to everyday Indian kitchens."}
          </p>
          <div className="pt-1 space-y-1">
            <p className="text-sm font-semibold tracking-wide text-accent font-display">
              "{site.tagline}"
            </p>
            <p className="text-xs text-cocoa-foreground/80">
              {site.taglineHindi}
            </p>
          </div>

          {/* Social Media Follow Section */}
          <div className="pt-3">
            <p className="text-xs uppercase tracking-wider text-accent font-bold mb-2.5">
              {lang === "hi" ? "सोशल मीडिया पर जुड़ें" : "Follow City King"}
            </p>
            <div className="flex items-center gap-2.5">
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md"
                  aria-label="City King on Instagram"
                  title="Follow us on Instagram (@citykingfoodproducts)"
                >
                  <Instagram className="size-4" />
                </a>
              )}

              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-full bg-blue-600 text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md"
                  aria-label="City King on Facebook"
                  title="Follow us on Facebook"
                >
                  <Facebook className="size-4" />
                </a>
              )}

              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-emerald-600 text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md"
                aria-label="City King on WhatsApp"
                title="Chat with Sah Food Industries on WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Navigation */}
        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {lang === "hi" ? "मुख्य लिंक" : "Explore"}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: t("nav.home"), to: "/" },
              { label: t("nav.about"), to: "/about" },
              { label: t("nav.products"), to: "/products" },
              { label: t("nav.network"), to: "/network" },
              { label: t("nav.brand"), to: "/brand" },
              { label: t("nav.gallery"), to: "/gallery" },
              { label: t("nav.contact"), to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Business Links Navigation */}
        <nav aria-label="Business links">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {lang === "hi" ? "व्यापार एवं डीलरशिप" : "Business"}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/distributor" className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                {lang === "hi" ? "वितरक एवं डीलरशिप पूछताछ" : "Distributor & Dealership Enquiry"}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                {lang === "hi" ? "थोक / वाणिज्यिक ऑर्डर" : "Bulk / Wholesale Orders"}
              </Link>
            </li>
            <li>
              <Link to="/brand" className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                {lang === "hi" ? "सिटी किंग शुद्धता संकल्प" : "The City King Promise"}
              </Link>
            </li>
            <li className="pt-2">
              <div className="rounded-xl bg-black/30 border border-white/10 p-3 text-xs space-y-1">
                <span className="text-amber-300 font-semibold flex items-center gap-1.5">
                  <UserCheck className="size-3.5 text-accent" />
                  {lang === "hi" ? "कंपनी संस्थापक" : "Founder of City King"}
                </span>
                <p className="text-white/90 font-medium">
                  {site.owner}
                </p>
                <p className="text-[11px] text-cocoa-foreground/60">
                  {site.founderTitle}
                </p>
              </div>
            </li>
          </ul>
        </nav>

        {/* Registered Office & Contact Details */}
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {lang === "hi" ? "पंजीकृत कार्यालय व निर्माण इकाई" : "Registered Office & Factory"}
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-cocoa-foreground/80 leading-relaxed text-xs sm:text-sm">
                <strong className="text-white">{site.company}</strong>
                <br />
                {site.streetAddress}
                <br />
                {site.city}, {site.district} – {site.pincode}
                <br />
                {site.state}, {site.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <div className="space-y-1">
                <div className="flex flex-col gap-0.5">
                  <a href={telLink} className="text-cocoa-foreground/90 font-medium hover:text-accent transition-colors text-xs sm:text-sm">
                    {site.phonePrimary} <span className="text-[11px] text-accent font-semibold">(Primary)</span>
                  </a>
                  <a href={telLink2} className="text-cocoa-foreground/85 font-medium hover:text-accent transition-colors text-xs sm:text-sm">
                    {site.phoneSecondary} <span className="text-[11px] text-cocoa-foreground/60">(Sales / WhatsApp)</span>
                  </a>
                </div>
                <p className="text-xs text-cocoa-foreground/60 mt-1">
                  {lang === "hi" ? "संस्थापक" : "Founder"}: <strong>{site.founderShort}</strong>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Address Strip */}
      <div className="border-t border-cocoa-foreground/10 bg-black/20">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-cocoa-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.company} ({site.brandFull}). {lang === "hi" ? "सर्वाधिकार सुरक्षित।" : "All Rights Reserved."}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span>{site.fullAddress}</span>
            <span>•</span>
            <span className="text-cocoa-foreground/50">Tech Partner: TechSeva IT Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
