import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import PopularCategories from '@/components/PopularCategories/PopularCategories';
import FeaturedQuizzes from '@/components/FeaturedQuizzes/FeaturedQuizzes';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import StatsSection from '@/components/StatsSection/StatsSection';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'GyaanBucks - Free Online Quizzes, GK Tests & Calculators',
  description:
    'Practice free online quizzes, GK questions, current affairs tests and useful calculators on GyaanBucks. Learn and improve your knowledge with simple quiz and tool pages.',
  keywords: [
    'GyaanBucks',
    'free online quizzes',
    'GK quiz online',
    'general knowledge quiz',
    'current affairs quiz',
    'online quiz test',
    'India GK quiz',
    'educational quiz website',
    'free online calculators',
    'age calculator',
    'percentage calculator',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com',
  },
  openGraph: {
    title: 'GyaanBucks - Free Online Quizzes, GK Tests & Calculators',
    description:
      'Practice quizzes, GK tests, current affairs questions and useful online calculators on GyaanBucks.',
    url: 'https://gyaanbucks.com',
    siteName: 'GyaanBucks',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GyaanBucks - Free Online Quizzes, GK Tests & Calculators',
    description: 'Practice quizzes and use useful calculators online.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PopularCategories />
      <FeaturedQuizzes />
      <HowItWorks />

      <section className={styles.learningSection}>
        <div className={styles.learningCard}>
          <div className={styles.learningContent}>
            <span className={styles.learningBadge}>📚 Learning Progress</span>

            <h2 className={styles.learningTitle}>Learn More with GyaanBucks</h2>

            <p className={styles.learningText}>
              GyaanBucks helps you practice quizzes, improve general knowledge,
              follow current affairs, and use simple educational tools.
              Registered users can save their progress, track learning points,
              and understand category-wise performance over time.
            </p>

            <div className={styles.learningActions}>
              <Link href="/tools" className={styles.primaryBtn}>
                Explore Learning Tools
              </Link>

              <Link href="/quizzes" className={styles.secondaryBtn}>
                Practice Quizzes
              </Link>
            </div>
          </div>

          <div className={styles.learningVisual} aria-hidden="true">
            <div className={styles.visualCard}>
              <span>🧠</span>
              <strong>Quiz Practice</strong>
            </div>

            <div className={styles.visualCard}>
              <span>📊</span>
              <strong>Progress Analytics</strong>
            </div>

            <div className={styles.visualCard}>
              <span>🛠️</span>
              <strong>Useful Tools</strong>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <Footer />
    </>
  );
}
