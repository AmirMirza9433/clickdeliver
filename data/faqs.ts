export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'delivery' | 'rider' | 'payment';
}

/**
 * EDITABLE FAQS DATA
 */
export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'ClickDeliver kis area mein operate kar raha hai?',
    answer:
      'Filhal ClickDeliver poore Alipur Chattha city aur aas-paas ke ilaqon (Rasool Nagar road, Akalgarh, Circular road, Model town waghera) mein full operations deliver aur ride service provide kar raha hai.',
  },
  {
    id: 'faq-2',
    category: 'delivery',
    question: 'Custom Order kya hota hai aur isko kaise use karein?',
    answer:
      'Agar aapko koi aisi dawaai, grocery item ya specific cheez chahiye jo app ke listed menu mein nahi mil rahi, to aap "Custom Order" par click karein. Wahan apni pasand ki shop ko direct text karein ya photo bhejein. Dukandar order accept karega aur rider aapke darwaze tak pohnchayega.',
  },
  {
    id: 'faq-3',
    category: 'rider',
    question: 'Bike ride booking ka kiraya kitna hota hai?',
    answer:
      'ClickDeliver ride booking bohot pocket-friendly hai. Aam tor par city ke andar trips Rs. 60 se Rs. 150 ke darmiyan hoti hain, aur rider 8 se 12 minute ke andar aapki location par pohnch jata hai.',
  },
  {
    id: 'faq-4',
    category: 'payment',
    question: 'Payment ke kon kon se tareeqay dastiyaab hain?',
    answer:
      'Aap Cash on Delivery (COD) ada kar sakte hain jab saman aapke hath mein aaye, ya rider/shopkeeper ke JazzCash aur EasyPaisa account par foran digital transfer kar sakte hain.',
  },
  {
    id: 'faq-5',
    category: 'rider',
    question: 'Main ClickDeliver ka Rider / Captain kaise ban sakta hoon?',
    answer:
      'Agar aapke paas apni motorcycle aur CNIC hai, to aap hamare Contact number (+92 328 7872532) par WhatsApp karein ya website ke Contact form se apply karein. Hamari team 24 ghante ke andar verification mukammal kar ke aapka rider account activate kar degi.',
  },
  {
    id: 'faq-6',
    category: 'delivery',
    question: 'Delivery ka average time kitna lagta hai?',
    answer:
      'Food aur urgent medicines aam tor par 15 se 25 minutes ke andar deliver ho jati hain. General grocery orders 25 se 35 minutes mein pohanchte hain. Aap app par live rider tracking dekh sakte hain.',
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'Kya iPhone / iOS app available hai?',
    answer:
      'Android version abhi Google Play Store par live hai. iOS (Apple App Store) app develop ho rahi hai aur bohot jald launch ki jayegi! Aap website se APK ya Google Play link use kar sakte hain.',
  },
];
