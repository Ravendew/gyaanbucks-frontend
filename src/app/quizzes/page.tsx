import type { Metadata } from 'next';
import { Suspense } from 'react';
import QuizzesClient from './QuizzesClient';

export const metadata: Metadata = {
  title: 'Online Quizzes - GK, Current Affairs & Rewards',
  description:
    'Play online quizzes on GyaanBucks and earn rewards. Explore GK quizzes, current affairs quizzes, India quizzes, history quizzes, science quizzes, and daily quiz challenges.',
  keywords: [
    'online quiz',
    'play quiz online',
    'GK quiz online',
    'current affairs quiz',
    'general knowledge quiz',
    'daily quiz India',
    'quiz questions and answers',
    'free online quiz games',
    'quiz competition online',
    'India GK quiz',
    'latest current affairs quiz',
    'history quiz online',
    'science quiz online',
    'quiz and earn rewards',
    'earn coins by quiz',
    'play quiz and win rewards',
    'GyaanBucks quiz platform',
  ],
  alternates: {
    canonical: '/quizzes',
  },
  openGraph: {
    title: 'Online Quizzes - GK, Current Affairs & Rewards | GyaanBucks',
    description:
      'Play GK, current affairs, India, history, and science quizzes online. Earn coins and rewards on GyaanBucks.',
    url: 'https://gyaanbucks.com/quizzes',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Quizzes - GK, Current Affairs & Rewards | GyaanBucks',
    description:
      'Play online quizzes, test your knowledge, earn coins, and redeem rewards on GyaanBucks.',
  },
};

export default function QuizzesPage() {
  return (
    <Suspense fallback={null}>
      <QuizzesClient />
    </Suspense>
  );
}
