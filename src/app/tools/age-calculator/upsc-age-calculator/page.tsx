import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import UpscAgeClient from './UpscAgeClient';

export const metadata: Metadata = {
  title: 'UPSC Age Calculator - Check Age Eligibility for UPSC Exams',
  description:
    'Use the UPSC Age Calculator to check your age eligibility for IAS, IPS and other UPSC exams based on your date of birth. Simple and accurate tool.',

  keywords: [
    'upsc age calculator',
    'ias age limit calculator',
    'upsc eligibility age calculator',
    'calculate age for upsc exam',
    'upsc age limit by dob',
  ],

  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/upsc-age-calculator',
  },

  openGraph: {
    title: 'UPSC Age Calculator - Check Eligibility',
    description:
      'Check your age eligibility for UPSC exams instantly using this calculator.',
    url: 'https://gyaanbucks.com/tools/age-calculator/upsc-age-calculator',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UPSC Age Calculator',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'UPSC Age Calculator - Check Eligibility',
    description: 'Find your eligibility age for UPSC exams instantly.',
    images: ['/og-image.png'],
  },
};

export default function UpscAgeCalculatorPage() {
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
        name: 'How do I calculate age for UPSC exam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter your date of birth and cutoff date (usually 1st August). The calculator shows exact age instantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is UPSC age limit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General category: 21–32 years. OBC: up to 35. SC/ST: up to 37. Always verify official notification.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is UPSC cutoff date?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UPSC cutoff date is usually 1st August of the exam year used to calculate age eligibility.',
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>UPSC Age Calculator</h1>

            <p className={styles.description}>
              Use this UPSC Age Calculator to check your exact age eligibility
              for IAS and Civil Services Exam based on your date of birth and
              official cutoff date.
            </p>

            <UpscAgeClient />

            {/* CONTENT BOOST */}
            <section className={styles.content}>
              <h2>What is UPSC Age Calculator?</h2>
              <p>
                UPSC Age Calculator is a tool designed to help aspirants
                calculate their exact age for Civil Services Examination
                eligibility. Since UPSC follows strict cutoff rules, even a
                one-day difference can impact eligibility. This tool ensures
                accurate calculation instantly.
              </p>

              <h2>What is UPSC Cutoff Date?</h2>
              <p>
                UPSC cutoff date is the date used to determine your age
                eligibility. In most cases, it is 1st August of the exam year.
                For example, if you are applying for UPSC 2025, your age will be
                calculated as on 1st August 2025.
              </p>

              <h2>UPSC Age Limit Details</h2>
              <p>
                For General category candidates, the age limit is typically
                between 21 and 32 years. OBC candidates get relaxation up to 35
                years, SC/ST candidates up to 37 years, and PwBD candidates may
                get further relaxation based on rules.
              </p>

              <p>
                These limits vary slightly depending on notification and attempt
                limits, so always verify with official UPSC guidelines.
              </p>

              <h2>Why Use This UPSC Age Calculator?</h2>
              <p>
                Many candidates manually calculate age incorrectly. This tool
                eliminates errors and gives precise results instantly. It also
                helps you plan attempts and track eligibility for future exams.
              </p>

              <p>
                You can also check eligibility for previous years by changing
                the cutoff date.
              </p>
            </section>

            <section className={styles.content}>
              <h2>People Also Search For</h2>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/ssc-age-calculator">
                    ssc age calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-by-dob">
                    age calculator by dob
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator">exact age calculator</Link>
                </li>
              </ul>
            </section>

            <section className={styles.links}>
              <h3>Related Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator">Age Calculator</Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/ssc-age-calculator">
                    SSC Age Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator">
                    School Admission Age
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h3>🔥 Popular Calculators</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator">Age Calculator</Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-by-dob">
                    Age Calculator by DOB
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-in-days">
                    Age in Days Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/percentage-calculator">
                    Percentage Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>🎯 Exam Age Calculators</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/upsc-age-calculator">
                    UPSC Age Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/ssc-age-calculator">
                    SSC Age Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator">
                    Govt Job Age Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>🏫 Admission Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator">
                    School Admission Age Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator/telangana">
                    Telangana School Admission Age
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>🚀 Explore GyaanBucks</h3>
              <ul>
                <li>
                  <Link href="/tools">All Online Calculators</Link>
                </li>
                <li>
                  <Link href="/quizzes">Play Quiz and Earn Rewards</Link>
                </li>
                <li>
                  <Link href="/categories">Quiz Categories</Link>
                </li>
                <li>
                  <Link href="/refer-earn">Refer and Earn</Link>
                </li>
                <li>
                  <Link href="/blog">Latest Articles</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(toolSchema),
          }}
        />
      </main>

      <Footer />
    </>
  );
}
