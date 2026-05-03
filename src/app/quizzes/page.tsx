import type { Metadata } from 'next';
import { Suspense } from 'react';
import QuizzesClient from './QuizzesClient';

export const metadata: Metadata = {
  title: 'Online Quizzes - GK, Current Affairs & Practice Tests',
  description:
    'Practice free online quizzes on GyaanBucks. Explore GK quizzes, current affairs quizzes, India quizzes, history quizzes, science quizzes, and daily quiz practice tests.',
  keywords: [
    'online quiz',
    'play quiz online',
    'GK quiz online',
    'current affairs quiz',
    'general knowledge quiz',
    'daily quiz India',
    'quiz questions and answers',
    'free online quiz games',
    'online quiz test',
    'India GK quiz',
    'latest current affairs quiz',
    'history quiz online',
    'science quiz online',
    'practice quiz online',
    'free GK practice test',
    'GyaanBucks quiz platform',
  ],
  alternates: {
    canonical: '/quizzes',
  },
  openGraph: {
    title: 'Online Quizzes - GK, Current Affairs & Practice Tests | GyaanBucks',
    description:
      'Practice GK, current affairs, India, history, and science quizzes online. Improve your knowledge with free quizzes on GyaanBucks.',
    url: 'https://gyaanbucks.com/quizzes',
    siteName: 'GyaanBucks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Quizzes - GK, Current Affairs & Practice Tests | GyaanBucks',
    description:
      'Practice online quizzes, test your knowledge, and track learning progress on GyaanBucks.',
  },
};

export default function QuizzesPage() {
  return (
    <Suspense fallback={null}>
      <QuizzesClient />
    </Suspense>
  );
}
