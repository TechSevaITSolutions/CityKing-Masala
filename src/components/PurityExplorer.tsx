import { useState } from "react";
import { CheckCircle2, Droplets, Flame, Leaf, Lock, ShieldCheck, Sparkles, Sun } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function PurityExplorer() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: "Direct Whole Spice Sourcing",
      titleHindi: "शुद्ध खड़े मसालों का चयन",
      icon: Sun,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      description:
        "Every batch starts with selected high-grade raw spices — mature whole turmeric roots, whole stemless chillies, and plump coriander seeds sourced directly from premium agricultural belts.",
      keyFacts: [
        "100% whole spices before grinding",
        "Rigorous manual cleaning and dust removal",
        "Naturally sun-dried for optimum moisture content",
      ],
    },
    {
      id: 1,
      title: "Cold-Grinding Technology",
      titleHindi: "धीमी पिसाई — खुशबू बरकरार",
      icon: Flame,
      color: "text-red-500",
      bg: "bg-red-500/10",
      description:
        "High-speed industrial grinders generate excessive heat that burns off volatile essential oils. City King uses temperature-controlled slow grinding to preserve natural aroma and medicinal curcumin.",
      keyFacts: [
        "Preserves natural volatile essential oils",
        "No heat damage to delicate spice fragrance",
        "Consistent, fine culinary texture for effortless blending",
      ],
    },
    {
      id: 2,
      title: "Zero Adulteration & Zero Starch",
      titleHindi: "बिना किसी मिलावट या रंग के",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      description:
        "We never add rice starch, sawdust, artificial dyes (Metanil yellow / Sudan red), or synthetic flavor boosters. You get only 100% honest, unadulterated ground spice in every pinch.",
      keyFacts: [
        "Zero chemical food colours or synthetic dyes",
        "No fillers, husk powders, or starch bulking",
        "Rich taste in small quantities — highly economical",
      ],
    },
    {
      id: 3,
      title: "Moisture-Lock Sealed Packing",
      titleHindi: "हवा और नमी से सुरक्षित पैकिंग",
      icon: Lock,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      description:
        "Our multi-layer food-grade packaging protects ground spices against humid weather, light oxidation, and ambient moisture, ensuring factory-fresh crispness and fragrance till the last scoop.",
      keyFacts: [
        "Multi-barrier food-safe packaging",
        "Protects against monsoon humidity & oxidation",
        "Extended shelf life with aroma locked inside",
      ],
    },
  ];

  const current = pillars[activePillar];

  return (
    <section className="py-20 bg-card border-y border-border relative overflow-hidden">
      <div className="container-page space-y-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-leaf/15 border border-leaf/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-leaf">
              <Sparkles className="size-3.5" />
              <span>मसालों की परख • The Purity Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              The 4 Pillars of City King Purity
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Learn how Sah Food Industries crafts pure, fragrant, and vibrant spices for everyday healthy cooking.
            </p>
          </div>
        </Reveal>

        {/* 4 Interactive Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => {
            const isSelected = activePillar === idx;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-lift scale-[1.02]"
                    : "bg-background border-border text-foreground hover:border-primary/40 hover:bg-muted/30"
                }`}
              >
                <div
                  className={`size-10 rounded-xl flex items-center justify-center ${
                    isSelected ? "bg-white/20 text-white" : `${item.bg} ${item.color}`
                  }`}
                >
                  <Icon className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-snug">{item.title}</h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isSelected ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {item.titleHindi}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase Pane */}
        <Reveal key={current.id}>
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-10 shadow-card grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-primary">
                  Pillar {current.id + 1} of 4
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                  {current.title}
                </h3>
                <p className="text-sm font-medium text-accent">
                  {current.titleHindi}
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                {current.keyFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-leaf shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground/90 font-medium">{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-cocoa text-cocoa-foreground border border-cocoa-foreground/10 space-y-4">
              <h4 className="font-display font-bold text-lg text-accent">
                "शुद्ध मसाले यानी सिटी किंग मसाले"
              </h4>
              <p className="text-xs sm:text-sm text-cocoa-foreground/80 leading-relaxed">
                We believe that pure food leads to good health. When you choose City King, you choose an authentic spice tradition that respects your family's daily nourishment.
              </p>
              <div className="pt-2 border-t border-cocoa-foreground/15 flex items-center justify-between text-xs text-cocoa-foreground/70">
                <span>Sah Food Industries</span>
                <span>Siliguri, West Bengal</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
