import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import AgeInDaysClient from './AgeInDaysClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Age in Days Calculator - How Many Days Old Am I?',
  description:
    'Use the free Age in Days Calculator to find how many days old you are from your date of birth. Calculate total days lived, weeks, months and exact age.',
  keywords: [
    'how old am i calculator',
    'how many days old am i',
    'calculate age in days',
    'days old calculator',
    'age at date',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com/tools/age-calculator/age-in-days',
  },
  openGraph: {
    title: 'Age in Days Calculator - How Many Days Old Am I?',
    description:
      'Find your total days lived from date of birth using the GyaanBucks Age in Days Calculator.',
    url: 'https://gyaanbucks.com/tools/age-calculator/age-in-days',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age in Days Calculator - How Many Days Old Am I?',
    description:
      'Calculate how many days old you are with a free educational age tool.',
  },
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age in Days Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator/age-in-days',
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
      name: 'What is an age in days calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An age in days calculator shows how many total days you have lived from your date of birth to today.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate how many days old I am?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter your date of birth and the tool calculates the number of days between your birth date and today.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator show weeks and months too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it shows total days, approximate weeks, approximate months and exact age format.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is age in days exact?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The total days value is exact based on the selected date of birth and today’s date.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this tool free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the GyaanBucks Age in Days Calculator is free for educational and general use.',
      },
    },
  ],
};

export default function AgeInDaysPage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Days Lived Calculator</p>
        <h1>Age in Days Calculator</h1>
        <p>
          Find out how many days old you are from your date of birth. This tool
          calculates total days lived, approximate weeks, approximate months and
          your exact age format.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="age-in-days-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <Script
        id="age-in-days-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <AgeInDaysClient />

      <div className={styles.contentBlock}>
        <p>
          You can also calculate your full age using our{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link>.
        </p>

        <p>
          Want to know your exact birth-based calculation? Try{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>
          .
        </p>

        <p>
          Compare ages between two people using{' '}
          <Link href="/tools/age-calculator/age-difference-calculator">
            Age Difference Calculator
          </Link>
          .
        </p>

        <p>
          For a fun compatibility check, use our{' '}
          <Link href="/tools/love-calculator">Love Calculator</Link>.
        </p>
      </div>

      <section className={styles.contentBlock}>
        <h2>What is an Age in Days Calculator?</h2>
        <p>
          An Age in Days Calculator is a simple online tool that converts your
          date of birth into the total number of days you have lived. Most
          people usually think about age in years, but age can also be
          understood in days, weeks and months. This page is created for users
          who specifically want to know the answer to questions like “how many
          days old am I?” or “how many days have I lived from my birth date?”
        </p>

        <p>
          The GyaanBucks Age in Days Calculator takes your date of birth and
          compares it with today’s date. It then calculates the total number of
          calendar days between those two dates. Along with total days, it also
          shows approximate weeks, approximate months and the usual exact age
          format in years, months and days. This makes the tool useful for both
          curiosity and learning.
        </p>

        <h2>How Many Days Old Am I?</h2>
        <p>
          To find how many days old you are, select your date of birth in the
          calculator and press the calculate button. The tool will instantly
          show your total days lived. This is different from a normal age
          calculator because the main result is not years or months. The main
          result is the exact number of days from your birth date to today.
        </p>

        <p>
          For example, a person may say they are 18 years old, but the number of
          days lived is much larger and more detailed. Seeing your age in days
          can make the concept of time more meaningful. It also helps students
          understand how date differences work in a practical way.
        </p>

        <h2>Age in Days vs Exact Age Calculator</h2>
        <p>
          The regular <Link href="/tools/age-calculator">Age Calculator</Link>{' '}
          focuses on showing age in years, months and days. This Age in Days
          Calculator focuses on total days lived. Both tools are related, but
          their purpose is different. If you want a simple answer like “38
          years, 2 months and 28 days,” the main age calculator is better. If
          you want to know the total number of days, this page is the correct
          tool.
        </p>

        <p>
          This distinction is important for SEO and for user experience. A user
          searching “age calculator” may want a general age result. A user
          searching “age in days calculator” clearly wants the total day count.
          That is why GyaanBucks keeps these tools separate with different
          calculation focus and different explanations.
        </p>

        <h2>Why Calculate Age in Days?</h2>
        <p>
          Calculating age in days is useful for learning, curiosity, birthday
          tracking, life milestones and simple date mathematics. Some users like
          to know when they complete 5,000 days, 10,000 days or 15,000 days of
          life. Students can also use this tool to understand how years are made
          of days and why leap years affect long date differences.
        </p>

        <p>
          In educational terms, this calculator helps users understand time
          intervals. A year may have 365 or 366 days depending on leap year. A
          month may have 28, 29, 30 or 31 days. When we count total days from a
          date of birth, all these calendar differences are included in the
          result. That is why using a calculator is easier than manual counting.
        </p>

        <h2>Who Can Use This Tool?</h2>
        <p>
          Anyone can use this Age in Days Calculator. Students can use it for
          learning date calculations. Parents can use it for children’s age
          milestones. Teachers can use it as a classroom example. General users
          can use it for curiosity or personal tracking. The tool is completely
          free and works directly in the browser.
        </p>

        <p>
          If you want to calculate age from DOB as on a specific date, use the{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>
          . If you want to explore all educational utilities, visit the{' '}
          <Link href="/tools">free learning tools page</Link>. GyaanBucks tools
          are designed to support quizzes, knowledge improvement and practical
          learning.
        </p>

        <h2>Important Note About Approximate Weeks and Months</h2>
        <p>
          The total days result is the main exact result on this page. Weeks are
          calculated by dividing total days by seven. Approximate months are
          calculated using an average month length. Since real months have
          different lengths, the month value is shown as an approximation. For
          official age requirements, always use years, months and days or an
          official cut-off based calculator.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>Age in Days Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>How can I know how many days old I am?</h3>
          <p>
            Enter your date of birth and press calculate. The tool will show the
            total number of days you have lived.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is the total days result exact?</h3>
          <p>
            Yes, the total days value is calculated from your date of birth to
            today.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Why are months shown as approximate?</h3>
          <p>
            Months have different lengths, so approximate months are calculated
            using average month length.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can students use this tool?</h3>
          <p>
            Yes, it is useful for students learning date difference and time
            calculation.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this calculator free?</h3>
          <p>Yes, the Age in Days Calculator is free to use on GyaanBucks.</p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
