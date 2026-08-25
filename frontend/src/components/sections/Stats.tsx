import { useEffect, useRef, useState } from 'react';
import { Eyebrow } from '../ui/Eyebrow';
import { Star } from '../icons/Icons';
import { TESTIMONIALS_DATA, CLIENT_PARTNERS_DATA } from '../../lib/constants';

export function Stats() {
  const [panelRevealed, setPanelRevealed] = useState(false);
  const [h2Revealed, setH2Revealed] = useState(false);
  const [itemsRevealed, setItemsRevealed] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panelEl = panelRef.current;
    const h2El = h2Ref.current;
    const marqueeEl = marqueeRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === panelEl) setPanelRevealed(true);
            if (entry.target === h2El) setH2Revealed(true);
            if (entry.target === marqueeEl) setItemsRevealed(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (panelEl) obs.observe(panelEl);
    if (h2El) obs.observe(h2El);
    if (marqueeEl) obs.observe(marqueeEl);

    return () => obs.disconnect();
  }, []);

  // Repeat items for seamless continuous marquee loop
  const repeatedTestimonials = [
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
  ];

  const repeatedPartners = [
    ...CLIENT_PARTNERS_DATA,
    ...CLIENT_PARTNERS_DATA,
    ...CLIENT_PARTNERS_DATA,
    ...CLIENT_PARTNERS_DATA,
  ];

  return (
    <section className="stats-section" id="testimonials">
      <div className="shell stats__outer">
        <div
          className={`stats__panel stats__panel--light ${panelRevealed ? 'revealed' : ''}`}
          id="statsPanel"
          ref={panelRef}
        >
          <div className="stats__eyebrow">
            <Eyebrow label="Apa Kata Klien Kami?" tone="dark" />
          </div>

          <div className="stats__h2-wrap" id="statsH2Wrap" ref={h2Ref}>
            <h2 className="stats__h2">
              <span className="line-wrap">
                <span
                  className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: '120ms' }}
                >
                  Kepercayaan Klien,
                </span>
              </span>
              <span className="line-wrap">
                <span
                  className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: '240ms' }}
                >
                  Hasil Nyata yang Berbicara.
                </span>
              </span>
            </h2>
          </div>

          {/* 1. Testimonial Marquee (Gulir ke Kiri / Scroll Left - Slow & Smooth) */}
          <div className="marquee-wrapper" ref={marqueeRef}>
            <div className="marquee-fade marquee-fade--left" aria-hidden="true" />
            <div className="marquee-fade marquee-fade--right" aria-hidden="true" />

            <div className={`marquee-track marquee-track--left ${itemsRevealed ? 'revealed' : ''}`}>
              {repeatedTestimonials.map((item, idx) => (
                <div key={`${item.name}-${idx}`} className="testimonial-card">
                  <div className="testimonial-card__header">
                    <div
                      className="testimonial-card__avatar"
                      style={{ backgroundColor: item.avatarBg }}
                    >
                      {item.initials}
                    </div>
                    <div className="testimonial-card__meta">
                      <h4 className="testimonial-card__name">{item.name}</h4>
                      <div className="testimonial-card__rating">
                        {[...Array(item.rating)].map((_, sIdx) => (
                          <Star key={sIdx} size="0.8125rem" />
                        ))}
                      </div>
                      <span className="testimonial-card__handle">{item.handle}</span>
                    </div>
                  </div>
                  <p className="testimonial-card__body">"{item.content}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Client / Partner Marquee (Gulir ke Kanan / Scroll Right - Slow & Smooth) */}
          <div className="stats__partners-section">
            <p className="stats__partners-label">Dipercaya oleh brand & perusahaan inovatif</p>

            <div className="marquee-wrapper marquee-wrapper--partners">
              <div className="marquee-fade marquee-fade--left" aria-hidden="true" />
              <div className="marquee-fade marquee-fade--right" aria-hidden="true" />

              <div className={`marquee-track marquee-track--right ${itemsRevealed ? 'revealed' : ''}`}>
                {repeatedPartners.map((client, idx) => (
                  <div key={`${client.name}-${idx}`} className="partner-chip">
                    <span className="partner-chip__badge">{client.badge}</span>
                    <div className="partner-chip__text">
                      <span className="partner-chip__name">{client.name}</span>
                      <span className="partner-chip__sub">{client.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
