'use client';

import Header from '@/components/Header/Header';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import styles from './page.module.css';

function getApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://localhost:5000';
  return `http://${window.location.hostname}:5000`;
}

function onlyNumbers(value: string) {
  return value.replace(/\D/g, '');
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isEmailLike(value: string) {
  return value.includes('@');
}

function AuthPageContent() {
  const params = useSearchParams();
  const router = useRouter();

  const tab = params.get('tab') || 'login';
  const redirectPath = params.get('redirect') || '/quizzes';

  const [activeTab, setActiveTab] = useState(tab);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    countryCode: '+91',
    email: '',
    loginIdentifier: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  useEffect(() => {
    setActiveTab(tab);
    setMessage('');
  }, [tab]);

  const handleChange = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleMobileChange = (value: string) => {
    handleChange('mobile', onlyNumbers(value));
  };

  const handleLoginIdentifierChange = (value: string) => {
    if (isEmailLike(value)) {
      handleChange('loginIdentifier', value.trim());
      return;
    }

    handleChange('loginIdentifier', onlyNumbers(value));
  };

  const switchTab = (value: string) => {
    setActiveTab(value);
    setMessage('');
    router.push(`/auth?tab=${value}`);
  };

  const handleRegister = async () => {
    setMessage('');

    const cleanName = form.name.trim();
    const cleanMobile = onlyNumbers(form.mobile);
    const cleanEmail = form.email.trim().toLowerCase();

    if (!cleanName) return setMessage('Please enter your name.');
    if (!cleanMobile) return setMessage('Please enter your phone number.');
    if (cleanMobile.length < 10)
      return setMessage('Please enter a valid phone number.');
    if (!cleanEmail) return setMessage('Please enter your email.');
    if (!isValidEmail(cleanEmail))
      return setMessage('Please enter a valid email address.');
    if (!form.password) return setMessage('Please enter password.');
    if (form.password.length < 6)
      return setMessage('Password must be at least 6 characters.');
    if (form.password !== form.confirmPassword)
      return setMessage('Passwords do not match.');
    if (!form.acceptTerms)
      return setMessage('Please accept Terms & Conditions and Privacy Policy.');

    try {
      setLoading(true);

      const res = await fetch(`${getApiBaseUrl()}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          countryCode: form.countryCode,
          mobile: cleanMobile,
          email: cleanEmail,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Registration failed.');
        return;
      }

      setMessage('Registered successfully. Please login now.');
      setForm((prev) => ({
        ...prev,
        loginIdentifier: cleanEmail,
        password: '',
        confirmPassword: '',
        acceptTerms: false,
      }));
      switchTab('login');
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setMessage('');

    const rawIdentifier = form.loginIdentifier.trim();
    const identifier = isEmailLike(rawIdentifier)
      ? rawIdentifier.toLowerCase()
      : onlyNumbers(rawIdentifier);

    if (!identifier) return setMessage('Please enter phone number or email.');
    if (isEmailLike(identifier) && !isValidEmail(identifier))
      return setMessage('Please enter a valid email address.');
    if (!isEmailLike(identifier) && identifier.length < 10)
      return setMessage('Please enter a valid phone number.');
    if (!form.password) return setMessage('Please enter password.');

    try {
      setLoading(true);

      const res = await fetch(`${getApiBaseUrl()}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password: form.password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Login failed.');
        return;
      }

      localStorage.setItem('gyaanbucks_user', JSON.stringify(data.user));

      if (data.token) {
        localStorage.setItem('gyaanbucks_token', data.token);
      }

      router.push(redirectPath);
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.authSection}>
        <div className={styles.card}>
          <div className={styles.brandBox}>
            <span className={styles.badge}>Welcome to GyaanBucks</span>
            <h1>
              {activeTab === 'login' ? 'Login to continue' : 'Create account'}
            </h1>
            <p>
              Play quizzes, earn rewards, track attempts, and manage your wallet
              securely.
            </p>
          </div>

          <div className={styles.tabs}>
            <button
              type="button"
              className={activeTab === 'login' ? styles.active : ''}
              onClick={() => switchTab('login')}
            >
              Login
            </button>

            <button
              type="button"
              className={activeTab === 'register' ? styles.active : ''}
              onClick={() => switchTab('register')}
            >
              Register
            </button>
          </div>

          {message && <div className={styles.message}>{message}</div>}

          {activeTab === 'login' && (
            <div className={styles.form}>
              <label>
                Phone Number or Email <span>*</span>
                <input
                  value={form.loginIdentifier}
                  placeholder="Enter phone number or email"
                  inputMode="email"
                  onChange={(e) => handleLoginIdentifierChange(e.target.value)}
                />
              </label>

              <label>
                Password <span>*</span>
                <input
                  value={form.password}
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => handleChange('password', e.target.value)}
                />
              </label>

              <div className={styles.forgotRow}>
                <Link href="/forgot-password">Forgot Password?</Link>
              </div>

              <button
                type="button"
                className={styles.submitBtn}
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? 'Please wait...' : 'Login'}
              </button>
            </div>
          )}

          {activeTab === 'register' && (
            <div className={styles.form}>
              <label>
                Full Name <span>*</span>
                <input
                  value={form.name}
                  placeholder="Enter your name"
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </label>

              <label>
                Phone Number <span>*</span>
                <div className={styles.phoneRow}>
                  <select
                    value={form.countryCode}
                    onChange={(e) =>
                      handleChange('countryCode', e.target.value)
                    }
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>

                  <input
                    value={form.mobile}
                    placeholder="Phone number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    onChange={(e) => handleMobileChange(e.target.value)}
                  />
                </div>
              </label>

              <label>
                Email <span>*</span>
                <input
                  value={form.email}
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </label>

              <label>
                Password <span>*</span>
                <input
                  value={form.password}
                  type="password"
                  placeholder="Create password"
                  onChange={(e) => handleChange('password', e.target.value)}
                />
              </label>

              <label>
                Confirm Password <span>*</span>
                <input
                  value={form.confirmPassword}
                  type="password"
                  placeholder="Re-enter password"
                  onChange={(e) =>
                    handleChange('confirmPassword', e.target.value)
                  }
                />
              </label>

              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={form.acceptTerms}
                  onChange={(e) =>
                    handleChange('acceptTerms', e.target.checked)
                  }
                />
                <span>
                  I agree to the <Link href="/terms">Terms & Conditions</Link>{' '}
                  and <Link href="/privacy">Privacy Policy</Link>.
                </span>
              </label>

              <button
                type="button"
                className={styles.submitBtn}
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? 'Please wait...' : 'Register'}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={null}>
      <AuthPageContent />
    </Suspense>
  );
}
