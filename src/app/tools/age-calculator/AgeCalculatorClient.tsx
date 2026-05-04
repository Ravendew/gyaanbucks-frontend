'use client';

import { useState } from 'react';
import styles from './page.module.css';

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextBirthdayDays: number;
};

function calculateAge(dob: string): AgeResult | null {
  if (!dob) return null;

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) return null;

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffTime = today.getTime() - birthDate.getTime();
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let nextBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
  );

  if (nextBirthday < today) {
    nextBirthday = new Date(
      today.getFullYear() + 1,
      birthDate.getMonth(),
      birthDate.getDate(),
    );
  }

  const nextBirthdayDays = Math.ceil(
    (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  return { years, months, days, totalDays, nextBirthdayDays };
}

export default function AgeCalculatorClient() {
  const [dob, setDob] = useState('');
  const [submittedDob, setSubmittedDob] = useState('');

  const result = calculateAge(submittedDob);

  const handleCalculate = () => {
    setSubmittedDob(dob);
  };

  const handleReset = () => {
    setDob('');
    setSubmittedDob('');
  };

  return (
    <section className={styles.calculatorBox}>
      <div className={styles.calculatorGlow} />

      <div className={styles.calculatorHeader}>
        <div>
          <span className={styles.toolBadge}>🎯 Instant Age Tool</span>
          <h2>Calculate Your Exact Age</h2>
          <p>
            Enter your date of birth and get a clean breakdown of your age,
            total days lived and days left for your next birthday.
          </p>
        </div>

        <div className={styles.iconCircle}>🎂</div>
      </div>

      <div className={styles.inputCard}>
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
            onClick={handleCalculate}
          >
            Calculate Age
          </button>

          <button
            type="button"
            className={styles.resetButton}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {!submittedDob && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>✨</div>
          <strong>Your result is waiting</strong>
          <span>Select your date of birth and press Calculate Age.</span>
        </div>
      )}

      {submittedDob && result && (
        <div className={styles.resultBox}>
          <div className={styles.resultTop}>
            <div>
              <span className={styles.resultLabel}>Your Exact Age</span>
              <h3>
                {result.years} Years, {result.months} Months, {result.days} Days
              </h3>
            </div>

            <span className={styles.successPill}>✓ Calculated</span>
          </div>

          <div className={styles.resultGrid}>
            <div className={styles.resultCard}>
              <small>Completed</small>
              <strong>{result.years}</strong>
              <span>Years</span>
            </div>

            <div className={styles.resultCard}>
              <small>Remaining</small>
              <strong>{result.months}</strong>
              <span>Months</span>
            </div>

            <div className={styles.resultCard}>
              <small>Remaining</small>
              <strong>{result.days}</strong>
              <span>Days</span>
            </div>
          </div>

          <div className={styles.summaryGrid}>
            <div>
              <span>Total days lived</span>
              <strong>{result.totalDays.toLocaleString()}</strong>
            </div>

            <div>
              <span>Days until next birthday</span>
              <strong>{result.nextBirthdayDays}</strong>
            </div>
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
