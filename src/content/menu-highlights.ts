// Display-only menu highlights for the marketing site — NOT the ordering
// system. Dom's already has a full, orderable menu (70+ items, cart +
// WhatsApp checkout) live at siteConfig.ordering.orderSiteUrl — this is
// just a curated, photogenic subset per category, enough to be genuinely
// useful to a visitor and to give Google/AI crawlers real food-related
// text to index.
//
// Content + prices pulled directly from domscafe.pages.dev's live menu
// (checked today) — real dishes, not placeholders. Photos are hotlinked
// from the same image host (i.ibb.co) Dom's own live site already uses for
// these exact dishes — same honesty principle this template's original
// content followed: only ever show a photo of the actual dish it's next
// to. Swap these for locally-hosted copies once Dom's supplies the source
// files directly (see the note in site.config.ts's header comment).
import type { LocalizedText } from '../i18n/languages';

export interface MenuHighlightItem {
  name: string;
  description: LocalizedText;
  priceMAD: number;
  image?: string;
  imageAlt?: LocalizedText;
  vegetarian?: boolean;
}
export interface MenuHighlightCategory {
  label: LocalizedText;
  items: MenuHighlightItem[];
  image?: string;
  imageAlt?: LocalizedText;
}

export const menuHighlights: MenuHighlightCategory[] = [
  {
    label: { fr: 'Formules Petit-Déjeuner', en: 'Breakfast Formulas', ar: 'وجبات الفطور' },
    items: [
      {
        name: "Dom's",
        description: {
          fr: "Boisson chaude, jus d'orange, toasts, œufs, fromage, charcuterie, bouteille d'eau.",
          en: 'Hot drink, orange juice, toasts, eggs, cheese, cold cuts, bottle of water.',
          ar: 'مشروب ساخن، عصير برتقال، توست، بيض، جبن، لحوم باردة، قارورة ماء.',
        },
        priceMAD: 37,
        image: 'https://i.ibb.co/XZcDMxZh/Chat-GPT-Image-21-jul-2026-11-49-42.webp',
        imageAlt: { fr: "Formule petit-déjeuner Dom's", en: "Dom's breakfast formula", ar: 'وجبة فطور Dom\'s' },
      },
      {
        name: 'Khlii aux œufs',
        description: {
          fr: 'Œufs cuits avec de la viande séchée traditionnelle (Khlii).',
          en: 'Eggs cooked with traditional dried, preserved meat (Khlii).',
          ar: 'بيض مطهو مع اللحم المجفف التقليدي (الخليع).',
        },
        priceMAD: 26,
        image: 'https://i.ibb.co/nMT3yQLh/Chat-GPT-Image-21-jul-2026-00-13-56.webp',
        imageAlt: { fr: "Khlii aux œufs servi à Dom's Café", en: "Khlii with eggs at Dom's Café", ar: 'خليع بالبيض في Dom\'s Café' },
      },
    ],
  },
  {
    label: { fr: 'Boissons Chaudes', en: 'Hot Drinks', ar: 'المشروبات الساخنة' },
    items: [
      {
        name: 'Thé à la menthe',
        description: {
          fr: 'Thé vert traditionnel à la menthe fraîche.',
          en: 'Traditional green tea with fresh mint.',
          ar: 'شاي أخضر تقليدي بالنعناع الطازج.',
        },
        priceMAD: 16,
        image: 'https://i.ibb.co/39PQDS2z/Chat-GPT-Image-21-jul-2026-17-29-25.webp',
        imageAlt: { fr: 'Thé à la menthe marocain', en: 'Moroccan mint tea', ar: 'أتاي مغربي بالنعناع' },
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: 'Viennoiseries', en: 'Pastries', ar: 'المعجنات' },
    items: [
      {
        name: 'Croissant',
        description: {
          fr: 'Croissant traditionnel pur beurre.',
          en: 'Traditional all-butter croissant.',
          ar: 'كرواسون تقليدي بالزبدة الخالصة.',
        },
        priceMAD: 10,
        vegetarian: true,
        image: 'https://i.ibb.co/m5FYmwgg/Chat-GPT-Image-21-jul-2026-00-37-11.webp',
        imageAlt: { fr: 'Croissant pur beurre', en: 'All-butter croissant', ar: 'كرواسون بالزبدة' },
      },
    ],
  },
  {
    label: { fr: 'Crêpes Sucrées & Salées', en: 'Sweet & Savory Crêpes', ar: 'الكريب الحلو والمالح' },
    items: [
      {
        name: 'Crêpe Nutella',
        description: {
          fr: 'Crêpe douce au Nutella onctueux.',
          en: 'Sweet crêpe with creamy Nutella.',
          ar: 'كريب حلو بالنوتيلا الكريمية.',
        },
        priceMAD: 22,
        vegetarian: true,
        image: 'https://i.ibb.co/8LstVF4J/Chat-GPT-Image-21-jul-2026-00-50-06.webp',
        imageAlt: { fr: 'Crêpe au Nutella', en: 'Nutella crêpe', ar: 'كريب بالنوتيلا' },
      },
      {
        name: 'Crêpe Poulet',
        description: {
          fr: 'Champignon, fromage, béchamel, poulet.',
          en: 'Mushroom, cheese, béchamel, chicken.',
          ar: 'فطر، جبن، بشاميل، دجاج.',
        },
        priceMAD: 32,
        image: 'https://i.ibb.co/C3G6wPPk/Chat-GPT-Image-21-jul-2026-01-03-08.webp',
        imageAlt: { fr: 'Crêpe salée au poulet', en: 'Savory chicken crêpe', ar: 'كريب مالح بالدجاج' },
      },
    ],
  },
  {
    label: { fr: 'Pizzas', en: 'Pizzas', ar: 'البيتزا' },
    items: [
      {
        name: 'Signature "Rabat Nights"',
        description: {
          fr: 'Mozzarella, khlea effilochée, oignons caramélisés, œuf au plat, amlou.',
          en: 'Mozzarella, shredded khlea, caramelized onions, fried egg, amlou.',
          ar: 'موزاريلا، خليع مفروم، بصل مكرمل، بيضة مقلية، أملو.',
        },
        priceMAD: 55,
        image: '/images/dom/pizzas/rabat-nights.webp',
        imageAlt: { fr: 'Pizza Signature Rabat Nights', en: 'Signature Rabat Nights pizza', ar: 'بيتزا التوقيع ليالي الرباط' },
      },
      {
        name: 'Margherita Superiore',
        description: {
          fr: 'Mozzarella fondante, sauce tomate, basilic frais.',
          en: 'Melted mozzarella, tomato sauce, fresh basil.',
          ar: 'موزاريلا ذائبة، صلصة طماطم، ريحان طازج.',
        },
        priceMAD: 38,
        vegetarian: true,
        image: '/images/dom/pizzas/margherita-superiore.webp',
        imageAlt: { fr: 'Pizza Margherita Superiore', en: 'Margherita Superiore pizza', ar: 'بيتزا مارغريتا سوبيريوري' },
      },
    ],
  },
  {
    label: { fr: 'Sandwiches & Burgers', en: 'Sandwiches & Burgers', ar: 'السندويشات والبرغر' },
    items: [
      {
        name: "Sandwich Dom's",
        description: {
          fr: 'Thon, salami, jambon de bœuf, fromage, tomates, laitue, cornichons.',
          en: 'Tuna, salami, beef ham, cheese, tomatoes, lettuce, pickles.',
          ar: 'تونة، سلامي، لحم بقري، جبن، طماطم، خس، مخلل.',
        },
        priceMAD: 34,
        image: 'https://i.ibb.co/CrLMWcw/Chat-GPT-Image-21-jul-2026-12-57-14.webp',
        imageAlt: { fr: "Sandwich Dom's", en: "Dom's sandwich", ar: 'ساندويتش Dom\'s' },
      },
      {
        name: 'Beef',
        description: {
          fr: 'Viande hachée, cheddar, tomate, oignon, laitue, cornichons.',
          en: 'Ground beef, cheddar, tomato, onion, lettuce, pickles.',
          ar: 'لحم مفروم، شيدر، طماطم، بصل، خس، مخلل.',
        },
        priceMAD: 40,
        image: 'https://i.ibb.co/5WVxdKk5/Chat-GPT-Image-21-jul-2026-16-12-30.webp',
        imageAlt: { fr: 'Burger Beef', en: 'Beef burger', ar: 'برغر لحم' },
      },
    ],
  },
  {
    label: { fr: 'Pâtes', en: 'Pasta', ar: 'المعكرونة' },
    items: [
      {
        name: 'Carbonara',
        description: {
          fr: 'Jambon, champignon, parmesan, crème fraîche.',
          en: 'Ham, mushroom, parmesan, fresh cream.',
          ar: 'لحم خنزير بقري، فطر، بارميزان، كريمة طازجة.',
        },
        priceMAD: 55,
        image: 'https://i.ibb.co/My1TZkS7/Chat-GPT-Image-21-jul-2026-17-01-30.webp',
        imageAlt: { fr: 'Pâtes Carbonara', en: 'Carbonara pasta', ar: 'معكرونة كاربونارا' },
      },
    ],
  },
  {
    label: { fr: 'Desserts', en: 'Desserts', ar: 'الحلويات' },
    items: [
      {
        name: 'Tarte du jour',
        description: {
          fr: 'Tarte maison aux fruits frais de saison.',
          en: "Homemade tart with fresh, seasonal fruit.",
          ar: 'تارت منزلية بفواكه طازجة موسمية.',
        },
        priceMAD: 25,
        vegetarian: true,
        image: 'https://i.ibb.co/KjCzxq9R/Chat-GPT-Image-21-jul-2026-17-44-51.webp',
        imageAlt: { fr: 'Tarte du jour maison', en: 'Homemade tart of the day', ar: 'تارت اليوم المنزلية' },
      },
    ],
  },
];
