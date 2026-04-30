const walletPointsKey = 'gyaanbucks_wallet_points';
const claimedRewardPrefix = 'gyaanbucks_claimed_reward_';

function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

export function getWalletPoints() {
  if (typeof window === 'undefined') return 0;

  const savedPoints = window.localStorage.getItem(walletPointsKey);
  return savedPoints ? Number(savedPoints) : 0;
}

export function addWalletPoints(pointsToAdd: number) {
  if (typeof window === 'undefined') return 0;

  const currentPoints = getWalletPoints();
  const updatedPoints = currentPoints + pointsToAdd;

  window.localStorage.setItem(walletPointsKey, String(updatedPoints));

  return updatedPoints;
}

export function getClaimKey(quizId: string, attemptNumber: number) {
  return `${claimedRewardPrefix}${quizId}_${getTodayKey()}_${attemptNumber}`;
}

export function hasClaimedQuizReward(quizId: string, attemptNumber: number) {
  if (typeof window === 'undefined') return false;

  return (
    window.localStorage.getItem(getClaimKey(quizId, attemptNumber)) === 'yes'
  );
}

export function markQuizRewardClaimed(quizId: string, attemptNumber: number) {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(getClaimKey(quizId, attemptNumber), 'yes');
}
