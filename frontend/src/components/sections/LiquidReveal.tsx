import { useRef } from 'react';
import { HERO_BEFORE_SRC, HERO_AFTER_SRC } from '../../lib/constants';
import { useLiquidReveal } from '../../hooks/useLiquidReveal';

export function LiquidReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useLiquidReveal(containerRef, HERO_AFTER_SRC);

  return (
    <div className="hero__reveal" id="liquidReveal" ref={containerRef}>
      <img
        src={HERO_BEFORE_SRC}
        alt="Web4Go studio hero"
        id="heroBaseImg"
      />
      <canvas aria-hidden="true" id="heroCanvas" ref={canvasRef} />
    </div>
  );
}
