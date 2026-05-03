'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  targetDateText: string;
  totalDays: number;
  totalWeeks: number;
  approxMonths: number;
  approxYears: number;
  status: string;
};

export default function DaysUntilClient() {
  const [targetDate, setTargetDate] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const calculateDays = () => {
    setError('');
    setResult(null);

    if (!targetDate) {
      setError('Please select a target date.');
      return;
    }

    const today = new Date();
    const selectedDate = new Date(targetDate);

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (Number.isNaN(selectedDate.getTime())) {
      setError('Please select a valid date.');
      return;
    }

    const diffTime = selectedDate.getTime() - today.getTime();
    const totalDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const absoluteDays = Math.abs(totalDays);

    let status = '';

    if (totalDays > 0) {
      status = `${absoluteDays.toLocaleString()} days are left until ${formatDate(selectedDate)}.`;
    } else if (totalDays < 0) {
      status = `${absoluteDays.toLocaleString()} days have passed since ${formatDate(selectedDate)}.`;
    } else {
      status = `The selected date is today: ${formatDate(selectedDate)}.`;
    }

    setResult({
      targetDateText: formatDate(selectedDate),
      totalDays,
      totalWeeks: Math.floor(absoluteDays / 7),
      approxMonths: Math.floor(absoluteDays / 30.4375),
      approxYears: Math.floor(absoluteDays / 365.25),
      status,
    });
  };

  const resetCalculator = () => {
    setTargetDate('');
    setResult(null);
    setError('');
  };

  return (
    <section className={styles.calculatorBox}>
      <div className={styles.inputGroup}>
        <label>Target Date</label>
        <input
          className={styles.dateInput}
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttonRow}>
        <button type="button" onClick={calculateDays}>
          Calculate Days Until
        </button>
        <button type="button" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className={styles.resultBox}>
          <h2>Days Until Result</h2>

          <div className={styles.mainResult}>
            {Math.abs(result.totalDays).toLocaleString()} days
          </div>

          <div className={styles.resultGrid}>
            <div>
              <span>Target Date</span>
              <strong>{result.targetDateText}</strong>
            </div>
            <div>
              <span>Total Days</span>
              <strong>{Math.abs(result.totalDays).toLocaleString()}</strong>
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

          <p className={styles.note}>{result.status}</p>
        </div>
      )}
    </section>
  );
}
