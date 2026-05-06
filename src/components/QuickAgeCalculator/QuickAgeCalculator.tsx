'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './QuickAgeCalculator.module.css';

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextBirthdayDays: number;
};

function calculateAge(dobValue: string): AgeResult | null {
  if (!dobValue) return null;

  const dob = new Date(dobValue);
  const today = new Date();

  if (Number.isNaN(dob.getTime()) || dob > today) return null;

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor(
    (today.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24),
  );

  const nextBirthday = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDate(),
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const nextBirthdayDays = Math.ceil(
    (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  return { years, months, days, totalDays, nextBirthdayDays };
}

export default function QuickAgeCalculator() {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState('');

  function handleCalculate() {
    const age = calculateAge(dob);

    if (!age) {
      setResult(null);
      setError('Please select a valid date of birth.');
      return;
    }

    setError('');
    setResult(age);
  }

  return (
    <section className={styles.quickCalcSection}>
      <div className={styles.quickCalcCard}>
        <div className={styles.quickCalcContent}>
          <span className={styles.quickCalcBadge}>🎂 Quick Age Calculator</span>

          <h2>Calculate Your Exact Age Instantly</h2>

          <p>
            Enter your date of birth and quickly find your age in years, months
            and days. You can also open the full calculator for detailed age
            breakdown and related tools.
          </p>
        </div>

        <div className={styles.quickCalcBox}>
          <label htmlFor="quick-dob">Date of Birth</label>

          <div className={styles.quickCalcForm}>
            <div className={styles.quickCalcInputWrap}>
              <input
                id="quick-dob"
                type="date"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                className={styles.quickCalcInput}
              />

              <span className={styles.quickCalcCalendar}>📅</span>
            </div>

            <button type="button" onClick={handleCalculate}>
              Calculate
            </button>
          </div>

          {error ? <p className={styles.quickCalcError}>{error}</p> : null}

          {result ? (
            <div className={styles.quickCalcAnswer}>
              <span className={styles.quickCalcAnswerLabel}>Your age is</span>

              <div className={styles.quickCalcResult}>
                <div>
                  <strong>{result.years}</strong>
                  <span>Years</span>
                </div>

                <div>
                  <strong>{result.months}</strong>
                  <span>Months</span>
                </div>

                <div>
                  <strong>{result.days}</strong>
                  <span>Days</span>
                </div>
              </div>

              <div className={styles.quickCalcMiniStats}>
                <p>
                  <strong>{result.totalDays.toLocaleString()}</strong> total
                  days completed
                </p>

                <p>
                  <strong>{result.nextBirthdayDays}</strong> days until next
                  birthday
                </p>
              </div>

              <Link
                href="/tools/age-calculator"
                className={styles.quickCalcDetailBtn}
              >
                View Detailed Age Analysis →
              </Link>
            </div>
          ) : null}

          <div className={styles.quickCalcLinks}>
            <Link href="/tools/age-calculator">Full Age Calculator</Link>

            <Link href="/tools/age-calculator/school-admission-age-calculator">
              School Age Calculator
            </Link>

            <Link href="/tools/age-calculator/retirement-age-calculator">
              Retirement Age Calculator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
