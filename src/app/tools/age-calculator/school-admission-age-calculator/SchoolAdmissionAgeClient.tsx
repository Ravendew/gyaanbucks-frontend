'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  status: string;
};

export default function SchoolAdmissionAgeClient() {
  const today = new Date();

  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const [cutoffMonth, setCutoffMonth] = useState(String(today.getMonth() + 1));
  const [cutoffDay, setCutoffDay] = useState(String(today.getDate()));
  const [cutoffYear, setCutoffYear] = useState(String(today.getFullYear()));

  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const calculateAge = () => {
    setError('');
    setResult(null);

    const bMonth = Number(birthMonth);
    const bDay = Number(birthDay);
    const bYear = Number(birthYear);

    const cMonth = Number(cutoffMonth);
    const cDay = Number(cutoffDay);
    const cYear = Number(cutoffYear);

    if (!bMonth || !bDay || !bYear || !cMonth || !cDay || !cYear) {
      setError(
        'Please enter complete date of birth and admission cutoff date.',
      );
      return;
    }

    const birthDate = new Date(bYear, bMonth - 1, bDay);
    const cutoffDate = new Date(cYear, cMonth - 1, cDay);

    if (
      birthDate.getFullYear() !== bYear ||
      birthDate.getMonth() !== bMonth - 1 ||
      birthDate.getDate() !== bDay
    ) {
      setError('Please enter a valid date of birth.');
      return;
    }

    if (
      cutoffDate.getFullYear() !== cYear ||
      cutoffDate.getMonth() !== cMonth - 1 ||
      cutoffDate.getDate() !== cDay
    ) {
      setError('Please enter a valid admission cutoff date.');
      return;
    }

    if (birthDate > cutoffDate) {
      setError('Date of birth cannot be after the cutoff date.');
      return;
    }

    let years = cYear - bYear;
    let months = cMonth - bMonth;
    let days = cDay - bDay;

    if (days < 0) {
      months -= 1;
      const previousMonthDays = new Date(cYear, cMonth - 1, 0).getDate();
      days += previousMonthDays;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const diffTime = cutoffDate.getTime() - birthDate.getTime();
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    let status =
      'Please compare this exact age with the school official admission rule.';

    if (years < 3) {
      status =
        'Usually this age may be early for regular school admission. Please verify nursery or pre-primary rules.';
    } else if (years >= 3 && years < 4) {
      status =
        'This age is commonly checked for nursery or pre-primary admission, depending on school rules.';
    } else if (years >= 4 && years < 5) {
      status =
        'This age is commonly checked for LKG admission, depending on school rules.';
    } else if (years >= 5 && years < 6) {
      status =
        'This age is commonly checked for UKG admission, depending on school rules.';
    } else if (years >= 6) {
      status =
        'This age is commonly checked for Class 1 or higher admission, depending on school rules.';
    }

    setResult({
      years,
      months,
      days,
      totalDays,
      status,
    });
  };

  const resetCalculator = () => {
    setBirthMonth('');
    setBirthDay('');
    setBirthYear('');
    setCutoffMonth(String(today.getMonth() + 1));
    setCutoffDay(String(today.getDate()));
    setCutoffYear(String(today.getFullYear()));
    setResult(null);
    setError('');
  };

  return (
    <section className={styles.calculatorBox}>
      <div className={styles.inputGroup}>
        <label>Child Date of Birth</label>

        <div className={styles.dateGrid}>
          <input
            type="number"
            placeholder="Month"
            value={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
          />
          <input
            type="number"
            placeholder="Day"
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
          />
          <input
            type="number"
            placeholder="Year"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label>Admission Cutoff Date</label>

        <div className={styles.dateGrid}>
          <input
            type="number"
            placeholder="Month"
            value={cutoffMonth}
            onChange={(e) => setCutoffMonth(e.target.value)}
          />
          <input
            type="number"
            placeholder="Day"
            value={cutoffDay}
            onChange={(e) => setCutoffDay(e.target.value)}
          />
          <input
            type="number"
            placeholder="Year"
            value={cutoffYear}
            onChange={(e) => setCutoffYear(e.target.value)}
          />
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttonRow}>
        <button type="button" onClick={calculateAge}>
          Calculate Admission Age
        </button>
        <button type="button" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className={styles.resultBox}>
          <h2>Child Age for School Admission</h2>

          <div className={styles.mainResult}>
            {result.years} years, {result.months} months, {result.days} days
          </div>

          <div className={styles.resultGrid}>
            <div>
              <span>Total Days</span>
              <strong>{result.totalDays.toLocaleString()}</strong>
            </div>
            <div>
              <span>Approx. Months</span>
              <strong>
                {(result.years * 12 + result.months).toLocaleString()}
              </strong>
            </div>
            <div>
              <span>Admission Note</span>
              <strong>Check Rules</strong>
            </div>
          </div>

          <p className={styles.note}>{result.status}</p>
        </div>
      )}
    </section>
  );
}
