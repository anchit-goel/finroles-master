const partners = [
  { name: 'Zinc',                 src: '/assets/zinc.jpg' },
  { name: 'Guar Steel',           src: '/assets/guarsteel.jpg' },
  { name: 'BHM',                  src: '/assets/bhmh.jpg' },
  { name: 'Asset Management Co.', src: '/assets/asset.png' },
  { name: 'Capital',              src: '/assets/capital.jpg' },
  { name: 'MiniOO Mines',         src: '/assets/minomines.png' },
  { name: '8i',                   src: '/assets/8i.jpg' },
  { name: 'Kodo',                 src: '/assets/kodo.png' },
];

export function PartnerLogos() {
  return (
    <section className="partner-logos-section">
      <div className="partner-logos-inner">
        {/* Section label — matches site-wide pattern */}
        <span className="text-xs font-semibold tracking-widest text-accent uppercase font-mono">
          Companies We&apos;ve Worked With
        </span>

        {/* Logo strip */}
        <div className="partner-logos-strip">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo-slot">
              {/* logo: {partner.name} */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                width={140}
                height={56}
                className="partner-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
