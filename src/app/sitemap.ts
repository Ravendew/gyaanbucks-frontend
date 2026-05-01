import { MetadataRoute } from 'next';

const API_BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

type QuizSitemapItem = {
  slug: string;
  updatedAt?: string;
  createdAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '',
    '/quizzes',
    '/blog',
    '/categories',
    '/how-it-works',
    '/refer-earn',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `https://gyaanbucks.com${path}`,
    lastModified: new Date(),
  }));

  let quizUrls: MetadataRoute.Sitemap = [];

  try {
    const res = await fetch(`${API_BASE_URL}/quiz`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const quizzes: QuizSitemapItem[] = await res.json();

      quizUrls = quizzes
        .filter((quiz) => Boolean(quiz.slug))
        .map((quiz) => ({
          url: `https://gyaanbucks.com/quiz-play/${quiz.slug}`,
          lastModified: quiz.updatedAt
            ? new Date(quiz.updatedAt)
            : quiz.createdAt
              ? new Date(quiz.createdAt)
              : new Date(),
        }));
    }
  } catch (err) {
    console.error('Sitemap quiz fetch error:', err);
  }

  return [...staticUrls, ...quizUrls];
}
