'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function SscAgeClient() {
  const [dob, setDob] = useState('');
  const [cutoffDate, setCutoffDate] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState('');

  const calculateAge = () => {
    setError('');
    setResult(null);

    if (!dob || !cutoffDate) {
      setError('Please select both Date of Birth and Cutoff Date.');
      return;
    }

    const birthDate = new Date(dob);
    const cutoff = new Date(cutoffDate);

    if (birthDate > cutoff) {
      setError('DOB cannot be after cutoff date.');
      return;
    }

    let years = cutoff.getFullYear() - birthDate.getFullYear();
    let months = cutoff.getMonth() - birthDate.getMonth();
    let days = cutoff.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(
        cutoff.getFullYear(),
        cutoff.getMonth(),
        0,
      ).getDate();
      days += prevMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <section className={styles.calculatorBox}>
      <div className={styles.inputGroup}>
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className={styles.dateInput}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>SSC Cutoff Date</label>
        <input
          type="date"
          value={cutoffDate}
          onChange={(e) => setCutoffDate(e.target.value)}
          className={styles.dateInput}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttonRow}>
        <button onClick={calculateAge}>Calculate SSC Age</button>
      </div>

      {result && (
        <div className={styles.resultBox}>
          <h3>Your Age for SSC</h3>
          <p className={styles.mainResult}>{result}</p>
        </div>
      )}
    </section>
  );
}
