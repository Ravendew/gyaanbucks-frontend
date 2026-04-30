import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const values = [
  {
    icon: '🎯',
    title: 'Knowledge First',
    text: 'We focus on simple quiz experiences that help users learn while playing.',
  },
  {
    icon: '🪙',
    title: 'Reward Points',
    text: 'Users can earn points through valid quiz participation and track them in wallet.',
  },
  {
    icon: '🔐',
    title: 'Fair Platform',
    text: 'GyaanBucks uses rules, attempt limits, and admin approval to keep the platform fair.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.badge}>About GyaanBucks</span>

                <h1 className={styles.title}>
                  A quiz rewards platform built for smart learners.
                </h1>

                <p className={styles.description}>
                  GyaanBucks helps users improve general knowledge through
                  category-based quizzes while earning reward points through a
                  clean and transparent system.
                </p>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.heroIcon}>🏆</div>
                <h2>Play. Learn. Earn.</h2>
                <p>
                  Our goal is to make online learning more engaging, rewarding,
                  and accessible for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.storySection}>
          <div className="container">
            <div className={styles.storyCard}>
              <span className={styles.badge}>Our Mission</span>

              <h2>Making daily learning simple and rewarding</h2>

              <p>
                GyaanBucks is designed for users who enjoy quizzes, current
                affairs, general knowledge, science, sports, and learning-based
                challenges. The platform encourages users to participate daily,
                improve their knowledge, and collect reward points.
              </p>

              <p>
                We believe learning should feel exciting, not boring. That is
                why GyaanBucks combines quiz gameplay, wallet points, referral
                rewards, and redeem features in one simple platform.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span>What We Focus On</span>
              <h2>Built with trust, clarity, and engagement</h2>
              <p>
                Every feature is planned to keep the platform simple for users
                and manageable from the admin panel.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((item) => (
                <div className={styles.valueCard} key={item.title}>
                  <div className={styles.valueIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
