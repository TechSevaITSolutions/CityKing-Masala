import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, X, ZoomIn } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import heroImg from "@/assets/hero-spices.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryCategory | "all">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeTab === "all" || item.category === activeTab,
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative py-16 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src={heroImg} alt="City King Visual Experience" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-cocoa/85" />
          </div>

          <div className="container-page relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              <span>Editorial Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              City King in Pictures
            </h1>
            <p className="text-cocoa-foreground/80 text-base sm:text-lg">
              A visual journey through our whole spices, ground powders, authentic recipes, and kitchen moments.
            </p>
          </div>
        </section>

        {/* TABS & MASONRY GALLERY */}
        <section className="py-12">
          <div className="container-page space-y-8">
            {/* Category Filter Tabs */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {galleryCategories.map((cat) => {
                const count =
                  cat.id === "all"
                    ? galleryItems.length
                    : galleryItems.filter((i) => i.category === cat.id).length;
                if (count === 0 && cat.id !== "all") return null;

                const isActive = activeTab === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-card text-muted-foreground hover:text-foreground border border-border"
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* True Responsive Masonry Grid */}
            <div className="masonry-grid">
              {filteredItems.map((item, idx) => (
                <div key={item.id} className="masonry-item">
                  <Reveal delay={idx * 30}>
                    <div
                      onClick={() => setSelectedPhoto(item)}
                      className="group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer shadow-sm hover:shadow-lift transition-all duration-300"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/95 via-cocoa/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="self-end rounded-full bg-background/90 backdrop-blur-md p-2 text-foreground shadow-sm">
                          <ZoomIn className="size-4 text-primary" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                            {item.category}
                          </span>
                          <p className="text-xs sm:text-sm text-cocoa-foreground font-medium mt-0.5 line-clamp-2">
                            {item.alt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl border border-border animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors shadow-md"
                aria-label="Close photo preview"
              >
                <X className="size-5" />
              </button>

              <div className="relative max-h-[70vh] bg-black flex items-center justify-center p-2">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 bg-card border-t border-border flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                    {selectedPhoto.category}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-semibold mt-0.5">
                    {selectedPhoto.alt}
                  </p>
                </div>

                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  City King Spices
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
