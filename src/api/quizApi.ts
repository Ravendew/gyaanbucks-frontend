const API_BASE_URL = 'https://gyaanbucks-backend-production.up.railway.app';

function getApiBaseUrl() {
  return API_BASE_URL;
}

async function safeJsonFetch(url: string) {
  const res = await fetch(url, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

// ✅ ALL QUIZZES
export async function fetchQuizzes() {
  return safeJsonFetch(`${getApiBaseUrl()}/quiz`);
}

// ✅ SINGLE QUIZ
export async function fetchQuizBySlug(slug: string) {
  return safeJsonFetch(`${getApiBaseUrl()}/quiz/${slug}`);
}
