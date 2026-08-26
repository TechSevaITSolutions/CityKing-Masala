import haldi from "@/assets/product-haldi.jpg";
import jeera from "@/assets/product-jeera.jpg";
import dhaniya from "@/assets/product-dhaniya.jpg";
import mirchi from "@/assets/product-mirchi.jpg";
import sabji from "@/assets/product-sabji.jpg";
import paneer from "@/assets/product-paneer.jpg";
import tea from "@/assets/product-tea.jpg";
import hero from "@/assets/hero-spices.jpg";
import food from "@/assets/story-food.jpg";
import kitchen from "@/assets/gallery-kitchen.jpg";
import whole from "@/assets/gallery-whole-spices.jpg";
import texture from "@/assets/texture-spice-dark.jpg";

export type GalleryCategory = "products" | "brand" | "packaging" | "company" | "food";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** True while awaiting official City King photography from the business. */
  awaitingBrandPhoto?: boolean;
};

export const galleryCategories: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "products", label: "Products" },
  { id: "brand", label: "Brand" },
  { id: "packaging", label: "Packaging" },
  { id: "company", label: "Company" },
  { id: "food", label: "Food" },
];

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: haldi, alt: "Turmeric powder in a bowl with fresh turmeric root", category: "products" },
  { id: "g2", src: mirchi, alt: "Red chilli powder with whole dried red chillies", category: "products" },
  { id: "g3", src: dhaniya, alt: "Coriander powder with seeds and fresh coriander leaves", category: "products" },
  { id: "g4", src: jeera, alt: "Cumin seeds and cumin powder in a ceramic bowl", category: "products" },
  { id: "g5", src: sabji, alt: "Sabji masala blend surrounded by whole spices", category: "products" },
  { id: "g6", src: paneer, alt: "Paneer masala blend with fresh paneer cubes", category: "products" },
  { id: "g7", src: tea, alt: "CTC tea granules beside a cup of Indian milk tea", category: "products" },
  { id: "g8", src: hero, alt: "Indian spices arranged in brass bowls", category: "brand" },
  { id: "g9", src: texture, alt: "Turmeric powder with spice dust in dramatic light", category: "brand" },
  { id: "g10", src: whole, alt: "Whole Indian spices laid out in rows", category: "brand" },
  { id: "g11", src: kitchen, alt: "Spice powder being added to a curry in an Indian home kitchen", category: "food" },
  { id: "g12", src: food, alt: "Indian meal of paneer curry, dal, rice and roti", category: "food" },
];
