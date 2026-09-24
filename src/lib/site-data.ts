import { Car, BedDouble, Sofa, Sparkles, Waves } from "lucide-react";
import heroImage from "@/assets/primeclean-hero.jpg";
import carpetImage from "@/assets/carpet-before-after.jpg";
import mattressImage from "@/assets/mattress-cleaning.jpg";
import carImage from "@/assets/car-interior-cleaning.jpg";

export const services = [
  { slug: "couch-cleaning", name: "Couch Cleaning", short: "Couch", price: "CA$80", duration: "2 hr", description: "Make your couch look fresh and clean again.", icon: Sofa, image: heroImage },
  { slug: "carpet-cleaning", name: "Carpet Cleaning", short: "Carpet", price: "CA$100", duration: "1 hr 30 min", description: "Deep extraction removing deep-set dirt & odors.", icon: Waves, image: carpetImage },
  { slug: "mattress-cleaning", name: "Mattress Cleaning", short: "Mattress", price: "CA$70", duration: "1 hr", description: "Eliminate dust mites, odors, and allergens for better sleep.", icon: BedDouble, image: mattressImage },
  { slug: "area-rug-cleaning", name: "Area Rug Cleaning", short: "Area Rugs", price: "CA$40", duration: "1 hr", description: "Gentle yet deep fiber care.", icon: Sparkles, image: carpetImage },
  { slug: "car-interior-cleaning", name: "Car Interior Cleaning", short: "Auto Upholstery", price: "CA$150", duration: "2 hr", description: "Complete upholstery & seat deep clean.", icon: Car, image: carImage },
] as const;

export const articles = [
  { category: "CARPET CARE", time: "5 min read", title: "How often should you deep clean your carpets?", excerpt: "A practical schedule for busy Winnipeg homes, pets, and allergy seasons.", image: carpetImage },
  { category: "BETTER SLEEP", time: "4 min read", title: "What may be hiding in your mattress", excerpt: "Why periodic extraction helps reduce dust, odors, and allergens.", image: mattressImage },
  { category: "AUTO CARE", time: "6 min read", title: "A fresh start for your car interior", excerpt: "Simple ways to keep seats and upholstery cleaner between appointments.", image: carImage },
] as const;

export function pageMeta(title: string, description: string, path: string) {
  return {
    meta: [
      { title: `${title} | PrimeClean Services` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | PrimeClean Services` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}