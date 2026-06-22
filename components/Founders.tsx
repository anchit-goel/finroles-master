'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './Founders.module.css';

interface Founder {
  id: string;
  name: string;
  role: string;
  description: string;
  linkedin: string;
  email: string;
  imagePlaceholderText: string;
  imageUrl?: string;
}

const FOUNDERS: Founder[] = [
  {
    id: 'founder-1',
    name: 'CA Piyush Bathwal',
    role: 'Co-Founder',
    description: 'Add a short professional bio describing the founder\'s background, previous ventures, expertise, and their mission at Finroles. Typically 2-3 sentences.',
    linkedin: 'https://linkedin.com/in/username1',
    email: 'mailto:piyush@finroles.com',
    imagePlaceholderText: 'F1',
    imageUrl: '/assets/piyush.jpeg',
  },
  {
    id: 'founder-2',
    name: 'CA Ishant Goel',
    role: 'Co-Founder & CEO',
    description: 'Add a short professional bio describing the founder\'s technical background, engineering background, previous projects, and what they build at Finroles.',
    linkedin: 'https://linkedin.com/in/username2',
    email: 'mailto:ishant@finroles.com',
    imagePlaceholderText: 'F2',
  },
];

export default function Founders() {
  const [sectionRef, isVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="founders" className={styles.foundersSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className="label-chip">Leadership</span>
          <h2 className={styles.heading}>Meet the Founders</h2>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {FOUNDERS.map((founder, index) => (
            <div
              key={founder.id}
              className={styles.card}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  {founder.imageUrl ? (
                    <Image 
                      src={founder.imageUrl} 
                      alt={founder.name} 
                      fill
                      sizes="(max-width: 900px) 80px, 120px"
                      className={styles.founderImage} 
                    />
                  ) : (
                    <div className={styles.placeholderImage}>
                      <span>{founder.imagePlaceholderText}</span>
                      <div className={styles.scanline} />
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.info}>
                  <h3 className={styles.name}>{founder.name}</h3>
                  <span className={styles.role}>{founder.role}</span>
                </div>

                <p className={styles.description}>{founder.description}</p>

                <div className={styles.links}>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label="LinkedIn Profile"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.1H5v8.4h3" fill="currentColor" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={founder.email}
                    className={styles.link}
                    aria-label="Email Contact"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor" />
                    </svg>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
