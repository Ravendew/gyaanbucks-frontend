import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import AgeDifferenceClient from './AgeDifferenceClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Age Difference Calculator - Compare Two Ages Online',
  description:
    'Use the free Age Difference Calculator to compare two dates of birth and find the exact age gap in years, months, days and total days.',
  keywords: [
    'age difference calculator',
    'acceptable age gap calculator',
    'age gap calculator',
    'age difference calculator for marriage',
    'age difference calculator online',
  ],
  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/age-difference-calculator',
  },
  openGraph: {
    title: 'Age Difference Calculator - Compare Two Ages Online',
    description:
      'Compare two dates of birth and calculate the exact age difference using GyaanBucks.',
    url: 'https://gyaanbucks.com/tools/age-calculator/age-difference-calculator',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Difference Calculator - Compare Two Ages Online',
    description:
      'Find the age gap between two people in years, months, days and total days.',
  },
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age Difference Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator/age-difference-calculator',
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
      name: 'What is an age difference calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An age difference calculator compares two dates of birth and shows the exact age gap in years, months and days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I compare two ages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter both dates of birth and the calculator will show who is older and the exact age difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator show total days difference?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it shows the total difference in days along with years, months and days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use it for siblings or friends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can compare the age gap between siblings, friends, classmates or any two people.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this age difference calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this GyaanBucks educational tool is free to use.',
      },
    },
  ],
};

export default function AgeDifferencePage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Age Gap Comparison Tool</p>
        <h1>Age Difference Calculator</h1>
        <p>
          Compare two dates of birth and find the exact age difference in years,
          months, days and total days. Useful for siblings, friends, classmates
          and general date comparison.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="age-difference-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <Script
        id="age-difference-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <AgeDifferenceClient />

      <div className={styles.contentBlock}>
        <p>
          You can calculate your individual age using our{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link>.
        </p>

        <p>
          Need a more detailed breakdown? Try{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>
          .
        </p>

        <p>
          Want to know total days lived? Use{' '}
          <Link href="/tools/age-calculator/age-in-days">
            Age in Days Calculator
          </Link>
          .
        </p>

        <p>
          For a fun result, try our{' '}
          <Link href="/tools/love-calculator">Love Calculator</Link>.
        </p>
      </div>

      <section className={styles.contentBlock}>
        <h2>What is an Age Difference Calculator?</h2>
        <p>
          An Age Difference Calculator is a tool that compares two dates of
          birth and finds the exact age gap between two people. Instead of
          calculating each person’s age separately and then trying to compare
          the results, this tool directly calculates the difference between the
          two birth dates. The result is shown in years, months, days and total
          days, so it is easier to understand the real gap.
        </p>

        <p>
          This page has a different purpose from a normal age calculator. A
          regular age calculator answers “How old am I today?” while this page
          answers “What is the age difference between two people?” That makes it
          useful for comparing siblings, friends, classmates, family members or
          any two dates of birth.
        </p>

        <h2>How to Use the Age Difference Calculator</h2>
        <p>
          To use this calculator, enter the first person’s date of birth and the
          second person’s date of birth. After that, press the compare button.
          The calculator checks which date is earlier, identifies who is older
          and calculates the difference between the two dates. The result is
          displayed as completed years, remaining months and remaining days.
        </p>

        <p>
          For example, if one person was born in 2000 and another person was
          born in 2005, the age gap may look like five years at first. But if
          their birth months and birth days are different, the exact difference
          may be four years, several months and some days. This calculator
          handles that exact date logic automatically.
        </p>

        <h2>Why Age Difference Calculation is Useful</h2>
        <p>
          Age difference calculation is useful in many everyday situations.
          Parents may want to know the exact gap between children. Students may
          compare age gaps among classmates. Families may use it for records or
          curiosity. Teachers can also use this type of tool as a practical
          example for date difference learning.
        </p>

        <p>
          The tool also helps users understand that age comparison is not just
          about subtracting years. Month and day positions matter. If two people
          are born in different months of the same year, they do not have zero
          age gap. Their exact difference may be several months and days.
        </p>

        <h2>Age Difference vs Date Difference</h2>
        <p>
          Age difference and date difference are related but not exactly the
          same user intent. Age difference usually compares two people’s dates
          of birth. Date difference can compare any two dates, such as the gap
          between two events, two deadlines or two calendar days. For that
          purpose, you can use the upcoming Date Difference Calculator.
        </p>

        <p>
          If you want to calculate your age from your own birth date, visit the{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link>. If you want
          to calculate age as on a selected date, visit the{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>
          . If your main focus is total days lived, use the{' '}
          <Link href="/tools/age-calculator/age-in-days">
            Age in Days Calculator
          </Link>
          .
        </p>

        <h2>Learning Value of Comparing Two Ages</h2>
        <p>
          GyaanBucks focuses on quizzes, learning tools, knowledge improvement
          and practical progress tracking. This calculator supports learning by
          showing how date comparison works in real life. Students can observe
          how years, months and days are borrowed and adjusted while comparing
          two dates.
        </p>

        <p>
          This kind of practical calculation improves calendar understanding and
          logical thinking. It also helps users avoid rough age gap assumptions.
          A clean age difference result is easier to understand, share and use
          for personal reference.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>Age Difference Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>What does this age difference calculator do?</h3>
          <p>
            It compares two dates of birth and shows the exact age gap in years,
            months and days.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can it tell who is older?</h3>
          <p>
            Yes, it identifies which person is older based on the earlier date
            of birth.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does it show total days difference?</h3>
          <p>
            Yes, it also shows the total number of days between the two dates of
            birth.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this different from the date difference calculator?</h3>
          <p>
            Yes. This page is specifically for comparing two ages or dates of
            birth, while date difference can compare any two calendar dates.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is it free?</h3>
          <p>Yes, the Age Difference Calculator is free on GyaanBucks.</p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
