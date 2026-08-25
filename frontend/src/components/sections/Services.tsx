import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from '../icons/Icons';
import { Eyebrow } from '../ui/Eyebrow';
import { SERVICE_ITEMS } from '../../lib/constants';

export function Services() {
  const [eyebrowRevealed, setEyebrowRevealed] = useState(false);
  const [h2Revealed, setH2Revealed] = useState(false);
  const [rowsRevealed, setRowsRevealed] = useState(false);
  const [activeStep, setActiveStep] = useState<string | null>(SERVICE_ITEMS[0]?.index ?? null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const eyebrowEl = eyebrowRef.current;
    const h2El = h2Ref.current;
    const listEl = listRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === eyebrowEl) setEyebrowRevealed(true);
            if (entry.target === h2El) setH2Revealed(true);
            if (entry.target === listEl) setRowsRevealed(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (eyebrowEl) obs.observe(eyebrowEl);
    if (h2El) obs.observe(h2El);
    if (listEl) obs.observe(listEl);

    return () => obs.disconnect();
  }, []);

  const toggleStep = (index: string) => {
    setActiveStep((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="services">
      <div className="shell services__inner">
        <div
          className={`services__eyebrow ${eyebrowRevealed ? 'revealed' : ''}`}
          id="servicesEyebrow"
          ref={eyebrowRef}
        >
          <Eyebrow label="Alur & Proses Kerja" tone="dark" />
        </div>

        <div className="services__h2-wrap" id="servicesH2Wrap" ref={h2Ref}>
          <h2 className="services__h2">
            <span className="line-wrap">
              <span
                className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: '120ms' }}
              >
                Bagaimana proses bikin website di Web4Go?
              </span>
            </span>
          </h2>
        </div>

        <ul id="servicesList" ref={listRef} className="services__list">
          {SERVICE_ITEMS.map((service, i) => {
            const isOpen = activeStep === service.index;

            return (
              <li
                key={service.index}
                className={`services__row-wrap ${isOpen ? 'active' : ''} ${rowsRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  type="button"
                  className={`services__row-link ${isOpen ? 'services__row-link--active' : ''}`}
                  onClick={() => toggleStep(service.index)}
                  aria-expanded={isOpen}
                >
                  <span className="services__index">{service.index}</span>

                  <div className="services__content-group">
                    <div className="services__header-line">
                      <h3 className="services__title">{service.title}</h3>
                      <p className="services__desc">{service.description}</p>
                    </div>

                    {/* Dropdown Details Container */}
                    <div className={`services__dropdown ${isOpen ? 'open' : ''}`}>
                      <div className="services__dropdown-inner">
                        {service.details && (
                          <p className="services__dropdown-text">{service.details}</p>
                        )}
                        {service.deliverables && service.deliverables.length > 0 && (
                          <div className="services__deliverables">
                            {service.deliverables.map((item, dIdx) => (
                              <span key={dIdx} className="services__deliverable-chip">
                                <span className="services__deliverable-dot" />
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <span className={`services__arrow ${isOpen ? 'services__arrow--active' : ''}`}>
                    <ArrowUpRight size="1rem" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
