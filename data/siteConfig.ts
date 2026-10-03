export interface AppInfo {
  name: string;
  tagline: string;
  slogan: string;
  description: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  address: string;
  playStoreUrl: string;
  appStoreUrl: string;
  packageId: string;
  socials: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

export const APP_CONFIG: AppInfo = {
  name: 'ClickDeliver',
  tagline: 'Delivery or Ride dono asan',
  slogan: 'Har cheez aapke darwaze tak — fast, safe aur local!',
  description:
    'ClickDeliver Pakistan ka premier hyper-local delivery aur ride-booking platform hai. Grocery, medicine, food, custom orders aur ride booking — sab kuch Alipur Chattha mein ek tap par.',
  email: 'clickdeliver.app@gmail.com',
  phone: '+923712388070',
  phoneDisplay: '+92 371 2388070',
  location: 'Alipur Chattha, Gujranwala, Punjab, Pakistan',
  address: 'Main Bazar, Alipur Chattha, District Gujranwala, Punjab, Pakistan',
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=com.clickdelivers.app&pcampaignid=web_share',
  appStoreUrl: 'https://apps.apple.com/app/clicks-deliver/id6813540581',
  packageId: 'com.clickdelivers.app',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61591840280575',
    instagram: 'https://www.instagram.com/clickdeliver.app/?hl=en',
    tiktok: 'https://www.tiktok.com/@clickdeliver.app?is_from_webapp=1&sender_device=pc',
  },
};

export const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Custom Orders', href: '#custom-orders' },
  { label: 'Ride', href: '#ride' },
  { label: 'For Everyone', href: '#roles' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
