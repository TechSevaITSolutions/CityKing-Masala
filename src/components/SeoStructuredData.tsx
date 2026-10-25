import { site } from "@/data/site";
import { products } from "@/data/products";
import { faqs } from "@/components/FaqSection";
import { serviceDistricts } from "@/data/network";

export function SeoStructuredData() {
  const servedDistricts = serviceDistricts.map((d) => `${d.name}, ${d.state}`);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company,
    alternateName: [
      "City King",
      "City King Masala",
      "City King Spices",
      "Sah Food Industries Siliguri",
      "सिटी किंग मसाले",
    ],
    url: "https://citykingspices.in",
    logo: "https://citykingspices.in/assets/Cityking%20Logo.png",
    telephone: [site.phonePrimary, site.phoneSecondary],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phonePrimary,
        contactType: "customer service",
        areaServed: ["IN"],
        availableLanguage: ["Hindi", "English", "Bengali", "Bhojpuri", "Maithili"],
      },
      {
        "@type": "ContactPoint",
        telephone: site.phoneSecondary,
        contactType: "sales & dealership",
        areaServed: ["IN"],
        availableLanguage: ["Hindi", "English", "Bengali", "Bhojpuri", "Maithili"],
      },
    ],
    founder: {
      "@type": "Person",
      name: site.owner,
      jobTitle: "Founder & Owner",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.pincode,
      addressCountry: "IN",
    },
    areaServed: servedDistricts,
    sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
    slogan: site.tagline,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Sah Food Industries - City King Spices",
    image: "https://citykingspices.in/assets/hero-spices.jpg",
    telephone: [site.phonePrimary, site.phoneSecondary],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.7271",
      longitude: "88.3953",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    areaServed: servedDistricts,
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "City King Spices",
    alternateName: "Sah Food Industries Siliguri",
    url: "https://citykingspices.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://citykingspices.in/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: p.name,
        alternateName: p.hindiName,
        description: p.description,
        brand: {
          "@type": "Brand",
          name: "City King",
        },
        manufacturer: {
          "@type": "Organization",
          name: site.company,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://citykingspices.in/products",
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
