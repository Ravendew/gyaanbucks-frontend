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
  title: 'Play Quiz and Earn Money Online in India | GyaanBucks',
  description:
    'Play free online quizzes on GyaanBucks and earn rewards, coins, and cash. Try GK quiz, current affairs quiz, cricket quiz, movie quiz, fun quiz, and daily quiz challenges in India.',
  keywords: [
    'play quiz and earn money online',
    'earn money online by playing quiz',
    'online quiz earning website India',
    'play GK quiz and earn rewards',
    'current affairs quiz with rewards',
    'free quiz website to earn coins',
    'earn cash rewards by playing quizzes',
    'daily quiz earn money India',
    'quiz rewards website India',
    'GyaanBucks quiz earning',
    'play quizzes online for rewards',
    'earn coins redeem cash quiz',
    'GK quiz India online',
    'current affairs quiz India',
    'cricket quiz online India',
    'movie quiz online India',
    'fun quiz online with rewards',
  ],
  alternates: {
    canonical: 'https://gyaanbucks.com',
  },
  openGraph: {
    title: 'Play Quiz and Earn Money Online in India | GyaanBucks',
    description:
      'Play daily quizzes, earn coins, collect rewards, and redeem cash on GyaanBucks.',
    url: 'https://gyaanbucks.com',
    siteName: 'GyaanBucks',
    type: 'website',
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
