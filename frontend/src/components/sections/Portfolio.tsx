import { useEffect, useRef, useState } from 'react';
import { LogoMark, ArrowUpRight, EyeIcon, ZapIcon, XIcon, Globe } from '../icons/Icons';
import { PORTFOLIO_ITEMS, WORK_CATEGORIES, JASA_SERVICES, DIGITAL_PRODUCTS } from '../../lib/constants';
import { useApp } from '../../context/AppContext';
import type { PortfolioItem } from '../../types';

export function Portfolio() {
  const { selectedCategory, setSelectedCategory, openModal } = useApp();
  const [eyebrowRevealed, setEyebrowRevealed] = useState(false);
  const [h2Revealed, setH2Revealed] = useState(false);
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const [demoItem, setDemoItem] = useState<PortfolioItem | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

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
    } else if (item.isProduct || isProdukCategory) {
      openModal(`Beli Produk Digital: ${item.name} (${item.price || ''})`);
    } else {
      openModal();
    }
  };

  const handleDemoClick = (e: React.MouseEvent, item: PortfolioItem) => {
    e.stopPropagation();
    setDemoItem(item);
  };

  const handleBuyClick = (e: React.MouseEvent, item: PortfolioItem) => {
    e.stopPropagation();
    openModal(`Beli Produk Digital: ${item.name} (${item.price || ''})`);
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
            <span className="dot" /> {isProdukCategory ? 'Katalog Produk Digital' : 'Portfolio'}
          </span>
        </div>

        <div className="portfolio__h2-wrap" id="portfolioH2Wrap" ref={h2Ref}>
          <h2 className="portfolio__h2">
            <span className="line-wrap">
              <span
                className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: '120ms' }}
              >
                {isProdukCategory ? 'Website Siap Pakai' : 'Selected Work'}
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
              {cat.label} {cat.id === 'Produk' ? `(${DIGITAL_PRODUCTS.length})` : cat.id === 'Jasa' ? `(${JASA_SERVICES.length})` : ''}
            </button>
          ))}
        </div>

        <ul className="portfolio__grid" id="portfolioGrid" ref={gridRef}>
          {filteredItems.map((item, i) => {
            const hasProductActions = item.isProduct || isProdukCategory;
            return (
              <li
                key={item.name}
                className={`portfolio__card-wrap ${cardsRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <article
                  className={`portfolio__card ${hasProductActions ? 'portfolio__card--product' : ''}`}
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
                    <div className="portfolio__card-meta-left">
                      <span>
                        {item.category} — {item.year}
                      </span>
                      {item.badge && (
                        <span className="product-badge">{item.badge}</span>
                      )}
                    </div>

                    {item.price ? (
                      <div className="product-pricing">
                        <span className="product-price">{item.price}</span>
                        {item.originalPrice && (
                          <span className="product-price-orig">{item.originalPrice}</span>
                        )}
                      </div>
                    ) : (
                      <span className="portfolio__card-badge">
                        <ArrowUpRight size="1rem" />
                      </span>
                    )}
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

                    {hasProductActions && (
                      <div className="product-actions" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          className="product-card__btn product-card__btn--demo"
                          onClick={(e) => handleDemoClick(e, item)}
                        >
                          <EyeIcon size="0.875rem" />
                          <span>Live Demo</span>
                        </button>
                        <button
                          type="button"
                          className="product-card__btn product-card__btn--buy"
                          onClick={(e) => handleBuyClick(e, item)}
                        >
                          <ZapIcon size="0.875rem" />
                          <span>Beli Sekarang</span>
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Live Demo Preview Modal */}
      {demoItem && (
        <div
          className="demo-modal-backdrop"
          onClick={() => setDemoItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="demo-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="demo-modal__header">
              <div className="demo-modal__info">
                <div className="demo-modal__title-wrap">
                  <span className="product-badge">{demoItem.badge || 'PRODUK'}</span>
                  <h4>{demoItem.name}</h4>
                </div>
                <div className="demo-modal__price-wrap">
                  <span className="product-price">{demoItem.price}</span>
                  {demoItem.originalPrice && (
                    <span className="product-price-orig">{demoItem.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="demo-modal__devices">
                <button
                  type="button"
                  className={`demo-device-btn ${previewDevice === 'desktop' ? 'active' : ''}`}
                  onClick={() => setPreviewDevice('desktop')}
                >
                  Desktop
                </button>
                <button
                  type="button"
                  className={`demo-device-btn ${previewDevice === 'tablet' ? 'active' : ''}`}
                  onClick={() => setPreviewDevice('tablet')}
                >
                  Tablet
                </button>
                <button
                  type="button"
                  className={`demo-device-btn ${previewDevice === 'mobile' ? 'active' : ''}`}
                  onClick={() => setPreviewDevice('mobile')}
                >
                  Mobile
                </button>
              </div>

              <div className="demo-modal__actions">
                <button
                  type="button"
                  className="product-card__btn product-card__btn--buy"
                  onClick={() => {
                    const itemToBuy = demoItem;
                    setDemoItem(null);
                    openModal(`Beli Produk Digital: ${itemToBuy.name} (${itemToBuy.price || ''})`);
                  }}
                >
                  <ZapIcon size="0.875rem" />
                  <span>Checkout</span>
                </button>
                <button
                  type="button"
                  className="demo-modal__close"
                  onClick={() => setDemoItem(null)}
                  aria-label="Tutup Preview"
                >
                  <XIcon size="1rem" />
                </button>
              </div>
            </div>

            <div className={`demo-modal__viewport demo-modal__viewport--${previewDevice}`}>
              <div className="demo-browser-bar">
                <div className="demo-browser-dots">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <div className="demo-browser-url">
                  <Globe size="0.75rem" />
                  <span>demo.web4go.com/{demoItem.id || 'template'}</span>
                </div>
              </div>

              <div className="demo-preview-frame">
                <div className="demo-preview-content">
                  <div className="demo-hero-banner">
                    <span className="demo-hero-pill">⚡ Template Website Siap Pakai</span>
                    <h2>{demoItem.name}</h2>
                    <p>{demoItem.description}</p>
                    <div className="demo-hero-tags">
                      {demoItem.tags.map((t) => (
                        <span key={t} className="demo-tag">{t}</span>
                      ))}
                    </div>
                    <div className="demo-cta-row">
                      <button
                        type="button"
                        className="demo-primary-btn"
                        onClick={() => {
                          const itemToBuy = demoItem;
                          setDemoItem(null);
                          openModal(`Beli Produk Digital: ${itemToBuy.name} (${itemToBuy.price || ''})`);
                        }}
                      >
                        Beli Template Ini ({demoItem.price}) →
                      </button>
                    </div>
                  </div>

                  <div className="demo-features-grid">
                    <div className="demo-feature-card">
                      <div className="demo-feature-icon">🚀</div>
                      <h5>Ultra Fast Performance</h5>
                      <p>Dioptimasi dengan standar performa 99+ Google Lighthouse, loading instan.</p>
                    </div>
                    <div className="demo-feature-card">
                      <div className="demo-feature-icon">📱</div>
                      <h5>100% Mobile Responsive</h5>
                      <p>Tampilan adaptif sempurna di layar iPhone, Android, Tablet, hingga Desktop.</p>
                    </div>
                    <div className="demo-feature-card">
                      <div className="demo-feature-icon">🛠️</div>
                      <h5>Mudah Dikustomisasi</h5>
                      <p>Struktur kode bersih, dokumentasi lengkap, dan mudah diedit sesuai branding Anda.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
