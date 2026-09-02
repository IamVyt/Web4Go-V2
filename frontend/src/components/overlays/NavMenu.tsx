import { useEffect } from 'react';
import { LogoMark, XIcon } from '../icons/Icons';
import { useClock } from '../../hooks/useClock';
import { useApp } from '../../context/AppContext';
import { WORK_CATEGORIES } from '../../lib/constants';

const NAV_ITEMS = [
  { index: '01', label: 'Home', target: 'home' },
  { index: '02', label: 'Work', target: 'works' },
  { index: '03', label: 'Services', target: 'services' },
  { index: '04', label: 'Who We Are', target: 'about' },
  { index: '05', label: 'Team', target: 'team' },
  { index: '06', label: 'FAQ', target: 'faq' },
  { index: '07', label: 'Articles', target: 'blog' },
  { index: '08', label: 'Contact', target: 'contact' },
];

export function NavMenu() {
  const { navOpen, closeNav, handleNav, filterWork } = useApp();
  const { time } = useClock();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && navOpen) {
        closeNav();
      }
    }
    if (navOpen) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [navOpen, closeNav]);

  return (
    <div className={`nav-menu ${navOpen ? 'open' : ''}`} id="navMenu">
      <div className="shell nav-menu__top">
        <div className="nav-menu__brand">
          <LogoMark size="1.25rem" /> Web4Go
        </div>
        <button
          type="button"
          className="nav-menu__close"
          id="menuCloseBtn"
          onClick={closeNav}
        >
          <XIcon size="0.875rem" />
          Close
        </button>
      </div>

      <nav className="nav-menu__nav shell">
        <ul className="nav-menu__list" id="navMenuList">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.target}>
              <button
                type="button"
                className="nav-menu__item"
                onClick={() => handleNav(item.target)}
                style={{
                  transitionDelay: navOpen ? `${80 + i * 45}ms` : '0ms',
                }}
              >
                <span className="nav-menu__item-index">{item.index}</span>
                <span className="nav-menu__item-label">{item.label}</span>
              </button>

              {item.target === 'works' && (
                <div className="nav-menu__subitems">
                  {WORK_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className="nav-menu__subitem"
                      onClick={() => filterWork(cat.id)}
                    >
                      <span className="nav-menu__subitem-dot" />
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="shell nav-menu__bottom">
        <span>Local time — <span id="navMenuTime">{time}</span></span>
        <button
          type="button"
          className="nav-menu__project-btn"
          id="navProjectBtn"
          onClick={() => handleNav('contact')}
        >
          Start a project →
        </button>
      </div>
    </div>
  );
}
