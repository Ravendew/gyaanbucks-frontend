import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

type Quiz = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
};

function getApiBaseUrl() {
  return 'https://gyaanbucks-backend-production.up.railway.app';
}

export async function generateMetadata({ params }: any) {
  const slug = params.slug;

  const name = slug.replace(/-/g, ' ').toUpperCase();

  return {
    title: `${name} Quiz - Free Online Practice & Earn Rewards`,
    description: `Play ${name} quizzes online. Practice questions, test your knowledge and earn rewards on GyaanBucks.`,
  };
}

export default async function CategoryPage({ params }: any) {
  const slug = params.slug;

  const categoryName = slug.replace(/-/g, ' ');

  let quizzes: Quiz[] = [];

  try {
    const res = await fetch(
      `${getApiBaseUrl()}/quiz?category=${encodeURIComponent(categoryName)}`,
      { cache: 'no-store' },
    );

    quizzes = await res.json();
  } catch {
    quizzes = [];
  }

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className="container">
          <h1 className={styles.title}>{categoryName.toUpperCase()} Quiz</h1>

          <p className={styles.subtitle}>
            Play {categoryName} quizzes online, test your knowledge and earn
            rewards.
          </p>

          <div className={styles.grid}>
            {quizzes.map((quiz) => (
              <a
                key={quiz.id}
                href={`/quiz-play/${quiz.slug}`}
                className={styles.card}
              >
                <h3>{quiz.title}</h3>
                <p>{quiz.subtitle}</p>
              </a>
            ))}
          </div>

          {/* SEO Content */}
          <div className={styles.content}>
            <h2>About {categoryName} Quizzes</h2>
            <p>
              Practice {categoryName} quizzes online for free on GyaanBucks.
              Improve your knowledge, attempt real exam level questions and earn
              rewards.
            </p>

            <h3>Why play {categoryName} quizzes?</h3>
            <ul>
              <li>Free practice tests</li>
              <li>Daily updated questions</li>
              <li>Earn rewards</li>
              <li>Improve speed & accuracy</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
