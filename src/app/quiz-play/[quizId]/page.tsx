import type { Metadata } from 'next';
import QuizPlayClient from './QuizPlayClient';

const API_BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

type PageProps = {
  params: {
    quizId: string;
  };
};

type SeoQuiz = {
  title?: string;
  subtitle?: string;
  category?: string;
};

// 👉 Fetch for SEO only
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

// 👉 Dynamic SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const quiz = await getQuizForSeo(params.quizId);

  if (!quiz?.title) {
    return {
      title: 'Quiz Not Found | GyaanBucks',
      description:
        'This quiz is not available. Play other quizzes on GyaanBucks.',
    };
  }

  const category = quiz.category || 'General Knowledge';

  const title = `${quiz.title} Quiz - Play Online`;
  const description =
    quiz.subtitle ||
    `Play ${quiz.title} ${category} quiz online. Answer questions, test your knowledge, and earn rewards on GyaanBucks.`;

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
      'quiz competition online India',
      'play quiz online and earn rewards',
      'earn coins by playing quiz',
    ],

    alternates: {
      canonical: `/quiz-play/${params.quizId}`,
    },

    openGraph: {
      title,
      description,
      url: `https://gyaanbucks.com/quiz-play/${params.quizId}`,
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

// 👉 Render UI (safe)
export default function QuizPlayPage({ params }: PageProps) {
  return <QuizPlayClient quizSlug={params.quizId} />;
}
