import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBubbleOne}></div>
      <div className={styles.bgBubbleTwo}></div>
      <div className={styles.bgBubbleThree}></div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <div className={styles.badge}>🌍 Free quiz & learning platform</div>

          <h1 className={styles.title}>
            Practice Smart Quizzes. <span>Improve Your Knowledge.</span>
          </h1>

          <p className={styles.subtitle}>
            Play free online quizzes, practice GK and current affairs, use
            helpful calculators, and track your learning progress with points
            and category-wise performance.
          </p>

          <div className={styles.actions}>
            <Link href="/quizzes" className={styles.primaryBtn}>
              Start Practicing
            </Link>
            <Link href="/tools" className={styles.goldBtn}>
              Explore Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
