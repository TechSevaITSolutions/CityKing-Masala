import { useState } from "react";
import { CheckCircle2, Droplets, Eye, FlaskConical, HelpCircle, MessageCircle, ShieldCheck, Sparkles, XCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site, waLink } from "@/data/site";

interface TestItem {
  id: string;
  name: string;
  nameHindi: string;
  icon: string;
  pureResult: string;
  adulteratedResult: string;
  steps: string[];
  scientificFact: string;
}

const purityTests: TestItem[] = [
  {
    id: "haldi",
    name: "Turmeric (Haldi) Water Test",
    nameHindi: "हल्दी की शुद्धता की पानी से पहचान",
    icon: "🟡",
    pureResult: "Pure Haldi settles down gently at the bottom of the glass within 20 minutes, leaving the top water clear and faint light-yellow.",
    adulteratedResult: "Adulterated haldi containing chemical dyes (like Metanil Yellow) or chalk powder makes the entire glass intensely dark yellow, murky, and leaves a chalky residue.",
    steps: [
      "Take a clear glass of lukewarm water.",
      "Add 1 teaspoon of City King Turmeric Powder onto the surface without stirring.",
      "Observe for 15-20 minutes without touching.",
    ],
    scientificFact: "Natural curcumin pigment is not instantly water-soluble, so pure turmeric settles smoothly while chemical dyes dissolve immediately to stain the water.",
  },
  {
    id: "mirchi",
    name: "Chilli (Mirchi) Water Floating Test",
    nameHindi: "मिर्ची पाउडर की शुद्धता की पहचान",
    icon: "🔴",
    pureResult: "Pure chilli powder settles slowly at the bottom. Water remains clean without oily dye streaks.",
    adulteratedResult: "Synthetic red dyes (like Sudan dye or brick powder) instantly bleed a dark red oily trail in water, or gritty sediment settles quickly like sand.",
    steps: [
      "Add 1 teaspoon of Chilli Powder into a glass of plain water.",
      "Observe the color stream as it falls through the water column.",
      "Rub a pinch between wet palms — pure chilli does not leave stubborn oily crimson stains.",
    ],
    scientificFact: "Pure stemless chilli pods contain natural capsaicin and capsanthin oils that disperse naturally without synthetic oily separation.",
  },
  {
    id: "dhaniya",
    name: "Coriander (Dhaniya) Husk & Aroma Test",
    nameHindi: "धनिया पाउडर की सुगंध व भूसी जांच",
    icon: "🌿",
    pureResult: "Pure coriander powder dissolves into a warm herbal aroma with fine, uniform texture that floats briefly and absorbs water naturally.",
    adulteratedResult: "Adulterated coriander containing dung/husk powder floats persistently on top like coarse dry sawdust and produces an unpleasant pungent odor.",
    steps: [
      "Sprinkle a small pinch of Coriander powder over water.",
      "Pure coriander absorbs water and settles gradually with a sweet herbal aroma.",
      "Rub a dry pinch in your palm to experience the fresh botanical fragrance.",
    ],
    scientificFact: "City King Dhaniya is ground from plump seeds containing essential linalool oils that create body and aroma in curries.",
  },
  {
    id: "jeera",
    name: "Cumin (Jeera) Water Rub & Charcoal Test",
    nameHindi: "जीरा पाउडर की शुद्धता जांच",
    icon: "🟤",
    pureResult: "Pure roasted cumin powder imparts an appetizing nutty fragrance and light golden hue when rubbed in water.",
    adulteratedResult: "Artificial grass seeds or charcoal-dyed seeds turn the water murky gray or blackish when rubbed in palms.",
    steps: [
      "Rub a pinch of Cumin powder vigorously between wet fingers.",
      "Check your fingertips — if they turn black or inky gray, artificial coloring or charcoal dust is present.",
      "Smell your palms — pure cumin emits a warm, roasted, earthy aroma.",
    ],
    scientificFact: "City King Jeera Powder retains natural cuminaldehyde volatile oils, giving long-lasting roasted aroma in raitas, dals, and tadkas.",
  },
];

export function PurityWaterTest() {
  const [selectedTest, setSelectedTest] = useState<TestItem>(purityTests[0]);

  const testWaMsg = `Hello ${site.company}, I tried your DIY Purity Test guide for ${selectedTest.name}. I would like to order 100% pure City King spices for my kitchen.`;

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container-page space-y-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <FlaskConical className="size-3.5" />
              <span>DIY Kitchen Science • घर पर शुद्धता की परख</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              How to Test Spice Purity at Home
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Try these quick 30-second kitchen water tests to verify pure spices versus adulterated market powders. City King guarantees 100% purity in every batch.
            </p>
          </div>
        </Reveal>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {purityTests.map((t) => {
            const isSelected = selectedTest.id === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTest(t)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 group ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-lift scale-[1.02]"
                    : "bg-card border-border text-foreground hover:border-primary/40 hover:bg-muted/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{t.icon}</span>
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    30-Sec Test
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">{t.name}</h4>
                  <p
                    className={`text-xs mt-1 ${
                      isSelected ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {t.nameHindi}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Test Results Card */}
        <Reveal key={selectedTest.id}>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Test Procedure Steps */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedTest.icon}</span>
                  <span className="text-xs uppercase font-bold tracking-widest text-primary">
                    Test Procedure
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                  {selectedTest.name}
                </h3>
                <p className="text-xs text-muted-foreground">{selectedTest.nameHindi}</p>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Step-by-Step Instructions:
                </h5>
                {selectedTest.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-background border border-border">
                    <span className="size-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>

              {/* Scientific Fact Note */}
              <div className="p-4 rounded-2xl bg-muted/40 border border-border text-xs text-muted-foreground space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-foreground">
                  <Sparkles className="size-3.5 text-accent" />
                  <span>The Science Behind the Test:</span>
                </div>
                <p className="leading-relaxed">{selectedTest.scientificFact}</p>
              </div>
            </div>

            {/* Right: Pure vs Adulterated Visual Outcome */}
            <div className="lg:col-span-6 space-y-4">
              {/* Pure Result Banner */}
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="size-5 shrink-0" />
                  <span>100% Pure City King Spice Outcome:</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed pl-7">
                  {selectedTest.pureResult}
                </p>
              </div>

              {/* Adulterated Result Warning Banner */}
              <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 space-y-2">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
                  <XCircle className="size-5 shrink-0" />
                  <span>Adulterated Market Powder Warning Signs:</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                  {selectedTest.adulteratedResult}
                </p>
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href={waLink(testWaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground font-bold py-3.5 px-6 shadow-sm transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="size-4" />
                  <span>Order 100% Pure City King Spices on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
