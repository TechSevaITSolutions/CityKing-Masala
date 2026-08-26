import haldi from "@/assets/product-haldi.jpg";
import jeera from "@/assets/product-jeera.jpg";
import dhaniya from "@/assets/product-dhaniya.jpg";
import mirchi from "@/assets/product-mirchi.jpg";
import sabji from "@/assets/product-sabji.jpg";
import paneer from "@/assets/product-paneer.jpg";
import tea from "@/assets/product-tea.jpg";

export type CategoryId = "everyday-spices" | "blended-masalas" | "powdered-spices" | "tea";

export type Product = {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: CategoryId;
  image: string;
  /** Replace with official City King pack photography when supplied by the brand. */
  imageIsPlaceholder: boolean;
  short: string;
  description: string;
  /** Only list pack sizes officially confirmed by the business. */
  sizes: string[];
  featured: boolean;
  status: "available" | "coming-soon";
};

export const categories: { id: CategoryId; name: string; blurb: string }[] = [
  {
    id: "everyday-spices",
    name: "Everyday Spices",
    blurb: "The essentials every Indian kitchen reaches for daily.",
  },
  {
    id: "blended-masalas",
    name: "Blended Masalas",
    blurb: "Ready masala blends for favourite Indian dishes.",
  },
  {
    id: "powdered-spices",
    name: "Powdered Spices",
    blurb: "Finely ground spices for colour, aroma and depth.",
  },
  { id: "tea", name: "Tea", blurb: "CTC tea for the everyday Indian cup." },
];

export const products: Product[] = [
  {
    id: "ck-haldi",
    slug: "turmeric-haldi-powder",
    name: "Turmeric (Haldi) Powder",
    hindiName: "हल्दी पाउडर",
    category: "everyday-spices",
    image: haldi,
    imageIsPlaceholder: true,
    short: "Warm golden colour for everyday dals, sabzis and gravies.",
    description:
      "City King Haldi Powder brings the familiar golden colour and gentle warmth that Indian cooking begins with. A staple for dals, sabzis, marinades and everyday gravies.",
    sizes: [],
    featured: true,
    status: "available",
  },
  {
    id: "ck-mirchi",
    slug: "mirchi-chilli-powder",
    name: "Mirchi (Chilli) Powder",
    hindiName: "मिर्ची पाउडर",
    category: "everyday-spices",
    image: mirchi,
    imageIsPlaceholder: true,
    short: "Bright red colour and the heat Indian cooking is built on.",
    description:
      "City King Mirchi Powder adds the deep red colour and clean heat that lift curries, chutneys and tadka. Made for kitchens that cook with flavour every day.",
    sizes: [],
    featured: true,
    status: "available",
  },
  {
    id: "ck-dhaniya",
    slug: "dhaniya-coriander-powder",
    name: "Dhaniya (Coriander) Powder",
    hindiName: "धनिया पाउडर",
    category: "powdered-spices",
    image: dhaniya,
    imageIsPlaceholder: true,
    short: "Fresh, mellow base note for gravies and everyday curries.",
    description:
      "Ground coriander with a fresh, mellow aroma. City King Dhaniya Powder builds body in gravies and balances the sharper spices in an everyday masala.",
    sizes: [],
    featured: false,
    status: "available",
  },
  {
    id: "ck-jeera",
    slug: "jeera-cumin-powder",
    name: "Jeera (Cumin) Powder",
    hindiName: "जीरा पाउडर",
    category: "powdered-spices",
    image: jeera,
    imageIsPlaceholder: true,
    short: "Earthy, roasted aroma for raita, sabzi and chaat.",
    description:
      "City King Jeera Powder carries the warm, roasted aroma of cumin — a finishing touch for raita, salads, sabzi and chaat, and a base note in countless Indian dishes.",
    sizes: [],
    featured: false,
    status: "available",
  },
  {
    id: "ck-sabji-masala",
    slug: "sabji-masala",
    name: "Sabji Masala",
    hindiName: "सब्ज़ी मसाला",
    category: "blended-masalas",
    image: sabji,
    imageIsPlaceholder: true,
    short: "An everyday blend that turns simple vegetables into a meal.",
    description:
      "A balanced blend made for everyday vegetables. City King Sabji Masala gives simple home cooking a rounded, familiar flavour without a long list of spices.",
    sizes: [],
    featured: true,
    status: "available",
  },
  {
    id: "ck-paneer-masala",
    slug: "paneer-masala",
    name: "Paneer Masala",
    hindiName: "पनीर मसाला",
    category: "blended-masalas",
    image: paneer,
    imageIsPlaceholder: true,
    short: "For rich, restaurant-style paneer gravies at home.",
    description:
      "City King Paneer Masala is blended for paneer dishes — the kind of rich, aromatic gravy that makes a weekday dinner feel special.",
    sizes: [],
    featured: false,
    status: "available",
  },
  {
    id: "ck-ctc-tea",
    slug: "ctc-tea",
    name: "CTC Tea",
    hindiName: "सीटीसी चाय",
    category: "tea",
    image: tea,
    imageIsPlaceholder: true,
    short: "Strong, everyday CTC tea for the classic Indian cup.",
    description:
      "City King CTC Tea is made for the strong, milky cup that starts the Indian day. Multiple CTC tea options are offered — get in touch for the current range.",
    sizes: [],
    featured: false,
    status: "available",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function categoryName(id: CategoryId) {
  return categories.find((c) => c.id === id)?.name ?? "";
}

/**
 * Future feature: "What are you cooking today?"
 * Product recommendations stay empty until the business confirms suitability.
 */
export const dishes: { id: string; label: string; productSlugs: string[] }[] = [
  { id: "paneer", label: "Paneer", productSlugs: [] },
  { id: "vegetables", label: "Vegetables", productSlugs: [] },
  { id: "chicken", label: "Chicken", productSlugs: [] },
  { id: "rice", label: "Rice", productSlugs: [] },
  { id: "everyday-curry", label: "Everyday Curry", productSlugs: [] },
  { id: "snacks", label: "Snacks", productSlugs: [] },
];
