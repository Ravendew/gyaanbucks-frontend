'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  retirementDate: string;
  retirementAge: number;
  yearsLeft: number;
  monthsLeft: number;
  daysLeft: number;
  totalDaysLeft: number;
  status: string;
};

export default function RetirementAgeClient() {
  const today = new Date();

  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [retirementAge, setRetirementAge] = useState('60');

  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const calculateRetirement = () => {
    setError('');
    setResult(null);

    const bMonth = Number(birthMonth);
    const bDay = Number(birthDay);
    const bYear = Number(birthYear);
    const rAge = Number(retirementAge);

    if (!bMonth || !bDay || !bYear || !rAge) {
      setError('Please enter your complete date of birth and retirement age.');
      return;
    }

    if (rAge < 18 || rAge > 100) {
      setError('Please enter a realistic retirement age between 18 and 100.');
      return;
    }

    const birthDate = new Date(bYear, bMonth - 1, bDay);

    if (
      birthDate.getFullYear() !== bYear ||
      birthDate.getMonth() !== bMonth - 1 ||
      birthDate.getDate() !== bDay
    ) {
      setError('Please enter a valid date of birth.');
      return;
    }

    const retirementDate = new Date(bYear + rAge, bMonth - 1, bDay);

    let yearsLeft = retirementDate.getFullYear() - today.getFullYear();
    let monthsLeft = retirementDate.getMonth() - today.getMonth();
    let daysLeft = retirementDate.getDate() - today.getDate();

    if (daysLeft < 0) {
      monthsLeft -= 1;
      const previousMonthDays = new Date(
        retirementDate.getFullYear(),
        retirementDate.getMonth(),
        0,
      ).getDate();
      daysLeft += previousMonthDays;
    }

    if (monthsLeft < 0) {
      yearsLeft -= 1;
      monthsLeft += 12;
    }

    const diffTime = retirementDate.getTime() - today.getTime();
    const totalDaysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let status = '';

    if (totalDaysLeft < 0) {
      status =
        'Based on the selected retirement age, your retirement date has already passed.';
    } else if (totalDaysLeft === 0) {
      status = 'Today is your calculated retirement date.';
    } else {
      status =
        'This is your estimated retirement timeline based on the selected retirement age.';
    }

    setResult({
      retirementDate: formatDate(retirementDate),
      retirementAge: rAge,
      yearsLeft: Math.max(yearsLeft, 0),
      monthsLeft: Math.max(monthsLeft, 0),
      daysLeft: Math.max(daysLeft, 0),
      totalDaysLeft: Math.max(totalDaysLeft, 0),
      status,
    });
  };

  const resetCalculator = () => {
    setBirthMonth('');
    setBirthDay('');
    setBirthYear('');
    setRetirementAge('60');
    setResult(null);
    setError('');
  };

  return (
    <section className={styles.calculatorBox}>
      <div className={styles.inputGroup}>
        <label>Date of Birth</label>

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
        <label>Retirement Age</label>

        <input
          className={styles.singleInput}
          type="number"
          placeholder="Example: 60"
          value={retirementAge}
          onChange={(e) => setRetirementAge(e.target.value)}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttonRow}>
        <button type="button" onClick={calculateRetirement}>
          Calculate Retirement Date
        </button>
        <button type="button" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className={styles.resultBox}>
          <h2>Your Retirement Result</h2>

          <div className={styles.mainResult}>
            Retirement Date: {result.retirementDate}
          </div>

          <div className={styles.resultGrid}>
            <div>
              <span>Retirement Age</span>
              <strong>{result.retirementAge} years</strong>
            </div>
            <div>
              <span>Years Left</span>
              <strong>{result.yearsLeft.toLocaleString()}</strong>
            </div>
            <div>
              <span>Months Left</span>
              <strong>{result.monthsLeft.toLocaleString()}</strong>
            </div>
            <div>
              <span>Days Left</span>
              <strong>{result.daysLeft.toLocaleString()}</strong>
            </div>
            <div>
              <span>Total Days Left</span>
              <strong>{result.totalDaysLeft.toLocaleString()}</strong>
            </div>
          </div>

          <p className={styles.note}>{result.status}</p>
        </div>
      )}
    </section>
  );
}
