// FAQ content for Dom's Café (Agdal, Rabat). Built from the client's own
// live site (domscafe.pages.dev, checked today: address, hours, ordering
// flow) and the Google Business listing (phone number). No claim below
// that isn't directly backed by one of those two sources — payment methods
// and vegetarian/vegan labeling specifically are left general rather than
// guessed; confirm the exact wording with Dom's owner during finetuning.
import type { LocalizedText } from '../i18n/languages';

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
  category: 'pratique' | 'menu' | 'paiement';
}

export const faqCategoryLabels: Record<FaqItem['category'], LocalizedText> = {
  pratique: { fr: 'Infos pratiques', en: 'Practical info', ar: 'معلومات عملية' },
  menu: { fr: 'Menu & commande', en: 'Menu & ordering', ar: 'القائمة والطلب' },
  paiement: { fr: 'Paiement', en: 'Payment', ar: 'الدفع' },
};

export const faqItems: FaqItem[] = [
  {
    question: {
      fr: "Où se trouve Dom's Café ?",
      en: "Where is Dom's Café located?",
      ar: 'أين يقع Dom\'s Café؟',
    },
    answer: {
      fr: "Dom's Café se situe au 26 Rue Jabal El Ayachi, quartier Agdal, Rabat.",
      en: "Dom's Café is located at 26 Rue Jabal El Ayachi, Agdal, Rabat.",
      ar: 'يقع Dom\'s Café في 26 شارع جبل العياشي، حي أكدال، الرباط.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Quels sont les horaires d’ouverture ?',
      en: 'What are the opening hours?',
      ar: 'ما هي ساعات العمل؟',
    },
    answer: {
      fr: 'Nous sommes ouverts tous les jours de 08h00 à 23h00.',
      en: 'We are open every day from 8:00 AM to 11:00 PM.',
      ar: 'نحن مفتوحون كل يوم من الساعة 08:00 حتى 23:00.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Comment passer commande ou se faire livrer ?',
      en: 'How do I place an order or get delivery?',
      ar: 'كيف يمكنني الطلب أو الحصول على التوصيل؟',
    },
    answer: {
      fr: "Toutes les commandes, sur place, à emporter ou en livraison, se passent via notre système de commande en ligne, avec envoi direct à notre cuisine sur WhatsApp.",
      en: 'All orders, whether dine-in, takeaway or delivery, go through our online ordering system, sent straight to our kitchen via WhatsApp.',
      ar: 'تُنجز جميع الطلبات، في المقهى أو للاستلام أو للتوصيل، عبر نظام الطلب الإلكتروني الخاص بنا، ويُرسل مباشرة إلى مطبخنا عبر واتساب.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Le menu propose-t-il des options végétariennes ?',
      en: 'Does the menu offer vegetarian options?',
      ar: 'هل تتوفر القائمة على خيارات نباتية؟',
    },
    answer: {
      fr: "Oui : omelettes, crêpes, pizzas et salades incluent plusieurs options végétariennes, en plus de tous nos jus, boissons chaudes et desserts.",
      en: 'Yes: our omelettes, crêpes, pizzas and salads include several vegetarian options, alongside all of our juices, hot drinks and desserts.',
      ar: 'نعم: تشمل الأومليت والكريب والبيتزا والسلطات عدة خيارات نباتية، بالإضافة إلى جميع عصائرنا ومشروباتنا الساخنة وحلوياتنا.',
    },
    category: 'menu',
  },
  {
    question: {
      fr: "Quel est le budget moyen par personne ?",
      en: 'What is the average budget per person?',
      ar: 'ما هي الميزانية المتوسطة للشخص الواحد؟',
    },
    answer: {
      fr: 'Comptez entre 30 et 60 MAD pour un café ou un snack, et jusqu’à 100-150 MAD pour un repas complet avec boisson.',
      en: 'Expect between 30 and 60 MAD for a coffee or snack, and up to 100-150 MAD for a full meal with a drink.',
      ar: 'يتراوح المبلغ بين 30 و60 درهمًا لمشروب أو وجبة خفيفة، وقد يصل إلى 100-150 درهمًا لوجبة كاملة مع مشروب.',
    },
    category: 'menu',
  },
  {
    question: {
      fr: 'Peut-on payer par carte bancaire ?', // ⚠ VÉRIFIER avec le propriétaire avant publication
      en: 'Can we pay by card?', // ⚠ VERIFY with the owner before publishing
      ar: 'هل يمكن الدفع بالبطاقة البنكية؟', // ⚠ تحقق مع المالك قبل النشر
    },
    answer: {
      fr: 'Le paiement en espèces est accepté sur place ; contactez-nous pour confirmer les autres moyens de paiement disponibles.',
      en: 'Cash payment is accepted in the café; contact us to confirm other available payment methods.',
      ar: 'يُقبل الدفع نقدًا في المقهى؛ تواصلوا معنا لتأكيد وسائل الدفع الأخرى المتاحة.',
    },
    category: 'paiement',
  },
];
