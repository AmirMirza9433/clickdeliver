export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  area: string;
  rating: number;
  comment: string;
  avatarText: string;
  date: string;
  type: 'customer' | 'rider' | 'shopkeeper';
}

/**
 * EDITABLE TESTIMONIALS DATA
 * Add, edit, or remove reviews easily from this file.
 */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Hamza Cheema',
    role: 'Customer',
    area: 'Model Town, Alipur Chattha',
    rating: 5,
    comment:
      'Raat ko 11 bajay bachay ke liye Panadol syrup chahiye tha. ClickDeliver par custom order lagaya, 15 minute mein rider ghar pohnch gaya. Zabardast service!',
    avatarText: 'HC',
    date: '2 din pehle',
    type: 'customer',
  },
  {
    id: 't-2',
    name: 'Muhammad Usman',
    role: 'Shopkeeper (Usman Medicos)',
    area: 'Main Bazar, Alipur Chattha',
    rating: 5,
    comment:
      'Pehle sirf bazar ke customers aate thay. ClickDeliver par register hone ke baad roz ke 20-25 online orders alag aate hain. Direct customer chat se order lena bohot asan hai.',
    avatarText: 'MU',
    date: '1 hafta pehle',
    type: 'shopkeeper',
  },
  {
    id: 't-3',
    name: 'Rana Ali Raza',
    role: 'Captain / Rider',
    area: 'Rasool Nagar Road',
    rating: 5,
    comment:
      'College ke baad shaam ko 4 ghantay bike chalata hoon. Rozana 1500–2500 Rs pocket money araam se ban jati hai. Navigation app ke andar hi hai to address dhoondna bohot aasan hai.',
    avatarText: 'RA',
    date: '3 din pehle',
    type: 'rider',
  },
  {
    id: 't-4',
    name: 'Zainab Bibi',
    role: 'Customer',
    area: 'Gulberg Colony',
    rating: 5,
    comment:
      'Ghar bethay taaza sabzi aur dahi mangwaya. Rider bhai ne bilkul theek cheezein lay kar deen. Cash on delivery bhi available hai jo bohot sukoon deta hai.',
    avatarText: 'ZB',
    date: 'Pichlay haftay',
    type: 'customer',
  },
  {
    id: 't-5',
    name: 'Chaudhry Bilal',
    role: 'Ride Passenger',
    area: 'Alipur Chattha to Akalgarh Road',
    rating: 5,
    comment:
      'Rickshaw dhoondne mein 20 minute lagte thay. ClickDeliver app se ride book ki, 7 minute mein rider pohncha aur sirf Rs. 90 rent bana. Behtareen ride experience!',
    avatarText: 'CB',
    date: 'Kal',
    type: 'customer',
  },
  {
    id: 't-6',
    name: 'Haji Aslam',
    role: 'Merchant (Aslam Bakers)',
    area: 'Circular Road',
    rating: 5,
    comment:
      'Fresh cakes aur bakery items ki delivery ke liye ClickDeliver rider 5 minute mein pick kar ke safe deliver karte hain. Packing bhi kharab nahi hoti.',
    avatarText: 'HA',
    date: '5 din pehle',
    type: 'shopkeeper',
  },
];
