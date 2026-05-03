import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import SscAgeClient from './SscAgeClient';

export const metadata: Metadata = {
  title: 'SSC Age Calculator - Check Age Eligibility for SSC Exams',
  description:
    'Use the SSC Age Calculator to check your age eligibility for SSC CGL, CHSL, MTS and other SSC exams based on your date of birth and eligibility date.',

  keywords: [
    'ssc age calculator',
    'ssc cgl age calculator',
    'ssc chsl age calculator',
    'ssc mts age calculator',
    'ssc age limit calculator',
    'ssc eligibility age calculator',
  ],

  alternates: {
    canonical: 'https://gyaanbucks.com/tools/age-calculator/ssc-age-calculator',
  },

  openGraph: {
    title: 'SSC Age Calculator - Check SSC Exam Eligibility',
    description:
      'Check your age eligibility for SSC CGL, CHSL, MTS and other SSC exams instantly.',
    url: 'https://gyaanbucks.com/tools/age-calculator/ssc-age-calculator',
    siteName: 'GyaanBucks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SSC Age Calculator',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SSC Age Calculator - Check SSC Exam Eligibility',
    description:
      'Find your SSC exam age eligibility instantly using this free calculator.',
    images: ['/og-image.png'],
  },
};

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

export default function SscAgeCalculatorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is SSC age calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SSC age is calculated using your date of birth and the cutoff date mentioned in the official SSC notification.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is SSC cutoff date?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SSC cutoff date is the reference date on which your age is calculated for exam eligibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this calculator for SSC CGL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this calculator can be used for SSC CGL, CHSL, MTS and other SSC exams by entering the correct cutoff date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this calculator include age relaxation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator shows your exact age. You should compare the result with official SSC age relaxation rules for your category.',
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
              <strong>SSC Age Calculator</strong>
            </nav>

            <h1 className={styles.title}>SSC Age Calculator</h1>

            <p className={styles.description}>
              Use this SSC Age Calculator to check your exact age eligibility
              for SSC CGL, CHSL, MTS, GD and other SSC exams based on your date
              of birth and official cutoff date.
            </p>

            <SscAgeClient />

            <section className={styles.content}>
              <h2>What is SSC Age Calculator?</h2>

              <p>
                SSC Age Calculator is an online tool that helps candidates
                calculate their exact age for Staff Selection Commission exams.
                SSC conducts several competitive exams such as SSC CGL, SSC
                CHSL, SSC MTS, SSC GD Constable, Stenographer and other posts.
                In all these exams, age eligibility is one of the most important
                conditions before submitting the application form.
              </p>

              <p>
                Many candidates make mistakes while calculating their age
                manually. This usually happens because SSC does not calculate
                age based on today’s date. Instead, age is calculated based on a
                specific cutoff date mentioned in the official notification.
                This calculator helps you enter your date of birth and the
                cutoff date to get the exact age in years, months and days.
              </p>

              <h2>How to Calculate Age for SSC Exams</h2>

              <p>
                To calculate your age for SSC exams, you need two details: your
                date of birth and the SSC cutoff date. The date of birth should
                match your official documents such as Aadhaar, SSC certificate,
                birth certificate or other valid proof. The cutoff date should
                be taken from the official SSC notification for that exam year.
              </p>

              <p>
                After entering both dates, click the calculate button. The tool
                will show your exact completed age. You can then compare this
                result with the minimum and maximum age limit for your selected
                SSC exam or post. This makes the eligibility checking process
                easier and helps avoid mistakes before applying.
              </p>

              <h2>What is SSC Cutoff Date?</h2>

              <p>
                SSC cutoff date is the reference date used to calculate your age
                for eligibility. For example, if an SSC notification says the
                age should be calculated as on 1st August of the exam year, then
                your age on that exact date will be considered. Your age today
                may be different, but the official eligibility depends only on
                the cutoff date.
              </p>

              <p>
                This is why the cutoff date field is important. If you enter the
                wrong cutoff date, the result may not match the official
                eligibility rule. Always check the latest SSC notification and
                use the exact cutoff date mentioned there.
              </p>

              <h2>SSC Age Limit Overview</h2>

              <p>
                SSC exams have different age limits depending on the post,
                department and exam type. SSC CGL posts may have age limits such
                as 18 to 27 years, 18 to 30 years or 18 to 32 years depending on
                the job profile. SSC CHSL usually has an age range around 18 to
                27 years. SSC MTS may have age limits such as 18 to 25 years or
                18 to 27 years depending on the post.
              </p>

              <p>
                Because age limits vary, this calculator does not assume one
                fixed eligibility rule for all SSC exams. Instead, it gives your
                exact age so that you can compare it with the official
                notification. This is a safer and more accurate method.
              </p>

              <h2>SSC Age Relaxation Rules</h2>

              <p>
                SSC provides age relaxation for eligible reserved categories as
                per government rules. OBC candidates commonly get relaxation of
                3 years. SC and ST candidates commonly get relaxation of 5
                years. PwD candidates, ex-servicemen and other special
                categories may receive additional relaxation depending on the
                post and notification.
              </p>

              <p>
                This tool calculates your actual age only. After getting your
                exact age, you should check whether any age relaxation applies
                to your category. Final eligibility must always be verified from
                the official SSC notification because category rules may differ
                by exam and post.
              </p>

              <h2>Why SSC Aspirants Should Use This Tool</h2>

              <p>
                Manual age calculation can be confusing because months have
                different numbers of days and leap years can affect the result.
                Some candidates only subtract birth year from exam year, but
                that method is not always accurate. Eligibility depends on the
                exact completed age on the cutoff date.
              </p>

              <p>
                This SSC age calculator saves time and reduces confusion. It is
                useful before filling the application form, while checking exam
                eligibility, while planning future attempts and while comparing
                different SSC exams. If you are applying for more than one SSC
                exam, you can change the cutoff date and calculate your age for
                each exam separately.
              </p>

              <h2>Useful for SSC CGL, CHSL, MTS and GD</h2>

              <p>
                This calculator can be used for SSC CGL age eligibility, SSC
                CHSL age eligibility, SSC MTS age eligibility, SSC GD age
                eligibility and other SSC recruitment exams. You only need to
                enter the date of birth and the correct cutoff date for that
                notification.
              </p>

              <p>
                Students and job aspirants can also use related tools on
                GyaanBucks such as UPSC Age Calculator, Age Calculator by DOB,
                Date Difference Calculator and Days Until Calculator for other
                exam and planning needs.
              </p>

              <h2>Important Tips for SSC Candidates</h2>

              <p>
                Always download and read the official SSC notification before
                applying. Check the age limit, cutoff date, category relaxation,
                educational qualification and post-wise criteria carefully. Keep
                your date of birth proof ready because document verification is
                strict and the DOB in your application should match your
                official records.
              </p>

              <p>
                Use this calculator as a quick and accurate age calculation
                helper. It does not replace the official notification, but it
                helps you avoid manual mistakes and understand your eligibility
                better before applying.
              </p>

              <h2>Benefits of Using This SSC Age Calculator</h2>

              <ul>
                <li>Calculate exact SSC age using DOB and cutoff date</li>
                <li>Useful for SSC CGL, CHSL, MTS, GD and other exams</li>
                <li>Helps avoid manual age calculation mistakes</li>
                <li>Supports exam planning and future attempt checking</li>
                <li>Free, fast and mobile-friendly online calculator</li>
              </ul>
            </section>

            <section className={styles.content}>
              <h2>Frequently Asked Questions</h2>

              <h3>How is SSC age calculated?</h3>
              <p>
                SSC age is calculated by comparing your date of birth with the
                cutoff date mentioned in the official SSC notification.
              </p>

              <h3>What is SSC cutoff date?</h3>
              <p>
                SSC cutoff date is the official reference date used to check
                whether a candidate meets the required age limit.
              </p>

              <h3>Can I use this for SSC CGL?</h3>
              <p>
                Yes. Enter your DOB and the SSC CGL cutoff date to calculate
                your exact age for SSC CGL eligibility.
              </p>

              <h3>Can I use this for SSC CHSL and MTS?</h3>
              <p>
                Yes. You can use this calculator for SSC CHSL, MTS, GD and other
                SSC exams by entering the correct cutoff date.
              </p>

              <h3>Does this calculator include category relaxation?</h3>
              <p>
                The calculator shows your exact age. You should compare it with
                official age relaxation rules for your category.
              </p>
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
              <h3>📅 Date Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/date-difference-calculator">
                    Date Difference Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/days-until-calculator">
                    Days Until Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarBox}>
              <h3>🏫 Admission Tools</h3>
              <ul>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator">
                    School Admission Age Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/age-calculator/school-admission-age-calculator/telangana">
                    Telangana School Admission Age
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
                  <Link href="/quizzes">Play Quizzes</Link>
                </li>
                <li>
                  <Link href="/categories">Quiz Categories</Link>
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
