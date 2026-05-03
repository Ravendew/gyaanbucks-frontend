import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Free Online Tools - Calculators & Useful Tools',
  description:
    'Use free online tools on GyaanBucks including age calculator, percentage calculator, date difference calculator, days until calculator, retirement age calculator and more.',
  keywords: [
    'free online tools',
    'online calculators',
    'free calculators',
    'age calculator',
    'age calculator india',
    'age calculator by dob',
    'age difference calculator',
    'date difference calculator',
    'days until calculator',
    'retirement age calculator',
    'percentage calculator',
    'quiz and earn money',
    'play quiz and earn rewards',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com/tools',
  },
  openGraph: {
    title: 'Free Online Tools & Calculators - GyaanBucks',
    description:
      'Use free online calculators and tools including age, date, days until, percentage and retirement calculators.',
    url: 'https://gyaanbucks.com/tools',
    siteName: 'GyaanBucks',
    images: [
      {
        url: 'https://gyaanbucks.com/og-images/tools.png',
        width: 1200,
        height: 630,
        alt: 'GyaanBucks Free Online Tools',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Tools & Calculators - GyaanBucks',
    description: 'Use free online calculators and tools on GyaanBucks.',
    images: ['https://gyaanbucks.com/og-images/tools.png'],
  },
};

const tools = [
  {
    title: 'Age Calculator',
    description:
      'Calculate your exact age in years, months and days using your date of birth.',
    href: '/tools/age-calculator',
    badge: 'Live',
  },
  {
    title: 'Age Calculator by DOB',
    description:
      'Find your exact age from date of birth with detailed age breakdown.',
    href: '/tools/age-calculator/age-by-dob',
    badge: 'Live',
  },
  {
    title: 'Age in Days Calculator',
    description:
      'Calculate your total age in days, weeks, months, hours and minutes.',
    href: '/tools/age-calculator/age-in-days',
    badge: 'Live',
  },
  {
    title: 'Age Difference Calculator',
    description:
      'Calculate the exact age gap between two people by date of birth.',
    href: '/tools/age-calculator/age-difference-calculator',
    badge: 'Live',
  },
  {
    title: 'Date Difference Calculator',
    description:
      'Find the difference between two dates in days, weeks, months and years.',
    href: '/tools/age-calculator/date-difference-calculator',
    badge: 'Live',
  },
  {
    title: 'Days Until Calculator',
    description:
      'Calculate how many days are left until any date, event, exam or deadline.',
    href: '/tools/age-calculator/days-until-calculator',
    badge: 'Live',
  },
  {
    title: 'UPSC Age Calculator',
    description:
      'Check UPSC age eligibility based on date of birth and cutoff date.',
    href: '/tools/age-calculator/upsc-age-calculator',
    badge: 'Live',
  },
  {
    title: 'SSC Age Calculator',
    description:
      'Calculate age eligibility for SSC exams like CGL, CHSL and MTS.',
    href: '/tools/age-calculator/ssc-age-calculator',
    badge: 'Live',
  },
  {
    title: 'Retirement Age Calculator',
    description:
      'Calculate your retirement date and remaining working years by DOB.',
    href: '/tools/age-calculator/retirement-age-calculator',
    badge: 'Live',
  },
  {
    title: 'Percentage Calculator',
    description:
      'Calculate percentage, marks percentage, discounts and value changes.',
    href: '/tools/percentage-calculator',
    badge: 'Live',
  },
];

export default function ToolsPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.kicker}>Free Tools</span>

            <h1 className={styles.title}>Free Online Tools & Calculators</h1>

            <p className={styles.subtitle}>
              Use simple free online tools like age calculator, date difference
              calculator, days until calculator, percentage calculator and
              retirement age calculator. After using tools, explore quizzes on
              GyaanBucks and improve your knowledge with reward-based quiz
              learning.
            </p>

            <div className={styles.heroActions}>
              <Link href="/quizzes" className={styles.primaryBtn}>
                Practice Quizzes
              </Link>

              <Link href="/tools" className={styles.secondaryBtn}>
                Explore Learning Tools
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionKicker}>Useful Tools</span>
            <h2 className={styles.sectionTitle}>Choose a Free Tool</h2>
            <p className={styles.sectionText}>
              Select from free calculators and useful online tools created for
              students, job seekers, parents, professionals and daily users.
            </p>
          </div>

          <div className={styles.grid}>
            {tools.map((tool) => (
              <Link key={tool.title} href={tool.href} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>✦</span>
                  <span className={styles.badge}>{tool.badge}</span>
                </div>

                <h3 className={styles.cardTitle}>{tool.title}</h3>

                <p className={styles.cardText}>{tool.description}</p>

                <span className={styles.cardLink}>Open Tool →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionKicker}>
              Why Use GyaanBucks Tools?
            </span>
            <h2 className={styles.sectionTitle}>
              Simple Calculators for Daily Use
            </h2>
            <p className={styles.sectionText}>
              GyaanBucks tools are created to make everyday calculations simple,
              fast and easy to understand. Instead of searching multiple
              websites for different calculators, users can access useful tools
              in one place. These calculators are helpful for age calculation,
              date duration, exam eligibility, retirement planning, percentage
              calculation and many other daily needs.
            </p>
            <p className={styles.sectionText}>
              The main goal of this tools section is to provide clean,
              mobile-friendly and beginner-friendly calculators. Every tool is
              designed with a simple input form, clear result section and
              helpful explanation. Whether you are a student checking exam
              eligibility, a parent calculating school admission age, a
              professional planning a deadline or a user checking retirement
              age, these tools can save time and avoid manual calculation
              mistakes.
            </p>
            <p className={styles.sectionText}>
              Age-related tools are especially useful because many official
              forms, school admissions, government exams and job applications
              require exact age. A small mistake in age calculation can create
              confusion, especially when eligibility depends on a cutoff date.
              That is why GyaanBucks includes multiple age calculators such as
              Age Calculator by DOB, Age in Days Calculator, Age Difference
              Calculator, UPSC Age Calculator, SSC Age Calculator and Retirement
              Age Calculator.
            </p>
            <p className={styles.sectionText}>
              Date tools are also important for planning. The Date Difference
              Calculator helps users calculate the difference between two dates,
              while the Days Until Calculator works like a countdown tool for
              events, exams, birthdays, trips and deadlines. These tools are
              useful for students, families, employees, business owners and
              anyone who needs quick date-based answers.
            </p>
            <p className={styles.sectionText}>
              GyaanBucks is not only a calculators website. It also combines
              tools with quizzes, learning and rewards. After using a
              calculator, users can explore quiz categories, play quizzes,
              improve general knowledge and participate in reward-based
              activities. This makes the website useful for both practical
              calculations and engaging learning.
            </p>
            <p className={styles.sectionText}>
              More tools will be added step by step, including finance
              calculators, salary calculators, GST tools, EMI tools, time tools
              and other useful online utilities. The long-term goal is to build
              a complete tools hub where users can solve common calculation
              needs quickly and also discover helpful educational content.
            </p>
            <p className={styles.sectionText}>
              All tools are planned with search-friendly content, internal
              linking and clear user experience. This helps users find the right
              tool easily and also helps search engines understand the website
              structure. If you use these tools regularly, you can bookmark this
              page and quickly access all calculators from one place.
            </p>
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionKicker}>
              Popular Tool Categories
            </span>
            <h2 className={styles.sectionTitle}>
              Age, Date, Percentage and More
            </h2>
            <p className={styles.sectionText}>
              The tools available on this page are grouped around high-use
              categories. Age calculators help with date of birth, exam
              eligibility and retirement planning. Date calculators help with
              days between dates and countdown planning. Percentage tools help
              with marks, discounts, increase and decrease calculations. These
              categories will continue expanding as more tools are added.
            </p>
            <p className={styles.sectionText}>
              If you are preparing for exams, start with UPSC Age Calculator or
              SSC Age Calculator. If you are filling a form, use Age Calculator
              by DOB. If you are planning an event or deadline, use Days Until
              Calculator or Date Difference Calculator. If you are checking
              financial or academic values, use Percentage Calculator.
            </p>
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionKicker}>
              Frequently Asked Questions
            </span>
            <h2 className={styles.sectionTitle}>
              FAQs About Free Online Tools
            </h2>

            <h3 className={styles.cardTitle}>Are GyaanBucks tools free?</h3>
            <p className={styles.sectionText}>
              Yes, the calculators and tools available on GyaanBucks are free to
              use.
            </p>

            <h3 className={styles.cardTitle}>
              Can I use these tools on mobile?
            </h3>
            <p className={styles.sectionText}>
              Yes, all tools are designed to work on mobile, tablet and desktop
              devices.
            </p>

            <h3 className={styles.cardTitle}>
              Which tool should I use for age by date of birth?
            </h3>
            <p className={styles.sectionText}>
              Use the Age Calculator by DOB page to calculate exact age from
              date of birth.
            </p>

            <h3 className={styles.cardTitle}>
              Which tool calculates days left until an event?
            </h3>
            <p className={styles.sectionText}>
              Use the Days Until Calculator to calculate how many days are left
              until any event, birthday, exam, trip or deadline.
            </p>

            <h3 className={styles.cardTitle}>Will more tools be added?</h3>
            <p className={styles.sectionText}>
              Yes, more calculators and useful tools will be added step by step.
            </p>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div>
              <span className={styles.ctaKicker}>Earn Rewards</span>
              <h2 className={styles.ctaTitle}>
                Use Tools, Learn More, Play Quizzes
              </h2>
              <p className={styles.ctaText}>
                GyaanBucks helps users learn with quizzes, improve general
                knowledge, and track their learning progress through quiz
                practice.
              </p>
            </div>

            <Link href="/quizzes" className={styles.ctaBtn}>
              Start Quiz Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
