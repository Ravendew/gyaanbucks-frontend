'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './PopularCategories.module.css';

type Category = {
  id: string;
  name: string;
  icon: string;
  description?: string;
  isActive: boolean;
};

function getApiBaseUrl() {
  return 'https://gyaanbucks-backend-production.up.railway.app';
}

function getFallbackCategoryDescription(name: string) {
  const value = name.toLowerCase();

  if (value.includes('science'))
    return 'Explore facts, discoveries, and smart questions.';
  if (value.includes('movie'))
    return 'Test your cinema, actors, and entertainment knowledge.';
  if (value.includes('sport'))
    return 'Play sports trivia and challenge your game knowledge.';
  if (value.includes('current'))
    return 'Stay updated with daily news and world events.';
  if (value.includes('general') || value.includes('gk'))
    return 'Improve your general knowledge with quick quizzes.';
  if (value.includes('tech'))
    return 'Answer technology, apps, and digital world questions.';
  if (value.includes('job'))
    return 'Practice useful questions for career and exams.';
  if (value.includes('history'))
    return 'Learn important events, leaders, and timelines.';

  return 'Play topic-based quizzes and earn reward points.';
}

export default function PopularCategories() {
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

  const topCategories = categories.slice(0, 4);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.badge}>Explore Topics</span>
            <h2 className={styles.title}>Popular Quiz Categories</h2>
            <p className={styles.subtitle}>
              Pick a category, start a quiz, and collect points while learning.
            </p>
          </div>

          <Link href="/categories" className={styles.viewAll}>
            View All →
          </Link>
        </div>

        <div className={styles.grid}>
          {topCategories.map((item) => (
            <Link
              href={`/quizzes?category=${encodeURIComponent(item.name)}`}
              className={styles.card}
              key={item.id}
            >
              <div className={styles.cardTop}>
                <div className={styles.icon}>{item.icon || '📚'}</div>
                <span className={styles.playTag}>Play Now</span>
              </div>

              <h3 className={styles.cardTitle}>{item.name}</h3>

              <p className={styles.description}>
                {item.description?.trim() ||
                  getFallbackCategoryDescription(item.name)}
              </p>

              <div className={styles.cardFooter}>
                <span>Quizzes Available</span>
                <strong>Explore →</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
