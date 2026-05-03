import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import AgeByDobClient from './AgeByDobClient';

export const metadata: Metadata = {
  title: 'Age Calculator by DOB - Free Online Age Calculator',
  description:
    'Use our Age Calculator by DOB to calculate exact age from date of birth in years, months, days, weeks, hours, minutes and seconds instantly.',

  keywords: [
    'age calculator by dob',
    'calculate age from date of birth',
    'dob age calculator',
    'age finder by birth date',
    'exact age calculator by dob',
    'date of birth age calculator',
  ],

  alternates: {
    canonical: 'https://gyaanbucks.com/tools/age-calculator/age-by-dob',
  },

  openGraph: {
    title: 'Age Calculator by DOB - Free Online Age Calculator',
    description:
      'Calculate your exact age from date of birth in years, months and days instantly using this free online DOB calculator.',
    url: 'https://gyaanbucks.com/tools/age-calculator/age-by-dob',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Age Calculator by DOB',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator by DOB - Free Online Age Calculator',
    description:
      'Find your exact age from date of birth instantly with this free tool.',
    images: ['/og-image.png'],
  },
};

export default function AgeByDobPage() {
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
        name: 'How do I calculate my age by DOB?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter your date of birth and click Calculate Age. The tool will show your exact age in years, months and days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I calculate age on a specific date?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Change the Age at Date fields to any date and the calculator will show your age on that selected date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this DOB age calculator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this age calculator is completely free to use on GyaanBucks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this calculator show total days lived?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Along with exact age, it also shows total days, weeks, months, hours, minutes and seconds.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this useful for government exam age eligibility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can use the Age at Date option to calculate age based on the eligibility date mentioned in an exam notification.',
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
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/tools">Tools</Link>
              <span>/</span>
              <Link href="/tools/age-calculator">Age Calculator</Link>
              <span>/</span>
              <strong>Age by DOB</strong>
            </nav>

            <h1 className={styles.title}>Age Calculator by Date of Birth</h1>

            <p className={styles.description}>
              Use this free Age Calculator by DOB to calculate your exact age
              from your date of birth. Enter your birth date and get your age in
              years, months, days, weeks, hours, minutes and seconds instantly.
            </p>

            <AgeByDobClient />

            <section className={styles.content}>
              <h2>What is an Age Calculator by DOB?</h2>
              <p>
                An Age Calculator by DOB is an online tool that helps you
                calculate your exact age using your date of birth. Instead of
                manually counting years, months and days, you can enter your
                birth month, birth day and birth year to get an accurate age
                result instantly. This tool is useful for students, job
                applicants, exam candidates, parents, employees and anyone who
                needs to know their exact age for official or personal use.
              </p>

              <h2>How to Calculate Age from Date of Birth?</h2>
              <p>
                To calculate age from date of birth, enter your birth date in
                the Date of Birth section. The calculator automatically uses
                today’s date as the default age calculation date, but you can
                also change the age at date if you want to calculate age on a
                specific day. After clicking the Calculate Age button, the tool
                shows your completed age in years, months and days along with
                total months, total weeks, total days, hours, minutes and
                seconds.
              </p>

              <h2>Why This DOB Age Calculator is Useful</h2>
              <p>
                Many application forms, government exams, job portals, school
                admissions, insurance forms and official documents require exact
                age. In such cases, an approximate age is not enough. You may
                need to know whether you are eligible based on a specific date.
                This date of birth age calculator helps you avoid manual
                mistakes and gives a clear breakdown of your age.
              </p>

              <h2>Where Can You Use This Age Calculator?</h2>
              <p>
                You can use this DOB calculator for school admission age
                checking, job age eligibility, government exam form filling,
                birthday countdown planning, document verification, personal
                records and general age calculation. It is also helpful when you
                need to compare age on a past or future date, because the Age at
                Date option allows you to calculate age for any selected date.
              </p>

              <h2>Age Calculation Example</h2>
              <p>
                For example, if your date of birth is 10 June 2000 and you want
                to calculate your age as of today, simply enter 06 as month, 10
                as day and 2000 as year. The calculator will show your exact
                completed age in years, months and days. It also displays the
                same age in total days, weeks, months, hours, minutes and
                seconds for a detailed view.
              </p>

              <h2>Benefits of Using GyaanBucks Age Calculator by DOB</h2>
              <ul>
                <li>Instant age calculation from date of birth</li>
                <li>Accurate result in years, months and days</li>
                <li>Total months, weeks, days, hours, minutes and seconds</li>
                <li>Useful for jobs, exams, admissions and forms</li>
                <li>Free online tool with simple mobile-friendly design</li>
              </ul>
            </section>

            <section className={styles.content}>
              <h2>Frequently Asked Questions</h2>

              <h3>How do I calculate my age by DOB?</h3>
              <p>
                Enter your date of birth and click Calculate Age. The tool will
                show your exact age in years, months and days.
              </p>

              <h3>Can I calculate age on a specific date?</h3>
              <p>
                Yes. Change the Age at Date fields to any date and the
                calculator will show your age on that selected date.
              </p>

              <h3>Is this DOB age calculator free?</h3>
              <p>
                Yes, this age calculator is completely free to use on
                GyaanBucks.
              </p>

              <h3>Does this calculator show total days lived?</h3>
              <p>
                Yes. Along with exact age, it also shows total days, weeks,
                months, hours, minutes and seconds.
              </p>

              <h3>Is this useful for government exam age eligibility?</h3>
              <p>
                Yes. You can use the Age at Date option to calculate age based
                on the eligibility date mentioned in an exam notification.
              </p>
            </section>

            <section className={styles.content}>
              <h2>People Also Search For</h2>
              <ul>
                <li>
                  <Link href="/tools/age-calculator">exact age calculator</Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-in-days">
                    age in days calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-difference-calculator">
                    Age Difference Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/percentage-calculator">
                    percentage calculator online
                  </Link>
                </li>
              </ul>
            </section>

            <section className={styles.content}>
              <h2>Real Life Use Cases of Age Calculator</h2>

              <p>
                This age calculator by date of birth is widely used in real life
                situations. Students use it to check school admission
                eligibility, job seekers use it to verify age limits in job
                notifications, and candidates use it for government exams where
                exact age calculation is mandatory.
              </p>

              <p>
                It is also helpful for personal purposes such as birthday
                planning, calculating age difference between two people,
                checking eligibility for insurance policies, and verifying
                official documents.
              </p>

              <p>
                Since this tool allows you to calculate age on a custom date, it
                becomes extremely useful for scenarios where eligibility depends
                on a specific cutoff date.
              </p>
            </section>

            <section className={styles.content}>
              <h2>Keyword Variations You Can Use</h2>

              <p>
                Users often search for this tool using different keywords like
                age calculator by dob, calculate age from date of birth, dob age
                finder, exact age calculator, date of birth calculator, and age
                calculation tool. This page is optimized to match all these
                variations and provide accurate results instantly.
              </p>
            </section>

            <section className={styles.links}>
              <h3>Related Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator">Age Calculator</Link>
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
                <li>
                  <Link href="/tools">All Online Calculators</Link>
                </li>
                <li>
                  <Link href="/quizzes">
                    Practice Quizzes and Improve Your Knowledge
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h3>Popular Tools</h3>
              <ul>
                <li>
                  <Link prefetch={false} href="/tools/age-calculator">
                    Age Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    href="/tools/age-calculator/age-in-days"
                  >
                    Age in Days
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/tools/percentage-calculator">
                    Percentage Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>Age Calculator Pages</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/age-difference-calculator">
                    Age Difference Calculator
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/tools/age-calculator">
                    Exact Age Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    href="/tools/age-calculator/age-in-days"
                  >
                    Days Lived Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>Explore GyaanBucks</h3>
              <ul>
                <li>
                  <Link prefetch={false} href="/tools">
                    All Calculators
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/quizzes">
                    Play Quizzes
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/categories">
                    Quiz Categories
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/contact">
                    Contact GyaanBucks
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

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
      </main>

      <Footer />
    </>
  );
}
