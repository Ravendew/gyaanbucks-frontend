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
                protects your information when you use our educational quizzes,
                tools, and learning features.
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
                  We may collect basic information such as your name, email
                  address, mobile number, account details, quiz activity,
                  learning progress, device information, browser type, and
                  general usage data when you register, use our tools, or
                  interact with our platform.
                </p>
              </div>

              <div className={styles.block}>
                <h2>2. How We Use Your Information</h2>
                <p>
                  We use your information to provide access to quizzes,
                  calculators, learning tools, account features, progress
                  tracking, user support, website improvements, security
                  monitoring, and a better overall user experience.
                </p>
              </div>

              <div className={styles.block}>
                <h2>3. Cookies and Tracking Technologies</h2>
                <p>
                  GyaanBucks may use cookies and similar technologies to improve
                  website functionality, remember user preferences, understand
                  usage patterns, measure performance, and improve our content
                  and services.
                </p>
              </div>

              <div className={styles.block}>
                <h2>4. Analytics</h2>
                <p>
                  We may use analytics tools such as Google Analytics to
                  understand how visitors use our website. These tools may
                  collect information such as visited pages, device type,
                  browser type, approximate location, and interaction data. This
                  helps us improve our educational content and user experience.
                </p>
              </div>

              <div className={styles.block}>
                <h2>5. Advertising Partners</h2>
                <p>
                  GyaanBucks may display advertisements through advertising
                  partners such as Google AdSense. Advertising partners may use
                  cookies or similar technologies to show relevant ads and
                  measure ad performance. Users can manage cookie preferences
                  through their browser settings.
                </p>
              </div>

              <div className={styles.block}>
                <h2>6. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites or
                  external services. We are not responsible for the privacy
                  practices, content, or policies of those third-party websites.
                  Users should review the privacy policies of external websites
                  before sharing personal information.
                </p>
              </div>

              <div className={styles.block}>
                <h2>7. Data Security</h2>
                <p>
                  We take reasonable steps to protect user information from
                  unauthorized access, misuse, loss, or disclosure. However, no
                  online platform or electronic storage system can be guaranteed
                  to be completely secure.
                </p>
              </div>

              <div className={styles.block}>
                <h2>8. User Rights</h2>
                <p>
                  Users may request access, correction, or deletion of their
                  personal information by contacting us. We will make reasonable
                  efforts to respond to such requests in accordance with
                  applicable laws and platform requirements.
                </p>
              </div>

              <div className={styles.block}>
                <h2>9. Children’s Privacy</h2>
                <p>
                  GyaanBucks is intended for general educational use and is not
                  directed at children under the age of 13. We do not knowingly
                  collect personal information from children under 13. If you
                  believe that a child has provided personal information, please
                  contact us so that we can take appropriate action.
                </p>
              </div>

              <div className={styles.block}>
                <h2>10. Data Retention</h2>
                <p>
                  We may retain user information for as long as necessary to
                  provide our services, maintain account records, improve
                  website functionality, comply with legal obligations, and
                  resolve disputes.
                </p>
              </div>

              <div className={styles.block}>
                <h2>11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our services, legal requirements, or website
                  practices. Any updates will be posted on this page with the
                  latest revision date.
                </p>
              </div>

              <div className={styles.block}>
                <h2>12. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or how we
                  handle your information, please contact us through our Contact
                  page or email us at support@gyaanbucks.com.
                </p>
              </div>

              <div className={styles.block}>
                <p>
                  <strong>Last updated:</strong> May 2026
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
