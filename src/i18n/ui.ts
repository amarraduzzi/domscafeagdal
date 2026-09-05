// Shared, short, repeated-everywhere UI strings — navigation labels, button
// labels, common info labels. Page-specific prose (hero copy, paragraphs,
// pull-quotes) lives next to each page instead of here — see the `copy`
// object at the top of each src/content-pages/*.astro file. Splitting it
// this way means a future editor translating one page's wording doesn't
// have to hunt through one giant sitewide file, while strings that
// genuinely repeat (nav, buttons) still have exactly one source of truth.
import type { LocalizedText } from './languages';

export const nav: Record<'accueil' | 'menu' | 'pizza' | 'billard' | 'aPropos' | 'avis' | 'faq' | 'contact', LocalizedText> = {
  accueil: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
  menu: { fr: 'Menu', en: 'Menu', ar: 'القائمة' },
  // New dedicated pizza page (client request) — sits right after Menu in
  // the nav since it's effectively a spotlighted subset of it, not an
  // unrelated section.
  pizza: { fr: 'Pizza', en: 'Pizza', ar: 'البيتزا' },
  // Dom's Pool table booking page (client request) — sits right after
  // Pizza, mirroring that same "own page, own nav slot" treatment rather
  // than being buried as a subsection of something else.
  billard: { fr: 'Billard', en: 'Pool', ar: 'البيلياردو' },
  aPropos: { fr: 'À propos', en: 'About', ar: 'من نحن' },
  avis: { fr: 'Avis', en: 'Reviews', ar: 'التقييمات' },
  faq: { fr: 'FAQ', en: 'FAQ', ar: 'الأسئلة الشائعة' },
  contact: { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' },
};

export const common = {
  commander: { fr: 'Commander', en: 'Order', ar: 'اطلب الآن' } satisfies LocalizedText,
  voirLeMenu: { fr: 'Voir le menu', en: 'View the menu', ar: 'شاهد القائمة' } satisfies LocalizedText,
  nousAppeler: { fr: 'Nous appeler', en: 'Call us', ar: 'اتصل بنا' } satisfies LocalizedText,
  menuComplet: { fr: 'Menu complet', en: 'Full menu', ar: 'القائمة الكاملة' } satisfies LocalizedText,
  decouvrirLeMenu: { fr: 'Découvrir le menu', en: 'Discover the menu', ar: 'اكتشف القائمة' } satisfies LocalizedText,
  voirLeMenuComplet: { fr: 'Voir le menu complet', en: 'See the full menu', ar: 'شاهد القائمة الكاملة' } satisfies LocalizedText,
  lireTousLesAvis: { fr: 'Lire tous les avis', en: 'Read all reviews', ar: 'اقرأ جميع التقييمات' } satisfies LocalizedText,
  pretACommander: { fr: 'Prêt à commander ?', en: 'Ready to order?', ar: 'جاهز للطلب؟' } satisfies LocalizedText,
  itineraire: { fr: 'Itinéraire', en: 'Directions', ar: 'الاتجاهات' } satisfies LocalizedText,
  retourAccueil: { fr: "Retour à l'accueil", en: 'Back to home', ar: 'العودة للرئيسية' } satisfies LocalizedText,

  adresse: { fr: 'Adresse', en: 'Address', ar: 'العنوان' } satisfies LocalizedText,
  telephone: { fr: 'Téléphone', en: 'Phone', ar: 'الهاتف' } satisfies LocalizedText,
  whatsapp: { fr: 'WhatsApp', en: 'WhatsApp', ar: 'واتساب' } satisfies LocalizedText,
  horaires: { fr: 'Horaires', en: 'Opening hours', ar: 'ساعات العمل' } satisfies LocalizedText,

  avisGoogleSuffix: { fr: 'avis Google', en: 'Google reviews', ar: 'تقييم على Google' } satisfies LocalizedText,
  avisGoogle: { fr: 'Avis Google', en: 'Google reviews', ar: 'تقييمات Google' } satisfies LocalizedText,
  laisserAvisGoogle: { fr: 'Laisser un avis sur Google', en: 'Leave a review on Google', ar: 'اترك تقييمًا على Google' } satisfies LocalizedText,
  voirSurGoogle: { fr: 'Voir sur Google', en: 'View on Google', ar: 'شاهد على Google' } satisfies LocalizedText,
  surGoogle: { fr: 'sur Google', en: 'on Google', ar: 'على Google' } satisfies LocalizedText,
  ouvertMaintenant: { fr: 'Ouvert maintenant', en: 'Open now', ar: 'مفتوح الآن' } satisfies LocalizedText,
  fermeMaintenant: { fr: 'Fermé maintenant', en: 'Closed now', ar: 'مغلق الآن' } satisfies LocalizedText,
  toutLeMenu: { fr: 'Tout le menu', en: 'Full menu', ar: 'القائمة كاملة' } satisfies LocalizedText,
  vegetarienUniquement: { fr: 'Végétarien', en: 'Vegetarian', ar: 'نباتي' } satisfies LocalizedText,
  noteMoyenneClients: { fr: 'note moyenne de nos clients', en: 'average customer rating', ar: 'متوسط تقييم عملائنا' } satisfies LocalizedText,
  platsPreparesCommande: { fr: 'plats faits maison' , en: 'homemade dishes', ar: 'أطباق منزلية الصنع' } satisfies LocalizedText,
  preparesCommandeLine: { fr: 'de notre carte est préparée maison, à la commande : boissons, snacks et plats.', en: 'of our menu is homemade, cooked to order: drinks, snacks and dishes alike.', ar: 'من قائمتنا محضّرة منزليًا عند الطلب: مشروبات ووجبات خفيفة وأطباق.' } satisfies LocalizedText,

  // Shared trust badge — used on Home ("why us") and Menu (hero).
  homemadeBadge: { fr: 'Fait maison', en: 'Homemade', ar: 'صناعة منزلية' } satisfies LocalizedText,

  // Hero's second button (see HomeContent.astro) — links to /menu#pizzas.
  // "Agdal" kept rather than "Rabat" to match the existing oven badge copy
  // ("Best Pizza in Agdal") already on the hero photo.
  meilleurePizzaAgdal: { fr: "Meilleure pizza d'Agdal", en: 'Best pizza in Agdal', ar: 'أفضل بيتزا في أكدال' } satisfies LocalizedText,
  // Hero's review line, replacing the old hardcoded star-rating text — see
  // the comment above where this is used in HomeContent.astro for why.
  voirAvisGoogle: { fr: 'Voir nos avis sur Google', en: 'See our Google reviews', ar: 'شاهد تقييماتنا على Google' } satisfies LocalizedText,

  // Full-menu page search + category filter (MenuContent.astro).
  rechercherDansLeMenu: { fr: 'Rechercher un plat, un ingrédient…', en: 'Search a dish, an ingredient…', ar: 'ابحث عن طبق أو مكوّن…' } satisfies LocalizedText,
  aucunResultatMenu: { fr: 'Aucun plat ne correspond à votre recherche.', en: 'No dish matches your search.', ar: 'لا يوجد طبق يطابق بحثك.' } satisfies LocalizedText,
};

export const footer = {
  confidentialite: { fr: 'Confidentialité', en: 'Privacy', ar: 'الخصوصية' } satisfies LocalizedText,
  builtBy: { fr: 'Built by Amplify Growth Studio', en: 'Built by Amplify Growth Studio', ar: 'built by Amplify Growth Studio' } satisfies LocalizedText,
};

// Display-only place names — kept separate from siteConfig.identity.city/
// country (which stay the single romanized form used in structured data,
// addresses and Google Maps links, since mixing scripts there risks
// breaking schema.org/Maps matching). This is purely what a human reads.
export const place = {
  city: { fr: 'Rabat', en: 'Rabat', ar: 'الرباط' } satisfies LocalizedText,
  country: { fr: 'Maroc', en: 'Morocco', ar: 'المغرب' } satisfies LocalizedText,
};

export const seoDefaults = {
  legal: { fr: 'Légal', en: 'Legal', ar: 'قانوني' } satisfies LocalizedText,
  besoinAide: { fr: "Besoin d'aide ?", en: 'Need help?', ar: 'تحتاج مساعدة؟' } satisfies LocalizedText,
};
