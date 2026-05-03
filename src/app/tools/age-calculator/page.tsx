import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AgeCalculatorClient from './AgeCalculatorClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Age Calculator - Calculate Exact Age by Date of Birth',
  description:
    'Use this free Age Calculator to calculate exact age from date of birth in years, months and days. Find age by DOB, total days, age difference and more.',
  keywords: [
    'age calculator',
    'age calculator india',
    'age calculator by date of birth',
    'date of birth calculator',
    'dob calculator',
    'calculate age',
    'calculate age from dob',
    'birthday calculator',
    'exact age calculator',
    'age calculator online',
    'age in days calculator',
    'age difference calculator',
    'date difference calculator',
    'days until calculator',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com/tools/age-calculator',
  },
  openGraph: {
    title: 'Age Calculator - Calculate Exact Age by Date of Birth',
    description:
      'Free online age calculator to calculate exact age in years, months and days using date of birth.',
    url: 'https://gyaanbucks.com/tools/age-calculator',
    siteName: 'GyaanBucks',
    images: [
      {
        url: 'https://gyaanbucks.com/og-images/age-calculator.png',
        width: 1200,
        height: 630,
        alt: 'Age Calculator',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator - Calculate Exact Age by DOB',
    description:
      'Calculate your age instantly using this free DOB age calculator.',
    images: ['https://gyaanbucks.com/og-images/age-calculator.png'],
  },
};

const ageTools = [
  {
    title: 'Age Calculator by DOB',
    text: 'Calculate your exact age using date of birth with a detailed age breakdown.',
    href: '/tools/age-calculator/age-by-dob',
  },
  {
    title: 'Age in Days Calculator',
    text: 'Find your total age in days, weeks, months, hours, minutes and seconds.',
    href: '/tools/age-calculator/age-in-days',
  },
  {
    title: 'Age Difference Calculator',
    text: 'Calculate the exact age difference between two people by date of birth.',
    href: '/tools/age-calculator/age-difference-calculator',
  },
  {
    title: 'Date Difference Calculator',
    text: 'Find the difference between two dates in days, weeks, months and years.',
    href: '/tools/age-calculator/date-difference-calculator',
  },
  {
    title: 'Days Until Calculator',
    text: 'Calculate how many days are left until any date, event, exam or deadline.',
    href: '/tools/age-calculator/days-until-calculator',
  },
  {
    title: 'UPSC Age Calculator',
    text: 'Check UPSC age eligibility using date of birth and official cutoff date.',
    href: '/tools/age-calculator/upsc-age-calculator',
  },
  {
    title: 'SSC Age Calculator',
    text: 'Calculate SSC exam age eligibility for CGL, CHSL, MTS and other posts.',
    href: '/tools/age-calculator/ssc-age-calculator',
  },
  {
    title: 'Retirement Age Calculator',
    text: 'Calculate your retirement date and remaining working years by DOB.',
    href: '/tools/age-calculator/retirement-age-calculator',
  },
];

const moreTools = [
  {
    title: 'Percentage Calculator',
    text: 'Calculate percentage, marks percentage, discounts and value changes.',
    href: '/tools/percentage-calculator',
  },
  {
    title: 'EMI Calculator',
    text: 'Calculate monthly loan EMI and interest.',
    href: '/tools/emi-calculator',
  },
  {
    title: 'Salary Calculator',
    text: 'Estimate monthly and yearly salary.',
    href: '/tools/salary-calculator',
  },
  {
    title: 'GST Calculator',
    text: 'Calculate GST inclusive and exclusive values.',
    href: '/tools/gst-calculator',
  },
  {
    title: 'Time Calculator',
    text: 'Calculate time difference and duration.',
    href: '/tools/time-calculator',
  },
];

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  description:
    'Free online age calculator to calculate exact age in years, months and days from date of birth.',
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
      name: 'How is age calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Age is calculated by comparing your date of birth with the selected calculation date. The result is shown in years, months and days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I calculate age for a past or future date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can select any past, present or future date to calculate age at a specific point in time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between age calculator and DOB calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both tools are similar. A DOB calculator calculates exact age from date of birth, while an age calculator may also include advanced options like age in days, age difference and age at a selected date.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this age calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this age calculator is completely free to use on GyaanBucks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this calculator on mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the age calculator works on mobile, tablet and desktop devices.',
      },
    },
  ],
};

export default function AgeCalculatorPage() {
  return (
    <>
      <Script
        id="age-calculator-tool-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />

      <Script
        id="age-calculator-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.kicker}>Free Tool</span>
            <h1 className={styles.title}>Age Calculator</h1>
            <p className={styles.subtitle}>
              Calculate your exact age in years, months and days using your date
              of birth. This free age calculator is simple, fast and useful for
              students, job applications, exam forms, school admission, official
              documents and daily age calculation.
            </p>
          </div>
        </section>

        <AgeCalculatorClient />

        <section className={styles.moreToolsSection}>
          <div className={styles.moreToolsHeader}>
            <h2>All Age Calculators</h2>
            <p>
              Explore all age-related calculators including DOB age calculator,
              age in days, age difference, exam age eligibility and retirement
              age tools.
            </p>
          </div>

          <div className={styles.toolsGrid}>
            {ageTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className={styles.toolCard}
              >
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
                <span>Open Tool →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.moreToolsSection}>
          <div className={styles.moreToolsHeader}>
            <h2>More Free Tools</h2>
            <p>Explore more useful calculators and tools.</p>
          </div>

          <div className={styles.toolsGrid}>
            {moreTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className={styles.toolCard}
              >
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
                <span>Open Tool →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <h2>What is an Age Calculator?</h2>
            <p>
              An age calculator is a simple online tool that helps you calculate
              your exact age from your date of birth. Instead of manually
              counting years, months and days, you can enter your birth date and
              instantly know your current age. This makes it useful for
              students, parents, employees, job applicants and anyone who needs
              accurate age information quickly.
            </p>

            <p>
              This tool works as an age calculator, date of birth calculator,
              DOB calculator and birthday calculator. You can calculate age for
              today or for a selected date. For example, you can calculate your
              age as of a school admission cutoff date, exam eligibility date,
              job application date or any future date.
            </p>

            <h2>How to Use This Age Calculator?</h2>
            <p>
              To calculate your age, enter your date of birth and click the
              calculate button. The calculator compares your birth date with the
              selected date and shows your exact age in years, months and days.
              Some users only need the basic age result, while others may need a
              detailed breakdown such as total months, total weeks, total days,
              hours, minutes or seconds.
            </p>

            <p>
              If you want more detailed calculations, you can also use related
              tools like the Age in Days Calculator, Age Difference Calculator
              and Date Difference Calculator. These tools help users solve
              different date and age-related needs from one place.
            </p>

            <h2>Why Exact Age Calculation Matters</h2>
            <p>
              Exact age calculation is important in many situations. Government
              exams, job applications, school admissions, pension eligibility,
              insurance forms and official documents may require accurate age. A
              small mistake in calculating age can create confusion, especially
              when eligibility depends on a fixed cutoff date.
            </p>

            <p>
              For example, if an exam notification says age should be calculated
              as of a specific date, you cannot rely on a rough estimate. You
              need the exact age in completed years, months and days. This is
              where an online age calculator becomes helpful.
            </p>

            <h2>Common Uses of Age Calculator</h2>
            <p>
              People use age calculators for many practical reasons. Students
              use them for exam eligibility, parents use them for school
              admission age checks, employees use them for official forms, and
              individuals use them for birthday planning or personal records.
              Age calculators are also useful for comparing ages between two
              people or finding total days lived.
            </p>

            <p>
              On GyaanBucks, this main age calculator acts as a hub for multiple
              related tools. You can calculate exact age, age by date of birth,
              age in days, age difference, date difference, days until an event,
              UPSC age eligibility, SSC age eligibility and retirement age.
            </p>

            <h2>Age Calculator for Exams and Jobs</h2>
            <p>
              Many exam and job notifications mention a minimum and maximum age
              limit. In India, exams like UPSC and SSC usually calculate age
              based on a particular cutoff date. Instead of manually checking
              whether you are eligible, you can use dedicated pages like UPSC
              Age Calculator and SSC Age Calculator.
            </p>

            <p>
              These calculators help candidates understand their exact age and
              compare it with the official eligibility criteria. However, final
              eligibility should always be verified from the official
              notification because rules may change by category, post and year.
            </p>

            <h2>Age Calculator for School Admission</h2>
            <p>
              Parents often need to calculate a child’s exact age for nursery,
              LKG, UKG or Class 1 admission. Many schools follow a cutoff date
              and ask for the child’s age as of that date. A simple age
              calculator helps parents avoid manual mistakes and check the age
              before filling admission forms.
            </p>

            <p>
              You can also use school admission-related age calculators on
              GyaanBucks when you need more specific results based on admission
              cutoff dates.
            </p>

            <h2>Benefits of Using GyaanBucks Age Calculator</h2>
            <ul>
              <li>Free online age calculation from date of birth</li>
              <li>
                Useful for students, parents, employees and job applicants
              </li>
              <li>
                Helps calculate age for forms, exams and official documents
              </li>
              <li>Works on mobile, tablet and desktop devices</li>
              <li>Includes links to advanced age and date calculators</li>
              <li>Simple design with fast and clear results</li>
            </ul>

            <h2>Why Use GyaanBucks Tools?</h2>
            <p>
              GyaanBucks provides useful free tools and quiz-based learning in
              one place. After calculating your age, you can explore more
              calculators, read helpful content and play quizzes to improve your
              general knowledge. The goal is to make everyday calculations
              simple while also helping users learn and engage with useful
              content.
            </p>

            <p>
              As more tools are added, GyaanBucks will become a complete hub for
              calculators, quizzes and learning resources. You can bookmark this
              page and use it whenever you need quick age or date-related
              calculations.
            </p>

            <div className={styles.contentCta}>
              <Link href="/quizzes">Play Quiz & Earn Money</Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2>Frequently Asked Questions</h2>

            <div className={styles.faqItem}>
              <h3>How is age calculated?</h3>
              <p>
                Age is calculated by comparing your date of birth with the
                selected calculation date. The result is shown in years, months
                and days.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I calculate age for a past or future date?</h3>
              <p>
                Yes, you can select any date to calculate age at a specific
                point in time.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How to calculate age from date of birth?</h3>
              <p>
                Enter your birth date and select the calculation date. The tool
                automatically calculates your exact age in years, months and
                days.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Is this age calculator free?</h3>
              <p>
                Yes, this age calculator is completely free to use on
                GyaanBucks.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I use this calculator on mobile?</h3>
              <p>
                Yes, the age calculator works perfectly on mobile, tablet and
                desktop.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
