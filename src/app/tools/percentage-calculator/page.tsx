import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PercentageCalculatorClient from './PercentageCalculatorClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Percentage Calculator - Calculate Percentages Easily Online',
  description:
    'Use the Percentage Calculator to calculate percentages, increases, decreases, discounts and value changes instantly. Free online percentage tool for students and daily use.',

  keywords: [
    'percentage calculator',
    'calculate percentage online',
    'percentage increase calculator',
    'percentage decrease calculator',
    'discount calculator',
    'percentage formula calculator',
  ],

  alternates: {
    canonical: 'https://gyaanbucks.com/tools/percentage-calculator',
  },

  openGraph: {
    title: 'Percentage Calculator - Calculate Percentages Easily',
    description:
      'Calculate percentages, discounts, increases and decreases instantly with this free tool.',
    url: 'https://gyaanbucks.com/tools/percentage-calculator',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Percentage Calculator',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Percentage Calculator - Calculate Percentages Easily',
    description: 'Find percentages, discounts and value changes instantly.',
    images: ['/og-image.png'],
  },
};

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Percentage Calculator',
  url: 'https://gyaanbucks.com/tools/percentage-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  description:
    'Free online percentage calculator to calculate percentage, marks percentage, discount percentage and percentage change.',
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
      name: 'What is a percentage calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A percentage calculator is an online tool that helps you calculate percentages quickly using simple values.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the percentage formula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The percentage formula is value divided by total multiplied by 100. For example, 450 divided by 500 multiplied by 100 equals 90%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to calculate marks percentage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate marks percentage, divide obtained marks by total marks and multiply the answer by 100.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to calculate percentage increase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Percentage increase is calculated by finding the increase amount, dividing it by the original value and multiplying by 100.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to calculate percentage difference?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Percentage difference is calculated by dividing the difference between two values by their average and multiplying by 100.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I calculate discount percentage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use this percentage calculator to calculate discount percentage, final price and savings.',
      },
    },
  ],
};

const moreTools = [
  {
    title: 'Age Calculator',
    text: 'Calculate exact age from date of birth.',
    href: '/tools/age-calculator',
  },
  {
    title: 'Age by Date of Birth',
    text: 'Find your exact age in years, months and days.',
    href: '/tools/age-calculator/age-by-dob',
  },
  {
    title: 'Age in Days Calculator',
    text: 'Calculate your total age in days, weeks and months.',
    href: '/tools/age-calculator/age-in-days',
  },
  {
    title: 'Age Difference Calculator',
    text: 'Compare age difference between two dates or people.',
    href: '/tools/age-calculator/age-difference-calculator',
  },
  {
    title: 'Date Difference Calculator',
    text: 'Find exact difference between two calendar dates.',
    href: '/tools/age-calculator/date-difference-calculator',
  },
  {
    title: 'Days Until Calculator',
    text: 'Count days remaining until any event or date.',
    href: '/tools/age-calculator/days-until-calculator',
  },
  {
    title: 'Percentage Calculator',
    text: 'Calculate percentages, discounts and value changes.',
    href: '/tools/percentage-calculator',
  },
];

export default function PercentageCalculatorPage() {
  return (
    <>
      <Script
        id="percentage-calculator-tool-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />

      <Script
        id="percentage-calculator-faq-schema"
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
            <h1 className={styles.title}>Percentage Calculator</h1>
            <p className={styles.subtitle}>
              Calculate percentages, marks percentage, discounts and percentage
              change easily using this free online percentage calculator.
            </p>
          </div>
        </section>

        <PercentageCalculatorClient />

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
            <h2>What is a Percentage Calculator?</h2>
            <p>
              A percentage calculator is a free online tool that helps you
              calculate percentage values quickly and accurately. You can use
              this percentage calculator online to find what percentage one
              number is of another number, calculate percentage of a number,
              find marks percentage, discount percentage, percentage increase
              and percentage difference.
            </p>

            <p>
              This tool also works as a percentage finder and find percentage
              calculator for students, shoppers, business users and anyone who
              needs quick calculations. Instead of using manual percentage
              formula every time, you can enter values and get instant results.
            </p>

            <h2>How to Use This Percentage Calculator?</h2>
            <p>
              Select the required percentage calculator section, enter the
              values and click Calculate. You can calculate basic percentage,
              marks percentage, discount percentage, percentage change,
              percentage increase and percentage difference from the same page.
            </p>

            <h2>Percentage Formula</h2>
            <p>
              The basic percentage formula is: percentage equals value divided
              by total, multiplied by 100. For example, if you scored 450 marks
              out of 500, your marks percentage is 90%. This formula is useful
              for exams, discounts, profit, loss and business calculations.
            </p>

            <h2>Why Use GyaanBucks Tools?</h2>
            <p>
              GyaanBucks provides free tools and quiz-based learning in one
              place. After using the calculator, you can play quizzes, improve
              your general knowledge and earn rewards online.
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
              <h3>What is the percentage formula?</h3>
              <p>
                The percentage formula is value divided by total multiplied by
                100. For example, 450 divided by 500 multiplied by 100 equals
                90%.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How to calculate marks percentage?</h3>
              <p>
                To calculate marks percentage, divide obtained marks by total
                marks and multiply the answer by 100.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How to calculate percentage increase?</h3>
              <p>
                Percentage increase is calculated by finding the increase
                amount, dividing it by the original value and multiplying by
                100.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How to calculate percentage difference?</h3>
              <p>
                Percentage difference is calculated by dividing the difference
                between two values by their average and multiplying by 100.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
