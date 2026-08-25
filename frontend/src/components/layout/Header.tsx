import { useEffect, useState, useRef } from 'react';
import { LogoMark, GridIcon } from '../icons/Icons';
import { useClock } from '../../hooks/useClock';
import { useApp } from '../../context/AppContext';
import { smoothScrollTo } from '../../lib/scroll';
import { WORK_CATEGORIES } from '../../lib/constants';

export function Header() {
  const { introReady, openNav, handleNav, filterWork } = useApp();
  const { time, date } = useClock();
  const [revealed, setRevealed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (introReady) {
      const timer = setTimeout(() => setRevealed(true), 150);
      return () => clearTimeout(timer);
    }
  }, [introReady]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setWorkDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setWorkDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={`header ${revealed ? 'revealed' : ''} ${scrolled ? 'header--scrolled' : ''}`}
      id="siteHeader"
    >
      <div className="shell header__inner">
        <button
          type="button"
          className="header__brand"
          id="headerBrand"
          onClick={() => smoothScrollTo('home')}
        >
          <LogoMark size="1.25rem" />
          Web4Go
        </button>

        <ul className="header__nav">
          <li>
            <button type="button" onClick={() => handleNav('home')} aria-current="page">
              Home
            </button>
          </li>

          <li
            className={`header__nav-item header__nav-item--has-dropdown ${workDropdownOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="header__nav-trigger"
              onClick={() => {
                filterWork(null);
                setWorkDropdownOpen(false);
              }}
              aria-expanded={workDropdownOpen}
            >
              Work <span className={`caret ${workDropdownOpen ? 'caret--open' : ''}`}>▾</span>
            </button>

            <div className={`header__dropdown ${workDropdownOpen ? 'header__dropdown--open' : ''}`}>
              <div className="header__dropdown-panel">
                <div className="header__dropdown-list">
                  {WORK_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className="header__dropdown-item"
                      onClick={() => {
                        filterWork(cat.id);
                        setWorkDropdownOpen(false);
                      }}
                    >
                      <span className="header__dropdown-label">{cat.label}</span>
                      <span className="header__dropdown-arrow">↗</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <li>
            <button type="button" onClick={() => handleNav('services')}>
              Services
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleNav('team')}>
              Team
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleNav('blog')}>
              Articles
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleNav('contact')}>
              Contact
            </button>
          </li>
        </ul>

        <div className="header__right">
          <div className="header__clock">
            <span className="header__clock-label">Local time</span>
            <span className="header__clock-time" id="clockTime">{time}</span>
            <span className="header__clock-sep">•</span>
            <span className="header__clock-date" id="clockDate">{date}</span>
          </div>

          <button type="button" className="header__menu-btn" id="menuOpenBtn" onClick={openNav}>
            <GridIcon size="0.875rem" />
            <span className="header__menu-label">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
