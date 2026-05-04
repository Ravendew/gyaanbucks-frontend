'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  older: string;
};

function calculateDifference(d1: string, d2: string): Result | null {
  if (!d1 || !d2) return null;

  let date1 = new Date(d1);
  let date2 = new Date(d2);

  let older = 'Person 1';

  if (date1 > date2) {
    [date1, date2] = [date2, date1];
    older = 'Person 2';
  }

  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth();
  let days = date2.getDate() - date1.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor(
    (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24),
  );

  return { years, months, days, totalDays, older };
}

export default function AgeDifferenceClient() {
  const [dob1, setDob1] = useState('');
  const [dob2, setDob2] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const result = calculateDifference(dob1, dob2);

  return (
    <section className={styles.diffBox}>
      <div className={styles.diffHeader}>
        <h2>Compare Two Ages</h2>
        <p>
          Enter two dates of birth to calculate the exact age difference between
          them.
        </p>
      </div>

      <div className={styles.diffInputs}>
        <div className={styles.inputGroup}>
          <label>Person 1 DOB</label>
          <input
            type="date"
            value={dob1}
            onChange={(e) => setDob1(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Person 2 DOB</label>
          <input
            type="date"
            value={dob2}
            onChange={(e) => setDob2(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.actionRow}>
        <button
          className={styles.calculateButton}
          onClick={() => setSubmitted(true)}
        >
          Compare Ages
        </button>

        <button
          className={styles.resetButton}
          onClick={() => {
            setDob1('');
            setDob2('');
            setSubmitted(false);
          }}
        >
          Reset
        </button>
      </div>

      {!submitted && (
        <div className={styles.emptyState}>
          <strong>Enter both dates to compare</strong>
          <span>Age difference will be shown clearly.</span>
        </div>
      )}

      {submitted && result && (
        <div className={styles.resultBox}>
          <h3>
            Age Difference: {result.years}Y {result.months}M {result.days}D
          </h3>

          <div className={styles.resultGrid}>
            <div>
              <span>Years</span>
              <strong>{result.years}</strong>
            </div>

            <div>
              <span>Months</span>
              <strong>{result.months}</strong>
            </div>

            <div>
              <span>Days</span>
              <strong>{result.days}</strong>
            </div>
          </div>

          <div className={styles.summary}>
            <p>Total Difference: {result.totalDays.toLocaleString()} days</p>
            <p>{result.older} is older</p>
          </div>
        </div>
      )}

      {submitted && !result && (
        <p className={styles.errorText}>
          Please select valid dates to compare.
        </p>
      )}
    </section>
  );
}
