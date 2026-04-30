import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import PopularCategories from '@/components/PopularCategories/PopularCategories';
import FeaturedQuizzes from '@/components/FeaturedQuizzes/FeaturedQuizzes';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import ReferralSection from '@/components/ReferralSection/ReferralSection';
import StatsSection from '@/components/StatsSection/StatsSection';
import Footer from '@/components/Footer/Footer';

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
