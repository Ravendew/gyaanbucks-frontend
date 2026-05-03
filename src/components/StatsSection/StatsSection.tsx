import styles from './StatsSection.module.css';

const stats = [
  { value: '25K+', label: 'Learners Registered' },
  { value: '1.2L+', label: 'Quizzes Practiced' },
  { value: '8K+', label: 'Daily Practice Users' },
  { value: '50+', label: 'Quiz Categories' },
];

export default function StatsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title">Trusted by Active Learners</h2>

        <div className={styles.grid}>
          {stats.map((item) => (
            <div className={styles.card} key={item.label}>
              <h3 className={styles.value}>{item.value}</h3>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
