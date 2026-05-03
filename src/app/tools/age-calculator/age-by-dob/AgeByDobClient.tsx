'use client';

import { useState } from 'react';
import styles from './page.module.css';

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
};

export default function AgeByDobClient() {
  const today = new Date();

  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const [ageAtMonth, setAgeAtMonth] = useState(String(today.getMonth() + 1));
  const [ageAtDay, setAgeAtDay] = useState(String(today.getDate()));
  const [ageAtYear, setAgeAtYear] = useState(String(today.getFullYear()));

  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState('');

  const calculateAge = () => {
    setError('');
    setResult(null);

    const bMonth = Number(birthMonth);
    const bDay = Number(birthDay);
    const bYear = Number(birthYear);

    const aMonth = Number(ageAtMonth);
    const aDay = Number(ageAtDay);
    const aYear = Number(ageAtYear);

    if (!bMonth || !bDay || !bYear || !aMonth || !aDay || !aYear) {
      setError('Please enter your complete date of birth and age at date.');
      return;
    }

    const birthDate = new Date(bYear, bMonth - 1, bDay);
    const ageAtDate = new Date(aYear, aMonth - 1, aDay);

    if (
      birthDate.getFullYear() !== bYear ||
      birthDate.getMonth() !== bMonth - 1 ||
      birthDate.getDate() !== bDay
    ) {
      setError('Please enter a valid date of birth.');
      return;
    }

    if (
      ageAtDate.getFullYear() !== aYear ||
      ageAtDate.getMonth() !== aMonth - 1 ||
      ageAtDate.getDate() !== aDay
    ) {
      setError('Please enter a valid age at date.');
      return;
    }

    if (birthDate > ageAtDate) {
      setError('Date of birth cannot be after the age at date.');
      return;
    }

    let years = aYear - bYear;
    let months = aMonth - bMonth;
    let days = aDay - bDay;

    if (days < 0) {
      months -= 1;
      const previousMonthDays = new Date(aYear, aMonth - 1, 0).getDate();
      days += previousMonthDays;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const diffTime = ageAtDate.getTime() - birthDate.getTime();
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    setResult({
      years,
      months,
      days,
      totalMonths,
      totalWeeks,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    });
  };

  const resetCalculator = () => {
    setBirthMonth('');
    setBirthDay('');
    setBirthYear('');
    setAgeAtMonth(String(today.getMonth() + 1));
    setAgeAtDay(String(today.getDate()));
    setAgeAtYear(String(today.getFullYear()));
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
        <label>Age at Date</label>

        <div className={styles.dateGrid}>
          <input
            type="number"
            placeholder="Month"
            value={ageAtMonth}
            onChange={(e) => setAgeAtMonth(e.target.value)}
          />
          <input
            type="number"
            placeholder="Day"
            value={ageAtDay}
            onChange={(e) => setAgeAtDay(e.target.value)}
          />
          <input
            type="number"
            placeholder="Year"
            value={ageAtYear}
            onChange={(e) => setAgeAtYear(e.target.value)}
          />
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttonRow}>
        <button type="button" onClick={calculateAge}>
          Calculate Age
        </button>
        <button type="button" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className={styles.resultBox}>
          <h2>Your Exact Age</h2>

          <div className={styles.mainResult}>
            {result.years} years, {result.months} months, {result.days} days
          </div>

          <div className={styles.resultGrid}>
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
              <span>Total Hours</span>
              <strong>{result.totalHours.toLocaleString()}</strong>
            </div>
            <div>
              <span>Total Minutes</span>
              <strong>{result.totalMinutes.toLocaleString()}</strong>
            </div>
            <div>
              <span>Total Seconds</span>
              <strong>{result.totalSeconds.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
