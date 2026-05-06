'use client';

import { useState } from 'react';
import styles from './page.module.css';

type ShareButtonsProps = {
  title: string;
  url: string;
  text: string;
};

export default function ShareButtons({ title, url, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title} - ${text}`);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={styles.shareBox}>
      <div>
        <span className={styles.shareLabel}>Share this article</span>
        <h3>Help others learn better</h3>
        <p>
          Share this educational article with friends, students and quiz
          learners.
        </p>
      </div>

      <div className={styles.shareActions}>
        <button type="button" onClick={handleCopy}>
          {copied ? 'Copied ✓' : 'Copy Link'}
        </button>

        <a
          href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>
    </div>
  );
}
