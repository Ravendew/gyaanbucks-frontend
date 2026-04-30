import Link from 'next/link';
import styles from './ReferralSection.module.css';

export default function ReferralSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.box}>
          <div>
            <span className={styles.badge}>🎁 Invite & Earn More</span>
            <h2 className={styles.title}>
              Refer friends and unlock bonus rewards
            </h2>
            <p className={styles.text}>
              Share your referral link. When your friend registers and completes
              required quizzes, you earn bonus points automatically.
            </p>
          </div>

          <Link href="/refer-earn" className={styles.button}>
            Start Referring
          </Link>
        </div>
      </div>
    </section>
  );
}
