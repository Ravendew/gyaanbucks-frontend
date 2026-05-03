import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import SchoolAdmissionAgeClient from './SchoolAdmissionAgeClient';

export const metadata: Metadata = {
  title: 'School Admission Age Calculator - Check Child Age for Admission',
  description:
    'Use our School Admission Age Calculator to check your child age for school admission, LKG, UKG, Class 1 and eligibility by date of birth.',
  keywords: [
    'school admission age calculator',
    'age calculator for school admission',
    'child age calculator for school admission',
    'lkg admission age calculator',
    'ukg admission age calculator',
    'class 1 admission age calculator',
    'school age eligibility calculator',
  ],
  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/school-admission-age-calculator',
  },
};

export default function SchoolAdmissionAgeCalculatorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I calculate age for school admission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter the child date of birth and admission cutoff date. The calculator will show the child exact age in years, months and days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this calculator for LKG admission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this calculator can be used to check child age for LKG, UKG, Class 1 and other school admission levels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is school admission age same in every state?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, school admission age rules may vary by state, board and school. Always verify the final eligibility rule from the official school or education department.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this tool decide admission eligibility automatically?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This tool calculates exact age. Admission eligibility depends on the school, board, state rules and cutoff date.',
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
              <strong>School Admission Age Calculator</strong>
            </nav>

            <h1 className={styles.title}>School Admission Age Calculator</h1>

            <p className={styles.description}>
              Use this free School Admission Age Calculator to check your
              child’s exact age for LKG, UKG, Class 1 and other school admission
              levels. Enter the date of birth and admission cutoff date to get
              the age in years, months and days.
            </p>

            <SchoolAdmissionAgeClient />

            <section className={styles.content}>
              <h2>What is a School Admission Age Calculator?</h2>
              <p>
                A School Admission Age Calculator is an online tool that helps
                parents calculate their child’s exact age for school admission.
                Many schools ask for the child’s age as of a specific cutoff
                date. Instead of manually calculating the age, you can enter the
                date of birth and the admission cutoff date to get the exact age
                instantly.
              </p>

              <h2>Why Age Calculation is Important for School Admission</h2>
              <p>
                School admission age rules are important because schools and
                education boards usually define minimum age criteria for
                nursery, LKG, UKG, Class 1 and higher classes. Even a small
                difference of a few days can affect eligibility in some cases.
                That is why parents should calculate the exact completed age
                before filling admission forms.
              </p>

              <h2>How to Use This School Admission Age Calculator</h2>
              <p>
                To use this calculator, enter your child’s date of birth in the
                first section. Then enter the admission cutoff date mentioned by
                the school or education department. The tool will calculate the
                child’s exact age on that selected date. You can use this result
                while checking school admission eligibility, comparing admission
                rules, or preparing documents.
              </p>

              <h2>Common School Admission Cutoff Dates</h2>
              <p>
                Different schools and states may follow different cutoff dates.
                Some schools calculate age as of March 31, some use June 1, and
                some may use the start date of the academic year. Private
                schools, CBSE schools, state board schools and international
                schools may also have different admission policies. This
                calculator gives the exact age, but final eligibility should
                always be confirmed with the school.
              </p>

              <h2>Where This Calculator Can Help</h2>
              <p>
                Parents can use this tool before applying for nursery admission,
                LKG admission, UKG admission, Class 1 admission and school
                transfer cases. It is also useful when comparing admission age
                rules across schools. If the school asks for age as of a
                particular date, simply enter that date as the cutoff date and
                calculate the exact age.
              </p>

              <h2>Important Note for Parents</h2>
              <p>
                This calculator is created for easy age calculation only. It
                does not replace official school admission rules. Minimum and
                maximum age limits may change based on state government
                notifications, school board rules and individual school
                policies. Use this tool to calculate the age accurately, then
                verify eligibility from the official admission notice.
              </p>

              <h2>Benefits of Using This Tool</h2>
              <ul>
                <li>Calculate child age for school admission instantly</li>
                <li>Useful for LKG, UKG, nursery and Class 1 admission</li>
                <li>Works with any admission cutoff date</li>
                <li>Shows exact age in years, months and days</li>
                <li>Simple, free and mobile-friendly calculator</li>
              </ul>
            </section>

            <section className={styles.content}>
              <h2>Frequently Asked Questions</h2>

              <h3>How do I calculate my child age for school admission?</h3>
              <p>
                Enter your child’s date of birth and the admission cutoff date.
                The calculator will show the exact age in years, months and
                days.
              </p>

              <h3>Can I use this for LKG admission age?</h3>
              <p>
                Yes. You can use this calculator for LKG, UKG, nursery, Class 1
                and other school admission age checks.
              </p>

              <h3>What cutoff date should I enter?</h3>
              <p>
                Enter the cutoff date mentioned by the school or education
                department in the admission notification.
              </p>

              <h3>Is school admission age same for all schools?</h3>
              <p>
                No. Admission age rules may vary by school, board, state and
                academic year.
              </p>

              <h3>Does this calculator confirm admission eligibility?</h3>
              <p>
                No. This calculator shows exact age. Final eligibility depends
                on the official school admission rules.
              </p>
            </section>

            <section className={styles.content}>
              <h2>People Also Search For</h2>
              <ul>
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
                  <Link href="/tools/age-calculator">exact age calculator</Link>
                </li>
                <li>
                  <Link href="/tools/percentage-calculator">
                    percentage calculator online
                  </Link>
                </li>
              </ul>
            </section>

            <section className={styles.links}>
              <h3>Related Tools</h3>
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
                  <Link href="/tools">All Online Calculators</Link>
                </li>
                <li>
                  <Link href="/quizzes">Play Quiz and Earn Rewards</Link>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h3>Popular Tools</h3>
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
                  <Link href="/tools/percentage-calculator">
                    Percentage Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>Admission Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator">
                    School Admission Age
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator-telangana">
                    Telangana School Age
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator">Exact Age Calculator</Link>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>Explore GyaanBucks</h3>
              <ul>
                <li>
                  <Link href="/tools">All Calculators</Link>
                </li>
                <li>
                  <Link href="/quizzes">Play Quizzes</Link>
                </li>
                <li>
                  <Link href="/categories">Quiz Categories</Link>
                </li>
                <li>
                  <Link href="/refer-earn">Refer and Earn</Link>
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
      </main>

      <Footer />
    </>
  );
}
