import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import styles from './page.module.css';

type Category = {
  id: string;
  name: string;
  icon: string;
  description?: string;
};

type Quiz = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: string;
};

function getApiBaseUrl() {
  return 'https://gyaanbucks-backend-production.up.railway.app';
}

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, '-');
}

function titleCaseFromSlug(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const categoryName = titleCaseFromSlug(slug);

  return {
    title: `${categoryName} Quiz - Free Online Practice | GyaanBucks`,
    description: `Play ${categoryName} quizzes online on GyaanBucks. Practice questions, improve your knowledge and track your quiz progress.`,
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let categories: Category[] = [];
  let quizzes: Quiz[] = [];

  try {
    const [categoryRes, quizRes] = await Promise.all([
      fetch(`${getApiBaseUrl()}/category/active`, { cache: 'no-store' }),
      fetch(`${getApiBaseUrl()}/quiz`, { cache: 'no-store' }),
    ]);

    const categoryData = await categoryRes.json();
    const quizData = await quizRes.json();

    categories = Array.isArray(categoryData) ? categoryData : [];
    quizzes = Array.isArray(quizData) ? quizData : [];
  } catch {
    categories = [];
    quizzes = [];
  }

  const currentCategory = categories.find(
    (category) => slugify(category.name) === slug,
  );

  const categoryName = currentCategory?.name || titleCaseFromSlug(slug);

  const categoryQuizzes = quizzes.filter(
    (quiz) => slugify(quiz.category) === slug,
  );

  const relatedQuizzes = quizzes
    .filter((quiz) => slugify(quiz.category) !== slug)
    .slice(0, 6);

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `Is ${categoryName} quiz free?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Yes, you can play ${categoryName} quizzes online on GyaanBucks for free.`,
                },
              },
              {
                '@type': 'Question',
                name: 'How does the quiz system work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can practice quizzes, answer questions, check your score and improve your knowledge through regular attempts on GyaanBucks.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are questions updated regularly?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, new quizzes and questions can be added regularly through the admin panel, so users can get fresh practice content.',
                },
              },
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.badge}>
                  {currentCategory?.icon || '📚'} Quiz Category
                </span>

                <h1 className={styles.title}>{categoryName} Quiz</h1>

                <p className={styles.subtitle}>
                  {currentCategory?.description ||
                    `Play ${categoryName} quizzes online, practice important questions, improve your knowledge and track your quiz progress on GyaanBucks.`}
                </p>

                <div className={styles.actions}>
                  <Link href="/categories" className={styles.secondaryBtn}>
                    View All Categories
                  </Link>

                  <Link href="/quizzes" className={styles.primaryBtn}>
                    Browse All Quizzes
                  </Link>
                </div>
              </div>

              <div className={styles.heroPanel}>
                <div className={styles.heroIcon}>
                  {currentCategory?.icon || '📚'}
                </div>
                <span>Practice Mode</span>
                <h2>{categoryQuizzes.length}</h2>
                <p>
                  {categoryQuizzes.length === 1
                    ? 'quiz available in this category'
                    : 'quizzes available in this category'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.layout}>
              <div className={styles.mainContent}>
                <div className={styles.sectionHeader}>
                  <div>
                    <span className={styles.sectionLabel}>
                      Practice Library
                    </span>
                    <h2>{categoryName} Practice Quizzes</h2>
                  </div>
                  <p>
                    Select a quiz, answer questions within time and improve your
                    preparation with regular practice.
                  </p>
                </div>

                {categoryQuizzes.length > 0 ? (
                  <div className={styles.grid}>
                    {categoryQuizzes.map((quiz, index) => (
                      <Link
                        key={quiz.id}
                        href={`/quiz-play/${quiz.slug}`}
                        className={styles.card}
                      >
                        <div className={styles.cardTop}>
                          <div className={styles.cardIcon}>
                            {currentCategory?.icon || '🧠'}
                          </div>
                          <span>Quiz {index + 1}</span>
                        </div>

                        <h3>{quiz.title}</h3>
                        <p>{quiz.subtitle}</p>

                        <div className={styles.cardFooter}>
                          <strong>Start Quiz</strong>
                          <span>→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyBox}>
                    <div className={styles.emptyIcon}>🔎</div>
                    <h3>No quizzes found yet</h3>
                    <p>
                      This category does not have published quizzes yet. You can
                      explore all quizzes or browse other learning categories.
                    </p>
                    <Link href="/quizzes" className={styles.primaryBtn}>
                      Browse All Quizzes
                    </Link>
                  </div>
                )}

                <div className={styles.content}>
                  <span className={styles.sectionLabel}>Learning Guide</span>
                  <h2>About {categoryName} Quizzes</h2>
                  <p>
                    {categoryName} quizzes on GyaanBucks help you practice
                    important questions, improve speed and build better
                    knowledge through online quiz attempts. These quizzes are
                    useful for students, exam preparation users and general
                    knowledge learners.
                  </p>

                  <div className={styles.highlightBox}>
                    <h3>Why play {categoryName} quizzes?</h3>
                    <ul>
                      <li>Practice topic-wise quiz questions online.</li>
                      <li>Improve accuracy with regular attempts.</li>
                      <li>Use free quizzes for learning and revision.</li>
                      <li>Track your score and improve your preparation.</li>
                    </ul>
                  </div>

                  <h3>{categoryName} Quiz FAQs</h3>

                  <div className={styles.faqList}>
                    <div>
                      <h4>Is this {categoryName} quiz free?</h4>
                      <p>
                        Yes, you can play {categoryName} quizzes online on
                        GyaanBucks for free.
                      </p>
                    </div>

                    <div>
                      <h4>How does the quiz system work?</h4>
                      <p>
                        You can practice quizzes, answer questions, check your
                        score and improve your knowledge through regular
                        attempts.
                      </p>
                    </div>

                    <div>
                      <h4>Are questions updated regularly?</h4>
                      <p>
                        GyaanBucks can add new quizzes and questions through the
                        admin panel, so users can get fresh practice content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <aside className={styles.sidebar}>
                <div className={styles.sidebarBox}>
                  <h3>Popular Categories</h3>

                  <div className={styles.sidebarLinks}>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/categories/${slugify(category.name)}`}
                        className={`${styles.sidebarItem} ${
                          slugify(category.name) === slug
                            ? styles.activeSidebarItem
                            : ''
                        }`}
                      >
                        <span>{category.icon || '📚'}</span>
                        <strong>{category.name}</strong>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={styles.sidebarBox}>
                  <h3>Related Quizzes</h3>

                  <div className={styles.sidebarLinks}>
                    {relatedQuizzes.length > 0 ? (
                      relatedQuizzes.map((quiz) => (
                        <Link
                          key={quiz.id}
                          href={`/quiz-play/${quiz.slug}`}
                          className={styles.sidebarTextLink}
                        >
                          {quiz.title}
                        </Link>
                      ))
                    ) : (
                      <p className={styles.sidebarEmpty}>
                        More quizzes coming soon.
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.sidebarBox}>
                  <h3>Popular Tools</h3>

                  <div className={styles.sidebarLinks}>
                    <Link
                      href="/tools/age-calculator"
                      className={styles.sidebarTextLink}
                    >
                      Age Calculator
                    </Link>
                    <Link
                      href="/tools/love-calculator"
                      className={styles.sidebarTextLink}
                    >
                      Love Calculator
                    </Link>
                    <Link href="/tools" className={styles.sidebarTextLink}>
                      All Online Tools
                    </Link>
                  </div>
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
