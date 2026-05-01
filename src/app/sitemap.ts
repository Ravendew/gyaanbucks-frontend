import { MetadataRoute } from 'next';

const API_BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
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

  const staticUrls = staticPages.map((path) => ({
    url: `https://gyaanbucks.com${path}`,
    lastModified: new Date(),
  }));

  // Dynamic quizzes
  let quizUrls: MetadataRoute.Sitemap = [];

  try {
    const res = await fetch(`${API_BASE_URL}/quiz`, {
      cache: 'no-store',
    });

    if (res.ok) {
      const quizzes = await res.json();

      quizUrls = quizzes.map((quiz: any) => ({
        url: `https://gyaanbucks.com/quiz-play/${quiz.slug}`,
        lastModified: new Date(),
      }));
    }
  } catch (err) {
    console.error('Sitemap quiz fetch error:', err);
  }

  return [...staticUrls, ...quizUrls];
}
