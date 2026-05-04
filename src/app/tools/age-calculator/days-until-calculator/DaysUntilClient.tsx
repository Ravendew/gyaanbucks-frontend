'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Result = {
  totalDays: number;
  totalWeeks: number;
  remainingDays: number;
  targetLabel: string;
  status: 'future' | 'today' | 'past';
};

function calculateDaysUntil(
  targetDateValue: string,
  eventName: string,
): Result | null {
  if (!targetDateValue) return null;

  const today = new Date();
  const targetDate = new Date(targetDateValue);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diffMs = targetDate.getTime() - today.getTime();
  const totalDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const absoluteDays = Math.abs(totalDays);
  const totalWeeks = Math.floor(absoluteDays / 7);
  const remainingDays = absoluteDays % 7;

  let status: Result['status'] = 'future';

  if (totalDays === 0) {
    status = 'today';
  } else if (totalDays < 0) {
    status = 'past';
  }

  return {
    totalDays,
    totalWeeks,
    remainingDays,
    targetLabel: eventName.trim() || 'selected date',
    status,
  };
}

export default function DaysUntilClient() {
  const [eventName, setEventName] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const result = calculateDaysUntil(targetDate, eventName);

  return (
    <section className={styles.countdownBox}>
      <div className={styles.countdownPattern} />

      <div className={styles.countdownHeader}>
        <div>
          <span className={styles.countdownBadge}>⏰ Countdown Tool</span>
          <h2>How Many Days Until Your Date?</h2>
          <p>
            Enter an upcoming date or event and calculate the exact number of
            days left from today.
          </p>
        </div>

        <div className={styles.countdownIcon}>🚀</div>
      </div>

      <div className={styles.inputPanel}>
        <div className={styles.inputGroup}>
          <label htmlFor="eventName">Event Name Optional</label>
          <input
            id="eventName"
            type="text"
            placeholder="Example: Exam, Birthday, Trip"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="targetDate">Target Date</label>
          <input
            id="targetDate"
            type="date"
            value={targetDate}
            onChange={(event) => setTargetDate(event.target.value)}
          />
        </div>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={styles.calculateButton}
            onClick={() => setSubmitted(true)}
          >
            Calculate Days Left
          </button>

          <button
            type="button"
            className={styles.resetButton}
            onClick={() => {
              setEventName('');
              setTargetDate('');
              setSubmitted(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {!submitted && (
        <div className={styles.emptyState}>
          <strong>Start your countdown</strong>
          <span>
            Add a target date to see how many days, weeks and remaining days are
            left.
          </span>
        </div>
      )}

      {submitted && result && (
        <div className={styles.resultBox}>
          <div className={styles.bigCountdown}>
            <span>{result.targetLabel}</span>

            {result.status === 'future' && (
              <>
                <strong>{result.totalDays.toLocaleString()}</strong>
                <p>days left from today</p>
              </>
            )}

            {result.status === 'today' && (
              <>
                <strong>Today</strong>
                <p>The selected date is today.</p>
              </>
            )}

            {result.status === 'past' && (
              <>
                <strong>{Math.abs(result.totalDays).toLocaleString()}</strong>
                <p>days have already passed since this date</p>
              </>
            )}
          </div>

          <div className={styles.countdownGrid}>
            <div>
              <span>Completed Weeks</span>
              <strong>{result.totalWeeks.toLocaleString()}</strong>
            </div>

            <div>
              <span>Remaining Days</span>
              <strong>{result.remainingDays}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>
                {result.status === 'future'
                  ? 'Upcoming'
                  : result.status === 'today'
                    ? 'Today'
                    : 'Past Date'}
              </strong>
            </div>
          </div>
        </div>
      )}

      {submitted && !result && (
        <p className={styles.errorText}>Please select a target date.</p>
      )}
    </section>
  );
}
