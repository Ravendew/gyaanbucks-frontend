import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './page.module.css';
import { getBlogImageUrl, getPublishedBlogs } from '@/lib/blogApi';

export const metadata = {
  title: 'GyaanBucks Blog - Learn & Earn',
  description:
    'Read latest articles about quizzes, earning online, knowledge tips, and reward strategies.',
};

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>GyaanBucks Blog</span>

            <h1 className={styles.title}>Learn. Improve. Earn Smarter.</h1>

            <p className={styles.subtitle}>
              Discover articles on quiz strategies, online earning, and
              knowledge growth.
            </p>
          </div>
        </section>

        <section className={styles.listSection}>
          <div className="container">
            <div className={styles.grid}>
              {blogs.map((blog) => (
                <Link
                  href={`/blog/${blog.slug}`}
                  key={blog.id}
                  className={styles.card}
                >
                  {blog.imageUrl ? (
                    <div className={styles.imageWrap}>
                      <img
                        src={getBlogImageUrl(blog.imageUrl)}
                        alt={blog.title}
                        className={styles.image}
                      />
                    </div>
                  ) : (
                    <div className={styles.imageFallback}>
                      <span>GyaanBucks</span>
                    </div>
                  )}

                  <div className={styles.cardContent}>
                    <span className={styles.category}>{blog.category}</span>

                    <h2>{blog.title}</h2>

                    <p>{blog.excerpt}</p>

                    <div className={styles.meta}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
