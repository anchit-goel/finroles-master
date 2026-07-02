'use client';

import Image from 'next/image';
import styles from './Marquee.module.css';

const LOGOS = [
  { src: '/CKBirlaGroup.png',     alt: 'CK Birla Group' },
  { src: '/cofiser.png',          alt: 'Cofiser' },
  { src: '/dot-key.png',          alt: 'Dot & Key' },
  { src: '/ekvity.png',           alt: 'Ekvity' },
  { src: '/minimines.png',        alt: 'Minimines' },
  { src: '/yourgrowthlabs.webp',  alt: 'Your Growth Labs' },
  { src: '/8i.jpeg',              alt: '8i Ventures' },
  { src: '/guarsteel.jpeg',       alt: 'Guar Steel' },
  { src: '/kodo.png',             alt: 'Kodo' },
  { src: '/zinc.jpeg',            alt: 'Zinc' },
];

export default function Marquee() {
  // Repeat the logos list to ensure seamless infinite scroll coverage
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by teams at</p>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`${logo.src}-${idx}`}
                className={styles.logoCell}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 220px, 260px"
                    className={styles.logoImg}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
