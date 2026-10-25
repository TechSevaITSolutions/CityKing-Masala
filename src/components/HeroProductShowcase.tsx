import { useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, MessageCircle, Plus, ShoppingBag, Sparkles } from "lucide-react";
import { products, type Product } from "@/data/products";
import { addToOrderBag } from "@/components/SmartOrderDrawer";
import { waLink, waMessages } from "@/data/site";

// Color ambiance themes for each spice
const spiceThemes: Record<
  string,
  { bgGlow: string; accentColor: string; badge: string; highlight: string }
> = {
  "turmeric-haldi-powder": {
    bgGlow: "from-amber-500/25 via-yellow-500/10 to-transparent",
    accentColor: "#f59e0b",
    badge: "100% Pure Curcumin Lock",
    highlight: "Cold-Ground Golden Turmeric",
  },
  "mirchi-chilli-powder": {
    bgGlow: "from-red-600/30 via-orange-600/10 to-transparent",
    accentColor: "#ef4444",
    badge: "Stemless Sun-Dried Red Chilli",
    highlight: "Natural Vibrant Crimson Heat",
  },
  "dhaniya-coriander-powder": {
    bgGlow: "from-emerald-600/25 via-lime-600/10 to-transparent",
    accentColor: "#10b981",
    badge: "Plump Green Coriander Seeds",
    highlight: "Fresh Herbal Body & Aroma",
  },
  "jeera-cumin-powder": {
    bgGlow: "from-amber-700/30 via-yellow-800/15 to-transparent",
    accentColor: "#b45309",
    badge: "Roasted Cumin Essential Oils",
    highlight: "Nutty Earthy Fragrance",
  },
  "sabji-masala": {
    bgGlow: "from-orange-600/25 via-amber-600/15 to-transparent",
    accentColor: "#f97316",
    badge: "Daily Homestyle Master Blend",
    highlight: "Everyday Vegetable Sensation",
  },
  "paneer-masala": {
    bgGlow: "from-rose-600/25 via-amber-600/15 to-transparent",
    accentColor: "#f43f5e",
    badge: "Royal Mughlai & Kadai Feast",
    highlight: "Restaurant-Style Rich Gravy",
  },
  "premium-ctc-tea-black": {
    bgGlow: "from-amber-600/30 via-amber-900/20 to-transparent",
    accentColor: "#d97706",
    badge: "Foothills Garden Tea Leaves",
    highlight: "Brisk Liquor & Amber Cup",
  },
  "premium-chai-patti-gold": {
    bgGlow: "from-yellow-500/25 via-amber-700/15 to-transparent",
    accentColor: "#eab308",
    badge: "Gold Quality CTC Granules",
    highlight: "Rich Malty Morning Freshness",
  },
  "classic-chai-patti": {
    bgGlow: "from-emerald-700/25 via-amber-800/15 to-transparent",
    accentColor: "#059669",
    badge: "Heritage Kadak Chai Blend",
    highlight: "Robust All-Day Kadak Strength",
  },
};

export function HeroProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle every 3.8 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentProduct = products[currentIndex];
  const theme = spiceThemes[currentProduct.slug] || {
    bgGlow: "from-accent/20 via-primary/10 to-transparent",
    accentColor: "#d97706",
    badge: "City King Premium Spice",
    highlight: "Sah Food Industries Siliguri",
  };

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div
      className="relative mx-auto max-w-md lg:max-w-none w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Aura Glow behind card */}
      <div
        className={`absolute -inset-4 rounded-3xl bg-gradient-to-tr ${theme.bgGlow} blur-2xl opacity-80 pointer-events-none transition-all duration-700`}
      />

      {/* Main Luxury Stage Card */}
      <div className="relative rounded-3xl border border-cocoa-foreground/20 bg-cocoa/90 backdrop-blur-2xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between space-y-5">
        {/* Top Header Strip inside Stage */}
        <div className="flex items-center justify-between gap-2 pb-2 border-b border-cocoa-foreground/10">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-accent" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
              {theme.badge}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevProduct}
              className="size-7 rounded-full bg-black/40 hover:bg-black/70 text-cocoa-foreground flex items-center justify-center transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft className="size-4" />
            </button>
            <span className="text-[11px] font-mono text-cocoa-foreground/70 px-1.5">
              {currentIndex + 1}/{products.length}
            </span>
            <button
              type="button"
              onClick={nextProduct}
              className="size-7 rounded-full bg-black/40 hover:bg-black/70 text-cocoa-foreground flex items-center justify-center transition-colors"
              aria-label="Next product"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Central 3D Product Stage */}
        <div className="relative rounded-2xl bg-gradient-to-b from-black/50 to-black/80 p-6 overflow-hidden border border-cocoa-foreground/10 text-center min-h-[300px] flex flex-col justify-between items-center group">
          {/* Top Pill on Packet */}
          <div className="w-full flex justify-between items-center">
            {currentProduct.hindiName && (
              <span className="inline-block text-xs font-bold text-accent px-3 py-1 rounded-full bg-black/40 border border-accent/20 leading-normal overflow-visible">
                {currentProduct.hindiName}
              </span>
            )}
            <span className="text-[10px] font-semibold text-cocoa-foreground/70 uppercase tracking-widest">
              Siliguri Fresh Pack
            </span>
          </div>

          {/* Animated Product Packet Image */}
          <div className="relative my-3 h-52 w-full flex items-center justify-center">
            <img
              key={currentProduct.id}
              src={currentProduct.image}
              alt={currentProduct.name}
              className="max-h-52 w-auto max-w-[240px] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)] animate-fade-in transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Product Label & Details */}
          <div className="space-y-1 w-full overflow-visible">
            <h3 className="font-display text-lg sm:text-xl font-bold text-cocoa-foreground leading-normal py-0.5">
              {currentProduct.name}
            </h3>
            <p className="text-xs text-accent font-medium leading-normal">
              {theme.highlight}
            </p>

            {/* Pack sizes strip */}
            {currentProduct.sizes && currentProduct.sizes.length > 0 && (
              <div className="flex items-center justify-center gap-1.5 pt-1.5 flex-wrap">
                {currentProduct.sizes.slice(0, 4).map((sz) => (
                  <span
                    key={sz}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/10 text-cocoa-foreground/90 border border-white/10"
                  >
                    {sz}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => addToOrderBag(currentProduct.slug)}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-4 text-xs shadow-md transition-all active:scale-95"
          >
            <Plus className="size-3.5 text-accent" />
            <span>Add to Order Bag</span>
          </button>

          <a
            href={waLink(waMessages.product(currentProduct.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground font-bold py-3 px-4 text-xs shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="size-3.5" />
            <span>Enquire on WA</span>
          </a>
        </div>

        {/* Thumbnail Selector Strip (Click to Switch Instantly) */}
        <div className="pt-2 border-t border-cocoa-foreground/10">
          <div className="text-[10px] uppercase tracking-wider text-cocoa-foreground/60 font-semibold mb-2 text-center">
            Tap Any Product to View ({products.length} Products Available)
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {products.slice(0, 5).map((p, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-1.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                    isActive
                      ? "bg-black/60 border-accent scale-105 shadow-md"
                      : "bg-black/25 border-cocoa-foreground/10 hover:border-accent/40 opacity-70 hover:opacity-100"
                  }`}
                  title={p.name}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="size-8 object-contain"
                  />
                  <span className="text-[9px] font-bold text-cocoa-foreground mt-1 line-clamp-1">
                    {p.name.replace("City King ", "").split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
