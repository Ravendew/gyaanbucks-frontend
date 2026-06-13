'use client';

import { useState } from 'react';
import styles from './HomeCalculator.module.css';

export default function HomeCalculator() {
  const [value, setValue] = useState('0');
  const [mode, setMode] = useState<'basic' | 'advanced'>('basic');

  const press = (key: string) => {
    if (key === 'AC') {
      setValue('0');
      return;
    }

    if (key === 'Back') {
      setValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
      return;
    }

    if (key === '=') {
      try {
        const safe = value
          .replaceAll('×', '*')
          .replaceAll('÷', '/')
          .replaceAll('π', String(Math.PI));

        // eslint-disable-next-line no-new-func
        const result = Function(`"use strict"; return (${safe})`)();

        if (Number.isFinite(result)) {
          setValue(String(Number(result.toFixed(8))));
        }
      } catch {
        setValue('Error');
      }

      return;
    }

    if (key === '√') {
      const num = Number(value);
      setValue(Number.isFinite(num) ? String(Math.sqrt(num)) : 'Error');
      return;
    }

    if (key === 'x²') {
      const num = Number(value);
      setValue(Number.isFinite(num) ? String(num * num) : 'Error');
      return;
    }

    if (key === '%') {
      const num = Number(value);
      setValue(Number.isFinite(num) ? String(num / 100) : 'Error');
      return;
    }

    setValue((prev) => {
      if (prev === '0' || prev === 'Error') return key;
      return prev + key;
    });
  };

  const basicKeys = [
    '7',
    '8',
    '9',
    '÷',
    '4',
    '5',
    '6',
    '×',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
    'AC',
    'Back',
    '%',
    '√',
  ];

  const advancedKeys = [
    'sin',
    'cos',
    'tan',
    'π',
    'x²',
    '(',
    ')',
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '%',
    '=',
    'AC',
    'Back',
    '√',
    '00',
  ];

  return (
    <section className={styles.calculatorSection}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.badge}>🧮 Free Online Calculator</span>
          <h1>Free Online Calculators & Useful Learning Tools</h1>
          <p>
            Use our beautiful basic and advanced calculator for quick daily
            calculations. You can also explore age, percentage, school admission
            and date calculators below.
          </p>
        </div>

        <div className={styles.calculatorCard}>
          <div className={styles.tabs}>
            <button
              type="button"
              className={mode === 'basic' ? styles.activeTab : ''}
              onClick={() => setMode('basic')}
            >
              Basic
            </button>
            <button
              type="button"
              className={mode === 'advanced' ? styles.activeTab : ''}
              onClick={() => setMode('advanced')}
            >
              Advanced
            </button>
          </div>

          <div className={styles.display}>{value}</div>

          <div className={styles.keys}>
            {(mode === 'basic' ? basicKeys : advancedKeys).map((key) => (
              <button
                key={`${mode}-${key}`}
                type="button"
                onClick={() => press(key)}
                className={
                  key === '='
                    ? styles.equalKey
                    : key === 'AC'
                      ? styles.clearKey
                      : ''
                }
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
