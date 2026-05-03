'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  totalDays: number;
  totalWeeks: number;
  approxMonths: number;
  approxYears: number;
};

export default function DateDifferenceClient() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const calculateDifference = () => {
    setError('');
    setResult(null);

    if (!startDate || !endDate) {
      setError('Please select both start date and end date.');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      setError('Please select valid dates.');
      return;
    }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    setResult({
      totalDays,
      totalWeeks: Math.floor(totalDays / 7),
      approxMonths: Math.floor(totalDays / 30.4375),
      approxYears: Math.floor(totalDays / 365.25),
    });
  };

  const resetCalculator = () => {
    setStartDate('');
    setEndDate('');
    setResult(null);
    setError('');
  };

  return (
    <section className={styles.calculatorBox}>
      <div className={styles.inputGroup}>
        <label>Start Date</label>
        <input
          className={styles.dateInput}
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>End Date</label>
        <input
          className={styles.dateInput}
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttonRow}>
        <button type="button" onClick={calculateDifference}>
          Calculate Date Difference
        </button>
        <button type="button" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className={styles.resultBox}>
          <h2>Date Difference Result</h2>

          <div className={styles.mainResult}>
            {result.totalDays.toLocaleString()} days
          </div>

          <div className={styles.resultGrid}>
            <div>
              <span>Total Days</span>
              <strong>{result.totalDays.toLocaleString()}</strong>
            </div>
            <div>
              <span>Total Weeks</span>
              <strong>{result.totalWeeks.toLocaleString()}</strong>
            </div>
            <div>
              <span>Approx. Months</span>
              <strong>{result.approxMonths.toLocaleString()}</strong>
            </div>
            <div>
              <span>Approx. Years</span>
              <strong>{result.approxYears.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
