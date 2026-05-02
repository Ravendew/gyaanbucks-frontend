import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Free Online Tools - Calculators & Useful Tools',
  description:
    'Use free online tools on GyaanBucks including age calculator, EMI calculator, percentage calculator, GST calculator, salary calculator and more. Play quizzes and earn rewards online.',
  keywords: [
    'free online tools',
    'age calculator india',
    'percentage calculator',
    'emi calculator',
    'gst calculator',
    'salary calculator',
    'earn money online quiz',
    'play quiz and earn money',
  ],
  alternates: {
    canonical: '/tools',
  },
};

const tools = [
  {
    title: 'Age Calculator',
    description:
      'Calculate your exact age in years, months and days using your date of birth.',
    href: '/tools/age-calculator',
    badge: 'Live Soon',
  },
  {
    title: 'EMI Calculator',
    description:
      'Calculate monthly loan EMI, interest and total repayment amount easily.',
    href: '/tools/emi-calculator',
    badge: 'Coming Soon',
  },
  {
    title: 'Percentage Calculator',
    description:
      'Calculate percentages, marks percentage, discount percentage and more.',
    href: '/tools/percentage-calculator',
    badge: 'Coming Soon',
  },
  {
    title: 'Salary Calculator',
    description:
      'Estimate monthly salary, yearly income and basic salary breakdown.',
    href: '/tools/salary-calculator',
    badge: 'Coming Soon',
  },
  {
    title: 'GST Calculator',
    description:
      'Calculate GST inclusive and exclusive amounts for Indian tax calculations.',
    href: '/tools/gst-calculator',
    badge: 'Coming Soon',
  },
  {
    title: 'Time Calculator',
    description:
      'Calculate time difference, hours, minutes and duration between times.',
    href: '/tools/time-calculator',
    badge: 'Coming Soon',
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
              Use simple free tools like age calculator, EMI calculator,
              percentage calculator, GST calculator and more. After using tools,
              play quizzes on GyaanBucks and earn rewards online.
            </p>

            <div className={styles.heroActions}>
              <Link href="/quizzes" className={styles.primaryBtn}>
                Play Quiz & Earn Money
              </Link>

              <Link href="/blog" className={styles.secondaryBtn}>
                Read Earning Guides
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionKicker}>Useful Tools</span>
            <h2 className={styles.sectionTitle}>Choose a Free Tool</h2>
            <p className={styles.sectionText}>
              More tools will be added step by step to help users and improve
              organic traffic from Google search.
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

        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div>
              <span className={styles.ctaKicker}>Earn Rewards</span>
              <h2 className={styles.ctaTitle}>
                Use Tools, Learn More, Play Quizzes
              </h2>
              <p className={styles.ctaText}>
                GyaanBucks helps users learn with quizzes, improve general
                knowledge and earn rewards through quiz participation.
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
