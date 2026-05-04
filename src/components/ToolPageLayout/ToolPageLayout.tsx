import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ToolSidebar from '@/components/ToolSidebar/ToolSidebar';
import styles from './ToolPageLayout.module.css';

type ToolPageLayoutProps = {
  hero?: React.ReactNode;
  children: React.ReactNode;
};

export default function ToolPageLayout({
  hero,
  children,
}: ToolPageLayoutProps) {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {hero && <section className={styles.heroFull}>{hero}</section>}

        <div className={styles.container}>
          <section className={styles.content}>{children}</section>
          <ToolSidebar />
        </div>
      </main>

      <Footer />
    </>
  );
}
