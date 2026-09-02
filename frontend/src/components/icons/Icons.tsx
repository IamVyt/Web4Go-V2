interface IconProps {
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function LogoMark({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" width={size} height={size} className={className} style={style}>
      <path d="M 16.94 2.00 L 17.77 2.36 L 19.08 3.66 L 19.91 4.85 L 20.62 6.27 L 20.86 6.51 L 20.86 6.74 L 21.09 6.98 L 21.33 7.69 L 21.92 8.76 L 21.92 9.00 L 22.40 9.83 L 22.99 11.73 L 23.35 12.44 L 23.35 12.91 L 23.47 13.03 L 23.47 15.28 L 23.11 16.47 L 22.64 17.42 L 21.92 18.37 L 20.86 19.32 L 19.43 20.15 L 15.88 21.33 L 15.16 21.45 L 14.81 21.69 L 13.50 22.04 L 13.15 22.28 L 11.84 22.64 L 11.49 22.87 L 10.54 23.11 L 10.18 23.35 L 8.05 24.06 L 8.29 21.92 L 8.40 21.81 L 8.40 21.33 L 8.76 20.38 L 8.76 20.03 L 9.23 18.72 L 10.06 17.06 L 11.61 14.81 L 13.86 12.56 L 15.64 11.25 L 15.64 5.91 L 15.76 5.80 L 15.76 4.13 L 15.88 4.02 L 15.99 3.07 L 16.23 2.59 L 16.59 2.12 L 16.82 2.12 Z M 24.06 8.05 L 24.18 8.17 L 25.84 8.29 L 25.96 8.40 L 26.43 8.40 L 26.55 8.52 L 27.02 8.52 L 27.50 8.76 L 27.85 8.76 L 28.92 9.12 L 29.51 9.47 L 29.75 9.47 L 31.29 10.30 L 33.31 11.73 L 35.56 13.98 L 36.87 15.76 L 42.68 15.76 L 42.80 15.88 L 44.34 15.88 L 45.41 16.23 L 45.76 16.47 L 46.00 16.82 L 46.00 17.18 L 45.64 17.89 L 43.98 19.43 L 41.85 20.74 L 38.05 22.52 L 37.11 22.75 L 36.75 22.99 L 35.33 23.47 L 34.73 23.47 L 34.61 23.58 L 33.07 23.58 L 31.41 23.11 L 29.87 22.16 L 29.04 21.33 L 27.97 19.67 L 26.19 14.10 L 25.96 13.74 L 25.96 13.39 L 25.36 12.08 L 24.06 8.17 Z M 39.83 24.06 L 39.95 24.06 L 39.83 25.48 L 39.71 25.60 L 39.71 26.19 L 39.60 26.31 L 39.36 27.62 L 38.88 29.04 L 38.05 30.82 L 36.16 33.55 L 34.38 35.33 L 32.72 36.51 L 32.24 36.99 L 32.24 37.58 L 32.36 37.70 L 32.24 43.87 L 31.77 45.53 L 31.29 46.00 L 30.70 46.00 L 30.11 45.64 L 28.68 44.10 L 27.62 42.44 L 27.02 41.14 L 26.79 40.90 L 26.67 40.43 L 26.19 39.60 L 26.19 39.36 L 25.60 38.29 L 24.53 35.21 L 24.42 33.67 L 24.53 33.55 L 24.53 32.72 L 24.77 31.89 L 25.13 31.06 L 25.84 29.99 L 26.79 29.04 L 28.21 28.09 L 28.45 28.09 L 29.04 27.74 L 30.11 27.38 L 30.46 27.38 L 32.36 26.67 L 33.43 26.43 L 33.78 26.19 L 35.09 25.84 L 35.44 25.60 L 36.39 25.36 L 38.05 24.65 L 39.71 24.18 Z M 13.15 24.53 L 14.93 24.53 L 15.05 24.65 L 15.64 24.65 L 16.35 24.89 L 18.13 25.96 L 19.32 27.26 L 20.15 28.68 L 21.69 33.67 L 21.92 34.02 L 22.28 35.33 L 22.99 36.99 L 23.94 39.95 L 22.28 39.83 L 22.16 39.71 L 21.69 39.71 L 21.57 39.60 L 20.26 39.36 L 19.20 39.00 L 16.94 37.94 L 14.57 36.27 L 12.67 34.38 L 11.13 32.36 L 4.85 32.36 L 4.73 32.24 L 3.78 32.24 L 2.95 32.01 L 2.12 31.41 L 2.00 30.82 L 2.36 30.23 L 2.95 29.51 L 4.49 28.33 L 7.22 26.91 L 7.46 26.67 L 8.52 26.31 L 9.59 25.72 L 12.56 24.65 L 13.03 24.65 Z" />
    </svg>
  );
}

export function ArrowRight({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} style={style}>
      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} style={style}>
      <path d="M7 17L17 7" /><path d="M8 7h9v9" />
    </svg>
  );
}

export function Star({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className} style={style}>
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" />
    </svg>
  );
}

export function Globe({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width={size} height={size} className={className} style={style}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25z" />
      <path d="M2.75 12h18.5" />
    </svg>
  );
}

export function XIcon({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} style={style}>
      <path d="M4 4l16 16" /><path d="M20 4L4 20" />
    </svg>
  );
}

export function CircleDot({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={size} height={size} className={className} style={style}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GridIcon({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} style={style}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function CheckIcon({ size = '1em', className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} style={style}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

