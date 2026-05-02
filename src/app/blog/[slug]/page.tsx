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
  const relatedBlogs = allBlogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

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
                  <h3>Start earning with quizzes</h3>
                  <p>
                    Play quizzes daily, improve your knowledge, and earn reward
                    points on GyaanBucks.
                  </p>
                  <Link href="/quizzes" className={styles.ctaButton}>
                    Start Playing Now
                  </Link>
                </div>
              </article>

              <aside className={styles.sidebar}>
                <div className={styles.sideCard}>
                  <h3>Why GyaanBucks?</h3>
                  <p>
                    Play quizzes, learn new topics, collect points, and redeem
                    rewards through a simple wallet system.
                  </p>
                  <Link href="/how-it-works">How it works →</Link>
                </div>
              </aside>
            </div>

            {relatedBlogs.length > 0 && (
              <div className={styles.related}>
                <div className={styles.relatedHeader}>
                  <span>More Articles</span>
                  <h2>Related Blogs</h2>
                </div>

                <div className={styles.relatedGrid}>
                  {relatedBlogs.map((item) => (
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
