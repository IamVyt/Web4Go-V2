import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initLenis(): Lenis {
  window.scrollTo(0, 0);
  lenis = new Lenis({ smoothWheel: true });

  function raf(t: number) {
    lenis!.raf(t);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function stopScroll(): void {
  if (lenis) lenis.stop();
  const h = document.documentElement;
  h.style.position = 'relative';
  h.style.overflow = 'hidden';
  h.style.height = '100%';
}

export function startScroll(): void {
  if (lenis) lenis.start();
  const h = document.documentElement;
  h.style.removeProperty('position');
  h.style.removeProperty('overflow');
  h.style.removeProperty('height');
}

export function smoothScrollTo(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  setTimeout(() => {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset,
      behavior: 'smooth',
    });
  }, 50);
}
