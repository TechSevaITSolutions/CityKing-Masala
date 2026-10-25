import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Search,
  Truck,
  Building2,
  Store,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { serviceDistricts, DistrictServiceArea } from "@/data/network";
import { site, telLink, waLink } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type RegionFilter = "All" | "West Bengal" | "Tirhut" | "Saran" | "Mithila" | "Kosi" | "Seemanchal";

export function ServiceNetworkSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>("All");
  const { lang } = useLanguage();

  const filteredDistricts = useMemo(() => {
    return serviceDistricts.filter((item) => {
      const matchesRegion = selectedRegion === "All" || item.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.hindiName.toLowerCase().includes(q) ||
        item.regionLabel.toLowerCase().includes(q) ||
        item.majorTowns.some((t) => t.toLowerCase().includes(q)) ||
        item.highwayRoute.toLowerCase().includes(q);

      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <section
      id="service-network"
      aria-label="City King Service Network Across West Bengal and North Bihar"
      className="py-20 sm:py-24 bg-card border-y border-border relative overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative z-10 px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <MapPin className="size-3.5" />
              <span>{lang === "hi" ? "हमारा सेवा नेटवर्क • 22 जिले" : "OUR SERVICE NETWORK • 22 ACTIVE DISTRICTS"}</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              West Bengal <span className="text-primary font-normal">|</span> Entire North Bihar
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {lang === "hi" ? (
                <>
                  <strong className="text-foreground font-semibold">सिटी किंग मसाला कंपनी</strong> की सेवाएं पूरे{" "}
                  <strong className="text-primary font-semibold">उत्तर बिहार के सभी 21 जिलों</strong> के बाजारों में
                  पूरी तरह सक्रिय हैं, और साथ ही <strong className="text-foreground">सिलीगुड़ी व दार्जिलिंग (पश्चिम बंगाल)</strong> के
                  हर जनरल स्टोर व किराना दुकानों में हमारा असली मसाला आसानी से उपलब्ध है।
                </>
              ) : (
                <>
                  <strong className="text-foreground font-semibold">City King Masala Company</strong> proudly services the{" "}
                  <strong className="text-primary font-semibold">entire 21 districts of North Bihar</strong> and across{" "}
                  <strong className="text-foreground">Siliguri, Darjeeling (West Bengal)</strong> — actively stocked in your
                  local neighborhood General Stores and Kirana shops.
                </>
              )}
            </p>
          </Reveal>

          {/* Quick Metrics Strip */}
          <Reveal delay={250}>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-semibold text-muted-foreground">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border">
                <Building2 className="size-3.5 text-primary" />
                <span>Siliguri HQ & Factory</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border">
                <Store className="size-3.5 text-leaf" />
                <span>21 North Bihar Districts</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border">
                <Truck className="size-3.5 text-accent" />
                <span>Daily Mandi & Kirana Supply</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "hi"
                  ? "अपना जिला, कस्बा या मंडी खोजें (उदा: दरभंगा, मुजफ्फरपुर, बेतिया, सिलीगुड़ी)..."
                  : "Search your district, town or major mandi (e.g. Darbhanga, Muzaffarpur, Bettiah, Siliguri)..."
              }
              className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-2xl bg-background border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground bg-muted px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {[
              { id: "All", labelEn: "All Locations (22)", labelHi: "सभी 22 क्षेत्र" },
              { id: "West Bengal", labelEn: "Siliguri & Darjeeling (WB)", labelHi: "सिलीगुड़ी, दार्जिलिंग (HQ)" },
              { id: "Tirhut", labelEn: "Tirhut (6 Districts)", labelHi: "तिरहुत प्रमंडल" },
              { id: "Saran", labelEn: "Saran (3 Districts)", labelHi: "सारण प्रमंडल" },
              { id: "Mithila", labelEn: "Mithila (4 Districts)", labelHi: "मिथिला प्रमंडल" },
              { id: "Kosi", labelEn: "Kosi (4 Districts)", labelHi: "कोशी प्रमंडल" },
              { id: "Seemanchal", labelEn: "Seemanchal (4 Districts)", labelHi: "सीमांचल प्रमंडल" },
            ].map((tab) => {
              const isActive = selectedRegion === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedRegion(tab.id as RegionFilter)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-xs scale-105"
                      : "bg-background text-muted-foreground hover:text-foreground border border-border hover:bg-muted/50",
                  )}
                >
                  {lang === "hi" ? tab.labelHi : tab.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* District Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredDistricts.map((district) => {
            const isHQ = district.id === 0;
            return (
              <div
                key={district.id}
                className={cn(
                  "p-5 sm:p-6 rounded-2xl bg-background border transition-all duration-300 hover:shadow-lg flex flex-col justify-between group",
                  isHQ
                    ? "border-amber-500/60 ring-2 ring-amber-500/20 bg-amber-500/[0.02]"
                    : "border-border hover:border-primary/40",
                )}
              >
                <div className="space-y-3">
                  {/* Card Header: District Number & Status Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-muted-foreground px-2 py-0.5 rounded bg-muted">
                      #{district.id < 10 ? `0${district.id}` : district.id}
                    </span>

                    <span
                      className={cn(
                        "text-[11px] font-bold px-2.5 py-0.5 rounded-full border",
                        isHQ
                          ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                          : district.status === "High Demand"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : "bg-leaf/10 text-leaf border-leaf/20",
                      )}
                    >
                      {isHQ
                        ? "HQ & Factory Hub"
                        : district.status === "High Demand"
                          ? "🔥 High Demand Market"
                          : "✓ General Stores Active"}
                    </span>
                  </div>

                  {/* District Name */}
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-foreground flex items-center gap-1.5">
                      <span>{district.name}</span>
                      {isHQ && <Sparkles className="size-4 text-amber-500 shrink-0" />}
                    </h3>
                    <p className="text-xs font-medium text-primary font-hindi mt-0.5">
                      {district.hindiName}
                    </p>
                  </div>

                  {/* Availability Note */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {lang === "hi" ? district.availabilityNoteHi : district.availabilityNoteEn}
                  </p>

                  {/* Major Towns / Mandis Pills */}
                  <div className="pt-1">
                    <p className="text-[11px] font-semibold text-foreground/80 mb-1.5 flex items-center gap-1">
                      <Store className="size-3 text-primary" />
                      <span>{lang === "hi" ? "प्रमुख कस्बें व व्यापारिक मंडियां:" : "Key Towns & Mandis:"}</span>
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {district.majorTowns.slice(0, 5).map((town) => (
                        <span
                          key={town}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-foreground/75 font-medium border border-border/50"
                        >
                          {town}
                        </span>
                      ))}
                      {district.majorTowns.length > 5 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground font-medium">
                          +{district.majorTowns.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Fast WhatsApp Enquiry */}
                <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-muted-foreground truncate max-w-[150px]">
                    {district.highwayRoute.split("/")[0]}
                  </span>

                  <a
                    href={waLink(
                      site.phonePrimary,
                      `Hello Sah Food Industries, I am from ${district.name}. I want to find the nearest General Store selling City King Masala or apply for local dealership.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-bold transition-transform hover:translate-x-0.5 cursor-pointer"
                  >
                    <span>{lang === "hi" ? "दुकान/डीलर खोजें" : "Locate Store"}</span>
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredDistricts.length === 0 && (
          <div className="text-center py-12 p-8 rounded-3xl bg-background border border-border max-w-md mx-auto space-y-3">
            <Store className="size-8 text-muted-foreground mx-auto" />
            <h4 className="font-bold text-base text-foreground">
              {lang === "hi" ? "कोई जिला नहीं मिला" : "No District Found"}
            </h4>
            <p className="text-xs text-muted-foreground">
              {lang === "hi"
                ? "हम उत्तर बिहार के सभी 21 जिलों और सिलीगुड़ी-दार्जिलिंग में उपलब्ध हैं। कृपया दूसरा नाम खोजें।"
                : "We are available across all 21 districts of North Bihar & Siliguri/Darjeeling. Try searching with a different town name."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
              }}
              className="text-xs font-semibold text-primary underline"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Bottom Callout & Page Link Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-cocoa text-cocoa-foreground border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-3 py-1 text-xs font-bold text-accent">
                <CheckCircle2 className="size-3.5" />
                <span>{lang === "hi" ? "सक्रिय खुदरा नेटवर्क" : "Active Retail Network"}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                {lang === "hi"
                  ? "अपने जिले में सिटी किंग के साथ व्यापार शुरू करें"
                  : "Expand With City King Spices in Your District"}
              </h3>
              <p className="text-xs sm:text-sm text-cocoa-foreground/80 max-w-xl">
                {lang === "hi"
                  ? "यदि आप उत्तर बिहार या पश्चिम बंगाल में दुकानदार, थोक व्यापारी या वितरक हैं, तो सीधे कारखाने से जुड़ें और बेहतरीन मार्जिन प्राप्त करें।"
                  : "Kirana store owners, wholesalers, and prospective stockists across North Bihar & West Bengal can connect directly with our dispatch terminal for maximum dealer margins."}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                to="/network"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105"
              >
                <span>{lang === "hi" ? "पूरा सर्विस नेटवर्क पेज देखें" : "View Full Network Page"}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                to="/distributor"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-accent text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>{lang === "hi" ? "डीलरशिप फॉर्म भरें" : "Apply for Dealership"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
