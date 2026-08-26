import { useState } from "react";
import { Building2, Compass, MapPin, MessageCircle, Phone, Sparkles, Truck } from "lucide-react";
import { site, telLink, waLink, waMessages } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";

export function RegionalPresence() {
  const regions = [
    {
      id: "siliguri-hq",
      name: "Siliguri & Darjeeling (HQ)",
      hindi: "सिलीगुड़ी एवं दार्जिलिंग (मुख्यालय)",
      status: "Direct Factory Hub",
      details: "Headquarters, processing facility, and primary dispatch terminal in Siliguri (West Bengal – 734001).",
    },
    {
      id: "dooars",
      name: "Jalpaiguri, Dooars & Alipurduar",
      hindi: "जलपाईगुड़ी, डुआर्स व अलीपुरद्वार",
      status: "Active Distribution",
      details: "Daily supply network across tea estates, local mandis, and retail kirana stores.",
    },
    {
      id: "north-bengal",
      name: "Cooch Behar, Dinajpur & Malda",
      hindi: "कूचबिहार, दिनाजपुर एवं मालदा",
      status: "Growing Retail Network",
      details: "Extensive dealership network supplying everyday blended masalas and ground spices.",
    },
    {
      id: "bihar-assam",
      name: "Bihar, Assam & Pan-India Logistics",
      hindi: "बिहार, असम एवं अखिल भारतीय सप्लाई",
      status: "Freight Dispatch Active",
      details: "Direct road transport dispatch connecting major highway corridors and rail freight.",
    },
  ];

  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container-page space-y-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              <Compass className="size-3.5 text-accent" />
              <span>North Bengal & Beyond</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              Strategic Sourcing & Distribution Hub
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Strategically located in Siliguri — the commercial gateway of Eastern & North-Eastern India.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Region Tabs */}
          <div className="lg:col-span-6 space-y-3">
            {regions.map((reg, idx) => {
              const isSelected = activeRegion === idx;
              return (
                <button
                  key={reg.id}
                  type="button"
                  onClick={() => setActiveRegion(idx)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-start justify-between gap-4 ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-lift scale-[1.01]"
                      : "bg-card border-border text-foreground hover:border-primary/40"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className={`size-4 ${isSelected ? "text-accent" : "text-primary"}`} />
                      <h4 className="font-bold text-sm sm:text-base">{reg.name}</h4>
                    </div>
                    <p className={`text-xs ${isSelected ? "text-accent" : "text-muted-foreground"}`}>
                      {reg.hindi}
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-muted text-foreground/80 border border-border"
                    }`}
                  >
                    {reg.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Region Details Spotlight */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-cocoa text-cocoa-foreground border border-cocoa-foreground/15 shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">
                Regional Logistics Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display">
                {regions[activeRegion].name}
              </h3>
              <p className="text-sm text-cocoa-foreground/80 leading-relaxed">
                {regions[activeRegion].details}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/30 border border-cocoa-foreground/10 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-accent">
                Registered Factory & Dispatch Office
              </h5>
              <p className="text-xs text-cocoa-foreground/80">
                <strong>{site.company}</strong>
                <br />
                {site.addressLine}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-cocoa font-bold py-3 px-5 text-xs transition-colors"
              >
                <Phone className="size-3.5" />
                <span>Call {site.phoneDisplay}</span>
              </a>

              <Link
                to="/distributor"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa-foreground/30 hover:border-accent hover:text-accent font-semibold py-3 px-5 text-xs transition-colors"
              >
                <span>Dealership Enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
