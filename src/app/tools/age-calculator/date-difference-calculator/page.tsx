import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import DateDifferenceClient from './DateDifferenceClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Date Difference Calculator - Days Between Two Dates',
  description:
    'Use the free Date Difference Calculator to calculate the difference between two dates in years, months, days, total days and weeks.',
  keywords: [
    'date difference calculator',
    'days between two dates',
    'calculate date difference',
    'calculate days between two dates online',
    'difference between dates',
  ],
  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/date-difference-calculator',
  },
  openGraph: {
    title: 'Date Difference Calculator - Days Between Two Dates',
    description:
      'Calculate the exact difference between two dates using the free GyaanBucks Date Difference Calculator.',
    url: 'https://gyaanbucks.com/tools/age-calculator/date-difference-calculator',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Date Difference Calculator - Days Between Two Dates',
    description:
      'Find the date gap in years, months, days, total days and completed weeks.',
  },
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Date Difference Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator/date-difference-calculator',
  applicationCategory: 'EducationalApplication',
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
      name: 'What is a date difference calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A date difference calculator finds the exact gap between two calendar dates in years, months, days and total days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I calculate days between two dates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, enter a start date and end date to calculate total days between them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this different from age difference calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, date difference can compare any two calendar dates, while age difference usually compares two dates of birth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator show completed weeks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it shows total days, completed weeks and remaining days after weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this date difference calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this GyaanBucks educational date calculator is free to use.',
      },
    },
  ],
};

export default function DateDifferencePage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Date Gap Learning Tool</p>
        <h1>Date Difference Calculator</h1>
        <p>
          Calculate the difference between two calendar dates in years, months,
          days, total days and completed weeks. Useful for events, deadlines,
          study plans and project timelines.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="date-difference-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <Script
        id="date-difference-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <DateDifferenceClient />

      <div className={styles.contentBlock}>
        <p>
          You can calculate your age using our{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link>.
        </p>

        <p>
          Want to track future events? Try{' '}
          <Link href="/tools/age-calculator/days-until-calculator">
            Days Until Calculator
          </Link>
          .
        </p>

        <p>
          Need to compare two ages? Use{' '}
          <Link href="/tools/age-calculator/age-difference-calculator">
            Age Difference Calculator
          </Link>
          .
        </p>

        <p>
          For fun compatibility, check our{' '}
          <Link href="/tools/love-calculator">Love Calculator</Link>.
        </p>
      </div>

      <section className={styles.contentBlock}>
        <h2>What is a Date Difference Calculator?</h2>
        <p>
          A Date Difference Calculator is an online tool that calculates the gap
          between two calendar dates. It helps you find how much time exists
          between a start date and an end date. The result can be shown in
          years, months, days, total days and completed weeks. This page is made
          for users who want to compare any two dates, not only dates of birth.
        </p>

        <p>
          Date difference calculation is useful in daily life, education,
          planning and record keeping. You may want to know how many days are
          between two events, how long a project took, how many days are left
          between two study milestones or how much time passed between two
          important dates. Instead of manually counting on a calendar, this tool
          gives a clean result instantly.
        </p>

        <h2>How to Calculate the Difference Between Two Dates</h2>
        <p>
          To calculate the difference between two dates, enter the start date
          and the end date. The calculator compares both dates and calculates
          the completed years first. After that, it calculates the remaining
          months and days. It also calculates total days, completed weeks and
          remaining days after weeks. This gives both a human-friendly result
          and a numeric result.
        </p>

        <p>
          For example, if you compare two dates that are several months apart,
          the total days result may be more useful for deadlines. But if you are
          comparing two dates that are years apart, the years-months-days result
          may be easier to understand. That is why this tool shows both formats.
        </p>

        <h2>Date Difference vs Age Difference</h2>
        <p>
          Date difference and age difference are related, but the intent is
          different. The{' '}
          <Link href="/tools/age-calculator/age-difference-calculator">
            Age Difference Calculator
          </Link>{' '}
          compares two dates of birth and shows the age gap between two people.
          This Date Difference Calculator compares any two calendar dates. You
          can use it for events, deadlines, exam preparation plans, project
          durations, travel dates or personal milestones.
        </p>

        <p>
          If you want to know your age from date of birth, use the{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link>. If you want
          to calculate age as on a selected date, use the{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>
          . If your main question is “how many days old am I?”, use the{' '}
          <Link href="/tools/age-calculator/age-in-days">
            Age in Days Calculator
          </Link>
          .
        </p>

        <h2>Where This Tool is Useful</h2>
        <p>
          This calculator can be used for study planning, assignment timelines,
          project schedules, event planning, travel date checks, countdown
          comparisons and general learning. Students can use it to understand
          how time intervals work. Teachers can use it as a classroom example
          for calendar arithmetic. General users can use it whenever they need a
          quick gap between two dates.
        </p>

        <p>
          The tool also helps users avoid confusion between total days and
          calendar months. A month is not always 30 days. Some months have 31
          days, February has 28 days in common years and 29 days in leap years.
          Date calculations become more accurate when handled by a proper date
          difference tool.
        </p>

        <h2>Learning Value of Date Difference</h2>
        <p>
          GyaanBucks focuses on quizzes, learning tools, knowledge improvement
          and practical calculation utilities. This date calculator supports
          that goal by turning calendar logic into an easy learning experience.
          By seeing the result in different formats, users can understand how
          time can be measured in multiple ways.
        </p>

        <p>
          For official or legal use, always verify final date rules from the
          relevant authority. This calculator is designed for educational and
          general planning use. It gives a helpful date interval result, but
          institutions may use special inclusion rules for start and end dates.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>Date Difference Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>Can I calculate days between two dates?</h3>
          <p>
            Yes, enter any two dates and the calculator shows total days between
            them.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does it work if I enter dates in reverse order?</h3>
          <p>
            Yes, the calculator reverses dates internally and shows the
            difference clearly.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does this show years, months and days?</h3>
          <p>
            Yes, it shows the date gap in years, months, days, total days and
            weeks.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this the same as age difference?</h3>
          <p>
            No. Age difference compares two birth dates. Date difference can
            compare any two calendar dates.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this tool free?</h3>
          <p>Yes, this Date Difference Calculator is free on GyaanBucks.</p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
