import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckIcon, LogoMark } from '../icons/Icons';
import { Eyebrow } from '../ui/Eyebrow';
import { PillButton } from '../ui/PillButton';
import { SERVICE_ITEMS, WEBSITE_PACKAGES } from '../../lib/constants';
import { useApp } from '../../context/AppContext';

export function Services() {
  const { openModal } = useApp();
  const [activeTab, setActiveTab] = useState<'packages' | 'workflow'>('packages');
  const [eyebrowRevealed, setEyebrowRevealed] = useState(false);
  const [h2Revealed, setH2Revealed] = useState(false);
  const [contentRevealed, setContentRevealed] = useState(false);
  const [activeStep, setActiveStep] = useState<string | null>(SERVICE_ITEMS[0]?.index ?? null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const eyebrowEl = eyebrowRef.current;
    const h2El = h2Ref.current;
    const contentEl = contentRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === eyebrowEl) setEyebrowRevealed(true);
            if (entry.target === h2El) setH2Revealed(true);
            if (entry.target === contentEl) setContentRevealed(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (eyebrowEl) obs.observe(eyebrowEl);
    if (h2El) obs.observe(h2El);
    if (contentEl) obs.observe(contentEl);

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
          <Eyebrow label="Jasa & Layanan Website" tone="dark" />
        </div>

        <div className="services__h2-wrap" id="servicesH2Wrap" ref={h2Ref}>
          <div className="services__header-top">
            <h2 className="services__h2">
              <span className="line-wrap">
                <span
                  className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: '120ms' }}
                >
                  {activeTab === 'packages'
                    ? 'Pilihan Solusi Website Sesuai Kebutuhan Anda'
                    : 'Bagaimana proses bikin website di Web4Go?'}
                </span>
              </span>
            </h2>
            <p className="services__subtitle">
              {activeTab === 'packages'
                ? 'Pilih kategori website yang Anda butuhkan untuk melihat detail fitur, keunggulan, dan mulai konsultasi.'
                : 'Alur kerja terstruktur dari konsultasi, riset desain UI/UX, pengisian konten, hingga website online.'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="services__tab-bar">
            <button
              type="button"
              className={`services__tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
              onClick={() => setActiveTab('packages')}
            >
              Pilihan Jenis Website (4)
            </button>
            <button
              type="button"
              className={`services__tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('workflow')}
            >
              Alur & Proses Kerja
            </button>
          </div>
        </div>

        <div ref={contentRef}>
          {/* TAB 1: PILIHAN JENIS WEBSITE (PACKAGES) */}
          {activeTab === 'packages' && (
            <div className="services__packages-grid">
              {WEBSITE_PACKAGES.map((pkg, i) => (
                <div
                  key={pkg.id}
                  className={`service-package-card ${contentRevealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="service-package-card__top">
                    <div className="service-package-card__meta">
                      <span className="service-package-card__index">0{i + 1}</span>
                      {pkg.badge && (
                        <span className="service-package-card__badge">{pkg.badge}</span>
                      )}
                    </div>
                    <div className="service-package-card__logo-wrap">
                      <LogoMark size="1.75rem" />
                    </div>
                  </div>

                  <div className="service-package-card__header">
                    <h3 className="service-package-card__title">{pkg.title}</h3>
                    <span className="service-package-card__subtitle">{pkg.subtitle}</span>
                    <p className="service-package-card__desc">{pkg.description}</p>
                  </div>

                  <div className="service-package-card__tags">
                    {pkg.tags.map((tag) => (
                      <span key={tag} className="service-package-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="service-package-card__features">
                    <h4 className="service-package-features-title">Fitur & Keunggulan Utama:</h4>
                    <ul className="service-package-features-list">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="service-package-feature-item">
                          <span className="service-package-feature-icon">
                            <CheckIcon size="0.875rem" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.recommendedFor && (
                    <div className="service-package-card__target">
                      <span className="target-label">Cocok untuk:</span>
                      <p className="target-text">{pkg.recommendedFor}</p>
                    </div>
                  )}

                  <div className="service-package-card__footer">
                    <PillButton
                      label={`Pesan ${pkg.title}`}
                      variant="dark"
                      withArrow
                      arrowDir="up-right"
                      className="service-package-card__cta"
                      onClick={() =>
                        openModal(`Halo Web4Go, saya tertarik untuk membuat ${pkg.title} (${pkg.subtitle}). Mohon informasi dan konsultasinya.`)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: ALUR & PROSES KERJA (WORKFLOW) */}
          {activeTab === 'workflow' && (
            <ul id="servicesList" className="services__list">
              {SERVICE_ITEMS.map((service, i) => {
                const isOpen = activeStep === service.index;

                return (
                  <li
                    key={service.index}
                    className={`services__row-wrap ${isOpen ? 'active' : ''} ${contentRevealed ? 'revealed' : ''}`}
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
          )}
        </div>
      </div>
    </section>
  );
}
