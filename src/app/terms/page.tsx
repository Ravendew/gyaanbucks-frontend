import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>Legal</span>

              <h1 className={styles.title}>Terms & Conditions</h1>

              <p className={styles.description}>
                Please read these terms carefully before using GyaanBucks. By
                accessing or using our platform, you agree to follow these
                terms.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.card}>
              <div className={styles.block}>
                <h2>1. Platform Usage</h2>
                <p>
                  GyaanBucks is a quiz-based reward platform where users can
                  participate in quizzes and track learning points based on
                  performance. Users must provide accurate information during
                  registration.
                </p>
              </div>

              <div className={styles.block}>
                <h2>2. Account Responsibility</h2>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account details. Any activity performed through your
                  account is your responsibility.
                </p>
              </div>

              <div className={styles.block}>
                <h2>3. Points & Rewards</h2>
                <p>
                  Points earned through quizzes are virtual and have no direct
                  cash value. Redeem requests are subject to admin approval and
                  platform policies.
                </p>
              </div>

              <div className={styles.block}>
                <h2>4. Redeem Policy</h2>
                <p>
                  Users can request redeem only after reaching the minimum
                  required points. Redeem requests may take time for
                  verification and approval.
                </p>
              </div>

              <div className={styles.block}>
                <h2>5. Prohibited Activities</h2>
                <p>
                  Users must not use unfair methods such as bots, automation, or
                  multiple accounts to gain advantages. Any suspicious activity
                  may lead to account suspension.
                </p>
              </div>

              <div className={styles.block}>
                <h2>6. Changes to Platform</h2>
                <p>
                  GyaanBucks reserves the right to modify or discontinue any
                  feature, reward system, or policy at any time without prior
                  notice.
                </p>
              </div>

              <div className={styles.block}>
                <h2>7. Limitation of Liability</h2>
                <p>
                  We are not responsible for any loss, delay, or issue caused by
                  external factors such as payment providers or technical
                  downtime.
                </p>
              </div>

              <div className={styles.block}>
                <h2>8. Contact</h2>
                <p>
                  For any questions regarding these terms, please contact us via
                  the Contact page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
