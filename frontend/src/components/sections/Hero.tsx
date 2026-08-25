import { useEffect, useState } from 'react';
import { Star } from '../icons/Icons';
import { PillButton } from '../ui/PillButton';
import { Hero3DCharacter } from './Hero3DCharacter';
import { useApp } from '../../context/AppContext';
import { smoothScrollTo } from '../../lib/scroll';

export function Hero() {
  const { introReady, openModal } = useApp();
  const [h1Revealed, setH1Revealed] = useState(false);
  const [ratingRevealed, setRatingRevealed] = useState(false);
  const [ctasRevealed, setCtasRevealed] = useState(false);
  const [watermarkRevealed, setWatermarkRevealed] = useState(false);
  const [characterRevealed, setCharacterRevealed] = useState(false);

  useEffect(() => {
    if (!introReady) return;

    const tH1 = setTimeout(() => setH1Revealed(true), 250);
    const tWatermark = setTimeout(() => setWatermarkRevealed(true), 300);
    const tRating = setTimeout(() => setRatingRevealed(true), 500);
    const tCtas = setTimeout(() => setCtasRevealed(true), 600);
    const tCharacter = setTimeout(() => setCharacterRevealed(true), 350);

    return () => {
      clearTimeout(tH1);
      clearTimeout(tWatermark);
      clearTimeout(tRating);
      clearTimeout(tCtas);
      clearTimeout(tCharacter);
    };
  }, [introReady]);

  return (
    <section id="home" className="hero">
      <div className="hero__bg-ambient" aria-hidden="true">
        <div className="hero__ambient-glow hero__ambient-glow--lime" />
      </div>

      {/* Full-width and height 3D Scene Layer (Unclipped particles & interactive mascot) */}
      <div className={`hero__3d-layer ${characterRevealed ? 'revealed' : ''}`} id="hero3D">
        <Hero3DCharacter />
      </div>

      <div className={`hero__watermark ${watermarkRevealed ? 'revealed' : ''}`} id="heroWatermark">
        WEB4GO
      </div>

      <div className="shell hero__content">
        <div className="hero__left">
          <h1 className="hero__h1" id="heroH1">
            <span className="line-wrap">
              <span
                className={`line-inner ${h1Revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: '0ms' }}
              >
                Bangun Aset Digital Masa
              </span>
            </span>
            <span className="line-wrap">
              <span
                className={`line-inner ${h1Revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: '120ms' }}
              >
                Depanmu melalui Riset
              </span>
            </span>
            <span className="line-wrap">
              <span
                className={`line-inner ${h1Revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: '240ms' }}
              >
                Bukan Sekadar Copy-Paste
              </span>
            </span>
          </h1>

          <div className={`hero__rating ${ratingRevealed ? 'revealed' : ''}`} id="heroRating">
            <span className="hero__stars">
              <Star size="1rem" />
              <Star size="1rem" />
              <Star size="1rem" />
              <Star size="1rem" />
              <Star size="1rem" />
            </span>
            <span className="hero__rating-text">200+ brands shipped</span>
          </div>

          <div className={`hero__ctas ${ctasRevealed ? 'revealed' : ''}`} id="heroCtas">
            <PillButton
              label="Let's Talk"
              variant="dark"
              withArrow
              arrowDir="right"
              id="letsTalkBtn"
              onClick={openModal}
            />
            <PillButton
              label="View Work"
              variant="outline"
              withArrow
              arrowDir="right"
              id="viewWorkBtn"
              onClick={() => smoothScrollTo('works')}
            />
          </div>
        </div>

        <div className="hero__right-spacer" aria-hidden="true" />
      </div>
    </section>
  );
}
