import type { Metadata } from 'next';
import Script from 'next/script';
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
    default: 'GyaanBucks - Play Quiz, Earn Rewards & Redeem Cash Online',
    template: '%s | GyaanBucks',
  },

  description:
    'Play quizzes online and earn real rewards on GyaanBucks. Answer GK and current affairs questions, earn coins, and redeem to cash. Best online work platform to earn money with quizzes.',

  keywords: [
    'GyaanBucks',
    'play quizzes online',
    'GK quiz online',
    'current affairs quiz',
    'daily quiz',
    'general knowledge quiz',
    'science quiz',
    'online quiz platform',
    'earn money online',
    'earn money by playing quizzes',
    'quiz earn money app',
    'earn rewards online',
    'earn coins online',
    'redeem coins to cash',
    'real money earning app',
    'earn cash rewards',
    'online work from home',
    'online work earning',
    'online work without investment',
    'best online work platform',
    'online earning work',
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
    title: 'GyaanBucks - Play Quiz, Earn Rewards & Redeem Cash Online',
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
    title: 'GyaanBucks - Play Quiz, Earn Rewards & Redeem Cash Online',
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
      <body>
        {children}

        {/* Vignette */}
        <Script
          id="monetag-vignette"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(s){s.dataset.zone='10949601',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));`,
          }}
        />

        {/* In-Page Push */}
        <Script
          id="monetag-inpage"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        if (!window.location.pathname.includes('/quiz-play')) {
          (function(s){
            s.dataset.zone='10949633',
            s.src='https://nap5k.com/tag.min.js'
          })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));
        }
      `,
          }}
        />
      </body>
    </html>
  );
}
