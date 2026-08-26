import { useState } from "react";
import { ChefHat, Compass, Flame, MapPin, MessageCircle, Sparkles, Thermometer, Utensils } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site, waLink } from "@/data/site";
import { Link } from "@tanstack/react-router";

interface RegionCuisine {
  id: string;
  name: string;
  nameHindi: string;
  regionTag: string;
  cookingMedium: string;
  heatLevel: string;
  heroSpices: string[];
  signatureDish: string;
  traditionNote: string;
}

const regionalCuisines: RegionCuisine[] = [
  {
    id: "eastern-bengal",
    name: "Eastern & North Bengal Homestyle",
    nameHindi: "उत्तर बंगाल और पारंपरिक स्वाद",
    regionTag: "Siliguri, Dooars & Bengal Belt",
    cookingMedium: "Mustard Oil (सरसों का तेल)",
    heatLevel: "Balanced & Aromatic",
    heroSpices: ["Turmeric (Haldi) Powder", "Jeera Powder", "CTC Tea (चाय)"],
    signatureDish: "Traditional Macher Jhol, Dal Tadka & Afternoon CTC Kadak Chai",
    traditionNote: "Celebrates the pure golden glow of turmeric and freshly roasted cumin, finished with the rich malty kick of North Bengal CTC tea.",
  },
  {
    id: "north-dhaba",
    name: "North Indian & Punjabi Dhaba Style",
    nameHindi: "उत्तर भारतीय एवं ढाबा तड़का",
    regionTag: "Rich Gravies & Royal Feasts",
    cookingMedium: "Desi Ghee / Butter (देसी घी व मक्खन)",
    heatLevel: "Robust, Rich & Warm",
    heroSpices: ["Paneer Masala", "Mirchi Powder", "Dhaniya Powder"],
    signatureDish: "Shahi Paneer, Dal Makhani & Kadai Vegetables",
    traditionNote: "Heavy, velvety gravies loaded with aromatic whole coriander, fiery chilli warmth, and exotic royal masala blends.",
  },
  {
    id: "bihari-bhojpuri",
    name: "Bihari & Bhojpuri Rustic Curries",
    nameHindi: "पारंपरिक देहाती सब्जी एवं तड़का",
    regionTag: "Bihar & Eastern Corridor",
    cookingMedium: "Raw Mustard Oil & Whole Garlic",
    heatLevel: "Spicy & Earthy Heat",
    heroSpices: ["Sabji Masala", "Mirchi Powder", "Turmeric Powder"],
    signatureDish: "Aloo Gobhi Rasedar, Parwal Masala & Sattu Curries",
    traditionNote: "Earthy, robust home cooking with balanced dry spices that enhance seasonal vegetables without masking their natural sweetness.",
  },
  {
    id: "tea-culture",
    name: "Siliguri & Foothills Tea Culture",
    nameHindi: "सिलीगुड़ी चाय परंपरा",
    regionTag: "Tea Estate Gateway",
    cookingMedium: "Fresh Milk & Fresh Ginger/Elaichi",
    heatLevel: "Brisk, Malty & Uplifting",
    heroSpices: ["City King CTC Tea"],
    signatureDish: "Morning Ginger Kadak Chai & Evening Khasta Snacks",
    traditionNote: "Siliguri is the bustling gateway to Darjeeling and Dooars tea plantations. City King CTC Tea offers brisk liquor, deep color, and full-bodied cup strength.",
  },
];

export function RegionalTadkaMatcher() {
  const [activeCuisine, setActiveCuisine] = useState<RegionCuisine>(regionalCuisines[0]);

  const regionWaMsg = `Hello ${site.company}, I am interested in City King spices for "${activeCuisine.name}" (${activeCuisine.heroSpices.join(", ")}). Please share details.`;

  return (
    <section className="py-20 bg-card border-y border-border relative overflow-hidden">
      <div className="container-page space-y-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              <Compass className="size-3.5 text-accent" />
              <span>भारत का स्वाद • Regional Flavor Matcher</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              Explore Regional Tadka Traditions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              From North Bengal tea stalls to rich North Indian dhaba gravies, discover how City King spices complement diverse Indian cooking styles.
            </p>
          </div>
        </Reveal>

        {/* Interactive Cuisine Selector */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regionalCuisines.map((c) => {
            const isSelected = activeCuisine.id === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCuisine(c)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-lift scale-[1.02]"
                    : "bg-background border-border text-foreground hover:border-primary/40 hover:bg-muted/30"
                }`}
              >
                <span className="text-xs uppercase font-bold tracking-wider opacity-80">
                  {c.regionTag}
                </span>
                <div>
                  <h4 className="text-base font-bold leading-tight">{c.name}</h4>
                  <p
                    className={`text-xs mt-1 ${
                      isSelected ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {c.nameHindi}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Cuisine Showcase */}
        <Reveal key={activeCuisine.id}>
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-10 shadow-card grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-primary">
                  Cuisine Profile
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                  {activeCuisine.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {activeCuisine.traditionNote}
                </p>
              </div>

              {/* Cooking parameters */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-card border border-border space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-primary">
                    <Utensils className="size-3.5" />
                    <span>Cooking Medium</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {activeCuisine.cookingMedium}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-primary">
                    <Flame className="size-3.5" />
                    <span>Heat & Aroma Intensity</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {activeCuisine.heatLevel}
                  </p>
                </div>
              </div>

              {/* Recommended Spices in this Region */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Recommended City King Spices for this Style:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeCuisine.heroSpices.map((spice) => (
                    <span
                      key={spice}
                      className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary"
                    >
                      {spice}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card / CTA */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-cocoa text-cocoa-foreground border border-cocoa-foreground/15 shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  Signature Dish Pairing
                </span>
                <h4 className="text-xl font-bold font-display text-cocoa-foreground">
                  {activeCuisine.signatureDish}
                </h4>
                <p className="text-xs text-cocoa-foreground/75 leading-relaxed">
                  Cooked with love, patience, and unadulterated City King spices to recreate restaurant taste at home.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={waLink(regionWaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground font-bold py-3.5 px-6 text-sm shadow-md transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4" />
                  <span>Order Regional Combo on WhatsApp</span>
                </a>

                <Link
                  to="/products"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-cocoa-foreground/30 hover:border-accent hover:text-accent font-semibold py-3 px-6 text-xs transition-colors"
                >
                  <span>Explore Full Spice Catalog</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
