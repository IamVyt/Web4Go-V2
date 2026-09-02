import { useEffect, useRef, useState } from 'react';
import { LogoMark, ArrowUpRight } from '../icons/Icons';
import { PORTFOLIO_ITEMS, WORK_CATEGORIES, JASA_SERVICES, DIGITAL_PRODUCTS } from '../../lib/constants';
import { useApp } from '../../context/AppContext';
import type { PortfolioItem } from '../../types';

export function Portfolio() {
  const { selectedCategory, setSelectedCategory, openModal } = useApp();
  const [eyebrowRevealed, setEyebrowRevealed] = useState(false);
  const [h2Revealed, setH2Revealed] = useState(false);
  const [cardsRevealed, setCardsRevealed] = useState(false);

  const eyebrowRef = useRef<HTMLSpanElement | null>(null);
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
            if (entry.target === gridEl) setCardsRevealed(true);
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

  const isJasaCategory = selectedCategory?.toLowerCase() === 'jasa';
  const isProdukCategory = selectedCategory?.toLowerCase() === 'produk' || selectedCategory?.toLowerCase() === 'product';

  const filteredItems: PortfolioItem[] = isJasaCategory
    ? JASA_SERVICES
    : isProdukCategory
    ? DIGITAL_PRODUCTS
    : selectedCategory
    ? PORTFOLIO_ITEMS.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase())
    : PORTFOLIO_ITEMS;

  const handleCardClick = (item: PortfolioItem) => {
    if (item.name === 'Jasa Pembuatan Website') {
      setSelectedCategory('Jasa');
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.name === 'Produk Digital') {
      setSelectedCategory('Produk');
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      openModal();
    }
  };

  return (
    <section id="works" className="portfolio">
      <div className="shell portfolio__inner">
        <div className="portfolio__eyebrow-wrap">
          <span
            className={`portfolio__eyebrow ${eyebrowRevealed ? 'revealed' : ''}`}
            id="portfolioEyebrow"
            ref={eyebrowRef}
          >
            <span className="dot" /> Portfolio
          </span>
        </div>

        <div className="portfolio__h2-wrap" id="portfolioH2Wrap" ref={h2Ref}>
          <h2 className="portfolio__h2">
            <span className="line-wrap">
              <span
                className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: '120ms' }}
              >
                Selected Work
              </span>
            </span>
          </h2>
        </div>

        <div className="portfolio__filter-bar">
          <button
            type="button"
            className={`portfolio__filter-btn ${!selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All Works ({PORTFOLIO_ITEMS.length})
          </button>
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`portfolio__filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <ul className="portfolio__grid" id="portfolioGrid" ref={gridRef}>
          {filteredItems.map((item, i) => (
            <li
              key={item.name}
              className={`portfolio__card-wrap ${cardsRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <article
                className="portfolio__card"
                onClick={() => handleCardClick(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(item);
                  }
                }}
              >
                <div className="portfolio__card-meta">
                  <span>
                    {item.category} — {item.year}
                  </span>
                  <span className="portfolio__card-badge">
                    <ArrowUpRight size="1rem" />
                  </span>
                </div>

                <div className="portfolio__card-center">
                  <span className="portfolio__card-logo">
                    <LogoMark size="4.5rem" />
                    <span className="reg">®</span>
                  </span>
                </div>

                <div className="portfolio__card-bottom">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio__card-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
