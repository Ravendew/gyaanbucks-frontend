'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  olderPerson: string;
  youngerPerson: string;
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
};

export default function AgeDifferenceClient() {
  const [firstMonth, setFirstMonth] = useState('');
  const [firstDay, setFirstDay] = useState('');
  const [firstYear, setFirstYear] = useState('');

  const [secondMonth, setSecondMonth] = useState('');
  const [secondDay, setSecondDay] = useState('');
  const [secondYear, setSecondYear] = useState('');

  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const calculateDifference = () => {
    setError('');
    setResult(null);

    const fMonth = Number(firstMonth);
    const fDay = Number(firstDay);
    const fYear = Number(firstYear);

    const sMonth = Number(secondMonth);
    const sDay = Number(secondDay);
    const sYear = Number(secondYear);

    if (!fMonth || !fDay || !fYear || !sMonth || !sDay || !sYear) {
      setError('Please enter both complete dates of birth.');
      return;
    }

    const firstDate = new Date(fYear, fMonth - 1, fDay);
    const secondDate = new Date(sYear, sMonth - 1, sDay);

    if (
      firstDate.getFullYear() !== fYear ||
      firstDate.getMonth() !== fMonth - 1 ||
      firstDate.getDate() !== fDay
    ) {
      setError('Please enter a valid first date of birth.');
      return;
    }

    if (
      secondDate.getFullYear() !== sYear ||
      secondDate.getMonth() !== sMonth - 1 ||
      secondDate.getDate() !== sDay
    ) {
      setError('Please enter a valid second date of birth.');
      return;
    }

    if (firstDate.getTime() === secondDate.getTime()) {
      setResult({
        olderPerson: 'Both',
        youngerPerson: 'Both',
        years: 0,
        months: 0,
        days: 0,
        totalDays: 0,
        totalWeeks: 0,
        totalMonths: 0,
      });
      return;
    }

    const olderDate = firstDate < secondDate ? firstDate : secondDate;
    const youngerDate = firstDate < secondDate ? secondDate : firstDate;

    const olderPerson = firstDate < secondDate ? 'Person 1' : 'Person 2';
    const youngerPerson = firstDate < secondDate ? 'Person 2' : 'Person 1';

    let years = youngerDate.getFullYear() - olderDate.getFullYear();
    let months = youngerDate.getMonth() - olderDate.getMonth();
    let days = youngerDate.getDate() - olderDate.getDate();

    if (days < 0) {
      months -= 1;
      const previousMonthDays = new Date(
        youngerDate.getFullYear(),
        youngerDate.getMonth(),
        0,
      ).getDate();
      days += previousMonthDays;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const diffTime = youngerDate.getTime() - olderDate.getTime();
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    setResult({
      olderPerson,
      youngerPerson,
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalMonths,
    });
  };

  const resetCalculator = () => {
    setFirstMonth('');
    setFirstDay('');
    setFirstYear('');
    setSecondMonth('');
    setSecondDay('');
    setSecondYear('');
    setResult(null);
    setError('');
  };

  return (
    <section className={styles.calculatorBox}>
      <div className={styles.inputGroup}>
        <label>Person 1 Date of Birth</label>

        <div className={styles.dateGrid}>
          <input
            type="number"
            placeholder="Month"
            value={firstMonth}
            onChange={(e) => setFirstMonth(e.target.value)}
          />
          <input
            type="number"
            placeholder="Day"
            value={firstDay}
            onChange={(e) => setFirstDay(e.target.value)}
          />
          <input
            type="number"
            placeholder="Year"
            value={firstYear}
            onChange={(e) => setFirstYear(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label>Person 2 Date of Birth</label>

        <div className={styles.dateGrid}>
          <input
            type="number"
            placeholder="Month"
            value={secondMonth}
            onChange={(e) => setSecondMonth(e.target.value)}
          />
          <input
            type="number"
            placeholder="Day"
            value={secondDay}
            onChange={(e) => setSecondDay(e.target.value)}
          />
          <input
            type="number"
            placeholder="Year"
            value={secondYear}
            onChange={(e) => setSecondYear(e.target.value)}
          />
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttonRow}>
        <button type="button" onClick={calculateDifference}>
          Calculate Age Difference
        </button>
        <button type="button" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className={styles.resultBox}>
          <h2>Age Difference Result</h2>

          <div className={styles.mainResult}>
            {result.years} years, {result.months} months, {result.days} days
          </div>

          <div className={styles.resultGrid}>
            <div>
              <span>Older Person</span>
              <strong>{result.olderPerson}</strong>
            </div>
            <div>
              <span>Younger Person</span>
              <strong>{result.youngerPerson}</strong>
            </div>
            <div>
              <span>Total Months</span>
              <strong>{result.totalMonths.toLocaleString()}</strong>
            </div>
            <div>
              <span>Total Weeks</span>
              <strong>{result.totalWeeks.toLocaleString()}</strong>
            </div>
            <div>
              <span>Total Days</span>
              <strong>{result.totalDays.toLocaleString()}</strong>
            </div>
            <div>
              <span>Age Gap</span>
              <strong>
                {result.years === 0 && result.months === 0 && result.days === 0
                  ? 'Same age'
                  : 'Different age'}
              </strong>
            </div>
          </div>

          <p className={styles.note}>
            {result.years === 0 && result.months === 0 && result.days === 0
              ? 'Both dates are the same, so there is no age difference.'
              : `${result.olderPerson} is older than ${result.youngerPerson} by ${result.years} years, ${result.months} months and ${result.days} days.`}
          </p>
        </div>
      )}
    </section>
  );
}
