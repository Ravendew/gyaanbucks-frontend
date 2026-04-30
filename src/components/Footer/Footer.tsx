import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT */}
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

          {/* QUICK LINKS */}
          <div>
            <h3 className={styles.heading}>Quick Links</h3>
            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/quizzes">Quizzes</Link>
              <Link href="/leaderboard">Leaderboard</Link>
              <Link href="/refer-earn">Refer & Earn</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          {/* COMPANY */}
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

          {/* SUPPORT */}
          <div>
            <h3 className={styles.heading}>Support</h3>
            <p className={styles.text}>
              Get updates about new quizzes, referral rewards, and withdrawal
              windows.
            </p>

            <form className={styles.newsletter}>
              <input type="email" placeholder="Enter email" />
              <button type="button">Join</button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <Link href="/">© 2026 GyaanBucks.com</Link>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
