'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  years: number;
  months: number;
  days: number;
};

function calculateAge(dob: string, asOn: string): Result | null {
  if (!dob || !asOn) return null;

  const birthDate = new Date(dob);
  const targetDate = new Date(asOn);

  if (birthDate > targetDate) return null;

  let years = targetDate.getFullYear() - birthDate.getFullYear();
  let months = targetDate.getMonth() - birthDate.getMonth();
  let days = targetDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      0,
    );
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

export default function AgeByDobClient() {
  const [dob, setDob] = useState('');
  const [asOn, setAsOn] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const result = calculateAge(dob, asOn);

  return (
    <section className={styles.calculatorBox}>
      <div className={styles.calculatorGlow} />

      <div className={styles.calculatorHeader}>
        <div>
          <span className={styles.toolBadge}>📅 As On Date Tool</span>
          <h2>Calculate Age as on a Specific Date</h2>
          <p>
            Enter your date of birth and choose a target date to calculate your
            exact age as on that date.
          </p>
        </div>

        <div className={styles.iconCircle}>📆</div>
      </div>

      <div className={styles.inputCard}>
        <div className={styles.inputGroup}>
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Calculate Age As On</label>
          <input
            type="date"
            value={asOn}
            onChange={(e) => setAsOn(e.target.value)}
          />
        </div>

        <div className={styles.actionRow}>
          <button
            className={styles.calculateButton}
            onClick={() => setSubmitted(true)}
          >
            Calculate Age
          </button>

          <button
            className={styles.resetButton}
            onClick={() => {
              setDob('');
              setAsOn('');
              setSubmitted(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {!submitted && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>✨</div>
          <strong>Select dates to begin</strong>
          <span>Choose DOB and target date to calculate age.</span>
        </div>
      )}

      {submitted && result && (
        <div className={styles.resultBox}>
          <div className={styles.resultTop}>
            <div>
              <span className={styles.resultLabel}>Age Result</span>
              <h3>
                {result.years} Years, {result.months} Months, {result.days} Days
              </h3>
            </div>

            <span className={styles.successPill}>✓ Calculated</span>
          </div>

          <div className={styles.resultGrid}>
            <div className={styles.resultCard}>
              <strong>{result.years}</strong>
              <span>Years</span>
            </div>

            <div className={styles.resultCard}>
              <strong>{result.months}</strong>
              <span>Months</span>
            </div>

            <div className={styles.resultCard}>
              <strong>{result.days}</strong>
              <span>Days</span>
            </div>
          </div>

          <div className={styles.summaryGrid}>
            <div>
              <span>From DOB</span>
              <strong>{dob}</strong>
            </div>

            <div>
              <span>As on Date</span>
              <strong>{asOn}</strong>
            </div>
          </div>
        </div>
      )}

      {submitted && !result && (
        <p className={styles.errorText}>
          Please select valid dates. DOB must be before the selected date.
        </p>
      )}
    </section>
  );
}
