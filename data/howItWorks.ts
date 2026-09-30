export interface StepItem {
  number: string;
  stepIndex: number;
  title: string;
  urduSubtitle: string;
  description: string;
  iconName: string;
  badge: string;
  screenType: 'browse' | 'custom' | 'track';
  phoneDetails: {
    status: string;
    item: string;
    subtext: string;
    metric: string;
  };
}

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    stepIndex: 1,
    title: 'Download & Browse Karo',
    urduSubtitle: 'App install karo aur dukan ya ride chuno',
    description:
      'Google Play Store se ClickDeliver install karein. Grocery, dawaai, restaurant menu ya ride booking me se jo chahiye select karein.',
    iconName: 'Smartphone',
    badge: 'Step 1: Simple & Quick',
    screenType: 'browse',
    phoneDetails: {
      status: 'Ready in 30s',
      item: 'Bismillah General Store + 50 shops',
      subtext: 'No complicated signups required',
      metric: 'Free App Download',
    },
  },
  {
    number: '02',
    stepIndex: 2,
    title: 'Order Dalo ya Custom Chat Karo',
    urduSubtitle: 'Cart mein add karo ya seedha dukandar ko batao',
    description:
      'Standard items cart mein daal kar checkout karein. Agar koi cheez menu mein na miley to Custom Order ke zariye dukan walay ko direct message bhejein.',
    iconName: 'ShoppingBag',
    badge: 'Step 2: Flexible Ordering',
    screenType: 'custom',
    phoneDetails: {
      status: 'Live Chat Active',
      item: 'Panadol Extra & Fresh Milk (2L)',
      subtext: 'Special requests accepted',
      metric: 'Instant Shop Acceptance',
    },
  },
  {
    number: '03',
    stepIndex: 3,
    title: 'Live Track Karo & Receive Karo',
    urduSubtitle: 'Rider darwaze par — COD ya mobile wallet se pay karo',
    description:
      'Map par rider ki location real-time monitor karein. Jab parcel aapke darwaze par pohnche to Cash, JazzCash ya EasyPaisa se payment karein.',
    iconName: 'CheckCircle2',
    badge: 'Step 3: Safe Delivery',
    screenType: 'track',
    phoneDetails: {
      status: 'Rider Arrived at Gate',
      item: 'Delivery Completed safely',
      subtext: 'Alipur Chattha Sector 3',
      metric: 'ETA: 0 Mins Left',
    },
  },
];
