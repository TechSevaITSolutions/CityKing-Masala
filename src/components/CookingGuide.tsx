import { useState } from "react";
import { ChefHat, Flame, MessageCircle, Sparkles, Utensils } from "lucide-react";
import { dishPairings, getProduct, type DishPairing } from "@/data/products";
import { site, waLink } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function CookingGuide() {
  const [selectedDish, setSelectedDish] = useState<DishPairing>(dishPairings[0]);

  const recommendedProducts = selectedDish.recommendedSlugs
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const comboOrderMsg = `Hello ${site.company}, I am interested in the spice combo for "${selectedDish.name}" (${recommendedProducts.map((p) => p.name).join(" + ")}). Please share pricing and pack sizes.`;

  return (
    <section className="py-20 bg-card border-y border-border relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container-page relative z-10 space-y-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <ChefHat className="size-3.5" />
              <span>रसोई की पसंद • Interactive Kitchen Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              What Are You Cooking Today?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Select your dish to discover the authentic City King spice pairing and aroma secrets for the perfect Indian home meal.
            </p>
          </div>
        </Reveal>

        {/* Interactive Dish Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {dishPairings.map((dish) => {
            const isSelected = selectedDish.id === dish.id;
            return (
              <button
                key={dish.id}
                type="button"
                onClick={() => setSelectedDish(dish)}
                className={`p-4 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 group ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-lift scale-[1.03]"
                    : "bg-background border-border text-foreground hover:border-primary/50 hover:bg-muted/40"
                }`}
              >
                <span className="text-3xl sm:text-4xl transition-transform group-hover:scale-110">
                  {dish.icon}
                </span>
                <span className="text-xs sm:text-sm font-bold leading-tight line-clamp-1">
                  {dish.name}
                </span>
                <span
                  className={`text-[10px] font-medium ${
                    isSelected ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {dish.nameHindi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pairing Showcase Card */}
        <Reveal key={selectedDish.id}>
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-10 shadow-lift grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Culinary Pairing Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedDish.icon}</span>
                  <span className="text-xs uppercase font-bold tracking-widest text-primary">
                    Ideal Spice Pairing
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                  {selectedDish.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {selectedDish.tagline}
                </p>
              </div>

              {/* Cooking Tip Callout */}
              <div className="p-4 rounded-2xl bg-card border border-border border-l-4 border-l-accent space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  <Sparkles className="size-3.5 text-accent" />
                  <span>Chef's Tadka Secret</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {selectedDish.cookingTip}
                </p>
              </div>

              {/* Aroma Note */}
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                <Flame className="size-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Aroma Profile:</strong> {selectedDish.aromaNote}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={waLink(comboOrderMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground font-semibold px-6 py-3.5 shadow-card transition-all hover:scale-105"
                >
                  <MessageCircle className="size-4" />
                  <span>Order this Spice Combo on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Recommended Spice Pack Cards */}
            <div className="lg:col-span-6">
              <div className="grid sm:grid-cols-3 gap-3">
                {recommendedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-3.5 rounded-2xl bg-card border border-border flex flex-col items-center text-center group hover:border-primary/40 transition-all shadow-sm"
                  >
                    <div className="h-28 w-full flex items-center justify-center p-2 bg-muted/40 rounded-xl mb-3">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-bold text-foreground line-clamp-1">
                      {prod.name}
                    </span>
                    {prod.hindiName && (
                      <span className="text-[10px] text-accent font-semibold">
                        {prod.hindiName}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
