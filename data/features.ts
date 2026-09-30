export interface BentoFeature {
  id: string;
  title: string;
  badge: string;
  description: string;
  subtext: string;
  iconName: string;
  accentColor: string;
  colSpanDesktop: string; // e.g., 'lg:col-span-2' vs 'lg:col-span-1'
  highlights: string[];
}

export const BENTO_FEATURES: BentoFeature[] = [
  {
    id: 'everything-delivered',
    title: 'Grocery, Medicine aur Food — Har Cheez Ghar Tak',
    badge: 'Express Delivery',
    description:
      'Ghar bethay taaza phal, sabziyan, zaroori adviyaat aur local favourite restaurant ka khana order karein.',
    subtext: 'Average delivery under 25 minutes anywhere in Alipur Chattha.',
    iconName: 'ShoppingBag',
    accentColor: 'from-blue-500/20 via-blue-600/10 to-transparent',
    colSpanDesktop: 'lg:col-span-2',
    highlights: ['Taaza & Verified Stores', 'No Minimum Order', 'Same-Day Urgent'],
  },
  {
    id: 'ride-booking',
    title: 'Fast & Affordable Ride Booking',
    badge: 'Quick Rides',
    description:
      'Chaahe college jana ho ya bazar, rider 8–12 minutes mein aapke paas hoga — Rs. 60–150 ke behtareen rates par.',
    subtext: 'Helmet-equipped, verified local captains.',
    iconName: 'Bike',
    accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    colSpanDesktop: 'lg:col-span-1',
    highlights: ['Pocket Friendly (Rs. 60+)', 'Avg 8-12 min pickup', 'Safety first'],
  },
  {
    id: 'custom-orders',
    title: 'Custom Orders: Jo Menu Mein Nahi, Wo Bhi Mangao',
    badge: 'Exclusive Feature',
    description:
      'Special medicine, specific brand ka kapra ya tailored item? Shopkeeper se seedha chat karein aur order confirm karwayen.',
    subtext: 'Koi cheez miss nahi hogi — customer demand par sourcing.',
    iconName: 'Sparkles',
    accentColor: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    colSpanDesktop: 'lg:col-span-1',
    highlights: ['Direct Shopkeeper Chat', 'Item Photo Upload', 'Tailored Pricing'],
  },
  {
    id: 'real-time-tracking',
    title: 'Live GPS Rider Tracking & Exact ETA',
    badge: 'Real-time Tech',
    description:
      'Map par apne rider ki live movement dekhein. Exact minutes aur seconds tak update, no guessing work.',
    subtext: 'Zero phone calls needed to ask "Kahan pohnchay?".',
    iconName: 'Compass',
    accentColor: 'from-emerald-500/20 via-blue-500/10 to-transparent',
    colSpanDesktop: 'lg:col-span-2',
    highlights: ['Turn-by-turn map', 'Live speed & ETA', 'In-app notification'],
  },
  {
    id: 'in-app-chat',
    title: 'Customer, Rider aur Dukandar Ka 3-Way Chat',
    badge: 'Instant Connect',
    description:
      'Kayi dafa rasta samjhna ho ya substitute cheez batani ho — real-time messaging aur call feature se sab asaan.',
    subtext: 'Privacy protected, masked mobile numbers.',
    iconName: 'MessagesSquare',
    accentColor: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    colSpanDesktop: 'lg:col-span-1',
    highlights: ['Direct messaging', 'Urdu / Voice note support', 'Fast updates'],
  },
  {
    id: 'flexible-payments',
    title: 'JazzCash, EasyPaisa aur Cash on Delivery (COD)',
    badge: '100% Transparent',
    description:
      'Aapki marzi ka payment tareeqa: delivery par cash dein ya JazzCash/EasyPaisa se digital scan & pay karein.',
    subtext: 'Instant digital receipts and 0 hidden fees.',
    iconName: 'Wallet',
    accentColor: 'from-violet-500/20 via-blue-500/10 to-transparent',
    colSpanDesktop: 'lg:col-span-2',
    highlights: ['Cash on Delivery (COD)', 'JazzCash QR', 'EasyPaisa Instant'],
  },
];
