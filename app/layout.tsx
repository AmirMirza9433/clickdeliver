import './globals.css';
import type { Metadata } from 'next';
import { PageLoader } from '@/components/ui/PageLoader';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { QuickContactFab } from '@/components/ui/QuickContactFab';
import { APP_CONFIG } from '@/data/siteConfig';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  'https://clickdeliver.app';

export const metadata: Metadata = {
  title: {
    default: 'ClickDeliver — Delivery or Ride dono asan | Alipur Chattha, Pakistan',
    template: '%s | ClickDeliver',
  },
  description:
    'ClickDeliver Pakistan ka best hyper-local delivery aur ride app. Grocery, medicine, food, custom shop orders aur fast bike ride booking Alipur Chattha aur aas-paas ke ilaqon mein available.',
  keywords: [
    'delivery app pakistan',
    'ride app pakistan',
    'ClickDeliver',
    'ClickDeliver alipur chattha',
    'delivery alipur chattha',
    'custom order delivery pakistan',
    'online delivery gujranwala',
    'food delivery pakistan',
    'grocery delivery app pakistan',
    'rider booking app pakistan',
    'bike ride booking alipur chattha',
  ],
  authors: [{ name: 'ClickDeliver', url: siteUrl }],
  creator: 'ClickDeliver',
  publisher: 'ClickDeliver',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    title: 'ClickDeliver — Delivery or Ride dono asan',
    description:
      'Pakistan ka premier local delivery aur ride platform. Alipur Chattha mein grocery, medicine, food aur ride booking ek tap par.',
    siteName: 'ClickDeliver',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'ClickDeliver App Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickDeliver — Delivery or Ride dono asan',
    description:
      'Pakistan ka premier local delivery aur ride app. Alipur Chattha mein express delivery aur rides.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: APP_CONFIG.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: APP_CONFIG.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alipur Chattha',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: APP_CONFIG.phone,
    contactType: 'customer service',
    areaServed: 'PK',
    availableLanguage: ['Urdu', 'English', 'Punjabi'],
  },
  sameAs: [
    APP_CONFIG.socials.facebook,
    APP_CONFIG.socials.instagram,
    APP_CONFIG.socials.tiktok,
  ],
};

const jsonLdApp = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: APP_CONFIG.name,
  operatingSystem: 'Android, iOS',
  applicationCategory: 'ShoppingApplication, TravelApplication',
  installUrl: APP_CONFIG.playStoreUrl,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'PKR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    ratingCount: '1250',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
      </head>
      <body
        className="font-body bg-background text-foreground selection:bg-brand-primary selection:text-white antialiased transition-colors duration-300"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PageLoader />
          {children}
          <QuickContactFab />
        </ThemeProvider>
      </body>
    </html>
  );
}
