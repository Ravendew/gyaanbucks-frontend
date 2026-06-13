import type { Metadata } from 'next';
import Link from 'next/link';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Free Online Calculators - Age, Health, Finance, Math & Student Tools',
  description:
    'Explore free online calculators from GyaanBucks including age calculator, school admission age calculator, percentage calculator, BMI calculator, loan calculator, date calculator and more.',
  keywords: [
    'free online calculators',
    'calculator tools',
    'age calculator',
    'school admission age calculator',
    'percentage calculator',
    'BMI calculator',
    'loan calculator',
    'financial calculators',
    'math calculators',
    'student calculators',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com/tools',
  },
  openGraph: {
    title: 'Free Online Calculators - GyaanBucks Tools',
    description:
      'Find useful online calculators for age, dates, school admission, health, finance, math, students and everyday tasks.',
    url: 'https://gyaanbucks.com/tools',
    siteName: 'GyaanBucks',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Calculators - GyaanBucks Tools',
    description:
      'Use free calculators for age, school admission, percentage, BMI, finance, dates and more.',
    images: ['/og-image.png'],
  },
};

const calculatorGroups = [
  {
    title: 'Financial Calculators',
    icon: '💰',
    description:
      'Useful calculators for loans, EMI, interest, savings, salary and financial planning.',
    items: [
      ['Mortgage Calculator', null],
      ['Loan Calculator', null],
      ['EMI Calculator', null],
      ['Auto Loan Calculator', null],
      ['Interest Calculator', null],
      ['Payment Calculator', null],
      [
        'Retirement Calculator',
        '/tools/age-calculator/retirement-age-calculator',
      ],
      ['Investment Calculator', null],
      ['Compound Interest Calculator', null],
      ['Income Tax Calculator', null],
      ['Salary Calculator', null],
      ['Sales Tax Calculator', null],
    ],
  },
  {
    title: 'Fitness & Health Calculators',
    icon: '💪',
    description:
      'Health-focused calculators for BMI, calories, weight, pregnancy dates and body measurements.',
    items: [
      ['BMI Calculator', null],
      ['Calorie Calculator', null],
      ['Body Fat Calculator', null],
      ['BMR Calculator', null],
      ['Ideal Weight Calculator', null],
      ['Pregnancy Calculator', null],
      ['Due Date Calculator', null],
    ],
  },
  {
    title: 'Math Calculators',
    icon: '📐',
    description:
      'Simple math calculators for percentages, fractions, scientific calculations and number problems.',
    items: [
      ['Basic Calculator', '/'],
      ['Advanced Calculator', '/'],
      ['Percentage Calculator', '/tools/percentage-calculator'],
      ['Marks Percentage Calculator', '/tools/percentage-calculator'],
      ['Discount Percentage Calculator', '/tools/percentage-calculator'],
      ['Fraction Calculator', null],
      ['Scientific Calculator', null],
      ['Random Number Generator', null],
      ['Triangle Calculator', null],
      ['Standard Deviation Calculator', null],
    ],
  },
  {
    title: 'Age & Date Calculators',
    icon: '🎂',
    description:
      'Calculate exact age, date difference, days until events, birthdays and retirement age.',
    items: [
      ['Age Calculator', '/tools/age-calculator'],
      ['Age by Date of Birth', '/tools/age-calculator/age-by-dob'],
      ['Age in Days', '/tools/age-calculator/age-in-days'],
      [
        'Age Difference Calculator',
        '/tools/age-calculator/age-difference-calculator',
      ],
      [
        'Date Difference Calculator',
        '/tools/age-calculator/date-difference-calculator',
      ],
      ['Days Until Calculator', '/tools/age-calculator/days-until-calculator'],
      [
        'Retirement Age Calculator',
        '/tools/age-calculator/retirement-age-calculator',
      ],
      ['Birthday Calculator', '/tools/age-calculator'],
    ],
  },
  {
    title: 'Student & School Calculators',
    icon: '🏫',
    description:
      'Calculators for school admission age, exams, marks percentage and student planning.',
    items: [
      [
        'School Admission Age Calculator',
        '/tools/school-admission-age-calculator',
      ],
      [
        'LKG Admission Age Calculator',
        '/tools/school-admission-age-calculator',
      ],
      ['Nursery Age Calculator', '/tools/school-admission-age-calculator'],
      ['UKG Age Calculator', '/tools/school-admission-age-calculator'],
      ['Exam Days Calculator', '/tools/age-calculator/days-until-calculator'],
      ['Marks Percentage Calculator', '/tools/percentage-calculator'],
      ['GPA Calculator', null],
      ['Grade Calculator', null],
    ],
  },
  {
    title: 'Other Useful Calculators',
    icon: '🧰',
    description:
      'Everyday calculators and simple tools for fun, time, events and utility needs.',
    items: [
      ['Love Calculator', '/tools/love-calculator'],
      ['Name Compatibility Calculator', '/tools/love-calculator'],
      [
        'Event Countdown Calculator',
        '/tools/age-calculator/days-until-calculator',
      ],
      ['Time Calculator', null],
      ['Hours Calculator', null],
      ['Password Generator', null],
      ['Conversion Calculator', null],
      ['Concrete Calculator', null],
    ],
  },
];

const faqs = [
  {
    q: 'Are GyaanBucks calculators free?',
    a: 'Yes. GyaanBucks calculators are free to use. You can open a calculator and get results directly without login.',
  },
  {
    q: 'Why are some calculators marked coming soon?',
    a: 'We are building calculators one by one with proper logic, mobile-friendly UI and useful explanations instead of publishing empty pages.',
  },
  {
    q: 'Which calculator should I use first?',
    a: 'For everyday use, start with Age Calculator, School Admission Age Calculator, Percentage Calculator or Date Difference Calculator.',
  },
  {
    q: 'Can I use these calculators on mobile?',
    a: 'Yes. GyaanBucks calculators are designed to work clearly on mobile, tablet and desktop screens.',
  },
];

export default function ToolsPage() {
  const hero = (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.eyebrow}>🧮 GyaanBucks Calculator Hub</span>

        <h1>Free Online Calculators for Daily Use</h1>

        <p>
          Explore useful calculators for age, school admission, percentages,
          health, finance, dates, students and everyday tasks. Existing tools
          are active, and new calculators are being added one by one.
        </p>

        <div className={styles.heroActions}>
          <Link href="/tools/age-calculator">Age Calculator</Link>
          <Link href="/tools/school-admission-age-calculator">
            School Admission Age
          </Link>
          <Link href="/tools/percentage-calculator">Percentage Calculator</Link>
        </div>
      </div>
    </section>
  );

  return (
    <ToolPageLayout hero={hero}>
      <section className={styles.directoryIntro}>
        <span>All Calculator Categories</span>
        <h2>Choose a Calculator Category</h2>
        <p>
          Browse active tools and upcoming calculators. We are expanding this
          calculator hub carefully so every page has useful logic, clear results
          and helpful content.
        </p>
      </section>

      <section className={styles.directoryGrid}>
        {calculatorGroups.map((group) => (
          <article key={group.title} className={styles.groupCard}>
            <div className={styles.groupTop}>
              <div className={styles.groupIcon}>{group.icon}</div>
              <div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
            </div>

            <ul>
              {group.items.map(([label, href]) => (
                <li key={label}>
                  {href ? (
                    <Link href={href}>{label}</Link>
                  ) : (
                    <span className={styles.comingSoon}>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.seoSection}>
        <div className={styles.seoCard}>
          <h2>Simple Online Calculators Made for Real-Life Questions</h2>

          <p>
            GyaanBucks tools are created for people who want quick and clear
            answers without confusion. Many calculations look small, but they
            become important when they are connected to school admissions, exam
            results, age eligibility, finance planning, health checks or
            date-based decisions.
          </p>

          <p>
            A parent may want to check whether a child is eligible for LKG. A
            student may want to calculate marks percentage. A working
            professional may want to understand age, dates or salary-related
            values. A general user may simply want a date countdown or a fun
            compatibility score. Our calculator hub brings these tools into one
            clean place.
          </p>

          <h2>Why We Add Calculators Slowly</h2>

          <p>
            Instead of adding hundreds of empty calculator pages, GyaanBucks is
            building calculators step by step. Each calculator should have clear
            logic, helpful examples, mobile-friendly layout, related tools and
            simple explanations. This makes the tool useful for visitors and
            better for long-term SEO.
          </p>

          <h2>Popular Calculator Categories</h2>

          <p>
            Age and date calculators are useful for school forms, job
            eligibility, birthdays, events and planning. Financial calculators
            help users understand loans, interest, salary and savings. Health
            calculators like BMI, calories and ideal weight help users get quick
            estimates. Math calculators help students and everyday users solve
            percentage, fraction and number problems.
          </p>

          <p>
            If a calculator is marked as coming soon, it means we are planning
            to create it properly with complete functionality. Existing links
            are already active and ready to use.
          </p>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.directoryIntro}>
          <span>FAQ</span>
          <h2>Calculator Tools FAQ</h2>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq) => (
            <div key={faq.q} className={styles.faqCard}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </ToolPageLayout>
  );
}
