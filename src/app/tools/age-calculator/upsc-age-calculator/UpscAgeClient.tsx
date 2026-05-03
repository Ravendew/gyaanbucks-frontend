'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Category = 'general' | 'obc' | 'scst' | 'pwd';

type UpscResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  categoryLabel: string;
  maxAge: number;
  status: string;
};

const categoryLimits: Record<
  Category,
  {
    label: string;
    maxAge: number;
  }
> = {
  general: {
    label: 'General',
    maxAge: 32,
  },
  obc: {
    label: 'OBC',
    maxAge: 35,
  },
  scst: {
    label: 'SC/ST',
    maxAge: 37,
  },
  pwd: {
    label: 'PwBD',
    maxAge: 42,
  },
};

export default function UpscAgeClient() {
  const today = new Date();

  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const [cutoffMonth, setCutoffMonth] = useState('8');
  const [cutoffDay, setCutoffDay] = useState('1');
  const [cutoffYear, setCutoffYear] = useState(String(today.getFullYear()));

  const [category, setCategory] = useState<Category>('general');

  const [result, setResult] = useState<UpscResult | null>(null);
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
        'Please enter your complete date of birth and UPSC cutoff date.',
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
      setError('Please enter a valid UPSC cutoff date.');
      return;
    }

    if (birthDate > cutoffDate) {
      setError('Date of birth cannot be after the UPSC cutoff date.');
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

    const selectedCategory = categoryLimits[category];

    let status = '';

    if (years < 21) {
      status =
        'Not eligible by age yet. UPSC minimum age is usually 21 years, but please verify the official notification.';
    } else if (years > selectedCategory.maxAge) {
      status = `Age may be above the usual ${selectedCategory.label} upper age limit of ${selectedCategory.maxAge} years. Please check official UPSC notification and relaxation rules.`;
    } else {
      status = `Age appears within the usual ${selectedCategory.label} age range. Final eligibility must be verified from the official UPSC notification.`;
    }

    setResult({
      years,
      months,
      days,
      totalDays,
      categoryLabel: selectedCategory.label,
      maxAge: selectedCategory.maxAge,
      status,
    });
  };

  const resetCalculator = () => {
    setBirthMonth('');
    setBirthDay('');
    setBirthYear('');
    setCutoffMonth('8');
    setCutoffDay('1');
    setCutoffYear(String(today.getFullYear()));
    setCategory('general');
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
        <label>
          UPSC Cutoff Date
          <span className={styles.helperText}>
            Usually 1st August of exam year (example: 01-08-2025)
          </span>
        </label>

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

      <div className={styles.inputGroup}>
        <label>Category</label>

        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
        >
          <option value="general">General</option>
          <option value="obc">OBC</option>
          <option value="scst">SC/ST</option>
          <option value="pwd">PwBD</option>
        </select>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.buttonRow}>
        <button type="button" onClick={calculateAge}>
          Check UPSC Age
        </button>
        <button type="button" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className={styles.resultBox}>
          <h2>UPSC Age Result</h2>

          <div className={styles.mainResult}>
            {result.years} years, {result.months} months, {result.days} days
          </div>

          <div className={styles.resultGrid}>
            <div>
              <span>Category</span>
              <strong>{result.categoryLabel}</strong>
            </div>
            <div>
              <span>Usual Upper Age</span>
              <strong>{result.maxAge} years</strong>
            </div>
            <div>
              <span>Total Days</span>
              <strong>{result.totalDays.toLocaleString()}</strong>
            </div>
          </div>

          <p className={styles.note}>{result.status}</p>
        </div>
      )}
    </section>
  );
}
