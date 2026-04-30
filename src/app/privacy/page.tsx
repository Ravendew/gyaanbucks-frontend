import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>Legal</span>

              <h1 className={styles.title}>Privacy Policy</h1>

              <p className={styles.description}>
                This Privacy Policy explains how GyaanBucks collects, uses, and
                protects your information when you use our platform.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.card}>
              <div className={styles.block}>
                <h2>1. Information We Collect</h2>
                <p>
                  We may collect basic user information such as name, email,
                  mobile number, and usage data when you register or interact
                  with our platform.
                </p>
              </div>

              <div className={styles.block}>
                <h2>2. How We Use Information</h2>
                <p>
                  Your information is used to provide services such as quiz
                  access, reward tracking, account management, and improving the
                  overall user experience.
                </p>
              </div>

              <div className={styles.block}>
                <h2>3. Cookies & Tracking</h2>
                <p>
                  We may use cookies and similar technologies to enhance user
                  experience, track usage patterns, and improve platform
                  performance.
                </p>
              </div>

              <div className={styles.block}>
                <h2>4. Third-Party Ads</h2>
                <p>
                  We may use third-party advertising services such as Google Ads
                  and Propeller Ads. These services may use cookies and tracking
                  technologies to display relevant ads to users.
                </p>
              </div>

              <div className={styles.block}>
                <h2>5. Data Security</h2>
                <p>
                  We take reasonable measures to protect user data. However, no
                  system is completely secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>

              <div className={styles.block}>
                <h2>6. User Rights</h2>
                <p>
                  Users have the right to access, update, or delete their data.
                  You can contact us if you want to modify or remove your
                  information.
                </p>
              </div>

              <div className={styles.block}>
                <h2>7. Children’s Information</h2>
                <p>
                  Our platform is not intended for children under 13. We do not
                  knowingly collect personal data from children.
                </p>
              </div>

              <div className={styles.block}>
                <h2>8. Changes to Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page.
                </p>
              </div>

              <div className={styles.block}>
                <h2>9. Contact</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us through the Contact page.
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
