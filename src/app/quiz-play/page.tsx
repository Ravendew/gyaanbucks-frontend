'use client';

import Header from '@/components/Header/Header';
import { playQuizFeedback } from '@/utils/quizFeedback';
import {
  addQuizAttempt,
  canPlayQuiz,
  getQuizAttempts,
} from '@/utils/quizAttemptStorage';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const questions = [
  {
    question: 'What is the capital city of India?',
    options: ['New Delhi', 'Mumbai', 'Hyderabad', 'Bengaluru'],
    correctIndex: 0,
  },
  {
    question: 'Which sport is most popular in India?',
    options: ['Football', 'Cricket', 'Tennis', 'Hockey'],
    correctIndex: 1,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    correctIndex: 2,
  },
];

type LearningAttempt = {
  quizId: string;
  quizTitle: string;
  category: string;
  correctCount: number;
  totalQuestions: number;
  earnedPoints: number;
  createdAt: string;
};

const quizId = 'daily-practice-quiz';
const quizTitle = 'Daily Practice Quiz';
const quizCategory = 'General Knowledge';
const maxQuizAttempts = 2;
const pointsPerCorrectAnswer = 10;
const quizDurationSeconds = 5 * 60;

function getLearningPoints() {
  if (typeof window === 'undefined') return 0;
  return Number(localStorage.getItem('gyaanbucks_points') || 0);
}

function saveLearningAttempt(attempt: LearningAttempt) {
  if (typeof window === 'undefined') return;

  const saved = localStorage.getItem('gyaanbucks_attempts');

  let attempts: LearningAttempt[] = [];

  try {
    attempts = saved ? (JSON.parse(saved) as LearningAttempt[]) : [];
  } catch {
    attempts = [];
  }

  localStorage.setItem(
    'gyaanbucks_attempts',
    JSON.stringify([attempt, ...attempts].slice(0, 50)),
  );
}

export default function QuizPlayPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [walletPoints, setWalletPoints] = useState(0);
  const [isClaimed, setIsClaimed] = useState(false);
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [attemptSaved, setAttemptSaved] = useState(false);
  const [showPointsPop, setShowPointsPop] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [confettiPlayed, setConfettiPlayed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quizDurationSeconds);

  const currentQuestion = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds,
  ).padStart(2, '0')}`;

  useEffect(() => {
    const savedAttempts = getQuizAttempts(quizId);

    setWalletPoints(getLearningPoints());
    setAttemptsUsed(savedAttempts);
    setIsLocked(!canPlayQuiz(quizId, maxQuizAttempts));
  }, []);

  useEffect(() => {
    if (!isFinished || attemptSaved || isLocked) return;

    const updatedAttempts = addQuizAttempt(quizId);

    saveLearningAttempt({
      quizId,
      quizTitle,
      category: quizCategory,
      correctCount,
      totalQuestions: questions.length,
      earnedPoints,
      createdAt: new Date().toISOString(),
    });

    setAttemptsUsed(updatedAttempts);
    setAttemptSaved(true);

    if (updatedAttempts >= maxQuizAttempts) {
      setIsLocked(true);
    }
  }, [isFinished, attemptSaved, isLocked, correctCount, earnedPoints]);

  useEffect(() => {
    if (isFinished || isLocked) return;

    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timeLeft, isFinished, isLocked]);

  useEffect(() => {
    if (selected === null || isFinished || isLocked) return;

    const autoNextTimer = window.setTimeout(() => {
      goNext();
    }, 1500);

    return () => window.clearTimeout(autoNextTimer);
  }, [selected, isFinished, isLocked]);

  useEffect(() => {
    if (!isFinished || confettiPlayed) return;

    const accuracy = (correctCount / questions.length) * 100;

    if (accuracy > 40) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });

      window.setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.7 },
        });
      }, 400);
    }

    setConfettiPlayed(true);
  }, [isFinished, confettiPlayed, correctCount]);

  const handleSelectAnswer = (index: number) => {
    if (selected !== null || isFinished || isLocked) return;

    const isCorrect = index === currentQuestion.correctIndex;

    playQuizFeedback(isCorrect ? 'correct' : 'wrong');

    setSelected(index);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setEarnedPoints((prev) => prev + pointsPerCorrectAnswer);
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
    setShowPointsPop(false);
  };

  const claimPoints = () => {
    if (isClaimed || earnedPoints <= 0) return;

    const currentPoints = getLearningPoints();
    const updatedPoints = currentPoints + earnedPoints;

    localStorage.setItem('gyaanbucks_points', String(updatedPoints));

    setWalletPoints(updatedPoints);
    setIsClaimed(true);
  };

  const restartQuiz = () => {
    if (attemptsUsed >= maxQuizAttempts) return;

    setCurrentIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setEarnedPoints(0);
    setWalletPoints(getLearningPoints());
    setIsClaimed(false);
    setShowPointsPop(false);
    setAttemptSaved(false);
    setIsFinished(false);
    setConfettiPlayed(false);
    setTimeLeft(quizDurationSeconds);
  };

  if (isLocked && !isFinished) {
    return (
      <main className={styles.page}>
        <Header />

        <div className={styles.wrap}>
          <section className={`${styles.card} ${styles.resultCard}`}>
            <div className={styles.resultBadge}>🔒 Quiz Locked</div>

            <h1 className={styles.resultTitle}>Attempts Completed</h1>

            <p className={styles.resultSub}>
              You have already used {maxQuizAttempts} / {maxQuizAttempts}{' '}
              attempts for this quiz. Please come back tomorrow or practice
              another quiz to continue learning.
            </p>

            <div className={styles.walletPreview}>
              <span>Total Learning Points</span>
              <strong>{walletPoints}</strong>
            </div>

            <div className={styles.resultActions}>
              <Link href="/quizzes" className={styles.primaryBtn}>
                Practice Other Quizzes
              </Link>

              <Link href="/" className={styles.secondaryBtn}>
                Go to Home
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  if (isFinished) {
    const accuracy = Math.round((correctCount / questions.length) * 100);

    return (
      <main className={styles.page}>
        <Header />

        <div className={styles.wrap}>
          <section className={`${styles.card} ${styles.resultCard}`}>
            {accuracy > 40 && (
              <div className={styles.coinBurst} aria-hidden="true">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            )}

            <div className={styles.resultBadge}>
              {timeLeft <= 0 ? '⏱ Time Over' : '🎉 Quiz Completed'}
            </div>

            <h1 className={styles.resultTitle}>
              {earnedPoints} Learning Points
            </h1>

            <p className={styles.resultSub}>
              You got {correctCount} / {questions.length} correct ({accuracy}%).
              Attempt {attemptsUsed} / {maxQuizAttempts}
            </p>

            <div className={styles.scoreCircle}>
              <span>{accuracy}%</span>
            </div>

            <div className={styles.walletPreview}>
              <span>Total Learning Points</span>
              <strong>{walletPoints}</strong>
            </div>

            {attemptsUsed >= maxQuizAttempts && (
              <p className={styles.resultSub}>
                You completed all attempts for this quiz. Please come back
                tomorrow or practice another quiz.
              </p>
            )}

            <div className={styles.resultActions}>
              <button
                type="button"
                onClick={claimPoints}
                disabled={isClaimed || earnedPoints <= 0}
                className={`${styles.primaryBtn} ${
                  isClaimed || earnedPoints <= 0 ? styles.claimDisabled : ''
                }`}
              >
                {isClaimed ? 'Points Saved ✅' : `Save ${earnedPoints} Points`}
              </button>

              <Link href="/quizzes" className={styles.secondaryBtn}>
                Practice Other Quizzes
              </Link>

              <button
                type="button"
                onClick={restartQuiz}
                disabled={attemptsUsed >= maxQuizAttempts}
                className={`${styles.secondaryBtn} ${
                  attemptsUsed >= maxQuizAttempts ? styles.claimDisabled : ''
                }`}
              >
                {attemptsUsed >= maxQuizAttempts
                  ? 'Attempts Completed'
                  : 'Practice Again'}
              </button>
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
          <Link href="/quizzes" className={styles.back}>
            ← Back to Quizzes
          </Link>

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
            <span className={styles.badge}>Daily Practice Quiz</span>

            <span
              className={`${styles.points} ${
                showPointsPop ? styles.pointsGlow : ''
              }`}
            >
              Points: {earnedPoints}
              {showPointsPop && (
                <span className={styles.pointsPop}>
                  +{pointsPerCorrectAnswer}
                </span>
              )}
            </span>
          </div>

          <div className={styles.progress}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p className={styles.questionCount}>
            Question {currentIndex + 1} of {questions.length}
          </p>

          <h1 className={styles.question}>{currentQuestion.question}</h1>

          <div className={styles.options}>
            {currentQuestion.options.map((option, index) => {
              const inputId = `question-${currentIndex}-option-${index}`;

              return (
                <label
                  key={inputId}
                  htmlFor={inputId}
                  className={`${styles.option}
                    ${selected === index ? styles.optionActive : ''}
                    ${
                      selected !== null &&
                      index === currentQuestion.correctIndex
                        ? styles.optionCorrect
                        : ''
                    }
                    ${
                      selected !== null &&
                      selected === index &&
                      index !== currentQuestion.correctIndex
                        ? styles.optionWrong
                        : ''
                    }
                  `}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name={`question-${currentIndex}`}
                    checked={selected === index}
                    onChange={() => handleSelectAnswer(index)}
                    className={styles.radioInput}
                  />
                  {option}
                </label>
              );
            })}
          </div>

          <div className={styles.footer}>
            <p className={styles.note}>
              {selected === null
                ? 'Select one answer to continue.'
                : selected === currentQuestion.correctIndex
                  ? `Correct! +${pointsPerCorrectAnswer} learning points added.`
                  : 'Wrong answer. Correct answer highlighted.'}
            </p>

            <button
              type="button"
              onClick={goNext}
              disabled={selected === null}
              className={`${styles.next} ${
                selected === null ? styles.nextDisabled : ''
              }`}
            >
              {selected === null
                ? 'Next Question →'
                : currentIndex === questions.length - 1
                  ? 'Finishing...'
                  : 'Next question loading...'}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
