import { cn } from "@/lib/utils";

/**
 * Text-based City King wordmark used until the official logo file is supplied.
 * Replace the inner markup with the official logo asset when provided.
 */
export function BrandMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-card"
      >
        <span className="font-display text-base leading-none font-bold">CK</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-bold tracking-tight",
            tone === "light" ? "text-cocoa-foreground" : "text-foreground",
          )}
        >
          City King
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-medium tracking-[0.22em] uppercase",
            tone === "light" ? "text-cocoa-foreground/65" : "text-muted-foreground",
          )}
        >
          Sah Food Industries
        </span>
      </span>
    </span>
  );
}
