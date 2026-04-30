'use client';

import { useEffect, useState } from 'react';
import styles from './QuizFilters.module.css';

type QuizFiltersProps = {
  activeFilter: string;
  onChange: (filter: string) => void;
};

type Category = {
  id: string;
  name: string;
  isActive: boolean;
};

function getApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://localhost:5000';
  return `http://${window.location.hostname}:5000`;
}

export default function QuizFilters({
  activeFilter,
  onChange,
}: QuizFiltersProps) {
  const [filters, setFilters] = useState<string[]>(['All']);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch(`${getApiBaseUrl()}/category/active`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setFilters(['All', ...data.map((item: Category) => item.name)]);
        }
      } catch {
        setFilters(['All']);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className={styles.filters}>
      {filters.map((item) => (
        <button
          type="button"
          className={`${styles.button} ${
            activeFilter === item ? styles.active : ''
          }`}
          key={item}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
