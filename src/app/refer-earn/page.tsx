import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Refer & Earn - GyaanBucks',
  description:
    'Invite friends to GyaanBucks and earn bonus rewards. Referral rewards coming soon.',
};

const steps = [
  {
    number: '01',
    title: 'Invite Friends',
    text: 'Share your GyaanBucks referral link with friends and family.',
  },
  {
    number: '02',
    title: 'Friend Joins',
    text: 'Your friend signs up and becomes a GyaanBucks user.',
  },
  {
    number: '03',
    title: 'Friend Plays Quizzes',
    text: 'They start playing quizzes and earning rewards.',
  },
  {
    number: '04',
    title: 'You Earn Bonus Points',
    text: 'You receive referral bonus points once the reward flow goes live.',
  },
];

export default function ReferEarnPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.badge}>Coming Soon</span>

                <h1>
                  Refer Friends.
                  <span> Earn More Rewards.</span>
                </h1>

                <p>
                  GyaanBucks Refer & Earn is launching soon. Invite your
                  friends, let them play quizzes, and earn exciting bonus points
                  when the referral system becomes active.
                </p>

                <div className={styles.actions}>
                  <Link href="/quizzes" className={styles.primaryButton}>
                    Play Quizzes
                  </Link>

                  <Link href="/how-it-works" className={styles.secondaryButton}>
                    How It Works
                  </Link>
                </div>
              </div>

              <div className={styles.rewardCard}>
                <div className={styles.coinGlow}>₹</div>
                <h2>Referral Rewards</h2>
                <p>Invite. Play. Earn.</p>

                <div className={styles.rewardBox}>
                  <span>Bonus Points</span>
                  <strong>Coming Soon</strong>
                </div>

                <div className={styles.rewardNote}>
                  Referral tracking, bonus rules, and reward limits will be
                  available after launch.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span>Future Referral Flow</span>
              <h2>How Refer & Earn Will Work</h2>
              <p>
                Once enabled, users can share their referral link and earn bonus
                rewards when invited friends join and play quizzes.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {steps.map((step) => (
                <div className={styles.stepCard} key={step.number}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaCard}>
              <span>Referral Program Launching Soon</span>
              <h2>Start earning today by playing quizzes</h2>
              <p>
                Until Refer & Earn goes live, continue playing quizzes and
                collecting wallet rewards on GyaanBucks.
              </p>

              <Link href="/quizzes" className={styles.ctaButton}>
                Start Playing Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
