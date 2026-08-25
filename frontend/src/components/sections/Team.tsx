import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from '../icons/Icons';
import { Eyebrow } from '../ui/Eyebrow';
import { TEAM_MEMBERS } from '../../lib/constants';
import { smoothScrollTo } from '../../lib/scroll';

export function Team() {
  const [eyebrowRevealed, setEyebrowRevealed] = useState(false);
  const [h2Revealed, setH2Revealed] = useState(false);
  const [gridRevealed, setGridRevealed] = useState(false);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const eyebrowEl = eyebrowRef.current;
    const h2El = h2Ref.current;
    const gridEl = gridRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === eyebrowEl) setEyebrowRevealed(true);
            if (entry.target === h2El) setH2Revealed(true);
            if (entry.target === gridEl) setGridRevealed(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (eyebrowEl) obs.observe(eyebrowEl);
    if (h2El) obs.observe(h2El);
    if (gridEl) obs.observe(gridEl);

    return () => obs.disconnect();
  }, []);

  return (
    <section id="team" className="team">
      <div className="shell team__inner">
        <div
          className={`team__eyebrow ${eyebrowRevealed ? 'revealed' : ''}`}
          id="teamEyebrow"
          ref={eyebrowRef}
        >
          <Eyebrow label="Our Team" tone="dark" />
        </div>

        <div className="team__header" ref={h2Ref}>
          <div className="team__h2-wrap">
            <h2 className="team__h2">
              <span className="line-wrap">
                <span
                  className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: '120ms' }}
                >
                  The brains behind Web4Go
                </span>
              </span>
            </h2>
          </div>

          <div className="team__intro">
            <p className="team__desc">
              Bertemu dengan para ahli berdedikasi tinggi yang siap mengawal kesuksesan dan
              pertumbuhan aset digital Anda.
            </p>
            <div className="team__agency-badge">
              <span className="team__badge-dot" />
              <span>Web4Go Agency — Collaborative Excellence</span>
            </div>
          </div>
        </div>

        <ul className="team__grid" id="teamGrid" ref={gridRef}>
          {TEAM_MEMBERS.map((member, i) => (
            <li
              key={member.name}
              className={`team__card-wrap ${gridRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <article className="team-card">
                <div className="team-card__media">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className={`team-card__img team-card__img--${member.name.toLowerCase()}`}
                    loading="lazy"
                  />
                  <div className="team-card__badge">{member.specialty}</div>
                </div>

                <div className="team-card__content">
                  <div className="team-card__header">
                    <h3 className="team-card__name">{member.name}</h3>
                    <div className="team-card__role">{member.role}</div>
                  </div>

                  <p className="team-card__quote">{member.quote}</p>

                  <button
                    type="button"
                    className="team-card__btn"
                    onClick={() => smoothScrollTo('works')}
                  >
                    <span>View Portfolio</span>
                    <span className="team-card__btn-icon">
                      <ArrowUpRight size="0.875rem" />
                    </span>
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
