// "Best pizza in Agdal" homepage section — client's own priority push
// ("We willen de beste pizza van Rabat/Agdal gaan promoten" — client's
// wording). Concept fully replaced again (client request, September 2026,
// second pivot): Dom's is repositioning as Rabat's first Roman-style
// square pizza ("pizza al taglio" / "pizza romana", thin and crisp — NOT
// the tall airy teglia crust, see chat) counter, sold by the cut/piece
// instead of a whole round pizza. The 8-item round-pizza lineup below this
// comment used to hold ("Rabat Nights", "El Reto", "Quattro Formaggi
// Nobile", etc.) is retired from this showcase; the 5 launch flavors below
// replace it: 2 timeless Italian classics (Margherita, Tonno) plus 3 that
// tell Dom's own Moroccan-Italian story (Merguez Piccante, Poulet
// Chermoula, Manzo Ricco).
//
// PRICES ARE NOT SET YET — the client is still deciding fixed-price-per-
// square vs. sold-by-weight, so `priceMAD` is optional here and every
// place that reads it (PizzaShowcaseGrid.astro, PizzaContent.astro) must
// handle it being undefined gracefully. Do not invent a placeholder price.
//
// Photos: AI-generated placeholder photography (client asked for these to
// visualize the new format before real product photography exists —
// see chat), stored at /images/dom/pizzas-al-taglio/ to keep them
// clearly separate from the old round-pizza client photos still sitting
// unused at /images/dom/pizzas/. Replace every image below with real
// photography of the actual product as soon as it exists — these are
// stand-ins, not the finished asset.
import type { LocalizedText } from '../i18n/languages';

export interface PizzaShowcaseItem {
  name: string;
  description: LocalizedText;
  /** Not set yet — see header comment. Every consumer of this field must
      render something sensible (e.g. a "prix bientôt" label) when this is
      undefined, never a fabricated number. */
  priceMAD?: number;
  image: string;
  imageAlt: LocalizedText;
  popular?: boolean;
  // Short, evocative one-liner — used on the dedicated /pizza page
  // (PizzaContent.astro) to give each pizza a bit of personality beyond its
  // ingredient list. Deliberately mood/sensory copy, not a factual claim
  // (no invented "best-seller since X" type lines). Optional so
  // PizzaShowcaseGrid.astro (the compact Home/Menu teaser) can keep
  // ignoring it.
  tagline?: LocalizedText;
}

export const pizzaShowcase: PizzaShowcaseItem[] = [
  {
    name: 'Poulet Chermoula',
    description: {
      fr: 'Mozzarella, poulet grillé façon chermoula, oignons caramélisés, poivrons, coriandre fraîche.',
      en: 'Mozzarella, chermoula-spiced grilled chicken, caramelized onions, bell peppers, fresh coriander.',
      ar: 'موزاريلا، دجاج مشوي بالشرمولة، بصل مكرمل، فلفل حلو، كزبرة طازجة.',
    },
    image: '/images/dom/pizzas-al-taglio/poulet-chermoula.webp',
    imageAlt: { fr: 'Pizza carrée Poulet Chermoula à la romaine', en: 'Square Roman-style Poulet Chermoula pizza', ar: 'بيتزا مربعة على الطريقة الرومانية بولي شرمولة' },
    popular: true,
    tagline: { fr: 'Le goût du Maroc, à la romaine.', en: 'The taste of Morocco, Roman style.', ar: 'نكهة المغرب، على الطريقة الرومانية.' },
  },
  {
    name: 'Margherita',
    description: {
      fr: 'Mozzarella fondante, sauce tomate, basilic frais, filet d\'huile d\'olive.',
      en: 'Melted mozzarella, tomato sauce, fresh basil, olive oil drizzle.',
      ar: 'موزاريلا ذائبة، صلصة طماطم، ريحان طازج، زيت الزيتون.',
    },
    image: '/images/dom/pizzas-al-taglio/margherita.webp',
    imageAlt: { fr: 'Pizza carrée Margherita à la romaine, pâte fine et croustillante', en: 'Square Roman-style Margherita pizza, thin and crisp crust', ar: 'بيتزا مارغريتا مربعة على الطريقة الرومانية، عجينة رفيعة ومقرمشة' },
    tagline: { fr: 'La classique italienne, en carré.', en: 'The Italian classic, squared.', ar: 'الكلاسيكية الإيطالية، بشكل مربع.' },
  },
  {
    name: 'Tonno',
    description: {
      fr: 'Mozzarella, thon émietté, oignon rouge, câpres, olives kalamata, zeste de citron.',
      en: 'Mozzarella, flaked tuna, red onion, capers, kalamata olives, lemon zest.',
      ar: 'موزاريلا، تونة مفتتة، بصل أحمر، كبر، زيتون كالاماتا، قشر ليمون.',
    },
    image: '/images/dom/pizzas-al-taglio/tonno.webp',
    imageAlt: { fr: 'Pizza carrée Tonno à la romaine, au thon et citron', en: 'Square Roman-style Tonno pizza with tuna and lemon', ar: 'بيتزا تونة مربعة على الطريقة الرومانية بالليمون' },
    tagline: { fr: 'Fraîche et méditerranéenne.', en: 'Fresh and Mediterranean.', ar: 'منعشة ومتوسطية.' },
  },
  {
    name: 'Merguez Piccante',
    description: {
      fr: 'Mozzarella, merguez grillée, poivrons rôtis, huile de harissa.',
      en: 'Mozzarella, grilled merguez, roasted peppers, harissa oil.',
      ar: 'موزاريلا، مرقاز مشوي، فلفل مشوي، زيت الهريسة.',
    },
    image: '/images/dom/pizzas-al-taglio/merguez-piccante.webp',
    imageAlt: { fr: 'Pizza carrée Merguez Piccante à la romaine', en: 'Square Roman-style Merguez Piccante pizza', ar: 'بيتزا مرقاز حار مربعة على الطريقة الرومانية' },
    tagline: { fr: 'Épicée et généreuse.', en: 'Spicy and generous.', ar: 'حارة وسخية.' },
  },
  {
    name: 'Manzo Ricco',
    description: {
      fr: 'Mozzarella, bœuf braisé effiloché, oignons caramélisés, copeaux de parmesan.',
      en: 'Mozzarella, braised pulled beef, caramelized onions, parmesan shavings.',
      ar: 'موزاريلا، لحم بقري مطهو ببطء، بصل مكرمل، رقائق البارميزان.',
    },
    image: '/images/dom/pizzas-al-taglio/manzo-ricco.webp',
    imageAlt: { fr: 'Pizza carrée Manzo Ricco au bœuf braisé, à la romaine', en: 'Square Roman-style Manzo Ricco braised beef pizza', ar: 'بيتزا مانزو ريكو مربعة على الطريقة الرومانية' },
    tagline: { fr: 'Riche et fondante.', en: 'Rich and tender.', ar: 'غنية وطرية.' },
  },
];
