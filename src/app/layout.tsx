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
    'Play quizzes online on GyaanBucks, earn coins, win exciting rewards, and redeem your earnings easily. Daily quizzes, GK, science, and more.',

  keywords: [
    'GyaanBucks',
    'play quizzes online',
    'earn rewards',
    'earn coins',
    'redeem cash',
    'quiz rewards website',
    'earn money playing quizzes',
    'daily quiz rewards',
    'GK quiz online',
    'current affairs quiz',
    'science quiz',
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
