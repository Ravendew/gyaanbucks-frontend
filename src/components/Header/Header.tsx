'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

type LoggedInUser = {
  id?: string;
  name?: string;
  mobile?: string;
  email?: string;
};

export default function Header() {
  const [user, setUser] = useState<LoggedInUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('gyaanbucks_user');

    if (!savedUser) {
      setUser(null);
      return;
    }

    try {
      setUser(JSON.parse(savedUser));
    } catch {
      localStorage.removeItem('gyaanbucks_user');
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('gyaanbucks_user');
    localStorage.removeItem('gyaanbucks_token');
    localStorage.removeItem('token');
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');

    localStorage.removeItem('wallet');
    localStorage.removeItem('quizAttempts');
    localStorage.removeItem('quizProgress');

    sessionStorage.clear();

    setUser(null);
    setMenuOpen(false);

    window.location.replace('/auth?tab=login');
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const firstLetter = (user?.name || user?.mobile || 'U')
    .charAt(0)
    .toUpperCase();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Gyaan<span>Bucks</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/quizzes">Quizzes</Link>
          <Link href="/refer-earn">Refer & Earn</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.actions}>
          {user ? (
            <>
              <span className={styles.login}>
                Hi, {user.name || user.mobile || 'User'}
              </span>

              <Link href="/profile" className={styles.profileAvatar}>
                <span>{firstLetter}</span>
              </Link>

              <button
                type="button"
                className={styles.register}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth?tab=login" className={styles.login}>
                Login
              </Link>
              <Link href="/auth?tab=register" className={styles.register}>
                Register
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/quizzes" onClick={closeMenu}>
            Quizzes
          </Link>
          <Link href="/refer-earn" onClick={closeMenu}>
            Refer & Earn
          </Link>
          <Link href="/how-it-works" onClick={closeMenu}>
            How It Works
          </Link>
          <Link href="/blog" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          {user ? (
            <>
              <Link href="/profile" onClick={closeMenu}>
                Profile
              </Link>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth?tab=login" onClick={closeMenu}>
                Login
              </Link>
              <Link href="/auth?tab=register" onClick={closeMenu}>
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
