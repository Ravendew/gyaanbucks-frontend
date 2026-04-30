'use client';

import Header from '@/components/Header/Header';
import { playQuizFeedback } from '@/utils/quizFeedback';
import { getWalletPoints } from '@/utils/walletStorage';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './page.module.css';

const POINTS_PER_CORRECT = 10;

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

type AttemptResponse = {
  allowed: boolean;
  remaining: number;
  attemptsUsed?: number;
};

function getApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://localhost:5000';
  return `http://${window.location.hostname}:5000`;
}

function getDeviceId() {
  if (typeof window === 'undefined') return 'server-device';

  let id = localStorage.getItem('deviceId');

  if (!id) {
    id = 'device-' + Math.random().toString(36).substring(2, 12);
    localStorage.setItem('deviceId', id);
  }

  return id;
}

async function checkBackendAttempt(
  quizId: string,
  quizSlug: string,
): Promise<AttemptResponse> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/question/attempt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quizId,
        quizSlug,
        deviceId: getDeviceId(),
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

export default function QuizPlayPage() {
  const params = useParams();
  const quizSlug = String(params.quizId || '');

  const allowLeaveRef = useRef(false);

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

  const fetchUserWallet = async () => {
    try {
      const savedUser = localStorage.getItem('gyaanbucks_user');

      if (!savedUser) {
        setWalletPoints(getWalletPoints());
        return;
      }

      const user = JSON.parse(savedUser);

      if (!user?.id) {
        setWalletPoints(getWalletPoints());
        return;
      }

      const res = await fetch(`${getApiBaseUrl()}/users/profile/${user.id}`, {
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
    if (!quiz) return [];

    return quiz.questions.map((q) => ({
      id: q.id,
      question: q.question,
      options: [q.optionA, q.optionB, q.optionC, q.optionD],
      correctIndex: ['a', 'b', 'c', 'd'].indexOf(q.correctOptionId),
    }));
  }, [quiz]);

  const currentQuestion = questions[currentIndex];
  const maxAttempts = quiz?.attemptsPerDay || 2;
  const quizDuration = quiz?.timeLimit || 300;

  const progress =
    questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds,
  ).padStart(2, '0')}`;

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        setLoading(true);
        setIsLocked(false);

        const res = await fetch(`${getApiBaseUrl()}/quiz/${quizSlug}`, {
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

        const usedAttempts = data.attemptsPerDay - attemptData.remaining;
        setAttemptsUsed(usedAttempts < 0 ? 0 : usedAttempts);

        if (!attemptData.allowed) {
          setIsLocked(true);
        }
      } catch {
        setQuiz(null);
      } finally {
        setLoading(false);
      }
    };

    if (quizSlug) loadQuiz();
  }, [quizSlug]);

  useEffect(() => {
    if (isFinished) {
      fetchUserWallet();
    }
  }, [isFinished]);

  useEffect(() => {
    if (!quiz || isFinished || isLocked) return;

    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [quiz, timeLeft, isFinished, isLocked]);

  useEffect(() => {
    if (selected === null || isFinished || isLocked) return;

    const timer = window.setTimeout(() => {
      goNext();
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [selected, isFinished, isLocked]);

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
    if (isFinished || isLocked) return;

    window.history.pushState({ quizGuard: true }, '', window.location.href);

    const handleBack = () => {
      if (allowLeaveRef.current) return;
      setShowExitPopup(true);
      window.history.pushState({ quizGuard: true }, '', window.location.href);
    };

    window.addEventListener('popstate', handleBack);

    return () => window.removeEventListener('popstate', handleBack);
  }, [isFinished, isLocked]);

  const handleSelect = (index: number) => {
    if (!currentQuestion || selected !== null || isFinished || isLocked) return;

    const isCorrect = index === currentQuestion.correctIndex;

    playQuizFeedback(isCorrect ? 'correct' : 'wrong');
    setSelected(index);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setEarnedPoints((prev) => prev + POINTS_PER_CORRECT);
      setShowPointsPop(true);

      window.setTimeout(() => {
        setShowPointsPop(false);
      }, 900);
    }
  };

  const goNext = () => {
    if (selected === null || isLocked) return;

    if (currentIndex === questions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
  };

  const claimPoints = async () => {
    try {
      const savedUser = localStorage.getItem('gyaanbucks_user');

      if (!savedUser) {
        alert('Please login to claim rewards');
        return;
      }

      const user = JSON.parse(savedUser);
      const points = earnedPoints;

      if (points <= 0) {
        alert('Invalid reward');
        return;
      }

      const res = await fetch(`${getApiBaseUrl()}/users/claim-reward`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          points,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Failed to claim reward');
        return;
      }

      setIsClaimed(true);

      if (data?.wallet !== undefined) {
        setWalletPoints(data.wallet);

        localStorage.setItem(
          'gyaanbucks_user',
          JSON.stringify({
            ...user,
            wallet: data.wallet,
          }),
        );
      } else {
        await fetchUserWallet();
      }

      alert(`${data?.points || points} Points added to wallet`);
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  const restartQuiz = async () => {
    if (!quiz) return;

    const attemptData = await checkBackendAttempt(quiz.id, quiz.slug);

    if (!attemptData.allowed) {
      setIsLocked(true);
      return;
    }

    const usedAttempts = quiz.attemptsPerDay - attemptData.remaining;
    setAttemptsUsed(usedAttempts < 0 ? 0 : usedAttempts);

    setCurrentIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setEarnedPoints(0);
    await fetchUserWallet();
    setIsClaimed(false);
    setIsFinished(false);
    setConfettiPlayed(false);
    setTimeLeft(quizDuration);
  };

  const exitQuiz = () => {
    allowLeaveRef.current = true;
    window.location.href = '/quizzes';
  };

  if (loading) {
    return (
      <main className={styles.page}>
        <Header />
        <div className={styles.wrap}>
          <section className={`${styles.card} ${styles.resultCard}`}>
            <div className={styles.resultBadge}>⏳ Loading</div>
            <h1 className={styles.resultTitle}>Preparing Quiz...</h1>
            <p className={styles.resultSub}>
              Please wait while we load questions.
            </p>
          </section>
        </div>
      </main>
    );
  }

  if (!quiz || questions.length === 0 || !currentQuestion) {
    return (
      <main className={styles.page}>
        <Header />
        <div className={styles.wrap}>
          <section className={`${styles.card} ${styles.resultCard}`}>
            <div className={styles.resultBadge}>⚠️ Not Available</div>
            <h1 className={styles.resultTitle}>Quiz questions not added yet</h1>
            <p className={styles.resultSub}>
              Please add questions from admin panel.
            </p>

            <div className={styles.resultActions}>
              <Link href="/quizzes" className={styles.primaryBtn}>
                Play Other Quizzes
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  if (isLocked && !isFinished) {
    return (
      <main className={styles.page}>
        <Header />
        <div className={styles.wrap}>
          <section className={`${styles.card} ${styles.resultCard}`}>
            <div className={styles.resultBadge}>🔒 Daily Limit Reached</div>
            <h1 className={styles.resultTitle}>Please come back tomorrow</h1>
            <p className={styles.resultSub}>
              You used all {maxAttempts} attempts for this quiz today.
            </p>

            <div className={styles.resultActions}>
              <Link href="/quizzes" className={styles.primaryBtn}>
                Play Other Quizzes
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  if (isFinished) {
    const accuracy = Math.round((correctCount / questions.length) * 100);
    const canRetry = attemptsUsed < maxAttempts;

    return (
      <main className={styles.page}>
        <Header />

        <div className={styles.wrap}>
          <section className={`${styles.card} ${styles.resultCard}`}>
            {earnedPoints > 0 && (
              <div className={styles.coinBurst}>
                <span>🪙</span>
                <span>🪙</span>
                <span>🪙</span>
                <span>🪙</span>
                <span>🪙</span>
                <span>🪙</span>
              </div>
            )}

            <div className={styles.resultBadge}>🎉 Quiz Completed</div>

            <h1 className={styles.resultTitle}>{quiz.title}</h1>

            <p className={styles.resultSub}>
              You answered {correctCount} out of {questions.length} correctly.
            </p>

            <div className={styles.scoreCircle}>{accuracy}%</div>

            <div className={styles.resultBox}>
              <div>
                <span>Correct Answers</span>
                <strong>{correctCount}</strong>
              </div>

              <div>
                <span>Earned Points</span>
                <strong>{earnedPoints}</strong>
              </div>
            </div>

            <div className={styles.walletPreview}>
              <span>Wallet Balance</span>
              <strong>{walletPoints} Points</strong>
            </div>

            <div className={styles.resultActions}>
              <button
                className={`${styles.primaryBtn} ${
                  isClaimed || earnedPoints <= 0 ? styles.claimDisabled : ''
                }`}
                onClick={claimPoints}
                disabled={isClaimed || earnedPoints <= 0}
              >
                {isClaimed ? 'Points Claimed' : `Claim ${earnedPoints} Points`}
              </button>

              <Link href="/quizzes" className={styles.secondaryBtn}>
                Back to Quizzes
              </Link>

              {canRetry ? (
                <button className={styles.secondaryBtn} onClick={restartQuiz}>
                  Retry Quiz
                </button>
              ) : (
                <Link href="/quizzes" className={styles.secondaryBtn}>
                  Play More Quizzes
                </Link>
              )}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Header />

      <div className={styles.wrap}>
        <div className={styles.topBar}>
          <button
            className={styles.back}
            onClick={() => setShowExitPopup(true)}
          >
            ← Exit Quiz
          </button>

          <div
            className={`${styles.timer} ${
              timeLeft <= 30 ? styles.timerDanger : ''
            }`}
          >
            ⏱ {formattedTime}
          </div>
        </div>

        <section className={styles.card}>
          <div className={styles.quizInfo}>
            <span className={styles.badge}>{quiz.category}</span>

            <div
              className={`${styles.points} ${
                showPointsPop ? styles.pointsGlow : ''
              }`}
            >
              +{earnedPoints} Points
              {showPointsPop && (
                <span className={styles.pointsPop}>+{POINTS_PER_CORRECT}</span>
              )}
            </div>
          </div>

          <div className={styles.progress}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className={styles.questionCount}>
            Question {currentIndex + 1} of {questions.length}
          </div>

          <h1 className={styles.question}>{currentQuestion.question}</h1>

          <div className={styles.options}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selected === index;
              const isCorrect = index === currentQuestion.correctIndex;
              const showCorrect = selected !== null && isCorrect;
              const showWrong = isSelected && !isCorrect;

              return (
                <label
                  key={index}
                  className={`${styles.option} ${
                    isSelected ? styles.optionActive : ''
                  } ${showCorrect ? styles.optionCorrect : ''} ${
                    showWrong ? styles.optionWrong : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="answer"
                    className={styles.radioInput}
                    checked={isSelected}
                    disabled={selected !== null}
                    onChange={() => handleSelect(index)}
                  />

                  <span className={styles.optionText}>
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </label>
              );
            })}
          </div>

          <div className={styles.footer}>
            <p className={styles.note}>
              Attempt {attemptsUsed}/{maxAttempts}
            </p>

            <button
              className={`${styles.next} ${
                selected === null ? styles.nextDisabled : ''
              }`}
              onClick={goNext}
              disabled={selected === null}
            >
              {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
            </button>
          </div>
        </section>
      </div>

      {showExitPopup && (
        <div className={styles.exitOverlay}>
          <div className={styles.exitModal}>
            <div className={styles.exitIcon}>⚠️</div>

            <h2 className={styles.exitTitle}>Leave this quiz?</h2>

            <p className={styles.exitText}>
              Your current progress will be lost if you exit now.
            </p>

            <div className={styles.exitActions}>
              <button
                className={styles.exitStay}
                onClick={() => setShowExitPopup(false)}
              >
                Stay in Quiz
              </button>

              <button className={styles.exitLeave} onClick={exitQuiz}>
                Exit Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
