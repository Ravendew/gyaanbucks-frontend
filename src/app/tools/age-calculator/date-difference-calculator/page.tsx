import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import DateDifferenceClient from './DateDifferenceClient';

export const metadata: Metadata = {
  title: 'Date Difference Calculator - Days Between Two Dates',
  description:
    'Use the Date Difference Calculator to find the exact number of days, months and years between two dates. Free online date calculator tool.',

  keywords: [
    'date difference calculator',
    'days between two dates',
    'calculate date difference',
    'date duration calculator',
    'difference between dates',
    'days calculator online',
  ],

  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/date-difference-calculator',
  },

  openGraph: {
    title: 'Date Difference Calculator - Days Between Two Dates',
    description:
      'Calculate the exact difference between two dates in days, months and years instantly.',
    url: 'https://gyaanbucks.com/tools/age-calculator/date-difference-calculator',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Date Difference Calculator',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Date Difference Calculator - Days Between Two Dates',
    description: 'Find number of days between any two dates instantly.',
    images: ['/og-image.png'],
  },
};

export default function DateDifferencePage() {
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
        name: 'How do I calculate days between two dates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter the start date and end date, then click calculate. The tool shows the total number of days between both dates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this calculator include leap years?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the date difference calculator automatically considers leap years while calculating the difference.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I calculate weeks, months and years between dates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this tool shows total days, total weeks, approximate months and approximate years between two dates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this date difference calculator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this online date difference calculator is completely free to use.',
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
              <strong>Date Difference Calculator</strong>
            </nav>

            <h1 className={styles.title}>Date Difference Calculator</h1>

            <p className={styles.description}>
              Use this free Date Difference Calculator to calculate the exact
              difference between two dates. Find total days, weeks, months and
              years between any start date and end date instantly.
            </p>

            <DateDifferenceClient />

            <section className={styles.content}>
              <h2>What is a Date Difference Calculator?</h2>
              <p>
                A Date Difference Calculator is an online tool that helps you
                find the exact time gap between two dates. You can enter a start
                date and an end date, and the calculator will instantly show the
                total number of days between them. It also gives a useful
                breakdown in weeks, approximate months and approximate years.
              </p>

              <p>
                This tool is helpful when you need to calculate the duration
                between two important dates without manually counting calendar
                days. Manual date calculation can be confusing because different
                months have different numbers of days, and leap years can also
                affect the result. This calculator handles those differences
                automatically.
              </p>

              <h2>How to Calculate Days Between Two Dates</h2>
              <p>
                To calculate days between two dates, select the start date first
                and then select the end date. After that, click the calculate
                button. The tool will show the total number of days between the
                selected dates. You can use it for past dates, future dates or
                any custom date range.
              </p>

              <p>
                For example, if you want to know how many days are left until an
                exam, event, birthday, project deadline or trip, you can enter
                today’s date as the start date and the target date as the end
                date. The calculator will instantly display the date duration.
              </p>

              <h2>Common Uses of Date Difference Calculator</h2>
              <p>
                Date difference calculation is useful in many real-life
                situations. Students use it to calculate exam countdowns.
                Employees and business owners use it to track project timelines.
                Families use it for birthdays, anniversaries and travel
                planning. It is also useful for calculating subscription
                periods, warranty duration, work experience, document validity
                and other date-based records.
              </p>

              <p>
                Many people also use this tool as a day counter between dates.
                It saves time and gives a clear result without requiring manual
                calendar checking.
              </p>

              <h2>Why Use This Online Date Duration Calculator?</h2>
              <p>
                An online date duration calculator is faster and more accurate
                than manual calculation. It reduces errors and gives results in
                multiple formats. Instead of only showing total days, this tool
                also displays weeks, approximate months and approximate years,
                making it easier to understand the full time gap.
              </p>

              <p>
                Whether you are calculating days for personal planning,
                education, work, travel, finance or official documentation, this
                free tool gives a simple and reliable result.
              </p>

              <h2>Benefits of Using This Tool</h2>
              <ul>
                <li>Calculate total days between two dates instantly</li>
                <li>
                  Shows total weeks, approximate months and approximate years
                </li>
                <li>
                  Useful for events, deadlines, exams and project timelines
                </li>
                <li>
                  Works for past dates, future dates and custom date ranges
                </li>
                <li>Free, fast and mobile-friendly online calculator</li>
              </ul>
            </section>
            <section className={styles.content}>
              <h2>Different Ways to Calculate Date Difference</h2>

              <p>
                There are multiple ways to calculate the difference between two
                dates. Some people manually count calendar days, while others
                use spreadsheet formulas or online tools. However, manual
                methods can be time-consuming and prone to errors.
              </p>

              <p>
                Using an online date difference calculator is the easiest and
                most accurate method. It instantly calculates the exact number
                of days, weeks, months, and years between two dates without
                requiring any manual effort.
              </p>

              <h3>Date Difference in Days, Months and Years</h3>

              <p>
                The difference between two dates can be represented in different
                formats. For example, you can calculate the total number of days
                between two dates or break it down into years, months, and days.
              </p>

              <p>
                This tool provides both simple and detailed results so that
                users can understand the complete duration easily. Whether you
                need a quick answer or a detailed breakdown, this calculator
                gives both.
              </p>
            </section>

            <section className={styles.content}>
              <h2>When Should You Use a Date Difference Calculator?</h2>

              <p>
                A date difference calculator is useful whenever you need to
                measure the time gap between two important dates. This includes
                tracking deadlines, counting days remaining for an event,
                calculating work experience, or planning trips and schedules.
              </p>

              <p>
                Instead of manually counting calendar days, this tool gives you
                an instant and accurate result. It is especially helpful when
                dealing with long durations where manual calculation can be
                confusing.
              </p>
            </section>

            <section className={styles.content}>
              <h2>Frequently Asked Questions</h2>

              <h3>How do I calculate the difference between two dates?</h3>
              <p>
                Select the start date and end date, then click calculate. The
                calculator will show the total days and other useful breakdowns.
              </p>

              <h3>Can I calculate future date duration?</h3>
              <p>
                Yes. You can select today as the start date and a future date as
                the end date to calculate remaining days.
              </p>

              <h3>Does this calculator count leap years?</h3>
              <p>
                Yes. The date calculation automatically works with leap years
                and different month lengths.
              </p>

              <h3>Can I use this as a day counter?</h3>
              <p>
                Yes. This tool works as a day counter between two selected
                dates.
              </p>

              <h3>Is this calculator free?</h3>
              <p>
                Yes, the Date Difference Calculator on GyaanBucks is free to
                use.
              </p>
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
                  <Link href="/tools/age-calculator/age-in-days">
                    Age in Days Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-difference-calculator">
                    Age Difference Calculator
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
                  <Link href="/quizzes">Play Quizzes</Link>
                </li>
                <li>
                  <Link href="/categories">Quiz Categories</Link>
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
