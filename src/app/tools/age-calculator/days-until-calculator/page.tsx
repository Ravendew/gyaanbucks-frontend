import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import DaysUntilClient from './DaysUntilClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Days Until Calculator - How Many Days Left?',
  description:
    'Use the free Days Until Calculator to find how many days are left until a future date, event, exam, birthday or deadline.',
  keywords: [
    'days until calculator',
    'how many days left',
    'days left calculator',
    'countdown calculator',
    'days until date',
  ],
  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/days-until-calculator',
  },
  openGraph: {
    title: 'Days Until Calculator - How Many Days Left?',
    description:
      'Calculate how many days are left until an event, exam, birthday or selected date.',
    url: 'https://gyaanbucks.com/tools/age-calculator/days-until-calculator',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Days Until Calculator - How Many Days Left?',
    description:
      'Free countdown calculator to find days left until any selected date.',
  },
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Days Until Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator/days-until-calculator',
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
      name: 'What is a days until calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A days until calculator shows how many days are left from today until a selected future date or event.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I calculate days left until an exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, enter your exam date and the calculator will show how many days are left.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator work for birthdays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use it as a birthday countdown calculator by entering the birthday date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I select today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you select today, the tool will show that the selected date is today.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this days until calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this GyaanBucks countdown calculator is free to use.',
      },
    },
  ],
};

export default function DaysUntilPage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Countdown Learning Tool</p>
        <h1>Days Until Calculator</h1>
        <p>
          Find how many days are left until an event, birthday, exam, deadline,
          trip or any selected date. A simple countdown calculator for planning
          and learning.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="days-until-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <Script
        id="days-until-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <DaysUntilClient />

      <section className={styles.contentBlock}>
        <h2>What is a Days Until Calculator?</h2>
        <p>
          A Days Until Calculator is a countdown tool that tells you how many
          days are left from today until a selected date. It is useful when you
          want to track an upcoming exam, birthday, trip, event, deadline,
          festival, project submission or personal milestone. Instead of
          counting calendar days manually, you can enter the target date and get
          the result instantly.
        </p>

        <p>
          This tool is different from a general date difference calculator. A
          date difference calculator compares any two dates, while this page is
          focused on one clear question: how many days are left from today until
          a future date? That makes it more useful for countdown-style planning.
        </p>

        <h2>How to Use the Days Until Calculator</h2>
        <p>
          Using this calculator is simple. You can enter an event name such as
          exam, birthday, trip or deadline. The event name is optional, but it
          makes the result easier to understand. Then select the target date and
          click the calculate button. The tool will show the total days left,
          completed weeks, remaining days and whether the date is upcoming,
          today or already passed.
        </p>

        <p>
          For example, if your exam is 45 days away, the calculator will show 45
          days left. It will also break that result into completed weeks and
          remaining days. This helps students and planners quickly understand
          how much time is available.
        </p>

        <h2>Where This Countdown Tool is Useful</h2>
        <p>
          A days left calculator is useful for students, parents, teachers,
          professionals and general users. Students can use it to track exam
          preparation time. Teachers can use it for assignment timelines.
          Families can use it for birthdays and events. Professionals can use it
          for deadlines and project planning.
        </p>

        <p>
          Since GyaanBucks is an educational platform, this calculator is also
          useful for learning time management. When learners see how many days
          are left for a goal, they can divide their preparation into smaller
          plans. This makes the countdown more practical than just seeing a date
          on a calendar.
        </p>

        <h2>Days Until vs Date Difference Calculator</h2>
        <p>
          The{' '}
          <Link href="/tools/age-calculator/date-difference-calculator">
            Date Difference Calculator
          </Link>{' '}
          compares two selected dates. This Days Until Calculator starts from
          today and calculates the gap to your target date. If you are comparing
          two past or custom dates, use the date difference tool. If you are
          counting down to an upcoming event, this is the better page.
        </p>

        <p>
          You can also explore related tools such as the{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link>,{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>
          ,{' '}
          <Link href="/tools/age-calculator/age-in-days">
            Age in Days Calculator
          </Link>{' '}
          and{' '}
          <Link href="/tools/age-calculator/age-difference-calculator">
            Age Difference Calculator
          </Link>
          . Each page has a different calculation purpose.
        </p>

        <h2>Why Counting Days Left Helps</h2>
        <p>
          Counting days left helps with planning because it turns a future date
          into a clear number. A deadline may feel far away when it is written
          as a calendar date, but when you see that only 12 days are left, the
          urgency becomes clearer. For students, this can support better study
          planning and revision schedules.
        </p>

        <p>
          This calculator is built to be simple, fast and learner-friendly. It
          does not replace detailed planning, but it gives a clear starting
          point. Once you know the number of days left, you can divide your
          study, practice, travel preparation or project work accordingly.
        </p>

        <h2>Important Note</h2>
        <p>
          This tool uses today’s date from your device/browser environment and
          compares it with the selected target date. For official deadlines,
          exam dates or legal submissions, always verify the exact date and time
          from the official source. Some deadlines may close at a specific time,
          not just on a date.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>Days Until Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>How do I calculate how many days are left?</h3>
          <p>
            Select your target date and press calculate. The tool will show how
            many days are left from today.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can I use it for exam countdown?</h3>
          <p>
            Yes, you can enter your exam date and use it as an exam countdown
            calculator.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can I add an event name?</h3>
          <p>
            Yes, the event name is optional. It helps make your countdown result
            easier to read.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>What if the selected date is already passed?</h3>
          <p>
            The calculator will show how many days have already passed since
            that date.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this calculator free?</h3>
          <p>Yes, the Days Until Calculator is free on GyaanBucks.</p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
