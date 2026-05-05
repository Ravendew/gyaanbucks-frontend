import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import AgeByDobClient from './AgeByDobClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Age by DOB Calculator - Find Age from Date of Birth',
  description:
    'Use the free Age by DOB Calculator to find exact age from date of birth in years, months and days. Simple DOB based age calculator for students and forms.',
  keywords: [
    'age by dob',
    'age by date of birth',
    'dob age calculator',
    'calculate age from dob',
    'find age from date of birth',
    'dob calculator online',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com/tools/age-calculator/age-by-dob',
  },
  openGraph: {
    title: 'Age by DOB Calculator - Find Age from Date of Birth',
    description:
      'Calculate exact age from date of birth using the free GyaanBucks DOB age calculator.',
    url: 'https://gyaanbucks.com/tools/age-calculator/age-by-dob',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age by DOB Calculator - Find Age from Date of Birth',
    description:
      'Free DOB based age calculator to find age in years, months and days.',
  },
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age by DOB Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator/age-by-dob',
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
      name: 'What is an Age by DOB Calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Age by DOB Calculator finds your exact age from your date of birth in completed years, months and days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate age by DOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter your date of birth and the tool compares it with the current date to calculate completed age.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is DOB age calculation useful for forms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, DOB based age calculation is useful for school forms, student records, applications and basic eligibility checks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this tool calculate total days lived?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it also shows the approximate total days lived from your date of birth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this Age by DOB Calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this GyaanBucks educational calculator is free to use.',
      },
    },
  ],
};

export default function AgeByDobPage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>DOB Based Learning Tool</p>
        <h1>Age by DOB Calculator</h1>
        <p>
          Find your exact age from your date of birth with a simple DOB based
          calculator. Get your age in years, months and days instantly.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="age-by-dob-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <Script
        id="age-by-dob-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <AgeByDobClient />

      <div className={styles.contentBlock}>
        <p>
          Want a full age breakdown? Try our{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link> for years,
          months and days.
        </p>

        <p>
          You can also check your total life days using{' '}
          <Link href="/tools/age-calculator/age-in-days">
            Age in Days Calculator
          </Link>
          .
        </p>

        <p>
          Need to compare two people? Use our{' '}
          <Link href="/tools/age-calculator/age-difference-calculator">
            Age Difference Calculator
          </Link>
          .
        </p>

        <p>
          For a fun result, try the{' '}
          <Link href="/tools/love-calculator">Love Calculator</Link>.
        </p>
      </div>

      <section className={styles.contentBlock}>
        <h2>What is an Age by DOB Calculator?</h2>
        <p>
          An Age by DOB Calculator is an online tool that helps you find your
          exact age from your date of birth. DOB means date of birth, and this
          page is focused on one clear intent: calculating age directly from the
          birth date. Many people know their birth year, but exact age is not
          always just a simple year difference. This tool gives a more precise
          result by showing completed years, remaining months and remaining
          days.
        </p>

        <p>
          This type of DOB based age calculator is useful for students, parents,
          teachers, form filling, admission records and general learning. When
          you enter your date of birth, the calculator compares it with today’s
          date. It then checks whether your birthday has already passed this
          year, how many full months have passed after your last birthday and
          how many days remain in the current age cycle.
        </p>

        <h2>How to Calculate Age from Date of Birth</h2>
        <p>
          To calculate age from DOB manually, you need to compare the date of
          birth with the current date. First, subtract the birth year from the
          current year. Then check the month and day. If the birthday has not
          arrived yet in the current year, one year should be reduced from the
          rough result. This is the reason two people born in the same year may
          not have the same completed age on a particular day.
        </p>

        <p>
          For example, if the current year is 2026 and a person was born in
          2008, we may quickly think the person is 18 years old. But if the
          person’s birthday in 2026 has not arrived yet, the completed age is
          still 17 years. DOB based calculation prevents this common mistake.
          The GyaanBucks calculator handles this automatically and gives the
          result in a clean format.
        </p>

        <h2>Why DOB Based Age Calculation is Important</h2>
        <p>
          DOB based age calculation is important because many official and
          educational activities depend on exact age. School admission age,
          student registration, sports participation, scholarship forms,
          training applications and some exam forms may require accurate age. A
          small age calculation error can create confusion when filling a form,
          especially if the form uses a strict cut-off date.
        </p>

        <p>
          This calculator is designed to make the calculation easier to
          understand. It is not only a result tool but also a learning tool. By
          seeing the result separated into years, months and days, students can
          understand how calendar-based time calculation works. This supports
          the GyaanBucks goal of making learning practical and useful.
        </p>

        <h2>Age by DOB vs General Age Calculator</h2>
        <p>
          A general age calculator and an Age by DOB Calculator may look
          similar, but the search intent is slightly different. A general age
          calculator can be used for many types of age-related calculations.
          This page is specifically focused on users who want to find age from
          DOB. That is why the wording, tool flow and explanation are built
          around date of birth based calculation.
        </p>

        <p>
          If you want the broader version, you can use the{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link>. If you want
          to know your total age in days, use the{' '}
          <Link href="/tools/age-calculator/age-in-days">
            Age in Days Calculator
          </Link>
          . You can also explore all tools from the{' '}
          <Link href="/tools">GyaanBucks Tools page</Link>.
        </p>

        <h2>Best Use Cases for this DOB Calculator</h2>
        <p>
          This DOB calculator is useful when you want to quickly know your age
          for a personal profile, school record, online form, student data
          entry, learning activity or basic eligibility check. Parents can use
          it to understand a child’s completed age before school admission.
          Students can use it while filling educational forms. Teachers can use
          it for classroom records or learning demonstrations.
        </p>

        <p>
          The calculator is free and simple, but official eligibility should
          always be checked from the official source. If an exam or institution
          uses a special cut-off date, then the age should be calculated as per
          that rule. This page gives a clear DOB based age result using today’s
          date.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>Age by DOB Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>What does age by DOB mean?</h3>
          <p>
            Age by DOB means calculating age directly from your date of birth.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can I calculate age from DOB online?</h3>
          <p>
            Yes, you can enter your date of birth in this tool and instantly get
            your age.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does this tool show years, months and days?</h3>
          <p>
            Yes, it shows completed years, remaining months and remaining days.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this tool useful for students?</h3>
          <p>
            Yes, students can use it for forms, records and learning date
            calculations.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this DOB calculator free?</h3>
          <p>Yes, this GyaanBucks DOB age calculator is completely free.</p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
