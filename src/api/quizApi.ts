function getApiBaseUrl() {
  return 'https://gyaanbucks-backend-production.up.railway.app';
}

// ✅ ALL QUIZZES
export async function fetchQuizzes() {
  const res = await fetch(`${getApiBaseUrl()}/quiz`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch quizzes');

  return res.json();
}

// ✅ SINGLE QUIZ (IMPORTANT)
export async function fetchQuizBySlug(slug: string) {
  const res = await fetch(`${getApiBaseUrl()}/quiz/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch quiz');

  return res.json();
}
