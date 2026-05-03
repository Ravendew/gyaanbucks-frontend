import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import DaysUntilClient from './DaysUntilClient';

export const metadata: Metadata = {
  title: 'Days Until Calculator - Calculate Days Left Until Any Date',
  description:
    'Use Days Until Calculator to calculate how many days are left until any date, event, birthday, exam, trip or deadline instantly.',
  keywords: [
    'days until calculator',
    'days left calculator',
    'how many days until',
    'countdown calculator',
    'days remaining calculator',
    'days until date calculator',
    'days left until date',
    'event countdown calculator',
    'date countdown calculator',
    'calculate days until a date',
  ],
  openGraph: {
    title: 'Days Until Calculator - Calculate Days Left',
    description:
      'Calculate how many days are left until any future date, event, exam, birthday or deadline.',
    url: 'https://gyaanbucks.com/tools/age-calculator/days-until-calculator',
    siteName: 'GyaanBucks',
    images: [
      {
        url: 'https://gyaanbucks.com/og-images/days-until-calculator.png',
        width: 1200,
        height: 630,
        alt: 'Days Until Calculator',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Days Until Calculator',
    description:
      'Calculate days left until any date, event, birthday, exam or deadline.',
    images: ['https://gyaanbucks.com/og-images/days-until-calculator.png'],
  },
  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/days-until-calculator',
  },
};

export default function DaysUntilCalculatorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I calculate days until a date?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Select the target date and click calculate. The tool shows how many days are left until that date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this as a countdown calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this Days Until Calculator works as a countdown calculator for events, birthdays, exams, trips and deadlines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this calculator show weeks and months too?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, it shows total days, weeks, approximate months and approximate years left.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this Days Until Calculator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the Days Until Calculator on GyaanBucks is completely free to use.',
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
              <strong>Days Until Calculator</strong>
            </nav>

            <h1 className={styles.title}>Days Until Calculator</h1>

            <p className={styles.description}>
              Use this free Days Until Calculator to find how many days are left
              until any date, event, birthday, exam, trip, festival or deadline.
              Select your target date and get an instant countdown result.
            </p>

            <DaysUntilClient />

            <section className={styles.content}>
              <h2>What is a Days Until Calculator?</h2>
              <p>
                A Days Until Calculator is an online tool that helps you
                calculate how many days are left until a selected date. It works
                like a simple countdown calculator where you choose a future
                date and instantly see the remaining time. This tool is useful
                for events, birthdays, exams, trips, festivals, deadlines,
                launches and personal goals.
              </p>

              <p>
                Many people manually count calendar days when they want to know
                how much time is left for an important date. Manual counting can
                be confusing, especially when the date is months away or when
                leap years and different month lengths are involved. This
                calculator avoids those mistakes and gives a quick result.
              </p>

              <h2>How to Calculate Days Until a Date</h2>
              <p>
                To calculate days until a date, select the target date in the
                calculator and click the calculate button. The tool compares
                today’s date with your selected date and shows the total number
                of days remaining. It also shows weeks, approximate months and
                approximate years for better understanding.
              </p>

              <p>
                For example, if you want to know how many days are left until
                your exam, select the exam date. If you want to plan a trip,
                select the travel date. If you are waiting for a birthday,
                anniversary, festival or result day, simply choose that date and
                the calculator will show the countdown instantly.
              </p>

              <h2>Why Use an Online Days Left Calculator?</h2>
              <p>
                An online days left calculator is faster and more accurate than
                checking dates manually. It saves time and gives a clear answer
                in seconds. Instead of counting each day on a calendar, this
                tool automatically calculates the difference between today and
                your selected date.
              </p>

              <p>
                This is helpful when you are planning something important and
                want to track how much time is available. Students can track
                exam days, professionals can track project deadlines, families
                can track events, and individuals can track personal goals.
              </p>

              <h2>Common Uses of Days Until Calculator</h2>
              <p>
                The Days Until Calculator can be used in many daily life
                situations. Students often use it to count days left for exams,
                admit cards, result dates and application deadlines. Working
                professionals use it for project timelines, meeting deadlines
                and notice periods.
              </p>

              <p>
                Families use it for birthdays, weddings, anniversaries,
                vacations and festivals. Business owners can use it for product
                launches, campaign deadlines, subscription renewals and
                financial planning. The tool is simple but useful for almost
                every date-based plan.
              </p>

              <h2>Countdown Calculator for Events and Deadlines</h2>
              <p>
                This page also works as an event countdown calculator. If you
                have a future event, you can use this tool to know exactly how
                many days are left. It gives a clear countdown so you can plan
                tasks, bookings, reminders and preparation without confusion.
              </p>

              <p>
                Deadlines become easier to manage when you know how much time is
                remaining. Whether it is an exam deadline, job application, bill
                payment, trip booking or project delivery, this calculator helps
                you stay organized.
              </p>

              <h2>Days Until vs Date Difference Calculator</h2>
              <p>
                A Days Until Calculator is mainly used to calculate days
                remaining from today to a future date. A Date Difference
                Calculator is used to calculate the gap between any two selected
                dates. Both tools are useful, but their purpose is slightly
                different.
              </p>

              <p>
                If you want a simple countdown from today, use this Days Until
                Calculator. If you want to compare two custom dates, use the
                Date Difference Calculator on GyaanBucks.
              </p>

              <h2>Benefits of Using This Tool</h2>
              <ul>
                <li>Calculate days left until any date instantly</li>
                <li>Useful for exams, birthdays, events and deadlines</li>
                <li>Shows days, weeks, approximate months and years</li>
                <li>Works as a simple countdown calculator</li>
                <li>Free, fast and mobile-friendly online tool</li>
              </ul>
            </section>

            <section className={styles.content}>
              <h2>Frequently Asked Questions</h2>

              <h3>How many days are left until a date?</h3>
              <p>
                Select your target date and click calculate. The calculator will
                show how many days are left from today until that date.
              </p>

              <h3>Can I use this for birthdays and events?</h3>
              <p>
                Yes. You can use this calculator for birthdays, weddings,
                anniversaries, festivals, trips, exams, deadlines and other
                events.
              </p>

              <h3>Can this calculator show weeks and months?</h3>
              <p>
                Yes. Along with total days, it also shows total weeks,
                approximate months and approximate years left.
              </p>

              <h3>What happens if I select a past date?</h3>
              <p>
                If you select a past date, the tool will tell you how many days
                have passed since that date.
              </p>

              <h3>Is this calculator accurate?</h3>
              <p>
                Yes. It calculates the difference between today and the selected
                date using actual date values.
              </p>
            </section>

            <section className={styles.content}>
              <h2>People Also Search For</h2>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/date-difference-calculator">
                    date difference calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-difference-calculator">
                    age difference calculator
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
                  <Link href="/tools/age-calculator/date-difference-calculator">
                    Date Difference Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/age-difference-calculator">
                    Age Difference Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator">Age Calculator</Link>
                </li>
                <li>
                  <Link href="/tools/percentage-calculator">
                    Percentage Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools">All Online Calculators</Link>
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
              <h3>📅 Date Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/days-until-calculator">
                    Days Until Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/date-difference-calculator">
                    Date Difference Calculator
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
      </main>

      <Footer />
    </>
  );
}
