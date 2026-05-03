import styles from './HowItWorks.module.css';

const steps = [
  {
    step: '1',
    icon: '📝',
    title: 'Play Quiz',
    text: 'Choose a quiz and answer questions to test your knowledge.',
  },
  {
    step: '2',
    icon: '🎯',
    title: 'Earn Points',
    text: 'Get points for correct answers and improve your learning progress.',
  },
  {
    step: '3',
    icon: '📊',
    title: 'Track Progress',
    text: 'Monitor your performance, accuracy, and category-wise improvement.',
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="sectionTitle">How GyaanBucks Works</h2>

        <div className={styles.grid}>
          {steps.map((item) => (
            <div className={styles.card} key={item.step}>
              <span className={styles.step}>{item.step}</span>
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
