import { useState, useMemo } from 'react';
import { BLOG_ARTICLES } from '../../lib/constants';
import { Eyebrow } from '../ui/Eyebrow';
import { ArrowUpRight, ArrowRight } from '../icons/Icons';
import { useApp } from '../../context/AppContext';

export function ArticlesHub() {
  const { openArticle, goToHome } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    BLOG_ARTICLES.forEach((a) => set.add(a.category));
    return ['Semua', ...Array.from(set)];
  }, []);

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchCategory =
        selectedCategory === 'Semua' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.author.name.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = BLOG_ARTICLES[0];

  return (
    <div className="articles-hub">
      {/* Top Header & Breadcrumbs */}
      <div className="shell articles-hub__top">
        <div className="articles-hub__breadcrumbs">
          <button type="button" className="crumb-btn" onClick={() => goToHome()}>
            Beranda
          </button>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">Artikel & Wawasan</span>
        </div>

        <div className="articles-hub__header">
          <div className="articles-hub__eyebrow">
            <Eyebrow label="Pusat Wawasan & Riset" tone="dark" />
          </div>

          <h1 className="articles-hub__title">
            Wawasan Teknis, Desain &amp; Strategi Digital.
          </h1>

          <p className="articles-hub__subtitle">
            Kumpulan artikel mendalam, dokumentasi arsitektur sistem, dan catatan riset dari tim studio Web4Go untuk membantu Anda membangun produk digital yang bernilai nyata.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="articles-hub__controls">
          <div className="articles-hub__search-box">
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Cari artikel, topik, atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Hapus pencarian"
              >
                ✕
              </button>
            )}
          </div>

          <div className="articles-hub__categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight / Featured Banner (Only shown when filter is default and no active search) */}
        {selectedCategory === 'Semua' && !searchQuery && featuredArticle && (
          <div
            className="articles-hub__featured"
            onClick={() => openArticle(featuredArticle.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') openArticle(featuredArticle.id);
            }}
          >
            <div className="featured-card">
              <div className="featured-card__media">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="featured-card__img"
                />
                <span className="featured-card__badge">Featured Article</span>
              </div>
              <div className="featured-card__content">
                <div className="featured-card__meta">
                  <span className="featured-card__category">{featuredArticle.category}</span>
                  <span className="featured-card__dot">•</span>
                  <span className="featured-card__date">{featuredArticle.date}</span>
                  <span className="featured-card__dot">•</span>
                  <span className="featured-card__read">{featuredArticle.readTime}</span>
                </div>

                <h2 className="featured-card__title">{featuredArticle.title}</h2>
                <p className="featured-card__summary">{featuredArticle.summary}</p>

                <div className="featured-card__author">
                  <div className="author-avatar">{featuredArticle.author.initials}</div>
                  <div className="author-meta">
                    <span className="author-name">{featuredArticle.author.name}</span>
                    <span className="author-role">{featuredArticle.author.role}</span>
                  </div>
                </div>

                <div className="featured-card__cta">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size="1rem" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid List */}
        <div className="articles-hub__list-section">
          <div className="articles-hub__list-header">
            <h3 className="articles-hub__list-title">
              {searchQuery
                ? `Hasil pencarian untuk "${searchQuery}" (${filteredArticles.length})`
                : selectedCategory === 'Semua'
                ? `Semua Publikasi (${filteredArticles.length})`
                : `Kategori: ${selectedCategory} (${filteredArticles.length})`}
            </h3>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="articles-hub__empty">
              <div className="empty-icon">🔍</div>
              <h4>Tidak ada artikel yang sesuai</h4>
              <p>Coba gunakan kata kunci lain atau reset filter kategori pencarian Anda.</p>
              <button
                type="button"
                className="reset-btn"
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSearchQuery('');
                }}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="articles-hub__grid">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="blog-card"
                  onClick={() => openArticle(article.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openArticle(article.id);
                  }}
                >
                  <div className="blog-card__media">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="blog-card__img"
                      loading="lazy"
                    />
                    <div className="blog-card__badge">{article.category}</div>
                  </div>

                  <div className="blog-card__content">
                    <div className="blog-card__meta">
                      <span className="blog-card__date">{article.date}</span>
                      <span className="blog-card__dot">•</span>
                      <span className="blog-card__read">{article.readTime}</span>
                    </div>

                    <h3 className="blog-card__title">{article.title}</h3>
                    <p className="blog-card__summary">{article.summary}</p>

                    <div className="blog-card__tags">
                      {article.tags.slice(0, 2).map((t) => (
                        <span key={t} className="article-mini-tag">
                          #{t}
                        </span>
                      ))}
                    </div>

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
          )}
        </div>
      </div>
    </div>
  );
}
