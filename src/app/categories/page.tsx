'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

type Category = {
  id: string;
  name: string;
  icon: string;
  description?: string;
};

function getApiBaseUrl() {
  return 'https://gyaanbucks-backend-production.up.railway.app';
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${getApiBaseUrl()}/category/active`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setCategories(data);
        }
      } catch {
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Explore Topics</span>
            <h1 className={styles.title}>All Quiz Categories</h1>
            <p className={styles.subtitle}>
              Choose a category, play valid quizzes, complete questions within
              time, and collect reward points.
            </p>
          </div>
        </section>

        <section className={styles.categoriesSection}>
          <div className="container">
            <div className={styles.grid}>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/quizzes?category=${encodeURIComponent(cat.name)}`}
                  className={styles.card}
                >
                  <div className={styles.icon}>{cat.icon || '📚'}</div>

                  <div>
                    <h3 className={styles.cardTitle}>{cat.name}</h3>
                    <p className={styles.cardText}>
                      {cat.description?.trim() || 'View available quizzes →'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
