'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage('Please enter your email.');
      return;
    }

    setEmail('');
    setMessage('Thank you! You joined GyaanBucks updates.');
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.logo}>
              Gyaan<span>Bucks</span>
            </Link>

            <p className={styles.text}>
              Play quizzes, earn points, refer friends, and withdraw rewards.
              Built for Indian students, homemakers, part-time job seekers, and
              smart online earners.
            </p>
          </div>

          <div>
            <h3 className={styles.heading}>Quick Links</h3>
            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/quizzes">Quizzes</Link>
              <Link href="/refer-earn">Refer & Earn</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          <div>
            <h3 className={styles.heading}>Company</h3>
            <div className={styles.links}>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h3 className={styles.heading}>Support</h3>
            <p className={styles.text}>
              Need help? Email us at{' '}
              <a href="mailto:support@gyaanbucks.com" className={styles.email}>
                support@gyaanbucks.com
              </a>
            </p>

            <form className={styles.newsletter} onSubmit={handleJoin}>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>

            {message && <p className={styles.message}>{message}</p>}
          </div>
        </div>

        <div className={styles.bottom}>
          <Link href="/">© 2026 GyaanBucks.com</Link>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
