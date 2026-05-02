'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

type AgeResult = {
  years: number;
  months: number;
  days: number;
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function calculateAge(
  birthMonth: string,
  birthDay: string,
  birthYear: string,
  targetMonth: string,
  targetDay: string,
  targetYear: string,
): AgeResult | null {
  const bm = Number(birthMonth);
  const bd = Number(birthDay);
  const by = Number(birthYear);
  const tm = Number(targetMonth);
  const td = Number(targetDay);
  const ty = Number(targetYear);

  if (!bm || !bd || !by || !tm || !td || !ty) return null;

  const birthDate = new Date(by, bm - 1, bd);
  const targetDate = new Date(ty, tm - 1, td);

  const validBirth =
    birthDate.getFullYear() === by &&
    birthDate.getMonth() === bm - 1 &&
    birthDate.getDate() === bd;

  const validTarget =
    targetDate.getFullYear() === ty &&
    targetDate.getMonth() === tm - 1 &&
    targetDate.getDate() === td;

  if (!validBirth || !validTarget || birthDate > targetDate) return null;

  let years = ty - by;
  let monthsCount = tm - bm;
  let days = td - bd;

  if (days < 0) {
    monthsCount -= 1;
    days += new Date(ty, tm - 1, 0).getDate();
  }

  if (monthsCount < 0) {
    years -= 1;
    monthsCount += 12;
  }

  return { years, months: monthsCount, days };
}

export default function AgeCalculatorClient() {
  const today = new Date();

  const [birthMonth, setBirthMonth] = useState('1');
  const [birthDay, setBirthDay] = useState('1');
  const [birthYear, setBirthYear] = useState('2000');

  const [targetMonth, setTargetMonth] = useState(String(today.getMonth() + 1));
  const [targetDay, setTargetDay] = useState(String(today.getDate()));
  const [targetYear, setTargetYear] = useState(String(today.getFullYear()));

  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');

    const age = calculateAge(
      birthMonth,
      birthDay,
      birthYear,
      targetMonth,
      targetDay,
      targetYear,
    );

    if (!age) {
      setResult(null);
      setError(
        'Please enter a valid date. Birth date must be before age at date.',
      );
      return;
    }

    setResult(age);
  };

  const handleReset = () => {
    setBirthMonth('1');
    setBirthDay('1');
    setBirthYear('2000');
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
          <span className={styles.formKicker}>Date of Birth</span>

          <h2 className={styles.formTitle}>Calculate Your Exact Age</h2>

          <p className={styles.formText}>
            Select birth date and age calculation date to get exact age.
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
                    {months.map((month, index) => (
                      <option key={month} value={index + 1}>
                        {month}
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
                    {months.map((month, index) => (
                      <option key={month} value={index + 1}>
                        {month}
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
            <>
              <div className={styles.resultGrid}>
                <div className={styles.resultBox}>
                  <strong>{result.years}</strong>
                  <span>Years</span>
                </div>

                <div className={styles.resultBox}>
                  <strong>{result.months}</strong>
                  <span>Months</span>
                </div>

                <div className={styles.resultBox}>
                  <strong>{result.days}</strong>
                  <span>Days</span>
                </div>
              </div>

              <p className={styles.resultText}>
                Your exact age is{' '}
                <strong>
                  {result.years} years, {result.months} months and {result.days}{' '}
                  days
                </strong>
                .
              </p>
            </>
          ) : (
            <div className={styles.emptyResult}>
              <strong>Age result will appear here</strong>
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
