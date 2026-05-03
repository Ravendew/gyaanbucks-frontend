'use client';

import Header from '@/components/Header/Header';
import { useEffect, useMemo, useState } from 'react';
import styles from './page.module.css';

function getApiBaseUrl() {
  return 'https://gyaanbucks-backend-production.up.railway.app';
}

type ProfileUser = {
  id: string;
  name?: string;
  mobile?: string;
  email?: string;
  wallet?: number;
};

type SavedUser = {
  id?: string;
  name?: string;
  mobile?: string;
  email?: string;
};

type LearningAttempt = {
  quizId?: string;
  quizTitle?: string;
  category?: string;
  correctCount?: number;
  totalQuestions?: number;
  earnedPoints?: number;
  createdAt?: string;
};

function getSavedUser(): SavedUser | null {
  if (typeof window === 'undefined') return null;

  const saved = localStorage.getItem('gyaanbucks_user');
  if (!saved) return null;

  try {
    return JSON.parse(saved) as SavedUser;
  } catch {
    localStorage.removeItem('gyaanbucks_user');
    return null;
  }
}

function getLearningPoints() {
  if (typeof window === 'undefined') return 0;
  return Number(localStorage.getItem('gyaanbucks_points') || 0);
}

function getLocalAttempts(): LearningAttempt[] {
  if (typeof window === 'undefined') return [];

  const saved =
    localStorage.getItem('gyaanbucks_attempts') ||
    localStorage.getItem('quiz_attempts') ||
    localStorage.getItem('learning_attempts');

  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? (parsed as LearningAttempt[]) : [];
  } catch {
    return [];
  }
}

export default function ProfilePage() {
  const [user, setUser] = useState<ProfileUser | null>(null);
  const [attempts, setAttempts] = useState<LearningAttempt[]>([]);
  const [learningPoints, setLearningPoints] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      const savedUser = getSavedUser();

      if (!savedUser?.id) {
        if (isMounted) {
          setMessage('Please login to view your learning dashboard.');
        }
        return;
      }

      try {
        const res = await fetch(
          `${getApiBaseUrl()}/users/profile/${savedUser.id}`,
          { cache: 'no-store' },
        );

        const data = (await res.json()) as ProfileUser;

        if (isMounted) {
          setUser(data);
          setLearningPoints(getLearningPoints());
          setAttempts(getLocalAttempts());
        }
      } catch {
        if (isMounted) {
          setUser({
            id: savedUser.id || '',
            name: savedUser.name,
            mobile: savedUser.mobile,
            email: savedUser.email,
          });
          setLearningPoints(getLearningPoints());
          setAttempts(getLocalAttempts());
        }
      }
    }

    void loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalQuizzesPlayed = attempts.length;

  const totalQuestions = useMemo(() => {
    return attempts.reduce((sum, item) => sum + (item.totalQuestions || 0), 0);
  }, [attempts]);

  const totalCorrect = useMemo(() => {
    return attempts.reduce((sum, item) => sum + (item.correctCount || 0), 0);
  }, [attempts]);

  const accuracy =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const categoryStats = useMemo(() => {
    const map = new Map<
      string,
      {
        category: string;
        attempts: number;
        correct: number;
        total: number;
        points: number;
      }
    >();

    attempts.forEach((item) => {
      const category = item.category || 'General';
      const current = map.get(category) || {
        category,
        attempts: 0,
        correct: 0,
        total: 0,
        points: 0,
      };

      current.attempts += 1;
      current.correct += item.correctCount || 0;
      current.total += item.totalQuestions || 0;
      current.points += item.earnedPoints || 0;

      map.set(category, current);
    });

    return Array.from(map.values());
  }, [attempts]);

  const bestCategory = useMemo(() => {
    if (categoryStats.length === 0) return 'Start practicing';

    return categoryStats
      .map((item) => ({
        ...item,
        accuracy: item.total > 0 ? (item.correct / item.total) * 100 : 0,
      }))
      .sort((a, b) => b.accuracy - a.accuracy)[0].category;
  }, [categoryStats]);

  const weakCategory = useMemo(() => {
    if (categoryStats.length === 0) return 'Start practicing';

    return categoryStats
      .map((item) => ({
        ...item,
        accuracy: item.total > 0 ? (item.correct / item.total) * 100 : 0,
      }))
      .sort((a, b) => a.accuracy - b.accuracy)[0].category;
  }, [categoryStats]);

  if (!user) {
    return (
      <>
        <Header />

        <main className={styles.page}>
          <div className={`container ${styles.wrapper}`}>
            <div className={styles.card}>
              <span className={styles.badge}>Learning Dashboard</span>
              <h1 className={styles.title}>My Progress</h1>
              {message && <div className={styles.message}>{message}</div>}
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.card}>
            <span className={styles.badge}>Learning Dashboard</span>
            <h1 className={styles.title}>My Progress</h1>

            {message && <div className={styles.message}>{message}</div>}

            <div className={styles.profileGrid}>
              <div className={styles.profileBox}>
                <span>Name</span>
                <strong>{user.name || '-'}</strong>
              </div>

              <div className={styles.profileBox}>
                <span>Mobile</span>
                <strong>{user.mobile || '-'}</strong>
              </div>

              <div className={styles.profileBox}>
                <span>Email</span>
                <strong>{user.email || '-'}</strong>
              </div>
            </div>

            <div className={styles.walletBox}>
              <span>Learning Points</span>
              <strong>{learningPoints} Points</strong>
            </div>

            <div className={styles.redeemHero}>
              <div>
                <span className={styles.redeemBadge}>Progress Overview</span>
                <h3>Track Your Learning Performance</h3>
                <p>
                  Your profile helps you understand quiz practice, accuracy,
                  learning points, best category, and areas where you can
                  improve.
                </p>
              </div>

              <div className={styles.redeemStats}>
                <div>
                  <span>Played</span>
                  <strong>{totalQuizzesPlayed}</strong>
                </div>
                <div>
                  <span>Accuracy</span>
                  <strong>{accuracy}%</strong>
                </div>
              </div>
            </div>

            <div className={styles.redeemBox}>
              <div className={styles.redeemInputRow}>
                <div className={styles.amountPreview}>
                  <span>Best Category</span>
                  <strong>{bestCategory}</strong>
                </div>

                <div className={styles.amountPreview}>
                  <span>Improve Category</span>
                  <strong>{weakCategory}</strong>
                </div>
              </div>

              <p className={styles.note}>
                Points are used only for learning progress and gamification.
                They are not cash, rewards, or redeemable balance.
              </p>
            </div>

            <div className={styles.rulesBox}>
              <h3>Category-wise Analytics</h3>

              {categoryStats.length === 0 && (
                <p>
                  No quiz analytics yet. Start practicing quizzes to see your
                  category-wise performance here.
                </p>
              )}

              {categoryStats.map((item) => {
                const itemAccuracy =
                  item.total > 0
                    ? Math.round((item.correct / item.total) * 100)
                    : 0;

                return (
                  <div key={item.category} className={styles.redeemHistoryCard}>
                    <div>
                      <strong>{item.category}</strong>
                      <span>
                        {item.attempts} attempts • {itemAccuracy}% accuracy
                      </span>
                    </div>

                    <span className={styles.status}>{item.points} Points</span>
                  </div>
                );
              })}
            </div>

            <div className={styles.rulesBox}>
              <h3>Recent Practice</h3>

              {attempts.length === 0 && <p>No recent quiz attempts yet.</p>}

              {attempts.slice(0, 5).map((item, index) => (
                <div
                  key={`${item.quizId || item.quizTitle || 'quiz'}-${index}`}
                  className={styles.redeemHistoryCard}
                >
                  <div>
                    <strong>{item.quizTitle || 'Quiz Practice'}</strong>
                    <span>
                      {item.correctCount || 0}/{item.totalQuestions || 0}{' '}
                      correct
                    </span>
                  </div>

                  <span className={styles.status}>
                    {item.earnedPoints || 0} Points
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
