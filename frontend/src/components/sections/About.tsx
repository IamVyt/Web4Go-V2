import { useEffect, useRef, useState } from 'react';
import { LogoMark, XIcon, CircleDot } from '../icons/Icons';
import { Eyebrow } from '../ui/Eyebrow';
import { PillButton } from '../ui/PillButton';
import { smoothScrollTo } from '../../lib/scroll';

const normalWords = 'Kami menawarkan solusi digital yang terukur,'.split(' ');
const mutedWords = 'strategis, dan berdampak nyata untuk pertumbuhan Anda.'.split(' ');

export function About() {
  const [distRevealed, setDistRevealed] = useState(false);
  const [wordsRevealed, setWordsRevealed] = useState(false);
  const [footerRevealed, setFooterRevealed] = useState(false);

  const distRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLHeadingElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const distEl = distRef.current;
    const h2El = h2Ref.current;
    const footerEl = footerRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === distEl) setDistRevealed(true);
            if (entry.target === h2El) setWordsRevealed(true);
            if (entry.target === footerEl) setFooterRevealed(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (distEl) obs.observe(distEl);
    if (h2El) obs.observe(h2El);
    if (footerEl) obs.observe(footerEl);

    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="shell about__inner">
        <div className="about__globe-block">
          <div className="about__globe-icon">
            <LogoMark size="12rem" />
          </div>

          <div className="about__eyebrow">
            <Eyebrow label="Who We Are" tone="dark" />
          </div>

          <div
            className={`about__distributed ${distRevealed ? 'revealed' : ''}`}
            id="aboutDistributed"
            ref={distRef}
          >
            <LogoMark size="1.5rem" />
            <span>Mengapa Memilih Web4Go?</span>
          </div>
        </div>

        <div className="about__right">
          <h2 className="about__h2" id="aboutH2" ref={h2Ref}>
            {normalWords.map((word, i) => (
              <span
                key={i}
                className={`word ${wordsRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 35}ms` }}
              >
                {word}
              </span>
            ))}
            {mutedWords.map((word, i) => (
              <span
                key={`muted-${i}`}
                className={`word muted ${wordsRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${(normalWords.length + i) * 35}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>

          <div
            className={`about__footer ${footerRevealed ? 'revealed' : ''}`}
            id="aboutFooter"
            ref={footerRef}
          >
            <div>
              <div className="about__social-label">Find us online</div>
              <div className="about__socials">
                <a
                  href="#"
                  className="social-chip social-chip--accent"
                  aria-label="X / Twitter"
                  onClick={(e) => e.preventDefault()}
                >
                  <XIcon size="0.875rem" />
                </a>
                <a
                  href="#"
                  className="social-chip social-chip--muted"
                  aria-label="Behance"
                  onClick={(e) => e.preventDefault()}
                >
                  <CircleDot size="0.875rem" />
                </a>
                <a
                  href="#"
                  className="social-chip social-chip--muted"
                  aria-label="Dribbble"
                  onClick={(e) => e.preventDefault()}
                >
                  <CircleDot size="0.875rem" />
                </a>
              </div>
            </div>

            <PillButton
              label="About Us"
              variant="outline"
              withArrow
              arrowDir="right"
              onClick={() => smoothScrollTo('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
