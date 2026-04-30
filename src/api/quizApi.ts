function getApiBaseUrl() {
  if (typeof window !== 'undefined') {
    return `http://${window.location.hostname}:5000`;
  }

  return 'http://localhost:5000';
}

export async function fetchQuizzes() {
  const res = await fetch(`${getApiBaseUrl()}/quiz`);

  if (!res.ok) {
    throw new Error('Failed to fetch quizzes');
  }

  return res.json();
}

export async function fetchQuizBySlug(slug: string) {
  const res = await fetch(`${getApiBaseUrl()}/quiz/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch quiz');
  }

  return res.json();
}
