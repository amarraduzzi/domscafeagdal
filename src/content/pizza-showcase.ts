// "Best pizza in Agdal" homepage section — client's own priority push
// ("We willen de beste pizza van Rabat gaan promoten" — client's original
// wording; later corrected sitewide to "Agdal" specifically, never "Rabat").
// Names, prices and
// ingredients pulled directly from domscafe.pages.dev's live menu (the
// same source menu-highlights.ts already uses) — real dishes, not
// invented ones. Photos are the client's own, supplied directly and
// stored locally at /images/dom/pizzas/ (resized/converted to webp) —
// no hotlinking here, unlike menu-highlights.ts's placeholder photos.
import type { LocalizedText } from '../i18n/languages';

export interface PizzaShowcaseItem {
  name: string;
  description: LocalizedText;
  priceMAD: number;
  image: string;
  imageAlt: LocalizedText;
  popular?: boolean;
  // Short, evocative one-liner — used on the dedicated /pizza page
  // (PizzaContent.astro) to give each pizza a bit of personality beyond its
  // ingredient list. Deliberately mood/sensory copy, not a factual claim
  // (no invented "best-seller since X" type lines) — the one exception is
  // Pollo's, which leans on the already-real `popular` flag above rather
  // than asserting anything new. Optional so PizzaShowcaseGrid.astro (the
  // compact Home/Menu teaser) can keep ignoring it.
  tagline?: LocalizedText;
}

export const pizzaShowcase: PizzaShowcaseItem[] = [
  {
    name: 'Fisherman',
    description: {
      fr: 'Mozzarella, crevettes, calamars, surimi, sauce tomate, olives noires.',
      en: 'Mozzarella, shrimp, squid, surimi, tomato sauce, black olives.',
      ar: 'موزاريلا، روبيان، حبار، سوريمي، صلصة الطماطم، زيتون أسود.',
    },
    priceMAD: 55,
    image: '/images/dom/pizzas/fisherman.webp',
    imageAlt: { fr: 'Pizza Fisherman aux fruits de mer', en: 'Fisherman seafood pizza', ar: 'بيتزا فيشرمان بالمأكولات البحرية' },
    tagline: { fr: 'Toute la mer, sur une seule pizza.', en: 'The whole sea, on a single pizza.', ar: 'كل نكهات البحر في بيتزا واحدة.' },
  },
  {
    name: 'Pollo',
    description: {
      fr: 'Mozzarella, poulet, poivrons, champignons, sauce tomate.',
      en: 'Mozzarella, chicken, bell peppers, mushrooms, tomato sauce.',
      ar: 'موزاريلا، دجاج، فلفل، فطر، صلصة الطماطم.',
    },
    priceMAD: 42,
    image: '/images/dom/pizzas/pollo.webp',
    imageAlt: { fr: 'Pizza Pollo au poulet', en: 'Pollo chicken pizza', ar: 'بيتزا بولو بالدجاج' },
    popular: true,
    tagline: { fr: 'La pizza préférée de nos clients.', en: "Our customers' favorite.", ar: 'المفضلة لدى عملائنا.' },
  },
  {
    name: 'American',
    description: {
      fr: 'Mozzarella, pepperoni, sauce tomate, olives noires.',
      en: 'Mozzarella, pepperoni, tomato sauce, black olives.',
      ar: 'موزاريلا، ببروني، صلصة الطماطم، زيتون أسود.',
    },
    priceMAD: 44,
    image: '/images/dom/pizzas/american.webp',
    imageAlt: { fr: 'Pizza American au pepperoni', en: 'American pepperoni pizza', ar: 'بيتزا أمريكان بالببروني' },
    tagline: { fr: 'Simple, généreuse, et redoutablement efficace.', en: 'Simple, generous, dangerously good.', ar: 'بسيطة وسخية ولذيذة جدًا.' },
  },
  {
    name: 'Tuna',
    description: {
      fr: 'Mozzarella, thon, poivrons, olives noires.',
      en: 'Mozzarella, tuna, bell peppers, black olives.',
      ar: 'موزاريلا، تونة، فلفل، زيتون أسود.',
    },
    priceMAD: 42,
    image: '/images/dom/pizzas/tuna.webp',
    imageAlt: { fr: 'Pizza Tuna au thon', en: 'Tuna pizza', ar: 'بيتزا تونة' },
    tagline: { fr: "Le thon et les olives, comme on l'aime à Rabat.", en: 'Tuna and olives, just how Rabat likes it.', ar: 'تونة وزيتون، بالطريقة التي يحبها أهل الرباط.' },
  },
  {
    name: 'Vivanda',
    description: {
      fr: 'Mozzarella, viande hachée, champignons, poivrons, sauce tomate, olives noires.',
      en: 'Mozzarella, minced beef, mushrooms, bell peppers, tomato sauce, black olives.',
      ar: 'موزاريلا، لحم مفروم، فطر، فلفل، صلصة الطماطم، زيتون أسود.',
    },
    priceMAD: 47,
    image: '/images/dom/pizzas/vivanda.webp',
    imageAlt: { fr: 'Pizza Vivanda à la viande hachée', en: 'Vivanda minced beef pizza', ar: 'بيتزا فيفاندا باللحم المفروم' },
    tagline: { fr: 'Une pizza qui a du caractère.', en: 'A pizza with character.', ar: 'بيتزا ذات طابع مميز.' },
  },
  {
    name: 'Vegetarian',
    description: {
      fr: 'Mozzarella, sauce tomate, légumes de saison.',
      en: 'Mozzarella, tomato sauce, seasonal vegetables.',
      ar: 'موزاريلا، صلصة الطماطم، خضروات الموسم.',
    },
    priceMAD: 36,
    image: '/images/dom/pizzas/vegetarian.webp',
    imageAlt: { fr: 'Pizza Vegetarian aux légumes', en: 'Vegetarian pizza', ar: 'بيتزا نباتية' },
    tagline: { fr: 'Fraîche, légère, pleine de couleurs.', en: 'Fresh, light, full of color.', ar: 'طازجة وخفيفة ومليئة بالألوان.' },
  },
  {
    name: 'Margarita',
    description: {
      fr: 'Mozzarella, sauce tomate, olives noires, basilic.',
      en: 'Mozzarella, tomato sauce, black olives, basil.',
      ar: 'موزاريلا، صلصة الطماطم، زيتون أسود، ريحان.',
    },
    priceMAD: 32,
    image: '/images/dom/pizzas/margarita.webp',
    imageAlt: { fr: 'Pizza Margarita', en: 'Margherita pizza', ar: 'بيتزا مارغريتا' },
    tagline: { fr: 'La classique. Celle qui ne trompe jamais.', en: 'The classic. Never fails.', ar: 'الكلاسيكية التي لا تخيب أبدًا.' },
  },
];
