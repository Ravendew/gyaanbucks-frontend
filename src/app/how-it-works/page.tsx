'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const steps = [
  {
    number: '01',
    title: 'Choose a Quiz',
    text: 'Pick quizzes from GK, Science, India, Sports, Current Affairs and more categories.',
    icon: '🎯',
  },
  {
    number: '02',
    title: 'Play & Answer',
    text: 'Answer simple questions within the timer and complete the quiz successfully.',
    icon: '⚡',
  },
  {
    number: '03',
    title: 'Earn Points',
    text: 'Win points based on your quiz performance and keep growing your wallet balance.',
    icon: '🪙',
  },
  {
    number: '04',
    title: 'Redeem Rewards',
    text: 'Use your earned points to request redeem when you reach the minimum redeem limit.',
    icon: '🎁',
  },
];

const benefits = [
  'Daily quiz earning opportunity',
  'Simple point-based wallet system',
  'Category-wise quiz experience',
  'Secure redeem approval process',
];

function isLoggedIn() {
  if (typeof window === 'undefined') return false;

  const possibleKeys = [
    'token',
    'authToken',
    'accessToken',
    'user',
    'currentUser',
    'gyaanbucks_user',
    'gyaanbucks_token',
  ];

  return possibleKeys.some((key) => {
    const value = localStorage.getItem(key);
    return value !== null && value !== '';
  });
}

export default function HowItWorksPage() {
  const router = useRouter();

  const handleProtectedNavigation = (path: string) => {
    if (!isLoggedIn()) {
      router.push('/auth');
      return;
    }

    router.push(path);
  };

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.badge}>How GyaanBucks Works</span>

                <h1 className={styles.title}>
                  Play quizzes, build knowledge, and earn reward points.
                </h1>

                <p className={styles.description}>
                  GyaanBucks is a simple quiz rewards platform where users can
                  play knowledge-based quizzes, collect points, and request
                  rewards through a transparent redeem system.
                </p>

                <div className={styles.heroActions}>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() => handleProtectedNavigation('/quizzes')}
                  >
                    Start Playing
                  </button>

                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => handleProtectedNavigation('/profile')}
                  >
                    View Wallet
                  </button>
                </div>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.rewardIcon}>🏆</div>
                <h2>Play. Learn. Earn.</h2>
                <p>
                  Complete quizzes, improve your score, and grow your reward
                  points every day.
                </p>

                <div className={styles.statsBox}>
                  <div>
                    <strong>100+</strong>
                    <span>Players Online</span>
                  </div>
                  <div>
                    <strong>Daily</strong>
                    <span>Quiz Rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.stepsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span>Simple Process</span>
              <h2>Start earning in 4 easy steps</h2>
              <p>
                No complicated process. Just select, play, earn points, and
                redeem when eligible.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {steps.map((step) => (
                <div className={styles.stepCard} key={step.number}>
                  <div className={styles.stepTop}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <span className={styles.stepIcon}>{step.icon}</span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="container">
            <div className={styles.benefitsCard}>
              <div>
                <span className={styles.badge}>Why Users Like It</span>
                <h2>Designed for daily quiz engagement</h2>
                <p>
                  GyaanBucks keeps the quiz experience clean, fast, and
                  rewarding with a point-based wallet and admin-managed redeem
                  settings.
                </p>
              </div>

              <div className={styles.benefitsList}>
                {benefits.map((item) => (
                  <div className={styles.benefitItem} key={item}>
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
