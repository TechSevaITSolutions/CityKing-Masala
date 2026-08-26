import { useState } from "react";
import { Calculator, CheckCircle2, DollarSign, Handshake, MessageCircle, Sparkles, TrendingUp, Truck } from "lucide-react";
import { site, waLink } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";

export function MarginCalculator() {
  const [monthlyVolumeKg, setMonthlyVolumeKg] = useState<number>(250);
  const [businessCategory, setBusinessType] = useState<string>("Retail Kirana & Supermarket");

  // Calculated estimates based on volume
  const estimatedCartons = Math.round(monthlyVolumeKg / 10);
  const estimatedMarginPercent = monthlyVolumeKg > 500 ? "22% – 28%" : "18% – 24%";

  const calculatorWaMsg = `Hello ${site.company}, I am interested in dealership / wholesale distribution. My estimated monthly volume is around ${monthlyVolumeKg} kg (${businessCategory}). Please share official B2B rate card and distributor terms.`;

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container-page space-y-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              <Calculator className="size-3.5 text-accent" />
              <span>B2B Commercial Desk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              Distributor Margin & Volume Estimator
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Calculate the potential business advantages of stocking and distributing City King Spices across your territory.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-card space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Select Your Business Type:
                </label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {[
                    "Retail Kirana & Supermarket",
                    "Wholesale Merchant",
                    "District Super Stockist",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setBusinessType(type)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        businessCategory === type
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-background border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for Volume */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-foreground">Target Monthly Spice Volume:</span>
                  <span className="text-base font-display font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                    {monthlyVolumeKg} kg / month
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={2000}
                  step={50}
                  value={monthlyVolumeKg}
                  onChange={(e) => setMonthlyVolumeKg(Number(e.target.value))}
                  className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
                  <span>50 kg (Starter)</span>
                  <span>500 kg (Retail Cluster)</span>
                  <span>2000 kg+ (Super Stockist)</span>
                </div>
              </div>
            </div>

            {/* Partnership Perks Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-border text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-leaf shrink-0" />
                <span>Direct Factory Dispatch from Siliguri</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-leaf shrink-0" />
                <span>Attractive Dealer Margins & Credit Cycles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-leaf shrink-0" />
                <span>Point-of-Sale Shelf & Poster Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-leaf shrink-0" />
                <span>Unadulterated Quality = High Repeat Buys</span>
              </div>
            </div>
          </div>

          {/* Result / ROI Summary Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-cocoa text-cocoa-foreground border border-cocoa-foreground/15 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">
                Estimated Commercial Return
              </span>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-black/30 border border-cocoa-foreground/10 flex items-center justify-between">
                  <span className="text-xs text-cocoa-foreground/75">Dealer Margin Range</span>
                  <span className="text-xl font-bold font-display text-accent">
                    {estimatedMarginPercent}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-black/30 border border-cocoa-foreground/10 flex items-center justify-between">
                  <span className="text-xs text-cocoa-foreground/75">Estimated Dispatch Units</span>
                  <span className="text-lg font-bold font-display text-cocoa-foreground">
                    ~{estimatedCartons} Standard Master Packs
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-black/30 border border-cocoa-foreground/10 flex items-center justify-between">
                  <span className="text-xs text-cocoa-foreground/75">Supply Frequency</span>
                  <span className="text-sm font-semibold text-cocoa-foreground">
                    Weekly / Bi-Weekly Fast Dispatch
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-cocoa-foreground/15">
              <a
                href={waLink(calculatorWaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-cocoa font-bold py-3.5 px-6 shadow-lift transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="size-4" />
                <span>Apply with this Estimate on WhatsApp</span>
              </a>

              <Link
                to="/distributor"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-cocoa-foreground/30 hover:border-accent hover:text-accent text-xs font-semibold py-3 px-6 transition-colors"
              >
                <span>Open Formal Distributor Application Form</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
