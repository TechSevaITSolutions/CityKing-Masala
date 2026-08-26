import { useState } from "react";
import { AlertCircle, Calendar, CheckCircle2, Clock, Info, Lock, MessageCircle, Sparkles, Sun } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site, waLink } from "@/data/site";

export function ShelfLifeCalculator() {
  const [spiceType, setSpiceType] = useState<string>("ground-powder");
  const [storageType, setStorageType] = useState<string>("airtight-glass");
  const [climate, setClimate] = useState<string>("humid-plains");

  // Calculate freshness index and guidance
  let freshnessMonths = 12;
  let aromaRetention = "95% – 100%";
  let tip = "Store away from direct sunlight and stovetop heat.";

  if (spiceType === "blended-masalas") {
    freshnessMonths = storageType === "open-dabba" ? 4 : storageType === "sealed-pouch" ? 8 : 10;
    aromaRetention = storageType === "open-dabba" ? "60% – 70%" : "90% – 95%";
    tip = "Blended masalas contain aromatic whole spices; keep the lid tightly closed immediately after use.";
  } else if (spiceType === "ground-powder") {
    freshnessMonths = storageType === "open-dabba" ? 6 : storageType === "sealed-pouch" ? 10 : 12;
    aromaRetention = storageType === "open-dabba" ? "70% – 75%" : "92% – 98%";
    tip = "Turmeric, chilli, and coriander retain natural oils best when kept in cool, dark airtight glass containers.";
  } else if (spiceType === "tea") {
    freshnessMonths = storageType === "open-dabba" ? 3 : storageType === "sealed-pouch" ? 9 : 12;
    aromaRetention = storageType === "open-dabba" ? "50% – 60%" : "95% – 99%";
    tip = "CTC tea absorbs moisture and ambient kitchen aromas quickly. Never store near pungent onions or garlic.";
  }

  if (climate === "humid-plains" && storageType === "open-dabba") {
    freshnessMonths = Math.max(2, freshnessMonths - 2);
  }

  const freshnessWaMsg = `Hello ${site.company}, I checked your Spice Freshness & Storage Calculator. I need fresh stock of City King Spices delivered. Please share details.`;

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container-page space-y-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <Clock className="size-3.5" />
              <span>मसाला ताजगी कैलकुलेटर • Freshness & Storage Advisor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              Spice Freshness & Storage Calculator
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Find out how to store your spices for maximum aroma retention, prevent flavor loss during humid seasons, and know when to refresh your kitchen spice shelf.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-card space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Spice Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  1. Select Spice Category:
                </label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {[
                    { id: "ground-powder", label: "Pure Powders (Haldi/Mirchi)" },
                    { id: "blended-masalas", label: "Blended (Sabji/Paneer)" },
                    { id: "tea", label: "City King CTC Tea" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSpiceType(item.id)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        spiceType === item.id
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-background border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage Container */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  2. Your Storage Container:
                </label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {[
                    { id: "airtight-glass", label: "Airtight Glass / Steel Jar" },
                    { id: "sealed-pouch", label: "City King Sealed Pouch" },
                    { id: "open-dabba", label: "Open Everyday Masala Box" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setStorageType(item.id)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        storageType === item.id
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-background border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Climate Region */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  3. Regional Kitchen Climate:
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { id: "humid-plains", label: "Humid Monsoon / Plains (WB/Bihar/Assam)" },
                    { id: "dry-temperate", label: "Dry / Moderate Hill Climate" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setClimate(item.id)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        climate === item.id
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-background border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Storage Tips Checklist */}
            <div className="p-4 rounded-2xl bg-muted/40 border border-border text-xs text-muted-foreground space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-foreground">
                <Info className="size-3.5 text-accent" />
                <span>Golden Storage Rule:</span>
              </div>
              <p className="leading-relaxed">{tip}</p>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-cocoa text-cocoa-foreground border border-cocoa-foreground/15 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">
                Calculated Shelf-Life Analysis
              </span>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-black/30 border border-cocoa-foreground/10 flex items-center justify-between">
                  <span className="text-xs text-cocoa-foreground/75">Optimal Freshness Window</span>
                  <span className="text-2xl font-bold font-display text-accent">
                    {freshnessMonths} Months
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-black/30 border border-cocoa-foreground/10 flex items-center justify-between">
                  <span className="text-xs text-cocoa-foreground/75">Aroma & Oil Retention</span>
                  <span className="text-lg font-bold font-display text-cocoa-foreground">
                    {aromaRetention}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-black/30 border border-cocoa-foreground/10 space-y-1">
                  <span className="text-xs font-bold text-accent">City King Quality Guarantee</span>
                  <p className="text-xs text-cocoa-foreground/80 leading-relaxed">
                    Milled at low temperatures and packed with multi-barrier seals in Siliguri to lock in essential volatile oils.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={waLink(freshnessWaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground font-bold py-3.5 px-6 text-sm shadow-md transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="size-4" />
                <span>Enquire for Fresh Batch Delivery</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
