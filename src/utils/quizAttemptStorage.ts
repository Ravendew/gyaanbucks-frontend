const quizAttemptPrefix = 'gyaanbucks_quiz_attempts_';

function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

type QuizAttemptData = {
  date: string;
  attempts: number;
};

export function getQuizAttempts(quizId: string) {
  if (typeof window === 'undefined') return 0;

  const savedData = window.localStorage.getItem(
    `${quizAttemptPrefix}${quizId}`,
  );

  if (!savedData) return 0;

  try {
    const parsedData = JSON.parse(savedData) as QuizAttemptData;

    if (parsedData.date !== getTodayKey()) {
      window.localStorage.removeItem(`${quizAttemptPrefix}${quizId}`);
      return 0;
    }

    return parsedData.attempts;
  } catch {
    window.localStorage.removeItem(`${quizAttemptPrefix}${quizId}`);
    return 0;
  }
}

export function addQuizAttempt(quizId: string) {
  if (typeof window === 'undefined') return 0;

  const currentAttempts = getQuizAttempts(quizId);
  const updatedAttempts = currentAttempts + 1;

  const data: QuizAttemptData = {
    date: getTodayKey(),
    attempts: updatedAttempts,
  };

  window.localStorage.setItem(
    `${quizAttemptPrefix}${quizId}`,
    JSON.stringify(data),
  );

  return updatedAttempts;
}

export function canPlayQuiz(quizId: string, maxAttempts = 2) {
  return getQuizAttempts(quizId) < maxAttempts;
}
