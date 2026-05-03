import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import PopularCategories from '@/components/PopularCategories/PopularCategories';
import FeaturedQuizzes from '@/components/FeaturedQuizzes/FeaturedQuizzes';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import ReferralSection from '@/components/ReferralSection/ReferralSection';
import StatsSection from '@/components/StatsSection/StatsSection';
import Footer from '@/components/Footer/Footer';

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

      <section
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '24px 20px 8px',
        }}
      >
        <h2 style={{ fontSize: '28px', marginBottom: '14px' }}>
          Popular Online Quizzes
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Link href="/quiz-play/gk-boss-challenge">GK Boss Challenge</Link>
          <Link href="/quiz-play/brainy-india-quiz">Brainy India Quiz</Link>
          <Link href="/quiz-play/todays-hot-affairs">
            Today&apos;s Hot Affairs
          </Link>
          <Link href="/quizzes">View All Quizzes</Link>
        </div>
      </section>

      <HowItWorks />
      <ReferralSection />
      <StatsSection />
      <Footer />
    </>
  );
}
