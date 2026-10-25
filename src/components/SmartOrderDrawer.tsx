import { useEffect, useState } from "react";
import { Check, MessageCircle, Package, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { products, type Product } from "@/data/products";
import { site, waLink } from "@/data/site";

export function SmartOrderDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ck_order_list");
      if (saved) {
        setSelectedSlugs(JSON.parse(saved));
      }
    } catch (e) {
      // Ignore
    }

    const handleCustomAdd = (e: CustomEvent<{ slug: string }>) => {
      if (e.detail?.slug) {
        setSelectedSlugs((prev) => {
          const next = prev.includes(e.detail.slug) ? prev : [...prev, e.detail.slug];
          try {
            localStorage.setItem("ck_order_list", JSON.stringify(next));
          } catch {}
          return next;
        });
        setIsOpen(true);
      }
    };

    window.addEventListener("add-to-order" as any, handleCustomAdd as any);
    return () => window.removeEventListener("add-to-order" as any, handleCustomAdd as any);
  }, []);

  const toggleProduct = (slug: string) => {
    setSelectedSlugs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem("ck_order_list", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const clearAll = () => {
    setSelectedSlugs([]);
    try {
      localStorage.removeItem("ck_order_list");
    } catch {}
  };

  const selectedProducts = selectedSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is Product => Boolean(p));

  const generateWhatsAppMessage = () => {
    if (selectedProducts.length === 0) {
      return `Hello ${site.company}, I am interested in City King Spices products. Please share your catalog and rate card.`;
    }
    const itemsList = selectedProducts.map((p, i) => `${i + 1}. ${p.name} (${p.hindiName || ""})`).join("\n");
    return `Hello ${site.company},\n\nI would like to enquire about / order the following City King items:\n\n${itemsList}\n\nPlease share price details, availability and pack sizes. Thank you!`;
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right, above mobile bar) */}
      <div className="fixed bottom-20 right-4 lg:bottom-8 lg:right-8 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative inline-flex items-center gap-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-background animate-bounce-short"
          aria-label="Open Quick WhatsApp Order Builder"
        >
          <ShoppingBag className="size-5" />
          <span className="text-xs sm:text-sm">Quick Order Bag</span>
          {selectedSlugs.length > 0 && (
            <span className="inline-flex items-center justify-center size-5 rounded-full bg-accent text-cocoa text-[11px] font-extrabold">
              {selectedSlugs.length}
            </span>
          )}
        </button>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-card h-full shadow-2xl border-l border-border flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-border bg-cocoa text-cocoa-foreground flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="size-5 text-accent" />
                <div>
                  <h3 className="font-bold text-base font-display">WhatsApp Order Bag</h3>
                  <p className="text-[11px] text-cocoa-foreground/75">
                    Select spices to compile an instant WhatsApp enquiry
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="size-8 rounded-full bg-cocoa-foreground/15 text-cocoa-foreground hover:bg-cocoa-foreground/30 flex items-center justify-center transition-colors"
                aria-label="Close Order Bag"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Drawer Product List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground pb-2 border-b border-border">
                <span>Selected Items ({selectedProducts.length})</span>
                {selectedProducts.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="text-primary hover:underline font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="size-3" /> Clear List
                  </button>
                )}
              </div>

              {/* All available products to check/uncheck */}
              <div className="space-y-2.5">
                {products.map((p) => {
                  const isChecked = selectedSlugs.includes(p.slug);
                  return (
                    <div
                      key={p.id}
                      onClick={() => toggleProduct(p.slug)}
                      className={`p-3 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? "bg-primary/10 border-primary shadow-sm"
                          : "bg-background border-border hover:border-border/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="size-12 rounded-xl object-contain bg-muted/40 p-1"
                        />
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-foreground line-clamp-1">
                            {p.name}
                          </p>
                          {p.hindiName && (
                            <p className="text-[10px] text-accent font-semibold">{p.hindiName}</p>
                          )}
                        </div>
                      </div>

                      <div
                        className={`size-6 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                          isChecked
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-transparent"
                        }`}
                      >
                        <Check className="size-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer / Submit CTA */}
            <div className="p-5 border-t border-border bg-card space-y-3">
              <a
                href={waLink(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground font-bold py-3.5 px-6 shadow-lg transition-transform active:scale-95"
              >
                <MessageCircle className="size-5" />
                <span>
                  {selectedProducts.length > 0
                    ? `Send ${selectedProducts.length} Items via WhatsApp`
                    : "Send WhatsApp Order Enquiry"}
                </span>
              </a>

              <p className="text-[11px] text-center text-muted-foreground">
                Opens directly in WhatsApp with {site.company} ({site.phonePrimary})
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Helper function to dispatch quick add from any product card */
export function addToOrderBag(slug: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("add-to-order", { detail: { slug } }));
  }
}
