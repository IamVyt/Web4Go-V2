import { useEffect, useRef, useState } from 'react';
import { LogoMark } from '../icons/Icons';
import { PillButton } from '../ui/PillButton';
import { useApp } from '../../context/AppContext';

export function Footer() {
  const { openModal, handleNav } = useApp();
  const ctaH2Ref = useRef<HTMLHeadingElement | null>(null);
  const [revealedLines, setRevealedLines] = useState(false);

  useEffect(() => {
    const el = ctaH2Ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealedLines(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__cta">
          <h2 className="footer__cta-h2" id="footerH2" ref={ctaH2Ref}>
            <span className="line-wrap">
              <span
                className={`line-inner ${revealedLines ? 'revealed' : ''}`}
                style={{ transitionDelay: '0ms' }}
              >
                Have a project
              </span>
            </span>
            <span className="line-wrap">
              <span
                className={`line-inner ${revealedLines ? 'revealed' : ''}`}
                style={{ transitionDelay: '100ms' }}
              >
                in mind? Let's get
              </span>
            </span>
            <span className="line-wrap">
              <span
                className={`line-inner ${revealedLines ? 'revealed' : ''}`}
                style={{ transitionDelay: '200ms' }}
              >
                to work.
              </span>
            </span>
          </h2>

          <PillButton
            label="Start a project"
            variant="light"
            withArrow
            arrowDir="up-right"
            id="footerCtaBtn"
            onClick={openModal}
          />
        </div>

        <div className="footer__columns">
          <div>
            <div className="footer__brand-name">
              <LogoMark size="1.25rem" /> Web4Go
            </div>
            <p className="footer__tagline">
              An independent studio crafting brands, products, and the systems that connect them.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Company</div>
            <div className="footer__col-links">
              <button type="button" onClick={() => handleNav('about')}>About</button>
              <button type="button" onClick={() => handleNav('careers')}>Careers</button>
              <a href="#partners">Partners</a>
              <button type="button" onClick={() => handleNav('contact')}>Contact</button>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Services</div>
            <div className="footer__col-links">
              <a href="#development">Development</a>
              <a href="#design">Design</a>
              <a href="#qa">Quality Assurance</a>
              <a href="#consulting">Consulting</a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Social</div>
            <div className="footer__col-links">
              <a href="#">X / Twitter</a>
              <a href="#">Behance</a>
              <a href="#">Dribbble</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <span>© 2025 Web4Go Studio. All rights reserved.</span>
          <div className="footer__legal-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>

      <div className="footer__watermark">WEB4GO</div>
    </footer>
  );
}
