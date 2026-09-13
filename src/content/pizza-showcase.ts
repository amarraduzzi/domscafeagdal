// "Best pizza in Agdal" homepage section — client's own priority push
// ("We willen de beste pizza van Rabat/Agdal gaan promoten" — client's
// wording).
//
// Menu update 13/09/2026: the client sent over the new official printed
// menu and was explicit that every pizza previously "developed" for this
// site (the old 8-item round lineup, and the "pizza al taglio" square-cut
// launch concept that briefly replaced it in September 2026) must be
// retired entirely -- the 9 pizzas below, exactly as printed on the new
// menu (same names, descriptions and MAD prices as domscafe.pages.dev's
// own data.ts), are now the ONLY pizzas anywhere in the system. Real fixed
// prices exist again (no more "price coming soon" -- see the old header
// comment this replaces), so every consumer of this file (PizzaShowcaseGrid
// .astro, PizzaContent.astro) can rely on `priceMAD` always being set.
//
// Images: reused from /images/dom/pizzas/ -- these already had a
// same-named client photo for 8 of the 9 (margarita, vegetarian, tuna,
// pollo, american, vivanda, quattro-formaggi, fisherman); only
// "Quatre Saisons" (build-your-own, no fixed recipe) has no photo, same as
// on the ordering site.
import type { LocalizedText } from '../i18n/languages';

export interface PizzaShowcaseItem {
  name: string;
  description: LocalizedText;
  priceMAD?: number;
  image: string;
  imageAlt: LocalizedText;
  popular?: boolean;
  tagline?: LocalizedText;
}

export const pizzaShowcase: PizzaShowcaseItem[] = [
  {
    name: 'Margarita',
    description: {
      fr: 'Mozzarella, sauce tomate, olives noires, basilic.',
      en: 'Mozzarella, tomato sauce, black olives, basil.',
      ar: 'موزاريلا، صلصة طماطم، زيتون أسود، ريحان.',
    },
    priceMAD: 36,
    image: '/images/dom/pizzas/margarita.webp',
    imageAlt: { fr: 'Pizza Margarita', en: 'Margarita pizza', ar: 'بيتزا مارغريتا' },
    popular: true,
    tagline: { fr: 'La classique italienne, comme il se doit.', en: 'The Italian classic, done right.', ar: 'الكلاسيكية الإيطالية كما يجب.' },
  },
  {
    name: 'Végétarienne',
    description: {
      fr: 'Mozzarella, sauce tomate, légumes de saison.',
      en: 'Mozzarella, tomato sauce, seasonal vegetables.',
      ar: 'موزاريلا، صلصة طماطم، خضار موسمية.',
    },
    priceMAD: 42,
    image: '/images/dom/pizzas/vegetarian.webp',
    imageAlt: { fr: 'Pizza Végétarienne', en: 'Vegetarian pizza', ar: 'بيتزا نباتية' },
    tagline: { fr: 'Fraîche et pleine de couleurs.', en: 'Fresh and full of color.', ar: 'منعشة وملونة.' },
  },
  {
    name: 'Thons',
    description: {
      fr: 'Mozzarella, thon, poivrons, olives noires.',
      en: 'Mozzarella, tuna, bell peppers, black olives.',
      ar: 'موزاريلا، تونة، فلفل حلو، زيتون أسود.',
    },
    priceMAD: 46,
    image: '/images/dom/pizzas/tuna.webp',
    imageAlt: { fr: 'Pizza Thons', en: 'Tuna pizza', ar: 'بيتزا تونة' },
    tagline: { fr: 'Fraîche et méditerranéenne.', en: 'Fresh and Mediterranean.', ar: 'منعشة ومتوسطية.' },
  },
  {
    name: 'Pollo',
    description: {
      fr: 'Mozzarella, poulet, poivrons, champignons, sauce tomate.',
      en: 'Mozzarella, chicken, bell peppers, mushrooms, tomato sauce.',
      ar: 'موزاريلا، دجاج، فلفل حلو، فطر، صلصة طماطم.',
    },
    priceMAD: 48,
    image: '/images/dom/pizzas/pollo.webp',
    imageAlt: { fr: 'Pizza Pollo', en: 'Pollo (chicken) pizza', ar: 'بيتزا بولو (دجاج)' },
    popular: true,
    tagline: { fr: 'Le favori de la maison.', en: "The house favorite.", ar: 'المفضلة لدينا.' },
  },
  {
    name: 'Américaine',
    description: {
      fr: 'Mozzarella, pepperoni, sauce tomate, olives noires.',
      en: 'Mozzarella, pepperoni, tomato sauce, black olives.',
      ar: 'موزاريلا، ببروني، صلصة طماطم، زيتون أسود.',
    },
    priceMAD: 48,
    image: '/images/dom/pizzas/american.webp',
    imageAlt: { fr: 'Pizza Américaine', en: 'American pizza', ar: 'بيتزا أمريكية' },
    tagline: { fr: 'Généreuse et épicée.', en: 'Generous and bold.', ar: 'سخية ومتبلة.' },
  },
  {
    name: 'Vivanda',
    description: {
      fr: 'Mozzarella, viande hachée, champignons, poivrons, sauce tomate, olives noires.',
      en: 'Mozzarella, minced beef, mushrooms, bell peppers, tomato sauce, black olives.',
      ar: 'موزاريلا، لحم مفروم، فطر، فلفل حلو، صلصة طماطم، زيتون أسود.',
    },
    priceMAD: 52,
    image: '/images/dom/pizzas/vivanda.webp',
    imageAlt: { fr: 'Pizza Vivanda', en: 'Vivanda pizza', ar: 'بيتزا فيفاندا' },
    tagline: { fr: 'Riche et généreuse.', en: 'Rich and hearty.', ar: 'غنية وسخية.' },
  },
  {
    name: 'Quatre Fromages',
    description: {
      fr: 'Edam, bleu, brie, mozzarella, crème fraîche, sauce tomate.',
      en: 'Edam, blue cheese, brie, mozzarella, fresh cream, tomato sauce.',
      ar: 'إيدام، جبن أزرق، بري، موزاريلا، قشدة طرية، صلصة طماطم.',
    },
    priceMAD: 55,
    image: '/images/dom/pizzas/quattro-formaggi.webp',
    imageAlt: { fr: 'Pizza Quatre Fromages', en: 'Four cheese pizza', ar: 'بيتزا أربعة أجبان' },
    tagline: { fr: 'Pour les amateurs de fromage.', en: 'For the cheese lovers.', ar: 'لعشاق الجبن.' },
  },
  {
    name: 'Fisherman',
    description: {
      fr: 'Mozzarella, crevettes, calamars, surimi, sauce tomate, olives noires.',
      en: 'Mozzarella, shrimp, squid, surimi, tomato sauce, black olives.',
      ar: 'موزاريلا، جمبري، كالمار، سوريمي، صلصة طماطم، زيتون أسود.',
    },
    priceMAD: 75,
    image: '/images/dom/pizzas/fisherman.webp',
    imageAlt: { fr: 'Pizza Fisherman', en: 'Fisherman pizza', ar: 'بيتزا صياد السمك' },
    tagline: { fr: 'Notre pizza signature aux fruits de mer.', en: 'Our signature seafood pizza.', ar: 'بيتزا المأكولات البحرية المميزة لدينا.' },
  },
];
