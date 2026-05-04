import Link from 'next/link';
import styles from './ToolSidebar.module.css';

export default function ToolSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Popular Tools</h3>

      <ul className={styles.list}>
        <li>
          <Link href="/tools/age-calculator">Age Calculator</Link>
        </li>
        <li>
          <Link href="/tools/age-calculator/age-by-dob">Age by DOB</Link>
        </li>
        <li>
          <Link href="/tools/age-calculator/age-in-days">Age in Days</Link>
        </li>
        <li>
          <Link href="/tools/age-calculator/age-difference-calculator">
            Age Difference
          </Link>
        </li>
        <li>
          <Link href="/tools/age-calculator/date-difference-calculator">
            Date Difference
          </Link>
        </li>
        <li>
          <Link href="/tools/age-calculator/days-until-calculator">
            Days Until Calculator
          </Link>
        </li>
        <li>
          <Link href="/tools/age-calculator/upsc-age-calculator">
            UPSC Age Calculator
          </Link>
        </li>
        <li>
          <Link href="/tools/age-calculator/school-admission-age-calculator">
            School Admission Age
          </Link>
        </li>
      </ul>

      <div className={styles.card}>
        <h4>Improve Your Knowledge 🚀</h4>
        <p>
          Practice quizzes daily and track your learning progress with
          GyaanBucks.
        </p>
        <Link href="/quizzes" className={styles.cta}>
          Explore Quizzes
        </Link>
      </div>
    </aside>
  );
}
