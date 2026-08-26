import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { site, telLink } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-cocoa text-cocoa-foreground border-t border-cocoa-foreground/10 pb-16 lg:pb-0">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
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
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {lang === "hi" ? "मुख्य लिंक" : "Explore"}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: t("nav.home"), to: "/" },
              { label: t("nav.about"), to: "/about" },
              { label: t("nav.products"), to: "/products" },
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
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {lang === "hi" ? "पंजीकृत कार्यालय व निर्माण" : "Registered Office"}
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-cocoa-foreground/80 leading-relaxed">
                <strong>{site.company}</strong>
                <br />
                {site.addressLine}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <a href={telLink} className="text-cocoa-foreground/85 font-medium hover:text-accent transition-colors">
                  {site.phoneDisplay}
                </a>
                <p className="text-xs text-cocoa-foreground/60 mt-0.5">
                  {lang === "hi" ? "संस्थापक" : "Owner"}: {site.owner}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cocoa-foreground/10 bg-black/20">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-cocoa-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.company}. {lang === "hi" ? "सर्वाधिकार सुरक्षित।" : "All Rights Reserved."}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>Siliguri, Darjeeling, West Bengal – 734001</span>
            <span>•</span>
            <span className="text-cocoa-foreground/50">Tech Partner: TechSeva IT Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

