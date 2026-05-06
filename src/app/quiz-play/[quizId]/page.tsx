import type { Metadata } from 'next';
import QuizPlayClient from './QuizPlayClient';

const API_BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

type PageProps = {
  params: Promise<{
    quizId: string;
  }>;
};

type SeoQuiz = {
  title?: string;
  subtitle?: string;
  category?: string;
};

async function getQuizForSeo(slug: string): Promise<SeoQuiz | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/quiz/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { quizId } = await params;
  const quiz = await getQuizForSeo(quizId);

  if (!quiz?.title) {
    return {
      title: 'Quiz Not Found | GyaanBucks',
      description:
        'This quiz is not available. Practice other quizzes on GyaanBucks.',
      alternates: {
        canonical: `/quiz-play/${quizId}`,
      },
    };
  }

  const category = quiz.category || 'General Knowledge';

  const title = `${quiz.title} Quiz - Practice Online`;
  const description =
    quiz.subtitle ||
    `Practice ${quiz.title} ${category} quiz online. Answer questions, test your knowledge, and track your progress on GyaanBucks.`;

  return {
    title,
    description,
    keywords: [
      `${quiz.title} quiz`,
      `${quiz.title} questions and answers`,
      `${quiz.title} online quiz`,
      `${category} quiz online`,
      `${category} questions and answers`,
      `daily ${category} quiz`,
      'free online quiz with answers',
      'daily GK quiz India',
      'current affairs quiz with answers',
      'general knowledge questions and answers',
      'online quiz practice India',
      'practice quiz online',
      'knowledge test online',
    ],
    alternates: {
      canonical: `/quiz-play/${quizId}`,
    },
    openGraph: {
      title,
      description,
      url: `https://gyaanbucks.com/quiz-play/${quizId}`,
      siteName: 'GyaanBucks',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function QuizPlayPage({ params }: PageProps) {
  const { quizId } = await params;

  return <QuizPlayClient quizSlug={quizId} />;
}
