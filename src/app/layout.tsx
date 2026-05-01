import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gyaanbucks.com'),

  title: {
    default: 'GyaanBucks - Play Quizzes, Earn Rewards & Redeem Cash',
    template: '%s | GyaanBucks',
  },

  description:
    'Play quizzes online and earn real rewards on GyaanBucks. Answer GK and current affairs questions, earn coins, and redeem to cash. Best online work platform to earn money with quizzes.',

  keywords: [
    // Brand
    'GyaanBucks',

    // Quiz core
    'play quizzes online',
    'GK quiz online',
    'current affairs quiz',
    'daily quiz',
    'general knowledge quiz',
    'science quiz',
    'online quiz platform',

    // Earn money (HIGH CTR)
    'earn money online',
    'earn money by playing quizzes',
    'quiz earn money app',
    'earn rewards online',
    'earn coins online',
    'redeem coins to cash',
    'real money earning app',
    'earn cash rewards',

    // Online work (NEW ADD)
    'online work from home',
    'online work earning',
    'online work without investment',
    'best online work platform',
    'online earning work',

    // Long tail (SEO gold)
    'play quiz and earn money',
    'online quiz with rewards',
    'daily quiz earn cash',
    'earn money without investment',
    'best quiz earning website',
    'work from home quiz earning',
  ],

  authors: [{ name: 'GyaanBucks' }],
  creator: 'GyaanBucks',
  publisher: 'GyaanBucks',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'GyaanBucks - Play Quizzes & Earn Money',
    description:
      'Play quizzes online, earn coins, and redeem cash on GyaanBucks. Daily GK, current affairs, and reward quizzes.',
    url: 'https://gyaanbucks.com',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GyaanBucks - Play Quiz & Earn Rewards',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GyaanBucks - Play Quizzes & Earn Money',
    description:
      'Play quizzes, earn rewards, and redeem to cash. Join GyaanBucks now.',
    images: ['/og-image.png'],
  },

  other: {
    monetag: '3a8f1e81a6fe40153bfed9fac52e2470',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
