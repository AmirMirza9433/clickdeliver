export const APP_INFO = {
  name: 'ClickDeliver',
  slogan: 'Delivery or Ride dono asan',
  email: 'clickdeliver.app@gmail.com',
  phone: '+923287872532',
  location: 'Alipur Chattha, Punjab, Pakistan',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.clickdelivers.app&pcampaignid=web_share',
  appStoreUrl: '#', // TODO: Replace with actual iOS App Store link
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/clickdeliver',
  instagram: 'https://instagram.com/clickdeliver',
  youtube: 'https://youtube.com/@clickdeliver',
  tiktok: 'https://tiktok.com/@clickdeliver',
};

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download', href: '#download' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES = [
  {
    icon: 'Truck',
    title: 'Everything Delivered',
    description: 'Grocery, medicine, food — sab kuch doorstep tak.',
  },
  {
    icon: 'Bike',
    title: 'Ride Booking',
    description: 'Apni ride book karo — fast, safe, affordable.',
  },
  {
    icon: 'ClipboardList',
    title: 'Custom Orders',
    description: 'Jo list mein nahi — wo bhi mangao via custom order.',
  },
  {
    icon: 'MapPin',
    title: 'Real-Time Tracking',
    description: 'Rider ki live location dekho — exact ETA jaano.',
  },
  {
    icon: 'MessageCircle',
    title: 'In-App Chat',
    description: 'Customer, rider, shopkeeper — sab se direct chat.',
  },
  {
    icon: 'CreditCard',
    title: 'Multiple Payments',
    description: 'COD, JazzCash, EasyPaisa — aapki marzi.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Download karo',
    description: 'App Google Play ya App Store se download karo. Free hai!',
    icon: 'Download',
  },
  {
    number: '02',
    title: 'Order dalo',
    description: 'Shop browse karo, cart mein add karo, ya custom order daal do.',
    icon: 'ShoppingCart',
  },
  {
    number: '03',
    title: 'Delivery lo',
    description: 'Rider laye ga aapke darwaze tak. Live track karo.',
    icon: 'CheckCircle',
  },
];

export const STATS = [
  { value: 1000, suffix: '+', label: 'Happy Customers' },
  { value: 50, suffix: '+', label: 'Active Riders' },
  { value: 100, suffix: '+', label: 'Partner Shops' },
  { value: 99, suffix: '%', label: 'Delivery Success' },
];

export const USER_TYPES = [
  {
    title: 'Customer',
    icon: 'User',
    features: [
      'Browse shops',
      'Add to cart',
      'Checkout & payment',
      'Real-time tracking',
      'Rate & review',
    ],
  },
  {
    title: 'Rider',
    icon: 'Bike',
    features: [
      'Accept orders',
      'Navigate to shop',
      'Deliver quickly',
      'Earnings dashboard',
      'Flexible schedule',
    ],
  },
  {
    title: 'Shopkeeper',
    icon: 'Store',
    features: [
      'Create shop',
      'List products',
      'Manage orders',
      'Accept custom orders',
      'View analytics',
    ],
  },
];
