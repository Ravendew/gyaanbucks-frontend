import styles from './StatsSection.module.css';

const stats = [
  { value: '25K+', label: 'Registered Users' },
  { value: '1.2L+', label: 'Quizzes Played' },
  { value: '8K+', label: 'Winners' },
  { value: '₹5L+', label: 'Paid Out' },
];

export default function StatsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title">Trusted by Smart Earners</h2>

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
