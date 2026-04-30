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
import ReactMarkdown from 'react-markdown';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDesc || blog.excerpt,
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

  return (
    <>
      <Header />

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
                <div className={styles.adBox}>Sponsored Section</div>

                <div className={styles.content}>
                  <ReactMarkdown>{blog.content}</ReactMarkdown>
                </div>

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

                <div className={styles.adBox}>Sponsored Section</div>
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

                <div className={styles.sideAd}>Sponsored Section</div>
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
