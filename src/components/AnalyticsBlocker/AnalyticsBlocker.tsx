'use client';

import { useEffect } from 'react';

export default function AnalyticsBlocker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get('gb_internal') === '1') {
      localStorage.setItem('gb_internal_user', 'true');

      const cleanUrl =
        window.location.origin +
        window.location.pathname +
        window.location.hash;

      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  return null;
}
