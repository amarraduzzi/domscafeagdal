// Curated testimonials for Dom's Café (Agdal, Rabat).
//
// IMPORTANT — no invented quotes: Dom's own live site (domscafe.pages.dev,
// checked today) states "4,9 sur Google · 320+ avis", so `aggregateRating`
// below uses that real, self-reported figure. A Google Maps screenshot
// supplied separately showed a different figure (4.1/5, 47 reviews) — a
// real discrepancy between the two sources, not a typo here. VERIFY the
// actual current number on the Google Business Profile before publishing.
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
  ratingValue: '4.9', // ⚠ verify against the live Google Business Profile
  // Kept as a plain number ('320', not '320+') so this stays valid in the
  // JSON-LD AggregateRating block below — "at least 320" reviews, in
  // practice more per Dom's own site copy.
  reviewCount: '320',
};

export const testimonials: Testimonial[] = [];
