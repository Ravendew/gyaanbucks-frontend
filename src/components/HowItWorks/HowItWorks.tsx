import styles from './HowItWorks.module.css';

const steps = [
  {
    step: '1',
    icon: '📝',
    title: 'Play Quiz',
    text: 'Choose a quiz and answer questions correctly.',
  },
  {
    step: '2',
    icon: '🪙',
    title: 'Earn Points',
    text: 'Earn points for every valid quiz completion.',
  },
  {
    step: '3',
    icon: '💰',
    title: 'Withdraw Cash',
    text: 'Convert eligible points into real cash withdrawals.',
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title">How GyaanBucks Works</h2>

        <div className={styles.grid}>
          {steps.map((item) => (
            <div className={styles.card} key={item.step}>
              <div className={styles.step}>{item.step}</div>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
