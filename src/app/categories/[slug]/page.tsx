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
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const categoryName = titleCaseFromSlug(slug);

  return {
    title: `${categoryName} Quiz - Free Online Practice | GyaanBucks`,
    description: `Play ${categoryName} quizzes online on GyaanBucks. Practice questions, improve your knowledge and earn reward points.`,
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

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>
              {currentCategory?.icon || '📚'} Quiz Category
            </span>

            <h1 className={styles.title}>{categoryName} Quiz</h1>

            <p className={styles.subtitle}>
              {currentCategory?.description ||
                `Play ${categoryName} quizzes online, practice questions and earn reward points on GyaanBucks.`}
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
        </section>

        <section className={styles.quizSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>{categoryName} Practice Quizzes</h2>
              <p>
                Select a quiz, answer questions within time and collect reward
                points.
              </p>
            </div>

            {categoryQuizzes.length > 0 ? (
              <div className={styles.grid}>
                {categoryQuizzes.map((quiz) => (
                  <Link
                    key={quiz.id}
                    href={`/quiz-play/${quiz.slug}`}
                    className={styles.card}
                  >
                    <h3>{quiz.title}</h3>
                    <p>{quiz.subtitle}</p>
                    <span>Start Quiz →</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.emptyBox}>
                No quizzes found in this category yet.
              </div>
            )}

            <div className={styles.content}>
              <h2>About {categoryName} Quizzes</h2>
              <p>
                {categoryName} quizzes on GyaanBucks help you practice important
                questions, improve speed and build better knowledge through
                online quiz attempts. These quizzes are useful for students,
                exam preparation users and general knowledge learners.
              </p>

              <h3>Why play {categoryName} quizzes?</h3>
              <ul>
                <li>Practice topic-wise quiz questions online.</li>
                <li>Improve accuracy with regular attempts.</li>
                <li>Use free quizzes for learning and revision.</li>
                <li>Earn reward points while playing valid quizzes.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
