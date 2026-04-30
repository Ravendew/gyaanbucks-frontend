import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const contactCards = [
  {
    icon: '📧',
    title: 'Email Support',
    text: 'For support, redeem queries, account issues, and general help.',
    value: 'support@gyaanbucks.com',
  },
  {
    icon: '⏱️',
    title: 'Response Time',
    text: 'We usually respond to important support requests as soon as possible.',
    value: '24 - 48 Hours',
  },
  {
    icon: '🎁',
    title: 'Redeem Help',
    text: 'Facing issue with redeem request or approval status?',
    value: 'Contact Support',
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.badge}>Contact GyaanBucks</span>

                <h1 className={styles.title}>
                  Need help? We are here to support you.
                </h1>

                <p className={styles.description}>
                  Contact us for quiz issues, wallet points, redeem requests,
                  account support, or general questions about GyaanBucks.
                </p>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.cardIcon}>💬</div>
                <h2>Support Center</h2>
                <p>
                  Share your issue clearly with your registered mobile number or
                  email so our team can check faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactGrid}>
              {contactCards.map((item) => (
                <div className={styles.contactCard} key={item.title}>
                  <div className={styles.iconBox}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className="container">
            <div className={styles.formCard}>
              <div className={styles.formContent}>
                <span className={styles.badge}>Send Message</span>
                <h2>Tell us how we can help</h2>
                <p>
                  Fill the form below with your issue details. This is a static
                  contact form UI now. Later we can connect it to backend email
                  or admin support tickets.
                </p>
              </div>

              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Enter your name" />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Example: Redeem request issue"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message"
                  />
                </div>

                <button type="button" className={styles.submitButton}>
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
