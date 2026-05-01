import type { Metadata } from 'next';
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
      <HowItWorks />
      <ReferralSection />
      <StatsSection />
      <Footer />
    </>
  );
}
