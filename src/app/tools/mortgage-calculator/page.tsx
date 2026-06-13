import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MortgageCalculatorClient from './MortgageCalculatorClient';
import styles from './page.module.css';

const pageUrl = 'https://gyaanbucks.com/tools/mortgage-calculator';

export const metadata: Metadata = {
  title: 'Mortgage Calculator - Calculate Monthly Home Loan EMI Online',
  description:
    'Use this free mortgage calculator to estimate monthly EMI, total interest, total repayment, down payment and yearly home loan breakdown.',
  keywords: [
    'mortgage calculator',
    'home loan calculator',
    'monthly mortgage calculator',
    'home loan emi calculator',
    'loan repayment calculator',
    'mortgage payment calculator',
    'property loan calculator',
    'home loan interest calculator',
    'emi calculator',
    'loan calculator',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Mortgage Calculator - Calculate Monthly Home Loan EMI Online',
    description:
      'Estimate monthly mortgage EMI, total interest and total repayment amount with this free mortgage calculator.',
    url: pageUrl,
    siteName: 'GyaanBucks',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Calculator - Calculate Monthly Home Loan EMI Online',
    description:
      'Free mortgage calculator for monthly EMI, interest and repayment planning.',
    images: ['/og-image.png'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a mortgage calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mortgage calculator estimates monthly home loan payments based on property price, down payment, interest rate and loan tenure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is monthly mortgage EMI calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mortgage EMI is calculated using the loan amount, monthly interest rate and total number of monthly payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator include property tax and insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This calculator focuses mainly on principal and interest. Property tax, insurance, processing fees and other charges may vary by lender and location.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this calculator for Indian home loans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use this mortgage calculator for Indian home loan planning by entering values in rupees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I increase the down payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Increasing the down payment reduces the loan amount, which can reduce monthly EMI and total interest paid.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://gyaanbucks.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tools',
      item: 'https://gyaanbucks.com/tools',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Mortgage Calculator',
      item: pageUrl,
    },
  ],
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <Script
          id="mortgage-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="mortgage-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>🏠 Financial Calculator</span>

            <h1>Mortgage Calculator</h1>

            <p>
              Calculate your estimated monthly mortgage EMI, total interest,
              total repayment and yearly payment breakdown before planning your
              home loan.
            </p>

            <div className={styles.heroLinks}>
              <Link href="/tools">All Calculators</Link>
              <Link href="/tools/percentage-calculator">
                Percentage Calculator
              </Link>
              <Link href="/tools/age-calculator">Age Calculator</Link>
              <Link href="/tools/school-admission-age-calculator">
                School Admission Age Calculator
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.calculatorCard}>
          <MortgageCalculatorClient />
        </section>

        <section className={styles.content}>
          <h2>What is a Mortgage Calculator?</h2>

          <p>
            A mortgage calculator is an online tool that helps you estimate how
            much you may need to pay every month for a home loan. It uses
            details such as property price, down payment, loan amount, interest
            rate and loan tenure to calculate an estimated monthly mortgage
            payment.
          </p>

          <p>
            Buying a house is one of the biggest financial decisions for many
            families. Before selecting a property or applying for a loan, it is
            important to understand the monthly commitment clearly. A mortgage
            calculator gives you a quick idea of whether the loan amount feels
            comfortable for your budget.
          </p>

          <h2>How This Mortgage Calculator Works</h2>

          <p>
            This calculator takes your property price and down payment first.
            The remaining amount becomes the estimated loan amount. Then it
            applies the interest rate and loan tenure to calculate monthly EMI,
            total interest and total repayment.
          </p>

          <p>
            For example, if the property price is ₹60,00,000 and your down
            payment is ₹10,00,000, the loan amount becomes ₹50,00,000. The
            calculator then uses the selected interest rate and loan tenure to
            estimate the monthly payment.
          </p>

          <h2>Mortgage EMI Formula</h2>

          <p>
            Mortgage EMI is generally calculated using the standard EMI formula:
            EMI = P × R × (1 + R)^N / ((1 + R)^N - 1). Here, P is the principal
            loan amount, R is the monthly interest rate, and N is the total
            number of monthly payments.
          </p>

          <p>
            You do not need to calculate this manually. Enter the values in the
            calculator above and it will instantly show the estimated monthly
            EMI, total interest and total repayment amount.
          </p>

          <h2>Why Down Payment Matters</h2>

          <p>
            Down payment has a direct impact on your home loan. A higher down
            payment reduces the loan amount. When the loan amount becomes
            smaller, the monthly EMI and total interest usually reduce.
          </p>

          <p>
            Many home buyers focus only on property price and monthly EMI, but
            down payment planning is equally important. If you can increase your
            down payment without hurting emergency savings, your long-term loan
            cost may become easier to manage.
          </p>

          <h2>Loan Tenure and Interest Cost</h2>

          <p>
            Loan tenure is another important factor. A longer tenure may reduce
            your monthly EMI, but it can increase total interest paid over the
            life of the loan. A shorter tenure may increase EMI, but it can save
            interest.
          </p>

          <p>
            This is why you should try different combinations. Change the loan
            tenure from 20 years to 15 years or 25 years and observe how the EMI
            and total interest change. This simple comparison can help you make
            a better repayment decision.
          </p>

          <h2>Who Should Use This Calculator?</h2>

          <p>
            This mortgage calculator is useful for first-time home buyers,
            families planning to purchase a flat, people comparing two property
            options, and anyone trying to understand the real cost of a home
            loan. It is also useful for those who want to know how interest rate
            changes can affect monthly payments.
          </p>

          <p>
            If you are planning a house purchase in India, you can use this
            calculator by entering values in rupees. If you are outside India,
            the logic still works, but the displayed currency symbol is
            currently shown as rupees for GyaanBucks users.
          </p>

          <h2>Common Mistakes While Planning a Mortgage</h2>

          <ul className={styles.list}>
            <li>Checking only EMI and ignoring total interest.</li>
            <li>Choosing a very long tenure without comparing total cost.</li>
            <li>Forgetting processing fees, insurance and taxes.</li>
            <li>Using all savings for down payment without emergency funds.</li>
            <li>Not comparing different interest rates before applying.</li>
          </ul>

          <h2>Mortgage Calculator vs EMI Calculator</h2>

          <p>
            A mortgage calculator is mainly designed for home loan planning. It
            considers property price, down payment and loan amount. An EMI
            calculator is more general and can be used for personal loans, car
            loans, education loans or business loans.
          </p>

          <p>
            For a home purchase, this mortgage calculator gives a more useful
            view because down payment is part of the calculation. For other
            types of loans, a dedicated EMI or loan calculator may be better.
          </p>

          <h2>Related Financial Calculators</h2>

          <div className={styles.links}>
            <Link href="/tools/mortgage-calculator">Mortgage Calculator</Link>
            <Link href="/tools">Loan Calculator</Link>
            <Link href="/tools">EMI Calculator</Link>
            <Link href="/tools">Interest Calculator</Link>
            <Link href="/tools">Compound Interest Calculator</Link>
            <Link href="/tools">Investment Calculator</Link>
            <Link href="/tools/percentage-calculator">
              Percentage Calculator
            </Link>
            <Link href="/tools/age-calculator">Age Calculator</Link>
            <Link href="/tools/age-calculator/date-difference-calculator">
              Date Difference Calculator
            </Link>
            <Link href="/tools/age-calculator/days-until-calculator">
              Days Until Calculator
            </Link>
            <Link href="/tools/school-admission-age-calculator">
              School Admission Age Calculator
            </Link>
            <Link href="/tools/love-calculator">Love Calculator</Link>
          </div>

          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqList}>
            <div>
              <h3>What is a mortgage calculator?</h3>
              <p>
                A mortgage calculator estimates monthly home loan payments based
                on property price, down payment, interest rate and loan tenure.
              </p>
            </div>

            <div>
              <h3>How is monthly mortgage EMI calculated?</h3>
              <p>
                Monthly EMI is calculated using loan principal, monthly interest
                rate and total number of monthly payments.
              </p>
            </div>

            <div>
              <h3>Does this calculator include taxes and insurance?</h3>
              <p>
                No. This calculator mainly estimates principal and interest.
                Taxes, insurance and other lender charges can vary.
              </p>
            </div>

            <div>
              <h3>Can I use this calculator for Indian home loans?</h3>
              <p>
                Yes. Enter your values in rupees and use it for basic Indian
                home loan planning.
              </p>
            </div>

            <div>
              <h3>What happens if I increase down payment?</h3>
              <p>
                A higher down payment reduces the loan amount, which may reduce
                monthly EMI and total interest.
              </p>
            </div>

            <div>
              <h3>Is longer loan tenure better?</h3>
              <p>
                Longer tenure can reduce monthly EMI, but total interest may
                increase. Compare both EMI and total repayment before deciding.
              </p>
            </div>

            <div>
              <h3>Is this result final bank approval?</h3>
              <p>
                No. This is an estimate. Final bank approval depends on credit
                score, income, documents, property value and lender rules.
              </p>
            </div>

            <div>
              <h3>Can I compare different loan options?</h3>
              <p>
                Yes. Change interest rate, down payment and tenure to compare
                different mortgage scenarios.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
