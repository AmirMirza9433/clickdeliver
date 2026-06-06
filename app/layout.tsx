import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import { PageLoader } from '@/components/ui/PageLoader';

const heading = Outfit({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
});

const body = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: 'ClickDeliver — Delivery or Ride dono asan | Pakistan',
    template: '%s | ClickDeliver',
  },
  description:
    'ClickDeliver Pakistan ka best delivery aur ride app. Grocery, medicine, food, custom orders — sab kuch deliver hoga. Rider booking bhi available. Alipur Chattha aur surrounding areas mein available.',
  keywords: [
    'delivery app pakistan',
    'ride app pakistan',
    'ClickDeliver',
    'delivery alipur chattha',
    'custom order delivery',
    'online delivery gujranwala',
    'food delivery pakistan',
    'grocery delivery app',
    'rider booking app',
  ],
  authors: [{ name: 'ClickDeliver', url: 'https://clickdeliver.app' }],
  creator: 'ClickDeliver',
  publisher: 'ClickDeliver',
  metadataBase: new URL('https://clickdeliver.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://clickdeliver.app',
    title: 'ClickDeliver — Delivery or Ride dono asan',
    description: 'Pakistan ka best local delivery aur ride platform',
    siteName: 'ClickDeliver',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClickDeliver App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickDeliver — Delivery or Ride dono asan',
    description: 'Pakistan ka best local delivery aur ride app.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-heading: ${heading.variable};
            --font-body: ${body.variable};
          }
        `}</style>
      </head>
      <body className={`${heading.variable} ${body.variable} bg-black text-white`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
