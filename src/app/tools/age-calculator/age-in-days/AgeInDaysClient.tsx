'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

type DetailedResult = {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  remainingDaysAfterMonths: number;
  totalWeeks: number;
  remainingDaysAfterWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
};

const monthOptions = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];

function isValidDate(year: number, month: number, day: number) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function getDaysInMonth(year: number, monthIndex: number) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function calculateDetailedAge(
  birthYear: number,
  birthMonth: number,
  birthDay: number,
  targetYear: number,
  targetMonth: number,
  targetDay: number,
): DetailedResult | null {
  if (
    !isValidDate(birthYear, birthMonth, birthDay) ||
    !isValidDate(targetYear, targetMonth, targetDay)
  ) {
    return null;
  }

  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  const targetDate = new Date(targetYear, targetMonth - 1, targetDay);

  birthDate.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  if (birthDate > targetDate) return null;

  let years = targetYear - birthYear;
  let months = targetMonth - birthMonth;
  let days = targetDay - birthDay;

  if (days < 0) {
    months -= 1;
    const previousMonthIndex = targetMonth - 2 < 0 ? 11 : targetMonth - 2;
    const previousMonthYear = targetMonth - 2 < 0 ? targetYear - 1 : targetYear;
    days += getDaysInMonth(previousMonthYear, previousMonthIndex);
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor(
    (targetDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const totalMonths = years * 12 + months;
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDaysAfterWeeks = totalDays % 7;

  return {
    years,
    months,
    days,
    totalMonths,
    remainingDaysAfterMonths: days,
    totalWeeks,
    remainingDaysAfterWeeks,
    totalDays,
    totalHours: totalDays * 24,
    totalMinutes: totalDays * 24 * 60,
    totalSeconds: totalDays * 24 * 60 * 60,
  };
}

export default function AgeInDaysClient() {
  const today = new Date();

  const [birthMonth, setBirthMonth] = useState('2');
  const [birthDay, setBirthDay] = useState('6');
  const [birthYear, setBirthYear] = useState('1988');

  const [targetMonth, setTargetMonth] = useState(String(today.getMonth() + 1));
  const [targetDay, setTargetDay] = useState(String(today.getDate()));
  const [targetYear, setTargetYear] = useState(String(today.getFullYear()));

  const [result, setResult] = useState<DetailedResult | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');

    const calculated = calculateDetailedAge(
      Number(birthYear),
      Number(birthMonth),
      Number(birthDay),
      Number(targetYear),
      Number(targetMonth),
      Number(targetDay),
    );

    if (!calculated) {
      setResult(null);
      setError(
        'Please enter valid dates. Date of birth must be before age at date.',
      );
      return;
    }

    setResult(calculated);
  };

  const handleReset = () => {
    setBirthMonth('2');
    setBirthDay('6');
    setBirthYear('1988');
    setTargetMonth(String(today.getMonth() + 1));
    setTargetDay(String(today.getDate()));
    setTargetYear(String(today.getFullYear()));
    setResult(null);
    setError('');
  };

  return (
    <section className={styles.calculatorSection}>
      <div className={styles.calculatorCard}>
        <div className={styles.formBlock}>
          <span className={styles.formKicker}>Age in Days</span>

          <h2 className={styles.formTitle}>Calculate Detailed Age</h2>

          <p className={styles.formText}>
            Enter date of birth and age at date to see full age details.
          </p>

          <div className={styles.dateRows}>
            <div>
              <div className={styles.dateGroupTitle}>Date of Birth</div>

              <div className={styles.dateFields}>
                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel}>Month</label>
                  <select
                    value={birthMonth}
                    onChange={(event) => setBirthMonth(event.target.value)}
                    className={styles.selectInput}
                  >
                    {monthOptions.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel}>Day</label>
                  <input
                    type="number"
                    value={birthDay}
                    min="1"
                    max="31"
                    onChange={(event) => setBirthDay(event.target.value)}
                    className={styles.smallInput}
                  />
                </div>

                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel}>Year</label>
                  <input
                    type="number"
                    value={birthYear}
                    min="1900"
                    max="2100"
                    onChange={(event) => setBirthYear(event.target.value)}
                    className={styles.yearInput}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.dateGroupTitle}>Age at the Date of</div>

              <div className={styles.dateFields}>
                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel}>Month</label>
                  <select
                    value={targetMonth}
                    onChange={(event) => setTargetMonth(event.target.value)}
                    className={styles.selectInput}
                  >
                    {monthOptions.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel}>Day</label>
                  <input
                    type="number"
                    value={targetDay}
                    min="1"
                    max="31"
                    onChange={(event) => setTargetDay(event.target.value)}
                    className={styles.smallInput}
                  />
                </div>

                <div className={styles.fieldBox}>
                  <label className={styles.fieldLabel}>Year</label>
                  <input
                    type="number"
                    value={targetYear}
                    min="1900"
                    max="2100"
                    onChange={(event) => setTargetYear(event.target.value)}
                    className={styles.yearInput}
                  />
                </div>
              </div>
            </div>
          </div>

          {error ? <p className={styles.error}>{error}</p> : null}

          <div className={styles.buttonRow}>
            <button
              type="button"
              onClick={handleCalculate}
              className={styles.calculateBtn}
            >
              Calculate Age
            </button>

            <button
              type="button"
              onClick={handleReset}
              className={styles.resetBtn}
            >
              Reset
            </button>
          </div>
        </div>

        <div className={styles.resultBlock}>
          <span className={styles.resultKicker}>Your Result</span>

          {result ? (
            <div className={styles.resultList}>
              <h3>Age:</h3>
              <p>
                <strong>
                  {result.years} years {result.months} months {result.days} days
                </strong>
              </p>
              <p>
                or {result.totalMonths.toLocaleString()} months{' '}
                {result.remainingDaysAfterMonths} days
              </p>
              <p>
                or {result.totalWeeks.toLocaleString()} weeks{' '}
                {result.remainingDaysAfterWeeks} days
              </p>
              <p>or {result.totalDays.toLocaleString()} days</p>
              <p>or {result.totalHours.toLocaleString()} hours</p>
              <p>or {result.totalMinutes.toLocaleString()} minutes</p>
              <p>or {result.totalSeconds.toLocaleString()} seconds</p>
            </div>
          ) : (
            <div className={styles.emptyResult}>
              <strong>Result will appear here</strong>
              <span>Enter date details and click calculate.</span>
            </div>
          )}

          <Link href="/quizzes" className={styles.quizCta}>
            Play Quiz & Earn Money
          </Link>
        </div>
      </div>
    </section>
  );
}
