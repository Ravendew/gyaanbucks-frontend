'use client';

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import styles from './page.module.css';

type Gender = 'male' | 'female';

type LoveResult = {
  score: number;
  title: string;
  message: string;
  communication: number;
  trust: number;
  funVibe: number;
  shareText: string;
};

function cleanName(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, '');
}

function getStableNumber(text: string) {
  let hash = 0;

  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) % 100000;
  }

  return hash;
}

function clampScore(value: number) {
  return Math.max(35, Math.min(99, value));
}

function getNearbyMetricScore(score: number, base: number, salt: number) {
  const variation = ((base + salt) % 15) - 7;
  return clampScore(score + variation);
}

function getLoveResult(yourName: string, partnerName: string): LoveResult {
  const first = cleanName(yourName);
  const second = cleanName(partnerName);
  const combined = [first, second].sort().join('love');

  const base = getStableNumber(combined);
  const vowelBoost =
    (combined.match(/[aeiou]/g)?.length || 0) * 3 + combined.length;

  const score = clampScore(35 + ((base + vowelBoost) % 65));

  const communication = getNearbyMetricScore(score, base, 11);
  const trust = getNearbyMetricScore(score, base, 23);
  const funVibe = getNearbyMetricScore(score, base, 37);

  let title = '';
  let message = '';

  if (score >= 90) {
    title = 'Dream Match Energy ❤️';
    message =
      'Your names create a very strong fun match score with sweet, exciting and high-vibe energy.';
  } else if (score >= 75) {
    title = 'Beautiful Connection 💖';
    message =
      'This pair has a warm and positive compatibility vibe with strong fun energy.';
  } else if (score >= 60) {
    title = 'Cute Match Potential 💌';
    message =
      'There is a friendly and playful connection here. A little understanding can make the vibe better.';
  } else if (score >= 45) {
    title = 'Slow-Burn Vibe 🌷';
    message =
      'This match may need patience, trust and more conversation, but the fun vibe is still open.';
  } else {
    title = 'Funny Opposite Energy 😄';
    message =
      'This pair has a playful opposite-style vibe. Treat this as a fun result only.';
  }

  return {
    score,
    title,
    message,
    communication,
    trust,
    funVibe,
    shareText: `Our love score is ${score}% ❤️ Check yours: https://gyaanbucks.com/tools/love-calculator`,
  };
}

function getAvatarOffset(score: number) {
  if (score >= 90) return 44;
  if (score >= 75) return 34;
  if (score >= 60) return 24;
  if (score >= 45) return 14;
  return 4;
}

function AnimatedScoreCircle({ score }: { score: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const scoreDegrees = useTransform(count, (latest) => `${latest * 3.6}deg`);

  useEffect(() => {
    count.set(0);

    const controls = animate(count, score, {
      duration: 3.4,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [count, score]);

  return (
    <motion.div
      className={styles.scoreCircle}
      style={
        {
          '--score': scoreDegrees,
        } as CSSProperties
      }
      initial={{ scale: 0.82 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <strong>
        <motion.span>{rounded}</motion.span>%
      </strong>
      <small>Love Score</small>
    </motion.div>
  );
}

export default function LoveCalculatorClient() {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [yourGender, setYourGender] = useState<Gender>('male');
  const [partnerGender, setPartnerGender] = useState<Gender>('female');
  const [maleRun, setMaleRun] = useState<unknown>(null);
  const [femaleRun, setFemaleRun] = useState<unknown>(null);
  const [result, setResult] = useState<LoveResult | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch('/lottie/male-run.json').then((res) => res.json()),
      fetch('/lottie/female-run.json').then((res) => res.json()),
    ])
      .then(([maleData, femaleData]) => {
        setMaleRun(maleData);
        setFemaleRun(femaleData);
      })
      .catch(() => {
        setMaleRun(null);
        setFemaleRun(null);
      });
  }, []);

  useEffect(() => {
    const hasPlayed = localStorage.getItem('loveMusicPlayed') === 'true';

    if (hasPlayed) {
      const audioId = 'love-calculator-audio';
      let audio = document.getElementById(audioId) as HTMLAudioElement | null;

      if (!audio) {
        audio = document.createElement('audio');
        audio.id = audioId;
        audio.src = '/sounds/love-magic.mp3';
        audio.loop = true;
        audio.volume = 0.35;
        document.body.appendChild(audio);
      }

      audio
        .play()
        .then(() => setMusicOn(true))
        .catch(() => setMusicOn(false));
    }
  }, []);

  const fallingHearts = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        id: index,
        left: `${(index * 13) % 100}%`,
        delay: (index % 8) * 0.45,
        duration: 5 + (index % 5),
        size: 14 + (index % 5) * 4,
        icon: ['❤️', '💖', '💕', '💘', '💗'][index % 5],
      })),
    [],
  );

  const burstHearts = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        id: index,
        angle: index * 18,
        distance: 80 + (index % 4) * 18,
        icon: ['❤️', '💖', '✨', '💕'][index % 4],
      })),
    [],
  );

  const toggleMusic = async () => {
    const audioId = 'love-calculator-audio';
    let audio = document.getElementById(audioId) as HTMLAudioElement | null;

    if (!audio) {
      audio = document.createElement('audio');
      audio.id = audioId;
      audio.src = '/sounds/love-magic.mp3';
      audio.loop = true;
      audio.volume = 0.35;
      document.body.appendChild(audio);
    }

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      localStorage.setItem('loveMusicPlayed', 'false');
    } else {
      await audio.play();
      setMusicOn(true);
      localStorage.setItem('loveMusicPlayed', 'true');
    }
  };

  const handleCalculate = () => {
    setError('');
    setCopied(false);

    if (!yourName.trim() || !partnerName.trim()) {
      setResult(null);
      setError('Please enter both names to calculate love score.');
      return;
    }

    if (yourName.trim().length < 2 || partnerName.trim().length < 2) {
      setResult(null);
      setError('Names should have at least 2 characters.');
      return;
    }

    setResult(getLoveResult(yourName, partnerName));
    setBurstKey((prev) => prev + 1);
  };

  const handleShare = async () => {
    if (!result) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Love Calculator Result',
          text: result.shareText,
          url: 'https://gyaanbucks.com/tools/love-calculator',
        });
      } else {
        await navigator.clipboard.writeText(result.shareText);
        setCopied(true);
      }
    } catch {
      await navigator.clipboard.writeText(result.shareText);
      setCopied(true);
    }
  };

  const avatarOffset = result ? getAvatarOffset(result.score) : 0;
  const leftAnimation = yourGender === 'male' ? maleRun : femaleRun;
  const rightAnimation = partnerGender === 'male' ? maleRun : femaleRun;

  const leftRunnerClass =
    yourGender === 'male'
      ? `${styles.leftRunner} ${styles.leftMaleRunner}`
      : `${styles.leftRunner} ${styles.leftFemaleRunner}`;

  const rightRunnerClass =
    partnerGender === 'male'
      ? `${styles.rightRunner} ${styles.rightMaleRunner}`
      : `${styles.rightRunner} ${styles.rightFemaleRunner}`;

  return (
    <section
      className={styles.loveTool}
      onClick={!musicOn ? toggleMusic : undefined}
    >
      <div className={styles.rainLayer} aria-hidden="true">
        {fallingHearts.map((heart) => (
          <motion.span
            key={heart.id}
            className={styles.rainHeart}
            style={{ left: heart.left, fontSize: heart.size }}
            initial={{ y: -120, opacity: 0, rotate: 0 }}
            animate={{
              y: [0, 180, 360, 560],
              opacity: [0, 1, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {heart.icon}
          </motion.span>
        ))}
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            key={burstKey}
            className={styles.burstLayer}
            aria-hidden="true"
          >
            {burstHearts.map((heart) => (
              <motion.span
                key={`${burstKey}-${heart.id}`}
                initial={{ x: 0, y: 0, scale: 0.2, opacity: 1 }}
                animate={{
                  x: Math.cos((heart.angle * Math.PI) / 180) * heart.distance,
                  y: Math.sin((heart.angle * Math.PI) / 180) * heart.distance,
                  scale: [0.4, 1.2, 0],
                  opacity: [1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
              >
                {heart.icon}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.loveToolInner}>
        <motion.div
          className={styles.formPanel}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className={styles.toolLabel}>Love Score Generator</p>
          <h2>Calculate Your Love Score</h2>
          <p>
            Add two names and get a fun compatibility percentage with animated
            result, vibe breakdown and share-ready message.
          </p>

          <motion.button
            type="button"
            className={styles.musicBtn}
            onClick={(event) => {
              event.stopPropagation();
              toggleMusic();
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            {musicOn ? 'Music On 🔊' : 'Click anywhere to start music 🎵'}
          </motion.button>

          <div className={styles.inputGrid}>
            <div className={styles.formRow}>
              <label className={styles.field}>
                <span>Your Name</span>
                <input
                  type="text"
                  value={yourName}
                  onChange={(event) => setYourName(event.target.value)}
                  placeholder="Example: Rahul"
                />
              </label>

              <label className={styles.field}>
                <span>Select Your Gender</span>
                <select
                  value={yourGender}
                  onChange={(event) =>
                    setYourGender(event.target.value as Gender)
                  }
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>

            <div className={styles.formRow}>
              <label className={styles.field}>
                <span>Partner / Crush Name</span>
                <input
                  type="text"
                  value={partnerName}
                  onChange={(event) => setPartnerName(event.target.value)}
                  placeholder="Example: Priya"
                />
              </label>

              <label className={styles.field}>
                <span>Select Partner Gender</span>
                <select
                  value={partnerGender}
                  onChange={(event) =>
                    setPartnerGender(event.target.value as Gender)
                  }
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </label>
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <motion.button
            className={styles.calculateBtn}
            onClick={(event) => {
              event.stopPropagation();
              handleCalculate();
            }}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.96 }}
          >
            Calculate Love Score ❤️
          </motion.button>

          <p className={styles.disclaimer}>
            For fun and entertainment only. Not a real relationship prediction.
          </p>
        </motion.div>

        <div className={styles.resultPanel}>
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="empty"
                className={styles.emptyResult}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
              >
                <motion.div
                  className={styles.emptyHeart}
                  animate={{ scale: [1, 1.12, 1], rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 1.7, repeat: Infinity }}
                >
                  💘
                </motion.div>
                <h3>Your result will appear here</h3>
                <p>
                  Enter two names and tap calculate to reveal your animated love
                  score.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                className={styles.resultCard}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              >
                <div className={styles.avatarStage}>
                  <motion.div
                    className={styles.avatarRunner}
                    initial={{ x: -180, opacity: 0 }}
                    animate={{ x: avatarOffset, opacity: 1 }}
                    transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={leftRunnerClass}>
                      {leftAnimation ? (
                        <Lottie
                          animationData={leftAnimation}
                          loop
                          className={styles.lottieRunner}
                        />
                      ) : (
                        <span className={styles.avatarFallback}>🏃‍♂️</span>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    className={styles.centerLove}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    ❤️
                  </motion.div>

                  <motion.div
                    className={styles.avatarRunner}
                    initial={{ x: 180, opacity: 0 }}
                    animate={{ x: -avatarOffset, opacity: 1 }}
                    transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={rightRunnerClass}>
                      {rightAnimation ? (
                        <Lottie
                          animationData={rightAnimation}
                          loop
                          className={styles.lottieRunner}
                        />
                      ) : (
                        <span className={styles.avatarFallback}>🏃‍♀️</span>
                      )}
                    </div>
                  </motion.div>
                </div>

                <AnimatedScoreCircle score={result.score} />

                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {result.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  {result.message}
                </motion.p>

                <div className={styles.vibeGrid}>
                  {[
                    ['Communication', result.communication],
                    ['Trust', result.trust],
                    ['Fun Vibe', result.funVibe],
                  ].map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + index * 0.1 }}
                    >
                      <span>{label}</span>
                      <strong>{value}%</strong>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className={styles.shareBtn}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleShare();
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {copied
                    ? 'Copied Result ✅'
                    : 'Share result to your loved ones 💌'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
