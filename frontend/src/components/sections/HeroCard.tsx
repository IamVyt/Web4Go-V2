import { useState } from 'react';
import { LogoMark, ArrowRight } from '../icons/Icons';
import { CARD_ITEMS } from '../../lib/constants';

interface HeroCardProps {
  revealed?: boolean;
}

export function HeroCard({ revealed = false }: HeroCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animDir, setAnimDir] = useState<number | null>(null);

  function advance(step: number) {
    setAnimDir(step);
    setCurrentIndex((prev) => (prev + step + CARD_ITEMS.length) % CARD_ITEMS.length);
  }

  const activeItem = CARD_ITEMS[currentIndex];

  return (
    <div className={`hero-card ${revealed ? 'revealed' : ''}`} id="heroCard">
      <div
        className="hero-card__row"
        id="heroCardRow"
        onClick={() => advance(1)}
        role="button"
        tabIndex={0}
      >
        <div className="hero-card__tile">
          <LogoMark size="1.875rem" />
        </div>

        <div className="hero-card__panel">
          <div className="hero-card__slot" id="heroCardSlot">
            <div
              key={currentIndex}
              className="hero-card__item"
              style={{
                animation: animDir !== null
                  ? `${animDir > 0 ? 'slideInUp' : 'slideInDown'} .35s cubic-bezier(.2,.8,.2,1) forwards`
                  : undefined,
              }}
            >
              <div className="hero-card__caption">{activeItem.caption}</div>
              <div className="hero-card__title">{activeItem.title}</div>
            </div>
          </div>

          <div className="hero-card__controls">
            <div className="hero-card__dots" id="heroCardDots">
              {CARD_ITEMS.map((_, i) => (
                <span
                  key={i}
                  className={`hero-card__dot ${
                    i === currentIndex ? 'hero-card__dot--active' : 'hero-card__dot--inactive'
                  }`}
                />
              ))}
            </div>

            <div className="hero-card__arrows">
              <button
                type="button"
                className="hero-card__arrow"
                id="heroCardPrev"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  advance(-1);
                }}
              >
                <ArrowRight size="0.75rem" style={{ transform: 'rotate(180deg)' }} />
              </button>
              <button
                type="button"
                className="hero-card__arrow"
                id="heroCardNext"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  advance(1);
                }}
              >
                <ArrowRight size="0.75rem" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
