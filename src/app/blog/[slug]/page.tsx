import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {
  getBlogBySlug,
  getBlogImageUrl,
  getPublishedBlogs,
} from '@/lib/blogApi';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

type BlogJsonLd = {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image?: string[];
  datePublished: string;
  dateModified: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
  };
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
};

const popularTools = [
  {
    title: 'Age Calculator',
    href: '/tools/age-calculator',
    icon: '🎂',
  },
  {
    title: 'Percentage Calculator',
    href: '/tools/percentage-calculator',
    icon: '📊',
  },
  {
    title: 'Love Calculator',
    href: '/tools/love-calculator',
    icon: '💘',
  },
  {
    title: 'Days Until Calculator',
    href: '/tools/age-calculator/days-until-calculator',
    icon: '📅',
  },
];

const trendingQuizzes = [
  {
    title: 'Trending GK Quiz 2026',
    href: '/quiz-play/trending-gk-quiz-2026',
    icon: '🧠',
  },
  {
    title: 'UPSC Prelims Mock Quiz 2026',
    href: '/quiz-play/upsc-prelims-mock-quiz',
    icon: '📚',
  },
  {
    title: 'Current Affairs Quiz',
    href: '/quizzes',
    icon: '📰',
  },
];

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  const blogImage = getBlogImageUrl(blog.imageUrl);

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDesc || blog.excerpt,
    alternates: {
      canonical: `https://gyaanbucks.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDesc || blog.excerpt,
      url: `https://gyaanbucks.com/blog/${blog.slug}`,
      siteName: 'GyaanBucks',
      type: 'article',
      images: blogImage
        ? [
            {
              url: blogImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDesc || blog.excerpt,
      images: blogImage ? [blogImage] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  const allBlogs = await getPublishedBlogs();

  const sameCategoryBlogs = allBlogs
    .filter(
      (item) =>
        item.slug !== blog.slug &&
        item.category.toLowerCase() === blog.category.toLowerCase(),
    )
    .slice(0, 4);

  const fallbackBlogs = allBlogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 4);

  const relatedBlogs =
    sameCategoryBlogs.length > 0 ? sameCategoryBlogs : fallbackBlogs;

  const latestBlogs = allBlogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 5);

  const blogImage = getBlogImageUrl(blog.imageUrl);

  const jsonLd: BlogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.metaDesc || blog.excerpt,
    ...(blogImage ? { image: [blogImage] } : {}),
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    author: {
      '@type': 'Organization',
      name: 'GyaanBucks',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GyaanBucks',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gyaanbucks.com/blog/${blog.slug}`,
    },
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <span className={styles.category}>{blog.category}</span>

              <h1 className={styles.title}>{blog.title}</h1>

              <p className={styles.excerpt}>{blog.excerpt}</p>

              <div className={styles.meta}>
                Published on {new Date(blog.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.articleSection}>
          <div className="container">
            {blogImage ? (
              <div className={styles.featuredImageWrap}>
                <img
                  src={blogImage}
                  alt={blog.title}
                  className={styles.featuredImage}
                />
              </div>
            ) : null}

            <div className={styles.layout}>
              <article className={styles.article}>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div className={styles.ctaBox}>
                  <h3>Continue learning with quizzes</h3>
                  <p>
                    Practice quizzes, improve your general knowledge, and track
                    your learning points on GyaanBucks.
                  </p>
                  <Link href="/quizzes" className={styles.ctaButton}>
                    Practice Quizzes
                  </Link>
                </div>
              </article>

              <aside className={styles.sidebar}>
                {relatedBlogs.length > 0 && (
                  <div className={styles.sideCard}>
                    <h3>Related Blogs</h3>

                    <div className={styles.sideList}>
                      {relatedBlogs.map((item) => (
                        <Link href={`/blog/${item.slug}`} key={item.id}>
                          <span>{item.category}</span>
                          <strong>{item.title}</strong>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className={styles.sideCard}>
                  <h3>Popular Tools</h3>

                  <div className={styles.linkList}>
                    {popularTools.map((tool) => (
                      <Link href={tool.href} key={tool.href}>
                        <span>{tool.icon}</span>
                        {tool.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={styles.sideCard}>
                  <h3>Trending Quizzes</h3>

                  <div className={styles.linkList}>
                    {trendingQuizzes.map((quiz) => (
                      <Link href={quiz.href} key={quiz.href}>
                        <span>{quiz.icon}</span>
                        {quiz.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={styles.sideCard}>
                  <h3>Blog Categories</h3>

                  <div className={styles.categoryList}>
                    <Link href="/blog">All Blogs</Link>
                    <Link href="/blog?category=Education">Education</Link>
                    <Link href="/blog?category=Tools%20%26%20Calculators">
                      Tools & Calculators
                    </Link>
                  </div>
                </div>

                <div className={styles.sideCard}>
                  <h3>Why GyaanBucks?</h3>
                  <p>
                    Practice quizzes, read learning guides, use helpful tools,
                    and track your knowledge progress in one place.
                  </p>
                  <Link href="/how-it-works">How it works →</Link>
                </div>
              </aside>
            </div>

            {latestBlogs.length > 0 && (
              <div className={styles.related}>
                <div className={styles.relatedHeader}>
                  <span>More Articles</span>
                  <h2>Latest Blogs</h2>
                </div>

                <div className={styles.relatedGrid}>
                  {latestBlogs.slice(0, 3).map((item) => (
                    <Link
                      href={`/blog/${item.slug}`}
                      className={styles.relatedCard}
                      key={item.id}
                    >
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
