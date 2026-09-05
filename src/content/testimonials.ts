// Curated testimonials for Dom's Café (Agdal, Rabat).
//
// IMPORTANT — no invented quotes: `aggregateRating` below is NOW VERIFIED
// against the live Google Business Profile (checked via Google Search's
// business panel): 4.1/5, 47 reviews. Dom's own live ordering site
// (domscafe.pages.dev) still shows a higher, outdated "4,9 · 320+ avis" —
// that mismatch is on their side, not something this marketing site should
// repeat just because it's their own copy.
//
// `testimonials` below are 4 REAL Google reviews, copied verbatim (or
// trimmed at a natural sentence break where Google's own UI truncated the
// text behind a "More" link — never padded or continued by guessing) from
// screenshots the client sent of Dom's Café's actual Google Maps listing.
// Two were originally in French and shown here via Google's own on-page
// translation ("Translated by Google" — same wording Google showed the
// client); those two also got fr/ar translations added for this site's
// other languages, done here, not by Google. Reviewer names, review
// counts/"Local Guide" status and star ratings are exactly as shown.
// `date` is only an ISO approximation: Google shows relative time ("a year
// ago", "3 years ago") only, screenshotted 2026-09, so exact dates are
// unknown — do not treat these as precise.
//
// Client asked for a minimum of 5; only 4 distinct reviews were supplied so
// far. Add a 5th real one here the same way (screenshot -> verbatim/trimmed
// quote) rather than inventing one to hit the round number.
import type { LocalizedText } from '../i18n/languages';

export interface Testimonial {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: LocalizedText;
  date: string; // ISO date, used in the Review JSON-LD
  sourceUrl?: string;
}

export const aggregateRating = {
  ratingValue: '4.1', // verified against the live Google Business Profile
  reviewCount: '47',
};

// Shared "leave a review" / "see all reviews" link — same stable link used
// sitewide (see site.config.ts's social.googleReviewsUrl comment for why
// this one, and not a raw google.com/search URL, is safe to hardcode).
const GOOGLE_LISTING_URL = 'https://maps.app.goo.gl/cWT2azEsn4J2S1Mj6';

export const testimonials: Testimonial[] = [
  {
    name: 'Yassine Zitouni',
    rating: 5,
    text: {
      fr: "Café et salle de billard haut de gamme, personnel excellent, et nourriture délicieuse aussi. Rien à redire.",
      en: 'Top-notch cafe and pool hall, excellent staff, and great food too. Nothing to complain about.',
      ar: 'مقهى وصالة بلياردو من الطراز الأول، طاقم عمل ممتاز، وطعام رائع أيضًا. لا شيء نشتكي منه.',
    },
    date: '2025-06-01',
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    name: 'Oussama Mazrhani',
    rating: 5,
    text: {
      fr: "La nourriture chez Dom's Café est excellente, et le service est vraiment remarquable. Les prix sont raisonnables et abordables.",
      en: "The food at Dom's Café is excellent, and the service is truly outstanding. The prices are reasonable and affordable.",
      ar: 'الطعام في دومز كافيه ممتاز، والخدمة رائعة حقًا. الأسعار معقولة ومناسبة.',
    },
    date: '2025-07-01',
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    name: 'Yassine El Haddouchi',
    rating: 5,
    text: {
      fr: 'Chouette café avec une table de billard, retransmissions sportives en direct, Wi-Fi et une petite terrasse.',
      en: 'Nice café with a pool table, live sports broadcasts, Wi-Fi and a small terrace.',
      ar: 'مقهى لطيف بطاولة بلياردو، بث مباشر للمباريات الرياضية، واي فاي، وتراس صغير.',
    },
    date: '2025-08-01',
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    name: 'Mesay Shanka',
    rating: 4,
    text: {
      fr: "Dom's est un café situé au cœur d'Agdal, à Rabat. Ils servent une variété de plats et de boissons, et proposent aussi un espace billard à l'intérieur. J'ai essayé le jus de citron, il n'était pas tout à fait à la hauteur de mes attentes. À noter : il est permis de fumer à l'intérieur du café.",
      en: "Dom's is a cafe located in the heart of Agdal Rabat. They serve a variety of food and drinks. They also have a pool billiards area within the cafe. I tried the citron juice, but it didn't quite meet my expectations. Notably, smoking is permitted inside the cafe.",
      ar: 'دومز مقهى يقع في قلب أكدال بالرباط. يقدمون تشكيلة من الأطعمة والمشروبات، ويضمون أيضًا صالة بلياردو داخل المقهى. جربت عصير الليمون، لكنه لم يرقَ تمامًا إلى توقعاتي. للإشارة، التدخين مسموح داخل المقهى.',
    },
    date: '2023-09-01',
    sourceUrl: GOOGLE_LISTING_URL,
  },
];
