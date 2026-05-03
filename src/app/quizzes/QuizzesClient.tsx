'use client';

import { fetchQuizzes } from '@/api/quizApi';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import QuizCard from '@/components/QuizCard/QuizCard';
import QuizFilters from '@/components/QuizFilters/QuizFilters';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

type BackendQuestion = {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOptionId: string;
};

type BackendQuiz = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  reward: number;
  timeLimit: number;
  attemptsPerDay: number;
  onlinePlayers: number;
  questions: BackendQuestion[];
};

type AttemptStatus = {
  attemptsUsed: number;
  attemptsPerDay: number;
  remaining: number;
  locked: boolean;
};

type LoggedInUser = {
  id?: string;
  name?: string;
  mobile?: string;
  email?: string;
};

function getApiBaseUrl() {
  return 'https://gyaanbucks-backend-production.up.railway.app';
}

function getLoggedInUser(): LoggedInUser | null {
  if (typeof window === 'undefined') return null;

  const savedUser = localStorage.getItem('gyaanbucks_user');

  if (!savedUser) return null;

  try {
    return JSON.parse(savedUser);
  } catch {
    localStorage.removeItem('gyaanbucks_user');
    return null;
  }
}

function getLoggedInPlayerId() {
  const user = getLoggedInUser();

  if (!user) return null;

  if (user.id) return `user-${user.id}`;
  if (user.mobile) return `mobile-${user.mobile}`;
  if (user.email) return `email-${user.email}`;

  return null;
}

function getOldDeviceId() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('deviceId');
}

async function getStatusByPlayerId(
  quizSlug: string,
  playerId: string,
  attemptsPerDay = 2,
): Promise<AttemptStatus> {
  try {
    const res = await fetch(
      `${getApiBaseUrl()}/question/status/${quizSlug}/${playerId}`,
      { cache: 'no-store' },
    );

    if (!res.ok) {
      return {
        attemptsUsed: 0,
        attemptsPerDay,
        remaining: attemptsPerDay,
        locked: false,
      };
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to load attempt status:', error);

    return {
      attemptsUsed: 0,
      attemptsPerDay,
      remaining: attemptsPerDay,
      locked: false,
    };
  }
}

async function fetchAttemptStatus(
  quizSlug: string,
  attemptsPerDay = 2,
): Promise<AttemptStatus> {
  const playerId = getLoggedInPlayerId();

  if (!playerId) {
    return {
      attemptsUsed: 0,
      attemptsPerDay,
      remaining: attemptsPerDay,
      locked: false,
    };
  }

  const userStatus = await getStatusByPlayerId(
    quizSlug,
    playerId,
    attemptsPerDay,
  );

  if (userStatus.attemptsUsed > 0 || userStatus.locked) {
    return userStatus;
  }

  const oldDeviceId = getOldDeviceId();

  if (!oldDeviceId) {
    return userStatus;
  }

  const oldDeviceStatus = await getStatusByPlayerId(
    quizSlug,
    oldDeviceId,
    attemptsPerDay,
  );

  if (oldDeviceStatus.attemptsUsed > 0 || oldDeviceStatus.locked) {
    return oldDeviceStatus;
  }

  return userStatus;
}

function getQuizIcon(category: string) {
  const icons: Record<string, string> = {
    GK: '🧠',
    Science: '🔬',
    Movie: '🎬',
    Movies: '🎬',
    Sports: '🏅',
    Cricket: '🏏',
    Technology: '💻',
    'Current Affairs': '📰',
    'Daily Quiz': '🏆',
    'Iran War': '🧩',
  };

  return icons[category] || '🧩';
}

export default function QuizzesClient() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [quizzes, setQuizzes] = useState<BackendQuiz[]>([]);
  const [attemptMap, setAttemptMap] = useState<Record<string, AttemptStatus>>(
    {},
  );
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getLoggedInUser());
  }, []);

  useEffect(() => {
    const nextFilter = categoryFromUrl || 'All';

    setActiveFilter((currentFilter) =>
      currentFilter === nextFilter ? currentFilter : nextFilter,
    );
  }, [categoryFromUrl]);

  useEffect(() => {
    async function loadQuizzes() {
      try {
        setIsLoading(true);

        const data = await fetchQuizzes();
        const quizList = Array.isArray(data) ? data : [];

        setQuizzes(quizList);

        const loggedIn = !!getLoggedInUser();
        setIsLoggedIn(loggedIn);

        if (!loggedIn) {
          const freshGuestStatuses = quizList.map((quiz: BackendQuiz) => {
            const attemptsPerDay = quiz.attemptsPerDay || 2;

            return [
              quiz.slug,
              {
                attemptsUsed: 0,
                attemptsPerDay,
                remaining: attemptsPerDay,
                locked: false,
              },
            ] as const;
          });

          setAttemptMap(Object.fromEntries(freshGuestStatuses));
          return;
        }

        const statuses = await Promise.all(
          quizList.map(async (quiz: BackendQuiz) => {
            const status = await fetchAttemptStatus(
              quiz.slug,
              quiz.attemptsPerDay || 2,
            );

            return [quiz.slug, status] as const;
          }),
        );

        setAttemptMap(Object.fromEntries(statuses));
      } catch (error) {
        console.error('Failed to load quizzes:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadQuizzes();
  }, []);

  const filteredQuizzes =
    activeFilter === 'All'
      ? quizzes
      : quizzes.filter(
          (quiz) => quiz.category.toLowerCase() === activeFilter.toLowerCase(),
        );

  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>
            ⚡ Practice daily. Learn smarter.
          </span>
          <h1 className={styles.title}>
            Choose quizzes and <span>track learning points</span>
          </h1>
          <p className={styles.text}>
            Select a category, practice valid quizzes, complete questions within
            time, and use points to track your learning progress.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.topRow}>
            <div>
              <span className={styles.sectionLabel}>Available Quizzes</span>
              <h2 className={styles.sectionTitle}>Start Practicing Today</h2>
            </div>

            <QuizFilters
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          <div className={styles.grid}>
            {isLoading ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>⏳</div>
                <h3 className={styles.emptyTitle}>Loading quizzes...</h3>
                <p className={styles.emptyText}>
                  Please wait while we fetch latest quizzes.
                </p>
              </div>
            ) : filteredQuizzes.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🧐</div>

                <h3 className={styles.emptyTitle}>No quizzes found</h3>

                <p className={styles.emptyText}>
                  No quizzes available in this category right now. Try selecting
                  another category or come back later.
                </p>

                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setActiveFilter('All')}
                >
                  Show All Quizzes
                </button>
              </div>
            ) : (
              filteredQuizzes.map((quiz) => {
                const attemptStatus = attemptMap[quiz.slug];

                const attemptsPerDay =
                  attemptStatus?.attemptsPerDay || quiz.attemptsPerDay || 2;

                const attemptsUsed = isLoggedIn
                  ? attemptStatus?.attemptsUsed || 0
                  : 0;

                const isLocked = isLoggedIn
                  ? attemptStatus?.locked || attemptsUsed >= attemptsPerDay
                  : false;

                return (
                  <QuizCard
                    key={quiz.id}
                    quiz={{
                      title: quiz.title,
                      category: quiz.category,
                      points: quiz.reward,
                      questions: quiz.questions.length,
                      time: `${quiz.timeLimit / 60} min`,
                      icon: getQuizIcon(quiz.category),
                      href: `/quiz-play/${quiz.slug}`,
                      attemptsText: `Attempts: ${attemptsUsed}/${attemptsPerDay}`,
                      isLocked,
                      onlinePlayers: quiz.onlinePlayers,
                    }}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
