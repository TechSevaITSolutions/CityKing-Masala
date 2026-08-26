import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { site, telLink } from "@/data/site";

const socials = Object.entries(site.social).filter(([, url]) => Boolean(url)) as [string, string][];

export function Footer() {
  return (
    <footer className="bg-cocoa text-cocoa-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <BrandMark tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cocoa-foreground/70">
            City King Spices — the spice brand of {site.company}, bringing everyday spices and
            masalas to Indian kitchens.
          </p>
          <p className="mt-4 font-display text-lg text-accent">
            शुद्ध मसाले यानी सिटी किंग मसाले
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-cocoa-foreground/50 uppercase">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "About", to: "/about" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Business links">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-cocoa-foreground/50 uppercase">
            Business
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/distributor" className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                Distributor Enquiry
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                Product Enquiry
              </Link>
            </li>
            <li>
              <Link to="/brand" className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                Our Brand
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-cocoa-foreground/50 uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-cocoa-foreground/75">
                {site.company}
                <br />
                {site.addressLine}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={telLink} className="text-cocoa-foreground/75 transition-colors hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-3">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm capitalize text-cocoa-foreground/75 hover:text-accent"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-cocoa-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-cocoa-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.company}. City King Spices. All rights reserved.
          </p>
          <p>Owner: {site.owner} · {site.city}, {site.state}</p>
        </div>
      </div>
    </footer>
  );
}
