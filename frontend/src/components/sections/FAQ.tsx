import { useEffect, useRef, useState } from 'react';
import { Eyebrow } from '../ui/Eyebrow';
import { PillButton } from '../ui/PillButton';
import { FAQ_DATA } from '../../lib/constants';
import { useApp } from '../../context/AppContext';

export function FAQ() {
  const { openModal } = useApp();
  const [eyebrowRevealed, setEyebrowRevealed] = useState(false);
  const [h2Revealed, setH2Revealed] = useState(false);
  const [listRevealed, setListRevealed] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(FAQ_DATA[0]?.id ?? null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

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
            if (entry.target === listEl) setListRevealed(true);
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

  const toggleFaq = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq">
      <div className="shell faq__inner">
        <div className="faq__grid">
          {/* Left Column: Header & Sticky CTA */}
          <div className="faq__left">
            <div
              className={`faq__eyebrow ${eyebrowRevealed ? 'revealed' : ''}`}
              id="faqEyebrow"
              ref={eyebrowRef}
            >
              <Eyebrow label="Frequently Asked Questions" tone="dark" />
            </div>

            <div className="faq__h2-wrap" id="faqH2Wrap" ref={h2Ref}>
              <h2 className="faq__h2">
                <span className="line-wrap">
                  <span
                    className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                    style={{ transitionDelay: '120ms' }}
                  >
                    Pertanyaan yang
                  </span>
                </span>
                <span className="line-wrap">
                  <span
                    className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                    style={{ transitionDelay: '240ms' }}
                  >
                    Sering Diajukan.
                  </span>
                </span>
              </h2>
            </div>

            <p className="faq__desc">
              Punya pertanyaan seputar proses pengerjaan, teknologi riset, atau alur kerja sama? Temukan jawaban ringkas di sini atau hubungi kami langsung.
            </p>

            <div className="faq__cta">
              <div className="faq__cta-card">
                <h4 className="faq__cta-title">Masih punya pertanyaan lain?</h4>
                <p className="faq__cta-sub">Tim kami siap berdiskusi dan memberikan solusi terbaik untuk kebutuhan Anda.</p>
                <PillButton label="Konsultasi Gratis" variant="dark" withArrow={true} onClick={openModal} />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="faq__right" ref={listRef}>
            <div className="faq__accordion-list">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = activeId === item.id;
                const formattedIndex = String(idx + 1).padStart(2, '0');

                return (
                  <div
                    key={item.id}
                    className={`faq-item ${isOpen ? 'active' : ''} ${listRevealed ? 'revealed' : ''}`}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <button
                      type="button"
                      className="faq-item__trigger"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-item__header-left">
                        <span className="faq-item__index">{formattedIndex}</span>
                        <h3 className="faq-item__question">{item.question}</h3>
                      </div>

                      <div className="faq-item__icon-wrapper">
                        <span className="faq-item__icon-line faq-item__icon-line--h" />
                        <span className="faq-item__icon-line faq-item__icon-line--v" />
                      </div>
                    </button>

                    <div className="faq-item__content">
                      <div className="faq-item__content-inner">
                        <p className="faq-item__answer">{item.answer}</p>
                        {item.category && (
                          <span className="faq-item__tag">{item.category}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
