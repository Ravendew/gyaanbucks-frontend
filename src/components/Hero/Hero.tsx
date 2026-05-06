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
          <div className={styles.badge}>
            🛠️ Free educational tools & quizzes
          </div>

          <h1 className={styles.title}>
            Free Educational Tools, Calculators <span>& Online Quizzes.</span>
          </h1>

          <p className={styles.subtitle}>
            Use simple online calculators for age, school eligibility,
            percentages and dates. Then practice GK, current affairs and
            learning quizzes to improve your knowledge.
          </p>

          <div className={styles.actions}>
            <Link href="/tools" className={styles.primaryBtn}>
              Explore Tools
            </Link>

            <Link href="/quizzes" className={styles.goldBtn}>
              Practice Quizzes
            </Link>
          </div>

          <div className={styles.trustRow}>
            <span>🎂 Age Calculators</span>
            <span>📊 Percentage Tools</span>
            <span>🧠 GK Practice</span>
            <span>📚 Learning Guides</span>
          </div>
        </div>
      </div>
    </section>
  );
}
