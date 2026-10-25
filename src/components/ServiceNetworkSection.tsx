import { Link } from "@tanstack/react-router";
import {
  MapPin,
  ArrowRight,
  Store,
  Truck,
  Building2,
  Sparkles,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import textureDark from "@/assets/texture-spice-dark.jpg";

export function ServiceNetworkSection() {
  const { lang } = useLanguage();

  return (
    <section
      aria-label="Our Service Network Highlight"
      className="py-16 sm:py-20 bg-background border-y border-border relative overflow-hidden"
    >
      <div className="container-page px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* =========================================================================
              BIG BOLD HIGHLIGHT CARD — CLICKABLE TO DEDICATED /network WEBPAGE
             ========================================================================= */}
          <Link
            to="/network"
            className="group relative block w-full rounded-2xl sm:rounded-4xl bg-gradient-to-br from-cocoa via-[#2A1610] to-cocoa text-cocoa-foreground p-5 sm:p-10 md:p-16 shadow-2xl border-2 border-accent/40 hover:border-accent transition-all duration-500 overflow-hidden hover:shadow-[0_20px_60px_rgba(184,50,36,0.35)] cursor-pointer"
          >
            {/* Background Texture & Ambient Glows */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <img
                src={textureDark}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -top-24 -right-24 size-96 bg-primary/30 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-500" />
              <div className="absolute -bottom-24 -left-24 size-96 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-cocoa/90 via-cocoa/70 to-cocoa/90" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              {/* Top Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-md shadow-sm">
                <MapPin className="size-4 animate-bounce" />
                <span>{lang === "hi" ? "क्षेत्रीय उपलब्धता व वितरण" : "REGIONAL AVAILABILITY & RETAIL COVERAGE"}</span>
              </div>

              {/* MASSIVE BOLD HEADLINE */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight leading-none text-white uppercase drop-shadow-md">
                  OUR SERVICE NETWORK
                </h2>
                <p className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-accent to-amber-200">
                  West Bengal <span className="text-white/60 font-light">|</span> Entire North Bihar
                </p>
              </div>

              {/* Bold Supporting Brand Statement */}
              <p className="text-sm sm:text-base md:text-lg text-cocoa-foreground/90 max-w-2xl mx-auto leading-relaxed">
                {lang === "hi" ? (
                  <>
                    <strong className="text-white font-bold">सिटी किंग मसाला कंपनी</strong> की सेवाएं पूरे{" "}
                    <strong className="text-amber-300 font-bold">उत्तर बिहार के सभी 21 जिलों</strong> के बाजारों में
                    पूरी तरह उपलब्ध हैं, और साथ ही{" "}
                    <strong className="text-white font-bold">सिलीगुड़ी व दार्जिलिंग (पश्चिम बंगाल)</strong> के हर जनरल
                    स्टोर व किराना दुकानों में हमारा असली मसाला सुलभ है।
                  </>
                ) : (
                  <>
                    <strong className="text-white font-bold">City King Masala Company</strong> proudly services the{" "}
                    <strong className="text-amber-300 font-bold">entire 21 districts of North Bihar</strong> and across{" "}
                    <strong className="text-white font-bold">Siliguri & Darjeeling (West Bengal)</strong> — actively
                    available in everyday General Stores and Kirana shops.
                  </>
                )}
              </p>

              {/* 3 Bold Feature Metric Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-bold">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/15 text-white backdrop-blur-md">
                  <Building2 className="size-4 text-accent" />
                  <span>0. Siliguri & Darjeeling (HQ)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/15 text-amber-300 backdrop-blur-md">
                  <Store className="size-4 text-leaf" />
                  <span>21 North Bihar Districts</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/15 text-white backdrop-blur-md">
                  <Truck className="size-4 text-amber-400" />
                  <span>Daily Kirana & Mandi Supply</span>
                </div>
              </div>

              {/* BIG BOLD INTERACTIVE CLICK CTA BUTTON */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-amber-500 via-primary to-amber-600 hover:from-amber-400 hover:to-primary text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_35px_rgba(245,158,11,0.5)]">
                  <span>
                    {lang === "hi"
                      ? "सभी 22 जिले और शहर की सूची देखें (Click Here)"
                      : "CLICK TO VIEW ALL 22 CITIES & DISTRICTS"}
                  </span>
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>

              {/* Micro Helper Note */}
              <p className="text-[11px] sm:text-xs text-cocoa-foreground/60 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-leaf" />
                <span>
                  {lang === "hi"
                    ? "क्लिक करने पर नया पेज खुलेगा जिसमें सभी 21 जिले, कस्बे व मंडियां दिखाई देंगी"
                    : "Tap to open the complete network directory with district lookup, key towns & dealer contacts"}
                </span>
              </p>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
