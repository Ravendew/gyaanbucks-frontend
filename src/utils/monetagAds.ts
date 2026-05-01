const DIRECT_LINK_URL = 'https://omg10.com/4/10949909';
const DIRECT_LINK_SESSION_KEY = 'gyaanbucks_direct_link_opened';

export function openDirectAdOncePerSession() {
  if (typeof window === 'undefined') return;

  const alreadyOpened = sessionStorage.getItem(DIRECT_LINK_SESSION_KEY);

  if (alreadyOpened === 'true') {
    return;
  }

  sessionStorage.setItem(DIRECT_LINK_SESSION_KEY, 'true');
  window.open(DIRECT_LINK_URL, '_blank', 'noopener,noreferrer');
}
