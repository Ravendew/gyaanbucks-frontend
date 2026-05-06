import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './page.module.css';
import { getBlogImageUrl, getPublishedBlogs } from '@/lib/blogApi';

export const metadata = {
  title: 'GyaanBucks Blog - Education, Quizzes & Learning Tools',
  description:
    'Read educational articles about GK, quizzes, current affairs, study tips, calculators and useful learning tools on GyaanBucks.',
};

const popularTools = [
  { title: 'Age Calculator', href: '/tools/age-calculator', icon: '🎂' },
  {
    title: 'Percentage Calculator',
    href: '/tools/percentage-calculator',
    icon: '📊',
  },
  { title: 'Love Calculator', href: '/tools/love-calculator', icon: '💘' },
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
    title: 'Explore All Quizzes',
    href: '/quizzes',
    icon: '📰',
  },
];

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>GyaanBucks Blog</span>

            <h1 className={styles.title}>Learn. Improve. Practice Smarter.</h1>

            <p className={styles.subtitle}>
              Discover educational articles on quizzes, GK, current affairs,
              learning tools, calculators and knowledge growth.
            </p>
          </div>
        </section>

        <section className={styles.listSection}>
          <div className="container">
            <div className={styles.layout}>
              <div className={styles.mainContent}>
                {blogs.length === 0 ? (
                  <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>📝</div>
                    <h2>Educational blogs are coming soon</h2>
                    <p>
                      We are preparing useful articles on GK, current affairs,
                      quiz practice, calculators and learning tips. Until then,
                      explore our tools and quizzes.
                    </p>

                    <div className={styles.emptyActions}>
                      <Link href="/tools" className={styles.primaryBtn}>
                        Explore Tools
                      </Link>

                      <Link href="/quizzes" className={styles.secondaryBtn}>
                        Practice Quizzes
                      </Link>
                    </div>
                  </div>
                ) : (
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
                          <span className={styles.category}>
                            {blog.category}
                          </span>

                          <h2>{blog.title}</h2>

                          <p>{blog.excerpt}</p>

                          <div className={styles.meta}>
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <aside className={styles.sidebar}>
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
                  <h3>Why Read GyaanBucks?</h3>
                  <p>
                    Learn new topics, practice quizzes, understand useful tools,
                    and improve your knowledge step by step.
                  </p>
                  <Link href="/how-it-works" className={styles.sideTextLink}>
                    How it works →
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
