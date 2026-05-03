import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import SscAgeClient from './SscAgeClient';

export const metadata: Metadata = {
  title: 'SSC Age Calculator - Check Age Eligibility for SSC Exams',
  description:
    'Use SSC Age Calculator to check your age eligibility for SSC CGL, CHSL, MTS exams based on date of birth and cutoff date.',

  keywords: [
    'ssc age calculator',
    'ssc age eligibility calculator',
    'ssc age limit calculator',
    'calculate age for ssc exam',
    'ssc cgl age calculator',
    'ssc chsl age calculator',
    'ssc mts age calculator',
    'age calculator for ssc exam',
    'ssc eligibility age calculator india',
  ],

  openGraph: {
    title: 'SSC Age Calculator - Check SSC Eligibility',
    description:
      'Calculate your age for SSC exams instantly using DOB and cutoff date.',
    url: 'https://gyaanbucks.com/tools/age-calculator/ssc-age-calculator',
    siteName: 'GyaanBucks',
    images: [
      {
        url: 'https://gyaanbucks.com/og-images/ssc-age-calculator.png',
        width: 1200,
        height: 630,
        alt: 'SSC Age Calculator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SSC Age Calculator',
    description:
      'Check SSC age eligibility instantly using DOB and cutoff date.',
    images: ['https://gyaanbucks.com/og-images/ssc-age-calculator.png'],
  },

  alternates: {
    canonical: 'https://gyaanbucks.com/tools/age-calculator/ssc-age-calculator',
  },
};

export default function SscAgeCalculatorPage() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>SSC Age Calculator</h1>

            <p className={styles.description}>
              Use this SSC Age Calculator to check your eligibility for SSC CGL,
              CHSL, MTS and other exams. Enter your date of birth and cutoff
              date to calculate your exact age.
            </p>

            <SscAgeClient />

            <section className={styles.content}>
              <h2>What is SSC Age Calculator?</h2>
              <p>
                SSC Age Calculator helps candidates calculate their exact age
                for SSC exams. Since SSC eligibility depends on cutoff dates,
                accurate age calculation is important.
              </p>

              <h2>SSC Age Limit Overview</h2>
              <p>
                SSC exams have different age limits depending on the post.
                Generally: - CGL: 18 to 32 years - CHSL: 18 to 27 years - MTS:
                18 to 25 years
              </p>

              <p>
                Age relaxation is available for OBC, SC/ST and other categories
                as per government rules.
              </p>

              <h2>Why Use This Calculator?</h2>
              <p>
                Many candidates make mistakes while calculating age manually.
                This tool gives accurate age instantly and helps avoid
                confusion.
              </p>
            </section>

            <section className={styles.content}>
              <h2>SSC Age Eligibility Explained</h2>

              <p>
                SSC exams have different age limits depending on the post and
                department. For example, SSC CGL posts may have upper age limits
                of 30 or 32 years, while SSC CHSL and MTS may have lower upper
                limits like 25 or 27 years.
              </p>

              <p>
                Age is always calculated based on a specific cutoff date
                mentioned in the official SSC notification. Even a difference of
                one day can impact eligibility, so exact age calculation is very
                important.
              </p>

              <h2>Why SSC Aspirants Should Use This Tool</h2>

              <p>
                Many candidates rely on manual calculations or assumptions,
                which can lead to mistakes. This SSC age calculator ensures
                accurate calculation and helps you confidently check eligibility
                before applying.
              </p>

              <p>
                You can also use this tool to check eligibility for previous SSC
                exams by changing the cutoff date year.
              </p>
            </section>

            <section className={styles.content}>
              <h2>People Also Search For</h2>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/upsc-age-calculator">
                    upsc age calculator
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

            <section className={styles.content}>
              <h2>Frequently Asked Questions</h2>

              <h3>How to calculate age for SSC exam?</h3>
              <p>Enter DOB and SSC cutoff date. Tool will show exact age.</p>

              <h3>What is SSC age limit?</h3>
              <p>Depends on exam. Usually between 18 to 32 years.</p>

              <h3>Can I check eligibility for past SSC exams?</h3>
              <p>Yes, change cutoff date accordingly.</p>
            </section>

            <section className={styles.links}>
              <h3>Related Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator">Age Calculator</Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/upsc-age-calculator">
                    UPSC Age Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-by-dob">
                    Age by DOB
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h3>🔥 Popular Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator">Age Calculator</Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/upsc-age-calculator">
                    UPSC Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/percentage-calculator">
                    Percentage Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
