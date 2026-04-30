const BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

export async function fetchQuizzes() {
  const res = await fetch(`${BASE_URL}/quiz`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch quizzes');
  }

  return res.json();
}

export async function fetchQuizBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/quiz/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch quiz');
  }

  return res.json();
}
