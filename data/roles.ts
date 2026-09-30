export interface RoleData {
  id: 'customer' | 'rider' | 'shopkeeper';
  title: string;
  shortTitle: string;
  tagline: string;
  urduSummary: string;
  iconName: string;
  ctaText: string;
  ctaLink: string;
  statBadge: { value: string; label: string };
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  mockupDetails: {
    heading: string;
    badge: string;
    bullets: string[];
  };
}

export const ROLES_DATA: RoleData[] = [
  {
    id: 'customer',
    title: 'Customer',
    shortTitle: 'Customer',
    tagline: 'Ghar bethay sab kuch mangao — asan aur fast',
    urduSummary: 'Dukan jane ki zaroorat nahi. Alipur Chattha ke saare bazar ab aapke phone mein.',
    iconName: 'UserCheck',
    ctaText: 'Download ClickDeliver App',
    ctaLink: '#download',
    statBadge: { value: '5.0 ★', label: 'Average App Rating' },
    benefits: [
      {
        title: 'Shops & Pharmacy Browse',
        description: 'Taaza grocery, fresh bakery, zaruri medicines aur restaurant khana ek jagah.',
        icon: 'Store',
      },
      {
        title: 'Custom Order Freedom',
        description: 'Jo item app mein na miley, shopkeeper ko direct likh kar mangwayen.',
        icon: 'Sparkles',
      },
      {
        title: 'Real-Time Map Tracking',
        description: 'Rider kahan pohncha hai, screen par live dekhein bina call kiye.',
        icon: 'MapPin',
      },
      {
        title: 'Flexible Payment Options',
        description: 'Cash on delivery dein ya JazzCash aur EasyPaisa se direct pay karein.',
        icon: 'CreditCard',
      },
    ],
    mockupDetails: {
      heading: 'Customer App Experience',
      badge: 'Order in 3 taps',
      bullets: [
        'Live tracking map with 30s updates',
        'Direct shopkeeper in-app chat',
        'Digital receipt & instant status alerts',
      ],
    },
  },
  {
    id: 'rider',
    title: 'Rider / Captain',
    shortTitle: 'Rider',
    tagline: 'Apni bike se izzat ki kamayi karo — jab chaho, jitna chaho',
    urduSummary: 'ClickDeliver Captain bano: rozana ka munafa, foran withdraw, flexible timing.',
    iconName: 'Bike',
    ctaText: 'Join as Rider / Captain',
    ctaLink: '#contact',
    statBadge: { value: 'Rs. 45k+', label: 'Monthly Earning Potential' },
    benefits: [
      {
        title: 'Flexible Earnings & Timing',
        description: 'Full-time ya part-time — jab marzi app on karo aur delivery ya ride shuru karo.',
        icon: 'Clock',
      },
      {
        title: 'Instant Job Alerts',
        description: 'Aapke nazdeek nayi delivery ya ride ka foran pop-up notification aayega.',
        icon: 'BellRing',
      },
      {
        title: 'Built-in Live Navigation',
        description: 'Dukan se customer ke gate tak turn-by-turn rasta app ke andar integrated hai.',
        icon: 'Compass',
      },
      {
        title: 'Transparent Daily Payouts',
        description: 'JazzCash ya bank account mein rozana kamayi clear karein, 0 hidden deductions.',
        icon: 'TrendingUp',
      },
    ],
    mockupDetails: {
      heading: 'Captain Partner Portal',
      badge: 'High Acceptance Bonus',
      bullets: [
        'One-tap ride acceptance slider',
        'Customer phone masked calling',
        'Daily income breakdown graph',
      ],
    },
  },
  {
    id: 'shopkeeper',
    title: 'Shopkeeper / Merchant',
    shortTitle: 'Shopkeeper',
    tagline: 'Apni dukan ko online lao — hazaron naye grahak banao',
    urduSummary: 'Alipur Chattha ke dukaandaron ke liye: online orders lo aur sales 2x karo.',
    iconName: 'Store',
    ctaText: 'Register Your Shop Today',
    ctaLink: '#contact',
    statBadge: { value: '+40%', label: 'Average Sales Growth' },
    benefits: [
      {
        title: 'Get Online Orders 24/7',
        description: 'Bazar aane walon ke ilawa ghar bethay hazaron logon se rozana orders receive karein.',
        icon: 'ShoppingBag',
      },
      {
        title: 'Direct Customer Chat',
        description: 'Custom orders par customer se item picture, quantity aur price chat mein tay karein.',
        icon: 'MessagesSquare',
      },
      {
        title: 'Simple Inventory Management',
        description: 'Phone se aasaani se item add ya out-of-stock mark karein bina kisi computer ke.',
        icon: 'Layers',
      },
      {
        title: 'Grow Sales With Local Delivery',
        description: 'Delivery ki tension khatam — ClickDeliver ke riders aapka saman pick kar ke pohnchate hain.',
        icon: 'Award',
      },
    ],
    mockupDetails: {
      heading: 'Merchant Business Dashboard',
      badge: 'Zero Onboarding Fee',
      bullets: [
        'New order chime alert with accept/reject',
        'Order dispatch rider assignment',
        'Customer ledger & daily revenue export',
      ],
    },
  },
];
