import type { Metadata } from 'next';
import Link from 'next/link';
import ToolPageLayout from '@/components/ToolPageLayout/ToolPageLayout';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Free Learning Tools - Calculators for Students',
  description:
    'Explore free educational tools from GyaanBucks including age calculators, date calculators, school admission age calculator, UPSC age calculator and percentage calculators for students.',
};

const tools = [
  {
    title: 'Age Calculator',
    href: '/tools/age-calculator',
    desc: 'Calculate exact age from date of birth in years, months and days.',
  },
  {
    title: 'Age by DOB',
    href: '/tools/age-calculator/age-by-dob',
    desc: 'Find your exact age using only your date of birth.',
  },
  {
    title: 'Age in Days',
    href: '/tools/age-calculator/age-in-days',
    desc: 'Calculate how many total days old you are with milestone details.',
  },
  {
    title: 'Age Difference Calculator',
    href: '/tools/age-calculator/age-difference-calculator',
    desc: 'Compare two dates of birth and find the exact age gap.',
  },
  {
    title: 'Date Difference Calculator',
    href: '/tools/age-calculator/date-difference-calculator',
    desc: 'Calculate the difference between any two dates.',
  },
  {
    title: 'Days Until Calculator',
    href: '/tools/age-calculator/days-until-calculator',
    desc: 'Find how many days are left until an upcoming date or event.',
  },
  {
    title: 'UPSC Age Calculator',
    href: '/tools/age-calculator/upsc-age-calculator',
    desc: 'Check UPSC age eligibility using cut-off date and category relaxation.',
  },
  {
    title: 'School Admission Age Calculator',
    href: '/tools/age-calculator/school-admission-age-calculator',
    desc: 'Check child age for Nursery, LKG, UKG and Class 1 admission.',
  },
  {
    title: 'Love Calculator',
    href: '/tools/love-calculator',
    desc: 'Check love compatibility between two names with fun animated results.',
  },
];

export default function ToolsPage() {
  const hero = (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>GyaanBucks Learning Tools</p>

        <h1>Free Educational Calculators and Learning Tools</h1>

        <p>
          Use simple, accurate and student-friendly tools to calculate age,
          percentages, exam eligibility, date difference, school admission age
          and more.
        </p>
      </div>
    </div>
  );

  return (
    <ToolPageLayout hero={hero}>
      <section className={styles.grid}>
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className={styles.card}>
            <h2>{tool.title}</h2>
            <p>{tool.desc}</p>
          </Link>
        ))}
      </section>
    </ToolPageLayout>
  );
}
