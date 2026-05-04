import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import UpscAgeClient from './UpscAgeClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'UPSC Age Calculator - Check Age Limit and Relaxation',
  description:
    'Use the UPSC Age Calculator to check age eligibility as on 1 August of the exam year with category relaxation for General, OBC, SC/ST and PwBD.',
  keywords: [
    'upsc age calculator',
    'upsc age limit calculator',
    'upsc age relaxation',
    'upsc eligibility age calculator',
    'civil services age calculator',
  ],
  alternates: {
    canonical:
      'https://gyaanbucks.com/tools/age-calculator/upsc-age-calculator',
  },
  openGraph: {
    title: 'UPSC Age Calculator - Check Age Limit and Relaxation',
    description:
      'Check UPSC age eligibility using DOB, exam year and category relaxation.',
    url: 'https://gyaanbucks.com/tools/age-calculator/upsc-age-calculator',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPSC Age Calculator - Check Age Limit and Relaxation',
    description:
      'Free UPSC age eligibility calculator with category relaxation.',
  },
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'UPSC Age Calculator',
  url: 'https://gyaanbucks.com/tools/age-calculator/upsc-age-calculator',
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
      name: 'What is the UPSC Age Calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UPSC Age Calculator helps candidates calculate their age as on 1 August of the selected exam year and check age eligibility by category.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cutoff date does this UPSC age calculator use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This calculator uses 1 August of the selected exam year as the default cutoff date for age calculation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator include UPSC category relaxation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it includes category-based maximum age limits for General/EWS, OBC, SC/ST and PwBD categories.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this UPSC age result official?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, this tool is for educational guidance. Candidates should always verify final eligibility from the official UPSC notification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this for UPSC CSE age eligibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use it for a basic UPSC Civil Services age eligibility check, but official notification rules should be followed for final confirmation.',
      },
    },
  ],
};

export default function UpscAgePage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>UPSC Eligibility Learning Tool</p>
        <h1>UPSC Age Calculator</h1>
        <p>
          Check your UPSC age eligibility using date of birth, exam year and
          category relaxation. This tool calculates age as on 1 August of the
          selected exam year.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <Script
        id="upsc-age-webapplication-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <Script
        id="upsc-age-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <UpscAgeClient />

      <section className={styles.contentBlock}>
        <h2>What is the UPSC Age Calculator?</h2>
        <p>
          The UPSC Age Calculator is an educational tool that helps candidates
          calculate their age for UPSC eligibility based on date of birth, exam
          year and category. Unlike a normal age calculator, this tool does not
          simply calculate your age as of today. It calculates your age as on a
          specific UPSC-style cutoff date, which is important for competitive
          exam eligibility checks.
        </p>

        <p>
          For UPSC Civil Services preparation, age calculation can create
          confusion because candidates need to check their completed age as on a
          given date. This calculator uses 1 August of the selected exam year as
          the default cutoff date and compares your date of birth with that
          date. It then shows your age in years, months and days, along with a
          simple eligibility status.
        </p>

        <h2>How this UPSC Age Calculator Works</h2>
        <p>
          To use the calculator, enter your date of birth, choose the exam year
          and select your category. The tool calculates your completed age as on
          1 August of that exam year. After calculating your age, it compares
          the result with the minimum and maximum age limit for the selected
          category.
        </p>

        <p>
          The calculator currently uses common category-based age ranges:
          General/EWS candidates are checked against 21 to 32 years, OBC
          candidates against 21 to 35 years, SC/ST candidates against 21 to 37
          years, and PwBD category combinations with higher maximum limits. This
          makes the page more useful than a general age calculator because it
          connects date calculation with exam eligibility logic.
        </p>

        <h2>UPSC Age Limit and Category Relaxation</h2>
        <p>
          UPSC age eligibility is usually discussed in terms of minimum age,
          maximum age and category relaxation. The minimum age is important
          because candidates below the required age cannot apply. The maximum
          age is equally important because candidates above the allowed limit
          may not be eligible unless they belong to a category with relaxation.
        </p>

        <p>
          This tool includes category relaxation options for General/EWS, OBC,
          SC/ST and PwBD combinations. When you select a category, the allowed
          maximum age changes automatically. This gives a quick educational
          estimate of whether you fit within the selected category age range.
          However, the final decision should always be based on the official
          UPSC notification for that year.
        </p>

        <h2>
          Why UPSC Age Calculation is Different from Normal Age Calculation
        </h2>
        <p>
          A normal <Link href="/tools/age-calculator">Age Calculator</Link>{' '}
          calculates age from date of birth to today. The UPSC Age Calculator
          calculates age from date of birth to a fixed cutoff date. That
          difference is very important. A candidate may be one age today but a
          different completed age on the exam cutoff date.
        </p>

        <p>
          For example, if a candidate’s birthday falls after 1 August, their
          completed age as on the UPSC cutoff date may be lower than their age
          later in the same year. This is why using a cutoff-based calculator is
          safer than using a normal DOB calculator for exam eligibility checks.
          For general DOB-based date calculation, you can also use the{' '}
          <Link href="/tools/age-calculator/age-by-dob">
            Age by DOB Calculator
          </Link>
          .
        </p>

        <h2>Who Should Use this Tool?</h2>
        <p>
          This tool is useful for UPSC aspirants, coaching students, parents,
          mentors and anyone checking basic Civil Services age eligibility. It
          can help candidates quickly understand whether their age appears to be
          within the selected category range. It is also useful for comparing
          how age eligibility changes when the exam year changes.
        </p>

        <p>
          Students can use this calculator during early preparation planning. If
          you are deciding whether to attempt UPSC in a particular year, you can
          select that exam year and check your age as on the cutoff date. This
          gives a quick idea, but official notification confirmation is still
          required before applying.
        </p>

        <h2>Related GyaanBucks Age Tools</h2>
        <p>
          If you want only a general age result, use the{' '}
          <Link href="/tools/age-calculator">Age Calculator</Link>. If you want
          to find how many total days you have lived, use the{' '}
          <Link href="/tools/age-calculator/age-in-days">
            Age in Days Calculator
          </Link>
          . To compare two people’s age gap, use the{' '}
          <Link href="/tools/age-calculator/age-difference-calculator">
            Age Difference Calculator
          </Link>
          . For general event and deadline gaps, use the{' '}
          <Link href="/tools/age-calculator/date-difference-calculator">
            Date Difference Calculator
          </Link>{' '}
          or the{' '}
          <Link href="/tools/age-calculator/days-until-calculator">
            Days Until Calculator
          </Link>
          .
        </p>

        <h2>Important Official Note</h2>
        <p>
          This UPSC Age Calculator is built for educational guidance and quick
          understanding. It should not be treated as the final official
          eligibility decision. UPSC rules, cutoff dates, category definitions,
          number of attempts and relaxations must always be checked from the
          latest official UPSC notification. Use this tool as a helpful
          calculator, then verify your final eligibility before submitting any
          application.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2>UPSC Age Calculator FAQs</h2>

        <div className={styles.faqItem}>
          <h3>What cutoff date does this UPSC calculator use?</h3>
          <p>
            It uses 1 August of the selected exam year as the default age cutoff
            date.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does this calculator include OBC age relaxation?</h3>
          <p>
            Yes, the OBC option uses a higher maximum age limit than
            General/EWS.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Does this calculator include SC/ST relaxation?</h3>
          <p>
            Yes, SC/ST category is included with a higher maximum age limit.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Is this result official?</h3>
          <p>
            No. This is an educational calculator. Always check the official
            UPSC notification for final eligibility.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can I change the exam year?</h3>
          <p>
            Yes, you can enter a different exam year and the tool will calculate
            age as on 1 August of that year.
          </p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
