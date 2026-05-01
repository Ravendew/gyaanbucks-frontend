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
