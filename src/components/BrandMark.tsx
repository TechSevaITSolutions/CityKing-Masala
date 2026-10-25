import citykingLogo from "@/assets/Cityking Logo.png";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  tone = "dark",
  showText = true,
  size = "md",
}: {
  className?: string;
  tone?: "dark" | "light";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = {
    sm: "size-9",
    md: "size-11",
    lg: "size-14",
  };

  return (
    <span className={cn("inline-flex items-center gap-2.5 group", className)}>
      <span className="relative shrink-0 flex items-center justify-center">
        <img
          src={citykingLogo}
          alt="City King Official Logo - Sah Food Industries"
          className={cn(
            sizeMap[size],
            "object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105",
          )}
        />
      </span>

      {showText && (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-display text-[1.12rem] font-bold tracking-tight",
              tone === "light" ? "text-cocoa-foreground" : "text-foreground",
            )}
          >
            City King
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-semibold tracking-[0.2em] uppercase",
              tone === "light" ? "text-accent" : "text-primary",
            )}
          >
            Sah Food Industries
          </span>
        </span>
      )}
    </span>
  );
}

