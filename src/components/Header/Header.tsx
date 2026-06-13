'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Gyaan<span>Bucks</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/tools" className={styles.login}>
            Explore Tools
          </Link>
          <Link href="/tools/age-calculator" className={styles.register}>
            Age Calculator
          </Link>
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
          <Link href="/tools" onClick={closeMenu}>
            Tools
          </Link>
          <Link href="/tools/age-calculator" onClick={closeMenu}>
            Age Calculator
          </Link>
          <Link
            href="/tools/school-admission-age-calculator"
            onClick={closeMenu}
          >
            School Admission Age Calculator
          </Link>
          <Link href="/tools/love-calculator" onClick={closeMenu}>
            Love Calculator
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
