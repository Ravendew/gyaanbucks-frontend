'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import styles from './FeaturedQuizzes.module.css';

type BackendQuiz = {
  id?: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  reward: number;
  isActive?: boolean;
  onlinePlayers?: number;
};

const fallbackQuizzes: BackendQuiz[] = [
  {
    title: 'Daily Quiz',
    subtitle: 'Test your daily knowledge',
    reward: 50,
    slug: '',
    category: 'Daily Quiz',
    onlinePlayers: 128,
  },
  {
    title: 'Current Affairs',
    subtitle: 'Stay updated, earn points',
    reward: 75,
    slug: '',
    category: 'Current Affairs',
    onlinePlayers: 156,
  },
  {
    title: 'Movie Mania',
    subtitle: 'For movie buffs!',
    reward: 60,
    slug: '',
    category: 'Movies',
    onlinePlayers: 112,
  },
  {
    title: 'Mix Quiz',
    subtitle: 'Multiple categories',
    reward: 100,
    slug: '',
    category: 'General',
    onlinePlayers: 174,
  },
];

function getApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://localhost:5000';
  return `http://${window.location.hostname}:5000`;
}

function getQuizIcon(category: string, title: string) {
  const value = `${category} ${title}`.toLowerCase();

  if (value.includes('current')) return '🌐';
  if (value.includes('movie')) return '🎬';
  if (value.includes('cricket')) return '🏏';
  if (value.includes('daily')) return '🏆';
  if (value.includes('science')) return '🔬';
  if (value.includes('tech')) return '💻';
  if (value.includes('job')) return '💼';
  if (value.includes('sports')) return '⚽';

  return '🧠';
}

function getStableOnlineCount(title: string, onlinePlayers?: number) {
  if (typeof onlinePlayers === 'number' && onlinePlayers > 0) {
    return onlinePlayers;
  }

  let hash = 0;

  for (let i = 0; i < title.length; i += 1) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }

  return 120 + (Math.abs(hash) % 480);
}

function FeaturedQuizCard({ quiz }: { quiz: BackendQuiz }) {
  const baseOnlineCount = useMemo(
    () => getStableOnlineCount(quiz.title, quiz.onlinePlayers),
    [quiz.title, quiz.onlinePlayers],
  );

  const [onlineCount, setOnlineCount] = useState(baseOnlineCount);

  useEffect(() => {
    setOnlineCount(baseOnlineCount);

    const interval = window.setInterval(() => {
      setOnlineCount((current) => {
        const change = Math.floor(Math.random() * 9) - 4;
        const next = current + change;

        if (next < 90) return 90;
        if (next > 999) return 999;

        return next;
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, [baseOnlineCount]);

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.icon}>
          {getQuizIcon(quiz.category, quiz.title)}
        </div>

        <div className={styles.liveBadge}>
          <span className={styles.liveDot}></span>
          {onlineCount} live
        </div>
      </div>

      <h3 className={styles.cardTitle}>{quiz.title}</h3>

      <p className={styles.text}>{quiz.subtitle || `${quiz.category} quiz`}</p>

      <div className={styles.rewardStrip}>
        <span>🪙 {quiz.reward} Points</span>
        <strong>Fast Play</strong>
      </div>

      <div className={styles.bottom}>
        <span className={styles.points}>👥 {onlineCount} playing now</span>

        <Link
          href={quiz.slug ? `/quiz-play/${quiz.slug}` : '/quizzes'}
          className={styles.button}
        >
          Play Now
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedQuizzes() {
  const [quizzes, setQuizzes] = useState<BackendQuiz[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await fetch(`${getApiBaseUrl()}/quiz`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setQuizzes(data);
        }
      } catch {
        setQuizzes([]);
      }
    };

    fetchQuizzes();
  }, []);

  const activeQuizzes = quizzes.filter((quiz) => quiz.isActive !== false);
  const featuredQuizzes =
    activeQuizzes.slice(0, 4).length > 0
      ? activeQuizzes.slice(0, 4)
      : fallbackQuizzes;

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.badge}>🔥 Popular Right Now</span>
            <h2 className={styles.title}>Featured Quizzes</h2>
          </div>

          <Link href="/quizzes" className={styles.viewAll}>
            View All →
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredQuizzes.map((quiz) => (
            <FeaturedQuizCard
              key={quiz.slug || quiz.id || quiz.title}
              quiz={quiz}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
