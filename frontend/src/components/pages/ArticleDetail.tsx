import { useEffect, useState, useMemo } from 'react';
import { BLOG_ARTICLES } from '../../lib/constants';
import { ArrowUpRight } from '../icons/Icons';
import { useApp } from '../../context/AppContext';

interface ArticleDetailProps {
  articleId: string;
}

export function ArticleDetail({ articleId }: ArticleDetailProps) {
  const { openArticle, goToArticlesHub, goToHome } = useApp();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const article = useMemo(() => {
    return (
      BLOG_ARTICLES.find((a) => a.id === articleId) ||
      BLOG_ARTICLES[0]
    );
  }, [articleId]);

  // Related articles excluding the current one
  const relatedArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);
  }, [article.id]);

  // Reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy for active Table of Contents heading
  useEffect(() => {
    const headings = article.sections.map((s) => document.getElementById(s.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    headings.forEach((h) => {
      if (h) observer.observe(h);
    });

    return () => observer.disconnect();
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="article-detail">
      {/* Top Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="shell article-detail__inner">
        {/* Navigation & Breadcrumbs Bar */}
        <div className="article-detail__top-nav">
          <div className="article-detail__breadcrumbs">
            <button type="button" className="nav-back-link" onClick={() => goToHome()}>
              Beranda
            </button>
            <span className="crumb-sep">/</span>
            <button type="button" className="nav-back-link" onClick={goToArticlesHub}>
              Semua Artikel
            </button>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{article.category}</span>
          </div>

          <button
            type="button"
            className="article-back-btn"
            onClick={goToArticlesHub}
          >
            ← Kembali ke Semua Artikel
          </button>
        </div>

        {/* Article Header */}
        <header className="article-header">
          <div className="article-header__badge-row">
            <span className="article-category-badge">{article.category}</span>
            <span className="article-meta-item">{article.date}</span>
            <span className="article-dot">•</span>
            <span className="article-meta-item">{article.readTime}</span>
          </div>

          <h1 className="article-header__title">{article.title}</h1>
          {article.subtitle && (
            <p className="article-header__subtitle">{article.subtitle}</p>
          )}

          {/* Author Card */}
          <div className="article-author-card">
            <div className="article-author-avatar">
              {article.author.initials}
            </div>
            <div className="article-author-info">
              <span className="author-label">Ditulis oleh</span>
              <span className="author-name">{article.author.name}</span>
              <span className="author-role">{article.author.role} • Web4Go Studio</span>
            </div>
          </div>
        </header>

        {/* Main Article Content & Sidebar Grid (Wikipedia / Editorial Style) */}
        <div className="article-layout">
          {/* Left Column: Table of Contents & Infobox (Sticky Sidebar) */}
          <aside className="article-sidebar">
            {/* Table of Contents */}
            <div className="article-toc-card">
              <h4 className="toc-title">
                <span className="toc-icon">📑</span> Daftar Isi
              </h4>
              <nav className="toc-nav">
                <ul className="toc-list">
                  {article.sections.map((sec, idx) => (
                    <li key={sec.id}>
                      <button
                        type="button"
                        className={`toc-link ${activeSection === sec.id ? 'active' : ''}`}
                        onClick={() => scrollToHeading(sec.id)}
                      >
                        <span className="toc-num">{idx + 1}.</span>
                        <span className="toc-text">{sec.heading.replace(/^\d+\.\s*/, '')}</span>
                      </button>
                    </li>
                  ))}
                  {article.conclusion && (
                    <li>
                      <button
                        type="button"
                        className={`toc-link ${activeSection === 'kesimpulan' ? 'active' : ''}`}
                        onClick={() => scrollToHeading('kesimpulan')}
                      >
                        <span className="toc-num">{article.sections.length + 1}.</span>
                        <span className="toc-text">Kesimpulan & Takeaway</span>
                      </button>
                    </li>
                  )}
                </ul>
              </nav>
            </div>

            {/* Wikipedia-style Infobox */}
            {article.infobox && (
              <div className="article-infobox">
                <div className="infobox-header">
                  <span className="infobox-badge">Informasi Wawasan</span>
                </div>
                <div className="infobox-table">
                  <div className="infobox-row">
                    <span className="infobox-label">Topik Utama:</span>
                    <span className="infobox-val">{article.infobox.topic}</span>
                  </div>
                  <div className="infobox-row">
                    <span className="infobox-label">Industri:</span>
                    <span className="infobox-val">{article.infobox.industry}</span>
                  </div>
                  <div className="infobox-row">
                    <span className="infobox-label">Tingkat Materi:</span>
                    <span className="infobox-val">{article.infobox.difficulty}</span>
                  </div>
                  <div className="infobox-row">
                    <span className="infobox-label">Target Pembaca:</span>
                    <span className="infobox-val">{article.infobox.targetAudience}</span>
                  </div>
                  <div className="infobox-row">
                    <span className="infobox-label">Penerbit:</span>
                    <span className="infobox-val">Web4Go Editorial Team</span>
                  </div>
                </div>
              </div>
            )}

            {/* Share Tools */}
            <div className="article-share-box">
              <span className="share-label">Bagikan wawasan ini:</span>
              <button
                type="button"
                className={`share-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyLink}
              >
                {copied ? '✓ Tautan Disalin' : '🔗 Salin Tautan'}
              </button>
            </div>
          </aside>

          {/* Right Column: Main Body Content */}
          <main className="article-body">
            {/* Hero Cover Image */}
            <div className="article-cover">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="article-cover__img"
              />
              <span className="article-cover__caption">
                Dokumentasi &amp; Riset Visual — Web4Go Digital Studio.
              </span>
            </div>

            {/* Summary Lead Box */}
            <div className="article-summary-lead">
              <span className="summary-pill">Ringkasan Eksekutif</span>
              <p>{article.summary}</p>
            </div>

            {/* Article Sections */}
            <div className="article-sections-stack">
              {article.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="article-section-block">
                  <h2 className="section-heading">{sec.heading}</h2>

                  <div className="section-paragraphs">
                    {sec.body.map((p, pIdx) => (
                      <p key={pIdx} className="article-p">
                        {p}
                      </p>
                    ))}
                  </div>

                  {sec.callout && (
                    <blockquote className="article-callout">
                      <div className="callout-bar" />
                      <p className="callout-text">"{sec.callout}"</p>
                    </blockquote>
                  )}

                  {sec.keyPoints && sec.keyPoints.length > 0 && (
                    <div className="article-keypoints">
                      <h4 className="keypoints-title">Poin Kunci &amp; Implementasi:</h4>
                      <ul className="keypoints-list">
                        {sec.keyPoints.map((point, kIdx) => (
                          <li key={kIdx} className="keypoint-item">
                            <span className="keypoint-check">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}

              {/* Conclusion Section */}
              {article.conclusion && (
                <section id="kesimpulan" className="article-section-block article-conclusion-block">
                  <h2 className="section-heading">Kesimpulan</h2>
                  <p className="article-p">{article.conclusion}</p>
                </section>
              )}
            </div>

            {/* Tags Row */}
            <div className="article-tags-section">
              <span className="tags-label">Tag Terkait:</span>
              <div className="tags-list">
                {article.tags.map((t) => (
                  <span key={t} className="tag-badge">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio Footer Box */}
            <div className="article-author-bio-box">
              <div className="bio-avatar">{article.author.initials}</div>
              <div className="bio-content">
                <h4 className="bio-name">{article.author.name}</h4>
                <p className="bio-role">{article.author.role} di Web4Go</p>
                <p className="bio-desc">
                  Berdedikasi dalam menciptakan solusi digital berperforma tinggi, riset arsitektur presisi, dan pengalaman visual yang terukur.
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="related-articles-section">
            <div className="related-header">
              <span className="related-eyebrow">Publikasi Terkait</span>
              <h3 className="related-title">Artikel Menarik Lainnya</h3>
            </div>

            <div className="related-grid">
              {relatedArticles.map((rel) => (
                <article
                  key={rel.id}
                  className="blog-card"
                  onClick={() => openArticle(rel.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openArticle(rel.id);
                  }}
                >
                  <div className="blog-card__media">
                    <img
                      src={rel.imageUrl}
                      alt={rel.title}
                      className="blog-card__img"
                      loading="lazy"
                    />
                    <div className="blog-card__badge">{rel.category}</div>
                  </div>

                  <div className="blog-card__content">
                    <div className="blog-card__meta">
                      <span className="blog-card__date">{rel.date}</span>
                      <span className="blog-card__dot">•</span>
                      <span className="blog-card__read">{rel.readTime}</span>
                    </div>

                    <h3 className="blog-card__title">{rel.title}</h3>
                    <p className="blog-card__summary">{rel.summary}</p>

                    <div className="blog-card__link">
                      <span>Baca Artikel</span>
                      <span className="blog-card__btn-icon">
                        <ArrowUpRight size="0.875rem" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
