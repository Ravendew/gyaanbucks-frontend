'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

function formatResult(value: number) {
  if (!Number.isFinite(value)) return '';
  return Number(value.toFixed(2)).toString();
}

export default function PercentageCalculatorClient() {
  const [basicPercent, setBasicPercent] = useState('');
  const [basicOf, setBasicOf] = useState('');
  const [basicResult, setBasicResult] = useState('');

  const [phraseOnePercent, setPhraseOnePercent] = useState('');
  const [phraseOneOf, setPhraseOneOf] = useState('');
  const [phraseOneResult, setPhraseOneResult] = useState('');

  const [phraseTwoValue, setPhraseTwoValue] = useState('');
  const [phraseTwoOf, setPhraseTwoOf] = useState('');
  const [phraseTwoResult, setPhraseTwoResult] = useState('');

  const [phraseThreeValue, setPhraseThreeValue] = useState('');
  const [phraseThreePercent, setPhraseThreePercent] = useState('');
  const [phraseThreeResult, setPhraseThreeResult] = useState('');

  const [diffOne, setDiffOne] = useState('');
  const [diffTwo, setDiffTwo] = useState('');
  const [diffResult, setDiffResult] = useState('');

  const [changeValue, setChangeValue] = useState('');
  const [changePercent, setChangePercent] = useState('');
  const [changeType, setChangeType] = useState('increase');
  const [changeResult, setChangeResult] = useState('');

  const [error, setError] = useState('');

  const calculateBasic = () => {
    setError('');

    const percent = Number(basicPercent);
    const ofValue = Number(basicOf);

    if (!Number.isFinite(percent) || !Number.isFinite(ofValue)) {
      setError('Please enter valid numbers.');
      return;
    }

    setBasicResult(formatResult((percent / 100) * ofValue));
  };

  const calculatePhraseOne = () => {
    setError('');

    const percent = Number(phraseOnePercent);
    const ofValue = Number(phraseOneOf);

    if (!Number.isFinite(percent) || !Number.isFinite(ofValue)) {
      setError('Please enter valid numbers.');
      return;
    }

    setPhraseOneResult(formatResult((percent / 100) * ofValue));
  };

  const calculatePhraseTwo = () => {
    setError('');

    const value = Number(phraseTwoValue);
    const ofValue = Number(phraseTwoOf);

    if (!Number.isFinite(value) || !Number.isFinite(ofValue) || ofValue === 0) {
      setError('Please enter valid numbers.');
      return;
    }

    setPhraseTwoResult(`${formatResult((value / ofValue) * 100)}%`);
  };

  const calculatePhraseThree = () => {
    setError('');

    const value = Number(phraseThreeValue);
    const percent = Number(phraseThreePercent);

    if (!Number.isFinite(value) || !Number.isFinite(percent) || percent === 0) {
      setError('Please enter valid numbers.');
      return;
    }

    setPhraseThreeResult(formatResult((value * 100) / percent));
  };

  const calculateDifference = () => {
    setError('');

    const first = Number(diffOne);
    const second = Number(diffTwo);

    if (!Number.isFinite(first) || !Number.isFinite(second)) {
      setError('Please enter valid numbers.');
      return;
    }

    const average = (first + second) / 2;

    if (average === 0) {
      setError('Average cannot be zero.');
      return;
    }

    setDiffResult(
      `${formatResult((Math.abs(first - second) / average) * 100)}%`,
    );
  };

  const calculateChange = () => {
    setError('');

    const value = Number(changeValue);
    const percent = Number(changePercent);

    if (!Number.isFinite(value) || !Number.isFinite(percent)) {
      setError('Please enter valid numbers.');
      return;
    }

    const amount = (value * percent) / 100;
    const finalValue =
      changeType === 'increase' ? value + amount : value - amount;

    setChangeResult(formatResult(finalValue));
  };

  const resetAll = () => {
    setBasicPercent('');
    setBasicOf('');
    setBasicResult('');

    setPhraseOnePercent('');
    setPhraseOneOf('');
    setPhraseOneResult('');

    setPhraseTwoValue('');
    setPhraseTwoOf('');
    setPhraseTwoResult('');

    setPhraseThreeValue('');
    setPhraseThreePercent('');
    setPhraseThreeResult('');

    setDiffOne('');
    setDiffTwo('');
    setDiffResult('');

    setChangeValue('');
    setChangePercent('');
    setChangeType('increase');
    setChangeResult('');
    setError('');
  };

  return (
    <section className={styles.calculatorSection}>
      <div className={styles.calculatorCard}>
        <div className={styles.formBlock}>
          <span className={styles.formKicker}>Percentage Tool</span>

          <h2 className={styles.formTitle}>Percentage Calculator</h2>

          <p className={styles.formText}>
            Use different percentage calculators below for marks, discounts,
            percentage difference and percentage change.
          </p>

          {error ? <p className={styles.error}>{error}</p> : null}

          <div className={styles.calcBox}>
            <h3>Basic Percentage Calculator</h3>

            <div className={styles.inlineCalc}>
              <input
                type="number"
                value={basicPercent}
                onChange={(e) => setBasicPercent(e.target.value)}
                className={styles.miniInput}
                placeholder="%"
              />

              <span>% of</span>

              <input
                type="number"
                value={basicOf}
                onChange={(e) => setBasicOf(e.target.value)}
                className={styles.miniInput}
                placeholder="Value"
              />

              <span>=</span>

              <input
                type="text"
                value={basicResult}
                readOnly
                className={styles.miniInput}
                placeholder="Result"
              />
            </div>

            <div className={styles.inlineRow}>
              <button
                type="button"
                onClick={calculateBasic}
                className={styles.smallBtn}
              >
                Calculate
              </button>
            </div>
          </div>

          <div className={styles.calcBox}>
            <h3>Percentage Calculator in Common Phrases</h3>

            <div className={styles.phraseBlock}>
              <div className={styles.inlineCalc}>
                <span>What is</span>

                <input
                  type="number"
                  value={phraseOnePercent}
                  onChange={(e) => setPhraseOnePercent(e.target.value)}
                  className={styles.miniInput}
                  placeholder="%"
                />

                <span>% of</span>

                <input
                  type="number"
                  value={phraseOneOf}
                  onChange={(e) => setPhraseOneOf(e.target.value)}
                  className={styles.miniInput}
                  placeholder="Value"
                />

                <span>=</span>

                <input
                  type="text"
                  value={phraseOneResult}
                  readOnly
                  className={styles.miniInput}
                  placeholder="Result"
                />
              </div>

              <div className={styles.inlineRow}>
                <button
                  type="button"
                  onClick={calculatePhraseOne}
                  className={styles.smallBtn}
                >
                  Calculate
                </button>
              </div>
            </div>

            <div className={styles.phraseBlock}>
              <div className={styles.inlineCalc}>
                <input
                  type="number"
                  value={phraseTwoValue}
                  onChange={(e) => setPhraseTwoValue(e.target.value)}
                  className={styles.miniInput}
                  placeholder="Value"
                />

                <span>is what % of</span>

                <input
                  type="number"
                  value={phraseTwoOf}
                  onChange={(e) => setPhraseTwoOf(e.target.value)}
                  className={styles.miniInput}
                  placeholder="Total"
                />

                <span>=</span>

                <input
                  type="text"
                  value={phraseTwoResult}
                  readOnly
                  className={styles.miniInput}
                  placeholder="Result"
                />
              </div>

              <div className={styles.inlineRow}>
                <button
                  type="button"
                  onClick={calculatePhraseTwo}
                  className={styles.smallBtn}
                >
                  Calculate
                </button>
              </div>
            </div>

            <div className={styles.phraseBlock}>
              <div className={styles.inlineCalc}>
                <input
                  type="number"
                  value={phraseThreeValue}
                  onChange={(e) => setPhraseThreeValue(e.target.value)}
                  className={styles.miniInput}
                  placeholder="Value"
                />

                <span>is</span>

                <input
                  type="number"
                  value={phraseThreePercent}
                  onChange={(e) => setPhraseThreePercent(e.target.value)}
                  className={styles.miniInput}
                  placeholder="%"
                />

                <span>% of what?</span>

                <span>=</span>

                <input
                  type="text"
                  value={phraseThreeResult}
                  readOnly
                  className={styles.miniInput}
                  placeholder="Result"
                />
              </div>

              <div className={styles.inlineRow}>
                <button
                  type="button"
                  onClick={calculatePhraseThree}
                  className={styles.smallBtn}
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>

          <div className={styles.calcBox}>
            <h3>Percentage Difference Calculator</h3>

            <div className={styles.fieldGroup}>
              <div className={styles.fieldBox}>
                <label className={styles.fieldLabel}>Value 1</label>
                <input
                  type="number"
                  value={diffOne}
                  onChange={(e) => setDiffOne(e.target.value)}
                  className={styles.input}
                  placeholder="Enter value 1"
                />
              </div>

              <div className={styles.fieldBox}>
                <label className={styles.fieldLabel}>Value 2</label>
                <input
                  type="number"
                  value={diffTwo}
                  onChange={(e) => setDiffTwo(e.target.value)}
                  className={styles.input}
                  placeholder="Enter value 2"
                />
              </div>
            </div>

            <div className={styles.inlineResult}>
              <button
                type="button"
                onClick={calculateDifference}
                className={styles.smallBtn}
              >
                Calculate
              </button>

              <input
                type="text"
                value={diffResult}
                readOnly
                className={styles.resultInput}
                placeholder="Result"
              />
            </div>
          </div>

          <div className={styles.calcBox}>
            <h3>Percentage Change Calculator</h3>

            <div className={styles.inlineCalc}>
              <input
                type="number"
                value={changeValue}
                onChange={(e) => setChangeValue(e.target.value)}
                className={styles.miniInput}
                placeholder="Value"
              />

              <select
                value={changeType}
                onChange={(e) => setChangeType(e.target.value)}
                className={styles.selectInput}
              >
                <option value="increase">Increase</option>
                <option value="decrease">Decrease</option>
              </select>

              <input
                type="number"
                value={changePercent}
                onChange={(e) => setChangePercent(e.target.value)}
                className={styles.miniInput}
                placeholder="%"
              />

              <span>% =</span>

              <input
                type="text"
                value={changeResult}
                readOnly
                className={styles.miniInput}
                placeholder="Result"
              />
            </div>

            <div className={styles.inlineRow}>
              <button
                type="button"
                onClick={calculateChange}
                className={styles.smallBtn}
              >
                Calculate
              </button>
            </div>
          </div>

          <button type="button" onClick={resetAll} className={styles.resetBtn}>
            Clear All
          </button>
        </div>

        <div className={styles.resultBlock}>
          <span className={styles.resultKicker}>Quick Guide</span>

          <div className={styles.guideBox}>
            <h3>Useful Examples</h3>
            <p>10% of 500 = 50</p>
            <p>450 is 90% of 500</p>
            <p>20% increase on 1000 = 1200</p>
            <p>20% decrease on 1000 = 800</p>
          </div>

          <Link href="/quizzes" className={styles.quizCta}>
            Play Quiz & Earn Money
          </Link>
        </div>
      </div>
    </section>
  );
}
