'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  totalDays: number;
  totalWeeks: number;
  totalMonthsApprox: number;
  years: number;
  months: number;
  days: number;
  nextMilestone: number;
  daysToMilestone: number;
};

function calculateAgeInDays(dob: string): Result | null {
  if (!dob) return null;

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) return null;

  const diffMs = today.getTime() - birthDate.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonthsApprox = Math.floor(totalDays / 30.4375);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const nextMilestone = Math.ceil(totalDays / 5000) * 5000;
  const daysToMilestone = nextMilestone - totalDays;

  return {
    totalDays,
    totalWeeks,
    totalMonthsApprox,
    years,
    months,
    days,
    nextMilestone,
    daysToMilestone,
  };
}

export default function AgeInDaysClient() {
  const [dob, setDob] = useState('');
  const [submittedDob, setSubmittedDob] = useState('');

  const result = calculateAgeInDays(submittedDob);

  return (
    <section className={styles.daysToolBox}>
      <div className={styles.daysPattern} />

      <div className={styles.daysHeader}>
        <div>
          <span className={styles.daysBadge}>⏳ Days Lived Counter</span>
          <h2>How Many Days Old Are You?</h2>
          <p>
            This tool focuses on your lifetime in days. Enter your birth date
            and see your total days lived, weeks, approximate months and next
            life-day milestone.
          </p>
        </div>

        <div className={styles.daysIcon}>📆</div>
      </div>

      <div className={styles.daysInputPanel}>
        <div className={styles.inputGroup}>
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </div>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={styles.calculateButton}
            onClick={() => setSubmittedDob(dob)}
          >
            Count My Days
          </button>

          <button
            type="button"
            className={styles.resetButton}
            onClick={() => {
              setDob('');
              setSubmittedDob('');
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {!submittedDob && (
        <div className={styles.daysEmpty}>
          <span>✨</span>
          <strong>Your lifetime day count will appear here</strong>
          <p>
            Unlike the main age calculator, this page highlights total days
            lived first.
          </p>
        </div>
      )}

      {submittedDob && result && (
        <div className={styles.daysResultBox}>
          <div className={styles.bigDaysCard}>
            <span>Total Days Lived</span>
            <strong>{result.totalDays.toLocaleString()}</strong>
            <p>
              Your age is also {result.years} years, {result.months} months and{' '}
              {result.days} days.
            </p>
          </div>

          <div className={styles.daysStatsGrid}>
            <div>
              <span>Approx. Weeks</span>
              <strong>{result.totalWeeks.toLocaleString()}</strong>
            </div>

            <div>
              <span>Approx. Months</span>
              <strong>{result.totalMonthsApprox.toLocaleString()}</strong>
            </div>

            <div>
              <span>Next Milestone</span>
              <strong>{result.nextMilestone.toLocaleString()}</strong>
            </div>
          </div>

          <div className={styles.milestoneStrip}>
            <div>
              <span>Days left for next milestone</span>
              <strong>{result.daysToMilestone.toLocaleString()} days</strong>
            </div>
            <p>
              Milestones are calculated in 5,000-day intervals to make lifetime
              tracking more interesting.
            </p>
          </div>
        </div>
      )}

      {submittedDob && !result && (
        <p className={styles.errorText}>
          Please select a valid date of birth. Future dates are not allowed.
        </p>
      )}
    </section>
  );
}
