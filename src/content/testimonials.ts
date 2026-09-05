// Curated testimonials for Dom's Café (Agdal, Rabat).
//
// IMPORTANT — no invented quotes: `aggregateRating` below is NOW VERIFIED
// against the live Google Business Profile (checked via Google Search's
// business panel): 4.1/5, 47 reviews. Dom's own live ordering site
// (domscafe.pages.dev) still shows a higher, outdated "4,9 · 320+ avis" —
// that mismatch is on their side, not something this marketing site should
// repeat just because it's their own copy.
//
// `testimonials` is intentionally EMPTY: this template's original content
// republished real, sourced Tripadvisor reviews (with a link back to each
// one) — that's what makes on-domain testimonials honest rather than
// fabricated. No equivalent sourced reviews were available for Dom's yet.
// Every page below that reads this array already handles an empty list
// gracefully (sections just don't render). Fill this in with real Google
// review quotes (name + exact wording + date, copied from the actual
// listing) during finetuning — never write placeholder quotes here.
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

export const testimonials: Testimonial[] = [];
