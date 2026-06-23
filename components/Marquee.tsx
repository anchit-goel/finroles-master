import Image from 'next/image';
import styles from './Marquee.module.css';

const LOGOS = [
  { src: '/CKBirlaGroup.png',     alt: 'CK Birla Group',    large: true },
  { src: '/cofiser.png',          alt: 'Cofiser',            large: true },
  { src: '/dot-key.png',          alt: 'Dot & Key',          large: true },
  { src: '/ekvity.png',           alt: 'Ekvity',             large: true },
  { src: '/minimines-bg.png',     alt: 'Minimines',          large: false },
  { src: '/yourgrowthlabs.webp',  alt: 'Your Growth Labs',   large: false },
];

export default function Marquee() {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by teams at</p>
        <div className={styles.grid}>
          {LOGOS.map((logo) => (
            <div
              key={logo.src}
              className={`${styles.logoCell} ${logo.large ? styles.logoCellLarge : ''}`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.large ? 400 : 260}
                height={logo.large ? 160 : 100}
                className={`${styles.logoImg} ${logo.large ? styles.logoImgLarge : ''}`}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
