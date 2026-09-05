// The COMPLETE Dom's Café menu — every category, every item, real prices —
// as opposed to menu-highlights.ts's deliberately short curated subset (see
// that file's own header comment). This exists because the client asked
// directly for the full menu to be on the marketing site itself, not just
// linked out to the ordering site.
//
// Source: domscafe.pages.dev/menu (Dom's own live ordering site), read
// directly via a real browser session on 2026-09-05 — every name,
// description and MAD price below is copied from there, not invented.
// That page renders every item in one flat list grouped by category order
// (its own category pills don't actually filter/hide anything — verified
// via the page's own JS — they're just quick-jump anchors), so the
// category boundaries below are reconstructed from that same order plus
// each dish's own ingredients. Pizza section fully replaced (client
// request, September 2026): all 8 items below are the new lineup and
// match pizza-showcase.ts's 8 items exactly — every current pizza has a
// client photo now, so (unlike before) there's no unphotographed
// plain-text-only pizza left here.
//
// Descriptions: French is the primary/default language on this site, so
// each description was translated from the live site's English source text
// into natural French, with an English line kept close to that source and
// an Arabic translation alongside it. Item NAMES are left as on the live
// site (mostly English/brand-style names like "Hot Milk", "Croque
// Monsieur") since that's the client's own existing menu branding, not
// something this site should retranslate.
import type { LocalizedText } from '../i18n/languages';

export interface FullMenuItem {
  name: string;
  description: LocalizedText;
  priceMAD: number;
  popular?: boolean;
  vegetarian?: boolean;
}

export interface FullMenuCategory {
  slug: string;
  emoji: string;
  label: LocalizedText;
  items: FullMenuItem[];
}

export const fullMenu: FullMenuCategory[] = [
  {
    slug: 'hot-drinks',
    emoji: '☕',
    label: { fr: 'Boissons chaudes', en: 'Hot Drinks', ar: 'المشروبات الساخنة' },
    items: [
      { name: 'Hot Milk', description: { fr: 'Lait chaud réconfortant.', en: 'Warm comforting milk.', ar: 'حليب دافئ مريح.' }, priceMAD: 12, vegetarian: true },
      { name: 'Hot Milk', description: { fr: 'Lait chaud réconfortant, grand format.', en: 'Warm comforting milk, large.', ar: 'حليب دافئ مريح، حجم كبير.' }, priceMAD: 14, vegetarian: true },
      { name: 'Black Coffee', description: { fr: 'Café noir corsé et riche.', en: 'Rich bold black coffee.', ar: 'قهوة سوداء غنية وقوية.' }, priceMAD: 16, vegetarian: true },
      { name: 'Americano Coffee', description: { fr: 'Espresso allongé à l\'eau chaude.', en: 'Espresso diluted with hot water.', ar: 'إسبريسو ممدد بالماء الساخن.' }, priceMAD: 16, vegetarian: true },
      { name: 'Coffee with Milk', description: { fr: 'Café classique au lait chaud.', en: 'Classic coffee with steamed milk.', ar: 'قهوة كلاسيكية بالحليب الساخن.' }, priceMAD: 18, vegetarian: true },
      { name: 'Hot Chocolate', description: { fr: 'Cacao onctueux au lait chaud.', en: 'Creamy cocoa with hot milk.', ar: 'كاكاو كريمي بالحليب الساخن.' }, priceMAD: 24, vegetarian: true },
      { name: 'Nespresso', description: { fr: 'Espresso Nespresso de qualité premium.', en: 'Premium Nespresso espresso.', ar: 'إسبريسو نسبريسو فاخر.' }, priceMAD: 19, vegetarian: true },
      { name: 'Double Espresso', description: { fr: 'Double dose d\'espresso corsé.', en: 'Double shot of rich espresso.', ar: 'جرعة مزدوجة من الإسبريسو الغني.' }, priceMAD: 24, vegetarian: true },
      { name: 'Cappuccino', description: { fr: 'Espresso surmonté d\'une mousse de lait onctueuse.', en: 'Espresso topped with creamy milk foam.', ar: 'إسبريسو مع رغوة حليب كريمية.' }, priceMAD: 24, popular: true, vegetarian: true },
      { name: 'Frappuccino', description: { fr: 'Café glacé mixé, onctueux et frais.', en: 'Blended ice-cold creamy coffee.', ar: 'قهوة مثلجة مخفوقة وكريمية.' }, priceMAD: 26, vegetarian: true },
      { name: 'Mocaccino', description: { fr: 'Espresso, chocolat chaud et lait vapeur.', en: 'Espresso, hot chocolate and steamed milk.', ar: 'إسبريسو، شوكولاتة ساخنة وحليب مبخر.' }, priceMAD: 26, vegetarian: true },
      { name: 'Old-school Hot Chocolate', description: { fr: 'Cacao épais et riche, à l\'ancienne.', en: 'Thick traditional-style rich cocoa.', ar: 'كاكاو غني وسميك على الطريقة التقليدية.' }, priceMAD: 28, vegetarian: true },
      { name: 'Moroccan Mint Tea', description: { fr: 'Thé vert traditionnel à la menthe fraîche.', en: 'Traditional green tea with fresh mint.', ar: 'شاي أخضر تقليدي بالنعناع الطازج.' }, priceMAD: 16, vegetarian: true },
      { name: 'Verbena Herbal Tea', description: { fr: 'Verveine infusée à l\'eau ou au lait.', en: 'Verbena brewed with water or milk.', ar: 'لويزة منقوعة بالماء أو الحليب.' }, priceMAD: 18, vegetarian: true },
      { name: 'Black Tea', description: { fr: 'Thé noir infusé à l\'eau ou au lait.', en: 'Black tea brewed with water or milk.', ar: 'شاي أسود منقوع بالماء أو الحليب.' }, priceMAD: 18, vegetarian: true },
      { name: 'Flavored Tea', description: { fr: 'Thés fins aromatisés aux fruits ou aux fleurs.', en: 'Fine teas flavored with fruits or flowers.', ar: 'شاي فاخر منكّه بالفواكه أو الأزهار.' }, priceMAD: 20, vegetarian: true },
    ],
  },
  {
    slug: 'cocktails-juices',
    emoji: '🍹',
    label: { fr: 'Cocktails & Jus', en: 'Cocktails & Juices', ar: 'الكوكتيلات والعصائر' },
    items: [
      { name: 'Fruit Garden', description: { fr: 'Citron, orange, pomme, banane, fruits de saison.', en: 'Lemon, orange, apple, banana, seasonal fruits.', ar: 'ليمون، برتقال، تفاح، موز، فواكه الموسم.' }, priceMAD: 28, vegetarian: true },
      { name: 'Exotic Cocktail', description: { fr: 'Orange, kiwi, mangue, ananas.', en: 'Orange, kiwi, mango, pineapple.', ar: 'برتقال، كيوي، مانجو، أناناس.' }, priceMAD: 29, vegetarian: true },
      { name: 'Amandine', description: { fr: 'Lait, avocat, amande, noix, raisins secs.', en: 'Milk, avocado, almond, walnut, raisins.', ar: 'حليب، أفوكادو، لوز، جوز، زبيب.' }, priceMAD: 29, popular: true, vegetarian: true },
      { name: 'Piña Colada (Virgin)', description: { fr: 'Ananas, orange, vanille, lait de coco, ananas frais, citron.', en: 'Pineapple, orange, vanilla, coconut milk, fresh pineapple, lemon.', ar: 'أناناس، برتقال، فانيليا، حليب جوز الهند، أناناس طازج، ليمون.' }, priceMAD: 30, vegetarian: true },
      { name: 'Orange Juice', description: { fr: 'Jus d\'orange fraîchement pressé.', en: 'Freshly squeezed orange juice.', ar: 'عصير برتقال طازج.' }, priceMAD: 22, vegetarian: true },
      { name: 'Lemon Juice', description: { fr: 'Jus de citron frais pressé.', en: 'Fresh squeezed lemon juice.', ar: 'عصير ليمون طازج.' }, priceMAD: 22, vegetarian: true },
      { name: 'Carrot Juice', description: { fr: 'Jus de carotte frais pressé.', en: 'Fresh squeezed carrot juice.', ar: 'عصير جزر طازج.' }, priceMAD: 22, vegetarian: true },
      { name: 'Banana Juice', description: { fr: 'Milkshake onctueux à la banane.', en: 'Smooth banana milkshake.', ar: 'ميلك شيك ناعم بالموز.' }, priceMAD: 22, vegetarian: true },
      { name: 'Strawberry Juice', description: { fr: 'Jus de fraise pulpeux et frais.', en: 'Fresh pulp strawberry juice.', ar: 'عصير فراولة طازج بلحمه.' }, priceMAD: 22, vegetarian: true },
      { name: 'Lemon Ginger', description: { fr: 'Citron frais et gingembre relevé.', en: 'Fresh lemon with zesty ginger boost.', ar: 'ليمون طازج مع لمسة زنجبيل منعشة.' }, priceMAD: 24, vegetarian: true },
      { name: 'Pineapple Juice', description: { fr: 'Jus d\'ananas frais et sucré.', en: 'Sweet fresh pineapple juice.', ar: 'عصير أناناس طازج وحلو.' }, priceMAD: 24, vegetarian: true },
      { name: 'Avocado with Milk', description: { fr: 'Smoothie crémeux à l\'avocat et au lait.', en: 'Creamy avocado smoothie with milk.', ar: 'سموذي كريمي بالأفوكادو والحليب.' }, priceMAD: 26, vegetarian: true },
      { name: 'Mango Juice', description: { fr: 'Jus de mangue exotique bien lisse.', en: 'Smooth pure exotic mango juice.', ar: 'عصير مانجو استوائي ناعم.' }, priceMAD: 26, vegetarian: true },
      { name: 'Panaché', description: { fr: 'Jus de fruits mélangés et crémeux au lait.', en: 'Creamy mixed fruit juice with milk.', ar: 'عصير فواكه مشكلة كريمي بالحليب.' }, priceMAD: 28, vegetarian: true },
      { name: 'Avocado with Dried Fruits', description: { fr: 'Smoothie d\'avocat riche aux dattes, amandes, noix.', en: 'Rich avocado smoothie with dates, almonds, walnuts.', ar: 'سموذي أفوكادو غني بالتمر واللوز والجوز.' }, priceMAD: 32, vegetarian: true },
    ],
  },
  {
    slug: 'cold-drinks',
    emoji: '🥤',
    label: { fr: 'Boissons froides', en: 'Cold Drinks', ar: 'المشروبات الباردة' },
    items: [
      { name: 'Mineral Water', description: { fr: 'Bouteille d\'eau minérale fraîche.', en: 'Chilled table mineral water bottle.', ar: 'قارورة ماء معدني بارد.' }, priceMAD: 10, vegetarian: true },
      { name: 'Soda', description: { fr: 'Canette de soda glacée au choix.', en: 'Ice-cold can of soda of choice.', ar: 'علبة صودا باردة حسب الاختيار.' }, priceMAD: 16, vegetarian: true },
      { name: 'Oulmès Sparkling', description: { fr: 'Eau gazeuse naturellement pétillante.', en: 'Naturally carbonated sparkling water.', ar: 'ماء غازي طبيعي.' }, priceMAD: 12, vegetarian: true },
      { name: 'Virgin Mojito', description: { fr: 'Rafraîchissement gazeux au citron vert et à la menthe.', en: 'Virgin lime and mint carbonated refreshment.', ar: 'موهيتو بدون كحول بالليمون الأخضر والنعناع.' }, priceMAD: 24, vegetarian: true },
      { name: 'Iced Coffee', description: { fr: 'Espresso glacé servi avec du lait.', en: 'Chilled espresso served on ice with milk.', ar: 'إسبريسو مثلج يقدم مع الحليب.' }, priceMAD: 25, vegetarian: true },
      { name: 'Red Bull', description: { fr: 'Canette de boisson énergisante fraîche.', en: 'Chilled energy drink can.', ar: 'علبة مشروب طاقة بارد.' }, priceMAD: 27, vegetarian: true },
      { name: 'Soda', description: { fr: 'Coca-Cola, Fanta, Sprite, Hawaï.', en: 'Coca-Cola, Fanta, Sprite, Hawai.', ar: 'كوكا كولا، فانتا، سبرايت، هاواي.' }, priceMAD: 16, vegetarian: true },
    ],
  },
  {
    slug: 'breakfast',
    emoji: '🍳',
    label: { fr: 'Petits-déjeuners', en: 'Breakfast', ar: 'الفطور' },
    items: [
      { name: 'The Express', description: { fr: 'Boisson chaude, jus d\'orange, œufs (cuisson au choix), bouteille d\'eau.', en: 'Hot drink, orange juice, eggs (specify cooking), water bottle.', ar: 'مشروب ساخن، عصير برتقال، بيض (حسب الطلب)، قارورة ماء.' }, priceMAD: 27 },
      { name: 'Continental', description: { fr: 'Boisson chaude, jus d\'orange, toast, viennoiserie, confiture, beurre, miel, bouteille d\'eau.', en: 'Hot drink, orange juice, toast, pastry, jam, butter, honey, water bottle.', ar: 'مشروب ساخن، عصير برتقال، توست، معجنات، مربى، زبدة، عسل، قارورة ماء.' }, priceMAD: 29, vegetarian: true },
      { name: "Dom's Breakfast", description: { fr: 'Boisson chaude, jus d\'orange, toasts, œufs, fromage, charcuterie, bouteille d\'eau.', en: 'Hot drink, orange juice, toasts, eggs, cheese, cold cuts, water bottle.', ar: 'مشروب ساخن، عصير برتقال، توست، بيض، جبن، لحوم باردة، قارورة ماء.' }, priceMAD: 37, popular: true },
      { name: 'Jebli', description: { fr: 'Boisson chaude, jus d\'orange, soupe d\'orge (balboula), khlii aux œufs, bouteille d\'eau.', en: 'Hot drink, orange juice, barley soup (balboula), khlii with eggs, water bottle.', ar: 'مشروب ساخن، عصير برتقال، حساء الشعير (بلبولة)، خليع بالبيض، قارورة ماء.' }, priceMAD: 38 },
      { name: 'Chamalli', description: { fr: 'Boisson chaude, jus d\'orange, œufs frits, mortadelle, fromage jbane, olives noires, huile d\'olive, edam, charcuterie, bouteille d\'eau.', en: 'Hot drink, orange juice, fried eggs, mortadella, jbane cheese, black olives, olive oil, edam, cold cuts, water bottle.', ar: 'مشروب ساخن، عصير برتقال، بيض مقلي، مرتديلا، جبن جبان، زيتون أسود، زيت الزيتون، إيدام، لحوم باردة، قارورة ماء.' }, priceMAD: 48 },
    ],
  },
  {
    slug: 'omelettes',
    emoji: '🥚',
    label: { fr: 'Omelettes', en: 'Omelettes', ar: 'العجة' },
    items: [
      { name: 'Plain Omelette', description: { fr: 'Œufs nature tout simples.', en: 'Simple plain eggs.', ar: 'بيض بسيط طبيعي.' }, priceMAD: 13, vegetarian: true },
      { name: 'Cheese Omelette', description: { fr: 'Œufs au fromage fondu.', en: 'Eggs with melted cheese.', ar: 'بيض بالجبن المذاب.' }, priceMAD: 18, vegetarian: true },
      { name: 'Mushroom Omelette', description: { fr: 'Œufs aux champignons frais.', en: 'Eggs with fresh mushrooms.', ar: 'بيض بالفطر الطازج.' }, priceMAD: 21, vegetarian: true },
      { name: 'Cold Cuts Omelette', description: { fr: 'Œufs à la charcuterie.', en: 'Eggs with cold cuts.', ar: 'بيض باللحوم الباردة.' }, priceMAD: 23 },
      { name: 'Cheese & Cold Cuts Omelette', description: { fr: 'Œufs au fromage et à la charcuterie.', en: 'Eggs with cheese and cold cuts.', ar: 'بيض بالجبن واللحوم الباردة.' }, priceMAD: 24 },
      { name: 'Khlii with Eggs', description: { fr: 'Viande séchée traditionnelle marocaine cuisinée aux œufs.', en: 'Moroccan preserved meat cooked with eggs.', ar: 'خليع مغربي تقليدي مطهو بالبيض.' }, priceMAD: 26, popular: true },
    ],
  },
  {
    slug: 'toasts',
    emoji: '🍞',
    label: { fr: 'Toasts', en: 'Toasts', ar: 'التوست' },
    items: [
      { name: 'Cheese Toast', description: { fr: 'Tranches de pain chaud au fromage fondu.', en: 'Warm bread slices with melted cheese.', ar: 'شرائح خبز دافئة بالجبن المذاب.' }, priceMAD: 18, vegetarian: true },
      { name: 'Croque Monsieur', description: { fr: 'Jambon de dinde, fromage et béchamel gratinée.', en: 'Turkey ham, cheese, and gratinéed béchamel.', ar: 'لحم ديك رومي، جبن وبشاميل مغراتان.' }, priceMAD: 24 },
      { name: 'Cold Cuts & Cheese Toast', description: { fr: 'Toasts à la charcuterie et au fromage.', en: 'Toasts with cold cuts and cheese.', ar: 'توست باللحوم الباردة والجبن.' }, priceMAD: 24 },
      { name: 'Eggs, Cold Cuts & Cheese Toast', description: { fr: 'Toasts garnis d\'œufs, de charcuterie et de fromage.', en: 'Toasts loaded with eggs, cold cuts, and cheese.', ar: 'توست محشو بالبيض واللحوم الباردة والجبن.' }, priceMAD: 29 },
    ],
  },
  {
    slug: 'viennoiserie',
    emoji: '🥐',
    label: { fr: 'Viennoiseries', en: 'Viennoiserie', ar: 'المعجنات' },
    items: [
      { name: 'Pain au Chocolat', description: { fr: 'Viennoiserie feuilletée au beurre et au chocolat.', en: 'Flaky butter pastry with chocolate.', ar: 'معجنات مقرمشة بالزبدة والشوكولاتة.' }, priceMAD: 10, vegetarian: true },
      { name: 'Raisin Pastry', description: { fr: 'Viennoiserie feuilletée à la crème pâtissière et aux raisins.', en: 'Flaky pastry with custard and raisins.', ar: 'معجنات مقرمشة بالكريمة والزبيب.' }, priceMAD: 10, vegetarian: true },
      { name: 'Croissant', description: { fr: 'Croissant traditionnel pur beurre.', en: 'Traditional pure butter croissant.', ar: 'كرواسون تقليدي بالزبدة الخالصة.' }, priceMAD: 10, vegetarian: true },
      { name: 'Swiss Pastry', description: { fr: 'Viennoiserie feuilletée à la crème pâtissière et pépites de chocolat.', en: 'Flaky pastry with custard and chocolate chips.', ar: 'معجنات مقرمشة بالكريمة ورقائق الشوكولاتة.' }, priceMAD: 10, vegetarian: true },
    ],
  },
  {
    slug: 'sweet-crepes',
    emoji: '🥞',
    label: { fr: 'Crêpes sucrées', en: 'Sweet Crêpes', ar: 'الكريب الحلو' },
    items: [
      { name: 'Honey Crêpe', description: { fr: 'Crêpe fine et sucrée au miel pur.', en: 'Thin sweet crêpe with pure honey.', ar: 'كريب رقيق حلو بالعسل الخالص.' }, priceMAD: 18, vegetarian: true },
      { name: 'Jam Crêpe', description: { fr: 'Crêpe fine et sucrée à la confiture.', en: 'Thin sweet crêpe with jam.', ar: 'كريب رقيق حلو بالمربى.' }, priceMAD: 16, vegetarian: true },
      { name: 'Nutella Crêpe', description: { fr: 'Crêpe fine et sucrée au Nutella.', en: 'Thin sweet crêpe with Nutella.', ar: 'كريب رقيق حلو بالنوتيلا.' }, priceMAD: 22, popular: true, vegetarian: true },
      { name: 'Banana Nutella Crêpe', description: { fr: 'Crêpe fine sucrée à la banane fraîche et au Nutella.', en: 'Thin sweet crêpe with fresh bananas and Nutella.', ar: 'كريب رقيق حلو بالموز الطازج والنوتيلا.' }, priceMAD: 24, vegetarian: true },
      { name: 'Nutella & Walnut Crêpe', description: { fr: 'Crêpe fine sucrée au Nutella et aux noix.', en: 'Thin sweet crêpe with Nutella and walnuts.', ar: 'كريب رقيق حلو بالنوتيلا والجوز.' }, priceMAD: 26, vegetarian: true },
    ],
  },
  {
    slug: 'savory-crepes',
    emoji: '🌯',
    label: { fr: 'Crêpes salées', en: 'Savory Crêpes', ar: 'الكريب المالح' },
    items: [
      { name: '3 Cheese Crêpe', description: { fr: 'Bleu, mozzarella, brie, béchamel.', en: 'Blue cheese, mozzarella, brie, béchamel.', ar: 'جبن أزرق، موزاريلا، بري، بشاميل.' }, priceMAD: 27, vegetarian: true },
      { name: 'Cold Cuts Crêpe', description: { fr: 'Fromage, béchamel, charcuterie.', en: 'Cheese, béchamel, cold cuts.', ar: 'جبن، بشاميل، لحوم باردة.' }, priceMAD: 29 },
      { name: 'Chicken Crêpe', description: { fr: 'Champignon, fromage, béchamel, poulet.', en: 'Mushroom, cheese, béchamel, chicken.', ar: 'فطر، جبن، بشاميل، دجاج.' }, priceMAD: 32, popular: true },
      { name: 'Minced Beef Crêpe', description: { fr: 'Champignon, fromage, sauce blanche, viande hachée.', en: 'Mushroom, cheese, white sauce, minced beef.', ar: 'فطر، جبن، صلصة بيضاء، لحم مفروم.' }, priceMAD: 35 },
    ],
  },
  {
    slug: 'pizzas',
    emoji: '🍕',
    label: { fr: 'Pizzas', en: 'Pizzas', ar: 'البيتزا' },
    items: [
      { name: 'Signature "Rabat Nights"', description: { fr: 'Mozzarella, khlea effilochée, oignons caramélisés, olives noires, œuf au plat, filet d\'amlou.', en: 'Mozzarella, shredded khlea (confit beef), caramelized onions, black olives, fried egg, amlou drizzle.', ar: 'موزاريلا، خليع مفروم، بصل مكرمل، زيتون أسود، بيضة مقلية، صلصة أملو.' }, priceMAD: 90, popular: true },
      { name: 'Margherita Superiore', description: { fr: 'Mozzarella fondante, sauce tomate, basilic frais, filet d\'huile d\'olive.', en: 'Melted mozzarella, tomato sauce, fresh basil, olive oil drizzle.', ar: 'موزاريلا ذائبة، صلصة طماطم، ريحان طازج، زيت الزيتون.' }, priceMAD: 45, vegetarian: true },
      { name: 'Manzo Ricco', description: { fr: 'Mozzarella, bœuf braisé effiloché, oignons caramélisés, copeaux de parmesan.', en: 'Mozzarella, braised pulled beef, caramelized onions, parmesan shavings.', ar: 'موزاريلا، لحم بقري مطهو ببطء، بصل مكرمل، رقائق البارميزان.' }, priceMAD: 75 },
      { name: 'Tuna Riviera', description: { fr: 'Mozzarella, thon émietté, oignon rouge, câpres, olives kalamata, zeste de citron.', en: 'Mozzarella, flaked tuna, red onion, capers, kalamata olives, lemon zest.', ar: 'موزاريلا، تونة مفتتة، بصل أحمر، كبر، زيتون كالاماتا، قشر ليمون.' }, priceMAD: 52 },
      { name: 'Poulet Chermoula', description: { fr: 'Mozzarella, poulet grillé façon chermoula, oignons caramélisés, poivrons, coriandre fraîche.', en: 'Mozzarella, chermoula-spiced grilled chicken, caramelized onions, bell peppers, fresh coriander.', ar: 'موزاريلا، دجاج مشوي بالشرمولة، بصل مكرمل، فلفل حلو، كزبرة طازجة.' }, priceMAD: 58 },
      { name: 'Merguez Piquante', description: { fr: 'Mozzarella, merguez grillée, poivrons rôtis, huile de harissa, œuf au plat.', en: 'Mozzarella, grilled merguez, roasted peppers, harissa oil, fried egg.', ar: 'موزاريلا، مرقاز مشوي، فلفل مشوي، زيت الهريسة، بيضة مقلية.' }, priceMAD: 60 },
      { name: 'El Reto', description: { fr: 'Mozzarella, sauce tomate au harissa, jalapeños, piments doux, viande épicée, sauce piquante.', en: 'Mozzarella, harissa-spiced tomato sauce, jalapeños, sweet chili peppers, spiced beef, hot sauce.', ar: 'موزاريلا، صلصة طماطم بالهريسة، هالبينو، فلفل حار خفيف، لحم متبل، صلصة حارة.' }, priceMAD: 75 },
      { name: 'Quattro Formaggi Nobile', description: { fr: 'Mozzarella, gorgonzola, chèvre, copeaux de parmesan, filet de miel.', en: 'Mozzarella, gorgonzola, goat cheese, parmesan shavings, honey drizzle.', ar: 'موزاريلا، جبن غورغونزولا، جبن الماعز، رقائق البارميزان، صلصة العسل.' }, priceMAD: 80, vegetarian: true },
    ],
  },
  {
    slug: 'sandwiches',
    emoji: '🥪',
    label: { fr: 'Sandwiches', en: 'Sandwiches', ar: 'السندويشات' },
    items: [
      { name: 'Tuna Sandwich', description: { fr: 'Thon, fromage, tomates, laitue, cornichons, oignons, sauce cocktail.', en: 'Tuna, cheese, tomatoes, lettuce, pickles, onions, cocktail sauce.', ar: 'تونة، جبن، طماطم، خس، مخلل، بصل، صلصة كوكتيل.' }, priceMAD: 32 },
      { name: "Dom's Special Sandwich", description: { fr: 'Thon, salami, jambon de bœuf, fromage, tomates, laitue, cornichons.', en: 'Tuna, salami, beef ham, cheese, tomatoes, lettuce, pickles.', ar: 'تونة، سلامي، لحم بقري، جبن، طماطم، خس، مخلل.' }, priceMAD: 34, popular: true },
      { name: 'Chicken Sandwich', description: { fr: 'Poulet, fromage, tomates, laitue, cornichons, poivrons, sauce au choix.', en: 'Chicken, cheese, tomatoes, lettuce, pickles, bell peppers, sauce of your choice.', ar: 'دجاج، جبن، طماطم، خس، مخلل، فلفل، صلصة حسب الاختيار.' }, priceMAD: 36 },
      { name: 'Kefta Sandwich', description: { fr: 'Viande hachée, fromage, tomates, laitue, cornichons, oignons, sauce au choix.', en: 'Minced beef, cheese, tomatoes, lettuce, pickles, onions, sauce of your choice.', ar: 'لحم مفروم، جبن، طماطم، خس، مخلل، بصل، صلصة حسب الاختيار.' }, priceMAD: 38 },
      { name: 'Sandwich Menu (fries + soda)', description: { fr: 'Un sandwich au choix servi avec frites dorées et soda.', en: 'Any sandwich of choice served with golden fries and soda.', ar: 'أي سندويش مع بطاطا مقلية ذهبية وصودا.' }, priceMAD: 45 },
    ],
  },
  {
    slug: 'tacos',
    emoji: '🌮',
    label: { fr: 'Tacos', en: 'Tacos', ar: 'التاكوس' },
    items: [
      { name: 'Chicken Tacos', description: { fr: 'Poulet, cheddar, frites, béchamel et sauce au choix.', en: 'Chicken, cheddar, fries, béchamel and selected sauce.', ar: 'دجاج، شيدر، بطاطا مقلية، بشاميل وصلصة مختارة.' }, priceMAD: 38 },
      { name: 'Minced Beef Tacos', description: { fr: 'Viande hachée, cheddar, frites, béchamel et sauce au choix.', en: 'Minced beef, cheddar, fries, béchamel and selected sauce.', ar: 'لحم مفروم، شيدر، بطاطا مقلية، بشاميل وصلصة مختارة.' }, priceMAD: 38 },
      { name: 'Nuggets Tacos', description: { fr: 'Nuggets, cheddar, frites, béchamel et sauce au choix.', en: 'Nuggets, cheddar, fries, béchamel and selected sauce.', ar: 'ناغتس، شيدر، بطاطا مقلية، بشاميل وصلصة مختارة.' }, priceMAD: 38 },
      { name: 'Cordon Bleu Tacos', description: { fr: 'Cordon bleu, cheddar, frites, béchamel et sauce au choix.', en: 'Cordon bleu, cheddar, fries, béchamel and selected sauce.', ar: 'كوردون بلو، شيدر، بطاطا مقلية، بشاميل وصلصة مختارة.' }, priceMAD: 38 },
      { name: 'Tacos Menu (fries + soda)', description: { fr: 'Un tacos au choix servi avec frites croustillantes et soda glacé.', en: 'Any tacos of choice served with crispy fries and chilled soda.', ar: 'أي تاكوس مع بطاطا مقرمشة وصودا باردة.' }, priceMAD: 42 },
    ],
  },
  {
    slug: 'pasticcie',
    emoji: '🍲',
    label: { fr: 'Pasticcio', en: 'Pasticcie', ar: 'باستيتشيو' },
    items: [
      { name: 'Chicken Pasticcio', description: { fr: 'Poulet, fromage, sauce blanche gratinée au four.', en: 'Chicken, cheese, oven-baked white sauce.', ar: 'دجاج، جبن، صلصة بيضاء مطهوة بالفرن.' }, priceMAD: 42, popular: true },
      { name: 'Ham Pasticcio', description: { fr: 'Jambon, fromage, sauce blanche gratinée au four.', en: 'Ham, cheese, oven-baked white sauce.', ar: 'لحم خنزير بقري، جبن، صلصة بيضاء مطهوة بالفرن.' }, priceMAD: 42 },
      { name: 'Minced Beef Pasticcio', description: { fr: 'Viande hachée, fromage, sauce blanche gratinée au four.', en: 'Minced beef, cheese, oven-baked white sauce.', ar: 'لحم مفروم، جبن، صلصة بيضاء مطهوة بالفرن.' }, priceMAD: 45 },
      { name: 'Mixed Pasticcio', description: { fr: 'Poulet, bœuf, jambon, fromage et sauce blanche.', en: 'Chicken, beef, ham, cheese, and white sauce.', ar: 'دجاج، لحم بقري، لحم خنزير، جبن وصلصة بيضاء.' }, priceMAD: 45 },
    ],
  },
  {
    slug: 'burgers',
    emoji: '🍔',
    label: { fr: 'Burgers', en: 'Burgers', ar: 'البرغر' },
    items: [
      { name: 'Chicken Burger', description: { fr: 'Poulet, cheddar, tomate, oignon, laitue, cornichons.', en: 'Chicken, cheddar, tomato, onion, lettuce, pickles.', ar: 'دجاج، شيدر، طماطم، بصل، خس، مخلل.' }, priceMAD: 38 },
      { name: 'Beef Burger', description: { fr: 'Viande hachée, cheddar, tomate, oignon, laitue, cornichons.', en: 'Minced beef, cheddar, tomato, onion, lettuce, pickles.', ar: 'لحم مفروم، شيدر، طماطم، بصل، خس، مخلل.' }, priceMAD: 40, popular: true },
      { name: 'Eggs Burger', description: { fr: 'Nuggets, cheddar, frites, sauce béchamel.', en: 'Nuggets, cheddar, fries, béchamel sauce.', ar: 'ناغتس، شيدر، بطاطا مقلية، صلصة بشاميل.' }, priceMAD: 40 },
      { name: 'Double Cheese Burger', description: { fr: 'Viande hachée, double cheddar, tomate, oignon, laitue, cornichons.', en: 'Minced beef, double cheddar, tomato, onion, lettuce, pickles.', ar: 'لحم مفروم، شيدر مضاعف، طماطم، بصل، خس، مخلل.' }, priceMAD: 42 },
    ],
  },
  {
    slug: 'salads',
    emoji: '🥗',
    label: { fr: 'Salades', en: 'Salads', ar: 'السلطات' },
    items: [
      { name: 'Moroccan Salad', description: { fr: 'Laitue, tomate, oignons, thon, olives noires, vinaigrette.', en: 'Lettuce, tomato, onions, tuna, black olives, vinaigrette.', ar: 'خس، طماطم، بصل، تونة، زيتون أسود، فينيغريت.' }, priceMAD: 27 },
      { name: 'Niçoise Salad', description: { fr: 'Thon, pommes de terre, betterave, carottes, concombre, tomates, laitue, olives, œuf dur, sauce au choix.', en: 'Tuna, potatoes, beetroot, carrots, cucumber, tomatoes, lettuce, olives, boiled egg, sauce of choice.', ar: 'تونة، بطاطا، شمندر، جزر، خيار، طماطم، خس، زيتون، بيض مسلوق، صلصة حسب الاختيار.' }, priceMAD: 33 },
      { name: "Dom's Salad", description: { fr: 'Riz, poulet, thon, tomates, maïs, laitue, edam, sauce au thon.', en: 'Rice, chicken, tuna, tomatoes, corn, lettuce, edam, tuna sauce.', ar: 'أرز، دجاج، تونة، طماطم، ذرة، خس، إيدام، صلصة التونة.' }, priceMAD: 36, popular: true },
      { name: 'Rio Salad', description: { fr: 'Charcuterie, crevettes, surimi, brie, avocat, ananas, tomates, maïs, laitue, sauce cocktail.', en: 'Cold cuts, shrimp, surimi, brie, avocado, pineapple, tomatoes, corn, lettuce, cocktail sauce.', ar: 'لحوم باردة، روبيان، سوريمي، بري، أفوكادو، أناناس، طماطم، ذرة، خس، صلصة كوكتيل.' }, priceMAD: 55 },
      { name: 'Fisherman Salad', description: { fr: 'Crevettes, calamars, surimi, avocat, tomates, laitue, cornichons, olives noires, sauce cocktail.', en: 'Shrimp, squid, surimi, avocado, tomatoes, lettuce, pickles, black olives, cocktail sauce.', ar: 'روبيان، حبار، سوريمي، أفوكادو، طماطم، خس، مخلل، زيتون أسود، صلصة كوكتيل.' }, priceMAD: 55 },
    ],
  },
  {
    slug: 'pasta',
    emoji: '🍝',
    label: { fr: 'Pâtes', en: 'Pasta', ar: 'المعكرونة' },
    items: [
      { name: 'Chicken Pasta', description: { fr: 'Poulet, champignons, parmesan, sauce blanche riche.', en: 'Chicken, mushroom, parmesan, rich white sauce.', ar: 'دجاج، فطر، بارميزان، صلصة بيضاء غنية.' }, priceMAD: 45 },
      { name: 'Bolognese Pasta', description: { fr: 'Viande hachée, basilic frais, parmesan, sauce bolognaise.', en: 'Minced beef, fresh basil, parmesan, bolognese sauce.', ar: 'لحم مفروم، ريحان طازج، بارميزان، صلصة بولونيز.' }, priceMAD: 50 },
      { name: 'Carbonara Pasta', description: { fr: 'Jambon, champignon, parmesan, crème fraîche.', en: 'Ham, mushroom, parmesan, fresh cream.', ar: 'لحم خنزير بقري، فطر، بارميزان، كريمة طازجة.' }, priceMAD: 55, popular: true },
      { name: 'Fisherman Pasta', description: { fr: 'Crevettes, calamars, moules, pesto au basilic, tomates cerises.', en: 'Shrimp, squid, mussels, basil pesto, cherry tomatoes.', ar: 'روبيان، حبار، بلح البحر، بيستو الريحان، طماطم كرزية.' }, priceMAD: 60 },
      { name: 'Sliced Chicken Breast', description: { fr: 'Blanc de poulet tranché, cuisson traditionnelle.', en: 'Sliced chicken breast cooked in traditional style.', ar: 'صدر دجاج مقطع، مطهو على الطريقة التقليدية.' }, priceMAD: 65 },
    ],
  },
  {
    slug: 'desserts',
    emoji: '🍰',
    label: { fr: 'Desserts', en: 'Desserts', ar: 'الحلويات' },
    items: [
      { name: 'Crème Caramel', description: { fr: 'Flan crémeux nappé de caramel liquide.', en: 'Creamy flan coated with liquid caramel.', ar: 'فلان كريمي مغطى بالكراميل السائل.' }, priceMAD: 18, vegetarian: true },
      { name: 'Tart of the Day', description: { fr: 'Tarte maison aux fruits frais de saison.', en: 'Homemade tart with fresh seasonal fruits.', ar: 'تارت منزلية بفواكه طازجة موسمية.' }, priceMAD: 25, popular: true, vegetarian: true },
      { name: 'Pastry of the Day', description: { fr: "Sélection du chef, pâtisserie fine du jour.", en: "Chef's daily choice of fine fresh pastry.", ar: 'اختيار الشيف اليومي من الحلويات الفاخرة.' }, priceMAD: 28, vegetarian: true },
    ],
  },
];
