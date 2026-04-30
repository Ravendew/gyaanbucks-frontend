type FeedbackType = 'correct' | 'wrong' | 'tap';

let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;

  const AudioContextClass =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;

  if (!AudioContextClass) return null;

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  return audioContext;
}

function playTone(frequency: number, duration: number, volume = 0.06) {
  const context = getAudioContext();

  if (!context) return;

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;

  gainNode.gain.value = volume;

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.start();

  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    context.currentTime + duration,
  );

  oscillator.stop(context.currentTime + duration);
}

function vibrate(pattern: number | number[]) {
  if (typeof window === 'undefined') return;

  if ('vibrate' in navigator) {
    navigator.vibrate(pattern);
  }
}

export function playQuizFeedback(type: FeedbackType) {
  if (type === 'correct') {
    vibrate(35);
    playTone(720, 0.08, 0.055);

    window.setTimeout(() => {
      playTone(920, 0.09, 0.05);
    }, 80);

    return;
  }

  if (type === 'wrong') {
    vibrate([40, 45, 40]);
    playTone(220, 0.12, 0.055);

    window.setTimeout(() => {
      playTone(160, 0.12, 0.045);
    }, 90);

    return;
  }

  vibrate(18);
  playTone(480, 0.045, 0.035);
}
