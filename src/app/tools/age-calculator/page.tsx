import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AgeCalculatorClient from './AgeCalculatorClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Age Calculator - Calculate Age by Date of Birth',
  description:
    'Use GyaanBucks free age calculator to calculate your exact age in years, months and days from date of birth. Simple online age calculator for India users.',
  keywords: [
    'age calculator',
    'age calculator india',
    'date of birth calculator',
    'dob calculator',
    'calculate age by date of birth',
    'free age calculator online',
    'earn money online quiz',
    'play quiz and earn money',
  ],
  alternates: {
    canonical: '/tools/age-calculator',
  },
};

const moreTools = [
  {
    title: 'EMI Calculator',
    text: 'Calculate monthly loan EMI and interest.',
    href: '/tools/emi-calculator',
  },
  {
    title: 'Percentage Calculator',
    text: 'Calculate percentage, marks and discounts.',
    href: '/tools/percentage-calculator',
  },
  {
    title: 'Salary Calculator',
    text: 'Estimate monthly and yearly salary.',
    href: '/tools/salary-calculator',
  },
  {
    title: 'GST Calculator',
    text: 'Calculate GST inclusive and exclusive values.',
    href: '/tools/gst-calculator',
  },
  {
    title: 'Time Calculator',
    text: 'Calculate time difference and duration.',
    href: '/tools/time-calculator',
  },
];

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  description:
    'Free online age calculator to calculate exact age in years, months and days from date of birth.',
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
      name: 'How is age calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Age is calculated by comparing your date of birth with the selected date. The result is shown in years, months and days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I calculate age for a past or future date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can select any date in the Age at the Date of section to calculate age at a specific point in time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this age calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this age calculator is completely free to use on GyaanBucks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this calculator on mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the age calculator works on mobile, tablet and desktop.',
      },
    },
  ],
};

export default function AgeCalculatorPage() {
  return (
    <>
      <Script
        id="age-calculator-tool-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />

      <Script
        id="age-calculator-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.kicker}>Free Tool</span>
            <h1 className={styles.title}>Age Calculator</h1>
            <p className={styles.subtitle}>
              Calculate your exact age in years, months and days using your date
              of birth. This free age calculator is simple, fast and useful for
              students, job applications, forms and daily use.
            </p>
          </div>
        </section>

        <AgeCalculatorClient />

        <section className={styles.moreToolsSection}>
          <div className={styles.moreToolsHeader}>
            <h2>More Free Tools</h2>
            <p>Explore more useful calculators and tools.</p>
          </div>

          <div className={styles.toolsGrid}>
            {moreTools.map((tool) => (
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
            <h2>What is an Age Calculator?</h2>
            <p>
              An age calculator is a simple online tool that helps you calculate
              your exact age from your date of birth. Instead of manually
              counting years, months and days, you can enter your birth date and
              instantly know your current age.
            </p>

            <p>
              The GyaanBucks age calculator is useful for school forms, college
              applications, job applications, government forms, competitive
              exams and personal records. It works on mobile, tablet and
              desktop.
            </p>

            <h2>How to Use This Age Calculator?</h2>
            <p>
              Select your birth month, day and year. Then select the date on
              which you want to calculate your age and click Calculate Age. The
              tool will show your exact age in years, months and days.
            </p>

            <h2>Why Use GyaanBucks Tools?</h2>
            <p>
              GyaanBucks provides useful free tools and quiz-based learning in
              one place. After calculating your age, you can play quizzes,
              improve your general knowledge and earn rewards online.
            </p>

            <div className={styles.contentCta}>
              <Link href="/quizzes">Play Quiz & Earn Money</Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2>Frequently Asked Questions</h2>

            <div className={styles.faqItem}>
              <h3>How is age calculated?</h3>
              <p>
                Age is calculated by comparing your date of birth with the
                selected date. The result is shown in years, months and days.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I calculate age for a past or future date?</h3>
              <p>
                Yes, you can select any date in the Age at the Date of section
                to calculate age at a specific point in time.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Is this age calculator free?</h3>
              <p>
                Yes, this age calculator is completely free to use on
                GyaanBucks.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I use this calculator on mobile?</h3>
              <p>
                Yes, the age calculator works perfectly on mobile, tablet and
                desktop.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
