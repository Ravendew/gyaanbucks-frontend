import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import AnalyticsBlocker from '@/components/AnalyticsBlocker/AnalyticsBlocker';
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AnalyticsBlocker />

        {children}

        {/* Google AdSense Verification */}
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8704654190887620"
        />

        {/* Google Analytics */}
        <Script
          id="google-analytics-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var isInternalUser = false;

                try {
                  isInternalUser = localStorage.getItem('gb_internal_user') === 'true';
                } catch (error) {
                  isInternalUser = false;
                }

                if (isInternalUser) {
                  window['ga-disable-G-BK5J08XMEP'] = true;
                  return;
                }

                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BK5J08XMEP';
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;

                gtag('js', new Date());
                gtag('config', 'G-BK5J08XMEP');
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
