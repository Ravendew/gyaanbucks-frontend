'use client';

import { useState } from 'react';
import styles from './page.module.css';

type ClassOption = 'nursery' | 'lkg' | 'ukg' | 'class1';

type AgeResult = {
  years: number;
  months: number;
  days: number;
  status: string;
  message: string;
};

const classRules: Record<
  ClassOption,
  {
    label: string;
    minYears: number;
    idealYears: string;
  }
> = {
  nursery: {
    label: 'Nursery',
    minYears: 3,
    idealYears: '3+ years',
  },
  lkg: {
    label: 'LKG',
    minYears: 4,
    idealYears: '4+ years',
  },
  ukg: {
    label: 'UKG',
    minYears: 5,
    idealYears: '5+ years',
  },
  class1: {
    label: 'Class 1',
    minYears: 6,
    idealYears: '6+ years',
  },
};

function calculateExactAge(dob: string, admissionDate: string) {
  const birthDate = new Date(dob);
  const targetDate = new Date(admissionDate);

  let years = targetDate.getFullYear() - birthDate.getFullYear();
  let months = targetDate.getMonth() - birthDate.getMonth();
  let days = targetDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      0,
    );
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

export default function SchoolAdmissionAgeClient() {
  const [dob, setDob] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassOption>('nursery');
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    if (!dob || !admissionDate) {
      setError('Please select both date of birth and admission cut-off date.');
      return;
    }

    const birthDate = new Date(dob);
    const targetDate = new Date(admissionDate);

    if (birthDate > targetDate) {
      setError('Date of birth cannot be after the admission date.');
      return;
    }

    const age = calculateExactAge(dob, admissionDate);
    const rule = classRules[selectedClass];

    let status = '';
    let message = '';

    if (age.years < rule.minYears) {
      status = 'Below usual age range';
      message = `For ${rule.label}, the child is usually expected to be at least ${rule.idealYears}. Please verify the school rule or consider the next academic year.`;
    } else if (age.years === rule.minYears) {
      status = 'Likely within minimum age range';
      message = `The child appears to meet the common minimum age reference for ${rule.label}. Final eligibility depends on the school cut-off rule.`;
    } else {
      status = 'Above minimum age range';
      message = `The child is above the common minimum age reference for ${rule.label}. Please confirm whether the school has an upper age rule.`;
    }

    setResult({
      ...age,
      status,
      message,
    });
  };

  const selectedRule = classRules[selectedClass];

  return (
    <section className={styles.toolCard}>
      <div className={styles.toolHeader}>
        <p className={styles.toolLabel}>Admission Age Checker</p>
        <h2>Check Child Age for School Admission</h2>
        <p>
          Select date of birth, class and school cut-off date to calculate exact
          age and get a basic eligibility suggestion.
        </p>
      </div>

      <div className={styles.formGrid}>
        <label className={styles.field}>
          <span>Child Date of Birth</span>
          <input
            type="date"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span>Admission / Cut-off Date</span>
          <input
            type="date"
            value={admissionDate}
            onChange={(event) => setAdmissionDate(event.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span>Select Class</span>
          <select
            value={selectedClass}
            onChange={(event) =>
              setSelectedClass(event.target.value as ClassOption)
            }
          >
            <option value="nursery">Nursery</option>
            <option value="lkg">LKG</option>
            <option value="ukg">UKG</option>
            <option value="class1">Class 1</option>
          </select>
        </label>
      </div>

      <div className={styles.ruleBox}>
        <strong>{selectedRule.label} reference:</strong>{' '}
        {selectedRule.idealYears} on the selected admission date.
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.calculateBtn} onClick={handleCalculate}>
        Calculate Admission Age
      </button>

      {result && (
        <div className={styles.resultBox}>
          <p className={styles.resultLabel}>Child age on admission date</p>

          <div className={styles.resultGrid}>
            <div>
              <strong>{result.years}</strong>
              <span>Years</span>
            </div>
            <div>
              <strong>{result.months}</strong>
              <span>Months</span>
            </div>
            <div>
              <strong>{result.days}</strong>
              <span>Days</span>
            </div>
          </div>

          <div className={styles.statusBox}>
            <h3>{result.status}</h3>
            <p>{result.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
