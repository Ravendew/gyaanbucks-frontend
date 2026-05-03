import { MetadataRoute } from 'next';

const SITE_URL = 'https://gyaanbucks.com';
const API_BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

type QuizSitemapItem = {
  slug: string;
  updatedAt?: string;
  createdAt?: string;
};

type BlogSitemapItem = {
  slug: string;
  updatedAt?: string;
  createdAt?: string;
  isPublished?: boolean;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '',
    '/quizzes',
    '/tools',
    '/tools/age-calculator',
    '/tools/age-calculator/age-by-dob',
    '/tools/age-calculator/age-in-days',
    '/tools/age-calculator/age-difference-calculator',
    '/tools/age-calculator/date-difference-calculator',
    '/tools/age-calculator/days-until-calculator',
    '/tools/age-calculator/upsc-age-calculator',
    '/tools/age-calculator/ssc-age-calculator',
    '/tools/age-calculator/retirement-age-calculator',
    '/tools/age-calculator/school-admission-age-calculator',
    '/tools/age-calculator/school-admission-age-calculator/telangana',
    '/tools/percentage-calculator',
    '/blog',
    '/categories',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === '' || path === '/quizzes' || path.startsWith('/tools')
        ? 'weekly'
        : 'monthly',
    priority:
      path === ''
        ? 1
        : path === '/tools' || path === '/quizzes'
          ? 0.9
          : path.startsWith('/tools/')
            ? 0.85
            : 0.8,
  }));

  let quizUrls: MetadataRoute.Sitemap = [];
  let blogUrls: MetadataRoute.Sitemap = [];

  try {
    const res = await fetch(`${API_BASE_URL}/quiz`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const quizzes: QuizSitemapItem[] = await res.json();

      quizUrls = quizzes
        .filter((quiz) => Boolean(quiz.slug))
        .map((quiz) => ({
          url: `${SITE_URL}/quiz-play/${quiz.slug}`,
          lastModified: quiz.updatedAt
            ? new Date(quiz.updatedAt)
            : quiz.createdAt
              ? new Date(quiz.createdAt)
              : new Date(),
          changeFrequency: 'daily',
          priority: 0.9,
        }));
    }
  } catch (err) {
    console.error('Sitemap quiz fetch error:', err);
  }

  try {
    const res = await fetch(`${API_BASE_URL}/blog`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const blogs: BlogSitemapItem[] = await res.json();

      blogUrls = blogs
        .filter((blog) => Boolean(blog.slug))
        .filter((blog) => blog.isPublished !== false)
        .map((blog) => ({
          url: `${SITE_URL}/blog/${blog.slug}`,
          lastModified: blog.updatedAt
            ? new Date(blog.updatedAt)
            : blog.createdAt
              ? new Date(blog.createdAt)
              : new Date(),
          changeFrequency: 'weekly',
          priority: 0.85,
        }));
    }
  } catch (err) {
    console.error('Sitemap blog fetch error:', err);
  }

  return [...staticUrls, ...quizUrls, ...blogUrls];
}
