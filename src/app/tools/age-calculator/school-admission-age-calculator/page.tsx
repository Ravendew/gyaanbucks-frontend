import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import SchoolAdmissionAgeClient from './SchoolAdmissionAgeClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'School Admission Age Calculator - Check Class Eligibility',
  description:
    'Use the School Admission Age Calculator to check a child’s age for Nursery, LKG, UKG and Class 1 admission based on date of birth and admission date.',
  keywords: [
    'school admission age calculator',
    'nursery admission age calculator',
    'lkg age calculator',
    'ukg age calculator',
    'class 1 admission age calculator',
    'child age calculator for school admission',
  ],
  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/school-admission-age-calculator',
  },
  openGraph: {
    title: 'School Admission Age Calculator - Check Class Eligibility',
    description:
      'Calculate child age for Nursery, LKG, UKG and Class 1 admission using date of birth and admission date.',
    url: 'https://gyaanbucks.com/tools/age-calculator/school-admission-age-calculator',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Admission Age Calculator',
    description:
      'Free school admission age checker for Nursery, LKG, UKG and Class 1.',
  },
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'School Admission Age Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator/school-admission-age-calculator',
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
      name: 'What is a school admission age calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A school admission age calculator checks a child’s completed age on a selected admission date and gives a basic class eligibility suggestion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this calculator for Nursery admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can select Nursery and enter the child’s date of birth and admission date to check the age status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator follow one fixed rule for all schools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Admission age rules may differ by state, board and school. This calculator gives a helpful estimate and parents should verify the final rule with the school.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which classes are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This calculator supports Nursery, LKG, UKG and Class 1 age checking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this tool free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the GyaanBucks School Admission Age Calculator is free to use.',
      },
    },
  ],
};

export default function SchoolAdmissionAgeCalculatorPage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Parent & Student Tool</p>
        <h1>School Admission Age Calculator</h1>
        <p>
          Check a child’s age for Nursery, LKG, UKG and Class 1 admission using
          date of birth and admission cut-off date. Useful for parents planning
          school admissions.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="school-admission-age-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <Script
        id="school-admission-age-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SchoolAdmissionAgeClient />

      <section className={styles.contentBlock}>
        <h2>What is a School Admission Age Calculator?</h2>
        <p>
          A school admission age calculator is an educational tool that helps
          parents check whether a child’s age is suitable for a selected school
          class. Many parents face confusion during admission season because
          schools usually ask for age as of a specific cut-off date. Instead of
          only looking at the birth year, this calculator checks the child’s
          exact completed age on the selected admission date.
        </p>

        <p>
          This GyaanBucks calculator supports common early school levels such as
          Nursery, LKG, UKG and Class 1. You can enter the child’s date of
          birth, choose the class and select the admission date. The calculator
          then shows the child’s age in years, months and days and gives a
          simple eligibility-style result based on commonly used age ranges.
        </p>

        <h2>Why School Admission Age Checking is Important</h2>
        <p>
          School admission age matters because early education depends on both
          academic readiness and child development. A child who is too young may
          struggle with classroom routine, communication, writing practice,
          attention span and social adjustment. A child who is much older than
          the usual age group may also feel mismatch with classmates. That is
          why many schools and education boards define minimum age rules for
          each entry class.
        </p>

        <p>
          Parents often calculate age by simply subtracting birth year from the
          admission year. This can create mistakes. For example, if a child was
          born in 2021 and admission is being checked for 2026, the child may
          look five years old by year difference. But if the birthday has not
          arrived before the school’s cut-off date, the child may still be four
          years old. Exact age calculation avoids this confusion.
        </p>

        <h2>How to Use this Calculator</h2>
        <p>
          First, select your child’s date of birth. Then choose the class for
          which you want to check admission age. After that, select the
          admission or cut-off date. Many schools use a date such as 31 March, 1
          June or a state-specific academic year cut-off. If your school has
          given a specific date, use that date for better checking.
        </p>

        <p>
          Once you click the calculate button, the tool shows the child’s exact
          age on that selected date. It also compares the age with a general
          school admission range. The result may say the child appears eligible,
          slightly young or above the usual range. This helps parents understand
          the situation before contacting the school.
        </p>

        <h2>Supported Classes and General Age Ranges</h2>
        <p>
          The calculator uses general practical age ranges for early school
          admission. Nursery is usually around 3 years and above, LKG is around
          4 years and above, UKG is around 5 years and above, and Class 1 is
          often around 6 years and above. These are broad reference ranges and
          not a replacement for official school rules.
        </p>

        <p>
          Different schools may follow different rules depending on state
          government guidelines, board policy, city, academic calendar and
          internal admission process. Some schools may allow a small relaxation,
          while others may strictly follow the cut-off date. Therefore, this
          calculator should be used as a planning helper, not as final admission
          approval.
        </p>

        <h2>Useful for Parents During Admission Planning</h2>
        <p>
          Parents can use this tool before applying to multiple schools. If the
          child is close to the minimum age, the result can help parents prepare
          questions for the admission office. For example, they can ask whether
          the school allows age relaxation, whether the cut-off date is fixed,
          and whether the child will be considered for the current academic year
          or next academic year.
        </p>

        <p>
          This is especially useful when parents are comparing Nursery, LKG and
          UKG admission options. Some children may be ready for LKG directly,
          while others may benefit from Nursery first. Age is only one factor.
          Readiness, communication, independence, health, previous preschool
          exposure and emotional comfort are also important.
        </p>

        <h2>School Admission Age and Exact Date Calculation</h2>
        <p>
          Exact date calculation is more reliable than approximate calculation.
          This tool counts completed years first, then completed months and then
          remaining days. That gives a better view of the child’s actual age on
          the selected cut-off date. For admission forms, even a few days can
          matter if the school follows a strict rule.
        </p>

        <p>
          For example, two children born in the same year may not both be
          eligible for the same class if the cut-off date falls between their
          birthdays. This is why a calculator that uses full date of birth is
          more useful than a simple year-based estimate.
        </p>

        <h2>Related GyaanBucks Tools</h2>
        <p>
          You can also use the{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link> to calculate
          general age, the{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>{' '}
          for date-of-birth based age checking, and the{' '}
          <Link href="/tools/age-calculator/date-difference-calculator">
            Date Difference Calculator
          </Link>{' '}
          to compare any two dates. If you are preparing for exams, you may also
          find the{' '}
          <Link href="/tools/age-calculator/upsc-age-calculator">
            UPSC Age Calculator
          </Link>{' '}
          useful.
        </p>

        <p>
          GyaanBucks tools are built for students, parents and learners who want
          simple educational calculators with clean explanations. You can also
          visit the <Link href="/tools">main tools page</Link> and explore quiz
          practice from the <Link href="/quizzes">quizzes section</Link>.
        </p>

        <h2>Important Disclaimer</h2>
        <p>
          This calculator gives a general age-checking result for school
          admission planning. It does not guarantee admission eligibility.
          Always confirm the final admission age rule from the school, education
          department notification or official admission brochure. School
          policies can differ from one institution to another.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>School Admission Age Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>What is the minimum age for Nursery admission?</h3>
          <p>
            Many schools use around 3 years as a general Nursery admission age,
            but the final rule depends on the school and state guidelines.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>What age is usually required for LKG admission?</h3>
          <p>
            LKG admission is commonly around 4 years and above on the school’s
            selected cut-off date.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can this calculator check Class 1 admission age?</h3>
          <p>
            Yes, you can select Class 1 and check whether the child is around
            the general Class 1 entry age.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this calculator valid for all schools in India?</h3>
          <p>
            It gives a general estimate only. Admission rules may vary by state,
            board and school, so parents should verify official rules.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Which date should I select as admission date?</h3>
          <p>
            Use the cut-off date mentioned by the school. If the school has not
            mentioned one, ask the admission office before making a final
            decision.
          </p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
