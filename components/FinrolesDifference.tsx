'use client';

import { useInView } from '@/hooks/useInView';
import styles from './FinrolesDifference.module.css';

interface DifferenceItem {
  id: string;
  title: string;
  description: string;
}

const DIFFERENCES: DifferenceItem[] = [
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition',
    description:
      'Build fast, flexible pipelines that scale with your hiring needs and connect you to top finance talent.',
  },
  {
    id: 'strategic-guidance',
    title: 'Strategic Guidance',
    description:
      'Provide strategic, hands-on guidance that aligns with your business goals and adapts to your culture.',
  },
  {
    id: 'verification-trust',
    title: 'Verification & Trust',
    description:
      'Run thorough, structured verification that protects your hiring decisions and reduces risk at every stage.',
  },
];

export default function FinrolesDifference() {
  const [sectionRef, isVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="finroles-difference" className={styles.differenceSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.heading}>The Finroles Difference</h2>
        </div>

        <div className={`${styles.list} ${isVisible ? styles.visible : ''}`}>
          {DIFFERENCES.map((item, index) => (
            <div
              key={item.id}
              className={styles.item}
              style={{ '--index': index } as React.CSSProperties}
            >
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
