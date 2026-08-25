import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
  delay = 0
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setRevealed(true), delay);
          } else {
            setRevealed(true);
          }
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold, delay]);

  return [ref, revealed];
}
