// ============================================================================
// AMPLIFY MARKETING SITE — site.config.ts
//
// THIS IS THE ONLY FILE YOU EDIT PER CLIENT (together with src/content/faq.ts
// and src/content/testimonials.ts for longer lists). Same philosophy as the
// order-landing-page engine's brand.config.ts: one config object, real
// content, nothing hardcoded in the page templates.
//
// ============================================================================
// DOM'S CAFÉ — build notes (read before finetuning further)
// ----------------------------------------------------------------------------
// - siteUrl below is a PLACEHOLDER ('https://doms-cafe.pages.dev'). The old
//   domain (domscafe.pages.dev) is already taken by Dom's existing ordering
//   site (see `ordering.orderSiteUrl`) — this new marketing site needs its
//   own Cloudflare Pages project/domain. Update this AND astro.config.mjs's
//   SITE_URL AND public/robots.txt's Sitemap: line together once that's
//   decided.
// - contact.whatsappNumber is currently the landline number found on the
//   Google Business listing (05 37 68 06 31) — CONFIRM the real WhatsApp
//   ordering number with Dom's owner before publishing; it may be a
//   different mobile number.
// - social.googleRating/ratingCount: Dom's own live site (domscafe.pages.dev,
//   checked today) states "4,9 sur Google · 320+ avis". A Google Maps
//   screenshot supplied separately showed 4.1/5 with 47 reviews instead —
//   a real discrepancy, not a typo on my part. Used the live site's more
//   recent figures below; VERIFY against the actual Google Business Profile
//   before this goes live, a wrong public rating is worse than none.
// - EN/AR fields throughout this codebase are currently French text
//   duplicated into the `en`/`ar` slots (not real translations) so the
//   trilingual scaffolding keeps compiling. Dom's own current site is
//   French-only, so this is a fine starting point — swap in real EN/AR
//   copy during finetuning if the trilingual pages should actually go live.
// ============================================================================

interface LocalizedString {
  fr: string;
  en: string;
  ar: string;
}

export interface SiteConfig {
  identity: {
    name: string;
    tagline: LocalizedString;
    city: string;
    country: string;
    siteUrl: string; // must match astro.config.mjs's SITE_URL exactly
    primaryKeyword: LocalizedString;
  };
  colors: {
    primary: string;
    accent: string;
    background: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string; // tel: link, digits only with country code
    whatsappNumber: string; // digits only, country code, no + or spaces
    address: string;
    mapsUrl?: string;
    openingHours: LocalizedString;
    hours: { open: number; close: number };
    instagramUrl?: string;
    facebookUrl?: string;
  };
  ordering: {
    // Dom's existing full ordering site (cart + WhatsApp checkout) — this
    // marketing site does not reimplement ordering, it links out to it,
    // exactly like the original Indian Flavors architecture this template
    // is based on.
    orderSiteUrl: string;
  };
  social: {
    googleReviewsUrl?: string;
    googleRating?: string;
    googleReviewCount?: string;
  };
}

export const siteConfig: SiteConfig = {
  identity: {
    name: "Dom's Café",
    tagline: {
      fr: "Le café où Agdal se retrouve.",
      en: "The café where Agdal meets.",
      ar: "المقهى الذي يلتقي فيه أكدال.",
    },
    city: 'Rabat',
    country: 'Maroc',
    siteUrl: 'https://doms-cafe.pages.dev',
    primaryKeyword: {
      fr: 'café & restaurant',
      en: 'café & restaurant',
      ar: 'مقهى ومطعم',
    },
  },
  colors: {
    // Dark warm brown/gold palette — matches Dom's own theme-color
    // (#1A1208) and the wood/brass/emerald-booth interior look, rather than
    // the Indian-restaurant red this template originally shipped with.
    primary: '#8B5E34',
    accent: '#C9A15A',
    background: '#1A1208',
  },
  contact: {
    phoneDisplay: '05 37 68 06 31',
    phoneHref: 'tel:+212537680631',
    whatsappNumber: '212537680631', // ⚠ confirm real WhatsApp order number, see note above
    address: '26 Rue Jabal El Ayachi, Agdal, Rabat 10090',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent("Dom's Café, 26 Rue Jabal El Ayachi, Agdal, Rabat"),
    openingHours: {
      fr: 'Ouvert tous les jours : 08:00 - 23:00',
      en: 'Open every day: 8:00 AM – 11:00 PM',
      ar: 'مفتوح كل يوم: 08:00 - 23:00',
    },
    hours: { open: 8, close: 23 },
    instagramUrl: 'https://www.instagram.com/domscafe_official/',
  },
  ordering: {
    orderSiteUrl: 'https://domscafe.pages.dev',
  },
  social: {
    googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent("Dom's Café Agdal Rabat avis"),
    googleRating: '4.9', // ⚠ verify — see standing note above
    googleReviewCount: '320+',
  },
};

// ----------------------------------------------------------------------------
// STANDING SEO NOTES — read before editing page copy or adding new pages.
// 1. Keyword realism: use the term the local market actually types into
//    Google in the H1, body copy, meta title AND meta description of a
//    page — all four, not just one.
// 2. No keyword cannibalization: one ordering path only (ordering.orderSiteUrl).
// 3. FAQ sections are structural, not decorative.
// 4. Real photos beat every on-page trick combined — replace the hotlinked
//    dish photos below with Dom's own original photography as soon as it's
//    available (see the note in src/content/menu-highlights.ts).
// 5. Review velocity and a complete Google Business Profile remain the two
//    highest-leverage local-SEO levers — not something this codebase can do.
// ----------------------------------------------------------------------------
