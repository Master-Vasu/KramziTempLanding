export const images = {
  cosmetics1: "/images/cosmetics-1.jpg",
  skincare1: "/images/skincare-1.jpg",
  skincare2: "/images/skincare-2.jpg",
  skincare3: "/images/skincare-3.jpg",
  skincare4: "/images/skincare-4.jpg",
  beautyWoman: "/images/beauty-woman.jpg",
  makeup1: "/images/makeup-1.jpg",
  makeupFlatlay: "/images/makeup-flatlay.jpg",
  spa1: "/images/spa-1.jpg",
  beauty1: "/images/beauty-1.jpg",
  lips1: "/images/lips-1.jpg",
  diamond: "/images/diamond.jpg",
};

export const bestSellers = [
  {
    id: 1,
    slug: "moisty-blackberry-lip-butter",
    name: "Moisty Blackberry Lip Butter",
    price: 599,
    originalPrice: null,
    rating: 4.5,
    reviews: 3,
    image: images.cosmetics1,
    images: [
      images.cosmetics1,
      images.skincare1,
      images.spa1,
      images.skincare3,
      images.lips1,
      images.skincare2,
    ],
    description:
      "A rich, nourishing lip butter powered by nature's best moisturizers. Formulated with Shea Butter, Cocoa Butter, and premium waxes, it melts onto lips to instantly hydrate and lock in moisture. The fruity essence of Blackberry Extract adds a delicious twist.",
    bestseller: true,
    category: "Lip Care",
  },
  {
    id: 2,
    slug: "moisty-strawberry-lip-butter",
    name: "Moisty Strawberry Lip Butter",
    price: 599,
    originalPrice: null,
    rating: 4,
    reviews: 2,
    image: images.lips1,
    images: [
      images.lips1,
      images.beautyWoman,
      images.makeup1,
      images.skincare3,
      images.beauty1,
      images.spa1,
    ],
    description:
      "Our Lip Balm is enriched with Shea Butter, Beeswax, and Carnauba Wax to deeply nourish and hydrate your lips. Infused with UV protection agents, it shields your lips from harmful sun exposure. Smooth, non-greasy texture with a hint of strawberry fragrance.",
    bestseller: true,
    category: "Lip Care",
  },
  {
    id: 3,
    slug: "refreshing-shower",
    name: "refreshing shower",
    price: 599,
    originalPrice: 700,
    rating: null,
    reviews: 0,
    image: images.spa1,
    images: [
      images.spa1,
      images.beauty1,
      images.skincare2,
      images.skincare4,
      images.beautyWoman,
      images.skincare1,
    ],
    description:
      "Dive into a refreshing shower experience enriched with sea minerals. Gently cleanses and hydrates your skin, leaving it soft, smooth, and rejuvenated. Invigorating aquatic fragrance for an everyday revitalizing escape.",
    bestseller: true,
    category: "Body Care",
  },
  {
    id: 4,
    slug: "seafresh-exfoliating-cleanser",
    name: "Seafresh Exfoliating Cleanser",
    price: 599,
    originalPrice: null,
    rating: 4,
    reviews: 3,
    image: images.skincare1,
    images: [
      images.skincare1,
      images.beauty1,
      images.spa1,
      images.cosmetics1,
      images.skincare3,
      images.skincare2,
    ],
    description:
      "Seafresh Exfoliating Cleanser gently removes dead skin cells while nourishing with marine botanicals. Perfect for daily use on all skin types. Leaves your skin feeling fresh, clean, and radiant.",
    bestseller: true,
    category: "Skincare",
  },
];

export const allProducts = [
  ...bestSellers,
  {
    id: 5,
    slug: "strawberry-lip-mask",
    name: "Strawberry Lip Mask",
    price: 699,
    originalPrice: null,
    rating: 4.8,
    reviews: 12,
    image: images.lips1,
    images: [
      images.lips1,
      images.beautyWoman,
      images.makeup1,
      images.cosmetics1,
      images.skincare3,
      images.spa1,
    ],
    description:
      "Overnight lip mask infused with real strawberry extract. Deeply hydrates and repairs dry, chapped lips while you sleep. Wake up to soft, plump, naturally beautiful lips.",
    bestseller: false,
    category: "Lip Care",
  },
  {
    id: 6,
    slug: "aqua-sea-minerals-shower-gel",
    name: "Aqua Sea Minerals Shower Gel",
    price: 549,
    originalPrice: null,
    rating: 4.3,
    reviews: 8,
    image: images.beauty1,
    images: [
      images.beauty1,
      images.spa1,
      images.skincare4,
      images.skincare2,
      images.beautyWoman,
      images.skincare1,
    ],
    description:
      "Aqua Sea Minerals Shower Gel enriched with sea minerals gently cleanses and hydrates. Invigorating aquatic fragrance transforms your everyday shower into a revitalizing escape.",
    bestseller: false,
    category: "Body Care",
  },
];

export function getProductById(id) {
  return allProducts.find((p) => p.id === Number(id));
}

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(id, limit = 4) {
  return allProducts.filter((p) => p.id !== Number(id)).slice(0, limit);
}

export const videoTabs = [
  {
    id: "action",
    label: "Watch our product in action",
    title: "Product in Action",
    description:
      "See how our lip butter glides smoothly and delivers instant hydration. Real customers, real results — watch the full application demo.",
    image: images.beautyWoman,
  },
  {
    id: "works",
    label: "See how it works",
    title: "How It Works",
    description:
      "Our formula combines Shea Butter, natural waxes, and fruit extracts. Learn the science behind soft, supple lips in under 2 minutes.",
    image: images.skincare3,
  },
  {
    id: "testimonial",
    label: "Customer testimonial",
    title: "Customer Testimonial",
    description:
      "Hear from happy customers who transformed their lip care routine with Kramzi Essentials. Rated 4.1 stars by 16 verified buyers.",
    image: images.makeup1,
  },
  {
    id: "behind",
    label: "Behind the scenes",
    title: "Behind the Scenes",
    description:
      "Take a peek inside our lab and production process. Cruelty-free, plant-based, and doctor-trusted formulations made with care.",
    image: images.skincare1,
  },
];

export const cleanBeautyFeatures = [
  { id: 1, label: "CLINICALLY PROVEN RESULTS", icon: "flask", slug: "clinical" },
  { id: 2, label: "CRUELTY FREE", icon: "rabbit", slug: "cruelty-free" },
  { id: 3, label: "PLANT BIO ACTIVES", icon: "plant", slug: "plant-actives" },
];

export const featurePages = {
  clinical: {
    title: "Clinically Proven Results",
    content:
      "Every Kramzi product undergoes rigorous dermatological testing. Our formulations are backed by clinical studies showing measurable improvement in skin hydration, lip softness, and overall skin health within 14 days of regular use.",
    image: images.skincare3,
  },
  "cruelty-free": {
    title: "Cruelty Free",
    content:
      "We never test on animals. Kramzi Essentials is proudly certified cruelty-free. Our commitment to ethical beauty means every product is developed using alternative testing methods that are safe and humane.",
    image: images.makeup1,
  },
  "plant-actives": {
    title: "Plant Bio Actives",
    content:
      "Harnessing the power of nature, our products feature plant-derived bio actives including Shea Butter, Beeswax, fruit extracts, and marine minerals. Clean ingredients for uncompromised efficacy.",
    image: images.lips1,
  },
};

export const promoBenefits = [
  { id: 1, text: "Made with Natural Goodness", icon: "heart" },
  { id: 2, text: "Deep Hydration & Nourishment", icon: "droplet" },
  { id: 3, text: "Soft, Smooth & Naturally Beautiful Lips", icon: "lips" },
];

export const galleryImages = [
  { id: 1, src: images.beautyWoman, alt: "Customer applying lip balm" },
  { id: 2, src: images.diamond, alt: "Premium quality" },
  { id: 3, src: images.beauty1, alt: "Spa essentials" },
  { id: 4, src: images.spa1, alt: "Natural skincare" },
  { id: 5, src: images.skincare1, alt: "Beauty products" },
];

export const testimonials = [
  {
    id: 1,
    name: "Anonymous",
    rating: 0,
    image: images.cosmetics1,
  },
  {
    id: 2,
    name: "Krupalkotadiya",
    rating: 5,
    image: images.skincare1,
  },
  {
    id: 3,
    name: "Anonymous",
    rating: 5,
    image: images.lips1,
  },
];

export const footerLinks = {
  quick: [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Products & Services", path: "/products-services" },
    { label: "Contact", path: "/contact" },
  ],
  services: [
    { label: "Contact Information", path: "/contact" },
    { label: "Privacy Policy", path: "/policy/privacy" },
    { label: "Terms & Conditions", path: "/policy/terms" },
    { label: "Refund Policy", path: "/policy/refund" },
    { label: "Shipping Policy", path: "/policy/shipping" },
  ],
};

export const heroImage = images.beautyWoman;
