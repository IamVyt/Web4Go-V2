import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from '../icons/Icons';

export function CreateBand() {
  const [revealed, setRevealed] = useState(false);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <section className="create-band">
      <ul className="shell create-band__list" id="createBand" ref={listRef}>
        <li
          className={`create-band__item ${revealed ? 'revealed' : ''}`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="create-band__tile create-band__tile--light">We</div>
        </li>
        <li
          className={`create-band__item ${revealed ? 'revealed' : ''}`}
          style={{ transitionDelay: '120ms' }}
        >
          <div className="create-band__tile create-band__tile--accent">Build</div>
        </li>
        <li
          className={`create-band__item ${revealed ? 'revealed' : ''}`}
          style={{ transitionDelay: '240ms' }}
        >
          <div className="create-band__tile create-band__tile--dark">
            <ArrowRight size="2.25rem" />
          </div>
        </li>
        <li
          className={`create-band__item ${revealed ? 'revealed' : ''}`}
          style={{ transitionDelay: '360ms' }}
        >
          <div className="create-band__tile create-band__tile--ghost">Better</div>
        </li>
      </ul>
    </section>
  );
}
