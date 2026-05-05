import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import AgeCalculatorClient from './AgeCalculatorClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Age Calculator - Calculate Exact Age by Date of Birth',
  description:
    'Use the free GyaanBucks Age Calculator to calculate your exact age from date of birth in years, months and days. Simple age calculation tool for students, forms and exams.',
  keywords: [
    'age calculator',
    'calculate age from date of birth',
    'dob age calculator',
    'birthday age calculator',
    'how old am i calculator',
    'age calculator online',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com/tools/age-calculator',
  },
  openGraph: {
    title: 'Age Calculator - Calculate Exact Age by Date of Birth',
    description:
      'Calculate exact age in years, months and days using the free GyaanBucks Age Calculator.',
    url: 'https://gyaanbucks.com/tools/age-calculator',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator - Calculate Exact Age by Date of Birth',
    description:
      'Free online age calculator for students, forms, exams and general learning use.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an age calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An age calculator is an online tool that calculates exact age from a date of birth in years, months and days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does this age calculator work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This tool compares your selected date of birth with the current date and calculates the completed years, months, days and total days lived.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this age calculator for exam forms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use it to understand your exact age, but always verify official exam eligibility from the official notification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the GyaanBucks age calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the GyaanBucks age calculator is free to use for students, parents and general users.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator show age in days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, along with years, months and days, it also shows the approximate total number of days lived.',
      },
    },
  ],
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
};

export default function AgeCalculatorPage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Free Learning Tool</p>
        <h1>Age Calculator</h1>
        <p>
          Calculate your exact age from date of birth in years, months and days.
          This simple educational calculator is useful for students, parents,
          forms, applications and exam age checks.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="age-calculator-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <Script
        id="age-calculator-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AgeCalculatorClient />

      <div className={styles.contentBlock}>
        <p>
          Try our fun <Link href="/tools/love-calculator">Love Calculator</Link>{' '}
          to check compatibility between two names.
        </p>

        <p>
          You can also calculate specific details using{' '}
          <Link href="/tools/age-calculator/age-in-days">Age in Days</Link> or{' '}
          <Link href="/tools/age-calculator/age-by-dob">Age by DOB</Link>.
        </p>
      </div>
      <section className={styles.contentBlock}>
        <h2>What is an Age Calculator?</h2>
        <p>
          An age calculator is a simple online tool that helps you calculate
          your exact age from your date of birth. Instead of manually counting
          years, months and days on a calendar, you can enter your birth date
          and instantly see your completed age. The GyaanBucks Age Calculator is
          designed mainly for students, learners, parents and anyone who needs a
          quick age calculation for educational or general use.
        </p>

        <p>
          Age looks simple when we say “I am 18 years old” or “I am 25 years
          old”, but many forms and eligibility checks need exact age. For
          example, school admission forms, exam applications, job forms,
          training programs, sports registrations and scholarship forms may ask
          for age as of a particular date. This calculator helps you understand
          the basic age calculation clearly, so you can avoid confusion while
          filling important forms.
        </p>

        <h2>How to Use this Age Calculator</h2>
        <p>
          Using this tool is easy. Select your date of birth in the date input
          box. The calculator will compare your date of birth with today’s date
          and show your age in completed years, remaining months and remaining
          days. It also shows approximate total days lived, which is useful for
          learning and curiosity.
        </p>

        <p>
          For example, if a person was born several years ago, the calculator
          first counts the completed years. Then it checks the remaining months
          after the last birthday. Finally, it calculates the remaining days
          after the last completed month. This is why exact age is more accurate
          than simply subtracting birth year from current year.
        </p>

        <h2>Why Exact Age Matters</h2>
        <p>
          Exact age matters in many real situations. Students may need it for
          admission eligibility. Competitive exam applicants may need it to
          check whether they meet the official age limit. Parents may need it
          while checking school admission age. Even for general documents, exact
          age helps avoid mistakes.
        </p>

        <p>
          A common mistake is calculating age only by year. If someone was born
          in 2008 and the current year is 2026, we may quickly say the person is
          18. But if their birthday has not arrived yet this year, their
          completed age may still be 17. This difference is important when an
          application has strict age rules.
        </p>

        <h2>Age Calculator for Students and Learning</h2>
        <p>
          GyaanBucks is focused on quizzes, learning tools, knowledge
          improvement and progress tracking. This age calculator is part of that
          learning utility system. Students can use it not only for practical
          needs but also to understand how date-based calculations work.
        </p>

        <p>
          Date calculations are useful in many areas of learning. They improve
          logical thinking, calendar understanding and basic mathematical
          reasoning. When learners see age broken into years, months and days,
          they can better understand how time intervals are calculated in daily
          life.
        </p>

        <h2>Related Learning Tools</h2>
        <p>
          After using this age calculator, you can also explore related
          GyaanBucks tools based on your need. If you want a more specific date
          of birth based tool, use the{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>
          . If you want to know how many days old you are, use the{' '}
          <Link href="/tools/age-calculator/age-in-days">
            Age in Days Calculator
          </Link>
          . For marks and score calculations, visit the{' '}
          <Link href="/tools/percentage-calculator">Percentage Calculator</Link>
          .
        </p>

        <p>
          You can also visit the <Link href="/tools">main tools page</Link> to
          explore all educational calculators. These tools are built to support
          learning, not shortcuts. They help users understand numbers, dates,
          percentages and eligibility calculations in a simple way.
        </p>

        <h2>Important Note</h2>
        <p>
          This calculator is useful for quick age calculation, but official
          eligibility decisions should always be verified from official
          documents, notifications or institution rules. For exams like UPSC,
          SSC, school admission or retirement age checks, the official
          notification may mention a specific cut-off date. In such cases, you
          should use the relevant dedicated calculator and also confirm the
          final rule from the official source.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>Age Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>What is an age calculator?</h3>
          <p>
            It is a tool that calculates exact age from date of birth in years,
            months and days.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this age calculator accurate?</h3>
          <p>
            Yes, it calculates completed years, months and days based on your
            selected date of birth and today’s date.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can I use it for school admission?</h3>
          <p>
            Yes, you can use it for basic age checking. For final admission,
            always follow the school’s official age rule.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can I use it for UPSC or SSC age checking?</h3>
          <p>
            You can use it for general age calculation. For exam-specific
            limits, use dedicated UPSC or SSC age calculator pages and verify
            official notifications.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does it show total days lived?</h3>
          <p>
            Yes, it shows an approximate total number of days lived from your
            date of birth to today.
          </p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
