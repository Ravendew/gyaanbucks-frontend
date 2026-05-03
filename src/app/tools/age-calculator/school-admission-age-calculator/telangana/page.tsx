import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../page.module.css';
import SchoolAdmissionAgeClient from '../SchoolAdmissionAgeClient';

export const metadata: Metadata = {
  title:
    'School Admission Age Calculator Telangana - Check Child Age Eligibility',
  description:
    'Use Telangana School Admission Age Calculator to check child age for nursery, LKG, UKG and Class 1 admission using date of birth and cutoff date.',
  keywords: [
    'school admission age calculator telangana',
    'telangana school admission age calculator',
    'lkg age calculator telangana',
    'ukg age calculator telangana',
    'class 1 age calculator telangana',
    'child age calculator for school admission telangana',
  ],
  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/school-admission-age-calculator/telangana',
  },
};

export default function TelanganaSchoolAdmissionAgePage() {
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
        name: 'How do I calculate school admission age in Telangana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter the child date of birth and the school admission cutoff date. The calculator shows the exact age in years, months and days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can this calculator be used for LKG admission in Telangana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, parents can use this calculator to check child age for nursery, LKG, UKG and Class 1 admission in Telangana.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this page confirm Telangana school admission eligibility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. This tool calculates exact age only. Final eligibility depends on the school, board and official Telangana admission rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'What cutoff date should I use for Telangana school admission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the cutoff date mentioned by the school or official admission notification. Different schools may use different cutoff dates.',
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
              <Link href="/tools/age-calculator/school-admission-age-calculator">
                School Admission Age Calculator
              </Link>
              <span>/</span>
              <strong>Telangana</strong>
            </nav>

            <h1>School Admission Age Calculator Telangana</h1>

            <p className={styles.description}>
              Use this Telangana School Admission Age Calculator to calculate
              your child’s exact age for nursery, LKG, UKG, Class 1 and school
              admission eligibility. Enter date of birth and cutoff date to get
              the child age in years, months and days.
            </p>

            <SchoolAdmissionAgeClient />

            <section className={styles.content}>
              <h2>Telangana School Admission Age Calculator</h2>
              <p>
                This Telangana School Admission Age Calculator helps parents
                calculate the exact age of a child for school admission. Many
                parents in Telangana search for LKG age eligibility, UKG age
                eligibility, nursery admission age and Class 1 admission age
                before applying to schools. This tool gives a simple and
                accurate age result based on date of birth and the selected
                admission cutoff date.
              </p>

              <h2>Why Telangana Parents Need This Tool</h2>
              <p>
                School admission rules may depend on the child’s completed age
                on a particular cutoff date. Some schools may follow academic
                year dates, while others may mention their own admission cutoff
                date in the application notice. Because of this, parents should
                avoid rough age estimates and calculate the exact age before
                submitting admission forms.
              </p>

              <h2>How to Use This Calculator for Telangana Admissions</h2>
              <p>
                First, enter the child’s date of birth. Then enter the cutoff
                date given by the school or admission notification. After
                clicking Calculate Admission Age, the tool displays the exact
                age in years, months and days. This can help you compare the
                result with the minimum age rule mentioned by the school.
              </p>

              <h2>Useful for Nursery, LKG, UKG and Class 1</h2>
              <p>
                This calculator can be used for nursery admission, LKG
                admission, UKG admission and Class 1 admission in Telangana. It
                is also useful for parents comparing admission eligibility
                between different schools, CBSE schools, state board schools and
                private schools. The calculator does not decide eligibility by
                itself; it only calculates the exact age clearly.
              </p>

              <h2>Important Note About Telangana Admission Rules</h2>
              <p>
                Admission age rules can vary depending on the school, board,
                academic year and official notification. Telangana school
                admission age rules should always be checked from the school
                admission circular or official education department notice. Use
                this page as an age calculation helper, not as a final legal
                admission decision.
              </p>

              <h2>Benefits of This Telangana Age Calculator</h2>
              <ul>
                <li>Calculate child age for Telangana school admission</li>
                <li>Useful for nursery, LKG, UKG and Class 1 admission</li>
                <li>Works with custom admission cutoff dates</li>
                <li>Shows exact age in years, months and days</li>
                <li>Simple, free and mobile-friendly for parents</li>
              </ul>
            </section>

            <section className={styles.content}>
              <h2>Frequently Asked Questions</h2>

              <h3>How do I calculate school admission age in Telangana?</h3>
              <p>
                Enter the child date of birth and the school admission cutoff
                date. The calculator shows exact age in years, months and days.
              </p>

              <h3>
                Can this calculator be used for LKG admission in Telangana?
              </h3>
              <p>
                Yes. You can use it for nursery, LKG, UKG, Class 1 and other
                school admission age checks.
              </p>

              <h3>What cutoff date should I enter?</h3>
              <p>
                Enter the cutoff date mentioned by the school or admission
                notice. If the school gives a specific date, use that date for
                accurate calculation.
              </p>

              <h3>Is admission age same in every Telangana school?</h3>
              <p>
                No. Admission age may vary based on school, board, academic year
                and official notification.
              </p>

              <h3>Does this calculator guarantee admission eligibility?</h3>
              <p>
                No. It only calculates exact age. Final eligibility depends on
                official school rules.
              </p>
            </section>

            <section className={styles.content}>
              <h2>People Also Search For</h2>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator">
                    school admission age calculator
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
                <li>
                  <Link href="/tools/age-calculator/age-in-days">
                    age in days calculator
                  </Link>
                </li>
              </ul>
            </section>

            <section className={styles.links}>
              <h3>Related Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator">
                    School Admission Age Calculator
                  </Link>
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
                  <Link href="/tools/age-calculator/school-admission-age-calculator/telangana">
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
