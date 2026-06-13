'use client';

import { useMemo, useState } from 'react';
import styles from './page.module.css';

export default function MortgageCalculatorClient() {
  const [propertyPrice, setPropertyPrice] = useState('6000000');
  const [downPayment, setDownPayment] = useState('1000000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [years, setYears] = useState('20');
  const [showResult, setShowResult] = useState(true);

  const result = useMemo(() => {
    const price = Number(propertyPrice);
    const down = Number(downPayment);
    const principal = price - down;
    const annualRate = Number(interestRate);
    const tenureYears = Number(years);

    if (
      !price ||
      principal <= 0 ||
      !annualRate ||
      !tenureYears ||
      price <= 0 ||
      annualRate <= 0 ||
      tenureYears <= 0
    ) {
      return null;
    }

    const monthlyRate = annualRate / 12 / 100;
    const months = tenureYears * 12;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    const yearlyRows = Array.from({ length: Math.min(tenureYears, 10) }).map(
      (_, index) => ({
        year: index + 1,
        payment: emi * 12,
        balanceApprox: Math.max(
          principal - (principal / tenureYears) * (index + 1),
          0,
        ),
      }),
    );

    return {
      principal,
      emi,
      totalPayment,
      totalInterest,
      yearlyRows,
    };
  }, [propertyPrice, downPayment, interestRate, years]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(value);

  const handleCalculate = () => {
    setShowResult(true);
  };

  return (
    <div className={styles.calcBox}>
      <div className={styles.calcHeader}>
        <span>🏠</span>
        <div>
          <h2>Mortgage Payment Calculator</h2>
          <p>Use inputs or sliders, then press Calculate.</p>
        </div>
      </div>

      <div className={styles.formGrid}>
        <div>
          <label>Property Price (₹)</label>
          <input
            type="number"
            value={propertyPrice}
            onChange={(e) => {
              setPropertyPrice(e.target.value);
              setShowResult(false);
            }}
          />
          <input
            className={styles.slider}
            type="range"
            min="100000"
            max="50000000"
            step="100000"
            value={propertyPrice}
            onChange={(e) => {
              setPropertyPrice(e.target.value);
              setShowResult(false);
            }}
          />
        </div>

        <div>
          <label>Down Payment (₹)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => {
              setDownPayment(e.target.value);
              setShowResult(false);
            }}
          />
          <input
            className={styles.slider}
            type="range"
            min="0"
            max={propertyPrice || '50000000'}
            step="50000"
            value={downPayment}
            onChange={(e) => {
              setDownPayment(e.target.value);
              setShowResult(false);
            }}
          />
        </div>

        <div>
          <label>Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => {
              setInterestRate(e.target.value);
              setShowResult(false);
            }}
          />
          <input
            className={styles.slider}
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => {
              setInterestRate(e.target.value);
              setShowResult(false);
            }}
          />
        </div>

        <div>
          <label>Loan Tenure (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => {
              setYears(e.target.value);
              setShowResult(false);
            }}
          />
          <input
            className={styles.slider}
            type="range"
            min="1"
            max="40"
            step="1"
            value={years}
            onChange={(e) => {
              setYears(e.target.value);
              setShowResult(false);
            }}
          />
        </div>
      </div>

      <div className={styles.calculateWrap}>
        <button type="button" onClick={handleCalculate}>
          Calculate Mortgage EMI
        </button>
      </div>

      {showResult && result && (
        <>
          <div className={styles.resultGrid}>
            <div className={styles.resultCard}>
              <span>Loan Amount</span>
              <strong>₹{formatCurrency(result.principal)}</strong>
            </div>

            <div className={styles.resultCard}>
              <span>Monthly EMI</span>
              <strong>₹{formatCurrency(result.emi)}</strong>
            </div>

            <div className={styles.resultCard}>
              <span>Total Interest</span>
              <strong>₹{formatCurrency(result.totalInterest)}</strong>
            </div>

            <div className={styles.resultCard}>
              <span>Total Payment</span>
              <strong>₹{formatCurrency(result.totalPayment)}</strong>
            </div>
          </div>

          <div className={styles.breakdownBox}>
            <h3>Payment Breakdown</h3>

            <div className={styles.bar}>
              <span
                style={{
                  width: `${Math.max(
                    8,
                    (result.principal / result.totalPayment) * 100,
                  )}%`,
                }}
              />
              <strong
                style={{
                  width: `${Math.max(
                    8,
                    (result.totalInterest / result.totalPayment) * 100,
                  )}%`,
                }}
              />
            </div>

            <div className={styles.legend}>
              <p>
                <span /> Principal
              </p>
              <p>
                <strong /> Interest
              </p>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <h3>Yearly Payment Snapshot</h3>

            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Estimated Payment</th>
                  <th>Approx. Balance</th>
                </tr>
              </thead>
              <tbody>
                {result.yearlyRows.map((row) => (
                  <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>₹{formatCurrency(row.payment)}</td>
                    <td>₹{formatCurrency(row.balanceApprox)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
