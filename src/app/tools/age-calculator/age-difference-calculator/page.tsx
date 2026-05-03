import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import AgeDifferenceClient from './AgeDifferenceClient';

export const metadata: Metadata = {
  title: 'Age Difference Calculator - Compare Two Ages Online',
  description:
    'Use the Age Difference Calculator to compare two ages or dates and find the exact difference in years, months and days. Free online age comparison tool.',

  keywords: [
    'age difference calculator',
    'compare two ages',
    'age gap calculator',
    'calculate age difference',
    'difference between two ages',
    'date age difference calculator',
  ],

  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/age-difference-calculator',
  },

  openGraph: {
    title: 'Age Difference Calculator - Compare Two Ages Online',
    description:
      'Compare two ages or dates and find the exact age difference instantly.',
    url: 'https://gyaanbucks.com/tools/age-calculator/age-difference-calculator',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Age Difference Calculator',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Age Difference Calculator - Compare Two Ages Online',
    description:
      'Find the exact age gap between two people or dates instantly.',
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
      name: 'How to calculate age difference between two people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter both dates of birth and click calculate. The tool will show the exact age difference in years, months and days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I compare two dates using this calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can enter any two dates to find the difference between them instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this age difference calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this tool is completely free to use on GyaanBucks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it show difference in months and days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the calculator shows detailed results including years, months and days.',
      },
    },
  ],
};

export default function AgeDifferencePage() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>Age Difference Calculator</h1>

            <p className={styles.description}>
              Use this Age Difference Calculator to calculate the exact age gap
              between two people. Enter both dates of birth and get difference
              in years, months and days instantly.
            </p>

            <AgeDifferenceClient />

            {/* SEO CONTENT */}
            <section className={styles.content}>
              <h2>What is Age Difference Calculator?</h2>
              <p>
                Age Difference Calculator is an online tool used to calculate
                the exact age gap between two people using their dates of birth.
                Instead of manually calculating years, months, and days, this
                calculator gives an accurate result instantly.
              </p>

              <p>
                This tool is useful for anyone who wants to compare ages,
                whether for personal, educational, or professional purposes. It
                eliminates confusion and provides precise results within
                seconds.
              </p>

              <h2>How to Calculate Age Difference Between Two People</h2>
              <p>
                To calculate age difference, you need two dates of birth. Enter
                the first person’s date of birth and then the second person’s
                date of birth. The calculator will automatically compute the
                difference in years, months, and days.
              </p>

              <p>
                The tool also calculates total days, total weeks, and total
                months, giving you a complete breakdown of the age gap. This is
                especially helpful when you need detailed age comparison.
              </p>

              <h2>Where Age Difference Calculator is Used</h2>
              <p>
                Age difference calculation is commonly used in real-life
                situations such as comparing age between friends, siblings, or
                partners. Many couples use it to check their age gap, while
                parents use it to compare their children’s ages.
              </p>

              <p>
                It is also useful in official documentation, eligibility checks,
                and educational purposes where exact age difference is required.
              </p>

              <h2>Why Use an Online Age Difference Calculator?</h2>
              <p>
                Manual age calculation can be confusing due to varying number of
                days in months and leap years. Even a small mistake can lead to
                incorrect results. This calculator solves that problem by
                providing accurate results instantly.
              </p>

              <p>
                It saves time, reduces errors, and provides detailed output,
                making it the best solution for calculating age difference
                online.
              </p>

              <h2>Benefits of Using This Tool</h2>
              <ul>
                <li>Instant and accurate age difference calculation</li>
                <li>Shows result in years, months, and days</li>
                <li>Includes total days, weeks, and months</li>
                <li>Easy to use on mobile and desktop</li>
                <li>No manual calculation required</li>
              </ul>
            </section>

            <section className={styles.content}>
              <h2>Frequently Asked Questions</h2>

              <h3>How do I calculate age difference?</h3>
              <p>
                Enter both dates of birth and click calculate. The tool will
                instantly display the exact age difference.
              </p>

              <h3>Can I calculate age difference in days?</h3>
              <p>
                Yes, this calculator provides total days along with years and
                months.
              </p>

              <h3>Is this age difference calculator accurate?</h3>
              <p>
                Yes, it considers leap years and month variations to give
                accurate results.
              </p>

              <h3>Can I use this for relationship or marriage age gap?</h3>
              <p>
                Yes, many users use this tool to calculate age gap between
                couples.
              </p>
            </section>

            <section className={styles.content}>
              <h2>Age Difference Calculator Use Cases</h2>

              <p>
                Age difference calculation is widely used in different
                situations. For example, couples often check their age gap for
                personal reasons, while families use it to compare siblings'
                ages.
              </p>

              <p>
                It is also useful in educational and official scenarios where
                age comparison is required. Many people use this tool while
                filling forms, verifying eligibility, or simply out of
                curiosity.
              </p>

              <h2>Important Note</h2>

              <p>
                While this calculator provides accurate results, it should be
                used as a reference tool. For official purposes, always verify
                age calculations based on required documentation and guidelines.
              </p>

              <p>
                This tool is designed for quick and easy use, helping users
                avoid manual calculation errors and get precise results
                instantly.
              </p>
            </section>
            <section className={styles.content}>
              <h2>Is Age Difference Important?</h2>

              <p>
                Age difference may or may not be important depending on the
                situation. In relationships, friendships, or family, age gap is
                usually just a number, but in certain official or eligibility
                scenarios, exact age difference becomes important.
              </p>

              <p>
                This is why having a reliable age difference calculator is
                useful. It helps you get precise results instantly without
                confusion and avoids manual errors.
              </p>

              <p>
                Whether you are comparing ages for personal curiosity or
                official requirements, this tool provides a quick and accurate
                solution.
              </p>
            </section>

            <section className={styles.content}>
              <h2>Detailed Age Difference Calculation Explained</h2>

              <p>
                When calculating age difference, the result is not just about
                subtracting years. A proper calculation considers months, days,
                and even leap years. This is why manual calculations often lead
                to incorrect results.
              </p>

              <p>
                This Age Difference Calculator automatically adjusts for
                different month lengths and leap years to give accurate results.
                It ensures that the age gap is calculated precisely in years,
                months, and days without any manual effort.
              </p>

              <h2>Age Difference in Real Life Scenarios</h2>

              <p>
                Age difference plays a role in many real-life situations. People
                often compare age gaps between siblings, friends, or partners.
                In some cases, age difference is also considered for educational
                admissions, job eligibility, or official documentation.
              </p>

              <p>
                Having a reliable calculator helps users quickly determine the
                exact gap without confusion. Whether the difference is small or
                large, this tool presents it clearly and accurately.
              </p>

              <h2>Why Accuracy Matters</h2>

              <p>
                Even a small difference in calculation can lead to incorrect
                assumptions, especially when age is used for eligibility or
                verification. This tool removes that risk by handling all
                calculations automatically.
              </p>

              <p>
                It is designed to be simple, fast, and accurate, making it
                suitable for everyday use as well as important situations where
                precise age difference is required.
              </p>
            </section>

            <section className={styles.content}>
              <h2>People Also Search For</h2>
              <ul>
                <li>
                  <Link href="/tools/age-calculator">exact age calculator</Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-by-dob">
                    age calculator by dob
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-in-days">
                    age in days calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/upsc-age-calculator">
                    upsc age calculator
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          {/* FULL SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h3>🔥 Popular Calculators</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator">Age Calculator</Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-by-dob">
                    Age by DOB
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-in-days">
                    Age in Days
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
              <h3>🎯 Exam Tools</h3>
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
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>🚀 Explore</h3>
              <ul>
                <li>
                  <Link href="/tools">All Tools</Link>
                </li>
                <li>
                  <Link href="/quizzes">Play Quiz</Link>
                </li>
                <li>
                  <Link href="/refer-earn">Refer & Earn</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      <script
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

      <Footer />
    </>
  );
}
