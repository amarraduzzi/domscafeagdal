// "Fusion by Dom's" — the /fusion page's own product line, entirely separate
// from the classic round pizzas (pizza-showcase.ts, still used on Home/Menu).
// Fusion is a new, distinct format: rectangular 10x15cm pizzas with
// unexpected ingredient pairings — client's own concept and photography
// (see chat, 27/09/2026), stored locally at /images/dom/fusion/ (converted
// to webp). Prices and descriptions come straight from the client's own
// product photos, not invented.
import type { LocalizedText } from '../i18n/languages';

export interface FusionItem {
  name: string;
  description: LocalizedText;
  priceMAD: number;
  image: string;
  imageAlt: LocalizedText;
}

export const fusionShowcase: FusionItem[] = [
  {
    name: 'The Red Hot',
    description: {
      fr: 'Sauce tomate, stracciatella, piment.',
      en: 'Tomato sauce, stracciatella, chili.',
      ar: 'صلصة الطماطم، ستراتشاتيلا، فلفل حار.',
    },
    priceMAD: 17,
    image: '/images/dom/fusion/red-hot.webp',
    imageAlt: { fr: 'Pizza Fusion The Red Hot au piment', en: 'The Red Hot chili Fusion pizza', ar: 'بيتزا فيوجن ذا ريد هوت بالفلفل الحار' },
  },
  {
    name: 'The Green',
    description: {
      fr: 'Pesto, courgette, aubergine, miel piquant.',
      en: 'Pesto, zucchini, eggplant, spicy honey.',
      ar: 'بيستو، كوسة، باذنجان، عسل حار.',
    },
    priceMAD: 18,
    image: '/images/dom/fusion/green.webp',
    imageAlt: { fr: 'Pizza Fusion The Green au pesto', en: 'The Green pesto Fusion pizza', ar: 'بيتزا فيوجن ذا غرين بالبيستو' },
  },
  {
    name: 'The Gold',
    description: {
      fr: 'Crème, merguez, parmesan, basilic.',
      en: 'Cream, merguez, parmesan, basil.',
      ar: 'كريمة، مرقاز، بارميزان، ريحان.',
    },
    priceMAD: 20,
    image: '/images/dom/fusion/gold.webp',
    imageAlt: { fr: 'Pizza Fusion The Gold au merguez', en: 'The Gold merguez Fusion pizza', ar: 'بيتزا فيوجن ذا غولد بالمرقاز' },
  },
  {
    name: 'The Red',
    description: {
      fr: 'Sauce tomate, stracciatella, basilic.',
      en: 'Tomato sauce, stracciatella, basil.',
      ar: 'صلصة الطماطم، ستراتشاتيلا، ريحان.',
    },
    priceMAD: 15,
    image: '/images/dom/fusion/red.webp',
    imageAlt: { fr: 'Pizza Fusion The Red', en: 'The Red Fusion pizza', ar: 'بيتزا فيوجن ذا ريد' },
  },
];
