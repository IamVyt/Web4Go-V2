import { useEffect, useState } from 'react';
import { LogoMark } from '../icons/Icons';
import { useApp } from '../../context/AppContext';
import { stopScroll, startScroll } from '../../lib/scroll';
import { LOADER_FILL_MS } from '../../lib/constants';

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function PageLoader() {
  const { setIntroReady } = useApp();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    stopScroll();
    let start: number | null = null;
    let animId = 0;

    function tick(now: number) {
      if (!start) start = now;
      const elapsed = now - start;
      const t = Math.min(elapsed / LOADER_FILL_MS, 1);
      const currentProgress = Math.round(easeInOutCubic(t) * 100);
      setProgress(currentProgress);

      if (t < 1) {
        animId = requestAnimationFrame(tick);
      } else {
        setIsExiting(true);
        setTimeout(() => {
          setIntroReady(true);
          startScroll();
          setIsRemoved(true);
        }, 700);
      }
    }

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [setIntroReady]);

  if (isRemoved) return null;

  return (
    <div
      className="loader"
      id="pageLoader"
      style={{
        transition: isExiting ? 'transform .7s cubic-bezier(.22,1,.36,1)' : undefined,
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0%)',
      }}
    >
      <div
        className="loader__inner"
        id="loaderInner"
        style={{
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? 'translateY(-12px)' : 'translateY(0)',
        }}
      >
        <div className="loader__brand">
          <LogoMark size="1.875rem" /> Web4Go
        </div>
        <p className="loader__tagline">Bangun aset digital masa depanmu melalui riset.</p>
      </div>

      <div className="loader__progress">
        <div className="loader__track">
          <div className="loader__fill" id="loaderFill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader__meta">
          <span>Loading</span>
          <span className="loader__counter" id="loaderCounter">
            {String(progress).padStart(3, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}
