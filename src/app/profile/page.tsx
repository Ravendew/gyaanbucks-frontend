'use client';

import Header from '@/components/Header/Header';
import { useEffect, useMemo, useState } from 'react';
import styles from './page.module.css';

function getApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://localhost:5000';
  return `http://${window.location.hostname}:5000`;
}

type RedeemSetting = {
  minimumPoints: number;
  allowedDayOfMonth: number;
};

function getDayText(day: number) {
  if (day >= 11 && day <= 13) return `${day}th`;

  const lastDigit = day % 10;

  if (lastDigit === 1) return `${day}st`;
  if (lastDigit === 2) return `${day}nd`;
  if (lastDigit === 3) return `${day}rd`;

  return `${day}th`;
}

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [redeems, setRedeems] = useState<any[]>([]);
  const [form, setForm] = useState<any>({});
  const [redeemPoints, setRedeemPoints] = useState('');
  const [message, setMessage] = useState('');
  const [redeemSetting, setRedeemSetting] = useState<RedeemSetting>({
    minimumPoints: 5000,
    allowedDayOfMonth: 5,
  });

  const today = new Date();
  const isRedeemDay = today.getDate() === redeemSetting.allowedDayOfMonth;
  const redeemDayText = getDayText(redeemSetting.allowedDayOfMonth);

  const redeemAmount = useMemo(() => {
    const points = Number(redeemPoints);
    if (!points || points <= 0) return 0;
    return points / 100;
  }, [redeemPoints]);

  const pendingRedeems = redeems.filter((item) => item.status === 'PENDING');
  const approvedRedeems = redeems.filter((item) => item.status === 'APPROVED');

  const fetchRedeemSetting = async () => {
    try {
      const res = await fetch(`${getApiBaseUrl()}/redeem-setting`);
      const data = await res.json();

      if (res.ok && data) {
        setRedeemSetting({
          minimumPoints: Number(data.minimumPoints || 5000),
          allowedDayOfMonth: Number(data.allowedDayOfMonth || 5),
        });
      }
    } catch {
      // Keep default settings if API fails
    }
  };

  const fetchProfile = async () => {
    const saved = localStorage.getItem('gyaanbucks_user');
    if (!saved) return;

    const u = JSON.parse(saved);
    const res = await fetch(`${getApiBaseUrl()}/users/profile/${u.id}`);
    const data = await res.json();

    setUser(data);
    setForm(data);
  };

  const fetchRedeems = async () => {
    const saved = localStorage.getItem('gyaanbucks_user');
    if (!saved) return;

    const u = JSON.parse(saved);
    const res = await fetch(`${getApiBaseUrl()}/redeem/user/${u.id}`);
    const data = await res.json();

    setRedeems(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchRedeemSetting();
    fetchProfile();
    fetchRedeems();
  }, []);

  const handleChange = (key: string, value: string) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  const savePayment = async () => {
    const saved = localStorage.getItem('gyaanbucks_user');
    if (!saved) return;

    const u = JSON.parse(saved);

    await fetch(`${getApiBaseUrl()}/users/payment-details/${u.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setMessage('Payment details updated successfully.');
    fetchProfile();
  };

  const submitRedeem = async () => {
    setMessage('');

    const saved = localStorage.getItem('gyaanbucks_user');
    if (!saved) return;

    const u = JSON.parse(saved);
    const points = Number(redeemPoints);

    if (!isRedeemDay) {
      setMessage(
        `Redeem is available only on ${redeemDayText} of every month.`,
      );
      return;
    }

    if (!points || points < redeemSetting.minimumPoints) {
      setMessage(
        `Minimum redeem limit is ${redeemSetting.minimumPoints} points.`,
      );
      return;
    }

    if (user.wallet < points) {
      setMessage('You do not have enough wallet points.');
      return;
    }

    try {
      const res = await fetch(`${getApiBaseUrl()}/redeem/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: u.id, points }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Redeem request failed.');
        return;
      }

      setMessage('Redeem request submitted successfully.');
      setRedeemPoints('');
      fetchProfile();
      fetchRedeems();
    } catch {
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (!user) return null;

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.card}>
            <span className={styles.badge}>Profile</span>
            <h1 className={styles.title}>My Account</h1>

            {message && <div className={styles.message}>{message}</div>}

            <div className={styles.profileGrid}>
              <div className={styles.profileBox}>
                <span>Name</span>
                <strong>{user.name}</strong>
              </div>

              <div className={styles.profileBox}>
                <span>Mobile</span>
                <strong>{user.mobile}</strong>
              </div>

              <div className={styles.profileBox}>
                <span>Email</span>
                <strong>{user.email || '-'}</strong>
              </div>
            </div>

            <div className={styles.walletBox}>
              <span>Wallet Balance</span>
              <strong>{user.wallet} Points</strong>
            </div>

            <div className={styles.redeemHero}>
              <div>
                <span className={styles.redeemBadge}>
                  {isRedeemDay ? 'Redeem Open Today' : 'Redeem Opens Monthly'}
                </span>
                <h3>Redeem Your Points</h3>
                <p>
                  Minimum redeem limit is{' '}
                  <strong>{redeemSetting.minimumPoints} points</strong>.
                  Requests are accepted only on the{' '}
                  <strong>{redeemDayText} of every month</strong>.
                </p>
              </div>

              <div className={styles.redeemStats}>
                <div>
                  <span>Pending</span>
                  <strong>{pendingRedeems.length}</strong>
                </div>
                <div>
                  <span>Approved</span>
                  <strong>{approvedRedeems.length}</strong>
                </div>
              </div>
            </div>

            <div className={styles.redeemBox}>
              <div className={styles.redeemInputRow}>
                <div className={styles.redeemInputWrap}>
                  <label>Points to redeem</label>
                  <input
                    placeholder="Enter points"
                    value={redeemPoints}
                    onChange={(e) => setRedeemPoints(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <div className={styles.amountPreview}>
                  <span>Estimated Amount</span>
                  <strong>₹{redeemAmount}</strong>
                </div>
              </div>

              <button
                className={styles.primaryBtn}
                onClick={submitRedeem}
                disabled={
                  !isRedeemDay ||
                  Number(redeemPoints) < redeemSetting.minimumPoints
                }
              >
                {isRedeemDay
                  ? 'Submit Redeem Request'
                  : `Available on ${redeemDayText}`}
              </button>

              <p className={styles.note}>
                Your payment details must be correct before admin approval.
              </p>
            </div>

            <div className={styles.rulesBox}>
              <h3>Payment Details</h3>

              <input
                placeholder="UPI ID"
                value={form.upiId || ''}
                onChange={(e) => handleChange('upiId', e.target.value)}
                className={styles.input}
              />
              <input
                placeholder="Google Pay Number"
                value={form.googlePay || ''}
                onChange={(e) => handleChange('googlePay', e.target.value)}
                className={styles.input}
              />
              <input
                placeholder="PhonePe Number"
                value={form.phonePe || ''}
                onChange={(e) => handleChange('phonePe', e.target.value)}
                className={styles.input}
              />
              <input
                placeholder="Account Holder Name"
                value={form.bankHolder || ''}
                onChange={(e) => handleChange('bankHolder', e.target.value)}
                className={styles.input}
              />
              <input
                placeholder="Bank Name"
                value={form.bankName || ''}
                onChange={(e) => handleChange('bankName', e.target.value)}
                className={styles.input}
              />
              <input
                placeholder="Account Number"
                value={form.accountNo || ''}
                onChange={(e) => handleChange('accountNo', e.target.value)}
                className={styles.input}
              />
              <input
                placeholder="IFSC Code"
                value={form.ifscCode || ''}
                onChange={(e) => handleChange('ifscCode', e.target.value)}
                className={styles.input}
              />

              <button className={styles.primaryBtn} onClick={savePayment}>
                Save Payment Details
              </button>
            </div>

            <div className={styles.rulesBox}>
              <h3>My Redeem Requests</h3>

              {redeems.length === 0 && <p>No redeem requests yet.</p>}

              {redeems.map((r) => (
                <div key={r.id} className={styles.redeemHistoryCard}>
                  <div>
                    <strong>{r.points} Points</strong>
                    <span>₹{r.amount}</span>
                  </div>

                  <span
                    className={`${styles.status} ${styles[r.status.toLowerCase()]}`}
                  >
                    {r.status}
                  </span>

                  {r.adminNote && <p>{r.adminNote}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
