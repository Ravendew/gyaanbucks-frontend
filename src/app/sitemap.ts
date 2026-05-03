import { MetadataRoute } from 'next';

const SITE_URL = 'https://gyaanbucks.com';
const API_BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

const LAST_MODIFIED = new Date('2026-05-03');

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

function getSafeDate(updatedAt?: string, createdAt?: string) {
  if (updatedAt) return new Date(updatedAt);
  if (createdAt) return new Date(createdAt);
  return LAST_MODIFIED;
}

function normalizeSlug(slug: string) {
  return slug.trim().replace(/^\/+|\/+$/g, '');
}

function uniqueByUrl(items: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const map = new Map<string, MetadataRoute.Sitemap[number]>();

  items.forEach((item) => {
    map.set(item.url, item);
  });

  return Array.from(map.values());
}

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
    lastModified: LAST_MODIFIED,
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
        .map((quiz) => {
          const slug = normalizeSlug(quiz.slug);

          return {
            url: `${SITE_URL}/quiz-play/${slug}`,
            lastModified: getSafeDate(quiz.updatedAt, quiz.createdAt),
            changeFrequency: 'daily',
            priority: 0.9,
          };
        });
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
        .map((blog) => {
          const slug = normalizeSlug(blog.slug);

          return {
            url: `${SITE_URL}/blog/${slug}`,
            lastModified: getSafeDate(blog.updatedAt, blog.createdAt),
            changeFrequency: 'weekly',
            priority: 0.85,
          };
        });
    }
  } catch (err) {
    console.error('Sitemap blog fetch error:', err);
  }

  return uniqueByUrl([...staticUrls, ...quizUrls, ...blogUrls]);
}
