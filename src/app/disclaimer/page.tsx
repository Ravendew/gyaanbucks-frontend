export const metadata = {
  title: 'Disclaimer | GyaanBucks',
  description:
    'Read the official disclaimer for GyaanBucks educational quizzes, tools, and learning platform.',
};

export default function DisclaimerPage() {
  return (
    <main
      style={{
        background: '#F7F9FC',
        padding: '120px 20px 80px',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            background: '#ECFDF5',
            color: '#16A34A',
            padding: '8px 18px',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '14px',
            marginBottom: '20px',
          }}
        >
          Legal Information
        </span>

        <h1
          style={{
            fontSize: '42px',
            lineHeight: 1.2,
            color: '#101827',
            marginBottom: '20px',
            fontWeight: 800,
          }}
        >
          Disclaimer
        </h1>

        <p
          style={{
            color: '#6B7280',
            fontSize: '17px',
            lineHeight: 1.9,
            marginBottom: '28px',
          }}
        >
          The information, quizzes, calculators, and educational tools available
          on GyaanBucks are provided for general educational and informational
          purposes only.
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '26px',
              color: '#101827',
              marginBottom: '14px',
              fontWeight: 700,
            }}
          >
            Educational Purpose Only
          </h2>

          <p
            style={{
              color: '#4B5563',
              fontSize: '16px',
              lineHeight: 1.9,
            }}
          >
            GyaanBucks is designed to help users learn through interactive
            quizzes, smart tools, and educational content. While we try to keep
            all information accurate and updated, we do not guarantee the
            completeness, reliability, or accuracy of any content on the
            platform.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '26px',
              color: '#101827',
              marginBottom: '14px',
              fontWeight: 700,
            }}
          >
            No Professional Advice
          </h2>

          <p
            style={{
              color: '#4B5563',
              fontSize: '16px',
              lineHeight: 1.9,
            }}
          >
            The content provided on GyaanBucks should not be considered legal,
            financial, medical, educational, or professional advice. Users
            should verify information independently before making decisions
            based on any content available on this website.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '26px',
              color: '#101827',
              marginBottom: '14px',
              fontWeight: 700,
            }}
          >
            External Links
          </h2>

          <p
            style={{
              color: '#4B5563',
              fontSize: '16px',
              lineHeight: 1.9,
            }}
          >
            Our website may contain links to third-party websites or external
            services. GyaanBucks is not responsible for the content, accuracy,
            policies, or practices of any third-party websites.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '26px',
              color: '#101827',
              marginBottom: '14px',
              fontWeight: 700,
            }}
          >
            Limitation of Liability
          </h2>

          <p
            style={{
              color: '#4B5563',
              fontSize: '16px',
              lineHeight: 1.9,
            }}
          >
            GyaanBucks and its team will not be held liable for any losses,
            damages, or issues arising from the use of our website, tools,
            quizzes, or educational content.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: '26px',
              color: '#101827',
              marginBottom: '14px',
              fontWeight: 700,
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              color: '#4B5563',
              fontSize: '16px',
              lineHeight: 1.9,
            }}
          >
            If you have any questions regarding this Disclaimer, please contact
            us through our Contact page.
          </p>
        </section>

        <div
          style={{
            marginTop: '40px',
            paddingTop: '24px',
            borderTop: '1px solid #E5E7EB',
            color: '#6B7280',
            fontSize: '14px',
          }}
        >
          Last updated: May 2026
        </div>
      </div>
    </main>
  );
}
