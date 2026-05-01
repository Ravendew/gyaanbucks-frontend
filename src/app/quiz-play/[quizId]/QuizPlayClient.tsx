'use client';

import Header from '@/components/Header/Header';
import { playQuizFeedback } from '@/utils/quizFeedback';
import { getWalletPoints } from '@/utils/walletStorage';
import {
  loadPopunderEvery2QuizClaims,
  openClaimDirectAdOncePerSession,
} from '@/utils/monetagAds';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './page.module.css';

const POINTS_PER_CORRECT = 10;
const API_BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

type BackendQuestion = {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOptionId: 'a' | 'b' | 'c' | 'd';
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
  isActive: boolean;
  questions: BackendQuestion[];
};

type LoggedInUser = {
  id?: string;
  name?: string;
  mobile?: string;
  email?: string;
  wallet?: number;
};

type AttemptResponse = {
  allowed: boolean;
  remaining: number;
  attemptsUsed?: number;
};

type QuizPlayClientProps = {
  quizSlug: string;
};

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

function getPlayerId() {
  const user = getLoggedInUser();

  if (!user) return null;

  if (user.id) return `user-${user.id}`;
  if (user.mobile) return `mobile-${user.mobile}`;
  if (user.email) return `email-${user.email}`;

  return null;
}

async function checkBackendAttempt(
  quizId: string,
  quizSlug: string,
): Promise<AttemptResponse> {
  try {
    const playerId = getPlayerId();

    if (!playerId) {
      return {
        allowed: false,
        remaining: 0,
        attemptsUsed: 0,
      };
    }

    const res = await fetch(`${API_BASE_URL}/question/attempt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({
        quizId,
        quizSlug,
        deviceId: playerId,
      }),
    });

    if (!res.ok) {
      return { allowed: true, remaining: 1 };
    }

    return await res.json();
  } catch (err) {
    console.error('Attempt API error:', err);
    return { allowed: true, remaining: 1 };
  }
}

export default function QuizPlayClient({ quizSlug }: QuizPlayClientProps) {
  const router = useRouter();

  const allowLeaveRef = useRef(false);
  const sponsorBreakShownRef = useRef<Set<number>>(new Set());

  const [quiz, setQuiz] = useState<BackendQuiz | null>(null);
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [walletPoints, setWalletPoints] = useState(0);
  const [isClaimed, setIsClaimed] = useState(false);
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [showPointsPop, setShowPointsPop] = useState(false);
  const [confettiPlayed, setConfettiPlayed] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showSponsorBreak, setShowSponsorBreak] = useState(false);

  const fetchUserWallet = async () => {
    try {
      const user = getLoggedInUser();

      if (!user?.id) {
        setWalletPoints(getWalletPoints());
        return;
      }

      const res = await fetch(`${API_BASE_URL}/users/profile/${user.id}`, {
        cache: 'no-store',
      });

      const data = await res.json();

      if (res.ok && data?.wallet !== undefined) {
        setWalletPoints(data.wallet);

        localStorage.setItem(
          'gyaanbucks_user',
          JSON.stringify({
            ...user,
            wallet: data.wallet,
          }),
        );
      }
    } catch (err) {
      console.error('Wallet fetch error:', err);
    }
  };

  const questions = useMemo(() => {
    if (!quiz?.questions) return [];

    return quiz.questions.map((q) => ({
      id: q.id,
      question: q.question,
      options: [q.optionA, q.optionB, q.optionC, q.optionD],
      correctIndex: ['a', 'b', 'c', 'd'].indexOf(q.correctOptionId),
    }));
  }, [quiz]);

  const currentQuestion = questions[currentIndex];
  const maxAttempts = quiz?.attemptsPerDay || 2;

  const progress =
    questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds,
  ).padStart(2, '0')}`;

  useEffect(() => {
    const user = getLoggedInUser();

    if (!user) {
      router.replace(`/auth?tab=login&redirect=/quiz-play/${quizSlug}`);
      return;
    }

    const loadQuiz = async () => {
      try {
        setLoading(true);
        setIsLocked(false);

        const res = await fetch(`${API_BASE_URL}/quiz/${quizSlug}`, {
          cache: 'no-store',
        });

        if (!res.ok) {
          setQuiz(null);
          return;
        }

        const data: BackendQuiz = await res.json();

        const attemptData = await checkBackendAttempt(data.id, data.slug);

        setQuiz(data);
        setTimeLeft(data.timeLimit || 300);
        await fetchUserWallet();

        const usedAttempts =
          attemptData.attemptsUsed ??
          (data.attemptsPerDay || 2) - attemptData.remaining;

        setAttemptsUsed(usedAttempts < 0 ? 0 : usedAttempts);

        if (!attemptData.allowed) {
          setIsLocked(true);
        }
      } catch (err) {
        console.error('Quiz load error:', err);
        setQuiz(null);
      } finally {
        setLoading(false);
      }
    };

    if (quizSlug) loadQuiz();
  }, [quizSlug, router]);

  useEffect(() => {
    if (isFinished) {
      fetchUserWallet();
    }
  }, [isFinished]);

  useEffect(() => {
    if (
      !quiz ||
      isFinished ||
      isLocked ||
      showSponsorBreak ||
      questions.length === 0
    )
      return;

    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [
    quiz,
    timeLeft,
    isFinished,
    isLocked,
    showSponsorBreak,
    questions.length,
  ]);

  useEffect(() => {
    if (selected === null || isFinished || isLocked || showSponsorBreak) return;

    const timer = window.setTimeout(() => {
      goNext();
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [selected, isFinished, isLocked, showSponsorBreak]);

  useEffect(() => {
    if (!isFinished || confettiPlayed || questions.length === 0) return;

    const accuracy = (correctCount / questions.length) * 100;

    if (accuracy > 40) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }

    setConfettiPlayed(true);
  }, [isFinished, confettiPlayed, correctCount, questions.length]);

  useEffect(() => {
    if (isFinished || isLocked || loading) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (allowLeaveRef.current) return;

      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isFinished, isLocked, loading]);

  const handleOptionPress = (optionIndex: number) => {
    if (selected !== null || !currentQuestion) return;

    setSelected(optionIndex);

    const isCorrect = optionIndex === currentQuestion.correctIndex;

    playQuizFeedback(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setEarnedPoints((prev) => prev + POINTS_PER_CORRECT);
      setShowPointsPop(true);

      window.setTimeout(() => {
        setShowPointsPop(false);
      }, 700);
    }
  };

  const goNext = () => {
    if (currentIndex >= questions.length - 1) {
      setIsFinished(true);
      return;
    }

    const nextIndex = currentIndex + 1;

    if (
      nextIndex > 0 &&
      nextIndex % 10 === 0 &&
      nextIndex < questions.length &&
      !sponsorBreakShownRef.current.has(nextIndex)
    ) {
      sponsorBreakShownRef.current.add(nextIndex);
      setShowSponsorBreak(true);
      return;
    }

    setCurrentIndex(nextIndex);
    setSelected(null);
  };

  const handleContinueAfterSponsorBreak = () => {
    const nextIndex = currentIndex + 1;

    setShowSponsorBreak(false);
    setCurrentIndex(nextIndex);
    setSelected(null);
  };

  const handleClaimReward = async () => {
    if (isClaimed || earnedPoints <= 0) return;

    openClaimDirectAdOncePerSession();
    loadPopunderEvery2QuizClaims();

    try {
      const user = getLoggedInUser();

      if (!user?.id) {
        setIsClaimed(true);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/users/claim-reward`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          points: earnedPoints,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setWalletPoints(data.wallet ?? walletPoints + earnedPoints);

        localStorage.setItem(
          'gyaanbucks_user',
          JSON.stringify({
            ...user,
            wallet: data.wallet ?? walletPoints + earnedPoints,
          }),
        );
      }

      setIsClaimed(true);
    } catch (err) {
      console.error('Claim reward error:', err);
      setIsClaimed(true);
    }
  };

  const handleLeaveQuiz = () => {
    allowLeaveRef.current = true;
    router.push('/quizzes');
  };

  if (loading) {
    return (
      <main className={styles.page}>
        <Header />

        <section className={styles.centerSection}>
          <div className={styles.statusCard}>
            <span className={styles.statusBadge}>⏳ Loading</span>
            <h1>Preparing your quiz...</h1>
            <p>Please wait while we load questions.</p>
          </div>
        </section>
      </main>
    );
  }

  if (!quiz) {
    return (
      <main className={styles.page}>
        <Header />

        <section className={styles.centerSection}>
          <div className={styles.statusCard}>
            <span className={styles.statusBadge}>⚠️ Not Found</span>
            <h1>Quiz not found</h1>
            <p>This quiz is not available right now.</p>
            <Link href="/quizzes" className={styles.primaryButton}>
              Play Other Quizzes
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (questions.length === 0) {
    return (
      <main className={styles.page}>
        <Header />

        <section className={styles.centerSection}>
          <div className={styles.statusCard}>
            <span className={styles.statusBadge}>⚠️ Not Available</span>
            <h1>Quiz questions not added yet</h1>
            <p>Please add questions from admin panel.</p>
            <Link href="/quizzes" className={styles.primaryButton}>
              Play Other Quizzes
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (isLocked) {
    return (
      <main className={styles.page}>
        <Header />

        <section className={styles.centerSection}>
          <div className={styles.statusCard}>
            <span className={styles.statusBadge}>🔒 Daily Limit Reached</span>
            <h1>Please come back tomorrow</h1>
            <p>You used all {maxAttempts} attempts for this quiz today.</p>
            <Link href="/quizzes" className={styles.primaryButton}>
              Play Other Quizzes
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (showSponsorBreak) {
    return (
      <main className={styles.page}>
        <Header />

        <section className={styles.centerSection}>
          <div className={styles.statusCard}>
            <span className={styles.statusBadge}>🎯 Sponsor Break</span>
            <h1>Great progress!</h1>
            <p>
              You completed {currentIndex + 1} questions. Continue now to play
              the next set and earn more rewards.
            </p>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleContinueAfterSponsorBreak}
            >
              Continue Quiz
            </button>
          </div>
        </section>
      </main>
    );
  }

  if (isFinished) {
    const accuracy = Math.round((correctCount / questions.length) * 100);

    return (
      <main className={styles.page}>
        <Header />

        <section className={styles.centerSection}>
          <div className={styles.resultCard}>
            <span className={styles.statusBadge}>🎉 Quiz Completed</span>

            <h1>Your Result</h1>

            <div className={styles.resultGrid}>
              <div>
                <strong>
                  {correctCount}/{questions.length}
                </strong>
                <span>Correct Answers</span>
              </div>

              <div>
                <strong>{accuracy}%</strong>
                <span>Accuracy</span>
              </div>

              <div>
                <strong>+{earnedPoints}</strong>
                <span>Earned Points</span>
              </div>

              <div>
                <strong>{walletPoints}</strong>
                <span>Wallet Points</span>
              </div>
            </div>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleClaimReward}
              disabled={isClaimed}
            >
              {isClaimed ? 'Reward Claimed' : 'Claim Reward'}
            </button>

            <Link href="/quizzes" className={styles.secondaryButton}>
              Play Other Quizzes
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.quizSection}>
        <div className={styles.quizCard}>
          <div className={styles.quizTop}>
            <div>
              <span className={styles.category}>{quiz.category}</span>
              <h1>{quiz.title}</h1>
              <p>{quiz.subtitle}</p>
            </div>

            <div className={styles.timerBox}>
              <span>Time Left</span>
              <strong>{formattedTime}</strong>
            </div>
          </div>

          <div className={styles.metaRow}>
            <span>
              Question {currentIndex + 1}/{questions.length}
            </span>
            <span>
              Attempts {attemptsUsed}/{maxAttempts}
            </span>
            <span>Wallet {walletPoints}</span>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className={styles.questionBox}>
            {showPointsPop && <div className={styles.pointsPop}>+10</div>}

            <h2>{currentQuestion.question}</h2>

            <div className={styles.optionsGrid}>
              {currentQuestion.options.map((option, index) => {
                const isSelected = selected === index;
                const isCorrect = currentQuestion.correctIndex === index;
                const showCorrect = selected !== null && isCorrect;
                const showWrong = isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    type="button"
                    className={`${styles.optionBtn} ${
                      showCorrect ? styles.correctOption : ''
                    } ${showWrong ? styles.wrongOption : ''}`}
                    onClick={() => handleOptionPress(index)}
                    disabled={selected !== null}
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.bottomActions}>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => setShowExitPopup(true)}
            >
              Exit Quiz
            </button>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={goNext}
              disabled={selected === null}
            >
              {currentIndex >= questions.length - 1 ? 'Finish Quiz' : 'Next'}
            </button>
          </div>
        </div>
      </section>

      {showExitPopup && (
        <div className={styles.exitOverlay}>
          <div className={styles.exitModal}>
            <h3>Exit quiz?</h3>
            <p>Your current quiz progress will not be saved.</p>

            <div className={styles.exitActions}>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() => setShowExitPopup(false)}
              >
                Continue Quiz
              </button>

              <button
                type="button"
                className={styles.primaryButton}
                onClick={handleLeaveQuiz}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
