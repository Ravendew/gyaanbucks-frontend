import Link from 'next/link';
import { getBlogImageUrl, getPublishedBlogs } from '@/lib/blogApi';
import styles from './LatestBlogs.module.css';

export default async function LatestBlogs() {
  const blogs = await getPublishedBlogs();
  const latestBlogs = blogs.slice(0, 3);

  if (latestBlogs.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>📚 Latest Learning Guides</span>
        <h2>Recently Added Educational Blogs</h2>
        <p>
          Read simple learning guides, quiz preparation tips, current affairs
          articles and useful educational content from GyaanBucks.
        </p>
      </div>

      <div className={styles.grid}>
        {latestBlogs.map((blog) => {
          const imageUrl = getBlogImageUrl(blog.imageUrl);

          return (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.id}
              className={styles.card}
            >
              {imageUrl ? (
                <div className={styles.imageWrap}>
                  <img
                    src={imageUrl}
                    alt={blog.title}
                    className={styles.image}
                  />
                </div>
              ) : (
                <div className={styles.imageFallback}>
                  <span>GyaanBucks</span>
                </div>
              )}

              <div className={styles.cardBody}>
                <span className={styles.category}>{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <strong>Read Article →</strong>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.action}>
        <Link href="/blog">View All Blogs</Link>
      </div>
    </section>
  );
}
