'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { openDirectAdOncePerSession } from '@/utils/monetagAds';
import styles from './QuizCard.module.css';

type Quiz = {
  title: string;
  category: string;
  points: number;
  questions: number;
  time: string;
  icon: string;
  href?: string;
  attemptsText?: string;
  isLocked?: boolean;
  onlineText?: string;
  onlinePlayers?: number;
};

type QuizCardProps = {
  quiz: Quiz;
};

function getStableOnlineCount(title: string) {
  let hash = 0;

  for (let i = 0; i < title.length; i += 1) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }

  return 85 + (Math.abs(hash) % 96);
}

function getTrendBadge(count: number) {
  if (count >= 165) {
    return {
      label: '🔥 Trending',
      className: styles.trendingBadge,
    };
  }

  if (count >= 120) {
    return {
      label: '⚡ Hot Quiz',
      className: styles.hotBadge,
    };
  }

  return {
    label: '🟢 New',
    className: styles.newBadge,
  };
}

function getUrgencyText(quiz: Quiz) {
  if (quiz.isLocked) {
    return '🔒 Today’s limit reached';
  }

  if (quiz.points >= 20) {
    return '🎯 High reward quiz';
  }

  return '⏳ Limited plays today';
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const router = useRouter();

  const baseOnlineCount = useMemo(() => {
    return quiz.onlinePlayers ?? getStableOnlineCount(quiz.title);
  }, [quiz.onlinePlayers, quiz.title]);

  const [onlineCount, setOnlineCount] = useState(baseOnlineCount);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setOnlineCount(baseOnlineCount);
    }, 0);

    const interval = window.setInterval(() => {
      setOnlineCount((current) => {
        const change = Math.floor(Math.random() * 7) - 3;
        const next = current + change;

        if (next < 80) return 80;
        if (next > 220) return 220;

        return next;
      });
    }, 4500);

    return () => window.clearInterval(interval);
  }, [baseOnlineCount]);

  const handleStartQuiz = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (quiz.isLocked) {
      event.preventDefault();
      return;
    }

    const savedUser = localStorage.getItem('gyaanbucks_user');

    if (!savedUser) {
      event.preventDefault();
      router.push('/auth?tab=login');
      return;
    }

    openDirectAdOncePerSession();
  };

  const onlineText = quiz.onlineText ?? `${onlineCount} players online`;
  const trendBadge = getTrendBadge(onlineCount);
  const urgencyText = getUrgencyText(quiz);

  return (
    <div className={`${styles.card} ${quiz.isLocked ? styles.lockedCard : ''}`}>
      <div className={styles.statusBadge}>
        {quiz.isLocked ? '🔒 Locked' : '✅ Playable'}
      </div>

      <div className={styles.top}>
        <div className={styles.icon}>{quiz.icon}</div>

        <div>
          <p className={styles.category}>{quiz.category}</p>
          <h3 className={styles.title}>{quiz.title}</h3>
        </div>
      </div>

      <div className={styles.liveRow}>
        <div className={styles.onlineBadge}>
          <span className={styles.onlineDot}></span>
          <span>{onlineText}</span>
        </div>

        <div className={`${styles.trendBadge} ${trendBadge.className}`}>
          {trendBadge.label}
        </div>
      </div>

      <div className={styles.urgencyTag}>{urgencyText}</div>

      <div className={styles.reward}>
        <div className={styles.rewardValue}>+{quiz.points}</div>
        <div className={styles.rewardLabel}>Reward Points</div>
      </div>

      {quiz.attemptsText && (
        <div className={styles.attempts}>{quiz.attemptsText}</div>
      )}

      <Link
        href={quiz.isLocked ? '/quizzes' : (quiz.href ?? '/quiz-play')}
        onClick={handleStartQuiz}
        className={`${styles.button} ${quiz.isLocked ? styles.disabledBtn : ''}`}
      >
        {quiz.isLocked ? 'Come Back Tomorrow' : 'Start Quiz'}
      </Link>
    </div>
  );
}
