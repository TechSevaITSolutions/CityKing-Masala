import haldi from "@/assets/Cityking Haldi Powder Masala.png";
import mirchi from "@/assets/Cityking Mirchi Powder Masala.png";
import dhaniya from "@/assets/Cityking Dhaniya Powder Masala.png";
import jeera from "@/assets/Cityking Jeera Powder Masala.png";
import sabji from "@/assets/Cityking Sabji Powder Masala.png";
import paneer from "@/assets/Cityking Kadai Paneer Powder Masala.png";
import teaBlack from "@/assets/Cityking Premium Chai Patti CTC Tea.png";
import teaGreen from "@/assets/Cityking Premium Chai Patti.png";
import teaClassic from "@/assets/Cityking Chai Patti Powder Masala.png";

export type CategoryId = "everyday-spices" | "blended-masalas" | "powdered-spices" | "tea";

export type Product = {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: CategoryId;
  image: string;
  imageIsPlaceholder: boolean;
  short: string;
  description: string;
  sizes: string[];
  featured: boolean;
  status: "available" | "coming-soon";
};

export const categories: { id: CategoryId; name: string; blurb: string }[] = [
  {
    id: "everyday-spices",
    name: "Everyday Spices",
    blurb: "The pure essential ground spices every Indian kitchen reaches for daily.",
  },
  {
    id: "blended-masalas",
    name: "Blended Masalas",
    blurb: "Signature authentic masala blends for rich vegetable and paneer delicacies.",
  },
  {
    id: "powdered-spices",
    name: "Powdered Spices",
    blurb: "Finely ground, aromatic spices for deep color, fragrance and appetizing taste.",
  },
  {
    id: "tea",
    name: "Chai Patti & CTC Tea",
    blurb: "Premium CTC tea blends from the foothills for a strong, refreshing Indian cup.",
  },
];

export const products: Product[] = [
  {
    id: "ck-haldi",
    slug: "turmeric-haldi-powder",
    name: "City King Turmeric (Haldi) Powder",
    hindiName: "हल्दी पाउडर",
    category: "everyday-spices",
    image: haldi,
    imageIsPlaceholder: false,
    short: "Warm golden colour and pure curcumin for everyday dals, sabzis and curries.",
    description:
      "City King Haldi Powder brings the familiar golden glow and natural earthy warmth that Indian cooking begins with. Milled at low temperatures to lock in medicinal curcumin.",
    sizes: ["50g", "100g", "200g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
  },
  {
    id: "ck-mirchi",
    slug: "mirchi-chilli-powder",
    name: "City King Mirchi (Chilli) Powder",
    hindiName: "मिर्ची पाउडर",
    category: "everyday-spices",
    image: mirchi,
    imageIsPlaceholder: false,
    short: "Vibrant natural red colour and balanced fiery heat without artificial dyes.",
    description:
      "City King Mirchi Powder adds deep red colour and clean, robust heat that elevates curries, gravies, chutneys, and tadkas. Made from selected stemless sun-dried red chillies.",
    sizes: ["50g", "100g", "200g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
  },
  {
    id: "ck-dhaniya",
    slug: "dhaniya-coriander-powder",
    name: "City King Dhaniya (Coriander) Powder",
    hindiName: "धनिया पाउडर",
    category: "powdered-spices",
    image: dhaniya,
    imageIsPlaceholder: false,
    short: "Fresh, mellow aroma and body-building texture for curries and gravies.",
    description:
      "Finely ground from plump coriander seeds with a fresh, botanical aroma. City King Dhaniya Powder builds rich body in curries and balances sharper spices.",
    sizes: ["50g", "100g", "200g", "500g"],
    featured: false,
    status: "available",
  },
  {
    id: "ck-jeera",
    slug: "jeera-cumin-powder",
    name: "City King Jeera (Cumin) Powder",
    hindiName: "जीरा पाउडर",
    category: "powdered-spices",
    image: jeera,
    imageIsPlaceholder: false,
    short: "Earthy, nutty roasted cumin aroma for raitas, chaat, and daily sabzis.",
    description:
      "City King Jeera Powder carries the warm, roasted aroma of selected cumin seeds — an essential finishing touch for raita, salads, chaat, and daily Indian gravies.",
    sizes: ["50g", "100g", "200g"],
    featured: false,
    status: "available",
  },
  {
    id: "ck-sabji-masala",
    slug: "sabji-masala",
    name: "City King Sabji Masala",
    hindiName: "सब्ज़ी मसाला",
    category: "blended-masalas",
    image: sabji,
    imageIsPlaceholder: false,
    short: "A balanced signature blend that transforms simple vegetables into a feast.",
    description:
      "A harmonious blend crafted for everyday seasonal vegetables. City King Sabji Masala gives home cooking a rich, rounded, restaurant-style flavor without extra hassle.",
    sizes: ["50g", "100g", "200g"],
    featured: true,
    status: "available",
  },
  {
    id: "ck-paneer-masala",
    slug: "paneer-masala",
    name: "City King Kadai Paneer Masala",
    hindiName: "कड़ाही पनीर मसाला",
    category: "blended-masalas",
    image: paneer,
    imageIsPlaceholder: false,
    short: "For rich, aromatic, velvety restaurant-style paneer gravies at home.",
    description:
      "City King Kadai Paneer Masala is blended with royal spices — ideal for Shahi Paneer, Kadai Paneer, Matar Paneer, and Mughlai gravies that make family dinners unforgettable.",
    sizes: ["50g", "100g", "200g"],
    featured: true,
    status: "available",
  },
  {
    id: "ck-ctc-black",
    slug: "premium-ctc-tea-black",
    name: "City King Premium CTC Tea (Royal Black Pack)",
    hindiName: "प्रीमियम सीटीसी चाय (रॉयल ब्लैक)",
    category: "tea",
    image: teaBlack,
    imageIsPlaceholder: false,
    short: "Strong, brisk liquor with rich aroma for the energising morning cup.",
    description:
      "Crafted from premium Darjeeling and Dooars foothills garden tea leaves. City King Premium CTC Tea delivers brisk liquor, deep amber infusion, and unbeatable morning freshness.",
    sizes: ["250g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
  },
  {
    id: "ck-ctc-green",
    slug: "premium-chai-patti-gold",
    name: "City King Gold Premium Chai Patti",
    hindiName: "प्रीमियम गोल्ड चाय पत्ती",
    category: "tea",
    image: teaGreen,
    imageIsPlaceholder: false,
    short: "Signature gold blend offering malty taste and perfect milk balance.",
    description:
      "Selected CTC tea granules providing strong color, aromatic briskness, and full-bodied cup flavor for true Indian chai lovers.",
    sizes: ["250g", "500g"],
    featured: false,
    status: "available",
  },
  {
    id: "ck-ctc-classic",
    slug: "classic-chai-patti",
    name: "City King Classic Chai Patti (Heritage Blend)",
    hindiName: "क्लासिक चाय पत्ती",
    category: "tea",
    image: teaClassic,
    imageIsPlaceholder: false,
    short: "Everyday kadak tea for households, dhabas, and tea stalls.",
    description:
      "A dependable, robust daily CTC chai patti offering deep liquor strength and aromatic Kadak flavor in every sip.",
    sizes: ["250g", "500g", "1kg Bulk"],
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

export type DishPairing = {
  id: string;
  name: string;
  nameHindi: string;
  icon: string;
  tagline: string;
  recommendedSlugs: string[];
  cookingTip: string;
  aromaNote: string;
};

export const dishPairings: DishPairing[] = [
  {
    id: "everyday-sabji",
    name: "Everyday Sabzi & Dry Veg",
    nameHindi: "सब्ज़ी और सूखी तरकारी",
    icon: "🥘",
    tagline: "A balanced, fragrant everyday blend that elevates simple vegetables into a feast.",
    recommendedSlugs: ["sabji-masala", "dhaniya-coriander-powder", "turmeric-haldi-powder"],
    cookingTip: "Add City King Sabji Masala right after frying onions and tomatoes for deep caramelised flavor.",
    aromaNote: "Warm, earthy & gently spiced aroma with toasted coriander.",
  },
  {
    id: "paneer-gravy",
    name: "Shahi & Kadhai Paneer",
    nameHindi: "शाही और कड़ाही पनीर",
    icon: "🍛",
    tagline: "Rich, aromatic restaurant-style velvety paneer gravies cooked at home.",
    recommendedSlugs: ["paneer-masala", "turmeric-haldi-powder", "mirchi-chilli-powder"],
    cookingTip: "Dissolve a spoonful of Paneer Masala in warm milk or curd before adding to the gravy.",
    aromaNote: "Rich royal aroma with exotic spices and natural warmth.",
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka & Comfort Dals",
    nameHindi: "दाल तड़का और कढ़ी",
    icon: "🍲",
    tagline: "The golden warmth and aromatic cumin tempering essential to every Indian meal.",
    recommendedSlugs: ["turmeric-haldi-powder", "jeera-cumin-powder", "mirchi-chilli-powder"],
    cookingTip: "Temper City King Jeera Powder in hot ghee with garlic and whole dried chillies for the ultimate tadka.",
    aromaNote: "Bright golden colour with robust roasted cumin notes.",
  },
  {
    id: "curry-gravy",
    name: "Classic Curry & Gravy",
    nameHindi: "मसालेदार करी और ग्रेवी",
    icon: "🍲",
    tagline: "Deep natural red colour, rich body, and the authentic heat Indian cooking is built on.",
    recommendedSlugs: ["mirchi-chilli-powder", "dhaniya-coriander-powder", "turmeric-haldi-powder"],
    cookingTip: "Use City King Mirchi Powder for natural vibrant red curries without any artificial food colour.",
    aromaNote: "Pungent natural warmth with fresh ground coriander base.",
  },
  {
    id: "kadak-chai",
    name: "Morning Kadak CTC Chai",
    nameHindi: "कड़क सुबह की चाय",
    icon: "☕",
    tagline: "The strong, malty and invigorating cup of CTC tea to start every morning.",
    recommendedSlugs: ["premium-ctc-tea-black"],
    cookingTip: "Boil with crushed ginger, cardamom, and fresh milk for a rich Siliguri tea experience.",
    aromaNote: "Rich malty aroma with brisk liquor and bright amber infusion.",
  },
  {
    id: "chaat-snacks",
    name: "Raita, Chaat & Snacks",
    nameHindi: "रायता, चाट और स्नैक्स",
    icon: "🥗",
    tagline: "A light sprinkle that transforms salads, dahi vada, curd raita, and evening snacks.",
    recommendedSlugs: ["jeera-cumin-powder", "dhaniya-coriander-powder"],
    cookingTip: "Gently dry toast or directly sprinkle City King Jeera Powder over boondi raita or roasted potatoes.",
    aromaNote: "Nutty roasted cumin with cooling herbal undertones.",
  },
];

