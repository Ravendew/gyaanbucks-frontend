'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  direction: string;
};

function calculateDateDifference(start: string, end: string): Result | null {
  if (!start || !end) return null;

  let startDate = new Date(start);
  let endDate = new Date(end);
  let direction = 'Start date to end date';

  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
    direction = 'Dates were reversed for calculation';
  }

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const totalWeeks = Math.floor(totalDays / 7);

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    direction,
  };
}

export default function DateDifferenceClient() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const result = calculateDateDifference(startDate, endDate);

  return (
    <section className={styles.dateToolBox}>
      <div className={styles.datePattern} />

      <div className={styles.dateHeader}>
        <div>
          <span className={styles.dateBadge}>📌 Event Date Gap Tool</span>
          <h2>Calculate Difference Between Two Dates</h2>
          <p>
            Choose any two calendar dates and find the exact gap in years,
            months, days, total days and completed weeks.
          </p>
        </div>

        <div className={styles.dateIcon}>🗓️</div>
      </div>

      <div className={styles.dateInputPanel}>
        <div className={styles.inputGrid}>
          <div className={styles.inputGroup}>
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={styles.calculateButton}
            onClick={() => setSubmitted(true)}
          >
            Calculate Date Difference
          </button>

          <button
            type="button"
            className={styles.resetButton}
            onClick={() => {
              setStartDate('');
              setEndDate('');
              setSubmitted(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {!submitted && (
        <div className={styles.emptyState}>
          <strong>Compare any two dates</strong>
          <span>
            Useful for events, deadlines, project timelines and learning date
            intervals.
          </span>
        </div>
      )}

      {submitted && result && (
        <div className={styles.resultBox}>
          <div className={styles.mainResult}>
            <span>Exact Date Difference</span>
            <strong>
              {result.years}Y {result.months}M {result.days}D
            </strong>
            <p>{result.direction}</p>
          </div>

          <div className={styles.resultGrid}>
            <div>
              <span>Total Days</span>
              <strong>{result.totalDays.toLocaleString()}</strong>
            </div>

            <div>
              <span>Completed Weeks</span>
              <strong>{result.totalWeeks.toLocaleString()}</strong>
            </div>

            <div>
              <span>Remaining Days After Weeks</span>
              <strong>{result.totalDays % 7}</strong>
            </div>
          </div>
        </div>
      )}

      {submitted && !result && (
        <p className={styles.errorText}>
          Please select both dates to calculate the difference.
        </p>
      )}
    </section>
  );
}
