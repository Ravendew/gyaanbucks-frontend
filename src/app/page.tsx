import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import HomeCalculator from '@/components/HomeCalculator/HomeCalculator';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'GyaanBucks - Free Online Calculators & Educational Tools',
  description:
    'Use free online calculators and educational tools for age, school admission age, percentage, date difference, days until events, love compatibility and more.',
  keywords: [
    'free online calculators',
    'online calculators',
    'age calculator',
    'school admission age calculator',
    'percentage calculator',
    'date difference calculator',
    'days until calculator',
    'love calculator',
    'educational tools',
    'student calculators',
    'parent calculators India',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com',
  },
  openGraph: {
    title: 'GyaanBucks - Free Online Calculators & Educational Tools',
    description:
      'Simple and useful online calculators for students, parents and everyday users.',
    url: 'https://gyaanbucks.com',
    siteName: 'GyaanBucks',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GyaanBucks - Free Online Calculators & Educational Tools',
    description:
      'Use free online calculators for age, school admission, percentage, dates and more.',
    images: ['/og-image.png'],
  },
};

const toolGroups = [
  {
    title: 'Financial Calculators',
    icon: '💰',
    items: [
      ['Mortgage Calculator', null],
      ['Loan Calculator', null],
      ['Auto Loan Calculator', null],
      ['Interest Calculator', null],
      ['Payment Calculator', null],
      [
        'Retirement Calculator',
        '/tools/age-calculator/retirement-age-calculator',
      ],
      ['Investment Calculator', null],
      ['Income Tax Calculator', null],
      ['Compound Interest Calculator', null],
      ['Salary Calculator', null],
      ['Sales Tax Calculator', null],
    ],
  },
  {
    title: 'Fitness & Health Calculators',
    icon: '💪',
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
    items: [
      ['Basic Calculator', '/'],
      ['Advanced Calculator', '/'],
      ['Percentage Calculator', '/tools/percentage-calculator'],
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
    items: [
      ['Age Calculator', '/tools/age-calculator'],
      ['Age by Date of Birth', '/tools/age-calculator/age-by-dob'],
      [
        'Age Difference Calculator',
        '/tools/age-calculator/age-difference-calculator',
      ],
      [
        'School Admission Age Calculator',
        '/tools/school-admission-age-calculator',
      ],
      [
        'Retirement Age Calculator',
        '/tools/age-calculator/retirement-age-calculator',
      ],
      [
        'Date Difference Calculator',
        '/tools/age-calculator/date-difference-calculator',
      ],
      ['Days Until Calculator', '/tools/age-calculator/days-until-calculator'],
      ['Birthday Calculator', '/tools/age-calculator'],
    ],
  },
  {
    title: 'Student & School Calculators',
    icon: '🏫',
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
    title: 'Other Calculators',
    icon: '🧰',
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
    q: 'Are GyaanBucks calculators free to use?',
    a: 'Yes. GyaanBucks calculators are free to use. You can open a tool, enter your values and get the result without creating an account.',
  },
  {
    q: 'Which calculator is most useful for parents?',
    a: 'The School Admission Age Calculator is very useful for Indian parents because it helps check Nursery, LKG, UKG and school admission age eligibility.',
  },
  {
    q: 'Can students use these calculators?',
    a: 'Yes. Students can use percentage calculators, date calculators, exam countdown tools and age calculators for everyday academic needs.',
  },
  {
    q: 'Do I need to login to use GyaanBucks tools?',
    a: 'No. Login is not required. GyaanBucks is now focused on free calculator tools that work directly from the browser.',
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeCalculator />

        <section className={styles.directory}>
          <div className={styles.sectionHead}>
            <span>🧮 Calculator Directory</span>
            <h2>Popular Free Online Calculators</h2>
            <p>
              Pick a calculator category and open the tool you need. GyaanBucks
              keeps tools simple, mobile-friendly and easy to understand.
            </p>
          </div>

          <div className={styles.directoryGrid}>
            {toolGroups.map((group) => (
              <div key={group.title} className={styles.groupCard}>
                <div className={styles.groupIcon}>{group.icon}</div>
                <h3>{group.title}</h3>

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
              </div>
            ))}
          </div>

          <div className={styles.allToolsWrap}>
            <Link href="/tools" className={styles.allToolsBtn}>
              View All Calculators →
            </Link>
          </div>
        </section>

        <section className={styles.contentSection}>
          <article className={styles.contentBox}>
            <h2>Free Online Calculators for Everyday Use</h2>

            <p>
              GyaanBucks is built for people who want quick, clear and simple
              answers without opening complicated spreadsheets or doing manual
              calculations again and again. Many small calculations look easy at
              first, but once dates, months, percentages, school age limits or
              eligibility rules are involved, mistakes happen very easily. A
              clean online calculator saves time and gives confidence.
            </p>

            <p>
              Our focus is practical. We create calculators that are useful for
              students, parents, working professionals and everyday internet
              users. Whether you want to calculate exact age, check your child’s
              school admission eligibility, count days between two dates, know
              how many days are left for an exam, or calculate marks percentage,
              GyaanBucks tools are designed to give answers in a simple format.
            </p>

            <h2>Why a Calculator Website Still Matters</h2>

            <p>
              People usually search for a calculator when they need clarity
              immediately. A parent may be filling a school admission form late
              at night and suddenly feel confused about the child’s eligible
              class. A student may complete exams and want to calculate marks
              percentage before sharing results with family. A job aspirant may
              need to check age eligibility for an application. Someone may want
              to compare two dates for a personal milestone. These small
              questions matter because they are connected to real decisions.
            </p>

            <p>
              That is why GyaanBucks avoids unnecessary complexity. The pages
              are made to be readable, simple and fast. The result should not
              feel like a technical report. It should feel like a useful answer
              that anyone can understand.
            </p>

            <h2>Age and Date Calculators</h2>

            <p>
              Age-related calculations are among the most common searches
              online. The Age Calculator helps users calculate exact age in
              years, months and days. This is useful for school forms, job
              applications, birthday planning, document verification and
              personal records. Instead of counting manually from date of birth,
              users can enter a date and get the completed age instantly.
            </p>

            <p>
              Date calculators are also useful for planning. A Date Difference
              Calculator helps find the gap between two dates. A Days Until
              Calculator helps count how many days are left for an exam,
              birthday, festival, event, deadline or personal goal. These tools
              are simple, but they are used often because dates are part of
              daily life.
            </p>

            <h2>School Admission Age Calculator for Indian Parents</h2>

            <p>
              One of the most useful tools on GyaanBucks is the School Admission
              Age Calculator. Many Indian parents feel confused during admission
              season because every school may mention a slightly different age
              rule or cut-off date. A child may turn four years old in the same
              year, but if the birthday falls after the school’s cut-off date,
              the child may not be eligible for LKG that year.
            </p>

            <p>
              This is why parents should not check only the birth year. Exact
              date of birth matters. The calculator helps parents understand
              Nursery, LKG, UKG and school admission eligibility in a clearer
              way. It reduces guesswork before filling forms, visiting schools
              or paying registration charges.
            </p>

            <h2>Percentage Calculator for Students and Daily Work</h2>

            <p>
              Percentages are used everywhere. Students use them for marks.
              Parents use them to understand results. Shoppers use them for
              discounts. Professionals use them in reports, growth numbers and
              comparisons. A Percentage Calculator makes these small tasks
              easier and faster.
            </p>

            <p>
              Instead of remembering formulas every time, users can enter values
              and get the result quickly. This is especially useful on mobile
              when someone wants a fast answer without opening a spreadsheet or
              calculator app.
            </p>

            <h2>Simple Design for Mobile Users</h2>

            <p>
              Many visitors open calculator websites from mobile phones. That
              means the design must be readable on small screens. Inputs should
              be easy to tap, buttons should not feel crowded, and results
              should be visible without confusion. GyaanBucks keeps this in mind
              while designing every tool.
            </p>

            <p>
              The goal is simple: open the calculator, enter the value, see the
              answer, and move forward. A good calculator should not waste the
              user’s time.
            </p>

            <h2>Who Can Use GyaanBucks?</h2>

            <p>
              Students can use GyaanBucks for percentage calculation, date
              difference, exam countdowns and quick learning-related tools.
              Parents can use it for school admission age, child age calculation
              and education planning. Working professionals can use calculators
              for simple date and percentage needs. General users can use fun
              tools like the Love Calculator or birthday-related calculations.
            </p>

            <p>
              We are gradually adding tools based on real search needs. The aim
              is not to add hundreds of random pages. The aim is to build useful
              calculators that solve clear questions.
            </p>

            <h2>No Login Needed</h2>

            <p>
              GyaanBucks tools do not require login. You can directly open a
              calculator and use it. This keeps the experience simple and
              removes unnecessary steps. The website is now focused on tools,
              calculators and helpful educational pages.
            </p>

            <div className={styles.ctaBox}>
              <h3>Start with these popular tools</h3>
              <div>
                <Link href="/tools/age-calculator">Age Calculator</Link>
                <Link href="/tools/school-admission-age-calculator">
                  School Admission Age Calculator
                </Link>
                <Link href="/tools/percentage-calculator">
                  Percentage Calculator
                </Link>
                <Link href="/tools/age-calculator/days-until-calculator">
                  Days Until Calculator
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqInner}>
            <div className={styles.sectionHead}>
              <span>❓ FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <div key={faq.q} className={styles.faqCard}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
