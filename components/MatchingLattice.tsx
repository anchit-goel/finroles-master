import styles from './MatchingLattice.module.css';
export default function MatchingLattice() {
  const nodes = [
    { top: '16%', left: '18%', size: '1.1rem', delay: '0s' },
    { top: '24%', left: '72%', size: '0.8rem', delay: '0.8s' },
    { top: '44%', left: '30%', size: '1.4rem', delay: '1.4s' },
    { top: '58%', left: '82%', size: '0.9rem', delay: '0.4s' },
    { top: '72%', left: '22%', size: '1rem', delay: '1.1s' },
    { top: '78%', left: '62%', size: '1.25rem', delay: '1.9s' },
  ];

  return (
    <div className={styles.latticeCanvas} aria-hidden="true">
      <span className={styles.glowPrimary} />
      <span className={styles.glowSecondary} />
      <span className={styles.grid} />
      {nodes.map((node) => (
        <span
          key={`${node.top}-${node.left}`}
          className={styles.node}
          style={{
            top: node.top,
            left: node.left,
            width: node.size,
            height: node.size,
            animationDelay: node.delay,
          }}
        />
      ))}
    </div>
  );
}
