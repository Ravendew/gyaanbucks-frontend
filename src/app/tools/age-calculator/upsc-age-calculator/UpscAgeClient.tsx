'use client';

import { useMemo, useState } from 'react';
import styles from './page.module.css';

type Category =
  | 'general'
  | 'obc'
  | 'scst'
  | 'pwbd-general'
  | 'pwbd-obc'
  | 'pwbd-scst';

type Result = {
  years: number;
  months: number;
  days: number;
  minAge: number;
  maxAge: number;
  eligible: boolean;
  message: string;
  cutoffDateText: string;
};

const categoryRules: Record<
  Category,
  { label: string; minAge: number; maxAge: number }
> = {
  general: {
    label: 'General / EWS',
    minAge: 21,
    maxAge: 32,
  },
  obc: {
    label: 'OBC',
    minAge: 21,
    maxAge: 35,
  },
  scst: {
    label: 'SC / ST',
    minAge: 21,
    maxAge: 37,
  },
  'pwbd-general': {
    label: 'PwBD - General / EWS',
    minAge: 21,
    maxAge: 42,
  },
  'pwbd-obc': {
    label: 'PwBD - OBC',
    minAge: 21,
    maxAge: 45,
  },
  'pwbd-scst': {
    label: 'PwBD - SC / ST',
    minAge: 21,
    maxAge: 47,
  },
};

function calculateAgeOnDate(dob: string, cutoff: Date) {
  const birthDate = new Date(dob);

  if (!dob || birthDate > cutoff) return null;

  let years = cutoff.getFullYear() - birthDate.getFullYear();
  let months = cutoff.getMonth() - birthDate.getMonth();
  let days = cutoff.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(cutoff.getFullYear(), cutoff.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

function calculateUpscEligibility(
  dob: string,
  examYear: string,
  category: Category,
): Result | null {
  if (!dob || !examYear) return null;

  const year = Number(examYear);

  if (!Number.isFinite(year) || year < 1900) return null;

  const cutoffDate = new Date(year, 7, 1);
  const age = calculateAgeOnDate(dob, cutoffDate);

  if (!age) return null;

  const rule = categoryRules[category];

  const isMinimumAgeOk = age.years >= rule.minAge;
  const isMaximumAgeOk = age.years < rule.maxAge || age.years === rule.maxAge;

  const eligible = isMinimumAgeOk && isMaximumAgeOk;

  let message = '';

  if (!isMinimumAgeOk) {
    message = `Not eligible because age is below ${rule.minAge} years as on cutoff date.`;
  } else if (!isMaximumAgeOk) {
    message = `Not eligible because age is above ${rule.maxAge} years for ${rule.label}.`;
  } else {
    message = `Eligible by age for ${rule.label}, based on the selected cutoff date.`;
  }

  return {
    ...age,
    minAge: rule.minAge,
    maxAge: rule.maxAge,
    eligible,
    message,
    cutoffDateText: `1 August ${year}`,
  };
}

export default function UpscAgeClient() {
  const currentYear = new Date().getFullYear();

  const [dob, setDob] = useState('');
  const [examYear, setExamYear] = useState(String(currentYear));
  const [category, setCategory] = useState<Category>('general');
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    return calculateUpscEligibility(dob, examYear, category);
  }, [dob, examYear, category, submitted]);

  const selectedRule = categoryRules[category];

  return (
    <section className={styles.upscBox}>
      <div className={styles.upscPattern} />

      <div className={styles.upscHeader}>
        <div>
          <span className={styles.upscBadge}>🏛️ UPSC Eligibility Tool</span>
          <h2>Check UPSC Age Eligibility</h2>
          <p>
            Enter your date of birth, exam year and category to check your age
            as on the UPSC cutoff date with category relaxation.
          </p>
        </div>

        <div className={styles.upscIcon}>📘</div>
      </div>

      <div className={styles.inputPanel}>
        <div className={styles.inputGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="examYear">Exam Year</label>
            <input
              id="examYear"
              type="number"
              value={examYear}
              onChange={(event) => setExamYear(event.target.value)}
              min="1900"
              max="2100"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value as Category)}
            >
              <option value="general">General / EWS</option>
              <option value="obc">OBC</option>
              <option value="scst">SC / ST</option>
              <option value="pwbd-general">PwBD - General / EWS</option>
              <option value="pwbd-obc">PwBD - OBC</option>
              <option value="pwbd-scst">PwBD - SC / ST</option>
            </select>
          </div>
        </div>

        <div className={styles.ruleNote}>
          <span>Selected rule</span>
          <strong>
            Minimum {selectedRule.minAge} years, maximum {selectedRule.maxAge}{' '}
            years
          </strong>
        </div>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={styles.calculateButton}
            onClick={() => setSubmitted(true)}
          >
            Check Eligibility
          </button>

          <button
            type="button"
            className={styles.resetButton}
            onClick={() => {
              setDob('');
              setExamYear(String(currentYear));
              setCategory('general');
              setSubmitted(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {!submitted && (
        <div className={styles.emptyState}>
          <strong>Check age as on UPSC cutoff date</strong>
          <span>
            This tool calculates age as on 1 August of the selected exam year.
          </span>
        </div>
      )}

      {submitted && result && (
        <div
          className={`${styles.resultBox} ${
            result.eligible ? styles.eligibleBox : styles.notEligibleBox
          }`}
        >
          <div className={styles.resultTop}>
            <span>
              {result.eligible ? 'Eligible by age' : 'Not eligible by age'}
            </span>
            <strong>
              {result.years}Y {result.months}M {result.days}D
            </strong>
            <p>Age as on {result.cutoffDateText}</p>
          </div>

          <div className={styles.resultGrid}>
            <div>
              <span>Category</span>
              <strong>{selectedRule.label}</strong>
            </div>

            <div>
              <span>Allowed age range</span>
              <strong>
                {result.minAge} - {result.maxAge}
              </strong>
            </div>

            <div>
              <span>Status</span>
              <strong>{result.eligible ? 'Eligible' : 'Not Eligible'}</strong>
            </div>
          </div>

          <div className={styles.messageBox}>{result.message}</div>
        </div>
      )}

      {submitted && !result && (
        <p className={styles.errorText}>
          Please enter valid date of birth and exam year.
        </p>
      )}
    </section>
  );
}
