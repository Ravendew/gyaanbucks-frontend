import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import LoveCalculatorClient from './LoveCalculatorClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Love Calculator - Calculate Love Compatibility Online',
  description:
    'Use the free GyaanBucks Love Calculator to check a fun love compatibility score by name. Get an animated love percentage, match message and shareable result.',
  keywords: [
    'love calculator',
    'true love calculator',
    'love meter',
    'love compatibility calculator',
    'love calculator by name',
    'love percentage calculator',
    'crush calculator',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com/tools/love-calculator',
  },
  openGraph: {
    title: 'Love Calculator - Calculate Love Compatibility Online',
    description:
      'Check a fun animated love compatibility score with names using the free GyaanBucks Love Calculator.',
    url: 'https://gyaanbucks.com/tools/love-calculator',
    siteName: 'GyaanBucks',
    type: 'website',
    images: [
      {
        url: 'https://gyaanbucks.com/og-love-calculator.png',
        width: 1200,
        height: 630,
        alt: 'Love Calculator by GyaanBucks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love Calculator - Calculate Love Compatibility Online',
    description:
      'Free fun love calculator with animated score, cute result message and share option.',
    images: ['https://gyaanbucks.com/og-love-calculator.png'],
  },
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Love Calculator',
  url: 'https://gyaanbucks.com/tools/love-calculator',
  applicationCategory: 'EntertainmentApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a love calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A love calculator is a fun entertainment tool that calculates a playful compatibility score between two names.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this love calculator real?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This calculator is for fun and entertainment only. It does not predict real relationships or guarantee compatibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the GyaanBucks love calculator work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It uses a simple name-based scoring method with stable calculation logic to generate a fun love percentage and result message.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I share my love calculator result?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can copy and share your result text with friends.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this love calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the GyaanBucks Love Calculator is free to use.',
      },
    },
  ],
};

export default function LoveCalculatorPage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Fun Compatibility Tool</p>
        <h1>Love Calculator</h1>
        <p>
          Enter two names and discover a fun animated love compatibility score.
          Get a cute match message, vibe breakdown and shareable result card.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="love-calculator-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <Script
        id="love-calculator-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LoveCalculatorClient />

      <div className={styles.contentBlock}>
        <p>
          You can also try our{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link> to know your
          exact age, or compare two people using{' '}
          <Link href="/tools/age-calculator/age-difference-calculator">
            Age Difference Calculator
          </Link>
          .
        </p>

        <p>
          Planning for a special day? Use our{' '}
          <Link href="/tools/age-calculator/days-until-calculator">
            Days Until Calculator
          </Link>{' '}
          to track upcoming events.
        </p>

        <p>
          Want to improve your knowledge daily? Explore our{' '}
          <Link href="/quizzes">Quizzes section</Link>.
        </p>
      </div>

      <section className={styles.contentBlock}>
        <h2>What is a Love Calculator?</h2>
        <p>
          A love calculator is a fun online tool that gives a playful
          compatibility score between two names. People usually use it with a
          partner name, crush name, friend name or a fictional pair just for
          entertainment. The GyaanBucks Love Calculator is designed with a clean
          animated interface, a glowing score meter and a simple shareable
          result so users can enjoy the experience on mobile and desktop.
        </p>

        <p>
          This tool is not a real relationship prediction system. It does not
          read emotions, future events or personal compatibility in a scientific
          way. Instead, it uses a stable name-based calculation to create a fun
          result. The same two names will give the same result, which makes it
          easy to share and compare with friends.
        </p>

        <h2>How to Use the Love Calculator</h2>
        <p>
          Using this calculator is simple. Enter your name in the first box and
          enter the other person’s name in the second box. Then click the
          calculate button. The tool will create a love percentage, show a match
          title and display three mini scores for communication, trust and fun
          vibe. These mini scores make the result more interesting than a normal
          one-number calculator.
        </p>

        <p>
          After the result appears, you can copy the result text and share it
          with friends. This makes the calculator useful for social sharing, fun
          conversations and casual entertainment. It is especially suitable for
          youth audiences who enjoy quick, playful and mobile-friendly
          interactive tools.
        </p>

        <h2>Why This Love Calculator Feels Different</h2>
        <p>
          Many love calculators show only a basic percentage. This page is built
          to feel more premium. It includes a bright animated result card,
          floating heart effects, a circular-style score presentation and a
          short message based on the compatibility range. Instead of feeling
          like a plain form, it feels like a mini interactive experience.
        </p>

        <p>
          The logic is also designed to be stable. Random results can feel fake
          because the number changes every time. Here, the names are converted
          into a score using a repeatable method. This means the same pair of
          names should show the same kind of result whenever you calculate it.
          That makes the experience more consistent and share-friendly.
        </p>

        <h2>Love Calculator by Name</h2>
        <p>
          This main calculator focuses on name-based compatibility. Name-based
          calculators are popular because they are quick and easy. You do not
          need to enter private details, phone numbers or account information.
          You only enter two names and get a fun result instantly.
        </p>

        <p>
          A name-based love percentage should always be understood as
          entertainment. Real relationships depend on communication, respect,
          trust, timing, maturity, shared values and emotional understanding. No
          online calculator can replace real-life connection. This tool is
          created only to make the experience fun and engaging.
        </p>

        <h2>Best Uses of This Tool</h2>
        <p>
          You can use this calculator for a crush, partner, best friend,
          celebrity pair, fictional characters or just for fun with classmates
          and friends. It can also be used as a light-hearted party activity or
          social media sharing idea. Because the page works directly in the
          browser, users can open it quickly without installing an app.
        </p>

        <p>
          The best way to use the result is to treat it as a fun conversation
          starter. A high score can make people smile, and a lower score can
          become a joke among friends. It should never be used to make serious
          relationship decisions.
        </p>

        <h2>Upcoming Love Calculator Tools</h2>
        <p>
          This is the main Love Calculator page in the GyaanBucks love tools
          cluster. Next, we can add focused tools like{' '}
          <Link href="/tools/love-calculator/true-love-calculator">
            True Love Calculator
          </Link>
          ,{' '}
          <Link href="/tools/love-calculator/love-calculator-by-date-of-birth">
            Love Calculator by Date of Birth
          </Link>
          , <Link href="/tools/love-calculator/love-meter">Love Meter</Link> and{' '}
          <Link href="/tools/love-calculator/zodiac-compatibility-calculator">
            Zodiac Compatibility Calculator
          </Link>
          . Each page should have different logic and a different user intent.
        </p>

        <p>
          You can also explore other useful learning tools from the{' '}
          <Link href="/tools">GyaanBucks tools page</Link> or practice general
          knowledge from the <Link href="/quizzes">quizzes section</Link>.
        </p>

        <h2>Important Disclaimer</h2>
        <p>
          The GyaanBucks Love Calculator is made for fun, entertainment and
          casual sharing only. It does not provide relationship advice,
          astrology advice, counselling or scientific compatibility analysis.
          Always treat the score as a playful result, not a final truth about
          any person or relationship.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>Love Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>Is this love calculator accurate?</h3>
          <p>
            It is accurate only as a fun name-based calculation. It should not
            be treated as a real relationship prediction.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does the same name pair give the same result?</h3>
          <p>
            Yes, this calculator uses stable logic, so the same pair of names
            should produce a consistent result.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can I use this for my crush name?</h3>
          <p>
            Yes, you can use it for a crush, partner, friend or any fun name
            pair.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does this calculator need date of birth?</h3>
          <p>
            No, this main love calculator works with names. A separate date of
            birth love calculator can be created as a focused subpage.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this tool free?</h3>
          <p>Yes, it is free to use on GyaanBucks.</p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
