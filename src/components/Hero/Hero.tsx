import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.badge}>🌍 Global quiz rewards platform</div>

          <h1 className={styles.title}>
            Play Smart Quizzes. <span>Earn Real Rewards.</span>
          </h1>

          <p className={styles.subtitle}>
            Join players from everywhere, answer quick quizzes, collect points,
            and redeem rewards with a simple wallet-based system.
          </p>

          <div className={styles.actions}>
            <Link href="/quizzes" className={styles.primaryBtn}>
              Start Playing Now
            </Link>
            <Link href="/refer-earn" className={styles.goldBtn}>
              Refer & Earn
            </Link>
          </div>
        </div>

        <div className={styles.walletWrap}>
          <div className={styles.coinOne}></div>
          <div className={styles.coinTwo}></div>
          <div className={styles.coinThree}></div>

          <div className={styles.walletCard}>
            <div className={styles.cardHeader}>
              <span className={styles.liveBadge}>● Live Rewards</span>
              <span className={styles.cardIcon}>⚡</span>
            </div>

            <h2 className={styles.cardTitle}>Quiz. Score. Redeem.</h2>
            <p className={styles.cardText}>
              Every correct answer moves you closer to wallet points, redeem
              requests, and referral bonuses.
            </p>

            <div className={styles.rewardGrid}>
              <div>
                <strong>Daily</strong>
                <span>Quiz Rewards</span>
              </div>
              <div>
                <strong>Referral</strong>
                <span>Bonus Points</span>
              </div>
              <div>
                <strong>Monthly</strong>
                <span>Redeem Window</span>
              </div>
            </div>

            <Link href="/quizzes" className={styles.cardBtn}>
              Explore Quizzes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
