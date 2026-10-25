import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { site, telLink, waLink, waMessages } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

export function MobileActionBar() {
  const { lang, t } = useLanguage();

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-border/80 bg-background/95 backdrop-blur-md px-3 sm:px-4 py-2.5 shadow-[0_-8px_20px_rgba(0,0,0,0.12)]"
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-2">
        <a
          href={telLink}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card py-2.5 px-2 text-xs font-semibold text-foreground transition-colors active:bg-muted"
        >
          <Phone className="size-3.5 text-primary" />
          <span>{lang === "hi" ? "कॉल करें" : "Call"}</span>
        </a>

        <a
          href={waLink(waMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-leaf text-leaf-foreground py-2.5 px-2 text-xs font-semibold shadow-xs transition-transform active:scale-95"
        >
          <MessageCircle className="size-3.5" />
          <span>{lang === "hi" ? "व्हाट्सएप" : "WhatsApp"}</span>
        </a>

        <Link
          to="/distributor"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground py-2.5 px-2 text-xs font-semibold shadow-xs transition-transform active:scale-95 text-center"
        >
          <Sparkles className="size-3.5 text-accent" />
          <span className="truncate">{lang === "hi" ? "डीलरशिप" : "Enquire"}</span>
        </Link>
      </div>
    </aside>
  );
}

