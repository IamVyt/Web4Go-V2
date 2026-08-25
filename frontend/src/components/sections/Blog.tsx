import { useReveal } from '../../hooks/useReveal';
import { BLOG_ARTICLES } from '../../lib/constants';
import { Eyebrow } from '../ui/Eyebrow';
import { ArrowUpRight } from '../icons/Icons';
import { PillButton } from '../ui/PillButton';
import { useApp } from '../../context/AppContext';

export function Blog() {
  const { openArticle, goToArticlesHub } = useApp();
  const [eyebrowRef, eyebrowRevealed] = useReveal<HTMLDivElement>(0.15);
  const [h2Ref, h2Revealed] = useReveal<HTMLDivElement>(0.15);
  const [gridRef, gridRevealed] = useReveal<HTMLUListElement>(0.15);

  // First 3 hot / featured articles for home section
  const featuredArticles = BLOG_ARTICLES.slice(0, 3);

  return (
    <section id="blog" className="blog">
      <div className="shell blog__inner">
        <div
          className={`blog__eyebrow ${eyebrowRevealed ? 'revealed' : ''}`}
          id="blogEyebrow"
          ref={eyebrowRef}
        >
          <Eyebrow label="Blogs & Articles" tone="dark" />
        </div>

        <div className="blog__header" ref={h2Ref}>
          <div className="blog__h2-wrap">
            <h2 className="blog__h2">
              <span className="line-wrap">
                <span
                  className={`line-inner ${h2Revealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: '120ms' }}
                >
                  Insights, perspectives & studio dispatches
                </span>
              </span>
            </h2>
          </div>

          <div className="blog__action">
            <PillButton
              label="Browse All Articles"
              variant="outline"
              withArrow
              arrowDir="up-right"
              onClick={goToArticlesHub}
            />
          </div>
        </div>

        <ul className="blog__grid" id="blogGrid" ref={gridRef}>
          {featuredArticles.map((article, i) => (
            <li
              key={article.id}
              className={`blog__card-wrap ${gridRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <article
                className="blog-card"
                onClick={() => openArticle(article.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openArticle(article.id);
                  }
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

                  <div className="blog-card__link">
                    <span>Read Article</span>
                    <span className="blog-card__btn-icon">
                      <ArrowUpRight size="0.875rem" />
                    </span>
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
