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

  verification: {
    google: 'r8JWV6EQHqua6mVFE7yxPvIY_5lKo_2yqpBt3-pvHWs',
  },

  title: {
    default: 'GyaanBucks - Free Online Quizzes, GK Tests & Useful Calculators',
    template: '%s | GyaanBucks',
  },

  description:
    'Practice free online quizzes, GK questions, current affairs tests and useful calculators on GyaanBucks. Improve your knowledge with simple quiz and tool pages.',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  keywords: [
    'GyaanBucks',
    'free online quizzes',
    'GK quiz online',
    'general knowledge quiz',
    'current affairs quiz',
    'daily quiz questions',
    'online quiz test',
    'India GK quiz',
    'competitive exam quiz',
    'practice quiz online',
    'educational quiz website',
    'quiz questions and answers',
    'free online calculators',
    'age calculator',
    'percentage calculator',
    'student tools online',
  ],

  authors: [{ name: 'GyaanBucks', url: 'https://gyaanbucks.com' }],
  creator: 'GyaanBucks',
  publisher: 'GyaanBucks',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'GyaanBucks - Free Online Quizzes, GK Tests & Useful Calculators',
    description:
      'Play free quizzes, practice GK and use helpful calculators online on GyaanBucks.',
    url: '/',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GyaanBucks - Free Quiz & Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GyaanBucks - Free Online Quizzes & Calculators',
    description: 'Practice quizzes and use useful calculators online.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BK5J08XMEP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BK5J08XMEP');
          `}
        </Script>
      </body>
    </html>
  );
}
