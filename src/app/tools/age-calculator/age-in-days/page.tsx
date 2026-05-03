import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AgeInDaysClient from './AgeInDaysClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Age in Days Calculator - Calculate Days Lived Online',
  description:
    'Use the Age in Days Calculator to find your total age in days, weeks, months and years from your date of birth. Free online days lived calculator.',

  keywords: [
    'age in days calculator',
    'days lived calculator',
    'calculate age in days',
    'how many days old am i',
    'date of birth to days calculator',
    'total days lived calculator',
  ],

  alternates: {
    canonical: 'https://gyaanbucks.com/tools/age-calculator/age-in-days',
  },

  openGraph: {
    title: 'Age in Days Calculator - Calculate Days Lived Online',
    description:
      'Find how many days you have lived using this free Age in Days Calculator.',
    url: 'https://gyaanbucks.com/tools/age-calculator/age-in-days',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Age in Days Calculator',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Age in Days Calculator - Calculate Days Lived Online',
    description:
      'Calculate your total days lived from date of birth instantly.',
    images: ['/og-image.png'],
  },
};

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age Difference Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator/age-difference-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description:
    'Free online age difference calculator to compare two ages or dates in years, months and days.',
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
      name: 'How to calculate age in days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter your date of birth and select the date up to which you want to calculate. The calculator shows your total age in days instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I calculate total days from date of birth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this tool calculates total days from your date of birth along with weeks, hours, minutes and seconds.',
      },
    },
  ],
};

const relatedTools = [
  {
    title: 'Age Calculator',
    text: 'Calculate age in years, months and days.',
    href: '/tools/age-calculator',
  },
  {
    title: 'Percentage Calculator',
    text: 'Calculate percentage, marks and discounts.',
    href: '/tools/percentage-calculator',
  },
  {
    title: 'Free Tools',
    text: 'Explore all free calculators and tools.',
    href: '/tools',
  },
];

export default function AgeInDaysPage() {
  return (
    <>
      <Script
        id="age-days-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />

      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.kicker}>Free Tool</span>
            <h1 className={styles.title}>Age in Days Calculator</h1>
            <p className={styles.subtitle}>
              Calculate your exact age in total days, weeks, hours, minutes and
              seconds from your date of birth instantly.
            </p>
          </div>
        </section>

        <AgeInDaysClient />

        <section className={styles.moreToolsSection}>
          <div className={styles.moreToolsHeader}>
            <h2>Related Tools</h2>
            <p>Use more free calculators from GyaanBucks.</p>
          </div>

          <div className={styles.toolsGrid}>
            {relatedTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className={styles.toolCard}
              >
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
                <span>Open Tool →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <h2>What is Age in Days Calculator?</h2>
            <p>
              An age in days calculator helps you calculate the total number of
              days you have lived from your date of birth. Instead of only
              showing age in years and months, this tool gives detailed age
              results in days, weeks, hours, minutes and seconds.
            </p>

            <p>
              This calculator is useful when you want to count age from date of
              birth, check total days from birth, or understand your exact age
              in a detailed time format. It is helpful for students, fitness
              goals, personal milestones and date-based calculations.
            </p>

            <h2>How to Calculate Age in Days?</h2>
            <p>
              Select your birth month, day and year. Then select the date up to
              which you want to calculate your age. After clicking Calculate
              Age, the tool shows your full age details including total days,
              weeks, hours, minutes and seconds.
            </p>

            <h2>Why Use This Age in Days Calculator?</h2>
            <p>
              Manual day counting can be difficult because months have different
              numbers of days and leap years can affect the result. This age in
              days calculator makes the process simple and gives quick results
              without manual calculation.
            </p>

            <h2>More Age Tools</h2>
            <p>
              You can also use the main{' '}
              <Link href="/tools/age-calculator">Age Calculator</Link> to find
              age in years, months and days. For other calculations, explore all{' '}
              <Link href="/tools">free online tools</Link> on GyaanBucks.
            </p>

            <div className={styles.contentCta}>
              <Link href="/tools/age-calculator">Back to Age Calculator</Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2>Frequently Asked Questions</h2>

            <div className={styles.faqItem}>
              <h3>How to calculate age in days?</h3>
              <p>
                Enter your date of birth and select the target date. The tool
                will calculate your total age in days instantly.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I calculate total days from date of birth?</h3>
              <p>
                Yes, this calculator shows total days from birth along with
                weeks, hours, minutes and seconds.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Is this age in days calculator free?</h3>
              <p>Yes, this tool is completely free to use on GyaanBucks.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
