import { useEffect, useRef } from 'react';
import { HERO_AFTER_SRC, BRUSH_RADIUS, BRUSH_DECAY } from '../lib/constants';

export function useLiquidReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  afterSrc: string = HERO_AFTER_SRC
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(devicePixelRatio, 2);
    const afterImg = new Image();
    if (afterSrc.startsWith('http')) {
      afterImg.crossOrigin = 'anonymous';
    }
    afterImg.src = afterSrc;

    let cw = 0, ch = 0, radius = 0;
    let coverCanvas: HTMLCanvasElement | null = null;
    let brushCanvas: HTMLCanvasElement | null = null;
    let brushCtx: CanvasRenderingContext2D | null = null;
    const points: { x: number; y: number }[] = [];
    let lastPt: { x: number; y: number } | null = null;
    let idle = 0;
    let drawing = false;
    let animId = 0;

    function coverFit(img: HTMLImageElement, w: number, h: number) {
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const scale = Math.max(w / iw, h / ih);
      const sw = iw * scale, sh = ih * scale;
      return { x: (w - sw) / 2, y: (h - sh) / 2, w: sw, h: sh };
    }

    function resizeCanvas() {
      const rect = container!.getBoundingClientRect();
      cw = Math.round(rect.width * dpr);
      ch = Math.round(rect.height * dpr);
      canvas!.width = cw;
      canvas!.height = ch;
      canvas!.style.width = rect.width + 'px';
      canvas!.style.height = rect.height + 'px';
      radius = BRUSH_RADIUS * dpr;

      if (afterImg.complete && afterImg.naturalWidth) {
        coverCanvas = document.createElement('canvas');
        coverCanvas.width = cw;
        coverCanvas.height = ch;
        const cc = coverCanvas.getContext('2d')!;
        const f = coverFit(afterImg, cw, ch);
        cc.drawImage(afterImg, f.x, f.y, f.w, f.h);
      }

      const diam = Math.ceil(radius * 2);
      brushCanvas = document.createElement('canvas');
      brushCanvas.width = diam;
      brushCanvas.height = diam;
      brushCtx = brushCanvas.getContext('2d');
    }

    afterImg.onload = () => {
      if (cw > 0 && ch > 0) {
        coverCanvas = document.createElement('canvas');
        coverCanvas.width = cw;
        coverCanvas.height = ch;
        const cc = coverCanvas.getContext('2d')!;
        const f = coverFit(afterImg, cw, ch);
        cc.drawImage(afterImg, f.x, f.y, f.w, f.h);
      }
    };
    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(container);
    resizeCanvas();

    function onPointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      const x = (e.clientX - rect.left) * dpr;
      const y = (e.clientY - rect.top) * dpr;
      if (x < -radius || y < -radius || x > cw + radius || y > ch + radius) {
        lastPt = null;
        return;
      }
      if (!lastPt) { lastPt = { x, y }; points.push({ x, y }); return; }
      const dx = x - lastPt.x, dy = y - lastPt.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const step = Math.max(radius * 0.3, 1);
      const n = Math.min(Math.ceil(dist / step), 60);
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        points.push({ x: lastPt.x + dx * t, y: lastPt.y + dy * t });
      }
      lastPt = { x, y };
    }
    window.addEventListener('pointermove', onPointerMove);

    function stamp(x: number, y: number) {
      if (!coverCanvas || !brushCanvas || !brushCtx) return;
      const diam = brushCanvas.width;
      const c = diam / 2;
      brushCtx.clearRect(0, 0, diam, diam);
      brushCtx.globalCompositeOperation = 'source-over';
      const grad = brushCtx.createRadialGradient(c, c, 0, c, c, c);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.55, 'rgba(255,255,255,0.82)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      brushCtx.fillStyle = grad;
      brushCtx.fillRect(0, 0, diam, diam);
      brushCtx.globalCompositeOperation = 'source-in';
      brushCtx.drawImage(coverCanvas, x - c, y - c, diam, diam, 0, 0, diam, diam);
      ctx!.globalCompositeOperation = 'source-over';
      ctx!.drawImage(brushCanvas, x - c, y - c);
    }

    function tick() {
      drawing = points.length > 0;
      if (drawing) idle = 0; else idle++;
      if (idle > 120) { ctx!.clearRect(0, 0, cw, ch); animId = requestAnimationFrame(tick); return; }

      const fade = drawing ? BRUSH_DECAY : Math.min(BRUSH_DECAY + idle * 0.004, 0.5);
      ctx!.globalCompositeOperation = 'destination-out';
      ctx!.fillStyle = `rgba(0,0,0,${fade})`;
      ctx!.fillRect(0, 0, cw, ch);

      if (drawing) {
        const pts = points.splice(0);
        for (const p of pts) stamp(p.x, p.y);
      }
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      ro.disconnect();
    };
  }, [containerRef, afterSrc]);

  return canvasRef;
}
