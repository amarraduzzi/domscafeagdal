// "Best pizza in Agdal" homepage section — client's own priority push
// ("We willen de beste pizza van Rabat gaan promoten" — client's original
// wording; later corrected sitewide to "Agdal" specifically, never "Rabat").
// Menu fully replaced (client request, September 2026): all 8 pizzas below
// are a brand-new lineup that replaces the previous 7-pizza menu entirely
// (Margarita, Vegetarian, Tuna, Pollo, American, Vivanda, Fisherman all
// removed — Four Cheese/Four Seasons, which never had photos, are also
// gone now that every current pizza has one). Names, prices, ingredients
// and photos all supplied directly by the client for this new lineup —
// photos stored locally at /images/dom/pizzas/ (resized/converted to
// webp), no hotlinking here, unlike menu-highlights.ts's placeholder
// photos (also updated to this same new lineup).
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
  // (no invented "best-seller since X" type lines). Optional so
  // PizzaShowcaseGrid.astro (the compact Home/Menu teaser) can keep
  // ignoring it.
  tagline?: LocalizedText;
}

export const pizzaShowcase: PizzaShowcaseItem[] = [
  {
    name: 'Signature "Rabat Nights"',
    description: {
      fr: 'Mozzarella, khlea effilochée, oignons caramélisés, olives noires, œuf au plat, filet d\'amlou.',
      en: 'Mozzarella, shredded khlea (confit beef), caramelized onions, black olives, fried egg, amlou drizzle.',
      ar: 'موزاريلا، خليع مفروم، بصل مكرمل، زيتون أسود، بيضة مقلية، صلصة أملو.',
    },
    priceMAD: 90,
    image: '/images/dom/pizzas/rabat-nights.webp',
    imageAlt: { fr: 'Pizza Signature Rabat Nights au khlea et œuf', en: 'Signature Rabat Nights pizza with khlea and egg', ar: 'بيتزا التوقيع ليالي الرباط بالخليع والبيضة' },
    popular: true,
    tagline: { fr: 'Notre signature. Le Maroc dans une pizza.', en: 'Our signature. Morocco, on a pizza.', ar: 'توقيعنا الخاص. المغرب في بيتزا واحدة.' },
  },
  {
    name: 'Margherita Superiore',
    description: {
      fr: 'Mozzarella fondante, sauce tomate, basilic frais, filet d\'huile d\'olive.',
      en: 'Melted mozzarella, tomato sauce, fresh basil, olive oil drizzle.',
      ar: 'موزاريلا ذائبة، صلصة طماطم، ريحان طازج، زيت الزيتون.',
    },
    priceMAD: 45,
    image: '/images/dom/pizzas/margherita-superiore.webp',
    imageAlt: { fr: 'Pizza Margherita Superiore au basilic frais', en: 'Margherita Superiore pizza with fresh basil', ar: 'بيتزا مارغريتا سوبيريوري بالريحان الطازج' },
    tagline: { fr: 'La classique, portée à un autre niveau.', en: 'The classic, taken further.', ar: 'الكلاسيكية، بمستوى أرقى.' },
  },
  {
    name: 'Manzo Ricco',
    description: {
      fr: 'Mozzarella, bœuf braisé effiloché, oignons caramélisés, copeaux de parmesan.',
      en: 'Mozzarella, braised pulled beef, caramelized onions, parmesan shavings.',
      ar: 'موزاريلا، لحم بقري مطهو ببطء، بصل مكرمل، رقائق البارميزان.',
    },
    priceMAD: 75,
    image: '/images/dom/pizzas/manzo-ricco.webp',
    imageAlt: { fr: 'Pizza Manzo Ricco au bœuf braisé', en: 'Manzo Ricco braised beef pizza', ar: 'بيتزا مانزو ريكو باللحم البقري المطهو ببطء' },
    tagline: { fr: 'Riche, fondante, mijotée avec patience.', en: 'Rich, tender, slow-cooked patience.', ar: 'غنية وطرية، ثمرة صبر في الطهي.' },
  },
  {
    name: 'Tuna Riviera',
    description: {
      fr: 'Mozzarella, thon émietté, oignon rouge, câpres, olives kalamata, zeste de citron.',
      en: 'Mozzarella, flaked tuna, red onion, capers, kalamata olives, lemon zest.',
      ar: 'موزاريلا، تونة مفتتة، بصل أحمر، كبر، زيتون كالاماتا، قشر ليمون.',
    },
    priceMAD: 52,
    image: '/images/dom/pizzas/tuna-riviera.webp',
    imageAlt: { fr: 'Pizza Tuna Riviera au thon et citron', en: 'Tuna Riviera tuna pizza with lemon', ar: 'بيتزا تونة ريفييرا بالتونة والليمون' },
    tagline: { fr: 'Fraîche et ensoleillée, comme la Méditerranée.', en: 'Fresh and sun-drenched, like the Mediterranean.', ar: 'منعشة ومشمسة، كأجواء المتوسط.' },
  },
  {
    name: 'Poulet Chermoula',
    description: {
      fr: 'Mozzarella, poulet grillé façon chermoula, oignons caramélisés, poivrons, coriandre fraîche.',
      en: 'Mozzarella, chermoula-spiced grilled chicken, caramelized onions, bell peppers, fresh coriander.',
      ar: 'موزاريلا، دجاج مشوي بالشرمولة، بصل مكرمل، فلفل حلو، كزبرة طازجة.',
    },
    priceMAD: 58,
    image: '/images/dom/pizzas/poulet-chermoula.webp',
    imageAlt: { fr: 'Pizza Poulet Chermoula au poulet grillé', en: 'Poulet Chermoula grilled chicken pizza', ar: 'بيتزا بولي شرمولة بالدجاج المشوي' },
    tagline: { fr: 'Le goût du Maroc, grillé au feu de bois.', en: 'The taste of Morocco, wood-fire grilled.', ar: 'نكهة المغرب، مشوية على نار الحطب.' },
  },
  {
    name: 'Merguez Piquante',
    description: {
      fr: 'Mozzarella, merguez grillée, poivrons rôtis, huile de harissa, œuf au plat.',
      en: 'Mozzarella, grilled merguez, roasted peppers, harissa oil, fried egg.',
      ar: 'موزاريلا، مرقاز مشوي، فلفل مشوي، زيت الهريسة، بيضة مقلية.',
    },
    priceMAD: 60,
    image: '/images/dom/pizzas/merguez-piquante.webp',
    imageAlt: { fr: 'Pizza Merguez Piquante à l\'œuf', en: 'Merguez Piquante pizza with fried egg', ar: 'بيتزا مرقاز حار بالبيضة' },
    tagline: { fr: 'Épicée, généreuse, sans compromis.', en: 'Spicy, generous, no compromise.', ar: 'حارة وسخية، بلا مساومة.' },
  },
  {
    name: 'El Reto',
    description: {
      fr: 'Mozzarella, sauce tomate au harissa, jalapeños, piments doux, viande épicée, sauce piquante.',
      en: 'Mozzarella, harissa-spiced tomato sauce, jalapeños, sweet chili peppers, spiced beef, hot sauce.',
      ar: 'موزاريلا، صلصة طماطم بالهريسة، هالبينو، فلفل حار خفيف، لحم متبل، صلصة حارة.',
    },
    priceMAD: 75,
    image: '/images/dom/pizzas/el-reto.webp',
    imageAlt: { fr: 'Pizza El Reto épicée aux jalapeños', en: 'El Reto spicy jalapeño pizza', ar: 'بيتزا الريتو الحارة بالهالبينو' },
    tagline: { fr: 'Le défi. À ne commander que si vous osez.', en: 'The challenge. Order only if you dare.', ar: 'التحدي. اطلبها إن كنت تجرؤ.' },
  },
  {
    name: 'Quattro Formaggi Nobile',
    description: {
      fr: 'Mozzarella, gorgonzola, chèvre, copeaux de parmesan, filet de miel.',
      en: 'Mozzarella, gorgonzola, goat cheese, parmesan shavings, honey drizzle.',
      ar: 'موزاريلا، جبن غورغونزولا، جبن الماعز، رقائق البارميزان، صلصة العسل.',
    },
    priceMAD: 80,
    image: '/images/dom/pizzas/quattro-formaggi.webp',
    imageAlt: { fr: 'Pizza Quattro Formaggi Nobile au miel', en: 'Quattro Formaggi Nobile pizza with honey', ar: 'بيتزا كواترو فورماجي نوبيلي بالعسل' },
    tagline: { fr: 'Quatre fromages nobles, une touche de miel.', en: 'Four noble cheeses, a touch of honey.', ar: 'أربعة أجبان فاخرة، ولمسة من العسل.' },
  },
];
