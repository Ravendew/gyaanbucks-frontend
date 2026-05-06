import Link from 'next/link';
import styles from './TrendingSearches.module.css';

const searches = [
  {
    label: '🎂 School Admission Age Calculator',
    href: '/tools/age-calculator/school-admission-age-calculator',
  },
  {
    label: '📘 SSC Age Calculator',
    href: '/tools/age-calculator/ssc-age-calculator',
  },
  {
    label: '🧠 UPSC Age Calculator',
    href: '/tools/age-calculator/upsc-age-calculator',
  },
  {
    label: '📅 Date Difference Calculator',
    href: '/tools/age-calculator/date-difference-calculator',
  },
  {
    label: '💘 Love Calculator',
    href: '/tools/love-calculator',
  },
  {
    label: '⏳ Retirement Age Calculator',
    href: '/tools/age-calculator/retirement-age-calculator',
  },
  {
    label: '📊 Percentage Calculator',
    href: '/tools/percentage-calculator',
  },
  {
    label: '📆 Days Until Calculator',
    href: '/tools/age-calculator/days-until-calculator',
  },
];

export default function TrendingSearches() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <span className={styles.badge}>🔥 Trending Searches</span>

        <h2 className={styles.title}>Popular Calculators & Quiz Searches</h2>

        <p className={styles.text}>
          Explore trending educational calculators, age tools, quiz pages and
          quick learning utilities used daily by GyaanBucks visitors.
        </p>

        <div className={styles.grid}>
          {searches.map((item) => (
            <Link key={item.href} href={item.href} className={styles.pill}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
