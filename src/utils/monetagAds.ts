const DIRECT_LINK_URL = 'https://omg10.com/4/10949909';

const START_DIRECT_LINK_SESSION_KEY = 'gyaanbucks_direct_link_opened';
const CLAIM_DIRECT_LINK_SESSION_KEY = 'gyaanbucks_claim_direct_link_opened';
const SPONSOR_DIRECT_LINK_COUNT_KEY = 'gyaanbucks_sponsor_direct_link_count';
const POPUNDER_QUIZ_CLAIM_COUNT_KEY = 'gyaanbucks_popunder_quiz_claim_count';

function openDirectLink() {
  if (typeof window === 'undefined') return;

  const newWindow = window.open(DIRECT_LINK_URL, '_blank');

  if (newWindow) {
    newWindow.opener = null;
  }
}

function appendPopunderScript() {
  if (typeof document === 'undefined') return;

  const oldScript = document.querySelector(
    'script[data-gyaanbucks-popunder="true"]',
  );

  if (oldScript) {
    oldScript.remove();
  }

  const script = document.createElement('script');
  script.dataset.gyaanbucksPopunder = 'true';
  script.dataset.zone = '10950022';
  script.src = 'https://al5sm.com/tag.min.js';
  script.async = true;

  document.body.appendChild(script);
}

export function openDirectAdOncePerSession() {
  if (typeof window === 'undefined') return;

  const alreadyOpened = sessionStorage.getItem(START_DIRECT_LINK_SESSION_KEY);

  if (alreadyOpened === 'true') return;

  sessionStorage.setItem(START_DIRECT_LINK_SESSION_KEY, 'true');
  openDirectLink();
}

export function openClaimDirectAdOncePerSession() {
  if (typeof window === 'undefined') return;

  const alreadyOpened = sessionStorage.getItem(CLAIM_DIRECT_LINK_SESSION_KEY);

  if (alreadyOpened === 'true') return;

  sessionStorage.setItem(CLAIM_DIRECT_LINK_SESSION_KEY, 'true');
  openDirectLink();
}

export function openSponsorBreakAd() {
  if (typeof window === 'undefined') return;

  let count = Number(
    sessionStorage.getItem(SPONSOR_DIRECT_LINK_COUNT_KEY) || '0',
  );
  count += 1;

  sessionStorage.setItem(SPONSOR_DIRECT_LINK_COUNT_KEY, String(count));

  openDirectLink();

  if (count % 2 === 0) {
    appendPopunderScript();
  }
}

export function loadPopunderEvery2QuizClaims() {
  if (typeof window === 'undefined') return;

  let count = Number(
    sessionStorage.getItem(POPUNDER_QUIZ_CLAIM_COUNT_KEY) || '0',
  );

  count += 1;

  sessionStorage.setItem(POPUNDER_QUIZ_CLAIM_COUNT_KEY, String(count));

  if (count % 2 !== 0) return;

  appendPopunderScript();
}
