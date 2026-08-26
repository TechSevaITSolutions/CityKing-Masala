/**
 * Central, verified business data for Sah Food Industries / City King Spices.
 * Preserves authentic business details without fabricated claims.
 */

export const site = {
  company: "Sah Food Industries",
  brand: "City King",
  brandFull: "City King Spices",
  owner: "M Sah",
  city: "Siliguri",
  district: "Darjeeling",
  state: "West Bengal",
  pincode: "734001",
  country: "India",
  addressLine: "Siliguri, Darjeeling, West Bengal – 734001",
  phoneDisplay: "+91 98004 92817",
  phoneDial: "+919800492817",
  whatsapp: "919800492817",
  tagline: "Laye Swad me Bahar",
  taglineHindi: "शुद्ध मसाले यानी सिटी किंग मसाले",

  email: null as string | null,
  fullAddress: "Siliguri, Darjeeling, West Bengal – 734001",
  fssai: null as string | null,
  gstin: null as string | null,
  mapEmbedUrl: null as string | null,
  yearsInBusiness: null as string | null,
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    youtube: null as string | null,
  },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Our Brand", to: "/brand" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: `Hello Sah Food Industries, I would like to know more about City King Spices and your products.`,
  business: `Hello Sah Food Industries, I am interested in a business/distributor enquiry for City King Spices.`,
  product: (name: string) =>
    `Hello Sah Food Industries, I am interested in your ${name}. Please share product details.`,
};

export const telLink = `tel:${site.phoneDial}`;

