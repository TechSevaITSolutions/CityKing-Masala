import { site } from "@/data/site";
import { products } from "@/data/products";
import { faqs } from "@/components/FaqSection";

export function SeoStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company,
    alternateName: ["City King", "City King Masala", "City King Spices", "Sah Food Industries Siliguri"],
    url: "https://citykingspices.in",
    telephone: [site.phonePrimary, site.phoneSecondary],
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
    sameAs: [
      site.social.instagram,
      site.social.facebook,
    ].filter(Boolean),
    slogan: site.tagline,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Sah Food Industries - City King Spices",
    image: "https://citykingspices.in/assets/hero-spices.jpg",
    telephone: [site.phonePrimary, site.phoneSecondary],
    priceRange: "₹₹",
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
