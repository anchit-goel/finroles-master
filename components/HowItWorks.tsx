'use client';

import { useInView } from '@/hooks/useInView';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const [sectionRef, isVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="how-it-works" className={styles.howItWorksSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.heading}>Hire in four steps</h2>
        </div>

        <div className={`${styles.stepsWrapper} ${isVisible ? styles.visible : ''}`}>
          {/* Animated connector line */}
          <div className={styles.lineBg}>
            <div className={styles.lineFill} />
          </div>

          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.numberWrapper}>
                <div className={styles.number}>01</div>
              </div>
              <h3 className={styles.stepTitle}>Initial Consultation</h3>
              <p className={styles.stepDescription}>
                A thorough discussion to understand business requirements.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.numberWrapper}>
                <div className={styles.number}>02</div>
              </div>
              <h3 className={styles.stepTitle}>Customized Talent Mapping</h3>
              <p className={styles.stepDescription}>
                Utilizing tailored strategies to identify the right candidates.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.numberWrapper}>
                <div className={styles.number}>03</div>
              </div>
              <h3 className={styles.stepTitle}>Interviews & Assessments</h3>
              <p className={styles.stepDescription}>
                Rigorous evaluation to ensure the best fit for business requirements.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.numberWrapper}>
                <div className={styles.number}>04</div>
              </div>
              <h3 className={styles.stepTitle}>Regular Updates & Feedback</h3>
              <p className={styles.stepDescription}>
                Regular checks with company and candidate to improve alignment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
