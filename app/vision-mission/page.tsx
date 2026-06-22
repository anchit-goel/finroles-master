import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './VisionMission.module.css';

export const metadata = {
  title: 'Vision & Mission | Finroles',
  description: 'Finroles guiding stars, core values, and vision for bridging exceptional talent with ambitious organizations.',
};

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <span className="label-chip">Our Purpose</span>
            <h1 className={styles.title}>Vision & Mission</h1>
            <p className={styles.subtitle}>Our Guiding Stars</p>
          </div>
        </section>

        {/* Guiding Statements Grid */}
        <section className={styles.statementsSection}>
          <div className={styles.container}>
            <div className={styles.statementsGrid}>
              <div className={styles.visionCard}>
                <span className={styles.cardLabel}>The Vision</span>
                <h2 className={styles.statementText}>
                  Bridge exceptional talent with ambitious organizations.
                </h2>
              </div>
              
              <div className={styles.missionCard}>
                <span className={styles.cardLabel}>The Mission</span>
                <div className={styles.missionList}>
                  <div className={styles.missionItem}>
                    <span className={styles.bullet}>/</span>
                    <p>Lead hiring excellence across finance, manufacturing, and non-tech sectors.</p>
                  </div>
                  <div className={styles.missionItem}>
                    <span className={styles.bullet}>/</span>
                    <p>Build recruitment relationships founded on trust, depth, and accountability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className={styles.pillarsSection}>
          <div className={styles.container}>
            <div className={styles.pillarsHeader}>
              <span className="label-chip">Core Pillars</span>
              <h2 className={styles.pillarsTitle}>How We Execute</h2>
            </div>

            <div className={styles.pillarsGrid}>
              {/* Pillar 01 */}
              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>01</div>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarName}>Trust & Transparency</h3>
                  <p className={styles.pillarDescription}>
                    Strengthening relationships with recruiters and candidates.
                  </p>
                </div>
              </div>

              {/* Pillar 02 */}
              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>02</div>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarName}>Strategic HR Expertise</h3>
                  <p className={styles.pillarDescription}>
                    Staying ahead of trends to drive hiring success.
                  </p>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>03</div>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarName}>Culture-Fit Hiring</h3>
                  <p className={styles.pillarDescription}>
                    Connecting businesses with candidates who share their drive and values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
