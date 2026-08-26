/**
 * Central, editable business data for Sah Food Industries / City King Spices.
 * Only verified information supplied by the business is stored here.
 * Unverified fields are left null so nothing is fabricated on the site.
 */

export const site = {
  company: "Sah Food Industries",
  brand: "City King",
  brandFull: "City King Spices",
  owner: "M. Sah",
  city: "Siliguri",
  district: "Darjeeling",
  state: "West Bengal",
  country: "India",
  addressLine: "Siliguri, Darjeeling, West Bengal, India",
  phoneDisplay: "+91 98004 92817",
  phoneDial: "+919800492817",
  whatsapp: "919800492817",

  /* ---- Awaiting confirmation from the business owner ----
   * Leave as null until officially provided; the UI hides null values. */
  email: null as string | null, // Add official email address here when provided.
  fullAddress: null as string | null, // Add complete street address + PIN code here when provided.
  fssai: null as string | null, // Add official FSSAI licence details here when provided.
  gstin: null as string | null, // Add GST number here when provided.
  mapEmbedUrl: null as string | null, // Add verified Google Maps embed URL here when confirmed.
  yearsInBusiness: null as string | null, // Set to "around a decade" once the owner confirms the 10-year figure.
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    youtube: null as string | null,
  },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Our Brand", to: "/brand" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: `Hello ${site.company}, I would like to know more about City King Spices and your products.`,
  business: `Hello ${site.company}, I am interested in a business/distributor enquiry for City King Spices.`,
  product: (name: string) =>
    `Hello ${site.company}, I am interested in ${name}. Please share more details.`,
};

export const telLink = `tel:${site.phoneDial}`;
